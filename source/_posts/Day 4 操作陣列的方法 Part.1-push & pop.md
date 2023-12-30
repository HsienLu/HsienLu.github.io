---
title: Day 4 操作陣列的方法 Part.1-push & pop
date: 2023-09-18 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
---

相信大家都有看過類似下面這種圖，今天會針對 push,pop 做介紹

![](https://hackmd.io/_uploads/H17Xz9jTh.jpg)

<!-- more -->

### .push()

push 顧名思義就是推東西的意思，在這裡就把它當成是推某個東西都陣列的尾巴，此方法會將一個值或多個值也可以說是陣列加進陣列的尾端，回傳值為新陣列的長度。用法是在小括弧內塞進要加入的東西
範例如下:

可以加入單一值

```javascript
let array = [1, 2, 3, 4, 5];
array.push("a");
console.log(array);
```

也可以加入多個值

```javascript
let array = [1, 2, 3, 4, 5];
console.log(array.push("a", "b"));
console.log(array);
```

還可以加入一個陣列，不過裡面會真的變成一個陣列

```javascript
let array = [1, 2, 3, 4, 5];
console.log(array.push(["a", "b", "c"]));
console.log(array);
```

![](https://hackmd.io/_uploads/Hk3-kN362.png)

如果需要完整合併需要用展開運算子

```javascript
let array = [1, 2, 3, 4, 5];
console.log(array.push(...["a", "b", "c"]));
console.log(array);
```

![](https://hackmd.io/_uploads/S1gQk43ah.png)

### .pop()

pop 當作動詞在劍橋字典裡翻成-使什麼彈出的意思，在這裡它的作用是使陣列的末端彈出一個值，說直白一點就是刪除陣列末端的值。裡面不需要帶任何參數，但是如果對空陣列使用會回傳 undefined。

```javascript
let array = [1, 2, 3, 4, 5];
console.log(array.pop());
console.log(array);
```

附帶一提，pop 可以回傳被刪除的值，範例如下:

```javascript
let array = [1, 2, 3, 4, 5];
let popTest = array.pop();
console.log(popTest); //回傳刪除的值
console.log(array); //刪除後的原陣列
```

以上兩個語法為對陣列末端進增加以及刪除的方法，當然同時也有針對陣列開頭的增加刪除方法，留作明天介紹
