import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList:Character[] = [{
    name:'Thrunks',
    power:10
  }]
  @Output()
  public onDelete:EventEmitter<string>=new EventEmitter();
  onDeleteCharacter(id?:string):void{
    //TODO: Emitir el Id del personaje
    if(!id)return;
    this.onDelete.emit(id)
  }

}
