---
title: Day13 JavaScript 模組(Modules)
date: 2023-09-27 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
cover: /images/default-cover.png
---

模組系統的概念大致上分兩種寫法，CommonJS 和 ESM 其引入方式的差異分別是 require 和 import，今天會著重在 ESM 的寫法。

模組的概念其實在 React 框架已經不知不覺地被頻繁的使用了，像是最常見的 hook--useState 就是在引入模組的時候才做使用的，又或是元件的寫法也是由模組系統做延伸。

模組基本上可以分為兩種匯出方式命名匯出(Named Exports)和預設匯出(Default Exports)，其對應的匯入方式也有所差別

<!-- more -->

### 命名匯出(Named Exports)

命名匯出使用關鍵詞 ==export==+==要輸出東西的名稱==，好處是在於同一個檔案能使用很多個匯出

```javascript
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

其對應的匯入方式如下，import 模組，然後從哪裡 from

```javascript
import {add, subtract} from "./math";

console.log(add(5, 3)); // 輸出: 8
console.log(subtract(10, 4)); // 輸出: 6
```

### 預設匯出(Default Exports)

1.預設匯出使用關鍵詞 ==export default==，特別注意同一個檔案只能有一個預設匯出

```javascript
export default function add(a, b) {
  return a + b;
}
```

其對應的匯入方式如下，與上述雷同差別在於針對單一輸出的模組所以可以不用大括弧{}

```javascript
import add from "./math";

console.log(add(5, 3)); // 輸出: 8
```

## 總結

以下簡單整理一個表格，我自己會認為不太需要花時間去記憶，因為用久自然就熟了，而且現在套件的幫助下其實也比較不太會在這方面出差錯。

| 特性       | 命名匯出出 (Named Exports) | 預設匯出 (Default Export) |
| ---------- | -------------------------- | ------------------------- |
| 匯出方式   | 可以匯出多個具名功能       | 只能匯出一個默認功能      |
| 匯入的語法 | 使用 `{}` 語法進行匯入     | 直接使用模組名稱進行匯入  |
