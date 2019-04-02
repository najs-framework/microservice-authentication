/// <reference path="../../foundation/index.ts" />

namespace Microservice.Authentication.Spi {
  export interface IAuthorizationService {
    hasAccess(attributes: Foundation.IAuthorizationAttributes): boolean

    assertAccessPermitted(attributes: Foundation.IAuthorizationAttributes): void
  }
}
