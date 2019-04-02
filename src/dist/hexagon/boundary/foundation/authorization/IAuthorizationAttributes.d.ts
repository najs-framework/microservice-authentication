/// <reference path="IAuthorizationSubject.d.ts" />
/// <reference path="IAuthorizationResource.d.ts" />
/// <reference path="IAuthorizationAction.d.ts" />
/// <reference path="IAuthorizationContext.d.ts" />
declare namespace Microservice.Foundation {
    interface IAuthorizationAttributes {
        getAuthorizationSubject(): IAuthorizationSubject;
        getAuthorizationResource(): IAuthorizationResource | IAuthorizationResource[];
        getAuthorizationAction(): IAuthorizationAction;
        getAuthorizationContext(): IAuthorizationContext;
    }
}
