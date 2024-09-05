---
title: 仿axios套件實做
cover: /images/default-cover.png
date: 2024-09-05 14:31:45
tags: [axios, javascript]
categories: javascript
subtitle:
---
嘗試模仿axios試做一個簡單的get請求

<!-- more -->

```javascript
const url="https://randomuser.me/api/"

const axios ={

    get:function(url){
        return new Promise((reslove,reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET',url);
            xhr.onload = ()=>reslove(xhr.responseText);
            xhr.onerror=()=>reject(xhr.statusText);
            xhr.send();
        })
    }
}
axios.get(url).then(data=>console.log(data)).catch(err=>console.log(err));
```