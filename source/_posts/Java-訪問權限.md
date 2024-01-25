---
title: Java-訪問權限
date: 2024-01-25 18:14:20
tags: Java
categories: Java
---

所謂的訪問權限，其實就是訪問屬性、方法的權利和限制

<!-- more -->

#### public

1. public: 公共的,任意使用,訪問權限修飾符
2. Java 中的`public class`只能有一個,且必須與檔名相同
3. main 方法必須是 public static void,不加不能使用，因為 main 方法是由 JVM 調用的，JVM 應該可以任意調用，不該受到限制。
4. static: 靜態的,靜態方法,靜態變數,靜態代碼塊,main 方法不加 staitic,一樣不能使用

#### private

1. private: 私有的,訪問權限修飾符
2. private 修飾的變數,只能在所屬類中使用

#### default

1. (default): 默認的,當沒有設定訪問權限修飾符時,JVM 會默認提供一個訪問權限，就是 package(路徑)訪問權限，子 package 不能使用
2. default 修飾的變數,只能在同一包中使用

#### protected

1. protected: 受保護的,訪問權限修飾符
2. protected 修飾的變數,只能在同一包中使用,同 package 或是不同 package 子類都可以使用

### 小結

訪問權限由小到大排列
1.private: 只能在本類中使用
2.(default): 只能在同一包中使用,不同的包路徑就不能使用
3.protected: 只能在同一包中使用,同包或是不同包子類都可以使用
4.public: 任意使用,JVM 預設給的構造方法

## 類的訪問權限

#### 外部類

就是直接在程式碼中定義的類 1.外部類只能是 public 或是 (default) 修飾

#### 內部類

就是在類中定義的類 1.內部類可以是 public、protected、(default)、private 修飾 2.內部類就當成外部類的屬性或是方法來使用

##### 內部類如何創建

因為內部類是外部類的屬性或是方法，所以必須先創建外部類，才能創建內部類

```java
package basic;

public class helloworld {
    public static void main(String[] args) {
    //內部類要先創建外部類
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner();
        inner.show();
    }
}

class Outer{
    public  class Inner{
        public void show(){
            System.out.println("Hi");
        }
    }
}
```

## Final

Java 中提供一種語法，可以讓初始化的變數或是方法或是類不被改變，這種語法就是 final

1. final 修飾的變數,只能被賦值一次,不能再次賦值
2. final 不能被 JVM 默認賦值,必須手動賦值
3. final 修飾的方法不能被覆寫
4. final 修飾的類不能被繼承，也就是不能有子類
5. final 不能修飾建構方法
6. final 可以修改方法的參數，一旦修飾就不能被修改

常用的方法搭配構造方法使用

```java
package basic;

public class helloworld {
    public static void main(String[] args) {
    final String name = "John";
      User user = new User(name);
    }
}

class User{
    public String name;
    public User(String name){
        this.name = name;
    }
}

```

## 單例模式

#### 使用情境:

1. 當需要創建一個類的實例，但是又不希望每次創建新的實例時都創建一個新的時候

#### 實作概念:

1. 單例模式是一種常用的設計模式
2. 在單例模式中，類的構造方法是私有的
3. 在單例模式中，類必須自行創建一個實例
4. 在單例模式中，類必須自行向整個系統提供這個實例

```java
package basic;

public class helloworld {
    public static void main(String[] args) {
        SingleMode singleMode1 = SingleMode.getInstance();
        SingleMode singleMode2 = SingleMode.getInstance();
        System.out.println(singleMode1 == singleMode2);
    }
}

class SingleMode{
    private static SingleMode singleMode = null;
    private SingleMode(){

    }
    public static SingleMode getInstance(){
        if(singleMode == null){
            singleMode = new SingleMode();
        }
        return  singleMode;
    }
}
```
