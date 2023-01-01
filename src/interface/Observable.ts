import type { Observer } from "./Observer";

export interface Observable {
  register(overserver: Observer): void;
  unregister(observer: Observer): void;
  notify(): void;
}
