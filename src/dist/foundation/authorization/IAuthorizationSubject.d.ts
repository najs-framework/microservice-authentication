declare namespace Microservice.Foundation {
    interface IAuthorizationSubject {
        isGuest(): boolean;
        getUserId(): any;
        hasOrganization(): boolean;
        getOrganizationId(): any;
    }
}
