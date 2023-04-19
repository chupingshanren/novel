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
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪個堂口的？

青木堂韋香主座下</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确认过眼神</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小恩小惠，指活命之恩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们老陕实在人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饿是老陕饿实诚[fn=4][fn=4][fn=4][fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看得我一阵激动。秦兵的气势最令人神往。三刷文，一刷广播者留。</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王贲：你想和我火并？！</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名想起了张翰的笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手动滑稽</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老赵家基因里的绘画天赋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;atui</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先来一波火力覆盖，金兵能剩几个就不好说了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这也没错。大司马被抓了奇耻大辱啊。二十万秦军想打败金兀术不可能，但是拼了命不要冲进去救出一个人还是能行的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;66666随时戳中萌点</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是尸山血海杀出来的，当然够强，也够直接。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实也不能说懦弱 将有问题 然后秦确实猛就是了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实始皇之前六国就被秦惠文王和秦昭襄王祸祸的够呛</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实宋军也是这个战斗风格，他们队伍里能射的有八成，剩下全是重甲步兵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈，看到这块儿，又笑尿了。金兵：我乃大金完颜……，王贲：放。然后转身，行了收工</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这平地没墙吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满天黑压压的箭对着一个人射，糊一墙</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;左脚包子，右脚师师，额头萧不该！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是坐船仓还是坐甲板？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;红花亭畔哪一堂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;左脚反复右脚清明</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;敢问堂上几柱香</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天父地母，反清复明……</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你别管开什么，面子不能丢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你先把酱油和醋给他试试啊</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚从地里刨出来，看一次笑一次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦人喜战 战斗力那不是闹着玩的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老秦人从不饶舌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这可都是活着的兵马俑啊</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太霸气了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这可是从六国战场上现拉下来的。。。。可以说这是几百万大军中最强的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;描写的妙到毫巅……这才是大秦铁血战士。</p>
`;
default:
			return '';
	}
}
        