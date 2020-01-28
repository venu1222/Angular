import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='My-First-Angular-App';
   serverstatus='';
   allowaddserver=false;
   servername=''
   servercreated=false;
  createServer(){
    
     return this.serverstatus='No Server was created';
   }
   constructor()
   {
    setTimeout(() => {
       this.allowaddserver=true;
    }, 5000);
   }
   updateserverstatus()
   {
     return this.serverstatus='Server was created'
   }
  // display(event:Event){
  //   console.log(event)
  //   this.serverstatus=(<HTMLInputElement>event.target).value;
  // }
  username='venu'
}
