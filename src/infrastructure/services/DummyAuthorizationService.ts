/// <reference path="../../hexagon/boundary/index.ts" />

import IAuthorizationService = Microservice.Authentication.Spi.IAuthorizationService
import IAuthorizationAttributes = Microservice.Foundation.IAuthorizationAttributes

export class DummyAuthorizationService implements IAuthorizationService {
  hasAccess(attributes: IAuthorizationAttributes): boolean {
    return true
  }

  assertAccessPermitted(attributes: IAuthorizationAttributes): void {}
}
