/// <reference path="../../foundation/index.d.ts" />
/// <reference path="../../struct/user/ICreateUserCommand.d.ts" />
declare namespace Microservice.Authentication.Api {
    interface ICreateUserCommandBuilder extends Foundation.ICommandBuilder<Struct.ICreateUserCommand> {
        setUsername(username: string): this;
        setEmail(email: string): this;
        setPassword(password: string): this;
    }
}
