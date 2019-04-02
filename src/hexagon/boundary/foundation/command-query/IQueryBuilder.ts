namespace Microservice.Foundation {
  export interface IQueryBuilder<Query extends IQuery> extends ICommandQueryBuilder<Query> {
    setPaginationLimit(limit: number): this

    setPaginationOffset(limit: number): this
  }
}
