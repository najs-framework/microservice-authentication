declare namespace Microservice.Authentication.Struct {
    interface IUser {
        getId(): any;
        getUsername(): string;
        getEmail(): string;
    }
}
