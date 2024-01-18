---
title: MySQL-關聯資料表查詢
date: 2024-01-18 10:17:59
tags: [MySQL, SQL]
categories: MySQL
---

inner join、outer join、子查詢

<!-- more -->

## inner join

解釋: 用來查詢兩個表格中有關聯的資料，分成兩種寫法

```sql
SELECT * FROM table1, table2 WHERE table1.id = table2.id;
```

```sql
SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id;
```

> 相當於取交集的意思

#### 範例

```sql
-- 建立資料
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
-- 連接語法開始
select * from emp , dept where emp.dep_id = dept.id;
-- 另外一種寫法
-- SELECT * FROM emp JOIN dept ON dept.id = emp.dep_id;
```

## outer join

解釋: 用來查詢兩個表格中有關聯的資料,並且會把沒有關聯的資料也查詢出來，又分成左外連結、右外連結、全外連結

### left join

解釋: 用來查詢兩個表格中有關聯的資料,並且會把沒有關聯的資料也查詢出來，但是以左邊的表格為主

```sql
SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.id;
```

> 取左邊表格的資料，並且把右邊表格的資料也查詢出來，如右邊沒有資料則顯示 null

#### 範例

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
dep_id int
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
("FFF",20,2),
("GGG",23,3);
select * from emp left join dept on emp.dep_id=dept.id;
```

### right join

解釋: 用來查詢兩個表格中有關聯的資料,並且會把沒有關聯的資料也查詢出來，但是以右邊的表格為主

```sql
SELECT * FROM table1 RIGHT JOIN table2 ON table1.id = table2.id;
```

> 取右邊表格的資料，並且把左邊表格的資料也查詢出來，如左邊沒有資料則顯示 null

#### 範例

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
dep_id int
);
insert into dept (dep_name,addr) values
("RD","台北"),
("ME","台中"),
("QA","高雄"),
("EE","台南");

insert into emp (NAMe,age,dep_id) values
("AAA",20,1),
("BBB",20,1),
("CCC",20,1),
("DDD",20,2),
("EEE",20,2),
("FFF",20,2),
("GGG",23,3);
select * from emp right join dept on emp.dep_id=dept.id;
```

### 子查詢

解釋:重點是利用( )去包住查詢結果，並進一步的在外面加上查詢語法
基本語法

```sql
SELECT * FROM table1 WHERE table1.id IN (SELECT table2.id FROM table2);
```
