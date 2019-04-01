/// <reference path="../../foundation/index.ts" />

namespace Microservice.Authentication.Api {
  export interface ICreateUserCommandBuilder extends Foundation.ICommandBuilder {
    setUsername(username: string): this

    setEmail(email: string): this

    setPassword(password: string): this
  }
}
