---
title: MySQL-SQL語法介紹-DDL 資料定義語言
date: 2024-01-18 09:57:17
tags: [MySQL, SQL]
categories: MySQL
---

## DDL(Data Definition Language) 資料定義語言

<!-- more -->

### 操作資料庫

####查詢資料庫

```sql
SHOW DATABASES;
```

####新增資料庫

```sql
CREATE DATABASE 資料庫名;
```

####刪除資料庫

```sql
DROP DATABASE 資料庫名;
```

####使用資料庫

```sql
USE 資料庫名;
```

####查看目前使用的數據庫

```sql
SELECT DATABASE();
```

### 操作資料表

#### 查詢所有資料表

```sql
SHOW TABLES;
```

#### 查詢資料表結構

```sql
DESC 資料表名;
```

#### 新增資料表

```sql
CREATE TABLE 資料表名(
    欄位名1 資料型態1,
    欄位名2 資料型態2,
    ...
);
```

#### 刪除資料表

```sql
DROP TABLE 資料表名;
```

#### 修改資料表

####修改資料表名稱

```sql
ALTER TABLE 資料表名 RENAME 新資料表名;
```

####新增欄位

```sql
ALTER TABLE 資料表名 ADD 欄位名 資料型態;
```

####修改資料類型

```sql
ALTER TABLE 資料表名 MODIFY 欄位名 新資料型態;
```

####修改資料表欄位名稱和資料類型

```sql
ALTER TABLE 資料表名 CHANGE 欄位名 新欄位名 新資料型態;
```

####刪除欄位

```sql
ALTER TABLE 資料表名 DROP 欄位名;
```
