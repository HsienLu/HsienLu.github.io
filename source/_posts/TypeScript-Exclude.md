---
title: TypeScript-Exclude
date: 2024-02-01 09:33:12
tags: [TypeScript]
categories: TypeScript
cover: /images/default-cover.png
---

### Exclude<UnionType, ExcludedMembers>

顧名思義，就是排除某些類型的意思。
引用官方的說法：從 UnionType 中排除所有可分配給 ExcludedMembers 的聯合成員，以構建一個新的類型。

> Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers

<!-- more -->

### 用法

1.排除某個型別

```typescript
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
```

2.排除多個型別

```typescript
type text = "A" | "B" | "C" | "D" | "E";
type T1 = Exclude<text, "A" | "B" | "C">; // "D" | "E"
```

3.排除某個類型

```typescript
type T2 = Exclude<number | "b" | "c", string>; // number
```

4.排除物件類型

```typescript
type animal = {name: "dog"} | {name: "cat"} | {name: "pig"};
type T3 = Exclude<animal, {name: "dog"}>; // {name:"cat"} | {name:"pig"}
```

5.藉由形狀排除型別

```typescript
type animal = {name: "dog"; age: number} | {name: "cat"} | {name: "pig"};
type T4 = Exclude<animal, {age: number}>; // {name:"cat"} | {name:"pig"}
```

6.藉由樣板文字排除型別

```typescript
type animal = "Adog" | "Bcat" | "Cdog" | "Dpig";
type T5 = Exclude<animal, `${string}${"dog" | "cat"}`>; //"Dpig"
```

### 小結

Exclude 用來排除某些型別，可以用來排除單一型別、多個型別、某個類型、物件類型、形狀、樣板文字等等。

### 參考資料

[Exclude](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion)
[9 Ways to Use Exclude in TypeScript-Matt Pocock](https://www.totaltypescript.com/uses-for-exclude-type-helper)
