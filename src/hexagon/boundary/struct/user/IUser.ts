namespace Microservice.Authentication.Struct {
  export interface IUser {
    getId(): any

    getUsername(): string

    getEmail(): string
  }
}
