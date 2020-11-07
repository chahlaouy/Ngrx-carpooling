import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service'

@Component({
  selector: 'app-chat-interface', 
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.scss'],
})
export class ChatInterfaceComponent implements OnInit {

  uid: any;
  message: any;
  constructor(
    private chatServ: ChatService
  ) { }

  ngOnInit() {
    this.chatServ.returnObservable().subscribe(data => {
      console.log(data)
    })
    this.uid = localStorage.getItem('uid')
  }

  send(){
    this.chatServ.sendMessage(this.message,this.uid + this.uid, this.uid, this.uid )
  }
}
