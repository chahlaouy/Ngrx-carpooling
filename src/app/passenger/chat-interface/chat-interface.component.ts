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
  allMessages: any;
  constructor(
    private chatServ: ChatService
  ) { }

  ngOnInit() {
    this.chatServ.getAllMessages().subscribe(data => {
      this.allMessages = data
      console.log(this.allMessages)
    })
    this.uid = localStorage.getItem('uid')
  }

  send(){
    this.chatServ.sendMessage(this.message,'C6Iy0BzS5Ecd4bHI4k8wXPfobAx2C6Iy0BzS5Ecd4bHI4k8wXPfobAx2', this.uid, this.uid )
  }

}
