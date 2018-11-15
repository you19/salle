import {Injectable} from '@angular/core';
  import {Tournoi} from '../shared/tournoi';
@Injectable()
export class TournoiMockService{
private Tournois:Tournoi[]=[];
constructor(){
    let p1:Tournoi=new Tournoi("fg","fg","ft","fg","gt","fg");
    this.Tournois.push(p1);
}
public getTournois():Tournoi[]{
    return this.Tournois;
}
}