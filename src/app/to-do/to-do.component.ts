import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})

export class ToDoComponent implements OnInit {
  name:string="Terra";
  todo:string="";

  toDoList:Todo[]=[{todo:"Walk the dog", completed:false, edit:false}] 

    addItem(item:string){
      this.toDoList.push({todo:item, completed:false,edit:false});
    }
    
    editTodo(item:Todo){
      item.edit = true;
    }

    updateItem(update:string, item:Todo){
      item.todo = update;
      item.edit = false;
    }

    deleteTodo(item:Todo){
      this.toDoList.splice(this.toDoList.indexOf(item),1);
    }

    completeItem(item:Todo){
      item.completed=!item.completed;
    }

  constructor() { }

  ngOnInit(): void {
  }

}

type Todo = {todo:string, completed:boolean,edit: boolean};