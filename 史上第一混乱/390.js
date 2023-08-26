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
<p>&nbsp;&nbsp;&nbsp;&nbsp;刀太凉…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他和钱谦益绝对有点什么关系……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千古艰难唯一死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坑爹呢[fn=59]</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;800米世界纪录1-49</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我跑四百米我宁可去跑三千米，我三千米跑完没事人一样，四百米跑完直接吐了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果园里的狗：你再说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是解开基因锁了吗？</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不看评论还看不懂了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有真自刎的[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在也还是9.58</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们国家也有大的，是真大啊，篮球似的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧洲的都是做的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;9.58了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人类是有极限的，我不做人啦小强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你把终点线放低点，非洲大兄弟们成绩照样突出</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多扯点，多扯点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;节约用水你知道吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扯到开车了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;字数水的好，哈哈</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猎🐴人</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这数咋算的，回去的不到一万，被缴械的骑兵一万，老爷兵5000，难道是被缴械的没回去？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这数咋算的，回去的不到一万，被缴械的骑兵一万，老爷兵5000，难道是被缴械的没回去？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要真是古代…这5000多老爷兵…没有活路的。</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这得是什么家庭条件</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我连一万人都找不到，别说一万匹马🐎了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多稀罕啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我没这条件</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀，你真残忍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不做人啦</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈有这么说话的吗？</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花这个经验有点丰富啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强，不对，小花，你社会经验可以啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脱下裤子来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺有经验啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟韦小宝学的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去裤带主要还是为了防自杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去裤带主要还是为了防自杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个是真的别问我怎么知道的。。。。。。</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都成这样了你还能认出来</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了袁咏仪在007里的表现</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恕末将甲胄在身，不能施以全礼</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强人的坑小花终于开始填了，可喜可贺</p>
`;
default:
			return '';
	}
}
        