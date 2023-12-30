---
title: Day 3 查詢陣列的方法-forEach & map
date: 2023-09-17 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
---

在學習 React 之前，會需要瞭解一些 javascript 的基礎概念，常言道"javascript 學得好，react 沒煩惱"，其中陣列的方法倒是蠻常用到的，尤其.map()在資料的呈現處理上是蠻常用到的技巧，因為 map 的用法與 forEach 實在太相似了，所以從 forEach 來了解 map 我認為是一個不錯的方法，那就接著往下看~

<!-- more -->

### .forEach()

是一個遍歷陣列的方法，說的直接一點就是查詢陣列裡面的內容並對其做一些操作。裡面需要帶一個 callback function，裡面包含三個參數如下: 1.陣列裡面的值 2.陣列的 index 3.陣列本身

其方法是不能被==中斷的==，換句話說就是不能 return，也就是說不會回傳值。
範例如下:

```javascript
var array = [1, 2, 3, 4, 5];

array.forEach((value, index, array2) => {
  console.log("value:" + value);
  console.log("index:" + index);
  console.log(array2); //陣列本身
});
```

輸出結果:
![](https://hackmd.io/_uploads/ryPOQz5p3.png)

### .map()

同樣是可以遍歷陣列的一個方法，用法也跟 forEach 相似，也是需要帶一個 callback 裡面也是帶三個參數: 1.陣列裡面的值 2.陣列的 index 3.陣列本身

```javascript
var array = [1, 2, 3, 4, 5];

array.map((value, index, array2) => {
  console.log("value:" + value);
  console.log("index:" + index);
  console.log(array2); //陣列本身
});
```

![](https://hackmd.io/_uploads/ryJPBMqan.png)

但此方法==會回傳==一個新陣列，範例如下:

```javascript
var array = [1, 2, 3, 4, 5];

var newArray = array.map((value, index, array2) => {
  return value * 2;
});
console.log(newArray); //輸出結果:[2,4,6,8,10]
```

輸出結果:
![](https://hackmd.io/_uploads/S14XPfca3.png)

總之，forEach 主要用於執行操作而不生成新陣列，而 map 用於生成一個新陣列，其中包含經過處理後的值。
