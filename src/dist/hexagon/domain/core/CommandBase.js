"use strict";
/// <reference path="../../boundary/foundation/index.ts" />
/// <reference path="../../boundary/index.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
class CommandBase {
    constructor() { }
    getAuthorizationSubject() {
        return this.authorizationSubject;
    }
    getAuthorizationResource() {
        return this.authorizationResource;
    }
    getAuthorizationAction() {
        return this.authorizationAction;
    }
    getAuthorizationContext() {
        return this.authorizationContext;
    }
}
CommandBase.BuilderBase = class {
    setAuthorizationSubject() { }
};
exports.CommandBase = CommandBase;
