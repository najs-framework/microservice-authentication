/// <reference path="../authorization/IAuthorizationAttributes.d.ts" />
declare namespace Microservice.Foundation {
    interface ICommand<T extends IAuthorizationResource = IAuthorizationResource> extends IAuthorizationAttributes<T> {
    }
}
