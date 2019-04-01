namespace Microservice.Foundation {
  export interface IAuthorizationSubject {
    isGuest(): boolean

    getUserId(): any

    hasOrganization(): boolean

    getOrganizationId(): any
  }
}
