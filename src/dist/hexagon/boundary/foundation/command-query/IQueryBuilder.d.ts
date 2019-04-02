declare namespace Microservice.Foundation {
    interface IQueryBuilder<Query extends IQuery> extends ICommandQueryBuilder<Query> {
        setPaginationLimit(limit: number): this;
        setPaginationOffset(limit: number): this;
    }
}
