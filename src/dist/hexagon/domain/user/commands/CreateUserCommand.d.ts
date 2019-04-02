/// <reference path="../../../boundary/index.d.ts" />
import ICreateUserCommand = Microservice.Authentication.Struct.ICreateUserCommand;
import { CommandBase } from '../../core/CommandBase';
export declare class CreateUserCommand extends CommandBase implements ICreateUserCommand {
    private username;
    private email;
    private password;
    private constructor();
    getUsername(): string;
    getEmail(): string;
    getPassword(): string;
    static Builder: {
        new (): {
            setUsername(): void;
            setEmail(): void;
            setPassword(): void;
            setAuthorizationSubject(): void;
        };
    };
}
