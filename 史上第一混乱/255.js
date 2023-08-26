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
<p>&nbsp;&nbsp;&nbsp;&nbsp;以迅雷不及掩耳盗铃之势如破竹，这差一点倒不上来这口气</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;背靠背细节</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么没有更好的，直接霸版几十年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来真是一个铜牌都没给别人啊</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不拧回来这书就完本了[fn=33]</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人老段估计有欧洲血统 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金毛犬段景住，这是守着和尚骂秃驴</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥抽烟喝酒烫头开车 还舍得走吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子铺是不是有点大？一百多平</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经门儿清了</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家不是忘了，人家是不敢跟你算啊</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们老板都吓死了</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，不看评论都没反应过来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我之前看没注意这里，为啥是小强和吴三桂一起喊，现在才焕然大悟，原来是陈圆圆的吴三桂啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴三桂：媛媛？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圆圆也来了？</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五人组+金少炎和黑寡妇还有倪思雨 集体异口同声：“呸！真不要脸”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，有没有憋不住的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;heitui</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;德行吧 臭表脸的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;臭不要脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多稀罕啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然小强没脸没皮的吧，可总得有点底线 吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我从未见过如此HYWC之人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵，德行</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;外国的药罐子全拉跨了[fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021年的奥运会，嗯，别问为什么是2021年，就这么神奇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021东京奥运会，希望小日本学会哼进行曲嗷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神他妈会哼哼……舒服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽毛球也拿过大满贯。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈 都会哼哼了😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;期待着这么一天 无论哪个项目！</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那把枪不是三天就好了吗？</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，小球换大球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要用小拳拳捶你小胸口。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段有郑渊洁的味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天马流星拳！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可是语言不通啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水遁！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=5]乒乓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要用小拳拳捶你小胸口。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦坐✈️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;动漫里的出招喊名字……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要生吞你的心脏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，小球换大球</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是巴西圣疙瘩学校毕业的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那也只能说明这个学校有出足球巨星的传统，毕竟时间跨度几十年呢，隔两三年出一个虽然牛叉但还算不上惊世骇俗。你这个是同一时期同一所学校出来小一百号人，还个个都有在国际大赛上拿名次甚至拿冠军的实力，这个才叫惊世骇俗呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不怎么想，很正常，要在中国才问问怎么想……元芳你怎么看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圣保罗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦～原来巴西只有这一所学校的说～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼如铜铃，口吞鹅蛋吧？</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自从哈利波特 写书的作者 被粉丝开除以后 我就觉得 确实魔法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为霍格沃斯是奇幻而非玄幻？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这倒是真的</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这应该是暗喻周杰伦的《大灌篮》，又是时间停止又是时间倒流的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那帮子土匪得会啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来个阿瓦达索命。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下本书就有了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时间停止术？教练！我要学这个！</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花木兰封，吴三桂又封又资，但修他们不算吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;买杀虫剂也要实名制了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这几位还真是封资修</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能做是能做，但是一得有手艺二得有地方，要不还是挺容易被发现的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实白糖都能做炸弹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能做炸弹的东西多了去了[fn=10]</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要结婚了呀</p>
`;
        case 88:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈，东京奥运会</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这玩意儿里边金子含量好像不多……</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么要说“也”[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没少造反我笑了</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;山鸡。。。</p>
`;
        case 103:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这孩子也是现代人呐</p>
`;
        case 106:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这画面感太真实了哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;买卷纸啊，出工程图纸那种~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人肉照像机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;办证，135后头随便</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不好意思我留的*****</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张择端张老记忆力可以啊，这尼玛就是传说中的影像式记忆吧？</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要再搞丢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书评都快成贴吧了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剑神盖聂和荆轲，唉～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前生没能和你一起走，今世你我不分离</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就想要个荆轲赵小白的bl番外，哪位大神写来解解馋啊_(:з」∠)_
|･ω･｀)小花别打我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腐女看到又要笑了</p>
`;
        case 109:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们广西的油茶，就是加葱姜豆蓉茶叶炒香再放水熬制，喝时加盐调味儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么想到崂山可乐了呢——</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东方树叶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凉茶领导者加多宝[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陆羽那个时代的茶和现在不是一个喝法，各种香料往下撒呢……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧师父冰红茶</p>
`;
        case 110:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥真的 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧不在吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;够乱的</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟小孩一样</p>
`;
        case 111:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲♂热</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感动啊……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵白脸是不是岳飞</p>
`;
        case 113:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到了liao到了liao 三声 </p>
`;
        case 114:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“老师 人家想要嘛～”</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;费三口可能已经把身份问题搞定了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有可能还有298位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼上是哥，别说了ld记住了，以后万一弄丢了作为小花书友不能不帮啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是你见识少，有回我身份证银行卡现金全军覆没，找哥们借了五百，花100办个身份证然后去银行补卡。一共用时十天</p>
`;
        case 116:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧呢[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：我不算人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有，你们就是！</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主角爹妈第一次出现吧</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;带着岳父岳母一起去爬山吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大连很棒的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大连旅游城市啊，环境真的没话说，就是丘陵地貌逛个公园都跟爬山一样有点累人——</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有幸还有大连</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这请帖拿出去都得判刑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这请帖，价格老鼻子贵了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妥了 书法大家给写请帖</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难怪小强嘴这么贫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老年版小强！有内味了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真可爱！</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是黑土的《伺候月子》发售。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白云</p>
`;
default:
			return '';
	}
}
        