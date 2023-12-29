---
title: json-server introduction
date: 2023-12-29 00:30:24
tags: json-server
---

## 基本規則

1.最外層是物件==>類比資料庫

<!-- more -->

2.每個資料表的最外層要是陣列;也可以放物件，但是只能存單筆資料

```javascript
{
    "users":[{},{},{}]
    //^^^^類比資料表名稱
    "teams":[1,2,3,4]
}

```

## 網路請求規則

1.傳資料一定要是 json 格式

### post 新增資料

1.新增資料，json-sever 會自動產生 ID

### get 取得資料

### patch,put 更新資料

### delete 刪除資料

## 篩選功能

### filter

1.基本格式:
?屬性=屬性值&屬性=屬性值

2.可以用&接不同的屬性和屬性值

```jsx
?name=a產品&price=400
```

3.也可以用&接相同屬性但是不同屬性值

```jsx
?id=1&id=2
```

4.用.可以讀深層物件值

```jsx
?language.en-us=product
```

5.?q=屬性值 為全域搜尋

```jsx
?q=產品
```

### 分頁

1.基本格式:
?\_page=A&\_limit=B
第 A 頁，一頁有 B 筆

### sort

?\_sort=屬性&\_order=asc
依照屬性作 ASC(小=>大)排列

### Operators

?屬性\_gte=屬性值&屬性\_lte=屬性值

## 關連

### 基本格式

?\_expand=屬性

### 注意事項

對應的資料表要加 s

## 嵌套資源

### GET /posts/1/comments

/posts/1/comments 表示一個 RESTful API 的端點，其中：

/posts 是主要資源，通常代表帖子或文章。
1 是一個特定的帖子的識別號（通常是帖子的唯一標識符）。
/comments 是該帖子的子資源，代表該帖子的評論。

### POST /posts/1/comments

POST /posts/1/comments 表示一個 RESTful API 的端點，用於在特定帖子下創建新的評論。讓我解釋一下：

/posts 是主要資源，代表帖子或文章。
1 是一個特定的帖子的識別號，用於識別要對其發布評論的帖子。
/comments 是該帖子的子資源，代表該帖子的評論。
使用 POST 請求表示你想在這個特定帖子下創建新的評論。

#### 也會自動新增 postId，但是注意會變為字串
