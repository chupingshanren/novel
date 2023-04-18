$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;QQ头像……有画面了</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实窝囊，明明自己打入四强，结果另外三强全部弃赛，就算有实力拿冠军那别人也会觉得你是运气好[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;村里的应该都看到了吧[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实🤣</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗跖可帅了</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我眼泪都乐下来了。大家有没有脑补画面。秦桧一脸惊魂未定犹如靠墙衣衫不整的娘子，眼巴巴的看着强子弱弱的问，谁呀？柳下惠你认识吧，他弟弟。秦桧先是错愕，像刚送走一流氓又来俩嫖客。再是耷拉着眉眼瘪着个嘴恍然道，盗跖啊？言罢转即一脸委屈的说了句，不是一个风格。就像这俩嫖客还就偏爱后门别棍一般。真不是一个风格</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家盗跖可是强盗土匪的开山祖师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到窦娥冤那会儿也就两千多年吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各有各的坏法
反正人家盗池没遗臭万年</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他又不是你客户，关注他干啥</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当流氓的脑子就是好使</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;念叨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;念叼你还行</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;师夷长技[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太阴险了[fn=4]</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看 像我这种有文化 有身份证的人 说的文雅一点我就懂了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回头再给项羽吃一块呗</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;10分钟内，对面的力气会小很多，忘记武松被小花坑过一次了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强之前是想用赵白脸的饼干害人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来有人是第一次看啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵白脸理论上说是无敌的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么不直接给赵白脸的饼干啊</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个前凸后翘的妹子挂他身上帮他做拉伸，好吧这内容在本书是不存在的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;健身[fn=4]</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把自己写的真帅[fn=26]氛围感拉满</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大胡子：[fn=47]</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大胡子：怪我咯？   [fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神仙还是厉害，照这样李元霸也打不过小强（虽然十分钟以后小强会散架）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃了以后被复制的人会有一点点削弱</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一块二的体格变一块六了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别是王小军他媳妇的富康</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哲……学。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哲……学？</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大实话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家以为你借力打力呢。</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈小强这嘴也是没谁了</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多乎哉，不多也</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起记忆碎片了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老年痴呆也这么准备</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那岂不是用的古文</p>
`;
        case 103:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三百乘以二乘以三，就是一千八</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这是为难我强哥</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔怪呢？怎么不来说伏笔了</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对，还有喜欢带相机的，啥，那个时代没相机？那就让画师观摩呗。</p>
`;
        case 108:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;程丰收：打开麦克风交流</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;vhs</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;城乡结合部 这两处就算不错的产业了 尤其回收站 这还是给小强面子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;干得漂亮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再招恨，再汉奸，怎么也是个宰相啊，这绝对比吃饭睡觉打秦桧还侮辱他呀</p>
`;
        case 109:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自古一楼不简单[fn=35][fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论区乱上加乱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这评论区比书还乱……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒋门神其实和武松没仇，施恩不是好东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼流脾。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书已够乱了，本章说更机巴乱，哪跟哪啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武松醉打蒋门神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎?打蒋门神的不是鲁智深?</p>
`;
        case 111:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
`;
default:
			return '';
	}
}
        