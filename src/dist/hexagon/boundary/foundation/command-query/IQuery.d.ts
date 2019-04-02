/// <reference path="../authorization/IAuthorizationAttributes.d.ts" />
declare namespace Microservice.Foundation {
    interface IQuery extends IAuthorizationAttributes {
        hasPagination(): boolean;
        getPaginationLimit(): number;
        getPaginationOffset(): number;
    }
}
