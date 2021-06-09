export class Token{
    accessToken: string;
}

export abstract class UserService{

    abstract validate(name: string, password: string): Promise<Token>;
    abstract isAuthenticated(): boolean;
}