import { Component, OnInit, TemplateRef  } from '@angular/core';
import { NgClass } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { WebsocketService } from '../../services/websocket.service';
import { DataflowService } from '../../services/dataflow.service';

import { Globals } from '../../global';

@Component({
  selector: 'app-dataflow',
  templateUrl: './dataflow.component.html',
  styleUrls: ['./dataflow.component.scss'],
  providers: [ WebsocketService, DataflowService ]
})
export class DataflowComponent implements OnInit {
  private chartData: Array<any> = [];
  public showDetails = false;
  public selected = {
    process : 'Data Collection Service',
    id : 'dcp'
  };
  public details = {
    name: '',
    process: [],
    // {process:'kafka', status:'live', scanned:1000, processed:6000, queue:4000, servers:[{server:'nii.kafka.com',status:'live'}]}
    totalScanned: 0,
    totalProcessed: 0,
    totalQueue: 0,
    trend: []
  };

  totalCall = {
    scannedPs: 0,
    processedPs: 0,
    scanned: 0,
    processed: 0,
    queue: 0,
  };
  flowData = [
    {
      name: 'Data Collection Service',
      id: 'dcp',
      process: ['dcp'],
      next: 'Log Process Queue',
      scanned: 0,
      processed: 0,
      queue: 0,
      processedPercent: 0,
      queuePercent: 0,
      servers: []
    }, {
      name: 'Log Process Queue',
      id: 'lpq',
      process: ['storm', 'kafka'],
      next: 'Database Processor',
      scanned: 0,
      processed: 0,
      queue: 0,
      processedPercent: 0,
      queuePercent: 0,
      servers: []
    }, {
      name: 'Database Processor',
      id: 'dp',
      process: ['sql'],
      next: 'Staging Table',
      scanned: 0,
      processed: 0,
      queue: 0,
      processedPercent: 0,
      queuePercent: 0,
      servers: []
    }, {
      name: 'Staging Table',
      id: 'stt',
      process: ['sql'],
      next: 'Summary Table',
      scanned: 0,
      processed: 0,
      queue: 0,
      processedPercent: 0,
      queuePercent: 0,
      servers: []
    }, {
      name: 'Summary Table',
      id: 'sut',
      process: ['sql'],
      scanned: 0,
      processed: 0,
      queue: 0,
      processedPercent: 0,
      queuePercent: 0,
      servers: []
    }
  ];

  private message = {
    data: {},
    author: 'niiUirequest',
    message: 'this is a test message'
  };

  public modalRef: BsModalRef; // {1}

  constructor(private dataflowService: DataflowService,
     private modalService: BsModalService, private globals: Globals) {
    dataflowService.messages.subscribe(message => {
       globals.dataFlowData = message.data;
       console.log('Dataflow: Response from websocket: ', globals.dataFlowData);
       this.processDataFlow( globals.dataFlowData );

    });
  } // {2}

