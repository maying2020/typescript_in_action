declare function globalLib(option: globalLib.Options): void;

declare namespace globalLib{
  const version: string;
  function doSomething(): void
  interface Options{
    [key: string]: any;
  }
}