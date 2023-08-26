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
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙呀，一百零八章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐶小花你还说你不是早有预谋！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万一打起来还能喊一嗓子：有请武圣人关二爷附身！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你为什么不给二胖吃？</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论区不屏蔽怎么正文屏蔽了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个也屏蔽，为啥呢</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关羽还没回去，三国时期应该没有客户，开车到不了三国吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强你忘了吗，你客户回去前你到不了他们朝代的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就金一和金二一个道理呗 金一消失</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是会“嘭”蓝雾吗？</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一天换一个的话，你连半年都待不了[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老朱家的审美还是可以的，比爱新觉罗家好多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是空头支票，别信他，老朱出了名的会过日子，小气得很</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;犭句    曰        的</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;退哈 这传染的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;输入法记住了还是打字手秃噜了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;退哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈退哈</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太损了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夺笋啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周仓实惨。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好损啊[fn=5]</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一抬一放，又贴切，又传神，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;官兵又来了？</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大郎吃药了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过来吃酒。   不过在现代待过说喝也不突兀</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真和谐啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈好开心</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，这个屏蔽让我一头雾水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是两千年网络刚兴起时候的老段子了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李解就是拆这里出的事，一炮崩到战国去了，楚日天挖了好久都沒找到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真能琢磨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;江阴 毛纺织厂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阴。。。毛  纺织厂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本江阴人竟无言以对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在床上笑成了一坨肉</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🌿，走，忽略!</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花杀疯了[fn=4]谁能想到23年基本还这些套路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在也是独一家，不过08年就有穿越种田文了我是没想到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;截止2008-11-28 22:25，这样的穿越者你还是独一家的</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尿样…………</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;七八十平的摆十几张桌子已经非常局促了</p>
`;
default:
			return '';
	}
}
        