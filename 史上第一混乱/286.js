$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case -1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章没书评合着又是刚回复？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;缺的应该是黑，手，党那张，就是往金杯上印黑手印子那章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草 体验感极差 垃圾QD</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;擦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书没法看了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;MMP</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;收藏古董和倒卖文物一样吗</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;社会主义接班人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;jbr</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五十三呢？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章何天窦给小强打电话求救，古董全部被抢，引出人物盗贼空空儿，以及透露了小强是何天窦的接班人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又让狗吃了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又少了一章……没完了还</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我说，防剧透这仨字不觉得跟“往这看”一样么？这不是欲盖弥彰么？一点都不会动脑子。
这就好像本来人家在树林子里建了一个开放式旱厕，头回来的人肯定不知道啊，有些好事的人就在林子边上挂了个牌子，哪哪儿有个旱厕，开放式的。结果有些人就不乐意了，你们这可是在做坏事，怎么还强调开放式呢？不行，我得给他挡住。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透







防剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透








放剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李自成就这德行？</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李时珍输了小强为什么会死[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强死了不就成神仙了吗。。。还是因公殉职成神的那种，待遇肯定差不了，何天窦这是神助攻啊</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神仙也是人啊</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猪八戒：？？你礼貌吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;头三遍看时每次到这里我都得停下来先笑一会，不然回不过气来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神仙也得持证上岗啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猪八戒：？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈不怎么鲨人可还行</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连上了</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少儿版就是半夜女鬼来了跟书生下了一夜的五子棋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对神仙来说，聊斋志异的确属于专业书[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;聊斋志异还有儿童版？！小兔子精迷路了，俩修道的热心肠老虎给送家去了，结果把大兔子精吓死了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好歹和名著是挂钩的[fn=31]</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;钞能力！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蝙蝠侠！</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗汉奸</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有黔驴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不看评论区都不知道啥意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黔无驴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;钱（黔驴技穷</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上课…这词现在也不忍直视了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在教我做事？</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷老四本来就是黑社会的还怕犯法吗</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那特么叫文物，连东西带人都是</p>
`;
default:
			return '';
	}
}
        