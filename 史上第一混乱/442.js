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
<p>&nbsp;&nbsp;&nbsp;&nbsp;丢几下就是往天上抛再接住的那种吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神TM丢几下</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那马可遭了罪</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只是那500步兵没马而已，赵云好歹是个将军没马可还行。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪来的同福啊，你们的马不是借的汉朝车馆的么</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;罗师傅附体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这李将军，明明是他让人出枪的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年轻人不讲武德</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双头食人魔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马太滑了</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八旗入关后经过顺治朝就废得差不多了，各地争战，战死一批。多尔衮死后，顺治清算两白旗，闹得在前线的两白旗都搞反清复明了[fn=33]。留北京的也不好过，疫病也是一阵一阵的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这会儿的八旗兵已经废了，平三藩全靠绿营打的，而且当时老吴宣告起兵，一般的督抚都跟着竖了反旗，差点把那些王公大臣直接吓回关外</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这吴三桂能成大事才见了鬼呢</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;話說，玄燁還活著的時候，有康熙這個稱呼嗎…</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦吼 赵云这来就来吧 怎么还来认出了重孙呢</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是，史上唯一一个幸运S级的枪兵。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥：我TM</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天下枪兵幸运八斗，赵云独占一石，而后天下人共欠二斗</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孙子，也不怕风大闪了舌头👅</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵云一时不知道该说什么</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他的人出场打了炮，哪还有体力打仗，子龙胜之不武</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘能关二张三赵四</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;you can try try see</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;colour see see :颜色看看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噗</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你才是前辈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差辈了。</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好！</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
`;
default:
			return '';
	}
}
        