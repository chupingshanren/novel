$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，回明是好书。月关所有的书我都看过，笔头确实好。但现在转去别的地方了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书居然没凉</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，可怜的赢胖胖，想不到赢胖子嬴哥还有这样萌萌哒的一面 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子早醒了，然后是不是因为害怕就一直没敢动啊hhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴胖子也吓坏了hhhhhhhh</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们让柯南怎么办</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个小楠，一个小兰，表姐妹无疑了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐妹俩互不相识</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是吴三桂的陈圆圆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟齐名，柳如是，苏小小，陈圆圆，李师师</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;.........</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;.......</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;.........</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你告诉它明早来当铺接你吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……无人驾驶还自动找地停车……特斯拉需要你代言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;......</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;......</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;......</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;......</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;......</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;......</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;师师真的招人喜欢</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇！我太喜欢秦始皇了，不愧是千古一帝，淡定，稳重，聪明</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀手，有味就不好了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有味杀人不方便    毕竟是刺客</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就你两个老色皮聪明。</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这时候就靠直升机往下扔悬降索或绳梯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不知道书友们家乡什么风俗，我们这儿讲究的是接亲时不能走回头路</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;踢裆</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;横店影视城表示不服</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是现在真有这么个学校，那可就好了</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建议改名为萧墙</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人死贴你，还傻傻的没心没肺的，就赶紧娶回家吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不憋啊</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还能找到笑点，你说我的城府在这啥都不是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻译腔[fn=33]</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得不是虞姬，可能是小妾或者贴身丫鬟啥的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图他长得好看啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;馋身子啊</p>
`;
default:
			return '';
	}
}
        