namespace Microservice.Foundation {
  export interface IAuthorizationAction {
    getType(): 'create' | 'update' | 'delete' | 'read'
  }
}
