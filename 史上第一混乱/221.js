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
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可闭麦吧哈哈哈哈哈哈哈哈</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好燃啊这段！</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花 你不是数学26分么 算得比我还明白 个骗子[fn=15][fn=15][fn=15]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在卧倒不就赢了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不对，花荣可以用手抓箭挡箭</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，不会武功的人靠近以身救人永远不被发现定律</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以前面庞万春多带了一把弓是给这备着的！！小花绝了</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好爽！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太帅了</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低什么头，跳高一下正中喉咙对面就输了</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精彩！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精彩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太精彩了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精彩</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花竟然算对了</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是一场高手间的生死节奏，可看着文字，硬是刺激不起来！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;污了</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实不是很喜欢这段 尤其后面秀秀爬上去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;估计花荣化成灰秀秀也认识，何况老庞还是个胖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;编的太没有逻辑了，那么多人坐车去的，秀秀不用车怎么跟踪就算前后打车，大晚上人迹罕至前面的人都是武林高手难道没有发现？还有秀秀后到她一个普通人能看见花荣在哪个山头？</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看看有没有傻子杠三百米大喊能听到。</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段真好</p>
`;
default:
			return '';
	}
}
        