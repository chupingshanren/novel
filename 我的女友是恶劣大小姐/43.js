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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;南风知我意，吹梦到西洲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只剩下十来章就完结了，我得悠着点才能看的透彻啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成起点疯的某天周日[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明天再看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;4</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一第一</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;六十六兆两千亿元</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得一开始说给一半，后来是给了五亿，还以为当时只有十来亿呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无论拥有多少都愿意分享自己的一半，多么令人向往</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实在是～太多啦～</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;猿人不是B吗</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有钱有系统，说话就是硬气</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不给阿姨倒杯capuccino？</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原神日本收入的十分之一了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这栋楼除了602，都被九条买下送给渡边作生日礼物了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这栋楼不是你的吗？</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么都是A</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想到村上把自己所有的钱都给了樱小姐然后自己身上只有8000円的时候[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边心中凛始终最大啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正宫正宫</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬当正宫，盟主冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“给你，给你～美姬的一切都给你～”</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我最怀念的就是当年我在东京街头打工的日子，因为我很快乐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边马🐴？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我最怀恋日子是，在东京太阳下举四小时广告牌。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:我这个人脸盲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老马云了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为渡边有富少女包养。诸位，你们有吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边健林</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蚌埠住了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边马🐴？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我最怀念的就是当年我在东京街头打工的日子，因为我很快乐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对钱无感杰克马
快进到
不识妻美强东刘[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;钱多到一定数量后那也不过是一串数字🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;撒贝宁 问号 JPG</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有内味儿了</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我直接打下贱
写出来的那能叫日记吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就不写🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就知道会有这句话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正经人谁写日记</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。。。学习全国第一，没钱也得便利店打工和举广告牌？？😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;向隔壁aplus学习，好好利用系统强化</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以“读书越来越多”这句话在这，跟你举牌子有毛关系啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么我想到的是拳击场或者地下赛车场的那种’宝贝’，那种高高举着牌子走过来走过去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这心态，必成大器</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我最后的呜呜呜一份热情呜呜呜和斗志呜呜呜都已经消耗殆尽了，呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的能埋进去吗？我不信，除非让我试试</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种牌子的洗面奶好用吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放开她让我来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;md真是除了客户端哪里都有刀斯林！[fn=47][fn=47][fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大莱莱呢？大莱莱到哪里去了？.jpg </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;洗面奶[fn=38]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的能埋进去吗？我不信，除非让我试试</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也想试试</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好羡慕好羡慕，能不能让我来，就亿下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我最后的呜呜呜一份热情呜呜呜和斗志呜呜呜都已经消耗殆尽了，呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子酸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一番腿投票的笔记本也在清野那吧?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差不多得了😅</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一楼没了？</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;某某凛：我会装作看风景[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看不见，没收到～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不看你，不说话，就不算说谎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;( ͡° ͜ʖ ͡°)✧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;‘你的，就是我的。’</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西兰花的花语含义常见的有平淡的爱、我只在乎你、健康幸福、努力新生、美丽的期待等。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我什么都不知道，哈哈嗝，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我什么都不知道，哈哈嗝</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;花开木耶姬来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唇瓣如樱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说卡片的内容不会就是这样吧？</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美好境界</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尊敬她，和她相处很舒适，是知己，也是最爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清清清    野野野    凛凛凛
清                 野    凛    凛
清清清    野野野    凛    凛
       清   野           凛    凛
清清清    野野野    凛凛凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真会玩，原来你也玩贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣这时候应该口住，哦不对，搂住彻！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;理论上来说，这样的动作会揩晃子油，最近才体会过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有奇怪的人混进来了</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;白月光和红玫瑰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请你们原地结婚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁能拒绝甜呢</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要说他有多渣，就像在一个风和日丽的清晨，一位俊美的少年赤着脚，漫无目的的行走在东京湾的沙滩，这时两位绝色美少女坐着游艇而过，少年一激动一脚一个刺冠海胆——就是这么渣。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你有没有想过，有可能她们是真的带特效的，只不过一般人看不到，游戏玩家才能看到，所以你误以为自己爱上了她们……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这突然寻思可能大家都是渣男，但是只有真正的渣男会下手吧（</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁不是呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诚实的渡边彻！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男=榨汁机男人？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱让人变得贪婪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你有没有想过，有可能她们是真的带特效的，只不过一般人看不到，游戏玩家才能看到，所以你误以为自己爱上了她们……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要说他有多渣，就像在一个风和日丽的清晨，一位俊美的少年赤着脚，漫无目的的行走在东京湾的沙滩，这时两位绝色美少女坐着游艇而过，少年一激动一脚一个刺冠海胆——就是这么渣。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;河南拔智齿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯路人，有一说一，确实如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;河南拔智齿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很难不赞同👌🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老渣男了</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要素察觉</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画，《美姬在睡...
咦赢了吗？哦那没事了</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可可爱爱，没有脑袋。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然麻衣最可爱啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=24][fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，开火车~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱捏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看书像看番，我全程自己脑补画面和配音[fn=31]脑补配音还是因为看了声优那本书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是有了喜欢的人的宝儿姐吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈 想象一下 麻衣学姐的“呜呜呜”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可可爱爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这会儿看着可爱，但是冷起来要命，热起来要命，总之不正常。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等我有钱了一定换一部可以看图的老年机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然觉得乌鸦这本书一直没配音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣麻衣学姐赛高！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜（无感情）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑海中浮现出真白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应有配音！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赛高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到了折纸大湿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪位大佬来个配音！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱跟简单</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟已经死了！你挑的嘛！学姐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;配音在哪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太可爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣！！！awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟出来走一下流程</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人，上图，让我死一死[fn=31][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然麻衣最可爱啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我这[fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐我的学姐呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可可爱爱，没有脑袋。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太可爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萌化了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐永远滴神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这特么也太萌了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可可爱爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我来组成裆部(bushi)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我来组成头部”（</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;rtwg？[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要！蜈蚣和脑壳组合起来让我想起来一个恶心的恐怖故事，祖先的头壳都会附在年轻人的头上，过于沉重导致只能靠稀疏的头发想蜈蚣一样爬行，恶心死了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmm人体？
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生无可恋脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(´◊ω◊｀)</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我的目标是毕业之前上到B。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：毕业之前让你升到B！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个“B”正经么？</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在最开始的时候有个让R桑撒谎的任务完成没。</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神的力量也在消失呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的一大步，人的一小步</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这本书迟早会完结，但书里美好的故事，依旧会留在读者心中，让我们如同被南风吹拂，漏出甜蜜的笑。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晨昏几变迁，风流总轮转。大江东去千年过，青山依旧在。只是此时水，曾映往昔人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不想结束，无论是人类观察部，还是这本小说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太阳落，月亮升，旧石头化成风，只有永久一动不动。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差点给我整到神秘复苏上去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去年今日此门中，人面桃花相映红，人面不知何处去，桃花依旧笑春风</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晨昏几变迁，风流总轮转。大江东去千年过，青山依旧在。只是此时水，曾映往昔人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;托遗响于悲风</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊我的爱，已随那南风远去
你好吗，我很好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暮色涤洗岁月尘，徒留江亭晚。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有人永远十八岁，但永远有人十八岁。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书迟早会完结，但书里美好的故事，依旧会留在读者心中，让我们如同被南风吹拂，漏出甜蜜的笑。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天地无限，人身渺渺，所留痕迹甚微，难敌时间消磨，奈何奈何</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名的悲伤</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大妇气度的青奈！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣明明是先来的，二号位啊</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小彻彻，快过来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师，我想吃奶糖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处代入猫和老鼠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呼尔而与之，行道之人弗受。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很好搞定的晃子这么说到[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小彻彻，快过来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，渡边，快过来，老师有好康的东西给你康康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是爱吃的晃子老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;烟花  fy  烟花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喝内内[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师，我想吃奶糖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子加入战场的独特方式:渡边过来我给你......</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;水濑祈呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;富良野雪平</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得上本那个谁来这在北海道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和小青奈说好的？</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说起这个，老是想起某小姐:我对碳酸类总是应付不来[fn=24]，转头就又去吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;樱小姐的碳酸糖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀逗，深水炸弹类型的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;类似于秀逗那种?当年吃起来还好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爆果汽？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;松冈全部吃掉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;买了不吃挺可惜的......嗯姆，那就拿给渡边吃吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无的关系，绫的失败</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂了，暗示晃子和某某樱小姐一样白给[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;遍地都是佐佐人！什么，我也是……哦那没事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记得前一段时间，佐仓买了碳酸糖，给了神，咱佐佐人原地过年。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佐佐人集合了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有奶糖，可惜呢~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;樱小姐的碳酸糖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说起这个，老是想起某小姐:我对碳酸类总是应付不来[fn=24]，转头就又去吃</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;魅力扭曲到8点了</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这反应也很白给酱如出一辙[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自己的水杯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心疼的温柔</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;变成凛的形状了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你再说你自己吗，渡边桑</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=21]</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;森夏和凸守death</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来系统是这么用的</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晚上细嗦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：
聊，都可以聊!
来，学姐，我们床上细说[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你那是正经聊天嘛，我都不想拆穿你🍋🍋🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;聊。。聊什么啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么聊，用口聊吗</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;华夫人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论区惊现UC震惊部和看点标题部！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日白给（1/1）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是UC来的[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某中学教师不正常干呕竟是因为学生做了这件事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震惊！中学老师竟在学生的非人手段下不停干呕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子因为渡边干了这件事开始干呕了</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;three somes</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双f和3排是不一样的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;p</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三结义吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三排</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了王诩，男人的梦想就是。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传说中的3……人行，必有我师焉。择其善者而从之，其不善者而改之</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三人斗地主</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快让我上车车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就到这里了 我去溜溜鸟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看过一部教师蹲在桌子上被搞的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要上车啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;涩情女教师[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个姿势某种程度很显曲线[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快让我上车车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要上车！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有更有意思的动作呢！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;借一部说话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会玩[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车车，车车停一下，我要上车</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这好像，是我前几章的书评？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的翅膀啊！</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个整了它正经吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子:奈奈，我也要用你的水杯[fn=38]</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣青奈组合成功率最高，我怀疑是唾手可得级别的
然后是美姬麻衣组合，与驾驶员适配时间最长，但存在美姬洁癖不愿意的可能
美姬凛组合成功率最低，不过美姬对凛没有洁癖，而且凛估计也只会愿意和美姬一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3p是每个男人的梦想。——三天两觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该只有麻衣和老师这一个组合，其他。。。跪下去哀求应该可以？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学学隔壁芝加哥黑鸭，东京帅鸦不行啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马歇尔·彻·蒂奇：人的梦想是不会终止的![fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们这群人，心都是黑红黑红的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;斋藤和国井表示可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣青奈组合成功率最高，我怀疑是唾手可得级别的
然后是美姬麻衣组合，与驾驶员适配时间最长，但存在美姬洁癖不愿意的可能
美姬凛组合成功率最低，不过美姬对凛没有洁癖，而且凛估计也只会愿意和美姬一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请根据文章分析“哪”字的作用[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;必定有麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣是可以的，老师也会迁就渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣加老师，轻轻松松！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这过分了吧，渡边你不许想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3p是每个男人的梦想。——三天两觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得很有可能[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得不可能</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，还分类的[fn=14]</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;讲实话，还想看五个人一起回岩手过年的情景，还想看美姬在床上欺负清野的情景，还想看好多……真不想那么快就结束啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;富富 婆婆 饿饿
富　    婆 饿饿
富富 婆婆 饿饿
　富 婆    饿饿
富富 婆婆 饿饿
今天是5.21了，我放弃了无关紧要的书，唯独这本书我没有，因为书友里面有一个对我来说很特别的人，虽然一张照片也没有，我也不敢说她的名字，但我知道她是书友里最有钱的富婆，希望那个最有钱的富婆可以主动加下我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她绝无仅有
站在自己坚守的世界里，闪闪发亮
它是特殊的，就像《旧约》里说的，才德的女子很多，唯独你超过一切</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我醒了，再祷告一次
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十年前我买比特币，你买A股，十年后我们都有美好的未来[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我打赌麻衣学姐肯定是5排的助攻推手！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太短了，不尽兴[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指5p嘛[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我永远喜欢清野凛！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲实话，还想看五个人一起回岩手过年的情景，还想看美姬在床上欺负清野的情景，还想看好多……真不想那么快就结束啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;富富 婆婆 饿饿
富　    婆 饿饿
富富 婆婆 饿饿
　富 婆    饿饿
富富 婆婆 饿饿
今天是5.21了，我放弃了无关紧要的书，唯独这本书我没有，因为书友里面有一个对我来说很特别的人，虽然一张照片也没有，我也不敢说她的名字，但我知道她是书友里最有钱的富婆，希望那个最有钱的富婆可以主动加下我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此（啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了。。。。请继续！！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们都有光明的未来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后的都在发糖啊🍬🍬🍬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以…清野神？</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喝了昏睡红茶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压力骂死内（赞赏）</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;红豆！大红豆！芋头！锉锉锉，搓搓搓。你要加什么料！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就知道这里会有人提叶奈法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丁香与醋栗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑布林大里子甜不甜，甜。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑 蒜</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;黑醋栗是水果吧</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;田所浩二之家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圣 地 巡 礼</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日本发展确实停止了</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;三四年前吃的时候六个十块钱，这几年没吃这东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没在东京见过这么便宜点章鱼小丸子</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;累了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐不孤单了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖达桑</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣不光有自己的车，还会蹭别人的车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：晃子美雪已经融入渡边后宫
高情商：明日麻衣已经融入三人组[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣已经变成了三人组的形状
三人组变成彻的形状</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年上组😘</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;震惊前首相今天被干掉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震惊！今年文化日放三天假不用调休！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后用某个周六or周日补回来？</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈，要见家长了吗</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晃子：那我呢！
发出了白给的声音[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈↗️↘️</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说了又不写，写也不认，认也不发，发也不发全，嗯？你叫我怎么做？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今年的文化日是昨天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥，好厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：果然是东京，好厉害！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想看男主带清野凛，美姬，学姐，老师一起去岩手老家过年[fn=58]（震惊爹妈一整年）</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;放心吧，装出五六十岁的样子都没问题～（渡边自豪）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你TM告诉我这是五岁？</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个，不太好吧，麻衣这里我觉得自私了一点</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣～我的麻衣～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肚子里还有一个崽儿[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边是处，处男使人怀孕，那不就是神子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？有错字，但又似乎没有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;独自吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肚子里有一个人[fn=22]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肚子里还有一个崽儿[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣～我的麻衣～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;改的真快，刚看到捉虫呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，独自</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;独自</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这虫大了，还以为怀了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;独自一个人吧，不能是肚子里一个人吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;独自</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肚子   独自，这错的也太离谱了，我都意为麻衣怀孕了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;错字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;独自</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肚子一个人啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肚子里还有一个人[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肚子里已经有人了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;错了错了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肚子？有了？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;独自</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好想看这一段</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晃子：咦噫矣，为什么要这么对我[fn=28]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;气抖冷，单身狗何时能站起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天521，甚是应景，适合吃狗娘和柠檬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃得粮中粮，方为🐶上🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋
🍋🍋🍋🍋晃子🍋🍋🍋🍋🍋
🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这样的妥协算不上体谅</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;海皇の余裕[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想有这个玩玩的美女老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有这种好事？</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;时间悖论又称乌鸦悖论，向未来穿越的先知悖论是其分支之一，算了算了，系统牛逼</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;已知婚前买房买车，房子加名，彩礼20w。
问离婚后双方资产各是多少？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现代人结婚离婚，没孩子的话还真没什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实哈哈哈</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一年级的渡边，为了清野，在吹奏部</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大老师自爆术</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怎么两个一楼？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师，你好温柔！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇😯这么好的老师女友去哪里找呢</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其他人用生死开玩笑，是为了表情。这人直接就是看淡生死。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真往后写深入了，这样的人其实很可怕</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次想到麻衣这个设定我都会想到薇尔莉特(●—●)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱了爱莉</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱啊！我又可以了</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;疯狂暗示（房子啊房子！）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五亿子孙</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还有拉面</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有钱真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得美姬给渡边的生日礼物就是他住的这栋公寓，不用再买了吧？</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬不是把整栋楼买下来送给渡边吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种朋友是真的好！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱了爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没想到吧，一栋楼都是我的 咱上下左右套房都行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真香！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的翅膀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一栋楼不都是他的了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么叫做绝世好闺蜜啊（战术后仰）</p>
`;
default:
			return '';
	}
}
        