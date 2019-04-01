/// <reference path="../../../../hexagon/boundary/index.d.ts" />
import IUserCommandProcessor = Microservice.Authentication.Api.IUserCommandProcessor;
import ICreateUserCommandBuilder = Microservice.Authentication.Api.ICreateUserCommandBuilder;
export declare class CreateUserController {
    protected builder: ICreateUserCommandBuilder;
    protected processor: IUserCommandProcessor;
    constructor(builder: ICreateUserCommandBuilder, processor: IUserCommandProcessor);
    invoke(): Microservice.Authentication.Struct.IUser;
}
