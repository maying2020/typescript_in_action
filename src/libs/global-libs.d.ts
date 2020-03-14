// 声明文件
declare function globalLib(options: globalLib.Options): void;

declare namespace globalLib {
    const version: string;
    function doSomething(): void;
    interface Options {
        [key: string]: any
    }
}

// 函数与命名空间的声明合并，相当于给这个函数增加了一些属性