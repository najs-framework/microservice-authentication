/// <reference path="../../boundary/foundation/index.ts" />
/// <reference path="../../boundary/index.ts" />

import ICommand = Microservice.Foundation.ICommand
import IAuthorizationSubject = Microservice.Foundation.IAuthorizationSubject
import IAuthorizationResource = Microservice.Foundation.IAuthorizationResource
import IAuthorizationAction = Microservice.Foundation.IAuthorizationAction
import IAuthorizationContext = Microservice.Foundation.IAuthorizationContext

export class CommandBase implements ICommand {
  private authorizationSubject: IAuthorizationSubject
  private authorizationResource: IAuthorizationResource
  private authorizationAction: IAuthorizationAction
  private authorizationContext: IAuthorizationContext

  protected constructor() {}

  getAuthorizationSubject(): IAuthorizationSubject {
    return this.authorizationSubject
  }

  getAuthorizationResource(): IAuthorizationResource | IAuthorizationResource[] {
    return this.authorizationResource
  }

  getAuthorizationAction(): IAuthorizationAction {
    return this.authorizationAction
  }

  getAuthorizationContext(): IAuthorizationContext {
    return this.authorizationContext
  }

  static BuilderBase = class {
    setAuthorizationSubject() {}
  }
}
