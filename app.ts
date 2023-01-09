var message: string = "Hello world!";
console.log(message);
//can use tsc app.ts change app.ts to app.js
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
let decLiteral: number = 6; // 十进制
let hexLiteral: number = 0xf00d; // 十六进制

let testname: string = "Runoob";
let years: number = 5;
let words: string = `您好，今年是 ${testname} 发布 ${years + 1} 周年`;

let flag: boolean = true;

// 在元素类型后面加上[]
let arr1: number[] = [1, 2];

// 或者使用数组泛型
let arr2: Array<number> = [1, 2];

let x: [string, number];
x = ["Runoob", 1]; // 运行正常
//x = [1, "Runoob"]; // 报错
console.log(x[0]); // 输出 Runoob

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue;
console.log(c); // 输出 2

//默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
//例如，我们将上面的例子改成从 1开始编号：
enum Color2 {
  Red = 1,
  Green,
  Blue,
}
let c2: Color2 = Color2.Green;

//或者，全部都采用手动赋值：

enum Color3 {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c3: Color3 = Color3.Green;

//枚举类型提供的一个便利是你可以由枚举的值得到它的名字。
//例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：

enum Color4 {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color4[2];

console.log(colorName); // 显示'Green'因为上面代码里它的值是2

function hello(): void {
  alert("Hello Runoob");
}

let y: any = 1; // 数字类型
y = "I am who I am"; // 字符串类型
y = false; // 布尔类型

let z: any = 4;
z.ifItExists(); // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
z.toFixed(); // 正确

let arrayList: any[] = [1, false, "fine"];
arrayList[1] = 100;

// 启用 --strictNullChecks
let m: number;
m = 1; // 编译正确
//m = undefined;    // 编译错误
//m = null;    // 编译错误

// 启用 --strictNullChecks
let n: number | null | undefined;
n = 1; // 编译正确
n = undefined; // 编译正确
n = null; // 编译正确

let p: never;
let q: number;

// 编译错误，数字类型不能转为 never 类型
//p = 123;

// 运行正确，never 类型可以赋值给 never类型
p = (() => {
  throw new Error("exception");
})();

// 运行正确，never 类型可以赋值给 数字类型
q = (() => {
  throw new Error("exception");
})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
  throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
  while (true) {}
}

const getValue = () => {
  return 0;
};

enum List {
  A = getValue(),
  B = 2, // 此处必须要初始化值，不然编译不通过
  C,
}
console.log(List.A); // 0
console.log(List.B); // 2
console.log(List.C); // 3
