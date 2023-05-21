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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;关于我在四月过完轻井泽的八月这档事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦没发现吗……最近的剧情，毫无阅读欲望……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，是想把轻井泽的八月过完吗[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀吼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;4？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都住在起点了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没想到啊我居然第二了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一。</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明明是一份，渡边自己买了两份。这里可以说是乌鸦记错了，但可能性不大，更多可能是渡边把自己做的安在凛神身上调侃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等等，好像不是两盒便当...？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;似乎就是这个时候神意识到了自己对渡边的感情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦记性贼好，我都忘了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像是下雨太大，超市不开门，渡边和清野都没有屯食物那次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦特技，把已经写过的内容翻来覆去水字，效果反而拔群。 人物和事件变得更丰满起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;127章，如图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等课代表</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有没有大佬说一下章节</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神：人类的悲欢并不相通，我是觉得他们吵闹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空气里充满着快活的气氛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《除了清野凛》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你把除了神以外的大🔥都逗乐了</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不行，日本和韩国菜根本勾不起我的食欲，我讨厌海鲜，也不觉得咸菜可以当主菜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一本正经，不是在说我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心里小本本又多了一段话[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神估摸想起就是当时明确自己的爱意，害羞了</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不说话就是默认了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野家的大小姐与我永远的神清野凛有什么关系</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;热闹是他们的，和我有什么关系</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人与人之间的悲欢并不相通，我只觉得他们吵闹</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;瞪大眼睛（花田朝子） 认真演奏（明日麻衣） 慌乱出错（一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这慌乱出错的肯定是一木绿同学了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;野生的清野教练出现了！</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;铜锣烧小姐山百合被马吃了，然后要找渡边麻烦，爱恨情仇故事就将展开。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画《九条美姬在打高尔夫》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别打了，别打了[fn=12]</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;威严满满清野神[fn=31]</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;安全？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;错别字：以及</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐大人[fn=31]</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;猥琐一笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想这样的笑吗（虽然是玛修，没有符合老师的形象的图，大家凑合看吧[fn=32][fn=32]）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师天下第一！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;✓</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;时时刻刻都在想助攻的清野妈妈</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;爆裂鼓手</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;无情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻译翻译什么叫tmd感情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孤儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：我是只莫得感情的测谎姬[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;么得感情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有感情的平胸机器[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神在教化世人[fn=33]</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你这个不检点的男人，又随便对人笑[fn=32]</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈利波大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫：特别</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特别</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;青奈的两个闺蜜都逐渐适应了，渡边彻也是清楚这一点才笑的</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师加油💪</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还有妹妹的身份</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以一边做恋人该做的事，一边喊老师嘛[fn=4]</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;宫崎美雪：我是[fn=58]</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日迫害1/1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美看到清野，开心的音色都变轻盈了。。。这舔狗没救了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美出现</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老老夫老妻了</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《我的婚后生活好像没什么问题》</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是个细节，渡边笑起来很好看（因为点了加微笑魅力的技能）被美姬要求过不能随便笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是个细节，渡边笑起来很好看（因为点了加微笑魅力的技能）被美姬要求过不能随便笑</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;未成年不让买的吧</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小泉什么</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;很有画面感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说清野神这个性子要是来中国买东西会很头疼吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，房间—放进</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样[fn=4][fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有你的</p>
`;
        case 175:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想起邻家的天使大人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记仇的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一个人住</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“超超超超乡下的乡下人，那种地方居然也有人住！”“连咖啡店都没有，笑死了，他家到底多穷啊？”“我怀疑他只吃得起超市的半价便当。”——玉藻好美如是嘲笑道。</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是啊！对于年少的我来说，也是有许多老师的。直至我现在毕业，参加工作，她们依然是我的老师。在寂寞的夜里陪着我，教导我。</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;加拿大的成分表科技含量一页写不下，而且有些标注真的很迷惑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加拿大吴针</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大松茸？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;松茸不能整根咬下，而是需要切片食用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是对渡边彻的意大利松茸[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛摇摇头，不是对渡边彻，而是他的中日混血松茸</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我也很向往女校医～</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不 忘 初 心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一开口就是老腿控了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;排</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“排”捉书虫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一排</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边／九条／清野家今天的饭</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好讨厌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里很讨厌啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野是全知全能的神，祂是昔在，今在，以后永在的全能者，在祂面前毫无隐藏，毫无躲闪。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻的自我修养</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当着我的面调情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是真话哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;治不了美姬还治不了你了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：我这边忙着训练，你居然在当面调情？？！[fn=47]</p>
`;
        case 181:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛（贤惠版）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天官凡尘也落俗套～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居家型清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日看神落凡尘</p>
`;
        case 183:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日本毛豆和我们的毛豆一样吗？</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;卡密の吃醋</p>
`;
        case 186:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑死 当年懒得买放盐的瓶子，拿着个盐袋子倒，自从一哆嗦倒进去半袋子之后就买瓶子了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有画面感了，不要问我怎么知道的。我也不知道我当时在想什么</p>
`;
        case 187:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神的蔑视！</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;换身体的时候教的。重新吹一遍，再吹一遍，明白了吗？没明白？那再吹一遍。今天晚上回去多吹几遍，还不明白我明天再告诉你。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还记得我教你训练指导她们的办法吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指导</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啥意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话没看懂</p>
`;
        case 188:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;很不错！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟番外里，幼年时期已经暴露了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟轻井泽试同居一个月了，你这个东京帅哥得分很高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;并不是错觉[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没多久就不是错觉了</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吹箫？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段是小小泉老师用渡边的身体敷衍吹奏部的人，没有别的内涵了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我漏掉了什么关键信息？还是被螃蟹掉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吹什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咦？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要素察觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吹？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？（警觉）</p>
`;
        case 189:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我年纪轻轻工资就达到了3200一个月，午饭要和6罐啤酒，你敢想吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本未成年人不是不能买啤酒吗</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;🦆坐</p>
`;
        case 191:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看成了成了渡边太太的清野太太。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神也一直想做渡边家的家庭主妇啊，可惜可能真的要等到年底啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;目前范，神确实忍不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来自清野的凝视</p>
`;
        case 194:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哥哥~你女朋友知道你给我买这个不会生气吧~</p>
`;
        case 195:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好可怕，你女朋友[fn=28]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;giegie</p>
`;
        case 196:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是吃过的半块还是没吃的半块</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻彻，你给我买这个美姬知道了不会生气吧（拿出巧克力）
真好吃，彻彻你尝一口。
啊！彻彻，美姬要是知道我俩吃同一块巧克力美姬不会吃醋吧。
彻彻，你骑着小电动车带着我美姬知道了不会揍我吧。
好可怕，你女朋友，不像我，我只会心疼彻彻～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;板块—半块</p>
`;
        case 197:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哥哥，你和我吃同一块巧克力你女朋友不会打我吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边也希望安安稳稳跟她们有个家啊[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都打起精神了啊！“回家了”是重点，都拿起本子记下来，考试要考。[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好～我那逝去的青春啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家和万事兴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经能想象到未来了</p>
`;
        case 198:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦桑乌鸦桑，你能再来一次那个吗?就是那个，加！更！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我这一手正方
麻　　　　形
发　　　　说
皮　　　　话
头得看们你让</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我吹过你吹过的晚风
那我们算不算相拥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是这样吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要想起一生中后悔的事，梅花便落了下来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我吹过你吹过的晚风～
那我们算不算 相拥～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦桑乌鸦桑，你能再来一次那个吗?就是那个，加！更！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看不够，不过幸好我看的慢，第二遍看了好几天才看到188</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是日常</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你俩好熟练的感觉！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我这一手正方
麻　　　　形
发　　　　说
皮　　　　话
头得看们你让</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好短。</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是真的尴尬哇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，感觉好尴尬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这称呼我感觉不对啊。讲道理应该叫清野女士和九条女士吧[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事，在场的以后都是姐妹[fn=4]</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这要是玩角色扮演一定比美姬还🐮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;…这到底是女高中生的母亲还是女高中生就成为了母亲呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是女高中生的母亲，还是女高中生母亲？虽然不管哪个都很好冲[fn=37]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我八十万大军何在</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬现在和麻衣有的一拼了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬的眼里只有渡边</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野太太：不认识的孩子呢～[fn=4]</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;插一句，真正的乐队的话，带着成员苦练更多是首席和声部长的责任。指挥能做的更多是给全员排练增加契合度，讲曲子的历史背景故事，增加情绪之类的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神的信徒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;错别字：之情</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边 危</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;错别字：一眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们看，这后宫够大不?</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我家北上广深5套房，10辆跑车[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再吹一鞭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;错别字：一遍</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;长得帅，声望刷的还高，就怎么都会被认为是正常的呢[fn=11]</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来吃你[fn=4]</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可能横滨的海湾不像东京湾里面有那么多的尸体吧（）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要先这样，然后再这样，最后再这样，听明白了吗？啊，什么，没听明白！那我再给给你说一次啊，这里你要先这样，然后再这样，最后再这样，听懂了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想着海湾然后把你们的核废水喝点吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;演奏的时候应该想着海湾里的核废水！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谜语人guna！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正经的解读就是说作曲人对自己家乡港湾的热爱与怀念，寄托了思乡之情（doge）；不正经的说，就是之前跟小泉说的如何混过去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能横滨的海湾不像东京湾里面有那么多的尸体吧（）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曲子里对港湾的感情？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要先这样，然后再这样，最后再这样，听明白了吗？啊，什么，没听明白！那我再给给你说一次啊，这里你要先这样，然后再这样，最后再这样，听懂了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要“哗哗”的感觉，而不是“哗啦啦”，你们懂了吗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五彩斑斓的黑？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以有学霸来解释一下吗？</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原来是想抓奸啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子好失望啊</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;纯真少年都得会抽电子烟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管怎么说，渡边永远的处！欧耶✌🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1！5！哥们在这给你说唱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要把我带入渡边 就相当于我有四个 哼哼哼~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;处男还不纯吗[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边不是无证驾驶过吗？难道还不够纯真？[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：纯真少年会叫姐姐我抬下腿？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扎西得嘞😅🥢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么做题家？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管怎么说，渡边永远的处！欧耶✌🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;4个一楼，起点有毒吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，渡边还是处[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：隐忍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯真少年都得会抽电子烟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多好的一个词，可惜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯不过顶针</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这部分这么长，让我有种漫无止境的八月的既视感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《八月是你的误会》??? </p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快进到阿灵顿磕头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想看渡边首相和久美子秘书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小渡边能有什么坏心眼呢.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到渡边首相，话说预定的未来秘书好久没出现了</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛:居然是真话！！！d(ŐдŐ๑)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌格那啦决斗者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;将《游戏王》《宝可梦》之类的虚拟影像实体化，造福全人类</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也要duel？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;走海马的路吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是修玛基压是吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;科技什么片来着[fn=8][fn=8][fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差点看成走特高课[fn=49]</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈克点了个赞👍🏻！宏伟蓝图有内味了</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边天皇，板载！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙 上一个出身农家的首相还在背锅谢罪呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这脸，天然就能获得所有女性的选票</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;板载</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后继承躬匠精神?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后鞠躬谢罪是吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙 上一个出身农家的首相还在背锅谢罪呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做日本首相干嘛？鞠躬道歉吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边天皇，板载！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做上日本首相干嘛，去给美国人当儿子吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很快的啊，有备儿而来，他可不是瞎打的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看这面相，能做日本首相吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《很快的》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿姨，我也可以！</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我只想开x02s当吹哥拯救世界[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界之王从秃头开始</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会吧，不会有人不想要腰带吧，女人只会影响我变身的速度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;wtm直接u咩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统 不会是渡边后面做出来的吧，因果颠倒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到修玛吉亚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到成立荒坂公司（</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到xmjy集体暴走</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得日本人越来越菜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去清野家的医院！从开头就念了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在下不才，可以帮你照顾美姬</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以 做人工智能=做AI嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;公粮交不够啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想得美🐶
世界之王从禁yu[fn=50]开始</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;废话 ，你看生产队的驴，它休息过吗？给我接着做 [fn=29]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做，做什么啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卫星的轨道天天都在我的头顶</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;……日本有钱人就吃这些？
原谅我山猪吃不了细糠，脱离了中国我感觉去哪我都吃不快乐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;干木鱼是不是木鱼花？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有没有肋差鱼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;干木鱼是啥？还有湿的木鱼？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饿了，我们烤乌鸦吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;干木鱼是啥？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大半夜写美食不安好心[fn=47]，还好学校外卖还给送[fn=4]</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就是额，有些人喜欢把汤放饭里就像吃粥一样，我们学校茶泡饭就是这个样子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;?总感觉是什么黑暗料理，就跟可乐泡饭那样子。</p>
`;
default:
			return '';
	}
}
        