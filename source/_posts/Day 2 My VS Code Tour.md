---
title: Day 2 My VS Code Tour
date: 2023-09-16 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
---

## 簡介

首先第一邊當然是介紹我們的生財工具 VS Code 啦~相信大家都有自己習慣的環境和模式，今天來分享我的 VS Code 相關的開發設定。

<!-- more -->

## VS Code 概述

VS Code 是一個功能豐富的程式碼編輯器，支援多種程式語言，例如 JavaScript、HTML/CSS 等等。對於軟體開發者來說，它是一個非常靈活且易於使用的工具。

除了強大的基本功能外，VS Code 還可以透過安裝套件來擴展其功能。這些套件提供了各種方便的功能，幫助我們更有效率地開發。

## 背景知識

- VS Code

## 內容

### (一) VS Code 常用基本設置

1. 自動換行

   - 設置方法:
     - 點擊左下角小齒輪進入設定選單  
       ![圖 0](https://i.imgur.com/HqOokUm.png)
     - 搜尋欄搜尋 "Wrap"
     - 在 "Word Wrap" 設置中設定成 "On"  
       ![圖 1](https://i.imgur.com/6DvuhGx.png)
   - 效果:  
     Before  
     ![圖 2](https://i.imgur.com/50RjKZ7.png)  
     After  
     ![圖 3](https://i.imgur.com/7WeW5T9.png)

2. 括弧顏色:可以協助整理巢狀結構

   - 設置方法:
     - 在設定中找到 "Colorized Bracket Pairs"，進入 setting.json，貼上下列程式碼  
       ![圖 4](https://i.imgur.com/AhDGGGs.png)
       ```javaScript
       "editor.bracketPairColorization.enabled": true, //Bracket Pair Colorizer 協助大中小括號（{}、[]、()）一的獨立補上不同色彩(不用可以刪掉)
       "editor.guides.bracketPairs": "active", //Bracket Pair Colorizer 協助大中小括號（{}、[]、()）一一(不用可以刪掉)
       ```
   - 效果:  
     ![圖 5](https://i.imgur.com/7W1fruI.png)

3. 自動儲存格式化(自動排版):可以幫忙整理排的散亂的程式碼
   - 設置方法:
     - 找到下列選項設置 "Format On Save" 打勾，就完成了。  
       ![圖 8](https://i.imgur.com/cKBUsLk.png)
   - 效果:  
     Before  
     ![圖 9](https://i.imgur.com/NX4vt3T.png)  
     After  
     ![圖 10](https://i.imgur.com/UnhT9kU.png)

### (二) 常用套件

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)  
  HTML 自動封閉的套件
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)  
  HTML 可以一起更改頭尾標籤的套件
- [Chinese (Traditional) Language](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hant)  
  中文化套件
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)  
  檢查拼字錯誤的套件，debug 的好幫手，效果有點像 Word 拼字檢查那樣  
  ![圖 6](https://i.imgur.com/VABUQtm.png)

- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
  對於 Git 有漂亮的 GUI 可以看，方便查閱分支以及版本紀錄  
  ![圖 7](https://i.imgur.com/ApUQSBd.png)

- [Indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)  
  縮排好幫手，下圖彩虹就是它的效果  
  ![圖 5](https://i.imgur.com/7W1fruI.png)

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)  
  好用的網頁預覽套件，不過有時候要注意一下路徑位置

* 效果
  ![圖 5](https://i.imgur.com/7W1fruI.png)

  3.自動儲存格式化(自動排版):可以幫忙整理排的散亂的程式碼

* 設置方法  
  (1)找到下列選項設置 Format On Save 打 V，就完成了。
  ![圖 8](https://i.imgur.com/cKBUsLk.png)
* 效果
  Before
  ![圖 9](https://i.imgur.com/NX4vt3T.png)  
  After
  ![圖 10](https://i.imgur.com/UnhT9kU.png)

### (二) 常用套件

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)  
  HTML 自動封閉的套件
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)  
  HTML 可以一起更改頭尾標籤的套件
- [Chinese (Traditional) Language](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hant)  
  中文化套件
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)  
  檢查拼字錯誤的套件，debug 的好幫手，效果有點像 word 拼字檢查那樣
  ![圖 6](https://i.imgur.com/VABUQtm.png)

- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
  對於 git 有漂亮的 GUI 可以看，方便查閱分支以及版本紀錄
  ![圖 7](https://i.imgur.com/ApUQSBd.png)

- [Indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
  縮排好幫手，下圖彩虹就是它的效果
  ![圖 5](https://i.imgur.com/7W1fruI.png)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  好用的網頁預覽套件，不過有時候要注意一下路徑位置

## 結論

總結而言，VS Code 擁有強大的功能和豐富的套件生態系統，適合各種程式開發需求。透過介紹常用的基本設置，如自動換行、括弧顏色設置以及自動儲存格式化，我們可以提高程式碼的可讀性和整潔性。此外，常用的套件如 Auto Close Tag、Auto Rename Tag、Chinese (Traditional) Language、Code Spell Checker、Git Graph、Indent-rainbow 以及 Live Server 更進一步提升了開發效率，讓我們能更專注於寫程式，而不用花費太多時間處理繁瑣的細節。
