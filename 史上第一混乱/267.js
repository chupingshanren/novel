$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开门放人这块还是吴三桂业务熟练</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你更应该让秦桧过去，老会计直接把人给你不说还得倒贴你一堆嫁妆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开门 放你入关是吗。句句都是戏啊…</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那倒是</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;零几年就用中华和芙蓉王可不得了，当时我们结婚一般都是大红鹰或者帝豪，领导结婚也就是小苏或者大苏</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搜不到啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;食色大唐没了，进冷宫了吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呦，小花还有这关系呢[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女频的书？</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不抽烟也得每桌摆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来不能，但你一说，我怎么就有画面了呢</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;何止洞穿，把包子家拆了都富裕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是梁山第109好汉 这是要抢亲啊</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抵制恶俗婚闹，有些地方是真恶俗，天呐，打新郎的，恶心人伴娘的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名其妙的風氣，認真給丈人丈母娘磕頭聆訓是應該的，盡是捉弄新郎是怎麼回事？再說，干那些所謂新娘閨蜜屁事？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在好像越来越多了[fn=11]</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴三桂:“你说谁反骨仔？”</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扈三娘原作多惨，好好的大小姐全家被杀，硬是嫁了个又丑又矮的下三滥男人，幸亏小花没写矮脚虎过来，让三娘在这边快活快活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话听着喜庆，但是三姐说出来我突然就很难过。哪个女人不想嫁得风光，三姐何尝不想。</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心真脏</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟着宋徽宗时候见到的吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟张择端见过？客户？</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我大学室友去山西结婚，就是骑着马带着大红花在镇里遛了一圈</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ooxx，在这个小说写的那年特指……男女之事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全是战场啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反应了一会儿，这污的[fn=4]</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个武松果然不一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岂止是有纪念意义，这玩意真的流出去大家都要疯的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;表面上是搞笑，侧面是不是说我们的祖国历史悠久，源远流长，历史上星光璀璨，粪坑里冲出一个泥胎子都“煞有其事”？外国都是乡下！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是价值连城啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是我就要两张。还得写一长串称号的那种</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“抢”字用的好</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完蛋😂，这是娶亲啊，还是打仗啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得..又吵起来了</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也不是不行啊[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赘婿啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;香蕉根据这段来灵感写的赘婿？[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正有那么一位穿越者 就是坐轿子里被自己媳妇儿娶回家了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;混搭的梗就是从这儿来的？？</p>
`;
default:
			return '';
	}
}
        