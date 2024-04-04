---
title: React-Hook-useContext
date: 2024-03-06 11:52:35
tags: [React, Hook]
categories: React
---
useContext 是一個 React Hook，因為React為單向資料流的特性，所以當我們需要在不同的 component 之間共享資料時，我們通常會透過 props 來傳遞資料，但是當 component 的層級越來越深時，這樣的寫法會變得非常麻煩，這時候 useContext 就可以派上用場，作為一個傳送門useContext可以像下圖中自由的傳遞props。

![useContext Illustration](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_context_far.dark.png&w=640&q=75)
Ref:dev.react.com
<!-- more -->
### 使用方式
1.建立一個 空的context並且導出
常見作法是在建立一個新的檔案中建立一個空的context並且導出，檔名可以隨意取名。
```jsx
import { createContext } from 'react';
export const MyContext = createContext(null);
```
2.在最上層的component中使用Provider，並包裹住想要傳遞的元件，傳遞想要傳入的porps
```jsx
import { MyContext } from './useContext.jsx'
let AAA="132"
```
```jsx
<MyContext.Provider value={{AAA}}>
  <App />
</MyContext.Provider>
```
3.可以在porvider包裹住的情況下，使用useContext來取得資料
```jsx
import { MyContext } from "./useContext.jsx";
const {AAA}=useContext(MyContext)
```