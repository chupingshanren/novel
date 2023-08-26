$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骡子在地球上公费漂昌那几年好像也沒留下后代过</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总是这么出其不意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在可以视频通话了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Hhhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhhhh</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快活林？出杀手啊</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在鼓励你多生，不会罚了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只剩6.7.12.14.17楼了，其他的呢？丢了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写书的评论区就是一幅08年到21年（可能还会延续下去）的现代史。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全面放开二胎了，但是也没多少人愿意生了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在的90后结婚都难</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我花对国足那真是怒其不争哀其不…不要脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这把中国足球给骂的，爱之深啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;11逆子啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前文有 海参就是那个有头没脸的 这算是超前讽刺了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今年过年又给大家添堵了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今年国足更完犊子，就地解散得了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国足，一个欧洲队伍永远也无法战胜的球队……因为呀连亚洲组都出不了线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骂人都不带脏字的，果然是文化人[fn=13][fn=27]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国足当年至少亚洲杯还能拿个第二，现在连小组赛都进不去。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020年了，国足还是那么废</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了十几年才发现这是伦理哏😂😂😂😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 由此观之，国足从07年就不行了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;损</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我花对国足那真是怒其不争哀其不…不要脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高级黑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这把中国足球给骂的，爱之深啊</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这啥意思，是摘豆角还是搬箱子了[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;省略号省略了一些生理活动吧</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看成了大儿子</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喝酒就怕带辫子的，你啥时候掉桌子底下都不知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在办公室里，别人在午休，我忍住笑声，忍不住笑容。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大把年纪了大晚上的，鼻涕泡都出来了，我不要面子的啊？？？</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子好女人</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你刚开着车回来，项羽开啥车去的？凤凤的车早还了吧</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这女人 就算再丑，娶了也是值得</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忽然想起来问一下，包子是钟无艳转世吗？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不对劲[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;←_←哈哈哈哈哈哈哈哈骚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噫～现在的小说哪敢这么写🤣</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没嫁呢 后悔来得及</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大俗即大雅，没毛病୧( ⁼̴̶̤̀ω⁼̴̶̤́ )૭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;闻弦歌而知雅意，大雅，大雅！</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里……是不是不太对啊[fn=31]</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这可以有</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子好啊</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我先来，伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到了伏笔又没人提示伏笔，这书的粉丝多少有点毛病吧[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在咸阳宫摆的满月酒，本来可以在更大更豪华的阿房宫摆的，可惜让胖子改成超级玛丽了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开你的破金杯走动啊，想啥呢，难不成用金少炎买的悍马？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到时候你就知道了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，小强自己给自己捧哏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开车去啊，又不远</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开兵道啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也学各位来一句：“此处划重点，要考！”</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;动小强最多得个笑。
动包子那户口本上有没有人就不一定了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子是真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五人组跟包子可亲</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小时候真没看懂这段，嘿嘿，那时候的床真结实啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;痒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这手机蓝汪汪的的，最多是个黑心，哪来的红心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手机还能这么用啊，脑洞真大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一颗真•真心送给你</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要从小跟高俅学，说不定还真能那世界杯。</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;思路太广了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说包子认识李静水吗？</p>
`;
default:
			return '';
	}
}
        