---
title: Day 20 React 環境建置-Vite
date: 2023-10-04 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
cover: /images/default-cover.png
---

在接下來的範例中，比較沒辦法像之前的範例一樣直接丟到瀏覽器，檢查的開發者工具直接執行，需要建置基本的環境，我有想過幾種方式進行建置，甚至是在 codesandbox 直接線上進行，但比起線上的環境還是比較喜歡在本地端用 VS Code 進行開發，在追求方便簡單的前提下，選擇了 Vite 進行部屬。

<!-- more -->

## 環境建置前的準備-NPM(Node Package Manager)

在使用 Vite 部屬前需要安裝 node 套件管理器(npm)來方便進行 Vite 部屬，而 NPM 是 Node 的安裝管理套件，簡單來說就是綁定 Node，所以安裝 node 就可以使用囉!

### Node 下載與安裝

Node.js:https://nodejs.org/en
推薦 LTS 版本，因為是長期維護的版本使用起來也會比最新版本還穩定，而安裝方式跟其他應用程式一樣簡單，只要一直按下一步就可以安裝完成了。

## 使用 Vite 進行環境建置

**1.找到 VS Code 的終端機**
![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897452/ith2023-article-pic/day20-1_txslex.png)

**2.輸入指令**

```javascript
npm create vite@latest //創建最新版本的專案
```

**3.然後 vite 會詢問一系列的設定**

(1)確定是否要執行程序=>按 y
![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897452/ith2023-article-pic/day20-2_iadmfb.png)

(2)取專案名子=>可以隨便取或是用預設
![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897452/ith2023-article-pic/day20-3_jh78me.png)

(3)選擇哪一個框架=>選擇 React
![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897452/ith2023-article-pic/day20-4_kqvokg.png)

(4)選擇使用哪一個語言=>選擇 JavaScript
![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897453/ith2023-article-pic/day20-5_l0n73d.png)

(5)基本上就大致完成了，接下來是進行測試有無建置成功的部份，也很單純就照著 vite 提供的指令一行一行打就好了

```javascript
  cd vite-project //切換到專案目錄的資料夾
  npm install //安裝模組
  npm run dev //開啟測試環境
```

**4.如此一來就完成了，理論上應該是可以在下列網址(http://localhost:5173/)中看到下面的畫面**
(1)終端機回饋的網址
![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897453/ith2023-article-pic/day20-6_j7gjkt.png)
(2)出現的測試畫面
![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897453/ith2023-article-pic/day20-7_sihsxw.png)

**5.操作的檔案位置(src=>App.js)**
位在 src 資料夾的 App.js，未來的操作範例都可以在這個檔案進行。
![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1703897453/ith2023-article-pic/day20-8_s5uoza.png)

## 總結

雖然步驟還是有點多或是有點麻煩，但如果要在本地端開發，這已經是相對簡單快速的方法了，明天就會正式進入 React 囉~
