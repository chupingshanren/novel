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
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节到位</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;相爱相杀</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦：其实我更惦记包子</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是项羽对他太好没反应过来</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强版范增</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只见邦子一扶身上的缸，恕季甲胄在身不能施以全礼！</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还小 好多东西不太懂 请问各位大佬 日和爆有区别吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处竟无评论，小花这么早就开这车了啊，，，</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夹带私货[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈不爽的很</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张良也是够可以的，一般谋士碰到刘邦这样不行就蹽的德行，就算没被坑死也被气死了吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我两头的，怎么了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;习以为常还行</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;范增：你来抢我戏份？</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强也告个大方便～听上去就好笑</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强不厚道，怎么能抢大家的台词呢？让导演很难办啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一顿噎死了多少古人啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老曹的槽让你给吐了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强要不是拿着玉斗回来，这次表现的比老范还积极</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天就没一个能把词儿说完的是吧</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人有隔间嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特别是在公司遇到和领导一同上厕所那更尴尬😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈
顺便另一边厕所遇到熟人听到水声也挺尴尬的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“最近挺好的？看颜色你这有点上火啊”</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他说的都是我的词啊[fn=28]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老头要气死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们俩就让老头骂两句出口气吧，憋憋出个好歹来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老范也是倒霉，被项羽气了两辈子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;范增被憋死了，撒花～</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;微微一笑，绝对不抽</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;韩信拜将</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘备手一抖筷子掉地上，刘邦手一抖尿裤子上。真是一家人啊</p>
`;
default:
			return '';
	}
}
        