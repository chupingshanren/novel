$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里笑疯了[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝金委屈啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝金：嘤嘤嘤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;*****
宝金的迷茫</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还挺懂规矩啊</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人的外貌跟性格真的有很大关系，长相相同气质不同差别很大</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花记错了，其实是鲁智深擒方腊，不过民间有武松单臂擒方腊的说法</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错，就是高数线代课上的各位</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，这算细节不？在酒吧混的朱贵对摇头丸更了解一些。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么一定要逼人记起上辈子</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是自然</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不少熟人在场 抹不开面儿啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是西楚霸王…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以，只能当将军。当不了老大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叹一声真汉子</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都攀上小强这个准神仙了那可不是享福嘛🌚🌝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后半辈子享福就从这会儿开始咯</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;论虞姬是怎么形成的</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真英雄也！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我真的不了解历史上的方腊，不过看到这里，真的想叫这书里的老王一声方大哥！</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名的想笑[fn=33]</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;敞亮！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
`;
default:
			return '';
	}
}
        