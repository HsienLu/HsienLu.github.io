---
title: Day 22 React 的語法-JSX
date: 2023-10-06 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
---

JSX 為 React 的語法，簡單的來說就是可以使用 JavaScript 來撰寫 HTML 標籤，然而官方文件也有提到，不用 JSX 也是可以，但多數的 React 開發者鑑於 JSX 便利性還是會選擇 JSX 語法，事實上也是如此 JSX 帶給我們許多方便的體驗，但相對的需要遵守一些規則。

<!-- more -->

## JSX 的規則

### 1. JSX 的語法最外層只能有一個根元素

這部份昨天也有稍微提到了，原因是因為到底 JSX 還是 JavaScript，而一個函式只能傳回一個東西而已。就像下面的例子，在怎麼樣複雜最外面一層等只會有一個根元素，通常是 div 標籤或是<></>(Fragment)

```jsx
<>
  <p>
    <ul>
      <li>132</li>
      <li>132</li>
      <li>123</li>
    </ul>
  </p>
  <p>
    <ul>
      <li>123</li>
      <li>123</li>
      <li>132</li>
    </ul>
  </p>
</>
```

### 2.標籤需要自閉合

說穿了就是在只有單一標籤的後方加上/這樣舉例如下:

```jsx
<img/>
<br/>
<input/>

```

### 3.使用小駝峰式命名給標籤的屬性名稱，舉例如下的 className

```jsx
<img src={reactLogo} className="logo react" alt="React logo" />
```

#### Note:

因為 class 為保留字，所以在 JSX 中 class 就寫成**className**;同理 for 寫成**htmlFor**

### 4.布林值,null,undefined 不會被渲染

```jsx
<>
  不會被渲染
  <div></div>
  <div>{false}</div>
  <div>{null}</div>
  <div>{undefined}</div>
</>
```

### 5.元件事件處理函式需要小駝峰

```jsx
<button onClick={}><button>
```

## 懶人包

1.元件裡的最外層要長這樣子<></>

```jsx
return <>加小括弧是避免有自動加;出現</>;
```

2.單標籤自閉合 3.小駝峰命名

## 總結

JSX 看似很囉唆但是裡面的每個規則都有相對的道理在，如果能去理解其實這些規則就相對應的記起來了。

預告一下，明日就是介紹如何在 JSX 寫 JavaScript 囉~

## 參考資料

[React 官方網站](https://react.dev/)
