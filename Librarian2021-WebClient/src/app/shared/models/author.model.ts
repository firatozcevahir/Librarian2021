import { IBaseModel } from "./base.model";
import { IBookModel } from "./book.model";

export interface IAuthorModel extends IBaseModel{
  name: string;
  lastName: string;
  books: IBookModel[];
}
