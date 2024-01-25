---
title: Java-遞迴
date: 2024-01-25 18:15:44
tags: Java
categories: Java
---

遞迴是一種函式`呼叫自己的技巧`，遞迴的函式必須要有一個`終止條件`，否則會無限迴圈下去，直到記憶體爆掉為止。

<!-- more -->

```java
public class Recursion {
    public static void main(String[] args) {
        int result = sum(10);
        System.out.println(result);
    }

    public static int sum(int k) {
        if (k > 0) {
            return k + sum(k - 1);
        } else {
            return 0;
        }
    }
}
```
