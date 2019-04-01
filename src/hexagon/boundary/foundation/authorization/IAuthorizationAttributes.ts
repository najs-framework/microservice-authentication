/// <reference path="./IAuthorizationSubject.ts" />
/// <reference path="./IAuthorizationResource.ts" />
/// <reference path="./IAuthorizationAction.ts" />
/// <reference path="./IAuthorizationContext.ts" />

namespace Microservice.Foundation {
  export interface IAuthorizationAttributes<T extends IAuthorizationResource = IAuthorizationResource> {
    getAuthorizationSubject(): IAuthorizationSubject

    getAuthorizationResource(): T

    getAuthorizationAction(): IAuthorizationAction

    getAuthorizationContext(): IAuthorizationContext
  }
}
