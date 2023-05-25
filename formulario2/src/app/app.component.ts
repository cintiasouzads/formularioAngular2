import { Component } from '@angular/core';

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

  onDelete(index: number){
    this.itens.splice(index, 1);
  }

}
