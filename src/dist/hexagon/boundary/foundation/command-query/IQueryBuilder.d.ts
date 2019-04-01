declare namespace Microservice.Foundation {
    interface IQueryBuilder<Query extends IQuery, T extends IAuthorizationResource = IAuthorizationResource> extends ICommandQueryBuilder<Query, T> {
        setPaginationLimit(limit: number): this;
        setPaginationOffset(limit: number): this;
    }
}
