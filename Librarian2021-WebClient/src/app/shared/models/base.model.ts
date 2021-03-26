export interface IBaseModel {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  recordState: RecordState;
}

export enum RecordState {
  Active = 1,
  Deleted = 2,
  Passive = 3
}
