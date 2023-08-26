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
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怕不是忘了黄忠黄汉升老将军了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;取我狙来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太克秀，一日透塔里。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这吕布是要无双开大吖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎牢当关万夫勇，辕门射戟百步弓。</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我初中时班里是个女班长，成绩不好，主要是能管得住班里一帮子天天嘚嘚嗖嗖的男生。
毕业聚餐上她一个人吨吨吨干了8瓶，还能继续喝，旁边的男生都让她喝桌子底下去了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家记住咯。女人解酒比男人厉害多了</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子好贤惠QwQ</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是这弓你拉不开啊</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好有画面感</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;98年有了的士速递第一部，很不错的片子，可以第五部还是第四部开始就废了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么早就有的士速递了！</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天上来敌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经天下无敌啦!</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，随时串戏</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;百步飞剑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;理论上来说第一武力应该是刘老六</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全书第一武力第一次出手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拖鞋主人可猛了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;歐陽鋒附身</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噫，好！我中了！</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是没来过重庆啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个可以沈腾客串……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逮虾户</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挂档快不等于加速度快，排量低的车得低档高速才能获取最高加速度。</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么看这书里还是项羽略胜一筹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噫，好，我中了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还会这样？</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛！写的吕奉先活生生站在面前。</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跑跑卡丁车，真是远古回忆了，现在再玩真的没那感觉了，而且画质好像变差了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我决定再下载一个跑跑卡丁车玩玩道具赛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手游感觉还好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跑跑以前挺好玩的，现在……可惜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神™跑跑</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿，还能一隐一隐的复活呢</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二杆子</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这场景写的太牛了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;改锥:哥你把我忘了吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，差点乐抽了</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扣分？那也带有证啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;的士速递男主：我没驾照</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟你开玩笑呢，其实我喝多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;套 牌 车</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前被项羽也整吐过吧[fn=58]</p>
`;
        case 91:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大春的金刚不坏童子功</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可说，不可说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这什么本子剧情？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没着甲是伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赛亚人的尾巴吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花书里每一个人都好萌！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妹的，我也是！[fn=12]</p>
`;
        case 92:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忽然想到，要是包子看到这，晚上把小强榨干瘫倒后会不会也放肆大喊：“我已经天下无敌了”。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噗…</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盖聂的剑躲不掉吗。[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我冷静帅气的大叔，你咋这样了捏？[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;百步飞剑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很传神，这白脸是谁的转世</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;侧面描写得真好</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;名场面就快来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿搬砖继续掀他前脸。你看二胖揍你不！</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连称呼都改了，讲究</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦～～～啊～～～♂</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开无双了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你清醒点 打世界赛呢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是为什么我的脑洞画面里不是吕布，是董卓啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂阶吕布奉先，渣渣(﹁"﹁)</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太燃了！</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然才发现这里的这句话，很经典
</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是按小说来的，否则哪来水浒108，所以大家别较真，一吕二赵三典韦还是一吕二张三典韦虽然有争议，但一吕无异议，三国群英传里吕布也是唯一武力值满100的，其次关张99</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自从虎牢关前，方悦和穆顺用生命，武安国用左手做榜样后。吕布出场基本都是被群殴的命。就连睡着了宋宪魏续也要一起上才敢去绑吕布。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按照演义来说，吕布可以说第一，按正史来算，第一必须得是关二爷，万军从中取敌将首级，威震华夏，一时无二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到了神三吕布了</p>
`;
default:
			return '';
	}
}
        