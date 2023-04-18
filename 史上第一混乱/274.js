$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case -1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花你真特么是个大预言家，陕西西安咸阳国际机场下面真有秦王墓，今天刚刚报到出来的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜，五人组要走了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥要挖自己的坟了[fn=4]</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什？！贤者时间这么长的吗[fn=62]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要用春秋笔法，要告诉大家，到底躺了多久才回气的</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;徐得龙:必要时可将其打晕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柳下惠转生到了南宋？柳下挥，哦，柳下挥和张小花一个时代的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他们一年后就得走，没法长留，哪来的感情？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是你那本书里的内容吧。早点发出来吧，估计还是个都市兵王类型的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这孩子我一直觉得不是玻璃就是那啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;硬着无动于衷</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花对30万像素念念不忘啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在已经上亿了。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在谁拿300w像素的手机。。。</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和天斗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是和天斗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和天斗？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到了高植物</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剧透没马不谢













</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次看就猜到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猜都能猜到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透

</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和天斗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和天逗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和天斗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正解</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，前面陈可娇才说过只卖出去一套，这***不是和天斗我就改姓何！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是和天斗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和天斗？</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用2B铅笔把里面的胶垫涂满，吹干净就行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把手柄拆开，用橡皮沾口水擦。指定好使。</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草，差点看成How dare you</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;good moring my neighbors！[fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是挂皮？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;fine thank you and you</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剧透好像被删除了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草，差点看成How dare you</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这俩不是一个意思吗[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我擦 别剧透啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看的我有点上进的冲动了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透








</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透墙





</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贼尼玛？</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈都怪这本书，我看到的秦始皇不是个胖子都觉得不对劲</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我真是太喜欢这个画面了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;WCG啊。。。已经消逝的经典赛事啊。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2023.1.1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合影~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多次路过，留个痕迹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年第一次看到这一段的时候脑子里的画面感太强了！现在也是！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;n刷留念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022.09.07</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;整本书最印象深刻的一段，合影留念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能画下来就好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;22年8月18</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;N刷合影</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合影</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合影留念!逝去的青春啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太爱这个画面了，合影留念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为这个难忘的画面留个评论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个画面我依然记得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段真的是难忘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5+2人组</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴三桂怕不是想起翠湖边上的朱由榔了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个画面我记了好多年！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;名场面啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个画面我太爱了呜呜呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有画面了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个画面真是太棒了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记住这个画面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我真是太喜欢这个画面了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年参加过CS的预选赛，可惜没出线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在是2018年，一星期前我还看了广州的网易魔兽中韩对抗赛，但是魔兽如日中天的时候已经过去十几年了…写这一章的那年，冠军是infi吧～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;WCG啊。。。已经消逝的经典赛事啊。。。</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段找吴宇森拍吧，感觉挺合适的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得第二次出现这个画面我哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段文字再出现的时候眼泪都要出来了</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;更美了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈某嬴姓胖子~太喜欢张小花笔下的秦始皇了[fn=33]</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;检测一氧化碳浓度？怎么检测，点燃之后看爆炸威力来测试？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一看强调这么细看来是伏笔啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;fubi</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这感叹一句，时代变了（考古工作的科普做得越来越好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我们的政策压根不会主动找宝贝，没发现的就让他安静待着，已发现的大多数也让他安静待着。几乎所有被挖掘的古墓都是在工地上一铲子下去，破坏了墓室主体，不得不进行抢救性挖掘</p>
`;
default:
			return '';
	}
}
        