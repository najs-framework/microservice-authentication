/// <reference path="../authorization/IAuthorizationAttributes.ts" />

namespace Microservice.Foundation {
  export interface IQuery<T extends IAuthorizationResource = IAuthorizationResource>
    extends IAuthorizationAttributes<T> {
    hasPagination(): boolean

    getPaginationLimit(): number

    getPaginationOffset(): number
  }
}
