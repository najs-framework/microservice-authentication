declare namespace Microservice.Foundation {
    interface ICommandQueryDirector {
        fillAuthorizationAttributes<T extends ICommandQueryBuilder<B>, B>(builder: T): T;
    }
}
