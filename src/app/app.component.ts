import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string="Terra";
  todo:string="";
  toDoList:{todo:string, completed:boolean}[]=[]
  showData:boolean = false;

    addItem(item:string){
      this.toDoList.push({todo:item, completed:true});
    }

    showInfo(){
      this.showData=true;
      console.log(this.showData);
    }
}
