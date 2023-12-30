---
title: Day 24 React 的橋樑-Prpos
date: 2023-10-07 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
---

# Day24 React 的橋樑-Prpos

Props 是一個元件之間傳遞資料的手段，它其實有點像是 HTML 標籤的屬性，實際上很多像是 HTML 標籤的屬性也被預設為 Props，例如 img 標籤的 src,alt 等等，但也可以自定義，有點像是 data-set 那樣，接下來就開始今天的主題吧!

<!-- more -->

## Props 的特性

#### 1.只能允許單向資料流

簡單來說就是只能從父元件傳到子元件，要從子元件傳回去需要用其它特殊方法

#### 2.資料類型為物件

#### 3.不可被元件本身自己改變

#### 4.但可以被父元件改變

#### 5.可以自訂預設值，父元件如果沒給定值會自行套用

## 範例

1.將 props 傳給子元件

```jsx
<Child test="AAA" num={100} />
```

2.在子元件讀取傳遞的值

```jsx
Child({test, num});
```

3.可以自訂預設參數

```jsx
<Child test="AAA" num={100} />
```

### 總結程式

父元件

```jsx
import Child from "./child";

export default function Parent() {
  return (
    <>
      <h2>啟用預設值</h2>
      <Child />
      <h2>父元件改變props</h2>
      <Child test="AAA" num={100} />
    </>
  );
}
```

子元件

```javascript
export default function Child({ test = "BBB", num = 10//自訂預設值}) {
  return (
    <>
      <h4>Child</h4>
      <p>text: {test}</p>
      <p>num: {num}</p>
    </>
  );
}

```

### props 傳遞參數的解構賦值

事實上，上述的範例已經也在使用了，在一開始就提到 Props 是一個物件，如果照最原始的寫法應該如下，所以重頭到尾都只傳遞一個名為 props 物件的參數而已。

```jsx
export default function Child(props) {
  return (
    <>
      <h4>Child</h4>
      <p>text: {props.test}</p>
      <p>num: {props.num}</p>
    </>
  );
}
```

### ESLint 處理

PS:如果遇到"is missing in props validation"
在.eslintrc.cjs 的 rules 加上下面這段

```
"react/prop-types": "off",
```

## 總結

props 使用起來蠻直覺的，但是有其限制所在，如果需要更進一步的活用，要了解更後面的內容包刮 Hook 之類的內容，基本上在這著系列應該沒有什麼機會介紹到，畢竟是入門向的文章，如果有機會後續再作補充，明天就會介紹到比較偏向實作的內容了。

## 參考資料

[React 官方網站](https://react.dev/)
