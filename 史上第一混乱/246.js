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
<p>&nbsp;&nbsp;&nbsp;&nbsp;他毕竟大你三岁嘛，小时候大一岁都是等级压制，等你初中他也高中了吧，哪好意思跟个初中生动真格的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也许是丁原呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;划重点 还真是 小花恶搞太严重啊</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心死如灯灭啊</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？就这？就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这就这就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这就这？</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有画面感……</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还可以是伊布</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这又让我猝不及防呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人中出吕布，马中出赤兔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;貂蝉？</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎～得劲了</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前我一直以为踩碎地砖过于夸张，直到我见了我们班一个女同学（扔铅球的），身高180正，体重不清楚但估计不会低于180，和她男朋友闹掰了，一脚跺地，瓷砖四分五裂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们不要再打了啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 要打去练舞室打</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我走？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巨石和阿诺打架插进去被误伤也就是住个院，这俩被误伤头都飞了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这份镇定其实真的不容易，你想象一下巨石和阿诺在你脸上打架，你还没忍住吼了一嗓子</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘老六明确说了，虞姬没投生到现代来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全文包括番外，都没提倪思雨跟虞姬有关系啊，而且虞姬好像是投胎到隋朝了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不用你找，我猜一定是倪思雨！思雨，思羽，这要不是虞姬才见鬼了。</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么早就有白给这个词了阿，我就说怎么听着耳熟，感情老早就在小花这看到过了。</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无马不是骑兵[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大意失亲妈</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是致富，来扶贫的</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，我突然想到了什么</p>
`;
        case 89:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽拽着小强跑，小强直接被拽得两脚离地，在空中飘成一个人体，啊就旗帜[fn=31]</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瘸腿兔子要登场了</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老何找的的人都去育才了  ， 老刘找的人一年就走了 ，  完美填补空缺啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面我就猜想如果霸王和吕布遇上哪个更强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老何跟小强也是一段孽缘哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老小孩啊😂</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花起名字总是辣么牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;预言帝啊！后面真的出了一部叫王牌对王牌的综艺节目。</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可以叫萧小小。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是我说你们，这个水平真是……肖了小，那剩下的肯定，小强就是肖了就没有了么。肖梅[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你正好是肖强呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宵小小…</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝代双骄何辜？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈那谁是小鱼儿谁是花无缺，就小强这脸皮怎么的也得自认个花无缺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朋友，我当你一世朋友</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很绝代双骄还行</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金少炎那有匹屡败屡战吧，哈哈，等看后面我猜得对吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小金子不是早就买了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么说呢，不可能来个机器猫吧？所以……公园就是口袋投胎来的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是公园！小强啊你们那里连养马场都没有吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这倒是真的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;公园是个好地方，缺弓箭有弓箭，缺马有马的</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;智力8[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摩托车也不是净补轮胎呀。。。。。应该是兽医</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三国那儿应该没有马掌，连高桥马鞍好像也没有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭了</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史上有刘老六吗？较这劲不是闲得慌嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史上并木有貂蝉这个人……</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人怕老婆，有几个是因为打不过啊？</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕奉先，洒家佩服你三国无双，汉末无对，但你往你的人性上贴金，洒家拼了一死也要往你脸上啐一口！你为啥仨干爹心里有数没</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还真就是，要不丁原怎么死的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他自己心里没数的吗。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得加钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加台车就可以 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕布不是  二胖是啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一代新父换旧父</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是～吗！？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕奉先，洒家佩服你三国无双，汉末无对，但你往你的人性上贴金，洒家拼了一死也要往你脸上啐一口！你为啥仨干爹心里有数没</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不轻易就不好说了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还真就是，要不丁原怎么死的？</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猝不及防</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这跟现代人有啥区别？</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年玩三国群英传还真玩过用吕布打项羽，项羽还带着龙且，英布等武将</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小霸王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽号称古今第一猛将，三国时期的武将都以项羽为偶像</p>
`;
default:
			return '';
	}
}
        