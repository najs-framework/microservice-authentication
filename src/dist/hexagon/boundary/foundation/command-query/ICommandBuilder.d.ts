declare namespace Microservice.Foundation {
    interface ICommandBuilder<Command extends ICommand, T extends IAuthorizationResource = IAuthorizationResource> extends ICommandQueryBuilder<Command, T> {
    }
}
