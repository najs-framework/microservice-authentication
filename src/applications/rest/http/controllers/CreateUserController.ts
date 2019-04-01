/// <reference path="../../../../hexagon/boundary/index.ts" />

import IUserCommandProcessor = Microservice.Authentication.Api.IUserCommandProcessor
import ICreateUserCommandBuilder = Microservice.Authentication.Api.ICreateUserCommandBuilder
import { JwtCommandQueryDirector } from '../../lib/JwtCommandQueryDirector'

export class CreateUserController {
  protected builder: ICreateUserCommandBuilder
  protected processor: IUserCommandProcessor

  constructor(builder: ICreateUserCommandBuilder, processor: IUserCommandProcessor) {
    this.builder = builder
    this.processor = processor
  }

  invoke() {
    const jwt = new JwtCommandQueryDirector()
    const command = jwt.fillAuthorizationAttributes(this.builder).build()
    const result = this.processor.createUser(command)
    return result
  }
}
