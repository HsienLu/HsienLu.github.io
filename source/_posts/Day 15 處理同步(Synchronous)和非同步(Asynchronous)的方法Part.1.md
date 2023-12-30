---
title: Day 15 處理同步(Synchronous)和非同步(Asynchronous)的方法 Part.1
date: 2023-09-29 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
---

### 非同步所造成的問題

昨天介紹過了什麼是同步和非同步，今天要來介紹的是處理的方法，也就是說要來處理非同步所產的不確定性帶來的問題，比較具體的例子如下:

這是一個經典的例子，我期望的是 console.log()的順序為 1,2,3，但其實執行的結果為 1,3,2。
這是因為 setTimeout 產生了非同步行為，在 JavaScript 當中程式並不會等 setTimeout 執行而是會先把它丟到旁邊往下走等到時間到才會回來執行 setTimeout。

但是這樣就達不到我的需求，於是就產生了相對應的處理方法

<!-- more -->

```javascript
console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000); //setTimeout的意思是等多久才會執行，參數為1個回調函式+毫秒數這裡為1000
console.log(3);
```

### 處理非同步的方法

1. 回調函數（Callback Functions）： 回調函數是處理非同步非常古老的一種方法，有名的 callback Hell 就是因此誕生了，現在這個方法很少被使用，但還是介紹一下，其原理就是利用函式需要被呼叫的特性來達成想要程式執行的先後順序。利用上述的例子說明:

```javascript
function call1() {
  console.log(1);
}
function call2(callback) {
  setTimeout(function () {
    console.log(2);
    callback();
  }, 1000);
}

function call3() {
  console.log(3);
}

function callNumber(call1) {
  call1(call2(call3));
}

callNumber(call1);
```

就會長出上面這種奇形怪狀不易閱讀的程式碼，所以 ES6 就發明出更簡潔的 Promises 語法還有 async await 提拱使用，這些就留到明日在做介紹。
