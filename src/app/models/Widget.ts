export default class Widget {
  type: string;
  text: string;
  size: number;
  constructor(type: string = 'HEADING', text: string = 'New Widget !!!', size: number = 1) {
    this.type = type;
    this.text = text;
    this.size = size;
  }
}
