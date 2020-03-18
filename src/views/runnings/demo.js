import name from '@source/css/demo';
import '@source/js/demo';
import * as utils from '@source/js/utils';

var assetDir = '/src/sources/images/'; // 图片路径配置
// import React from 'react'
// import ReactDom from 'react-dom'
// ReactDom.render(<h1> Hello, world! </h1>, document.getElementById('root'))
// require('../../sources/images/worker/bg/bg.png');
let img = new Image();
let imgs = require('../../sources/images/worker/bg/bg.png');
img.src = imgs;
img.onload = function() {
    console.log(333);
    document.getElementById('img').src = imgs;
};

console.log(name, utils, imgs);