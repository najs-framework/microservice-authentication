/// <reference path="../../../hexagon/boundary/foundation/index.ts" />

import ICommandQueryDirector = Microservice.Foundation.ICommandQueryDirector
import ICommandQueryBuilder = Microservice.Foundation.ICommandQueryBuilder

export class JwtCommandQueryDirector implements ICommandQueryDirector {
  constructor() {}

  fillAuthorizationAttributes<T extends ICommandQueryBuilder<B>, B>(builder: T): T {
    return builder
  }
}
