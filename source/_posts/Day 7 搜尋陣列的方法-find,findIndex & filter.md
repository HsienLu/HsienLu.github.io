---
title: Day 7 搜尋陣列的方法-find,findIndex & filter
date: 2023-09-21 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
---

# Day 7 搜尋陣列的方法-find,findIndex & filter

今天介紹的三個語法是針對陣列的搜尋功能，有 find(),findIndex(),filter()

<!-- more -->

### .find()

引用 MDN 的描述"find() 方法會回傳第一個滿足所提供之測試函式的元素值。否則回傳 undefined"
簡而言之，就是在陣列裡尋找需要的值並進行回傳需要 return，但是只會回傳一次，也竟是滿足條件的第一個值。
用法是裡面帶一個 callback，有三個參數: 1.被處理的元素 2.被處理元素的 index 3.被處理的陣列本身

```javascript
let array = [1, 2, 3, 4, 5];
let value = array.find((v, i, arr) => {
  return v > 3;
});
console.log(value);
```

### .findIndex()

用法語 find 一模一樣，只是 find 是回傳值，findIndex 是回傳 index，如果沒有符合條件的值會回傳-1
裡面一樣帶一個 callback，有三個參數: 1.被處理的元素 2.被處理元素的 index 3.被處理的陣列本身

```javascript
let array = [1, 2, 3, 4, 5];
let index = array.findIndex((v, i, arr) => {
  return v > 3;
});
console.log(index);
```

### filter

這是昨日介紹 find 的加強功能版，它可以把在陣列符合指定條件的值儲存成一個==新陣列==意味著不會修改到遠本的陣列，其用法也是大同小異帶一個 callback 包含如下三個參數，然後寫出需要的判斷式 1.被處理的元素 2.被處理元素的 index 3.被處理的陣列本身

```javascript
let array = [1, 2, 3, 4, 5];
let newArray = array.filter((v, i, arr) => {
  return v > 3;
});
console.log(newArray);
```

這三著其實都很常用到，並沒有誰好誰壞，端看用途而定。

## 引用資料

MDN [Array.prototype.find](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
