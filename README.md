# @douhao/px2rpx

[![npm (scoped)](https://img.shields.io/npm/v/@douhao/px2rpx.svg)](https://www.npmjs.com/package/@douhao/px2rpx)
[![Downloads](http://img.shields.io/npm/dm/gulp-cli.svg)](https://www.npmjs.com/package/@douhao/px2rpx)
[![size](https://img.shields.io/github/languages/code-size/aqkj/douhao-px2rpx.svg)](https://www.npmjs.com/package/@douhao/px2rpx)

将px单位转化成rpx单位

## Install

```
$ npm install --save-dev @douhao/px2rpx
```

## Usage

```js
const { px2rpx } = require("@douhao/px2rpx");

gulp.src(filepath)
  .pipe(px2rpx({
    size: 375
  }))
```
