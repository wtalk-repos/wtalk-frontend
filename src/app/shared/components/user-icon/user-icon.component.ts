import { Component, Input, OnInit } from '@angular/core';
import { GeneralConstants } from 'src/app/core/constants/general';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.css']
})
export class UserIconComponent implements OnInit {
  @Input() avatar: any;
  @Input() online: boolean;
  defaultAvatar = GeneralConstants.defaultAvatar;
  
  constructor() { }

  ngOnInit(): void {
  }

}
