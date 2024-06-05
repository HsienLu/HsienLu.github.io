---
title: MySQL-事務(Transaction)
date: 2024-01-18 10:22:42
tags: [MySQL, SQL]
categories: MySQL
cover: /images/default-cover.png
---

簡介: 事務(Transaction)是一個邏輯上的工作單位，它可以包含一個或多個 SQL 語句

<!-- more -->

簡介: 事務(Transaction)是一個邏輯上的工作單位，它可以包含一個或多個 SQL 語句。事務可以讓一組 SQL 語句作為一個單元來執行，這些語句要麼全部執行，要麼全部不執行。事務是一個不可分割的工作執行單元，事務中包含的 SQL 語句要麼全部執行，要麼全部不執行，事務在執行過程中發生錯誤，會被回滾(Rollback)到事務開始前的狀態，事務在執行過程中沒有發生錯誤，會被提交(Commit)。

## 事務操作

### 開啟事務

```sql
START TRANSACTION;
-- 或
BEGIN;
```

### 提交事務

```sql
COMMIT;
```

### 回滾事務

```sql
ROLLBACK;
```

## 事務特性(ACID)

### 原子性(Atomicity)

事務是一個不可分割的工作執行單元，事務中包含的 SQL 語句要麼全部執行，要麼全部不執行，事務在執行過程中發生錯誤，會被回滾(Rollback)到事務開始前的狀態，事務在執行過程中沒有發生錯誤，會被提交(Commit)。

### 一致性(Consistency)

事務在執行過程中，數據庫會從一個一致性狀態轉換到另一個一致性狀態，事務開始前和結束後，數據庫的完整性約束沒有被破壞。

### 隔離性(Isolation)

事務的隔離性是指多個事務並發執行時，一個事務的執行不會被其他事務干擾，多個事務並發執行時，一個事務內部的操作及使用的數據對其他事務是隱藏的，其他事務的操作及使用的數據對該事務也是隱藏的。

### 持久性(Durability)

事務完成後(提交或是回滾)，事務對數據的修改被永久保存到數據庫中，即使發生故障也不會丟失。

## 範例

```sql
create table account(
id int primary key auto_increment,
name varchar(20),
money int

) ;

insert into account(name,money) values
("AAA",2000),
("BBB",3000);

begin;
SET SQL_SAFE_UPDATES = 0; -- 關閉安全模式
update account set money=money-500 where name="AAA";
update account set money=money+500 where name="BBB";
SET SQL_SAFE_UPDATES = 1; -- 開啟安全模式
-- commit; 預設式自動提交在mysql中
rollback;
```
