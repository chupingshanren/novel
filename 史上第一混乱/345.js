$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是宋清穿越过去的作用了，小花考虑真周到，前后能够呼应，厉害😄</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和天斗明明是老神仙你说人家神棍，刘老六那样的才是神棍呢</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这药看起来很弱的样子！喝！</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写的太好了</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然李逵也不是东西，但是宋江是真的对不起他</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到，李逵这么粗豪这么随心所欲的人却想要再活一年去什么仙界而不想转世。。是因为潜意识终究难以接受自己会这么被宋江哥哥毒死吗。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段描写真的把李逵写得很李逵</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是你呀小黑胖</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;病娇始祖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天杀星啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然莽，但是对他哥感情真是没话说</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假意悔过，来日再反</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么叫假意招安啊（后仰）</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲哥啊……</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;目前这个配置等于是梁山6派系，元老派，卢俊义派，官军派一半的人，宋江派一大半人，三山派只有杨志一个人，但是三山派肯定不诏安，就剩登州派不受控制，铁了心不招安宋江说啥也没用</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不叫学友</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张顺好像比张横大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大帅，下一站就是皇姑屯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这尼玛是史诗级剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要叫张学良，长命百岁</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还真不知道是什么梗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;整点易服芬吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈好古老的广告</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿越者姿态……</p>
`;
default:
			return '';
	}
}
        