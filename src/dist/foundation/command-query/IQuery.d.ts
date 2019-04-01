/// <reference path="../authorization/IAuthorizationAttributes.d.ts" />
declare namespace Microservice.Foundation {
    interface IQuery<T extends IAuthorizationResource = IAuthorizationResource> extends IAuthorizationAttributes<T> {
        hasPagination(): boolean;
        getPaginationLimit(): number;
        getPaginationOffset(): number;
    }
}
