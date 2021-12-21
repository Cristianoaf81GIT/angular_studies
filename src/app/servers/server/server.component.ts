import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private router: ActivatedRoute,
    private mainRouter: Router
    ) { }

  ngOnInit() {
    this.router.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
    // const id = +this.router.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.router.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // });
  }

  onEdit() {
    this.mainRouter
      .navigate(['edit'],
      {
        relativeTo: this.router,
        queryParamsHandling: 'preserve'
      });
  }

}
