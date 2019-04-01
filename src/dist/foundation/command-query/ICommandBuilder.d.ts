declare namespace Microservice.Foundation {
    interface ICommandBuilder<T extends IAuthorizationResource = IAuthorizationResource> extends ICommandQueryBuilder<ICommand<T>, T> {
    }
}
