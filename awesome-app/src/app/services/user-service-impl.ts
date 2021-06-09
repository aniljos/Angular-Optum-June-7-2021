import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Token, UserService } from "./user-service";

@Injectable()
export class UserServiceImpl extends UserService{
   
    private isAuth: boolean;

    constructor(private http: HttpClient){
        super();
    }
   
    validate(name: string, password: string): Promise<Token> {
        
        const url = "http://localhost:9000/login";
        
        return new Promise((resolve, reject) => {

            this.http.post<Token>(url, {name, password})
                        .subscribe((data) => {
                            this.isAuth = true;
                            resolve(data);
                        }, (err) => {

                            this.isAuth = false;
                            reject(err)
                        })
        })
    }
    isAuthenticated(): boolean {
        return this.isAuth;
    }

}