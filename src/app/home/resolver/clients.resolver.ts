import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientService } from '../client.service';
import { Client } from '../client';

@Injectable({
  providedIn: 'root'
})
export class ClientsResolver implements Resolve<Client[]> {
  constructor(private clientService: ClientService) { }

  resolve(): Client[] | Observable<Client[]> | Promise<Client[]> {
    return this.clientService.getClients();
  }
}
