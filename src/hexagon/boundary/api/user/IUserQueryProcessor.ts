/// <reference path="../../foundation/index.ts" />
/// <reference path="../../struct/user/IUser.ts" />
/// <reference path="../../struct/user/IGetUsersQuery.ts" />

namespace Microservice.Authentication.Api {
  export interface IUserQueryProcessor {
    getUsers(query: Struct.IGetUsersQuery): Foundation.IQueryResult<Struct.IUser>
  }
}
