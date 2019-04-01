/// <reference path="../authorization/IAuthorizationAttributes.ts" />

namespace Microservice.Foundation {
  export interface ICommand<T extends IAuthorizationResource = IAuthorizationResource>
    extends IAuthorizationAttributes<T> {}
}
