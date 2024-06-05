---
title: TypeScript 的 LeetCode-TypeHero
date: 2024-01-26 09:59:09
tags: [TypeScript, TypeHero]
categories: TypeScript
cover: /images/default-cover.png
---

近幾年很火的 TypeScript 加強了 JavaScript 的型別部分，但 TypeScipt 的型別系統其實相當的複雜，於是有人開源了類似 LeetCode 的網站，讓我們可以練習 TypeScript 的型別系統，這個網站就是 TypeHero，今天就來介紹一下這個網站吧!

<!-- more -->

##### TypeHero:https://typehero.dev/

### 操作介面

操作介面相當簡單易懂的，左邊是題目，右邊是編輯器，下方是測試結果，上方是編輯器的設定，可以選擇編輯器的主題，以及是否顯示行號。

#### 說明區

1.Description(說明):附帶蠻詳細有關 TypeScript 的解說
2.Solutionru(解答):裡面會有需多人提供參考答案在上頭
3.Submissions(提交):可以看到自己每一次的提交紀錄

#### 解答區

提供一個簡單的編輯器，進行解答。
題目會像是下面這種形式，然後要補充缺少的型別或是成是碼。

###### 未完成題目

```typescript
const playSong = (artistName, year) => {
  return `${artistName} was released in the year ${year}`;
};

const artistName = "Frank Zappa";

const age = 52;

interface Musician {
  artistName: string;

  // add the rest
}

const musicianInfo = ({artistName, age, deceased}) => {
  return `${artistName}, age ${age}${deceased ? " (deceased)" : ""}`;
};

musicianInfo({
  artistName,
  age,
  deceased: true,
});
```

###### 完成後的樣子

```typescript
const playSong = (artistName: string, year: number) => {
  return `${artistName} was released in the year ${year}`;
};

const artistName: string = "Frank Zappa";

const age: number = 52;

interface Musician {
  artistName: string;
  age: number;
  deceased: boolean;
  // add the rest
}

const musicianInfo = ({artistName, age, deceased}: Musician) => {
  return `${artistName}, age ${age}${deceased ? " (deceased)" : ""}`;
};

musicianInfo({
  artistName,
  age,
  deceased: true,
});
```

#### 測試區

按下 submit 後，會進行測試，如果有錯誤會顯示在下方，如果沒有錯誤，會顯示通過。

![](https://res.cloudinary.com/dvxnfdkhf/image/upload/v1706235228/1_spnmgy.png)

### 小結

其實還蠻好玩的，可以有小範圍的練習機會，而且這種關卡的設計型式，通關後會有一種莫名的成就感，蠻適合像我這種初學的人~
