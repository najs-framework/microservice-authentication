declare namespace Microservice.Foundation {
    interface IAuthorizationAction {
        getType(): 'create' | 'update' | 'delete' | 'read';
    }
}
