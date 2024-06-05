---
title: Day14 同步&非同步(Synchronous & Asynchronous)
date: 2023-09-28 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
cover: /images/default-cover.png
---

就中文來看這兩種的意思其實相當容易被搞混的，我自己常常在閱讀文章時也很常莫名的被這兩個名詞搞昏頭。所以我會直接用例子來幫助記憶接說明如下:

<!-- more -->

1. 同步(Synchronous):就是 A 處理完再處理再處理 C

   A -> B -> C->

2. 非同步(Asynchronous):就是可以同時處理 ABC

   -->A
   |
   -->B
   |
   -->C

那話又說回來 JavaScript 是屬哪一種呢?

引用 MDN 的定義

> Javascript 基本上是一個同步性的、阻塞的，且是跑在單一執行緒的程式語言，也就是在同一時間只能執行一個操作。但是瀏覽器所定義的函式和 API 允許我們註冊一個不該被同步執行的函式，且這個函式應該在某些事件發生時需要非同步的被呼叫（到達指定的時間、使用者透過滑鼠互動，或者取得透過從網路所取到的資料）。這代表你可以讓你的程式碼在同時間做一些事情而不需暫停或阻塞你的主執行緒。

簡單來說，MDN 很明確的定義 javascript 是一個同步性的語言，但可以處理或是說可以執行非同步的方法。下面的例子可以說明:

```javascript
console.log("registering click handler");

button.addEventListener("click", () => {
  console.log("get click");
});

console.log("all done");
```

PS:上述是簡化後的例子，真的需要執行的話如下網址:
https://codepen.io/Hsienlu/pen/PoXevrJ

可以發現實際在執行的時候，"all done"並不會等到"get click"被觸發時才會出現，而是會直接執行，所以才會說雖然 JavaScript 是同步性的語言，但可以處理需要非同步處理的事情。

但是，非同步的事情常常會具有不確定性存在(不知道哪個會先發生哪個會後發生)，於是就有了一些處理同步和非同步的方法，這些方法明天會繼續介紹。

## 參考資料

1.[非同步的 JavaScript 介紹](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Asynchronous/Introducing)
