import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
id:string='';
nome:String='';
email:String='';
adress:String='';

  itens:Array<any>=[];




  salvar(){
    this.itens.push(this.id)
  }

  onSubmit(f:NgForm){
    console.log(f.value)
  }


}
