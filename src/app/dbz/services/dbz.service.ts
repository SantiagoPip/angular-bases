import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character.interface';
import {v4 as uuid} from 'uuid'


@Injectable({providedIn: 'root'})//Tratalo como un servicio
export class DbzService {
  constructor() { }
  public characters:Character[] = [{
    id:uuid(),
    name:'Krillin',
    power:1000
  },
  {
    id:uuid(),
    name:'goku',
  power:9500
},{
  id:uuid(),
  name:'Vegeta',
  power:7000,
}];
 addCharacter(character:Character):void{
  const newCharacter:Character={
    id:uuid(),
    ...character
  }
  this.characters.push(newCharacter)
 }
 onDeleteCharacterById(id:String):void{
  this.characters = this.characters.filter(character => character.id !== id);
 }

}
