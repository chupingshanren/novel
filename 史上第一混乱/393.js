$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每人每天5快钱的标准，一天1500万，再有钱的主儿，管半个月也得抓瞎，但不是没那么多钱，主要流动资金全拿来干这个了买卖也就基本完蛋了，个人力量永远无法和国家相比</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指屁吹灯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放屁添风</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国标玉米七百一吨，你只要解决港口问题几百万人管一个月饭还是没问题的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;靠屁吹火。。。。</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王贲和章邯见面该怎么论</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是萧太保，太师太傅主文。</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻多聪明</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那之前还敢拉人？</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谈判失败 准备攻坚</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扣上了，前面还以为是bug</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这得多少啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑洞好大</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对头，明朝上国柱，领太师太傅太保的都是死人。相当于谥号</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来是这么理解的 我一直以为是和方便面相同体积的人民币</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一块金砖有手机📱大小</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两块金砖的RMB貌似没多少。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;相同体积？体积？</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想想这个年代就有大炮就很激动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;红衣大炮</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实明朝初期的红衣大炮容易炸膛，精准度不够，杀伤力也不够，主要是用于海上打击船只。要攻城还是元朝的回回炮（抛石车）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他有光刻机[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;火铳？但是前期火器杀伤距离不够远吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明朝是有火器的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古典时代这玩意儿也是堪比原子弹了</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;漫游出征太形象了，要食物点外卖最快了</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈
这钱不能让她前男友掏！</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该说“少了九成”吧……考虑到小花数学26分，姑且就这么着吧[fn=26]</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强就应该骂刘东洋，你丫的瞪我干毛线？我和你们皇上是兄弟，我不也是那孙子的叔辈祖宗？骂他两句怎么了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘东洋是谁？</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
`;
default:
			return '';
	}
}
        