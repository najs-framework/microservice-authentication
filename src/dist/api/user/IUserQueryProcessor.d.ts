/// <reference path="../../foundation/index.d.ts" />
/// <reference path="../../struct/user/IUser.d.ts" />
/// <reference path="../../struct/user/IGetUsersQuery.d.ts" />
declare namespace Microservice.Authentication.Api {
    interface IUserQueryProcessor {
        getUsers(query: Struct.IGetUsersQuery): Foundation.IQueryResult<Struct.IUser>;
    }
}
