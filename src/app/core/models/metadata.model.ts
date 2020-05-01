import {UserModel} from "./user.model";

export interface MetadataModel {
  mensaje: string;
  user: UserModel;
  token: string;
}
