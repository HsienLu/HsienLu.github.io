# HsienLu's Blog

個人部落格與作品集網站，使用 Vite + React + Tailwind CSS v4 建構。

## 技術棧

| 項目 | 技術 |
|------|------|
| 框架 | [Vite](https://vite.dev/) + [React 18](https://react.dev/) |
| 樣式 | [Tailwind CSS v4](https://tailwindcss.com/) |
| 路由 | [React Router v7](https://reactrouter.com/) |
| 輪播 | [Swiper](https://swiperjs.com/) |
| Markdown | [react-markdown](https://github.com/remarkjs/react-markdown) + remark-gfm + rehype-raw |
| 部署 | GitHub Actions → GitHub Pages |

## 專案結構

```
├── public/
│   ├── images/              # 靜態圖片
│   ├── posts/               # Markdown 文章檔案
│   └── posts-index.json     # 文章索引（由腳本自動產生）
├── src/
│   ├── components/          # 共用元件
│   │   ├── Header.jsx       # 導覽列
│   │   ├── Footer.jsx       # 頁尾
│   │   ├── Layout.jsx       # 頁面框架
│   │   ├── Sidebar.jsx      # Blog 側邊欄（tag 篩選）
│   │   ├── ArticleCard.jsx  # 文章小卡片（首頁 Swiper 用）
│   │   ├── BlogPostCard.jsx # 文章列表卡片
│   │   ├── SkillCard.jsx    # 技能卡片
│   │   ├── ProjectShowcase.jsx # 作品介紹區塊
│   │   └── Badge.jsx        # 標籤元件
│   ├── pages/               # 頁面元件
│   │   ├── HomePage.jsx     # 首頁
│   │   ├── BlogPage.jsx     # 部落格列表
│   │   └── PostPage.jsx     # 文章詳情
│   ├── data/
│   │   └── siteData.js      # 靜態資料（選單、技能、作品等）
│   ├── hooks/
│   │   └── usePosts.js      # 文章資料 Hook
│   ├── App.jsx              # 路由設定
│   ├── main.jsx             # 進入點
│   └── index.css            # Tailwind 設定 + 自訂樣式
├── scripts/
│   └── generate-posts-index.js  # 文章索引產生腳本
├── index.html
├── vite.config.js
└── package.json
```

## 開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器（會自動產生文章索引）
npm run dev

# 僅產生文章索引
npm run gen-index

# 建構正式版本
npm run build

# 預覽正式版本
npm run preview
```

## 新增文章

1. 在 `public/posts/` 建立新的 `.md` 檔案，檔名即為文章 slug（URL 路徑）
2. 在檔案開頭加入 frontmatter：

```markdown
---
title: 文章標題
date: 2025-01-01 12:00:00
tags: [React, Hook]
cover: /images/default-cover.png
categories: React
---

文章內容...
```

3. 執行 `npm run gen-index` 更新索引
4. `git push` 後 GitHub Actions 會自動建構並部署

### Frontmatter 欄位

| 欄位 | 必填 | 說明 |
|------|------|------|
| `title` | ✅ | 文章標題 |
| `date` | ✅ | 發佈日期（`YYYY-MM-DD HH:mm:ss`） |
| `tags` | 建議 | 標籤陣列，用於分類篩選與相關文章推薦 |
| `cover` | 否 | 封面圖片路徑，預設為 `/images/default-cover.png` |
| `categories` | 否 | 分類 |

## 路由

| 路徑 | 頁面 |
|------|------|
| `/` | 首頁（Hero、技能、精選文章、作品介紹） |
| `/blog` | 部落格列表（支援 `?tag=xxx` 篩選） |
| `/blog/:slug` | 文章詳情 |

## 部署

推送至 `main` 分支後，GitHub Actions 會自動：
1. 安裝依賴
2. 產生文章索引 + 建構
3. 部署至 `gh-pages` 分支

## 色彩系統

透過 Tailwind v4 的 `@theme` 定義，可在 `src/index.css` 中調整：

| Token | 色碼 | 用途 |
|-------|------|------|
| `primary-50` | `#FFFFFF` | 白色 / 按鈕文字 |
| `primary-100` | `#FAFAFA` | 淺灰背景 |
| `primary-200` | `#F1F1F1` | Badge 背景 |
| `primary-300` | `#E9E9E9` | 邊框 |
| `primary-400` | `#C1C1C1` | 次要文字 |
| `primary-500` | `#919191` | 輔助文字 |
| `primary-600` | `#5B5B5B` | 內文 |
| `primary-700` | `#3B3B3B` | 標題 |
| `primary-800` | `#1E1E1E` | 深色文字 |
| `primary-900` | `#000000` | 黑色 / 按鈕背景 |
