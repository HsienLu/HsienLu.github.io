---
title: Day 10 物件(Object)
date: 2023-09-24 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
cover: /images/default-cover.png
---

在前端這個花花綠綠的世界，物件是一個傳遞資料很重要的形式，大家熟悉的 json 檔，裡面大部分都是由各種陣列和物件所構成的，所以身為一個前端框架，怎麼樣處理物件也是需備知道的。

<!-- more -->

### 物件的特性

1.被大括弧包起來 2.裡面是由屬性組成而屬性是由屬性名稱和屬性值組成，如果有學過 PHP 的關聯式陣列的話，感覺有點像是鍵和鍵值。 3.屬性值可以是數字、字串、陣列、甚至其他物件或函數這裡會稱其為方法，
實際物件的樣子如下

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: false,
};
```

### 讀取物件的方法

陣列取值的方法有兩種:

**1.點記法(Dot notation)**
顧名思義就是用.來取值，直接看範例

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: false,
};
console.log(person.name); //輸出:John
```

**2.物件陣列取值(Bracket notation)**
在 MDN 又稱括弧記法，只是我覺得陣列取值這個名稱比較生動，其最大的優點是可以利用變數或是運算方法取值，範例如下:
(1).普通的

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: false,
};
console.log(person["name"]); //輸出:John
```

(2).變數

```javascript
let props = "name";
const person = {
  name: "John",
  age: 30,
  isStudent: false,
};
console.log(person[props]); //輸出:John
```

(3).運算方法:雖然這個範例有點硬要，但我希望還是能盡量簡化範例

```javascript
let props1 = "na";
let props2 = "me";
const person = {
  name: "John",
  age: 30,
  isStudent: false,
};
console.log(person[props1 + props2]); //輸出:John
```

### 建立物件的方法

建立物件的方法有許多種，比較常見的就是直接宣告又稱 Object Literal，還有 new 搭配建構函式，當然 ES6 也有新增的語法糖類別(class)跟 constructor 可以運用

**1. 直接宣告(Object Literal)**
顧名思義就是直接宣告一個物件，範例如下

```javascript
//建立物件
let people = {};
//新增內容至物件
people.name = "amy";
people.age = 18;
//輸出結果
console.log(people);
```

**2. new 搭配建構函式**
先建立一個增加物件的函式，然後呼叫函示建立物件

```javascript
//增加物件的函式
function people(name, age) {
  console.log(this);
  this.name = name;
  this.age = age;
}
//函示建立物件
let newPerson = new people("tom", 18);
console.log(newPerson);
```

**3. class 語法糖**
class 加上 constructor 也可以建立一個物件，範例如下:

```javascript
//增加物件的函式
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
//函示建立物件
let newPerson = new People("tom", 18);
console.log(newPerson);
```

上述是基本的物件的一些特性以及基本的使用方法，至少要先知道是怎麼來的以及怎麼使用，會對之後在 React 上進行資料處理的時候順暢一點。
