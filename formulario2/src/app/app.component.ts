import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
id:string='';
nome:string='';
email:string='';
adress:string='';

  itens:Array<any>=[];


  onSubmit(f:NgForm){
    console.log(f.value)
  }


}
