import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messages: AngularFireList<any>;
  chatID: any
  constructor(
    private db: AngularFireDatabase
  ) { }

  sendMessage(message, chatID, sender, receiver){
    this.db.list(`${chatID}`).update('meta', {senderId: sender, recieverId: receiver})
    this.db.list(`${chatID}/messages`).push({message: message, senderName: 'john full', timestap: new Date().getTime()})
  }

  getAllMessages(){
    return this.db.list('C6Iy0BzS5Ecd4bHI4k8wXPfobAx2C6Iy0BzS5Ecd4bHI4k8wXPfobAx2/messages').valueChanges()
  }
}
