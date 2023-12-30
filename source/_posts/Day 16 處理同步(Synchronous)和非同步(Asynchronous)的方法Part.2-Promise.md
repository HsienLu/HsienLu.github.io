---
title: Day 16 處理同步(Synchronous)和非同步(Asynchronous)的方法 Part.2-Promise
date: 2023-09-30 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
---

今天要來介紹的是現在比較常用處理非同步的方法分別是 promise，這裡會先大幅度的簡化 promise 的用法，來先理解整個 promise 的運作概念。

<!-- more -->

## promise

**1.創建 promise:** 為什麼需要創建 promise 因為它是一個建構函式，所以需要使用關鍵字 new 去創建 promise，裡面帶兩個參數分別為 resolve, reject。
resolve:代表執行成功地回傳值
reject:代表執行失敗的回傳值

**2.then&catch:** .then()代表著 promise 執行成功後所需要執行的區塊，而且可以接 reslove 的回傳值;.catch()代表 promise 執行失敗後所需要執行的區塊，而且可以接 reject 的回傳值。

**3.then 串接:** .then 是可以串接的，甚至是可以在 then 裡面再多 new 一個 Promise 物件，來處理多個非同步的問題

綜合上述提到的三點，範例如下:
我需要依序 console.log() 出 1,2,3,4，但是 2,3 有 setTimeout，所以需要利用 new promise 進行處理然後回傳處理成功。

```javascript
new Promise((resolve, reject) => {
  console.log(1);
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

今天就先簡單介紹現在處理非同步的方法，但是強調 promise 還有很多種用法，但如果以一個初學的角度來看還是先熟悉基礎用法，會在使用上比較不容易造成混淆

事實上，ES6 之後還有一個語法 async await，它是 promise 的語法糖，在寫法上比 promise 更簡潔易懂，這部份就留做明天來介紹吧~
