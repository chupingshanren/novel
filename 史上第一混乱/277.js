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
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年  依旧如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是以前白酒塑化剂超标的新闻，茅台都跟着跌？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时候的315晚会真的是…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2019年，成都七中的闹剧事件……</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你肩上有刘邦</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也有鸽子打死不写海的女儿2</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看到这每次都笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;查尔查：岂有六十年太子乎</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;希望咱中国的学校都能这样，再不要有什么伴读之类的出现了</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;的巴的巴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文思如泉涌啊，只有这样的作者才能写出这么长的一段来，比那些一句话一段的不知好了多少。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能写出这样的书来，小花也是个透彻人[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有意思哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段太长了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;歃血为盟 我等效忠 浴火为龙</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种写公共供水还真不行，万一哪个地方的水厂出问题就容易被连带反应</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们不生产水，我们只是大自然的搬运工</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那卖凉白开的挺不厚道的，自来水烧开就卖出了矿泉水的价格</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，那种不是南极水就是冰川水，价格卖的死贵的，总感觉在把我当二百五，我信你个鬼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥踏实都写成塌实……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不不不，现在那个啥牌的矿泉水，方形的，不就叫凉白开吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不如不写呢</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在就埋伏笔了啊</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;工资都是好东西，就是太抠唆了，每次都不舍得多给些</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接下来高能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等会儿！！如果睡觉前让包子来一片……[fn=58][fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个“忙”字……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是萨其马啊</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子就差在脸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这玩意要是不限量，小强就有艳福了</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是炫迈的就好了！</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像包子一样？夫妻相。
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这要是拿去拍个片……[fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还不够？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各种明星系列[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看成了包皮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还不够</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对玉帝使用读心术[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太嫩了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强个笨蛋这肯定是刘老六自己心里想的，你终究是斗不过这老骗子</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实一楼是暗含剧透[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你需要请人吃饭吗 切</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把刘老六发射到太阳上[fn=5]</p>
`;
default:
			return '';
	}
}
        