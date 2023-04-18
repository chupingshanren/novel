$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case -1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看我青龙偃月饱经风霜
身骑赤兔宝马驰骋疆场
</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我读春秋的！</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是有句话叫在野外被狗熊追你不需要跑赢狗熊只需要跑赢队友。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个想法，不知道对不对，小强没跑过狗，说明狗在小强前面，二胖没跑过小强，说明二胖在小强后面，那么从后到前的顺序是：二胖，小强，狗——那狗应该还是离小强近啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又有点想伏笔那哥们了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二胖的大用来逃跑特好使！团战？从不团战！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二胖，还有隔壁二哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事儿，二胖比较肉，狗应该咬不坏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强，跑赢了吕布的存在</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕你看了伤心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;.....</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他要是去了等会儿梁山好汉也来了</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二爷真是太忠义了</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正史二爷打吕布跟玩似的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有个叫三英战吕布</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毫不夸张的说，就吕布那个垃圾，能不能过王平都有问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;干不过啥，二爷就是那个时代的天花板，全历史唯一正史记载万军中斩杀首将的大佬，战斗力全开按着整个曹军乱锤，吕布那个垃圾过来提鞋吗？</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🌿另一本书有个雷老五……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有头没脸的那是海参</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼上人才总结得到位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;
单刀会，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸿门宴</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;云长傲上而不辱下，欺强而不凌弱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关云长礼下傲上，对士兵很亲和，对士族很倨傲。张飞刚好相反</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丑啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;据说雏凤卧龙都丑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;庞统巨丑</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这气势，没到三十就堪比古爷了。当然，古爷只是都市YY，我们小强是修真小说主角！</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不喜欢正常，武圣肯定有自己的傲气。普通人大多不喜欢这种傲气。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么不太喜欢关羽呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关羽张飞兄弟俩确实不怎么待见庞统</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说赵子龙不是恢复记忆了吗？就那个捡废品的老大爷  怎么没了</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;香港电影里面，不是警察和混社团的都拜关二爷吗[fn=17]万一领着关二爷去了，一进门看见关二爷的塑像……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话，没意思，谁会看着像就认为是关羽？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还想看混混见到关二爷有什么反应</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竟然还能跟前面是哪个强子对上，这种不经意的小细节可以的</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老虎的语气不怎么痛快了
看来我笑点太奇特了，这句话笑出猪叫</p>
`;
        case 92:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那啥，多不好意思，小强，搬把椅子过来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关羽:二爷在此</p>
`;
        case 94:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhhh</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻译：爸爸救命！</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;告诉国安实情，然后说这几个老头被黑社会绑架了，武警部队都能给你找过来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李白好歹诗剑双绝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好了，知道你硬不起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽小饼干了解一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实李白剑法不错，只是在本书中他成了彻彻底底的文人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全带过去然后准备报警啊，动一下无期一个。</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“菅”这个字单独拿开不认识它，
放到“草菅人命”里面就认识了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说出来不怕大家笑话，到此刻，俺才看清是草jian人命，之前都读草管人命 唉，俺果然是文盲，俺文盲起来连自己都害怕😨</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真会唠嗑[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿，占便宜没够</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃饼干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果世界大地不是球，是平的，没准真就能看见 [fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是不让点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自从14年开始混QQ群起了这个马甲以后，看到狼烟这两个字都以为是在叫我……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也得让你点呀</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强已经习惯叫二大爷了</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没人？我来 这是伏笔！！！[fn=36]</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我预判一下，是孔子！！！以德服人的孔子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;辛弃疾吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二爷来了？那雷老五算个屁！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲道理，真的棒</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孔老夫子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个……咱们古代有玩儿架子鼓的吗</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二爷！！！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看我青龙偃月饱经风霜
身骑赤兔宝马驰骋疆场
</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二爷！！！（破音）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;往那一站 是个黑社会就得跪</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，演关羽的老爷子去世了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了就能认祖宗了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜关胜没来</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵，不敢当</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关二爷傲上而不凌下，写得好</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关二爷是佛教的护发伽蓝菩萨，道教的协天大帝、“关圣帝君”，明清时很多人把玉帝庙改成关帝庙，二爷愿意投胎算是照顾天庭了，他要留下当神仙都够格</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;擦，和天斗如果真把吕布找来，关二爷可斗不过他啊~~</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饭辙？小花是天津人？</p>
`;
default:
			return '';
	}
}
        