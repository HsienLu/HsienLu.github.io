---
title: Java 物件導向的特性
date: 2024-01-24 18:11:25
tags: Java
categories: Java
cover: /images/default-cover.png
---

Java 身為標準的物件導向程式設計語言，物件導向程式設計的特性有繼承、多型、多載、重寫，這些特性都是為了讓程式碼更加的模組化，讓程式碼更加的容易維護與擴充。

<!-- more -->

### 物件導向程式設計的特性

#### 繼承(Extends)

1.父類別是在子類別建構出來前就就建構出來的，子類別會繼承父類別的屬性與方法，完成父類別的建構後。 2.以物件的概念，每一個子類對應到的父類都是各自獨立的，而子類繼承父類的屬性與方法，就是子類繼承父類的物件。
3.super()可以呼叫父類的建構方法，super.可以呼叫父類的屬性與方法。this()可以呼叫自己的建構方法，this.可以呼叫自己的屬性與方法。 4.如果父類提供建構方法，那麼 JVM 不會自動提供預設建構方法，所以子類必須要有對應的建構方法，否則會出現錯誤。

以 JAVA 為例，繼承的語法如下：

```java
class 父類別 {
    // 父類別的屬性與方法
}
class 子類別 extends 父類別 {
    // 子類別的屬性與方法
}
```

#### 多型(Polymorphism)

所謂的多型，就是同一個物件在不同場景下，會有不同的表現形式。 1.多型其實會在對物件的使用場景下進行限制，例如：父類別的物件只能使用父類別的屬性與方法。

```java

public class helloworld {
    public static void main(String[] args) {
    Person p1=new Person();
    p1.sayPerson();
    Person p2=new Boy();
    p2.sayPerson();
    p2.sayBoy();//這裡會出現錯誤，只能使用Person的屬性與方法，不能使用Boy的屬性與方法。
    //改成如下
    Boy b2= new Boy();
    b2.sayBoy();

    Person p3=new Girl();
    p3.sayPerson();
    p3.sayGirl();//這裡會出現錯誤，只能使用Person的屬性與方法，不能使用Girl的屬性與方法。
    ////改成如下
    Girl g3=new Girl();
    g3.sayGirl();
    }
}
    class Person {
       void sayPerson(){
              System.out.println("I am a person");
       }
    }

    class Boy extends Person {
        void sayBoy(){
            System.out.println("I am a boy");
        }
    }
```

#### 多載(Overload)

1.一個類別中，不能重複宣告相同名稱的方法，這裡的相同是指方法名稱與參數列表都相同，與返回值無關，但是可以宣告相同名稱的方法，只要參數列表不同(個數、順序、類型)即可，這就是所謂的方法多載。

```java
package basic;

public class helloworld {
    public static void main(String[] args) {
        LoginApp loginApp = new LoginApp();
        loginApp.Login("123456789","123456");
        loginApp.Login(123456789,"123456");
        loginApp.Login("11@11");
    }

    static class LoginApp {
        void Login(String account,String password){
            System.out.println("帳號密碼登入");
        }
        void Login(Number phone,String password){
            System.out.println("手機號碼密碼登入");
        }
        void Login(String email){
            System.out.println("email登入");
        }
    }
}
```

2.構造方法也有多載

```java
package basic;

public class helloworld {
    public static void main(String[] args) {
 LoginApp loginApp = new LoginApp();
    loginApp.LoginApp();
    loginApp.LoginApp("AAA");
    }

    static class LoginApp {
     void LoginApp(){
         System.out.println("原生");
     }
     void LoginApp(String name){
         System.out.println( name+"重载");
     }

    }
}
```

#### 重寫(Override)

子類別可以重寫父類別的方法，但是要注意的是，子類別重寫父類別的方法時，方法名稱、參數列表、返回值都要相同。 1.一個類能使用什麼方法取決於引用的變數類型 2.一個類能使用什麼屬性取決於引用的變數類型 3.一個類的方法如何實現取決於實際的物件類型 4.一個類的屬性具體的使用不需要考慮實際的物件，屬性在哪裡宣告在哪裡使用

```java
package basic;

public class helloworld {
    public static void main(String[] args) {
        Child c = new Child();
        c.print();
    }

    static class Parent{
        String name = "Parent";
        public void print() {
            System.out.println("I'm a parent");
        }
    }

    static class Child extends Parent{
        String name = "Child";
        public void print() {
            System.out.println("I'm a child");

        }
    }
}
```