  processDataFlow(data) {
    //this.totalCall.scanned = 0;
    //this.totalCall.processed = 0;
    //this.totalCall.queue = 0;

    for (const _flowDataItem of this.flowData ) {
      _flowDataItem.scanned = 0;
      _flowDataItem.processed = 0;
      _flowDataItem.queue = 0;
      _flowDataItem.servers = [];

      for (const _flowDataProcess of _flowDataItem.process ) {
        for (const _item of data.server_status ) {
            if ( _item.process === _flowDataProcess) {
              // console.log('> gotoDetail', _item.process);

              for (const _server of _item.servers ) {
                    // console.log('> gotoDetail', _server);
                    _flowDataItem.scanned += (_server.processed + _server.queue); // _server.scanned;
                    _flowDataItem.processed += _server.processed;
                    _flowDataItem.queue += _server.queue;
                    //this.totalCall.scanned += (_server.processed + _server.queue); // _server.scanned;
                    //this.totalCall.processed += _server.processed;
                    //this.totalCall.queue += _server.queue;
                    _flowDataItem.servers.push(_server.server);
              }
          }
        }
      }
      _flowDataItem.processedPercent = Math.round(_flowDataItem.processed * 100 / _flowDataItem.scanned);
      _flowDataItem.queuePercent = Math.round(_flowDataItem.queue * 100 / _flowDataItem.scanned);

    }
    this.gotoDetail();
  }
  getProcessedPercent() {
    return 0;// Math.round( this.totalCall.processed * 100 / this.totalCall.scanned ) + 'px';
  }
  getInQueuePercent(pVal) {
    return pVal + '%';
  }
  getServerRole(role) {
    return role;
  }
  getProcessedClass(name) {
    if ( name === this.selected.process ) {
       return 'entryhover';
    }
    return '';
  }
  ngOnInit() {
  }
  generateData(trend, data, process) {
    console.log('data', trend, data, process);

    const tmpDetails: any = data;
    if (tmpDetails) {
      for (const _trend of tmpDetails ) {
        let datafound = false;
        for (const _chartData of this.chartData ) {
            if ( _chartData[0] === _trend.time) {
              _chartData[1] += _trend.scanned;
              _chartData[2] += _trend.processed;
              _chartData[3] += _trend.queue;
              datafound = true;
            }
        }
        if (datafound === false ) {
          this.chartData.push([
            `${_trend.time}`,
            _trend.scanned, _trend.processed, _trend.queue
          ]);
        }

      }
    }


    /*
    if(this.details.trend){
      for (const _trend of data ) {
        this.chartData.push([
          `${_trend.time}`,
          _trend.scanned
        ]);
      }
    }
    */
    /*
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `${i} am`,
        Math.floor(Math.random() * 100)
      ]);
    }
    */
    // console.log('this.chartData', this.chartData);
  }

  gotoDetail(id = '', process = '') {
    if ( id !== '') {
      this.selected.id = id;
    }
    if ( process !== '') {
      this.selected.process = process;
    }
    if ( this.selected.id !== '' ) {
       this.showDetails = true;
    }
console.log('this.selected.id', this.selected.id);


    this.details.totalProcessed = 0;
    this.details.totalScanned = 0;
    this.details.totalQueue = 0;
    this.chartData = [];

    for (const _flowDataItem of this.flowData ) {
      if (_flowDataItem.name === this.selected.process) {
        this.details.name = this.selected.process;
        this.details.totalProcessed = _flowDataItem.processed;
        this.details.totalScanned = _flowDataItem.scanned;
        this.details.totalQueue = _flowDataItem.queue;
        this.details.process = [];
        console.log('_flowDataItem', this.details.totalProcessed);

        for (const _flowDataProcess of _flowDataItem.process ) { // [storm, kafka]
          const processTmp = {process: '', pstatus: '', scannedPs: 0, processedPs: 0,
              scanned: 0, processed: 0, queue: 0, servers: [], trend: [] };
          for (const _item of this.globals.dataFlowData.server_status ) {

            if (_flowDataProcess === _item.process) {
              processTmp.process = _item.process;
              for (const _server of _item.servers ) {
                const serverTmp = {server: _server.server, pstatus: _server.pstatus, role: _server.role};
                processTmp.servers.push(serverTmp);

                processTmp.scanned += _server.scanned;
                processTmp.processed += _server.processed;
                processTmp.queue += _server.queue;

                this.generateData(processTmp.trend, _server.trend, this.selected.process);
              }
            }
          }
          processTmp.scannedPs += processTmp.scanned / (24 * 60 * 60);
          processTmp.processedPs += processTmp.processed / (24 * 60 * 60);

          this.details.process.push(processTmp);
          console.log('>>>', processTmp);
        }
      }
    }
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }

  sendMsg() {
    console.log('new message from client to websocket: ', this.message);
    this.dataflowService.messages.next(this.message);
    this.message.message = '';
  }

}

class DataFlow {

}
