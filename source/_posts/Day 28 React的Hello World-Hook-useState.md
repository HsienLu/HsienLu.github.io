---
title: Day 28 React 的 Hello World-Hook-useState
date: 2023-10-12 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
---

要說 React 有什麼特別的地方我覺得應該就是 HooK 了吧!Hook 是在 React 16.8 版中加入的，hook 有很多種，每一種的功能都不太一樣，甚至還可以自定義，簡單來說它就是函式，然後可以重複一直使用。但其實這是一個有點抽象的概念，所以就直接從實際的例子來了解吧!

<!-- more -->

## 什麼是 useState?

這是 React 最基本的一個 hook 之一，它的作用是儲存某個變數的狀態；並設定更新它的方法，基本寫法如下:

```jsx
const [變數名稱, set變數名稱] = useState(初始值);
```

有三點需要注意: 1.需要依照小駝峰的規則撰寫 2.盡量給初始值，也就是變數名稱最一開始的狀態 3.變數只能被 set 變數做改變，使用方法就是在裡面塞一個更新後的數值

以下舉個例子:

宣告一個名為 count 的變數，此變數只能透過 setCount 做改變，且初始值為 0

```jsx
const [count, setCount] = useState(0);
setCount(1); //更新此變數為1
```

## useState 的作用?

因為在 React 中，不應該直接修改元件函式內部的變數，因為這不會觸發重新渲染元件。必須要使用 React 提供的狀態管理來處理這類情況，所以下面的例子:來展示其中差異

1.沒使用 useState:畫面的按鈕會沒有作用

```jsx
function App() {
  let a = 0;
  return (
    <>
      <button
        onClick={() => {
          a = a + 1;
        }}
      >
        按鈕
      </button>
      <h1>現在數值:{a}</h1>
    </>
  );
}

export default App;
```

2.使用 useState:才能改變狀態

```jsx
function App() {
  const [a, setA] = useState(0);

  const handleIncrement = () => {
    setA(a + 1);
  };

  return (
    <>
      <button onClick={handleIncrement}>按鈕</button>
      <h1>現在數值: {a}</h1>
    </>
  );
}

export default App;
```

## 總結

在 React 中與畫面有關的變數都需要 useState 來做一個所謂的狀態管理，才能觸發重新渲染畫面，而且這個變數只能透過跟它同組宣告變數的方法做改變。
