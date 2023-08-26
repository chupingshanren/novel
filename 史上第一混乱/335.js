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
<p>&nbsp;&nbsp;&nbsp;&nbsp;就玩推箱子吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥烧了胖子的游戏机房</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这脑洞都能跑火车了</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子是胖子亲封的大司马！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啥意思？？？</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和某教皇一个级别</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜巴巴……包子怕你出事啊</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=14]</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那他老人家是怎么长胖的</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怀疑刘老六就是去酒吧骗酒喝去了[fn=4]</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是朝代上下没联系了么，这真是一个BUG。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忽然有些心酸</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉是bug。。秦舞阳必定死在那天，不会少活一年需要补</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;头前让胖子看了，后脚就来小强这里报道了哈哈哈哈太寸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可不就白给吗</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你老婆就是我闺女，你闺女就是我老…我是不是说反了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汝妻子吾养之，汝勿虑也</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你闺女就是我闺女 你老婆就是…</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高中历史老师对某个特定的朝代了解也就限于那几个大事件</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柯子成了小委屈包了 还撒上娇了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在已经不是了，大司马已经是包子了</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段是个彩蛋，当年罗霸道正在写霸道人生，主角就是王离重生于现代的YY故事。</p>
`;
default:
			return '';
	}
}
        