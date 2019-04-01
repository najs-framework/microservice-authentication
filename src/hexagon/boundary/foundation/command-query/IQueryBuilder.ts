namespace Microservice.Foundation {
  export interface IQueryBuilder<Query extends IQuery, T extends IAuthorizationResource = IAuthorizationResource>
    extends ICommandQueryBuilder<Query, T> {
    setPaginationLimit(limit: number): this

    setPaginationOffset(limit: number): this
  }
}
