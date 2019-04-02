/// <reference path="../authorization/IAuthorizationAttributes.ts" />

namespace Microservice.Foundation {
  export interface IQuery extends IAuthorizationAttributes {
    hasPagination(): boolean

    getPaginationLimit(): number

    getPaginationOffset(): number
  }
}
