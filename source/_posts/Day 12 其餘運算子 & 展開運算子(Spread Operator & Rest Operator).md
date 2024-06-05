---
title: Day12 其餘運算子 & 展開運算子(Spread Operator & Rest Operator)
date: 2023-09-26 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
cover: /images/default-cover.png
---

接著就是傳說中的...了，正式名稱為其餘運算子和展開運算子，這個點點點同時具有兩種功能，也是在 React 中被廣泛使用的，接下來依序介紹

<!-- more -->

### **1.其餘運算子**

其實在昨天的文章中以已經有先使用這個與法了，這個功能的作用顧名思義就是可以接剩下來的值
引用 MDN 的說法:

> "這個語法可以讓我們表示==不確定數量的參數==，並將其視為一個==陣列==。"

在實際用途會在兩個地方，一個是在解構賦值，其實昨天的文章已經有偷偷用到了；另一個是在傳入不確定量參數的時候。

**(1) 解構賦值**
...rest 的作用就是用來接解構賦值命名完變數剩下來的值

```javascript
let array = [1, 2, 3, 4, 5];
let a, b, rest;
[a, b, ...rest] = array;
console.log(a); //輸出:1
console.log(b); //輸出:2
console.log(rest); //輸出:3,4,5
```

**(2) 傳入不確定量的參數**
這裡直接舉一個情境，我想要傳入一列數字但==不確定==有多少數字，並設計一個函示找出最小值，範例如下:

```javascript
function findMin(...Array) {
  //^^^^^^^^傳入不確定參數的量
  console.log(Array);
  let minValue = Math.min(...Array);
  //^^^那這個點點點又是什麼呢?
  console.log(minValue);
}
findMin(1, 2, 3, 4, 5);
```

相信大家都有注意到 Mata.min 的...又是什麼呢?這其實跟昨天文章提到的解構有關。

**(3) 解構其餘參數**
當初在學這個時候，還沒有想到這個點點點有這樣神奇的功能，直接引用 MDN 的定義

> 其餘參數可以被解構，換句話說，可以把這個**陣列**解開，並將各個元素取出成為個別的變數。請參考解構賦值。
>
> 其實這個功能我認為跟下面準備要提的展開運算子其實蠻相似的，只是 MDN 有另外再把它定義出來。
> 重點就是，其餘參數追根究柢就是一個==陣列==需要把陣列展開來，所以其實如果上述範例改成下面這個例子是會跑出 NaN 的，因為 Math.min()沒辦發接受傳入純陣列

```javascript
function findMin(...Array) {
  //^^^^^^^^傳入不確定參數的量
  console.log(Array);
  let minValue = Math.min(Array); //輸出:NaN
  //^^^那這個點點點又是什麼呢?
  console.log(minValue);
}
findMin(1, 2, 3, 4, 5);
```

### **2.展開運算子**

MDN 定義

> 展開運算子, 可以在函數調用/陣列構造時，將陣列表達式或者 string 在語法層面展開
> 其實講的簡單一點就是把一個陣列的中刮弧拿掉的意思，後還有一個特殊功能就是可以對類陣列進行展開。

**(1)陣列展開**
有名的淺拷貝就是一個經典的例子，如下:

```javascript
const array = [1, 2, 3, 4];
const newArray = [...array];
console.log(array);
console.log(newArray);
//上述兩個會是名稱不一樣，但是內容一模一樣的陣列。
```

其實在使用上，我會認為不太需要去區分的太仔細，或是刻意去記憶，因為其實本身在使用的情境上去做區分，所以多去使用它自然而然的就可以對這兩類與法做出一些區別。

### 參考資料

1.[MDN 其餘運算子](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters)

2.[MDN 展開運算子](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
