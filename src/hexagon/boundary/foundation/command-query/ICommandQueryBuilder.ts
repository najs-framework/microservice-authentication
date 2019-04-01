/// <reference path="../authorization/IAuthorizationSubject.ts" />
/// <reference path="../authorization/IAuthorizationAction.ts" />
/// <reference path="../authorization/IAuthorizationResource.ts" />
/// <reference path="../authorization/IAuthorizationContext.ts" />

namespace Microservice.Foundation {
  export interface ICommandQueryBuilder<T, R extends IAuthorizationResource = IAuthorizationResource> {
    reset(): this

    build(): T

    setAuthorizationSubject(subject: IAuthorizationSubject): this

    setAuthorizationResource(resource: R): this

    setAuthorizationAction(action: IAuthorizationAction): this

    setAuthorizationContext(context: IAuthorizationContext): this
  }
}
