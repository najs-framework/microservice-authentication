/// <reference path="../../foundation/index.d.ts" />
declare namespace Microservice.Authentication.Spi {
    interface IAuthorizationService {
        hasAccess(attributes: Foundation.IAuthorizationAttributes): boolean;
        assertAccessPermitted(attributes: Foundation.IAuthorizationAttributes): void;
    }
}
