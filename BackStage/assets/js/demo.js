function $(selector, context) {
	return (context || document).querySelector(selector);
}

function $$(selector, context) {
	return [].slice.call((context || document).querySelectorAll(selector));
}
$$(".button-box").forEach(function (el) {
	if ($$("button", el).length === 1) {
		$("button", el).style.cssText = "display:block;margin:0 auto;";
	}
})
$("#container").style.display = "block";
$$("#button-box-1 button").forEach(function (btn, index) {
	btn.onclick = function () {
		var type = ["info", "success", "warn", "error"];
		Dialog[type[index]](type[index] + " 对话框", "内容区域");
	}
})
$$("#button-box-2 button").forEach(function (btn, index) {
	btn.onclick = function () {
		switch (index) {
			case 0:
				Dialog("内容");
				break;
			case 1:
				Dialog("标题", "内容");
				break;
			case 2:
				Dialog("标题", "内容", 800);
				break;
		}
	}
})
$$("#button-box-3 button").forEach(function (btn, index) {
	btn.onclick = function () {
		switch (index) {
			case 0:
				Dialog({
					title: "标题",
					content: "内容"
				});
				break;
			case 1:
				Dialog({
					title: "标题",
					content: "内容",
					width: 800
				});
				break;
			case 2:
				Dialog({
					title: "标题",
					content: "内容",
					contentBgColor: "#f5f5f5"
				});
				break;
		}
	}
})
$("#button-box-4 button").onclick = function () {
	this.textContent = "再打开一个对话框";
	Dialog({
		title: "标题",
		content: "内容",
		draggable: true
	});
}
$("#button-box-4 p").onclick = function () {
	Dialog.close();
}
$("#button-box-5 button").onclick = function () {
	Dialog({
		title: "标题",
		content: "内容",
		fullscreen: true
	});
}
$("#button-box-6 button").onclick = function () {
	Dialog({
		title: "标题",
		content: "内容",
		autoClose: 5000
	});
}
$("#button-box-7 button").onclick = function () {
	Dialog({
		title: "标题",
		width: 1100,
		iframeContent: {
			src: "http://www.baidu.com/",
			height: 600
		},
		showButton: false
	});
}
$("#button-box-8 button").onclick = function () {
	Dialog({
		width: 1100,
		imageContent: {
			src: "1.jpg",
			height: 600
		},
		showButton: false,
		showTitle: false,
		maskClose: true
	});
}
$("#button-box-9 button").onclick = function () {
	Dialog({
		width: 700,
		imageContent: {
			src: ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"],
			height: 400
		},
		showButton: false,
		showTitle: false,
		maskClose: true
	});
}
$("#button-box-10 button").onclick = function () {
	Dialog({
		width: 800,
		videoContent: {
			src: "https://blz-videos.nosdn.127.net/1/HearthStone/f6cd63b590d416821d3e27e0.mp4",
			height: 450
		},
		showButton: false,
		showTitle: false,
		maskClose: true
	});
}
$("#button-box-11 button").onclick = function () {
	Dialog({
		title: "标题",
		content: "内容",
		ok: {
			loading: true,
			loadingText: "等一会",
			callback: function () {
				setTimeout(function () {
					Dialog.close();
				}, 3000)
			}
		}
	});
}
$("#button-box-12 button").onclick = function () {
	Dialog({
		title: "标题",
		content: "内容",
		ok: {
			callback: function () {
				alert("确定");
			}
		},
		cancel: {
			callback: function () {
				alert("取消");
			}
		}
	});
}
$("#button-box-13 button").onclick = function () {
	Dialog({
		title: "标题",
		content: "内容",
		afterOpen: function () {
			alert("打开了对话框");
		},
		afterClose: function () {
			alert("关闭了对话框");
		}
	});
}