$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是跳楼的那个吗？那人是晁盖转世？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晁盖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴水不漏！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跳楼那个吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晁盖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一句话鬼故事系列</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子是我我到现在为止看到的刻画的最好的女主角了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里 我真的好感动 千言万语 说不尽我心中所想 祝小强新婚快乐 我好想有一个女朋友啊</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梭哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有耕坏的田，只有累死的牛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太有生活了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看懂了(￣∀￣)</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别的书一般不写这个</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是不累，我结婚那天累的啥心思都没有了。</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;洞房花烛夜以继日</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会开玩笑，小强第一。</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天上掉下来的在另一个小强那儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然是判官批错了阳寿，那准确来说就是从地里钻出来的</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我结婚的时候我媳妇和我妈回家第一件事就是这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尼瑪，還真沒錯…我老婆我妹我媽的干女兒都是這樣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花，卧槽！你杀了我吧，我特么想我初恋了啊，你混蛋啊！卧槽，妈的，我特娘的再看眼睛就酸了，睡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在这还正好翻页了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这弯拐的[fn=5]</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年也不算小钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难不成是大黄蜂？怎么选了个这么个牌子，雪佛兰轿车再贵也没贵哪去吧，项羽还整了个悍马呢</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么说吧，开豪车追求的除了舒适以外，还有很多是优越感。但凡有小强这样的经历，开豪车带来的优越感根本不值一提</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我发现这书里都没有写太好的车 小花好像不太喜欢车的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;漂亮，就是这么个调调</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么突然就开车了呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;污污污</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了每一句都…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朴素的阶级感情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;淳朴善良的本性，贴切人物的成长环境和社会背景，刻画细致入微，真实可信。</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当老板和不是人没有关系吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵匡胤退出群聊</p>
`;
default:
			return '';
	}
}
        