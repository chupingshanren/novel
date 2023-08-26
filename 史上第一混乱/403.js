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
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁山好汉里活到靖康的没几个，按原著征完方腊就剩不多了。</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要怕 叔叔会很温柔的</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弱国无外交啊，没有中美签字，两个朝鲜的停战协议跟废纸一样。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;民族大融合</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两份怎么够。一边至少3份，中间见证人也得有份</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没用打印机复印机？那多半是圣手书生萧让写的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我现在看见“钉”字过敏</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，看成了原太原太，守府了</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙，妙，妙啊。</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道师师和宋徽宗都玩过什么花活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前辈啊！幸会幸会！
小伙子，她就托付给你了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说起来金亡后，完颜家都改姓金了，得，有一个“王储”</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还以为能让他上梁山呢</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝倒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好说，好说😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我特么差点看花眼漏过去了[fn=44]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花，你知道的太多了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;知道就行了别说出来呀[fn=18]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;稳如卖身不卖艺[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈预言家啊小花</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了。</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉反倒像卖身了</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是就是！</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太有画面感了！</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打情骂俏，真有爱。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王储</p>
`;
default:
			return '';
	}
}
        