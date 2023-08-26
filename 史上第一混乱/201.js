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
<p>&nbsp;&nbsp;&nbsp;&nbsp;杜興除了苦悶武松還沒想起前世，還心疼他的極品六星杜松酒</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：把西门庆送过去，潘金莲给我留下。[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王宝强忽然爱上了做炊饼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马蓉笑而不语</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;药师寺宽邦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;找于大爷给你定制一首</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要从南走到北！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一！二！三！四！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大悲咒行吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实般若波罗蜜多心经和法华经都有dj版……</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竖起八根手指弯了三根，那不是比划了个五吗？小花你数学真的有26分吗？</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗跖（zhi），中学课文有一篇《窦娥冤》戏词，里面有一句“可怎生糊涂了盗跖颜渊”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;个人一直不喜欢所谓梁山好汉，极个别有两个人不错外（智深、燕青、花容和一些手艺人或技术人员），其他人都他妈扯淡，反而方腊让人多些敬佩！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柳下跖，不是拓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老觉得这捡垃圾的是柳下拓。</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有个朋友说能不能给个链接
看一眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我访问</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一不小心又让我猝不及防呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请借一部说话！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有个兄弟想看一眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请务必让我看一眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 哈哈哈哈</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这我也会</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听着就邪乎[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年龙傲天大行其道，小花的书太小众了，不过经典永不过时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，当时才刚到50啊</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实现在科学发展植物人是可以思考的！太惨了本来只是想忘记一些事情结果最后只剩下了这些糟心事别的都支配不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;植物人……，又是花儿挖的坑</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;安神医，俺再说个名字出来，你会觉得更贴切：草木人，因为，北宋那光景，还没“植物”这一说法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;*****</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们咋老鄙夷的目光呢~~~~~</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是历史上的张飞好像是个美男子~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假华南虎案，柴静《新闻调查》采访过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能因为人家打篮球，就说****</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能因为扛着棍子，就两开花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能因为拍艳照就说他是冠希哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能因为他夸饭菜好吃，就说他铁骨铮铮。。</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生死之间有大恐怖(#ﾟДﾟ)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前我不太理解一个人的性格为什么能改变那么多，现在我懂了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽还是项羽，除了更在意虞姬以外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻因为这个还是二傻</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一眼瞪退了黑旋风，这个牛逼大发了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我上辈子一定是赵云没跑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方腊登场？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;见面道辛苦，肯定是江湖。</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老子就说老子是方腊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仗着早出来几年，他们才敢叫你老王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剧透一下，这是我皮鞭大哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;镇江我兄弟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隔壁老王重现江湖了，各位都抱好自己的媳妇，不然等孩子出来做个dna又是一番不死不休的腥风血雨</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草台班子，草台班子</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，镇江是江苏人[fn=4]</p>
`;
default:
			return '';
	}
}
        