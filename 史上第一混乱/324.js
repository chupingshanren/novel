$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搞清楚身份，你是为了穿越来的么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;xswl</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该死的二傻哈哈哈</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高要：你了不起，你清高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高要骂骂咧咧的退出了群聊</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李斯不一定能控制住自己的欲望呀，还好有胖子在上面镇着</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子清醒了得多后悔呀……橙汁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……有点心疼</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呃，灭他的九族还行?</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乡下人倒是这样，统治阶级见着了就跟现在的兔子薅鹰酱一样。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子的小人儿理论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咱现在也是，哈哈</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;
好家伙，成仙王了</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好嘛，皇帝议会！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不就是罗马的四个皇帝制度么[fn=33]</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成龙是吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，大鼻子叔叔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;破金杯不算太大吧？尺寸和秦军的一辆战车差不多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;神话&gt;&gt;里的蒙毅可不是成龙演的吗！这是小花的彩蛋吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成龙一样的大鼻子？</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是蕭峰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧峰：何人胆敢冒充我</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么样的皇帝什么样的兵</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好大的伏笔</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;祖上养马的，又和湖人杂处多年，其实秦是游牧国家</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以才会安于平凡的待在你哪里啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;环保，绿色，无污染，无添加剂，在后世也是帝王的享受啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯天然不注水的野味，不用来撸个串白瞎了。</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个礼拜后再来就真见不到二傻了（药效就三天</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神话电影</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦朝哪來的棒子國</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是成龙还是胡歌</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是蒙毅差点判了赵高死刑来着。</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;犹太人在追杀谁</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还欠了三百块钱呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子和轲子铁着呢！</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;史上第一混乱</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是你难道是我们？读者回</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;（这个作者是没有自知之明呢还是揣着明白装糊涂呢？读者回）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;模拟第四，煲药强袭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花是狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花是狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花是狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是的。by读者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我吐槽我自己，就问你怕不怕？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不用怀疑，说的就是你！读者回</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;（这个作者是没有自知之明呢还是揣着明白装糊涂呢？读者回）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张恒：感同身受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是你难道是我们？读者回</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那他要是看过史上第一混乱就省事儿了</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句就是之前提到的那个小品《策划》带火的，用在这里也算不大不小一个梗了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;够数了</p>
`;
default:
			return '';
	}
}
        