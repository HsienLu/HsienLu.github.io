---
title: "404 - 真巧，竟然在這裡遇到你！"
comments: false
permalink: /404.html
---

<!-- markdownlint-disable MD039 MD033 -->

## 這是一個不存在的頁面
<!-- 圖片 -->
<style>
  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    img {
      width: 50%;
    }
  }
</style>
<img src="https://github.com/HsienLu/HsienLu.github.io/blob/gh-pages/404/NotFound.png?raw=true">

很抱歉，你目前存取的頁面並不存在。

預計將在約 <span id="">5</span> 秒後返回首頁。

如果你很急著想看文章，你可以 **[點這裡](https://hsienlu.github.io/)** 返回首頁。

<script>
let countTime = 5;

function count() {
  
  document.getElementById('timeout').textContent = countTime;
  countTime -= 1;
  if(countTime === 0){
    location.href = 'https://hsienlu.github.io/'; // 記得改成自己網址 Url
  }
  setTimeout(() => {
    count();
  }, 1000);
}

count();
</script>
