"use strict";
/// <reference path="../../../boundary/index.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const CommandBase_1 = require("../../core/CommandBase");
class CreateUserCommand extends CommandBase_1.CommandBase {
    constructor() {
        super();
    }
    getUsername() {
        return this.username;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
}
CreateUserCommand.Builder = class extends CommandBase_1.CommandBase.BuilderBase {
    setUsername() {
        // const command = new CreateUserCommand()
    }
    setEmail() { }
    setPassword() { }
};
exports.CreateUserCommand = CreateUserCommand;
