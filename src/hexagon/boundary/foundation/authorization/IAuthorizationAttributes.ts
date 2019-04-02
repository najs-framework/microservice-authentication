/// <reference path="./IAuthorizationSubject.ts" />
/// <reference path="./IAuthorizationResource.ts" />
/// <reference path="./IAuthorizationAction.ts" />
/// <reference path="./IAuthorizationContext.ts" />

namespace Microservice.Foundation {
  export interface IAuthorizationAttributes {
    getAuthorizationSubject(): IAuthorizationSubject

    getAuthorizationResource(): IAuthorizationResource | IAuthorizationResource[]

    getAuthorizationAction(): IAuthorizationAction

    getAuthorizationContext(): IAuthorizationContext
  }
}
