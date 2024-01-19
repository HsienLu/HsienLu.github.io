---
title: TypeScript-介面(interface) vs 型別別名(Aliases)
date: 2024-01-19 09:17:52
tags: TypeScript
categories: TypeScript
---

開頭先引用一下官方文件的說明

> Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

<!-- more -->

這段文字簡單來說就是兩著幾乎相同，但是有一個很大的差別就是介面可以被擴充，但是型別別名不行。那其實只要選擇擴充性高的話就好了呀，為什麼還要有型別別名呢？
以下就來比較差異和共同點吧!

### 宣告方式

一個是使用=，另個一個是物件的方式

##### 介面

```typescript
interface Person {
  name: string;
  age: number;
}
```

##### 型別別名

```typescript
type Person = {
  name: string;
  age: number;
};
```

### 宣告型別

##### 介面

不能宣告基本型別，只能宣告物件型別，而且可以重複宣告，並且會合併

```typescript
interface Person {
  name: string;
  age: number;
}
interface Person {
  account: string;
  money: number;
}
let Amy: Person = {
  name: "Amy",
  age: 18,
  acount: "AAA",
  money: 2000,
};
console.log(Amy);
```

##### 型別別名

可以宣告基本型別和物件型別，但是不能重複宣告，會報錯

```typescript
type Person = {
  name: string;
  age: number;
};
type Person = {
  account: string;
  money: number;
};
let Amy: Person = {
  name: "Amy",
  age: 18,
  acount: "AAA",
  money: 2000,
};
console.log(Amy);
```

### 擴充性

介面可以被擴充，型別別名也可以但是是藉由交集的方式，所以會有一些限制，例如不能使用 extends，但是可以使用&

##### 介面

```typescript
interface Person {
  name: string;
  age: number;
}
interface account extends Person {
  account: string;
  money: number;
}
let Amy: account = {
  name: "Amy",
  age: 18,
  acount: "AAA",
  money: 2000,
};
console.log(Amy);
```

##### 型別別名

```typescript
type Person = {
  name: string;
  age: number;
};
type account = {
  account: string;
  money: number;
} & Person;

let Amy: account = {
  name: "Amy",
  age: 18,
  acount: "AAA",
  money: 2000,
};

console.log(Amy);
```

### 總結

初步整理一下，介面和型別別名的差異，表格如下:
|| 介面 | 型別別名 |
|--------| -------- | -------- |
|宣告型別| 物件型別 | 物件型別和基本型別 |
|重複宣告| 可以，會合併 | 不能 |
|擴充| 可以，extend | 藉由交集的方式 |

回到一開始的問題，那為什麼還要有型別別名呢？

以初學的階段而言需要使用到的時機就在於**基本型別**吧!因為 ts 本身的限制，有些時候會需要使用到基本型別，但是又想要擴充，這時候就可以使用型別別名，但是如果是物件型別的話，那就可以使用介面，因為介面可以被擴充，所以就沒有必要使用型別別名了。
