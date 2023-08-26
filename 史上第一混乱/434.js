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
<p>&nbsp;&nbsp;&nbsp;&nbsp;顺风车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跑滴滴？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑车司机🤔🤔</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;非洲那些国家随便搞个政变种族屠杀也不止15万人</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;离得远远地喊……连靠近都不敢啊？</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这手都从秦朝遮到2008了。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你一个八国联军总元帅怕什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他爹在你面前不就是个弟弟吗。。，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你都只手折历史了快</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蔡瑁张允：喵喵喵？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhhh可愁死我了……</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在母乳里放一粒蓝药，说不定会被仰视角度的包子脸吓哭。而且如果上辈子是男的，断奶就难了。。</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兵力还是减少了，另外把人送进兵道还要给安家费。。主要是少欠关羽一次人情</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么死的？</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都在潜水 很少冒泡</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可是太看得起小强哥了[fn=34]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以都不是好人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天下贼人唯操与强耳[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到位啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总结到位！</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孤闻过则喜，闻过则喜
安敢败吾诗兴(捅)</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想大个了</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少先队队礼我都忘了啥样儿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接班人啊</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有了亲生的就不要小象了</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tui</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没听说过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谦哥附体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎好嘞……回见昂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;优秀哈哈哈</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真会替别人着想</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小象可不是现代的孩子啊</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一问神来之笔啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从来把自己当大人啊！小花神级刻画人物，很令人玩味！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;\(ﾋ•ω•ﾏ)/真是个憨憨</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在只能买旧书了吧</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;基本上不属于人话的范畴了……</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难得这话能从刘老六嘴里说出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈确实</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这小子要是真不死，当时很多事情难说，说不定曹氏一族能多统治一段时间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹操：作为我最喜欢的儿子（曹冲），我给他做最好的父亲，作为最像我的儿子（曹丕）我给了天下最好的君王！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实历史上曹操对儿子们还是挺疼爱的</p>
`;
default:
			return '';
	}
}
        