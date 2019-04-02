/// <reference path="../../boundary/foundation/index.d.ts" />
/// <reference path="../../boundary/index.d.ts" />
import ICommand = Microservice.Foundation.ICommand;
import IAuthorizationSubject = Microservice.Foundation.IAuthorizationSubject;
import IAuthorizationResource = Microservice.Foundation.IAuthorizationResource;
import IAuthorizationAction = Microservice.Foundation.IAuthorizationAction;
import IAuthorizationContext = Microservice.Foundation.IAuthorizationContext;
export declare class CommandBase implements ICommand {
    private authorizationSubject;
    private authorizationResource;
    private authorizationAction;
    private authorizationContext;
    protected constructor();
    getAuthorizationSubject(): IAuthorizationSubject;
    getAuthorizationResource(): IAuthorizationResource | IAuthorizationResource[];
    getAuthorizationAction(): IAuthorizationAction;
    getAuthorizationContext(): IAuthorizationContext;
    static BuilderBase: {
        new (): {
            setAuthorizationSubject(): void;
        };
    };
}
