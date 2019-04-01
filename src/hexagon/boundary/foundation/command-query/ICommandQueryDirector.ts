namespace Microservice.Foundation {
  export interface ICommandQueryDirector {
    fillAuthorizationAttributes<T extends ICommandQueryBuilder<B>, B>(builder: T): T
  }
}
