---
title: MySQL-約束條件
date: 2024-01-18 10:21:17
tags: [MySQL, SQL]
categories: MySQL
cover: /images/default-cover.png
---

MySQL 約束條件

<!-- more -->

## 約束概念和分類

概念:約束條件是一種限制條件，用於限制變數的取值範圍，使得變數在取值時必須滿足某種條件。
約束分類表格
|約束分類| 約束名稱| 約束說明|
|:---:|:---:|:---:|
|NOT NULL| 非空約束| 限制變數不能為空值|
|UNIQUE| 唯一約束| 限制變數不能重複|
|PRIMARY KEY| 主鍵約束| 限制變數不能為空值且不能重複|
|CHECK| 檢查約束| 限制變數必須滿足某種條件|
|DEFAULT| 默認約束| 限制變數沒有給定值時，默認為某個值|
|FOREIGN KEY| 外鍵約束| 限制變數的值必須在另一個表中存在|

### 外鍵約束

概念:外鍵約束是一種約束條件，用於限制變數的值必須在另一個表中存在。
外鍵約束的語法格式

```sql
CONSTRAINT 外鍵名稱 FOREIGN KEY (外鍵欄位名稱) REFERENCES 另一個表名稱(另一個表的欄位名稱)
```

外鍵約束的語法範例

```sql
create table dept(
id int primary key auto_increment,
dep_name varchar(20),
addr varchar(20)
);
create table emp(
id int primary key auto_increment,
name varchar(20),
age int,
dep_id int ,
constraint fk_emp_dept foreign key(dep_id)
references dept(id)
);

insert into dept (dep_name,addr) values
("RD","台北"),
("ME","台中");
insert into emp (NAMe,age,dep_id) values
("AAA",20,1),
("BBB",20,1),
("CCC",20,1),
("DDD",20,2),
("EEE",20,2),
("FFF",20,2);
```

> 主表要先建立，外鍵表要後建立，否則會報錯
