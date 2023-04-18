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
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是，掰不了腕石头剪刀布也好呀。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你特么真是人才</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后是宝铜、宝铁、宝塑料？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然无用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大毛二毛的弟弟叫小明</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只能感慨造化弄人！</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强上世是颗柳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上下翻飞可还行？</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑兔白兔，打赢仗的就是好兔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小白兔去哪了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;混搭里乌龙骓和大白……</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这确实，别人都说我表妹很漂亮的，我到现在都没感觉出来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个确实，我也是长大了以后才意识到我妈年轻的时候有多漂亮</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;林黛玉倒拔垂杨柳，唐玄奘误入白虎堂</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然，就算药停了，土匪还是土匪。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪怕没吃药，也改变不了想把厉害的人和喜欢的东西都抢回山上的土匪习惯[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈以育才如家！为啥不是全季？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;土匪</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈这可不兴说啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经觉醒了。</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈～（口嫌体正直）</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在一看有意境</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是我先</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;格林:在你是他兄弟之前，我们已经是兄弟了。</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;rb不是很正常嘛，那么窄巴一个岛塞好几亿人口多少都沾亲带故的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花有生活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是闺女爱上老爸更热闹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;造化弄人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;韩国美国都有 老男孩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;举报了，慢走不送</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;講真，這種劇情我覺得很噁心，比人蛇，人狗，喝尿都噁心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强你平时都看些什么……</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲弟弟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到这剧透也不算剧透了。
一个下拉扫过去啥都有了。
但是。
我就是不说，诶，就不剧透！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;flag已立</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的吗？我不信。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真哒？</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕是当下社会得是怀着儿子之身来投奔你。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十年前我看到这句话；怀揣着梦想一直等到现在</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲁智深？</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚上必须关灯了</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;复写纸吧这说的是？</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也许那个县令眉清目秀的，厉天闰是先那啥再杀的呢。[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古时候确实挺外貌协会的，但哪个朝代也有长得丑的官啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟包子一个样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古代能当官都得长得帅</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扎心了…</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲兄弟就是鲁智深[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我靠！</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太损了哈哈哈</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时迁说完 顺手把钱包揣兜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲁智深不是大彻大悟坐化了吗 就算没成佛投胎去了，也不会有执念形成强人念吧</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这酒比逆时光卖的好喝</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;介猴不卖</p>
`;
default:
			return '';
	}
}
        