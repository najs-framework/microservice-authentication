/// <reference path="../../hexagon/boundary/index.d.ts" />
import IAuthorizationService = Microservice.Authentication.Spi.IAuthorizationService;
import IAuthorizationAttributes = Microservice.Foundation.IAuthorizationAttributes;
export declare class DummyAuthorizationService implements IAuthorizationService {
    hasAccess(attributes: IAuthorizationAttributes): boolean;
    assertAccessPermitted(attributes: IAuthorizationAttributes): void;
}
