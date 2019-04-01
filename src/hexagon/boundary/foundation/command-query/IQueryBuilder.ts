namespace Microservice.Foundation {
  export interface IQueryBuilder<T extends IAuthorizationResource = IAuthorizationResource>
    extends ICommandQueryBuilder<IQuery<T>, T> {
    setPaginationLimit(limit: number): this

    setPaginationOffset(limit: number): this
  }
}
