---
title: Day 9 函式與箭頭函式
date: 2023-09-23 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
---

## 函式 function

在 React 中，會經常使用函數來建立和管理 React 中的各項元件，而 React 架構的網頁實際上又是由個元件組成的，所以在進入 React 之前了解一些 function 的觀念有其必要性存在。

<!-- more -->

### function 的宣告方法

大致上比較常用的有下列三種

第一種:最為常見使用有名稱的函式

```javascript
function callName() {
  console.log("Tom");
}
callName();
```

第二種:用變數宣告匿名函式,可以防止 function hoisting 的問題

```javascript
let callName = function () {
  console.log("Tom");
};
callName();
```

第三種:用物件

```javascript
let name = {
  callName: function () {
    console.log("Tom");
  },
};
name.callName();
```

### function 與 return 的特性

1. 函式必定有回傳值，如果沒有回傳值，值就是 undefined

```javascript
function callName() {
  console.log("Tom");
}
callName();
//會出現Tom與undefined
```

## ![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897455/ith2023-article-pic/day9-1_cn1xwf.png)

```javascript
function callName() {
  return "Tom";
}
callName();
//不會出現undefined
```

![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897455/ith2023-article-pic/day9-2_akmg38.png)

2. return 具有中斷函式的特性
3. return 後方可以加入表達式

### 函式預設參數值 function Default parameters

根據 MDN 的說法"函式預設參數 允許沒有值傳入或是傳入值為 undefined 的情況下，參數能以指定的預設值初始化。"，不過簡單來說就是給一個函式預設的值，範例如下

```javascript
function callName(name = "Tom") {
  console.log(`${name}`);
}
callName();
```

### IIFE 立即執行函數

顧名思義就是立即執行函數，雖然有點像廢話，不過就是讓函式在定義的時候馬上執行一次。

引用 MDN 的說明

> 他又稱為 Self-Executing Anonymous Function，是一種常見的設計模式，包含兩個主要部分：
> 第一個部分是使用 Grouping Operator () 包起來的 anonymous function。這樣的寫法可以避免裡面的變數污染到 global scope。
> 第二個部分是馬上執行 function 的 expression ()，JavaScript 引擎看到它就會立刻轉譯該 function。

其寫法有兩種，
第一種:第二個小括弧在外面

```javascript
(function callName(name = "Tom") {
  console.log(`${name}`);
})();
```

第二種:第二個小括弧在裡面

```javascript
(function callName(name = "Tom") {
  console.log(`${name}`);
})();
```

無論是哪一種就不用還需要額外呼叫函示囉
![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897455/ith2023-article-pic/day9-3_gl1jrm.png)

## 箭頭函式 arrow function

是一種函式的簡寫法，當然與原本 function 的形式還是有些許的不同

### 箭頭函式的寫法

以上面的例子而言寫成箭頭函式的形式如下:

```javascript
let callName = () => {
  console.log("Tom");
};
```

### 箭頭函式簡易的寫法

1.只有一個參數的時候可以不用加箭頭前面的小括號

```javascript
let multi = (a) => {
  console.log(a * 2);
};
```

2.如果只有一行表達式或是只有回傳一個值可以把大括弧拿掉，但是有這樣寫就意味者自帶 return，所以實際上是省略了{}還有 return

```javascript
let multi = (a) => a * 2;
```

### 箭頭函式的特性

1.this 通常指向全域或是說最近的非箭頭函式的 this 值 2.沒有建構函式 3.在 JSX 中可能會看到下面那這種()寫法這是因為已經只有一行的狀況下可以省略掉大括弧，那為什麼可以省略?因為在()為群組運算子 Grouping operator 視為同一行

```javascript
const callName = (props) => (
  <div>
    <h1>Tom</h1>
  </div>
);
```

## 引用資料

MDN [預設參數( Default parameters )](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Default_parameters)
MDN [IIFE](https://developer.mozilla.org/zh-TW/docs/Glossary/IIFE)
