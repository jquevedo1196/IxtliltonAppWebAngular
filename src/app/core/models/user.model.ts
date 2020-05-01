import {AuthorityModel} from "./authority.model";

export interface UserModel {
  password: null,
  username: string,
  authorities: AuthorityModel[];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean
}
