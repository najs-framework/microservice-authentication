/// <reference path="../../foundation/index.d.ts" />
declare namespace Microservice.Authentication.Api {
    interface ICreateUserCommandBuilder extends Foundation.ICommandBuilder {
        setUsername(username: string): this;
        setEmail(email: string): this;
        setPassword(password: string): this;
    }
}
