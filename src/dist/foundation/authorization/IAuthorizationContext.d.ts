declare namespace Microservice.Foundation {
    interface IAuthorizationContext {
        getEnvironment(): string;
        getEnvironmentId(): string;
        getIpAddress(): string;
        getLocation(): string;
        getDateTime(): Date;
    }
}
