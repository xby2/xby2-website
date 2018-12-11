import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

import { MessageService } from './message.service';

export interface RequestCacheEntry {
    url: string;
    response: HttpResponse<any>;
    lastRead: number;
}

const maxAge = 60 * 60 * 1000; // maximum cache age (60 minutes)

@Injectable()
export class RequestCache  {

    cache = new Map<string, RequestCacheEntry>();

    constructor(private messenger: MessageService) { }

    get(req: HttpRequest<any>): HttpResponse<any> | undefined {
        const url = req.urlWithParams;
        const cached = this.cache.get(url);

        if (!cached) {
            return undefined;
        }

        const isExpired = cached.lastRead < (Date.now() - maxAge);
        const expired = isExpired ? 'expired ' : '';
        this.messenger.add(
            `Found ${expired}cached response for "${url}".`);
        return isExpired ? undefined : cached.response;
    }

    put(req: HttpRequest<any>, response: HttpResponse<any>): void {
        const url = req.urlWithParams;
        this.messenger.add(`Caching response from "${url}".`);

        // save this request to the cache, set lastRead as now
        const entry = { url, response, lastRead: Date.now() };
        this.cache.set(url, entry);

        // remove expired cache entries
        const expired = Date.now() - maxAge;
        this.cache.forEach(cacheEntry => {
            if (cacheEntry.lastRead < expired) {
                this.cache.delete(cacheEntry.url);
            }
        });

        this.messenger.add(`Request cache size: ${this.cache.size}.`);
    }
}
