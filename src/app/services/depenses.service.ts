import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import {Depense} from '../models/depense.model'
@Injectable({
    providedIn: 'root' // explique à angular que ce service doit être enregistré à la racine de l'app
})
export class DepensesService {

    constructor(private http: HttpClient){
        
    }

    depenses : Depense[]= [
        new Depense(1, 'Sac duffle bag', new Date(), 100, 'Bagages'),
        new Depense(2, 'Sac à dos', new Date(), 50, 'Bagages'),
        new Depense(3, 'Sac à main', new Date(), 30, 'Bagages'),
    ];

    getAllDepenses(): Depense[]{
        return this.depenses;
    }

    getDepenseById(id: number): Depense | undefined{
        return this.depenses.find(depense => depense.id == id);
    }
}