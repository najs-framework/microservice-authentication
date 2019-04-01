/// <reference path="IAuthorizationSubject.d.ts" />
/// <reference path="IAuthorizationResource.d.ts" />
/// <reference path="IAuthorizationAction.d.ts" />
/// <reference path="IAuthorizationContext.d.ts" />
declare namespace Microservice.Foundation {
    interface IAuthorizationAttributes<T extends IAuthorizationResource = IAuthorizationResource> {
        getAuthorizationSubject(): IAuthorizationSubject;
        getAuthorizationResource(): T;
        getAuthorizationAction(): IAuthorizationAction;
        getAuthorizationContext(): IAuthorizationContext;
    }
}
