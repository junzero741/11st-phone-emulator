export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
  dataTransfer?: DataTransfer;
};
