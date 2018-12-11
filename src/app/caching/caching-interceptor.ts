import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpHeaders, HttpRequest, HttpResponse,
    HttpInterceptor, HttpHandler
} from '@angular/common/http';

import { environment} from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RequestCache } from './request-cache.service';

/**
 * If request is cachable (GET requests to WP API) and
 * response is in cache return the cached response as observable.
 *
 * If not in cache or not cachable,
 * pass request through to next()
 */
@Injectable()
export class CachingInterceptor implements HttpInterceptor {
    constructor(private cache: RequestCache) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // continue if not cachable.
        if (!isCachable(req)) { return next.handle(req); }

        const cachedResponse = this.cache.get(req);

        // cache-or-fetch
        return cachedResponse ?
            of(cachedResponse) : sendRequest(req, next, this.cache);
    }
}

/** Is this request cachable? */
function isCachable(req: HttpRequest<any>) {
    // Don't cache local
    if (environment.usingLocalData) { return false; }
    // Only cache request to the CMS API
    const searchUrl = environment.baseCmsUrl;
    // Only GET requests are cachable
    return req.method === 'GET' &&
        // Only cache requests to the content API
        -1 < req.url.indexOf(searchUrl);
}

/**
 * Get server response observable by sending request to `next()`.
 * Will add the response to the cache on the way out.
 */
function sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCache): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
        tap(event => {
            // There may be other events besides the response.
            if (event instanceof HttpResponse) {
                cache.put(req, event); // Update the cache.
            }
        })
    );
}
