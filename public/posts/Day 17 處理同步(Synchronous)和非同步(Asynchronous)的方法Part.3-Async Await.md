---
title: Day17 處理同步(Synchronous)和非同步(Asynchronous)的方法 Part.3-Async Await
date: 2023-10-01 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
cover: /images/default-cover.png
---

## Async Await

是 promise 的語法糖，這是一組雙生一對在正常的情況下無法分離的東西，那它是如何進行簡化的呢?
引用 MDN 解釋

<!-- more -->

> 當 async 函式被呼叫時，它會回傳一個 Promise。如果該 async 函式回傳了一個值，Promise 的狀態將為一個帶有該回傳值的 resolved。如果 async 函式拋出例外或某個值，Promise 的狀態將為一個帶有被拋出值的 rejected。
>
> async 函式內部可以使用 await 表達式，它會暫停此 async 函式的執行，並且等待傳遞至表達式的 Promise 的解析，解析完之後會回傳解析值，並繼續此 async 函式的執行。

沒錯還是一如既往地讓人很難以理解，那就直接來看範例吧!會比較清楚一點，讓我們先回顧昨日的範例。

## 範例

### Promise-昨日範例

依序 console.log() 出 1,2,3,4，但是 2,3 有 setTimeout，所以需要利用 new promise 進行處理然後回傳處理成功。

```javascript
console.log(1);
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(2);
    resolve("success1");
  }, 1000);
})
  .then((res) => {
    console.log(res);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(3);
        resolve("success1");
      }, 1000);
    });
  })
  .then((res) => {
    console.log(res);
    console.log(4);
  });
```

### Async Await 語法

上述是單純用 promise 寫的那加入 async await 的改寫就變成下方的型式

```javascript
async function callName() {
  console.log(1);

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2);

      resolve("success1");
    }, 1000);
  });

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(3);
      resolve("success2");
    }, 1000);
  });

  console.log(4);
}
```

比較一下之後我們可以發現幾個特性: 1.把需要排列執行順序的非同步函式用 async function 全部裝在一起 2.把需要被處理或是等待執行的非同步掛上 await，這時 await 的作用就是讓程式執行完成後才會繼續 3.注意 awiat 裡面需要一個 promise 作為回傳

所以整理一下 Async Await 基本語法如下:

```javascript
async function 函式名稱() {
  await new Promise((resolve, reject) => {
    放入需要被處理的非同步1;
  });

  await new Promise((resolve, reject) => {
    放入需要被處理的非同步2;
  });
}
```

如此一來簡單的 Async Await 語法架構就完成囉!

### Async Await 錯誤檢查

但是，眼尖的朋友應該會發現少了什麼東西，那就是 resolve 或是 reject 的結果要麼處理呢?有一種方法就是直接還給它，因為 await 的語法會 return 一個 promise 物件，所以其實 ++promise 的.then()或是.catch()還是能用的++。

又或是出動我們的老朋友**try catch**協助我們確認程式有沒有被正確執行也是一種選擇。

下面的範例是採用第一種用.then 的方式去檢查

```javascript
async function callName() {
  console.log(1);

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2);

      resolve("success1");
    }, 1000);
  }).then((res) => {
    console.log(res);
  });

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(3);
      resolve("success2");
    }, 1000);
  }).then((res) => {
    console.log(res);
  });

  console.log(4);
}
```

## 總結

其實說穿了 Async Await 就是一個語法糖，所以只要了解了 promise 然後記住 Async Await 的架構，對於非同步的處理方法來說學習上並不會有太多的阻礙，而且反而能使用更簡單易讀的方法來處理非同步問題。
