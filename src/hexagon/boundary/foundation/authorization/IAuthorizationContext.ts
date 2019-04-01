namespace Microservice.Foundation {
  export interface IAuthorizationContext {
    getEnvironment(): string

    getEnvironmentId(): string

    getIpAddress(): string

    getLocation(): string

    getDateTime(): Date
  }
}
