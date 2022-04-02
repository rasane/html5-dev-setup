import incomingText from './index';
export default function component() {
  const element = document.createElement('div');
  element.innerHTML = "".concat('Hello ', incomingText('world'));
  return element;
}