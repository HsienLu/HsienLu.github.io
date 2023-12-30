---
title: Day 23 React 中的 JavaScript
date: 2023-10-07 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
---

今天要介紹的是 JSX 重要的部分，就是如何在 JSX 中寫 JavaScript，其實很理所當然的 JSX 來就是 JavaScript，所以能寫 JavaScript 是一件蠻合理的一件事情，但依然有些規則需要遵守。接下來就依序來介紹吧!

<!-- more -->

### 1.使用大括號{}處理 Javascript

(1) 像是變數或是函式都可以在大括號裡被使用舉例如下:

```javascript
function App() {
  const name = "AAA";

  return (
    <>
      <p>My name is {name} </p>
    </>
  );
}

export default App;
```

(2) 大括號的使用範圍

- 標籤內的文本

```jsx
<p>My name is {name} </p>
```

- 在=後面的屬性

```jsx
<src={picture} img/>//pictrue可能為一個變數
```

### 2.使用 CSS inline styles

需要使用兩層大括號，第一層是 JSX 要使用 JavaScript 規定的;第二層是因為 inline styles 被當作一個物件傳遞所以有大括號

```javascript
<p style={{color: "white", backgroundColor: "black"}}>My name is {name} </p>
```

### 3.在大括弧中放表達式，不能陳述式

首先來複習一下什麼式表達式，可回傳一個結果的程式片斷就是一個表達式簡單來說，下列就是一個表達式，因為 console.log 會回傳 3

```jsx
1 + 2;
```

為什麼會突然提這個呢?因為常用流程控制 if else 就是陳述式，所以這樣寫會報錯的喔!下面就是一個很經典的例子，這裡先留一個梗後續的文章會在說明，簡單來說三元運算子不是陳述式。

- 錯誤示範

```jsx
function App() {
  const a = "true";
  const b ="false"
const judge = true;
  return (
    <>
      {if(judge){
        {a}
      }else{
        {b}
      }}
    </>
  );
}
export default App;
```

- 正確示範

```jsx
function App() {
  const a = "true";
  const b = "false";
  const judge = true;

  return <>{judge ? a : b}</>;
}

export default App;
```

## 總結

今天的重點其實很簡單，要寫 JavaScript 就在{}裡面寫就對了，但不能寫陳述式。
