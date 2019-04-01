/// <reference path="../../foundation/index.d.ts" />
/// <reference path="../../struct/user/IUser.d.ts" />
/// <reference path="../../struct/user/ICreateUserCommand.d.ts" />
declare namespace Microservice.Authentication.Api {
    interface IUserCommandProcessor {
        createUser(command: Struct.ICreateUserCommand): Struct.IUser;
    }
}
