var website = "http://api.linklblog.ikeolife.top/";
﻿var backStage = "http://admin.linklblog.ikeolife.top/";
var UI = "http://linklblog.ikeolife.top/";

//﻿var website = "https://localhost:44375/";
//﻿var backStage = "https://localhost:44385/";
//var UI = "https://localhost:44393/";

// 说明：JS时间Date格式化参数
// 参数：格式化字符串如：'yyyy-MM-dd hh:mm:ss'
// 结果：如2016-06-01 10:09:00
Date.prototype.format = function (fmt) { 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };

    // 根据y的长度来截取年
    if (/(y+)/.test(fmt)){ 
	fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o){
	if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
    return fmt;
}

// 用法： 
//var time1 = new Date().format("yyyy-MM-dd");
//var time2 = new Date(1469281964000).format("yyyy-MM-dd hh:mm:ss");
//console.log(time1);
//console.log(time2);

//MiniDialog自定义弹窗内容级样式（适用于API请求后对返回的结果进行处理时）
        function MiniDialogBoxInit(msgState, msgResult, msgContent, dialogHeight, fontColor) {
            if (msgContent == null) {
                Dialog.msgState(msgResult);
                $(".mini-dialog-main").css("min-height", "0px");
                $(".mini-dialog-wrapper-show").css("height", "128px");
            }
            if (msgContent != null && msgContent.length < 18) {
                Dialog.msgState(msgResult, msgContent);
                $(".mini-dialog-wrapper-show").css("height", "150px");
            }
            if (msgContent != null && msgContent.length > 18) {
                Dialog.msgState(msgResult, msgContent);
                $(".mini-dialog-wrapper-show").css("height", "180px");
            }

            if (dialogHeight != null) {
                $(".mini-dialog-wrapper-show").css("height", dialogHeight);
            }
            if (fontColor != null) {
                $(".mini-dialog-ok>span").css("color", fontColor);
            }
        }
