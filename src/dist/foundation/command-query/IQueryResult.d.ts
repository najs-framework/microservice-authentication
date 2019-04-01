/// <reference path="../authorization/IAuthorizationAttributes.d.ts" />
declare namespace Microservice.Foundation {
    interface IQueryResult<T> {
        getData(): T[];
        hasPagination(): boolean;
        getPaginationTotal(): number;
        getPaginationLimit(): number;
        getPaginationOffset(): number;
    }
}
