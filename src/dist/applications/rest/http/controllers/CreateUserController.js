"use strict";
/// <reference path="../../../../hexagon/boundary/index.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const JwtCommandQueryDirector_1 = require("../../lib/JwtCommandQueryDirector");
class CreateUserController {
    constructor(builder, processor) {
        this.builder = builder;
        this.processor = processor;
    }
    invoke() {
        const jwt = new JwtCommandQueryDirector_1.JwtCommandQueryDirector();
        const command = jwt.fillAuthorizationAttributes(this.builder).build();
        const result = this.processor.createUser(command);
        return result;
    }
}
exports.CreateUserController = CreateUserController;
