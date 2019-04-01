namespace Microservice.Foundation {
  export interface ICommandBuilder<T extends IAuthorizationResource = IAuthorizationResource>
    extends ICommandQueryBuilder<ICommand<T>, T> {}
}
