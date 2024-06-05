---
title: window&body
date: 2023-12-29 14:15:32
tags: html
categories: HTML
cover: /images/default-cover.png
---

## 文字版

在 JavaScript 中，window 和 document.body 是兩個重要的全局物件，它們代表瀏覽器視窗和網頁文件的主體部分。讓我們來看一下它們之間的差異：

<!-- more -->

1. window：

- window 是瀏覽器中的全局物件，代表整個瀏覽器視窗。
- 它是所有全局變數和函式的最高級別的容器，可以透過它來訪問和操作全局範圍的變數和函式。
- 它提供了許多瀏覽器相關的屬性和方法，比如 window.location 可以用來獲取當前網址，window.alert() 可以用來顯示警告對話框，等等。

2. document.body：

- document.body 是 document 物件的一部分，代表 HTML 文件的主體部分。
- 它表示網頁中的 <body> 元素，即網頁中的主要內容區域。 \*透過 document.body 可以訪問和操作網頁主體中的元素，例如透過 document.body.appendChild(element) 可以將元素添加到主體中。

總結來說，window 是瀏覽器視窗的全局物件，而 document.body 是 HTML 文件的主體部分。它們都提供了許多功能來處理瀏覽器和網頁的相關操作。在網頁開發中，你會經常使用這兩個物件來操作網頁和處理事件。

## 表格整理版

當前瀏覽器視窗和網頁文件主體的差異如下：

| 特性       | `window`                     | `document.body`                        |
| ---------- | ---------------------------- | -------------------------------------- |
| 定義位置   | 全局範圍（在所有地方可訪問） | `document` 物件的一部分（HTML 文件內） |
| 代表的物件 | 瀏覽器視窗                   | HTML 文件的主體部分（`<body>` 元素）   |
| 功能       | 提供瀏覽器相關的屬性和方法   | 提供操作網頁主體內容的屬性和方法       |
| 例子       | `window.location`            | `document.body.appendChild(element)`   |
| 使用場景   | 瀏覽器操作、全局變數和函式   | 操作網頁內容、處理網頁事件             |

`window` 物件是瀏覽器中的全局物件，它提供了許多瀏覽器相關的屬性和方法，可以在任何地方訪問。而 `document.body` 則是 `document` 物件的一部分，代表 HTML 文件的主體部分，主要用於操作網頁主體內容，例如添加元素或處理事件。在網頁開發中，你會經常使用這兩個物件來處理瀏覽器和網頁的相關操作。
