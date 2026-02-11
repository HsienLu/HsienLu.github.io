---
title: Day 8 字串陣列互相變化的方法 split & join
date: 2023-09-22 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
cover: /images/default-cover.png
---

今天要來介紹的是字串怎麼變成陣列還有陣列怎麼變成字串，在陣列的方法中已經存在著與字串互相轉換的方法，只是分別是不同的語法，首先是字串轉陣列的方法

<!-- more -->

### .split()

顧名思義，split 有分開的意思，在這裡就是把字串分開成陣列那要怎麼分開?可以在小括弧裡面指定需要分開的字符，有三種狀況範例如下:

狀況一:裡面不帶值，會把一串字串包在同一個陣列的 index 裡，也就是長度為 1 的陣列

```javascript
let string = "12345";
let newArray = string.split();
console.log(newArray);
```

![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897454/ith2023-article-pic/day8-1_ckljel.png)

狀況二:裡面有帶參數但其值為空,會把一個字一個字的拆開來變成陣列，換句話說每個字就是一個 index

```javascript
let string = "12345";
let newArray = string.split("");
console.log(newArray);
```

![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897454/ith2023-article-pic/day8-2_a60vku.png)

狀況三:裡面有帶參數其值為空白鍵字符

```javascript
let string = "1 2 3 4 5"; //用空白鍵字符分開
let newArray = string.split(" ");
console.log(newArray);
```

![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897455/ith2023-article-pic/day8-3_wrhtf1.png)

### .join()

使用方法其實與 split 極為相似只是整個倒過來了，小括弧裡決定要用什麼連接成字串，以陣列而言通常是","預設也是","

```javascript
let array = [1, 2, 3, 4, 5];
let string = array.join(","); //決定要用什麼連接成字串，以陣列而言通常是","預設也是","
console.log(string);
```

以上是字串與陣列互換的方法~

## 引用資料

MDN [Array.prototype.join](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
