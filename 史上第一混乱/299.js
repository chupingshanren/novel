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
<p>&nbsp;&nbsp;&nbsp;&nbsp;我开始以为88岁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是加起来88岁么？</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武林外史？</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为没有毁了虞姬在他心中的形象</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武林外史？</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面那个带兵来帮忙的不就叫一二一么。300跑步的时候一喊口号，他就出来，谁喊我？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈440也行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;董3.1415926……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无穷大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我是刺客567</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这哪剧透了 瞎编的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下方剧透








下方剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能剧透






张冰最后和张帅在一起了，可能潜意识里还有那么一丝情愫</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一桌子陈宝国老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说大元还是来忽必烈更合适，成吉思汗时代毕竟没统一呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在我强哥眼里，见得最多的就是皇帝，还是开国那种。
啊就没劲。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再来个康熙，就剩辛亥革命了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是唐国强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐国强：在座的大部分我好像都演过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦皇汉高，唐宗宋祖，成吉思汗，明太宗，齐活了</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大哥哥……敢笑杨过不痴情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来说吧，倪思雨不是虞姬，小雨是郭襄。敢笑杨过不痴情。在倚天屠龙记里最开始，写了郭襄的一生。襄阳城破后她带着倚天剑出走，走遍江湖寻找杨过，多年未果，最后创立峨眉。郭襄的大弟子叫风陵师太。风凌渡口是她第一次见杨过的地方，郭襄一直叫杨过大哥哥。一见杨过终身误。</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抵了四个月工资</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥:他在我心里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特么的，刘老六和天斗都说过虞姬不在现代，老特么怀疑小雨，服了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要是告诉我one piece在哪里我就不当海贼了！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不在这儿，那估计要重新去投胎找找了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她在腾讯。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在心里呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会投到包子她肚子里了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特么的，刘老六和天斗都说过虞姬不在现代，老特么怀疑小雨，服了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么总有说小雨的啊...小雨也就是个小女生，张冰不沾边小雨更不沾边啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小雨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥:他在我心里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不通啊！如果倪思雨不是虞姬！那么，项羽怎么知道虞姬在什么时空？？？除非刘老六私下找过他！</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈陛下们哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次体会到，陛下后面可以加们。。。。表示复数。。。。</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个问候挺招拳头～</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项大哥说话，理太偏</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沁园春雪没搜到？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这可是图书管理员的诗……现在还在课本上呢，不过我学的是苏教版，不知道人教版教不教</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北国风光，千里冰封，万里雪飘。
望长城内外，惟余莽莽；大河上下，顿失滔滔。
山舞银蛇，原驰蜡象，欲与天公试比高。
须晴日，看红装素裹，分外妖娆。
江山如此多娇，引无数英雄竞折腰。
惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。
一代天骄，成吉思汗，只识弯弓射大雕。
俱往矣，数风流人物，还看今朝。

</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没搜到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没看，是不是推荐《混乱》的啊！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没找到啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去看了  回来赞你</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘老六:这话怎么有点耳熟呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话也没错，皇帝可不是到我家来吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就喜欢包子这没心没肺的样子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这傻包子，哈哈哈哈，我要有这么个女人该多好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下次还去那笑死 老酒鬼了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子活的真潇洒啊</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强其实没必要那么恭敬，既然秦始皇成了嬴胖子，汉高祖成了邦子，还在乎其他皇帝么</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是中国梦，快走开快走开[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是08年的书啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁还敢有这个梦想？</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;同床了嘿嘿</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给的这一个个奖励，什么读心手机，神奇饼干，无敌汽车，跟郑渊洁童话似的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面几个月是试用期吗，工资都不给的[fn=11][fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;算上读心术强化是五个月</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我靠！！！祖宗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇帝四人组</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;祖龙二凤都来啦～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;父慈子孝李世民</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽！！！李二！！！！</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上限是零？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我直到今天，这一次，才反应过来。。。这是人品的意思。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人品值？</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这几个皇上后续真的挺有用的</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得刘邦在本书中绝对是王者中的王者，危机中永远切中要害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟贵族出身，又是武将保持了身材</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玄武门小李子弄死的不是俩哥，是一哥一弟啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦皇汉武唐宗明祖当的上前四</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明朝开始，在史书上被吹明君的不一定是明君，被骂昏君的不一定是昏君。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;康熙别说和李世民比，和雍正比都被秒杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀哥宰弟囚父，而且因为杨二在唐朝建立后也被传这类事情，所以李二特讨厌杨二。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李世民打仗的时候才二十出头吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑补唐国强陈道明陈建斌聊天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;康熙年轻时算是不错的君王，晚年照样犯糊涂，好在儿子雍正争气，替他挽回不少名誉。相比之下乾隆其实和康熙情况有些类似，但是没有一个有能耐的儿子擦屁股，评价立马就低多了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;康熙确实牛逼，清朝虽然烂，却给新中国留下来“自古以来”这样正大光明的口号。不然周边失去的版图还真不好收回。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;康熙属于那种各方各面都还行，没有明显缺点的皇帝。而且开疆拓土也有功劳，北边的，西边的，南边的，地盘都打下不老少，要不然怎么经得起清末民初那帮败家子折腾呢……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;康熙咋能和李世民相提并论，要说汉武帝还差不多。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐国强年轻的时候帅的一塌糊涂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最能打的几个皇帝之一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟贵族出身，又是武将保持了身材</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得刘邦在本书中绝对是王者中的王者，危机中永远切中要害</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这瓦岗寨的也要来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐宗宋祖...想到那位了，可惜写不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那后面是努尔哈赤和朱元璋？</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;算算也该让程咬金上场了，毕竟他和这两位都有交情[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫非是唐宋元明清？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，李二确实恨不着赵大</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长不长久的很重要吗，中国帝制时代的顶峰、三大盛世里含金量最高的一个，就在你们唐朝，唯一一个女皇帝，最后也是以你们唐朝皇后的身份下葬的，海外华人聚居地叫唐人街，连以清朝服饰为基础结合近代设计发展出来的衣服都叫唐装，还不够牛的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，你的大唐盛世真正做到了威名远扬四海。几千年后远在异邦的中国人，以你的王朝命名自己的民族。</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霍去病：在下不才，正是没打过败仗的勇士，没有老去的苍鹰🌝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霍去病：你说啥？大点声！没听见！</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你弟弟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;闻弦歌而知雅意哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神他妈闻弦歌而知雅意</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都学着点，这就是说话的艺术</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成吉思汗也挺会说啊，丝毫没提元灭南宋的事[fn=33]</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿透你的信念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是宋朝还真不是成吉思汗灭的，是他孙子忽必烈灭的。成吉思汗把金朝灭了。所以这么说也没设么问题</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱八八哪有这么怂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他还得谢谢咱呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老朱你不用对他不好意思。大蒙古国的正统接班人是窝阔台,但之后中枢被托雷系逐渐接管篡夺了,之后的忽必烈更是武装反叛上台的,元朝几十年里政变接二连三的来。所以你这是替老铁清理门户,他还得谢谢你</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱重八！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱重八</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱元璋</p>
`;
default:
			return '';
	}
}
        