---
title: React Hook-useMemo
date: 2024-01-11 16:32:37
tags: [React, Hooka]
categories: React
---

### 前言

根據 React 官方文件中的說明，useMemo 會在渲染期間記住傳入的函式，並且在渲染期間避免重複執行該函式。

<!-- more -->

### 什麼時候使用 useMemo

官方文件也強調你應該僅僅把 useMemo 作為性能優化的手段。如果沒有它，你的程式碼就不能正常運作，那麼請先找到潛在的問題並修復它。然後再添加 useMemo 以提高性能。

### useMemo 的使用方式

useMemo(calculateValue, dependencies)
calculateValue:裡頭帶一個 callback 並寫入需要處理的函式
dependencies:依賴的值，當這個值改變時，useMemo 才會重新執行

```jsx
const result = useMemo(() => {
  add(countA);
}, [countA]);
```

### useMemo 的使用場景

如下方的例子，如果沒有使用 useMemo，當我們點擊 countB 按鈕時，同樣會執行 add 函式，但是我們只想要 countA 改變時才執行 add 函式，因為我們只在乎 result 的結果而在下方範例中 result 又只有跟 countA 有關係，這時候就可以使用 useMemo 來避免重複執行 add 函式。

但是附帶一提，其實沒有使用 useMemo 也不會有什麼問題，因為 就頂多是重複執行 add 函式而已，但是如果 add 函式是一個很耗時的函式，那麼就會造成效能上的問題，這時候就可以使用 useMemo 來避免重複執行 add 函式。

```jsx
function add(n) {
  console.log("我被執行了");
  return n * n;
}
function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const result = useMemo(() => {
    add(countA);
  }, [countA]);
  return (
    <>
      <button
        onClick={() => {
          setCountA((countA) => countA + 1);
        }}
      >
        count is {countA}
      </button>
      <button
        onClick={() => {
          setCountB((countB) => countB + 1);
        }}
      >
        count is {countB}
      </button>
      <p>{result}</p>
    </>
  );
}
```
