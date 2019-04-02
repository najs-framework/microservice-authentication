"use strict";
/// <reference path="../../hexagon/boundary/index.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
class DummyAuthorizationService {
    hasAccess(attributes) {
        return true;
    }
    assertAccessPermitted(attributes) { }
}
exports.DummyAuthorizationService = DummyAuthorizationService;
