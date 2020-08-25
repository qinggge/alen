# alen - 一个 UI 组件

[![Build Status](https://www.travis-ci.org/qinggge/alen.svg?branch=master)](https://www.travis-ci.org/qinggge/alen)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用

## 开始使用
  1. 添加 CSS 样式
    出于使用习惯考虑，请在 CSS 中开启 border-box。

    ```
    * ,*::before ,*::after{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ```

  2. 安装 alen
    ```
    npm i --save alen-ui
    ```

  3. 引入 alen
    ```
    import {Button} from 'alen-ui';
    import 'alen-ui/dist/index.css';

    export default {
      name: 'App',
      components: {
        'a-button': Button,
      }
    }
    ```