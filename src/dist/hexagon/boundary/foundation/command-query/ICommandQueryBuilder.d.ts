/// <reference path="../authorization/IAuthorizationSubject.d.ts" />
/// <reference path="../authorization/IAuthorizationAction.d.ts" />
/// <reference path="../authorization/IAuthorizationResource.d.ts" />
/// <reference path="../authorization/IAuthorizationContext.d.ts" />
declare namespace Microservice.Foundation {
    interface ICommandQueryBuilder<T> {
        reset(): this;
        build(): T;
        setAuthorizationSubject(subject: IAuthorizationSubject): this;
        setAuthorizationResource(resource: IAuthorizationResource | IAuthorizationResource[]): this;
        setAuthorizationAction(action: IAuthorizationAction): this;
        setAuthorizationContext(context: IAuthorizationContext): this;
    }
}
