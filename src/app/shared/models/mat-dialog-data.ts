import { MatDialogAction } from '../enums/mat-dialog-action';
import { IMatDialogData } from '../interafaces/imat-dialog-data';
export class MatDialogData<T> implements IMatDialogData<T> {
  action: MatDialogAction;
  entity: T;

  _finishFormButtonText: string|undefined = undefined;
  get finishFormButtonText(): any {
    if (this._finishFormButtonText) {
      return this._finishFormButtonText;
    } else if (this.action == MatDialogAction.Create) {
      return 'Add';
    } else {
      return 'Save';
    }
  }
  set finishFormButtonText(text: any) {
    this._finishFormButtonText = text;
  }
  constructor(action:any, entity?:any, finishFormButtonText?:any) {
    this.action = action;
    this.entity = entity;
    this.finishFormButtonText = finishFormButtonText;
  }
}
