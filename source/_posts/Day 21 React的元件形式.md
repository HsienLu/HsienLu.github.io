---
title: Day 21 React 的元件形式
date: 2023-10-05 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
---

元件(component)是 React 主要關鍵組成之一，它是一個可以被反覆利用的 UI 元素，不過說穿了 React 的文件中一直提到的元件，其實就是 function 每一個元件都是由一個 function 當然裡面內層可以有很多個但是最外層就是只有一個，所以元件就是 function，如此一來元件可以重複使用就合理許多了吧!因為 function 也可以一直重複使用。

<!-- more -->

## 如何定義元件(component)

這與其多說，不如來看範例吧!下列就是一個元件

```javascript
export default function Comp() {
  return (
    <>
      <h1>我是一個元件</h1>
    </>
  );
}
```

是不是跟 function 一模一樣，只是在 React 規定中元件開頭一定要**大寫**，然後要**return**出來是因為需要給其他地方使用，所以也需要匯出模組([ESM](https://ithelp.ithome.com.tw/articles/10329570))給其他檔案使用。其實還有一點，不過是 JSX 的語法問題，最上層需要有個這樣的<></>根元素包住，換句話說 JSX 只能返回一個跟元素。

整理上述所說的 React 元件基本架構有那些呢?

### React 元件的基本架構

1.元件開頭命名一定要大寫 2.裡面需要 return 返回 3.最外層要有唯一一個標籤包住通常是<></>，當然也可以是其它標籤 4.如果要給其它檔案使用一定要匯出

#### 補充:進入點

說的直白點所謂的進入點，就是專案架構的最上層，但以剛入門 React 的人來說通常不會先理會這層，以 vite 而言所謂的進入點就是 main.js，初始設定長下面這樣。

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

所以，通常在 React 匯出是一個必須的動作，因為以一個專案來說，再怎麼樣都會需要給進入點來使用，

## 元件的引用

通常都是一個檔案一個元件，所以在引用元件的時候會做一個匯入的動作，而 React 在 render 元件的形式上也很特別，是以標籤的形式呈現，範例如下:

```javascript
import Comp from "./Comp"; //引用元件從其他檔案

export default function App() {
  return (
    <>
      {/* 可以重複使用 */}
      <Comp />
      <Comp />
      <Comp />
    </>
  );
}
```

###### ps:在 vite 寫元件副檔名需要用 jsx

當然如果想偷懶一個檔案寫一堆元件也是可以，但是就不用做引入的動作了，範例如下:
只是不建議這麼而已

```javascript
export default function App() {
  return (
    <>
      {/* 可以重複利用 */}
      <Comp />
      <Comp />
      <Comp />
    </>
  );
}

//React 的元件形式
function Comp() {
  return (
    <>
      <h1>我是一個元件</h1>
    </>
  );
}
```

## 總結

元件是 React 中基本的形式，整個架構幾乎都是由元件構成的，當然還有其中很重要的構成是 JSX 雖然一直提到，但還沒做詳細介紹，這部分明日會做比較詳細的介紹。

## 參考資料

[React 官方網站](https://react.dev/)
