import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

//const NII_SERVICE_URL = 'ws://echo.websocket.org/';
const NII_SERVICE_URL = 'ws://localhost:8080';

export interface Message {
  data: any;
  author: string;
  message: string;
}

@Injectable()
export class DataflowService {

  // tslint:disable-next-line:indent
  public messages: Subject<Message>;

  constructor(wsService: WebsocketService) {
      this.messages = <Subject<Message>>wsService
          .connect(NII_SERVICE_URL)
          .map((response: MessageEvent): Message => {
              const data = JSON.parse(response.data);
              console.log(data);
              return {
                  data: data,
                  author: data.author,
                  message: data.message
              };
          });
  }

}
