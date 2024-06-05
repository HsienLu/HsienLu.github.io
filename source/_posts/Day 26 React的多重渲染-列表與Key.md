---
title: Day 26 React 的多重渲染-列表與 Key
date: 2023-10-10 13:54:31
tags: [React, JavaScript]
categories: 鐵人賽
cover: /images/default-cover.png
---

在 react 使用遍歷陣列的方法來呈現畫面是挺常見的，我們今天想要呈現一個陣列裡面的資料如下:

<!-- more -->

```
  const tasks = [
    { id: 1, text: "看完 React的文件 " },
    { id: 2, text: "寫一篇部落格文章" },
    { id: 3, text: "學習 JavaScript" },
  ];
```

基本上我們不可能一個一個複製貼上，所以會利用 JSX 的 JavaScript 方法，去讀取資料並呈現畫面，有點像是 PHP 那樣的感覺。看範例寫法如下:

```javascript
function App() {
  const tasks = [
    {id: 1, text: "看完 React的文件 "},
    {id: 2, text: "寫一篇部落格文章"},
    {id: 3, text: "學習 JavaScript"},
  ];

  return (
    <div>
      <h1>我的任務清單</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
```

上面的範例是使用 map 的方法，不過這裡使用 forEach 也可以，差異是 map 會回傳新陣列但是 forEach 不會，至於 React 中為什麼會慣用 map 的原因與 hook 中的 useState 有關，這裡就先不多做贅述。

### key 值的作用

仔細看上述的程式碼，會發現與正常遍歷陣列的方法不同的是多了一個 Key 值，它的作用是讓 react 能區別每一筆資料，雖然如果不給 key 值 react 會預設 index 當作 key 值，但是這不是一個好的寫法，因為可能會產生不穩定性(像是在對陣列操作增加、刪除之類的)，造成渲染畫面的不確定性。

所以設定 key 值需要注意以下條件: 1.唯一性 2.必須從外部設定，不要再遍歷函示產生 3.不能隨意地被改變

## 總結

以上就是渲染陣列物件基本的方法，而且會與後續在使用 Hook 的順暢度會有直接的關係。

## 參考資料

[React 官方網站](https://react.dev/)
