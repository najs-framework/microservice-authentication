/// <reference path="../../../hexagon/boundary/foundation/index.d.ts" />
import ICommandQueryDirector = Microservice.Foundation.ICommandQueryDirector;
import ICommandQueryBuilder = Microservice.Foundation.ICommandQueryBuilder;
export declare class JwtCommandQueryDirector implements ICommandQueryDirector {
    constructor();
    fillAuthorizationAttributes<T extends ICommandQueryBuilder<B>, B>(builder: T): T;
}
