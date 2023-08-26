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
<p>&nbsp;&nbsp;&nbsp;&nbsp;撒混天祝鼎，棋魂靠大饼，爱bia才灰牙……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱拼才会赢</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段以前不是这样的 我记得是个bug，小花应该是改过了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是才，是加。爱bia加诶呀</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以为叫了三个人
李二
狗王
老三</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张老四，刘老五</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你算问对人了！</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一車拖300人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;外掛進時光隧道，不是會灰飛煙滅嗎</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他还没经历呢</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拖拉机类似炸金花吗，每人三张牌，3张A最大，345大于同花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坐标东北，我小学的时候家里人就会玩拖拉机，我现在已经大学毕业了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拖拉机类似炸金花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们这叫锄大地</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挖坑是陕西的一种扑克打法，张小花在陕西生活过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不懂</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那感觉这就没必要挖了啊。。。</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这事也简单，大天黑的金兵哪能看得清脸，让戴宗穿上小强那一身，那个王八蛋能跑得过戴宗啊，而且小强也不用冒险了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;即使再一次重生，300还是愿意为了小强以死相拼</p>
`;
default:
			return '';
	}
}
        