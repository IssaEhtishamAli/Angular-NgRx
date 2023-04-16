import {Injectable} from '@angular/core'
import { HttpService } from './http.service';
import { Observable, map } from 'rxjs';
import { User } from '../models/user';





@Injectable()
export class ApiService{

    /**
     *
     */
    constructor(private httpService:HttpService) {
        
    }
    getAllPosts():Observable<User[]>{
     return this.httpService.get('/users').pipe(map(data=>data as User[]))
    }
}