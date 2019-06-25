import Column from './Column';

export default class Row {
  title: string;
  columns: Column[];
  constructor(title: string, columns: Column[]) {
    this.title = title;
    this.columns = columns;
  }
}
