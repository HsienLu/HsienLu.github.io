---
title: 閉包 Closure
cover: /images/default-cover.png
date: 2024-09-21 09:53:13
tags: [Closure, javascript]
categories: javascript
subtitle:
---

什麼是閉包 (Closure)？

<!-- more -->

> 當內部 (inner) 函式被回傳後，除了自己本身的程式碼外，也可以 穿越 取得了內部函式「當時環境」的變數值，記住了執行當時的環境，這就是「閉包」。

參考 Kuro 大這篇文章說明:[重新認識 JavaScript: Day 19 閉包 Closure](https://ithelp.ithome.com.tw/articles/10193009)

舉個簡單的例子:

一個計數器的例子，每次調用內部函式時，count 增加，並返回當前的 count 值。

```javascript
function createCounter() {
  let count = 0; // 外部函式中的變數

  return function () {
    // 內部函式，形成閉包
    count += 1; // 每次調用內部函式時，count 增加
    return count; // 返回當前的 count 值
  };
}

const counter = createCounter(); // 建立閉包

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

但是我今天建立不同的變數去儲存閉包，發現每個變數都是獨立的，不會互相影響。

```javascript
function createCounter() {
  let count = 0; // 外部函式中的變數

  return function () {
    // 內部函式，形成閉包
    count += 1; // 每次調用內部函式時，count 增加
    return count; // 返回當前的 count 值
  };
}

const counter1 = createCounter(); // 建立閉包1
const counter2 = createCounter(); // 建立閉包2
const counter3 = createCounter(); // 建立閉包3

//測試閉包1
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

//測試閉包2
console.log(counter2()); // 1
console.log(counter2()); // 2

//測試閉包3
console.log(counter3()); // 1
```

所以閉包是可以取得內部函式，並取得當前變數，並記住當時的上下文環境。且每個閉包是獨立的，不會互相影響。
