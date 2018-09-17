import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MediaService } from '../service/media.service';
import { Media } from '../model/media';

@Injectable()
export class MediaResolver implements Resolve<Media> {
    constructor(private mediaService: MediaService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Media | Observable<Media> | Promise<Media> {
        return this.mediaService.getMedia(route.params.id);
    }
}
