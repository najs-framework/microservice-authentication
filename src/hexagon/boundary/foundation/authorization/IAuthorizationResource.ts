namespace Microservice.Foundation {
  export interface IAuthorizationResource {
    getType(): string

    getId(): any

    getAttributes(): object
  }
}
