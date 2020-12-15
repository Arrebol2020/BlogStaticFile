const catalogMagnet = new Vue({
	el:'#catalogMagnet',
	data:{
		message:'你好！欢迎访问我的主页!',
		link: [],
		postnum:[],
		//这里是磁贴背景图片
		img:[
			"https://cdn.jsdelivr.net/gh/Arrebol2020/BlogImage@main/images/MachineLearning.png",
			"https://cdn.jsdelivr.net/gh/Arrebol2020/BlogImage@main/images/GroupLearning.png",
			"https://cdn.jsdelivr.net/gh/Arrebol2020/BlogImage@main/images/Paper.png",
			"https://cdn.jsdelivr.net/gh/Arrebol2020/BlogImage@main/images/Transshipment.png",
			"https://cdn.jsdelivr.net/gh/Arrebol2020/BlogImage@main/images/ReinforceLearning.png",
		],
		//这里是磁贴描述信息
		describe:[
			"学习课程",
			"组队学习",
			"论文笔记",
			"转载文章",
			"强化学习",
		],
		//这里是磁贴的文字颜色
		figLetColor: {color:'white'},
		//这里是磁贴的文字遮罩
		figLetimg: {backgroundImage: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.4) 25%,rgba(16,16,16,0) 100%)'},
		//这里是当磁贴图片为透明背景png时默认展示的背景颜色
		figbackColor: {background:'#000000 URL()'},
		//这里是当磁贴图片为透明背景png时默认展示的凹凸效果
		figShadow: {boxShadow: 'inset 3px 3px 18px 0px rgba(50,50,50, 0.4)'},
	},

})

catalogMagnet.link = $(".categoryMagnetitem").children().children().children("a");
catalogMagnet.postnum = $(".categoryMagnetitem").children().children().children("span");
let linecolor = catalogMagnet.figLetColor.color
$("<style type='text/css' id='dynamic-after' />").appendTo("head");
$("#dynamic-after").text(".magnetname:after{background:" + linecolor + "!important}");