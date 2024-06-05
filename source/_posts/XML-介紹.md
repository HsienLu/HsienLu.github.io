---
title: XML-介紹
date: 2024-02-02 17:22:48
tags: XML
categories: XML
cover: /images/default-cover.png
---

### 什麼是 XML

xml 是可擴展標記性的語言，

<!-- more -->

像是，下方具有儲存格式

```xml
<!--  這是一個xml的範例 -->
<!-- student.xml -->
<!-- Student[id=1, name=John ] -->
<!-- Student[id=2, name=Mary ] -->

<students>
    <student id="1">
        <name>John</name>
    </student>
    <student id="2">
        <name>Mary</name>
    </student>
</students>

```

### XML 的作用

1.用來保存數據，而且這些數據具有自我描述性 2.它還可以做為項目或著模塊的配置文件 3.用來傳輸數據(但現在以 JSON 為主)

### XML 的語法

1.文檔聲明

```xml
<?xml version="1.0" encoding="utf-8" ?>
<!--
    version: 版本
    encoding: 編碼
 -->
<?xml version="1.0" encoding="utf-8" ?>
<!---->
<books><!--表示多個圖書訊息-->
    <book sn="123456"><!--表示一個圖書訊息-->
        <title>Book 1</title><!--圖書訊息-->
        <author>Author 1</author><!--圖書訊息-->
        <price>100</price><!--圖書訊息-->
    </book>
    <book sn="46546">
        <title>Book 2</title>
        <author>Author 2</author>
        <price>200</price>
    </book>
    <book sn="5465465">
        <title>Book 3</title>
        <author>Author 3</author>
        <price>300</price>
    </book>
</books>

```

### 什麼是 XML 標籤

1.也分單標籤和雙標籤 2.與 HTML 一樣，XML 也是由標籤組成的，標籤是 XML 的基本組成單元，它是 XML 的一個重要特點。 3.屬性可以提供有關元素的其他信息，每個屬性值必須用引號括起來

### XML 標籤的命名

1.標籤名稱可以包含字母、數字和其他字符 2.標籤名稱不能以數字或標點符號開頭 3.標籤名稱不能包含空格 4.標籤名稱不能包含 xml 等字符

### xml 的規則

1.所有的 xml 元素都必須有一個關閉標籤 2.標籤是大小寫敏感的 3.所有的 xml 標籤都必須合理的嵌套 4.所有的 xml 文檔都必須有一個根元素(頂級元素)
5.CDATA 區塊用於將文本片段包括在內，這些片段中可能包含一些特殊字符，這些特殊字符在 xml 中是非法的，但是在 CDATA 區塊中是合法的

```xml
<![CDATA[<html>
    <head>
        <title>Example</title>
    </head>
    <body>
        <p>CDATA example</p>
    </body>
</html>]]>
```
