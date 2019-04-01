/// <reference path="../../foundation/index.ts" />
/// <reference path="../../struct/user/IUser.ts" />
/// <reference path="../../struct/user/ICreateUserCommand.ts" />

namespace Microservice.Authentication.Api {
  export interface IUserCommandProcessor {
    createUser(command: Struct.ICreateUserCommand): Struct.IUser
  }
}
