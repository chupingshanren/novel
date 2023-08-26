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
<p>&nbsp;&nbsp;&nbsp;&nbsp;四刷的我，看到标题我就笑了[fn=31]</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界线的纠缠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就说了是纪实文学，你们还不信</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二广就是这么作的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦舞阳穿了</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=4]小孩子不要学坏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhhhhh哈哈哈哈哈哈哈哈哈嗝哈哈哈，这段有意思</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花经验丰富啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早泄好像不是病，是心理作用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来早泄的心态是这样的？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怎么这么熟练呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花泄的很有经常了</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我叫磁力棒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;boom！</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈那就成冥钞了。</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饿笑那荆轲无能，齐王少智……</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;配角才有300呢，我的哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上千节电池呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这年头人力成本高嘛。。。何况还是那么大个始皇帝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是重点笑死</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万里长城还是修吧，焚书坑儒就别了……</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大秦人机阵列</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这段，没把我笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那可是真的金币[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啥叫有钱人的快乐你根本想不到。。。</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;未知的是恐惧的
已知的是无聊的</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小知识，其实马里奥顶砖头用的是手不是脑袋[fn=11]</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=34][fn=34][fn=34][fn=34]</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起刘邦说的“他杀的人比你见过的都多。”</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花设想是真的先进，前几年还真有一款声控的横版过关游戏，就那个什么飞的小鸟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子:这游戏延迟太大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈胖子太有才了</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蹲下不喊起立</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
default:
			return '';
	}
}
        