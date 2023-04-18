$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是richman的音译</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;里士满？打篮球的？</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满洲里</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Richmond 美国弗吉尼亚首府，当初南北对立时候南方首都</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又一个伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西西里黑手党吧，看过这个新闻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;@蛇岐八家</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超过20人的多半打不起来。</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拉尔夫的暴气超杀宇宙幻影</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真点了偷着笑吧，到时候发工资你得给他磕一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑洞可以的</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成霸王色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我靠！</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那么。。到底是怎么回事儿呢？[fn=26]</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有雨点那叫雷雨☔️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强哥多了个儿子。</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看谁先去厕所</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉都没人跟我一起看的了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你能跑过刘邦咋滴、人家有丰富的逃跑经验...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦“我招谁惹谁了？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑喷了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后来。。。</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢胖子果然彪悍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出现了！本书第一狠人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不算单薄就很传神</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这局话得用陕普念出来</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你个藩王常年在外也知道这个。你的宫廷礼仪老师教的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肯定有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还真有</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强子，刚来啊？等你半天了，给你介绍一下，这是我儿子，雷鸣</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;01版陆小凤里 叶孤城的剑就这造型</p>
`;
        case 92:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传说中停车费给10块钱不找零的男人来了</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高低整俩句，名台词啊！</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑喷，这真的是看一次笑一次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一秒破功</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然有帝王之像</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总感觉一个小小的气氛转折都是笑点[fn=5]</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颠颠儿的可还行hhhh</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很从心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起有个版本的聊斋里也有这个场面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷老四和雷老虎是兄弟吧，那雷婷婷和雷鸣是堂兄弟啊，他要是托张念祖来对付你可不太好对付啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能是老师家访的时候，老爹经常这么干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感谢老虎🐯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强怂的很本色嘛😄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我差点都站起来了，笑死我了</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年在高中课堂上偷看到这段的时候，你们知道我憋笑憋的多累吗，脸都青了[fn=30]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都学会陕西话了哈哈</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;混沌买了吗？</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就会说个特么伏笔[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一看包子这颜值直呼不可能，绝对不可能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑尿</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……你老公身边跟的那都是各个时代最黑的黑帮大佬</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都一直想着呢，他居然忘了，回来我就想怎么没提混沌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子跟我一样啊！从第一个店开始我就惦记着啥时候买馄饨啊！</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么直接第二天了呢？？？四更干什么了，还有五更呢</p>
`;
default:
			return '';
	}
}
        