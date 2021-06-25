import { OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MediaObserver,MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'flex-ui';
  mediaSub: Subscription | any;
  deviceXS: boolean;
constructor(private mediaObserver:MediaObserver){

}
  ngOnInit(){
this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
  console.log(result.mqAlias)

this.deviceXS= result.mqAlias==='xs'?true:false;
})
  }
ngOnDestroy(){
this.mediaSub.unsubscribe()
}
}

