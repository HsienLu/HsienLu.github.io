---
title: Day 25 React 的選擇渲染-JSX 與條件控制的關係
date: 2023-10-08 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
---

說到 JavaScript 的流程控制大家很容易聯想到 if...else...或是三元運算子，在 JSX 裡面可以利用這些流程控制來選選擇性的呈現想要渲染的畫面。

官網分別介紹三種:
1.if..else 2.三元運算子(條件式 ? True 的結果 :False 的結果) 3.邏輯運算子(&&)

<!-- more -->

## 用 if...else..控制元件出現

這我相信能看到這裡的，大家都對這個語法很熟，但在 React 寫法就變成下面這樣，如果 number="A"就會 return 並渲染 "AAA"，除此之外會 return 並渲染 "BBB"。

```jsx
export default function App() {
  let number = "123";

  if (number === "A") {
    return (
      <>
        <h1>AAA</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>BBB</h1>
      </>
    );
  }
}
```

## 條件運算子

ES6 的語法，簡單來說就是 if else 的簡化版，但是略有些差異以及特性，這裡就不先多提，因為在這裡兩者幾乎是等效的。
它由一個?和:組成基本架構如下:

```javascript
條件式 ? 條件式為真要輸出的結果 : 條件式為假的時候要輸出的結果;
```

如果更改上述的範例為三元運算子的寫法如下:

```
export default function App() {
  let number = "A";
  return number === "A" ? <h1>AAA</h1> : <h1>BBB</h1>;
}
```

或是這樣

```
export default function App() {
  let number = "A";
  return (
  <>
  {number === "A" ? <h1>AAA</h1> : <h1>BBB</h1>}
  </>
  )
```

看起來更為簡單一點，可是在對於剛接觸的人比較不容易閱讀，要注意的一點

> 三元運算子是運算子它不是陳述式所以可以寫在 jsx 的{}裡，但是 if...else 則不行

## 邏輯運算子(&&)

這部分的寫法就更為簡單一點，但是適用的情況也不太一樣，比較適用決定是否要呈現元件，而不是選擇性呈現，寫法如下

```
export default function App() {
  return <>{true && <h1>AAA</h1>} </>;
}
```

## 總結

雖然這三種寫法都是在做元件的選擇性渲染，但其實每一種方法適用的情境略有不同，需要依照適合的狀況，選擇適合的寫法:

- 使用 if...else 時，可以處理較複雜的條件邏輯。
- 三元運算子 提供了簡潔的寫法，適用於簡單的條件選擇。
- 邏輯運算子 (&&) 適合單一條件，不需要額外 else 或 return null。

## 參考資料

[React 官方網站](https://react.dev/)
