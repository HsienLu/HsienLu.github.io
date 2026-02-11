---
title: useRef 和 forwardRef
cover: /images/default-cover.png
date: 2024-06-11 15:00:21
tags: [React,Hooks]
categories: React
subtitle:
---
## 為什麼要使用 `useRef` 和 `forwardRef`？
<!-- more -->
### `useRef`
1. 可以維持元件的狀態，並且不會觸發重新渲染。
2. 可以用來控制DOM元素，例如：focus、scroll、play、pause等。
程式碼範例如下：
```jsx
function MyComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // 自動聚焦
  }, []);

  return <input ref={inputRef} />;
}
```
### `forwardRef`
1. 可以將ref傳遞到子元件。
2. 如果不使用`forwardRef`，React會報錯
程式碼範例如下:
```jsx
// 定義一個 FancyButton 組件，使用 forwardRef 將 ref 傳遞下去
const FancyButton = forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

function App() {
  const buttonRef = useRef(null);

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.focus(); // 使用 ref 來聚焦按鈕
    }
  };

  return (
    <div>
      <FancyButton ref={buttonRef}>Click me!</FancyButton>
      <button onClick={handleClick}>Focus Fancy Button</button>
    </div>
  );
}
```
### 同場加映：`useImperativeHandle`
目的是限制暴露的方法給父元件來做使用
```jsx

// 定義一個自定義輸入框組件，使用 forwardRef 傳遞 ref
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // 使用 useImperativeHandle 來暴露 focus 方法給父組件
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} {...props} />;
});

function ParentComponent() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus(); // 使用 ref 來聚焦輸入框
  };

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Click the button to focus" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```
說明：
1. 自定義輸入框組件 CustomInput：使用 forwardRef 來接收 ref 並將其傳遞給內部的 input 元素。
2. 使用 useImperativeHandle：這允許我們在父組件中自定義暴露的方法（如 focus）。
3. 父組件 ParentComponent：使用 useRef 來創建 ref，並通過按鈕點擊觸發輸入框的聚焦。