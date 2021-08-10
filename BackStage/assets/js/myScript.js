var website = "https://localhost:44375/";
﻿var backStage = "https://localhost:44385/";
var UI = "https://localhost:44393/";

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
