import { IBaseModel } from "./base.model";
import { IBookModel } from "./book.model";

export interface IPersonModel extends IBaseModel{
  name: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  books: IBookModel[];
}
