---
title: Java-特殊類別(介面、抽象、枚舉、匿名類)
date: 2024-01-25 18:09:25
tags: Java
categories: Java
cover: /images/default-cover.png
---

Java 有許多不同的特殊類別，例如：介面、抽象類別、枚舉類別、匿名類別，這些類別都有各自的特性，也有各自的使用場景，這篇文章會介紹這些特殊類別的特性與使用場景。

<!-- more -->

## 介面(Interface)

可以簡單的理解為一個規則

### 介面的特性

1. 介面都是抽象的
2. 規則的屬性為固定值,且不能修改
3. 屬性和行為的訪問權限必須為公共的
4. 屬性是靜態的
5. 行為是抽象的
6. 介面和類是不一樣的東西
7. 介面可以繼承多個介面
8. 類的物件需要遵循介面，在 Java 中這個動作叫做實現(implements)，類需要實現介面，而且可以實現多個介面

### 介面的語法

```java
package basic;

public class helloworld {
    public static void main(String[] args) {
    Computer c=new Computer();
    Light l1=new Light();
    Light l2=new Light();
    c.usb1=l1;
    c.usb2=l2;
    c.powerSupply();
    }
}
interface USBInterface {
}
interface USBSupply extends USBInterface{
    public void powerSupply();
}
interface USBReceive extends USBInterface{
    public void powerReceive();
}
class Computer implements USBSupply{
    public USBReceive usb1;
    public USBReceive usb2;
    public void powerSupply(){
    System.out.println("Computer is supplying power");
    usb1.powerReceive();
    usb2.powerReceive();
    };
}
class Light implements USBReceive{
    public void powerReceive(){
        System.out.println("Light is receiving power");
    }
}
```

## 抽象(Abstract)

只有宣告沒有實作的方法

### 抽象方法(Abstract Method)

#### 語法

> abstract 返回值類型 方法名稱(參數列表);

```java
abstract class Animal{
    abstract void eat();
}
```

### 抽象類別(Abstract Class)

1.因為類不完整，所以不能被實體化，只能被繼承 2.如果一個類有抽象方法，那麼該類必須定義為抽象類 3.抽象類可以有抽象方法，也可以有非抽象方法 4.抽象類無法直接實體化，必須由子類繼承實現間接的實體化 5.如果抽象類有抽象方法，那麼子類必須重寫抽象方法

#### 語法

> abstract class 類別名稱{...}

```java
abstract class Animal{
    abstract void eat();
}
class Dog extends Animal{
    void eat(){
        System.out.println("dog eat");
    }
}
```

## 枚舉(Enum)

1.枚舉是一個特殊的類別，其中包含一組特定對象，這些對象不會發生改變 2.關鍵字 enum 用來宣告一個枚舉 3.枚舉會將對象放置在最前面,後面用分號隔開 4.枚舉不能創建對象，它是在內部創建的

```java
package basic;

public class JavaEnum {
    public static void main(String[] args){
    System.out.println(City.TAIPEI.name);
    System.out.println(City.TAICHUNG.name);

    }
}
enum City{
    TAIPEI("台北"),TAICHUNG("台中"),TAINAN("台南");
    City(String name){
        this.name=name;
    }
    public String name;

}
```

## 匿名類(Anonymous)

在某些場合，類的名子不重要，指向使用類中的方法或功能
如下範例，直接在方法中建立一個類，並且實作方法，並且在方法中使用

```java
package basic;

public class JavaAnonymousClass {
    public static void main(String[] args){
    Me me = new Me();
    me.sayHello(new Person(){
        public String name(){
            return "John";
        }
    });
    }
}
abstract class Person{
    public abstract String name();
}
class Me{
    public void sayHello(Person person){
        System.out.println("Hello " + person.name());
    }
}
```
