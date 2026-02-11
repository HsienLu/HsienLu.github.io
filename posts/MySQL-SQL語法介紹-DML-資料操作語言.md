---
title: MySQL-SQL語法介紹-DML 資料定義語言
date: 2024-01-18 10:06:26
tags: [MySQL, SQL]
categories: MySQL
cover: /images/default-cover.png
---

DML(Data Manipulation Language) 資料操作語言

<!-- more -->

#### 給指定欄位新增資料

```sql
INSERT INTO 資料表名(欄位名1, 欄位名2, ...) VALUES(值1, 值2, ...);
```

#### 修改資料

```sql
UPDATE 資料表名 SET 欄位名1=值1, 欄位名2=值2, ... WHERE 條件;
```

> WHERE 條件可以不寫，但是如果不寫，會將資料表所有資料都修改

#### 刪除資料

```sql
DELETE FROM 資料表名 WHERE 條件;
```

> WHERE 條件可以不寫，但是如果不寫，會將資料表所有資料都刪除
