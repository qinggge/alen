# alen - 一个 UI 组件

[![Build Status](https://www.travis-ci.org/qinggge/alen.svg?branch=master)](https://www.travis-ci.org/qinggge/alen)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用

## 开始使用
  1. 添加 CSS 样式
    使用本框架前，请在 CSS 中开启 border-box

    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```
    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）

    ```
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE 15 及以上浏览器都支持此样式。

  2. 安装 alen
    ```
    npm i --save alen
    ```

  3. 引入 alen
    ```
    import {Button} from 'alen-test-1-1';
    import 'alen-test-1-1/dist/index.css';

    export default {
      name: 'App',
      components: {
        'a-button': Button,
      }
    }
    ```

## 提问

## 变更记录

## 联系方式