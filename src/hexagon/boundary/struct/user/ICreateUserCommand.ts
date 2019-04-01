/// <reference path="../../foundation/index.ts" />

namespace Microservice.Authentication.Struct {
  export interface ICreateUserCommand extends Foundation.ICommand {
    getUsername(): string

    getEmail(): string

    getPassword(): string
  }
}
