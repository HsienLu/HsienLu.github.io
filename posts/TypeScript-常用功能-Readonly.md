---
title: TypeScript-常用功能-Readonly
date: 2024-01-31 09:19:07
tags: TypeScript
categories: TypeScript
cover: /images/default-cover.png
---

Readonly 其實從字面上很好理解，就是指能讀取的意思。
根據官方文件的說方就是不能被創造一個 Type 的型別物件，其設置的屬性不能被重新賦值。

> Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

<!-- more -->

#### 用法

1. 整個型別都不能被重新賦值

```typescript
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello";
```

2. 可以個別設置屬性為 readonly

```typescript
type Foo = {
  readonly bar: number;
  readonly bas: number;
};

// 初始化
const foo: Foo = {bar: 123, bas: 456};

// 不能被重新賦值
foo.bar = 456; //
```

#### 實際使用場景

React 中的 props 就是一個很好的使用場景，因為 React 為單向資料流，子組件不能修改父組件傳遞過來的 props，所以可以使用 Readonly 來設置 props 的型別，預防突然犯傻直接修改了 props。

```tsx
interface MyComponentProps {
  readonly name: string;
  readonly age: number;
}

function MyComponent(props: MyComponentProps) {
  // 使用 props.name，但不能修改它
  return <div>{props.name}</div>;
}
```
