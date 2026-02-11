---
title: Day 6 其他的陣列方法 slice & splice
date: 2023-09-20 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
cover: /images/default-cover.png
---

# Day 6 其他的陣列方法 slice & splice

前兩天介紹的 4 個方法:shift,unshift,pop,push 都有一個共通點是，都會修改原本的陣列。
接下來要介紹的 slice 與上述的不同，==不會改變原本的陣列==，會傳回一個新陣列值

<!-- more -->

### .slice()

引用 MDN 的敘述

> 方法會回傳一個新陣列物件，為原陣列選擇之 begin 至 end（不含 end）部分的淺拷貝（shallow copy）。而原本的陣列將不會被修改。

講的白話一點就是，帶入兩個參數分別是開始的 index 和結束的 index，然後把這之間 ==(不包含結束的)== 的陣列複製到新的陣列上，舉例如下:

```=javascript
let array=[1,2,3,4,5]
let newArray=array.slice(0,2)
console.log(newArray)//輸出:[1,2]
```

#### 有三點要注意

1.帶入的 index 參數為負值意思就是從尾部算，僅指定位置而已功能依舊不變還是把這之間(不包含結束的)的陣列複製到新的陣列上

```=javascript
let array=[1,2,3,4,5]
let newArray=array.slice(-0,-2)
console.log(newArray)//輸出:[1,2]
```

2.可以不帶參數，亦即完整的淺拷貝，也就是完全複製一個新陣列

```=javascript
let array=[1,2,3,4,5]
let newArray=array.slice()
console.log(newArray)//輸出:[1,2,3,4,5]
```

3.可以指輸入一個值，意思是從哪個 index 開始複製

```=javascript
let array=[1,2,3,4,5]
let newArray=array.slice(2)
console.log(newArray)//輸出:[3,4,5]
```

### .splice()

雖然這個函式與 slice 只差一個字但功用卻不一樣，此函式最不一樣的功能是在陣列中插入新成員，但會==改變原有的陣列==。
其用法稍微複雜一點，裡面需要帶三個參數 1.開始的 index 2.往後刪除的個數(可以為 0) 3.要加入的東西
**.splice(開始的 index,刪除個數,新東西)**

```=javascript
let array=[1,2,3,4,5]
array.splice(1,1,"a")
console.log(array)//輸出:[1,"a",3,4,5]
```

## 引用資料

MDN [Array.prototype.slice](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
