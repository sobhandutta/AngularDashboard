import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { DataflowService } from '../../services/dataflow.service';

import { Globals } from '../../global';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

class Process {
  public showDetails = false;

  public selected = {
      process : '',
      server : ''
  };
  public message = {
      data: {},
      author: 'niiUirequest',
      message: 'this is a test message'
  };
  public data = {
      servers: [],
      server_status: []
  };
  public details = {};
}

@Component({
  selector: 'app-precess',
  templateUrl: './precess.component.html',
  styleUrls: ['./precess.component.scss'],
  providers: [ WebsocketService, DataflowService]
})
export class PrecessComponent extends Process implements OnInit, OnDestroy {
  private chartData: Array<any> = [];
  constructor(private dataflowService: DataflowService, private globals: Globals) {
    super();
    dataflowService.messages.subscribe(message => {
        globals.dataFlowData = message.data;
        console.log('Process: Response from websocket: ', globals.dataFlowData);
        this.gotoDetail();
        this.fillMissingServerInProcess();
      });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
      console.log('! Process can be destroyed.');
    }
    getServerRole(role) {
      return role;
    }
    isValidGrid(v) {
      if ( v === false) {
        return '';
      }else {
        return 'validGrid';
      }
    }
    generateData() {
      this.chartData = [];
      const tmpDetails: any = this.details;
      if (tmpDetails.trend) {
        for (const _trend of tmpDetails.trend ) {

          this.chartData.push([
            `${_trend.time}`,
            _trend.scanned, _trend.processed, _trend.queue
          ]);
        }
      }

      // console.log('???', this.chartData);
/*
      for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
        this.chartData.push([
          `Index ${i}`,
          Math.floor(Math.random() * 100)
        ]);
      }
*/
    }
    serverScannedPerSec(scanned) {
      return (scanned / (24 * 60 * 60)).toFixed(2);
    }
    getPercentage(scanned, processed) {
      return Math.round(processed * 100 / scanned);
    }
    gotoDetail(process = '', server = '') {
      if (server == null) {
        return;
      }

    if ( process !== '' && server !== '') {
      this.selected.process = process;
      this.selected.server = server;
      this.showDetails = true;
    }

    // tslint:disable-next-line:forin
    if (this.globals.dataFlowData.server_status) {
      for (const _item of this.globals.dataFlowData.server_status ) {
        if ( _item.process === this.selected.process) {
          for (const _server of _item.servers ) {
              if (_server.server === this.selected.server) {
                console.log('> gotoDetail', _server);
                this.details = _server;
              }
            }
        }
      }
    }
    this.data.servers = this.globals.dataFlowData.servers;
    this.data.server_status = this.globals.dataFlowData.server_status;
    this.generateData();
  }

  private fillMissingServerInProcess() {
    for (const _server_status of this.data.server_status ) {
      this.data.servers.forEach((_server, _sindex) => {
        let match = false;
        _server_status.servers.forEach((_processServer, _pindex) => {
            if (_server === _processServer.server) {
              match = true;
            }
        });

        if (!match) {
          _server_status.servers.splice( _sindex, 0, {server: null, valid: false});
        }
      });
    }
  }
}


