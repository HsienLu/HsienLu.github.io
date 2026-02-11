---
title: Java-靜態方法
date: 2024-01-25 18:12:39
tags: Java
categories: Java
cover: /images/default-cover.png
---

- 靜態方法是一種特殊的方法，它可以在不創建類的情況下使用。
- 關鍵字 static 表示靜態方法，它屬於類，而不是屬於類的實例。
- 靜態方法可以直接使用類名.方法名調用
- 靜態方法不能訪問成員屬性和成員方法
<!-- more -->

#### 範例

```java
package basic;

public class helloworld {
    public static void main(String[] args) {
        TestStatic test = new TestStatic();
        test.test1();
        TestStatic.test2();
    }
}

class TestStatic{
    public void test1() {
        System.out.println("non-static Hello world!");
    }
    public static void test2() {
        System.out.println("Static Hello world!");
    }

}


```

### 靜態代碼塊

類的程式載入完成後會自動執行的程式碼，只會執行一次。可以完成靜態屬性的初始化。

#### 範例

```java

public class helloworld {
    public static void main(String[] args) {
    TestStatic t= new TestStatic();
    TestStatic.test();

    }
}

class TestStatic{
    static {
        System.out.println("static block");
    }
    static void test(){
        System.out.println("test");
    }
}
```

> 創建實例時也會執行代碼塊，但不是靜態代碼塊，而是代碼塊。
