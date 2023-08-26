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
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有个问题啊，记忆消失了上车不就好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子对小强太好了😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要说嬴哥是真的大智慧，不到一分钟就想出了对策</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是个当太监的料</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗仗人势用的很传神</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;掩面泪奔。</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强最霸气的一次，比十万大军那次还德劲</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晕头转向(=_=)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这脑袋瓜就是比李静水踢裆二人组转的快，怪不得他是将军呢</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段莫名其妙给我感动的眼睛有点酸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子真的牛逼。这可是直接瞬间想起来的啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子够意思</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;英雄…</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成仙流程 凡人别多问</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老坛酸菜面……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刀削面也莫有咧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子：给你们脸了？朕那么爱吃面？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不然就没有陕西biangbiang面吃咧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不然就没有岐山哨子面吃了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不然就摸油豚骨拉面吃咧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不然就没有红烧牛肉面了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不然就没西红柿鸡蛋面了！</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;祖龙的气魄！闹笑话么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作为一个勾心斗角多年的皇帝，这实在不能不令人感动</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我脑子里这句话是跟白展堂学太监时候一样的声音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;垂呢？</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;另外一种方式的永垂不朽[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这梗隐晦，哈哈</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那年头都皮的厉害啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿得起放得下 还玩得开🤣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你一个开国皇帝玩心还挺大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那一年时间里就属嬴哥最洒脱，玩的最开心了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛啤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈 赢哥李时珍的皮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像傻子一样的笑[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那年头都皮的厉害啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行了，在地铁里快被笑成傻子了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈，笑的肚子痛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我丞相呢？我辣么大一个丞相呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李斯是被腰斩滴，不是车裂</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句太有笑点了。</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呀我去，笑喷了。把我家胖子给可怜的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦朝的伙食，差的不行啊，埃及那会儿好像还好些</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家不要紧张，三皇五帝部落时期，我们吃饭都不带沾盐的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉！赢哥那个时候惨啊蚂蚁都做酱实在没啥调味料</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颤抖着双手哈哈哈，好可怜的嬴哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现秦吃的一些菜，到了唐朝还是宋朝的时候就被当成野草了。然后就是各种酱了，最好的也就是烤肉了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有粟米，菜都没几样还得白开水煮着吃，可怜的胖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看把赢哥给饿的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呀我去，笑喷了。把我家胖子给可怜的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦朝的伙食，差的不行啊，埃及那会儿好像还好些</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重看多少遍也觉得——太可爱了！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花呀i服了you</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃不好睡不好，还能瘦，厉害</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老头：你敢不敢谦虚点？</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佟掌柜啊。</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦朝那会吃的东西确实是单调匮乏，单说调味品方面基本就是0，饭能好吃吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子来现代是真的享福来了</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了老弟[fn=33]</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咱们时代？</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的天呐，看推书，这书是真够早的</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感动</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说齐国还没打下来吧。。。魏国应该打下来了？</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是魏王吧，齐国还在呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是个随便的人</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能不能写个条子留给自己“把眼前这人关上十分钟会有惊喜”[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强回车上等一星期不就行了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还知道看手机笑死</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在墙上</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难怪胖子这么习惯现代，项少龙带着，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梦遗将军</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥不能是易小川~~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段就是戏说了，历史上蒙家兄弟其实是一文一武，蒙恬是将军，守着长城，蒙毅只是文臣，天天跟在始皇身旁，也说不准是真的得宠还是拴在身边挟制北边的蒙恬………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，成龙来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑补一个成龙在大殿里跪着</p>
`;
default:
			return '';
	}
}
        