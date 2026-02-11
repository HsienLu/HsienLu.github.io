---
title: Day 29 React的本質-Library
date: 2024-01-02 10:43:26
tags: [React, JavaScript]
categories: 鐵人賽
cover: /images/default-cover.png
---

雖然 React 現在被稱作 3 大框架其中之一，但是如果現在打開 React 的官網，會發現它的定位是一個 Library，而不是一個 Framework，事實上 React 確實保持著高度靈活性，讓開發者可以自由的選擇其他的 Library 來搭配使用，這也是為什麼 React 能夠在短短幾年內就成為主流的原因之一。甚至在搭配的套件上也有許多不同的選擇，像是 Redux、React-Router、React-Bootstrap 等等，這些套件都是為了滿足不同的需求而生的，而且都是由社群開發的，這也意味著 React 的生態系非常的豐富，而且也有許多的資源可以參考，這也是 React 能夠快速成長的原因之一。今天就來試著用一個簡單的例子來說明 React 的本質吧!

<!-- more -->

### 使用 CDN 引用 React

跟許多其他的 Library 一樣，React 也可以透過 CDN 的方式來引用，這樣就不需要透過 npm 或是 yarn 來安裝，，只需要在 HTML 中引用 React 的 CDN 就可以使用了，以下是範例，可以直接複製貼上到 HTML 中，然後用套件 liveserver 打開就可以看到 console 結果了。可以看到 React 跟 ReactDOM 可以是使用的方法，而且還有 babel，這是因為 React 的語法是 JSX，所以需要 babel 來轉換成 JavaScript 才能執行。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="rrot"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
    <script type="text/babel">
      console.log(React, ReactDOM);
    </script>
  </body>
</html>
```

### React CDN 使用範例

接續上一個例子，這次就來試著使用 React 的元件吧!首先要先創造一個元件，然後再把它渲染到 root 根元素上，以下是範例:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
    <script type="text/babel">
      // 創造元件
      const App = () => {
        return (
          <div>
            <h1>Hello World</h1>
          </div>
        );
      };
      // 把App元件渲染至root根元素
      ReactDOM.render(<App />, document.getElementById("root"));
    </script>
  </body>
</html>
```

### 總結

大家可以發現，我這裡只是單純的使用 HTML 而已，並沒有使用太複雜的環境建置工具，雖然實務上不會這樣使用，但是我這裡只是想要表達 React 並不是那麼的難以接近，在官方定義成 library 的前提下，至少在一開始的學習上心態上可以抱持輕鬆一點的態度，不用太過於緊張。
