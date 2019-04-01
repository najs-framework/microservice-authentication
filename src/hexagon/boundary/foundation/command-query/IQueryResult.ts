/// <reference path="../authorization/IAuthorizationAttributes.ts" />

namespace Microservice.Foundation {
  export interface IQueryResult<T> {
    getData(): T[]

    hasPagination(): boolean

    getPaginationTotal(): number

    getPaginationLimit(): number

    getPaginationOffset(): number
  }
}
