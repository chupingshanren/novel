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
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好包子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看这句话真是笑中带泪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很真实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了……</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话记了十来年了 时间过得好快啊</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我一直想说，为什么只看到陈圆圆，他们还杀了吴的父亲。所谓父仇不共戴天，那些骂他的人硬是把这给忘了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹小象不用走……你估计是被漏章这事儿坑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹小象啥时候走的，漏了么</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前玩过一个单机游戏叫《赵云传》，真的非常好玩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我单纯好奇想问问看本书的男的，为什么都要去看赵云呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能认识赵云搁我我也去。</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个能跟妖精一起的人怎么算都不会路人甲，起码得是一部YY小说主角的级别。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘老六说的是上辈子快成仙了，爱上了个妖精，成仙的时候没过政审。何天豆怕不是蒙事呢</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是元首级好不</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;儿子？这里原来就说明了时儿子啊</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛逼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八国联军</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孜然味的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汉唐的公主生活作风都挺开放</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比如李令月和李秀英？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不爱洗澡？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帽子也都够味儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;民族大融合[fn=10]</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能不能去救一下小兕子？穿唐初的，百分之99会由程家老小当NPC展开剧情，百分之50给长孙皇后和小兕子看病获取李世民信任[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日乳法达成</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平阳可是李二的姐姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西藏的干部＝松赞干布，66666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;法fa第四声</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到手抓羊肉我饿了，下班就去吃，坐标银川[fn=4][fn=4][fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后把自己忽悠瘸了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想吃手抓羊肉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成大忽悠</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《没怎么》生过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然明知道你是男的 可是还是想调侃一句 找个男的生一个你不就了解了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也不差，五个月确实显了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那会儿还没怎么生过孩子呢，现在小花儿子估计都能打王者荣耀了</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有的是！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;23333</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小布什[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;布什</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;藏五不藏六</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;娘怀儿啊，四个月，不知不觉。
娘怀儿啊，五个月，才显了身形。</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实不至于，电视网络这点辐射根本影响不了孩子，除非你把头伸进微波炉</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhhhhhhhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苍蝇眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你手可够脏的</p>
`;
default:
			return '';
	}
}
        