---
title: Day 5 操作陣列的方法 Part.2-shift & unshift
date: 2023-09-19 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
cover: /images/default-cover.png
---

接著昨天的陣列操作方法，今天會針對 shift,unshift 做介紹

![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897454/ith2023-article-pic/day5-1_bmz6gr.jpg)

<!-- more -->

### .shift()

shift 有移除的意思，這這裡也確實是移除陣列的值，但只有移除首位，裡面不帶參數，但對空陣列使用會回傳 undefined。範例如下

```javascript
let array = [1, 2, 3, 4, 5];
array.shift(); //第一次移除，會移除1
console.log(array);
array.shift(); //第二次移除，因為1被移除了，會移除2
console.log(array);
```

對空陣列使用

```javascript
let array = [];
array.shift(); //會回傳undefined
console.log(array);
```

結果如下:
![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897454/ith2023-article-pic/day5-2_jyng9j.png)

### .unshift()

在英文裡有 un 就有相反的意思，所以與上面的語法相反就是增加，它可以在陣列首位增加一個會多個值也可以是陣列，用法是在小括弧裡面塞進要添加的東西，範例如下:

可以加入單一值

```javascript
let array = [1, 2, 3, 4, 5];
array.unshift("a");
console.log(array);
```

![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897454/ith2023-article-pic/day5-3_halhye.png)

也可以加入多個值

```javascript
let array = [1, 2, 3, 4, 5];
console.log(array.unshift("a", "b"));
console.log(array);
```

![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897454/ith2023-article-pic/day5-4_ogz53r.png)

還可以加入一個陣列，不過裡面會真的變成一個陣列

```javascript
let array = [1, 2, 3, 4, 5];
console.log(array.unshift(["a", "b", "c"]));
console.log(array);
```

![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897454/ith2023-article-pic/day5-5_ntdvi6.png)

其實這組用法和 pop,push 用法幾乎一樣只是分別用在頭尾而已，接著還有其他的陣列用法，明天繼續~

### 另外補充-會回傳新陣列的語法 .concat()

介紹了很多陣列語法，他們都有共同的特點就是不會回傳新陣列，那會回傳新陣列的語法又是怎麼回事呢?
這裡以.concat()為例，這個語法的的作用在於合併兩個陣列，並回傳一個新陣列，用法如下:

```javascript
let a = [1, 2, 3]; //要合併的陣列a
let b = [4, 5, 6]; //要合併的陣列b
let c = a.concat(b); //合併完後的結果陣列c
console.log(a); //跟原本一樣
console.log(b); //跟原本一樣
console.log(c); //合併完後的結果
```

藉由上述的例子，我們可以看到，即使 a,b 陣列使用了 concat 的這個語法，但由 console.log(a)、console.log( c )得知原本的狀態都沒有改變，這就是 shift、和 shift 差別。下面請了 chatGPT 幫忙整理了會改變原始陣列的方法與不會改變原始陣列的方法，就當作是一個速查表吧~
| 會修改原始陣列 | 不會修改原始陣列 |
| -------------- | ---------------- |
| push() | concat() |
| pop() | slice() |
| shift() | join() |
| unshift() | map() |
| splice() | filter() |
| sort() | reduce() |
| reverse() | every() |
| fill() | some() |
| copyWithin() | find() |
| | findIndex() |
