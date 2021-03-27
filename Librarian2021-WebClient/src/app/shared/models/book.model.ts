import { IBaseModel, RecordState } from "./base.model";
import { IPersonModel } from "./person.model";
import { IAuthorModel } from "./author.model";

export interface IBookModel extends IBaseModel {
  title: string;
  publishYear: Date;
  genre: string;
  startDate: Date;
  endDate: Date;
  isOccupied: boolean;
  personId: number;
  person: IPersonModel;
  author: IAuthorModel;
  authorId: number;
}
