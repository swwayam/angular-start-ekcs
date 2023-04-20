import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})

export class UserItemComponent {
  @Input() channelName !: string;

  title: String;

  constructor(){
    this.title = "Daily News"
  }
}
