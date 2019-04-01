/// <reference path="../../foundation/index.d.ts" />
declare namespace Microservice.Authentication.Struct {
    interface ICreateUserCommand extends Foundation.ICommand {
        getUsername(): string;
        getEmail(): string;
        getPassword(): string;
    }
}
