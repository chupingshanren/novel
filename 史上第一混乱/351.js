$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉太尉啊太师啊就是个称呼似的，就像学校里除了保安，上课的不上课的你都喊老师一样，保安要不穿那一身说不定你也喊老师，大家都一样鬼知道他干嘛的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;洪太尉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;董太师默默点了个赞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧太师</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张叔夜：唉！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其實是這個王太尉在同僚圈子裡人緣差，被排擠，才被眾同僚使計攤上這誰都不願意接招的苦差事的，官場歷來如此</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞧你那点出息，在我家，没头脑和不高兴都是我[fn=29]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暴露年龄了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你还记得这茬儿啊[fn=14]</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家的大宝呢</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用的电信</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花形容词一绝 每次看都有新发现[fn=7]</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忘了有这一段了，哈哈哈哈</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老费职业病了</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的比顶针还真</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的 比真爱都真</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不撩骚儿么 回头人家真装窃听器了🤣</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;社死</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛病 就是产前产后的这一两年 女人心里的敏感期 男人没给老婆伺候好 慢慢的产生的矛盾</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看这个小说能笑出来腹肌</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时候企业单位上班的都有电话了，不过整个单位没几部是真的。除了大头头办公室有就是收发室了，然后收发室的人一天到晚尽接电话了，谁谁谁，你家亲戚要来啊，谁谁谁你娃打架了老师让你去学校啊，都拿小本本记下来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;旗杆3，4米低了点吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迁哥高光时刻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;葛优演的《手机》一开始也是这样</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，这章节的内容量放现在的写手搞不好就扑街了</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这双栖双飞，是不是不犯法[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雨眸这个名字充满了时代感（08年言情风）</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要说我没看懂 有人信吗？ 信了的给我解释下</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，开花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花的戏份太多了啊，照顾自己家亲戚太明显了哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵，你以为这么多章节是怎么和谐的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;史上第一乱搞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼，就是乱搞</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;地图鱼原产南美洲亚马逊河流域，宋朝这会儿你要买，得漂洋过海找玛雅人去</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个没法吐槽，太多槽点</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咋充电啊？</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作死小能手！[fn=8]</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那会儿的手机电量也足，搁现在智能机一天两冲光充电都够瞧的，电池还不能拆卸[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是智能机，时迁能在上面玩俩钟头游戏！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;歪歪草</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花对手机挺有研究的吗，看看这部啥型号📱的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;08年手机样式也算是百家争鸣了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喂喂cao</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33][fn=33]</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;官方吐槽[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;枪，炮也可以呀！不打主要人物，打小兵都可以了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是说要带隐形的过来吗</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没信号的地方手机一直搜索信号电用的特别快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在想电话没电了咋办，先别说信号是咋来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是在梁山上，平地搞不好又没了。</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁山110……</p>
`;
default:
			return '';
	}
}
        