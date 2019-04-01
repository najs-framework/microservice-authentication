declare namespace Microservice.Foundation {
    interface IAuthorizationResource {
        getType(): string;
        getId(): any;
        getAttributes(): object;
    }
}
