/// <reference path="../../../boundary/index.ts" />

import ICreateUserCommand = Microservice.Authentication.Struct.ICreateUserCommand

import { CommandBase } from '../../core/CommandBase'

export class CreateUserCommand extends CommandBase implements ICreateUserCommand {
  private username: string
  private email: string
  private password: string

  private constructor() {
    super()
  }

  getUsername(): string {
    return this.username
  }

  getEmail(): string {
    return this.email
  }

  getPassword(): string {
    return this.password
  }

  static Builder = class extends CommandBase.BuilderBase {
    setUsername() {
      // const command = new CreateUserCommand()
    }

    setEmail() {}

    setPassword() {}
  }
}
