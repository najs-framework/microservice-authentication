/// <reference path="../../foundation/index.ts" />
/// <reference path="../../struct/user/ICreateUserCommand.ts" />

namespace Microservice.Authentication.Api {
  export interface ICreateUserCommandBuilder extends Foundation.ICommandBuilder<Struct.ICreateUserCommand> {
    setUsername(username: string): this

    setEmail(email: string): this

    setPassword(password: string): this
  }
}
