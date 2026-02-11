---
title: MySQL-SQL語法介紹-DQL 資料查詢語言
date: 2024-01-18 10:09:19
tags: [MySQL, SQL]
categories: MySQL
cover: /images/default-cover.png
---

DQL(Data Query Language) 資料查詢語言

<!-- more -->

### 基礎查詢資料

#### 查詢資料

```sql
SELECT 欄位名1, 欄位名2, ... FROM 資料表名 WHERE 條件;
```

#### 去除重複資料

```sql
SELECT DISTINCT 欄位名1, 欄位名2, ... FROM 資料表名 WHERE 條件;
```

#### 取別名

```sql
SELECT 欄位名1 AS 別名1, 欄位名2 AS 別名2, ... FROM 資料表名 WHERE 條件;
```

### 條件查詢

#### 基本語法

```sql
SELECT 欄位名1, 欄位名2, ... FROM 資料表名 WHERE 條件;
```

#### 條件查詢關鍵字表格

| 關鍵字           | 說明          |
| ---------------- | ------------- |
| >                | 大於          |
| <                | 小於          |
| >=               | 大於等於      |
| <=               | 小於等於      |
| =                | 等於          |
| !=               | 不等於        |
| <>               | 不等於        |
| BETWEEN...AND... | 在...之間     |
| IN(...)          | 在...群組之中 |
| LIKE             | 模糊查詢      |
| IS NULL          | 為空值        |
| IS NOT NULL      | 不為空值      |
| AND              | 且            |
| OR               | 或            |
| NOT              | 非            |

#### 條件查詢範例

```sql
SELECT * FROM 資料表名 WHERE 欄位名1 > 100;
SELECT * FROM 資料表名 WHERE 欄位名1 BETWEEN 100 AND 200;
SELECT * FROM 資料表名 WHERE 欄位名1 IN(100, 200, 300);
SELECT * FROM 資料表名 WHERE 欄位名1 LIKE 'A%';
SELECT * FROM 資料表名 WHERE 欄位名1 IS NULL;
SELECT * FROM 資料表名 WHERE 欄位名1 IS NOT NULL;
SELECT * FROM 資料表名 WHERE 欄位名1 > 100 AND 欄位名2 < 200;
SELECT * FROM 資料表名 WHERE 欄位名1 > 100 OR 欄位名2 < 200;
SELECT * FROM 資料表名 WHERE NOT 欄位名1 > 100;
```

#### like 模糊查詢介紹

XX%XX 代表任意長度的字串

```sql
SELECT * FROM 資料表名 WHERE 欄位名1 LIKE '%A%';
```

XX_XX 代表任意一個字元

```sql
SELECT * FROM 資料表名 WHERE 欄位名1 LIKE 'A_';
```

### 排序查詢

#### 排序查詢語法

```sql
SELECT 欄位名1, 欄位名2, ... FROM 資料表名 WHERE 條件 ORDER BY 欄位名1 ASC/DESC, 欄位名2 ASC/DESC, ...;
```

> 如果有多個欄位，會先以第一個欄位排序，如果第一個欄位有相同的值，再以第二個欄位排序，以此類推

#### 聚合函數語法

| 聚合函數      | 說明               |
| ------------- | ------------------ |
| COUNT(欄位名) | 計算欄位名的總數   |
| SUM(欄位名)   | 計算欄位名的總和   |
| AVG(欄位名)   | 計算欄位名的平均值 |
| MAX(欄位名)   | 計算欄位名的最大值 |
| MIN(欄位名)   | 計算欄位名的最小值 |

> 所有聚合函數都會忽略 NULL 值

#### 聚合函數範例

```sql
SELECT COUNT(欄位名1), SUM(欄位名2), AVG(欄位名3), MAX(欄位名4), MIN(欄位名5) FROM 資料表名;
```

#### 分組查詢語法

```sql
SELECT 欄位名1, 聚合函數1, 聚合函數2, ... FROM 資料表名 GROUP BY 欄位名1;
```

#### 分組查詢範例(搭配 where)

```sql
SELECT 欄位名1, 聚合函數1, 聚合函數2, ... FROM 資料表名 WHERE 條件 GROUP BY 欄位名1;
```

#### 分組查詢範例(搭配 having)

```sql
SELECT 欄位名1, 聚合函數1, 聚合函數2, ... FROM 資料表名 GROUP BY 欄位名1 HAVING 條件;
```

> 執行順序: WHERE -> 聚合函數 -> HAVING

#### 分頁查詢語法

```sql
SELECT 欄位名1, 欄位名2, ... FROM 資料表名 LIMIT 起始位置, 查詢筆數;
```

> 起始索引計算方式= (頁數 - 1) \* 每頁筆數

#### 分頁查詢範例

```sql
SELECT * FROM 資料表名 LIMIT 0, 10;
```

> LIMIT 是 MySQL 的語法，不是標準 SQL 語法，不同的資料庫可能會有不同的寫法

### DQL 小結

```sql
SELECT 欄位名1, 欄位名2, ...
FROM 資料表名
WHERE 條件
GROUP BY 欄位名1
HAVING 條件
ORDER BY 欄位名1 ASC/DESC, 欄位名2 ASC/DESC, ...
LIMIT 起始位置, 查詢筆數;
```
