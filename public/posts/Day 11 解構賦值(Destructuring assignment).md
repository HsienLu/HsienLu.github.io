---
title: Day11 解構賦值(Destructuring assignment)
date: 2023-09-25 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
cover: /images/default-cover.png
---

解構賦值是 ES6 新增的語法，根據 MDN 的說法**解構賦值 (Destructuring assignment) 語法是一種 JavaScript 運算式，可以把陣列或物件中的資料解開擷取成為獨立變數。**
簡單來說就是解構賦值是一種專門針對陣列或是物件的運算式，作用是把裡面的資料存成獨立變數。

<!-- more -->

**1.陣列的解構賦值**
基本寫法範例如下，=就像是一面鏡子==依序==對照著兩邊，下面範例示範了 2 個點
(1)用 a 和 b 對照著 array 中的 1 和 2
(2)用...rest 對照著剩下的值

```javascript
let array = [1, 2, 3, 4, 5];
let a, b, rest;
[a, b, ...rest] = array;
console.log(a); //輸出:1
console.log(b); //輸出:2
console.log(rest); //輸出:3,4,5
```

**2.物件的解構賦值**

在 React 中物件的解構賦值很常用在 props 的參數傳遞，最單純直接的用法就是{屬性名稱}，有點像陣列的物件取值那樣，也可以賦予新的變數名稱，範例如下
**(1) 取值**:把屬性名稱解構成新的變數並帶入原本的屬性值

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: false,
};

const {name, age} = person;
console.log(name);
console.log(age);
```

**(2) 賦予變數名稱**:利用鏡射的方式讓物件中的屬性值有了新的變數名稱

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: false,
};

const {
  name: AAA,
  age: BBB,
  isStudent: CCC,
} = {name: "John", age: 30, isStudent: false};
console.log(AAA);
console.log(BBB);
console.log(CCC);
```

\*\*(3) 搭配函式傳入引數，再傳入引數為物件時(常見在 React props 中)，可以利用解構賦值，讓語法更為簡潔

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: false,
};

const helloFunction = ({name}) => {
  console.log(`hello, ${name}`);
};
helloFunction(person);
```

當使用解構賦值（Destructuring Assignment）時，儘管它不是絕對必要的，但確實可以使您的程式碼更加簡潔、易讀，尤其在 React 中傳遞 props 時，這種做法很常見，而且也被廣為使用。

## 參考資料

[MDN 解構賦值](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
