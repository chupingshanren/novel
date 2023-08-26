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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看一章少一章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八月的轻井泽，四月的春天，温暖的你，永远的乌鸦。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是全都没有女朋友[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好慢哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡点跟新啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都好快啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恐怖哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🔪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;淦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;三带一对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三带二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雪菜：“三个人要永远在一起哦！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是凛的后宫
一夫 渡边
一妻 美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实是三个人关系也不知不觉间变得亲密了 [fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这三个人任意两个都可以成双成对[fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到想看的评论，满意的退出</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一夫一妇一妻[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是的，和美姬成双，和清野成对，没毛病[fn=31]</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神知道我生日了[fn=6]</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吹奏部：我就这么可有可无？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;厉害了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不去秀一手？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也打了个哈欠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的努力是为了自已而不是他人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到一起困觉[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的努力或许只是别人一谈而过的毫不起眼的话题 </p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一说宝特瓶我就想起风莉，宝特瓶PTSD</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝特瓶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝特瓶是用来干什么来着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;思念中的麻衣学姐，想她</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原来还没开赛，到可以赚点任务</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是一边看着你的照片，一边.................备教案了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;身在曹营心在汉[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是在想你呀，“东精帅哥”[fn=11][fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我们一起对渣男，呸！</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;妈的神经病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各位学霸们，有代入感了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我高中属于做梦也会做题的那种人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陪别人逛商场时，看到防成龙装置会想到摩擦力hhh我也不知道为什么会想到这些</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmm，只能说我高中的时候也偶尔有这种想法，比如走路或者睡前想到一道物理题。或者闲得无聊骑自行车回家的时候自己分析自己的运动状态构造题目自己解着玩[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这已经不是人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你啊，东京帅哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还不行，做完再跑个5公里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈的神经病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太有代入感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本学渣表示学神的脑回路果然清奇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各位学霸们，有代入感了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是学霸的思维吗？-_-||</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;思维殿堂呜呜呜 我太想拥有了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;殿堂杀人术</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;思维构建图书馆，🐂🐸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么牛的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是全国第一嘛[fn=27]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在脑海里翻来可太艹了</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚自习干了3节解析几何的我做错了什么看小说都被不放过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怕 高三题目 不过和我有什么关系 我毕业了[fn=4][fn=4][fn=4]</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;重点是A</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就叫学神（经病）[fn=31]</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我是废物
马尔可夫链
马尔可夫链是概率论和数理统计中具有马尔可夫性质且存在于离散的指数集和状态空间内的随机过程。适用于连续指数集的马尔可夫链被称为马尔可夫过程，但有时也被视为马尔可夫链的子集，即连续时间马尔可夫链，与离散时间马尔可夫链相对应，因此马尔可夫链是一个较为宽泛的概念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是废物
马尔可夫链
马尔可夫链是概率论和数理统计中具有马尔可夫性质且存在于离散的指数集和状态空间内的随机过程。适用于连续指数集的马尔可夫链被称为马尔可夫过程，但有时也被视为马尔可夫链的子集，即连续时间马尔可夫链，与离散时间马尔可夫链相对应，因此马尔可夫链是一个较为宽泛的概念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最近搞神经网络刚刚看了看马尔科夫决策过程</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只在强化学习里接触过马尔科夫，顺便一提，文中提到的题目是圆锥曲线而不是线性规划，我记得线性规划应该是用动态规划解决np问题的一种方式。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本高中还学这个吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我知道马尔代夫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;j我是废物……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是个🔨线性规划</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦是学运筹的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圆锥曲线表示有被冒犯到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这题不是线性规划啊，这是圆锥曲线（高三党发言）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可是，这题好像是圆锥曲线不是线性规划(</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是废物</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是废物[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;线代学的太差了..完全不懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么没人吐槽这3个人的记忆力？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了17年腾讯的编程面试题第二题考的就是动态规划</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马尔可夫链其实不难。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这玩意大学一般工科都不学，应该计算机，数学方面专业的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没。。。没听说过[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高中就有Markov了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实，，，你可以不重复两遍（滑稽）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是废物
马尔可夫链
马尔可夫链是概率论和数理统计中具有马尔可夫性质且存在于离散的指数集和状态空间内的随机过程。适用于连续指数集的马尔可夫链被称为马尔可夫过程，但有时也被视为马尔可夫链的子集，即连续时间马尔可夫链，与离散时间马尔可夫链相对应，因此马尔可夫链是一个较为宽泛的概念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是废物
马尔可夫链
马尔可夫链是概率论和数理统计中具有马尔可夫性质且存在于离散的指数集和状态空间内的随机过程。适用于连续指数集的马尔可夫链被称为马尔可夫过程，但有时也被视为马尔可夫链的子集，即连续时间马尔可夫链，与离散时间马尔可夫链相对应，因此马尔可夫链是一个较为宽泛的概念</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp; 某影院有两个售票窗口，t时间内到达的顾客数N_t服从poisson process（lambda），每个顾客的购票时间独立地服从Exp（mu），每当一个顾客到来，必然会选择一个较短的队伍，并会有概率p选择离开（p=min｛n/100，1｝，其中n为队伍中的顾客数），试求无限时间后总排队人数期望。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬就跟龙族一样，知识随着年龄自然通过先祖记忆解锁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波凡尔赛猝不及防！毕竟，智商8的大小姐能有什么坏心眼呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得她只想让渡边跟他去呀(ಡωಡ)hiahiahia </p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就是清野每天无时无刻要忍受的环境
对那些逼逼她不肯接受撒谎说她自私的人，真是雷没劈到自己身上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只喜欢对方情侣假的，难道？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一发单抽就出货了，真的，但比假的更讨厌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面那帮吹嘘自己十连出金的，假的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个吹嘘自己赌马赚钱的大叔，是不是叫毛利小五郎？[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面那群钓鱼佬吹嘘自己钓到鱼的，假的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的  你会😡  假的  你就快乐   假的就ok了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全自动测谎姬[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再说下去，周围一圈该离婚离婚，该分手分手</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我说婷婷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假的</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;细节啊，穿棒球服就是为了给我的美姬当坐垫，其实很热</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我是老实人，渡边的体质已经到了寒暑不侵的地步</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟美姬原味</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这招全屏把自己也a到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;父子骑驴问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条：看我骂两个
清野：其实是三个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我骂我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忘了自己</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;各位，杀了渡边后九条和清野两家就都没有继承人了，导致日本贵族倒了半边天，这不就是曲线爱国嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把他分了吧（</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们干脆鲨了我吧！（仰躺）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻建明：那就是要我死[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再秀我都想动手了[fn=4]</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻:我不光怕你，关键现在我还怕你妈啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听太太的！[fn=4]</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只是给听清野的找个借口罢了
不然刚才你穿什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从此以后，再热的天我都会多穿一件外套；再冷的天，我也会毫不犹豫脱下我的外套。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图你的身子啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了给你坐啊</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;国王吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！这是在心疼渡边呀[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正宫（暂定）的余裕[fn=31]</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙！请问这里有多少清野小姐的🐶→</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不介意变成清野同学的猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然能！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好的，我跟清野凛出去散步的时候会牵着你们的[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想吃清野小姐的🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是凛神的忠犬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我好想做美姬小姐的狗🐶啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要做清野凛小姐的狗🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;娘唉这里也有嘉心糖，快跑啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜凛酱喜欢猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比起狗，我更想变成可以踩奶的猫。哦，清野神没有，那就算了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢人，就像人喜欢狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我好想做清野凛小姐的狗啊，可她说她喜欢的是猫，我哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;prprpr</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘉门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我懷疑你們现在就是这[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我可以和清野同学一起养你们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;活捉一颗嘉心糖？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是要渡边分手变成单身狗吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到活埋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗狗多可爱啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：那要先看神喜欢什么了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们，不至于吧。想了一下，喔，我好像是条单身狗，那没事，汪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;注意！已经出现人传人现象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就知道这评论区会跟个狗舍似的，汪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要变成猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我能🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙！请问这里有多少清野小姐的🐶→</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要吃姜汁炒肉！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想做骉的🐶.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不介意变成清野同学的猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野同学，你能变成猿人吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想做美姬小姐的狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咳咳，我可以</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还我的苍龙变身！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变成恐龙并不能一脚一个，因为鸡也是恐龙，鸭也是恐龙，鸟也是恐龙，企鹅也是恐龙。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶毒的女人增加了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哥斯拉金刚（指清野猿）.avi</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哥斯拉yyds</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你们来的正是时候</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;警察同志，有人想拐带幼女！</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谎言，无搜得雅鹿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佳织小姐姓什么是一个值得在意的问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等等，这不会是公主吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男厕所……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幼女：要让欧尼酱看到我成熟的一面
起码比那个长腿姐姐成熟[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这胸可以了，已经和凛差不多了[fn=4]</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;全图头？拳头？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;握紧莲酱的小拳头</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太危险了，才小学一年级，不过不了解日本那边情况不做评价</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毫无问题  小女孩说谎清野肯定会说，而没撒谎的话  的确不用怕，而且渡边的听力  完全没得问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哥哥姐姐去小树林了，你们先自己玩吧[fn=4]</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条不是交她说她是东京的吗。</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不不不，佳织这明显是看上小莲了吧（参考《小林家的女仆龙》康娜和才川）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个不会是公主吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幼女：小姨子就交给我吧！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妹夫钦定了！</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是又一次暗示出事吗</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哦捏该，miki sama</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：跌  落  神  坛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雨露均沾吗？这就是高情商吧，爱了爱了[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是我的清野凛大人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得叫姐姐大人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求求了(Ω_Ω)</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看这本书跟玩法国大革命似的，建议改成乌鸦带你游日本</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到星野就想到了催眠和一大堆拟声词</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为啥我在淘宝上收不到圣经？[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神上之神，清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想给神写一个《清野神经》</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;芭芭拉冲压</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坐在教堂中间位置的凡人突然回头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;野生的太太出现了！</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;也算是双关吧，不过比较明显</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不同的路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神！！！</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥只做该做的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;身在曹营</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合格的未婚夫呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:不行，还不能笑……但碍事的人都已经消失了……</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;安藤忠雄表示不屑</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你什么档次，也配合我一个教堂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;石之海神父主持婚礼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到了石之教堂我就想到了石之海。</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;居然没人眼馋彻，看来是母老虎积威深重啊[fn=31]</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你犯事儿了你造吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一个巴掌就拍过去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷区蹦迪啊</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;记录到执行名单里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渎神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记仇[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:小姑娘，我劝你耗子尾汁，好好反思，额滴神你也敢编排</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小姐，你这话到头了，路走窄了</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬啊[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真照顾渡边的感受啊，温柔的美姬，爱了爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是对渡边彻说的</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;地得？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼呢？</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：凛姐姐只有我能骂，你们算什么东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝世美少女的对手只有绝世美少女！其他人不配评价！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：什么档次也敢说我敌人的坏话！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讨厌一个人，然后就会觉得那个人无论做什么都是别有用心，做了好事会觉得是装的，没做过的坏事也会觉得如果是他做的也很正常</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦现在只能排第三了(●—●)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦？？？我以为你是渡边之下第二清野神信徒，没想到你居然只能排第三……美姬突然像个凛吹哈哈哈哈，维护的比渡边还快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条:你们不配说凛的坏话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在美姬眼里大概真姬＝渡边＞家族≥凛神，至于其他人，他们在美姬姐姐的眼里吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不在一个级别，在外面的狐朋狗友怎么和发小相比？对于清野神来说渡边美姬是唯一的朋友，但是对于美姬来说清野神何尝不是她小时候的挚友</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：只有我可以瞧不起凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;月亮与六便士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：凛姐姐只有我能骂，你们算什么东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;略显高深，让我反应一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条在总结了斗争经验后，提出了“三个凡事”，并且在之后的婚礼中写入家规。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬其实是头号凛吹吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;行了，渡边滚一边儿去，我要看美姬和凛神贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝世美少女的对手只有绝世美少女！其他人不配评价！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿啦，渡边只是第三者，美姬和凛酱才是真爱呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当你讨厌一个人，他活着就是一种罪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：只有我能欺负她，你们不配。
这就是相爱相杀</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;推理小说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书到用时方恨少[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有出轨，就是讲高更生平。只是到了当地找了个女土著一起生活，有人说渣男，有人说勇敢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书好像是讲出轨的事情？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么一说感觉我是用绯红之王看的 没有印象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是我的阅读量太少了[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人生如梦，让我们枕着月亮</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;建议研究资本论和毛选 考完之后人生就看开了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还真就内个逮到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再来个商君书，荣枯鉴</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这么一想，美姬确实很委屈：她是喜欢清野的，想对她好，但不管她对清野付出什么，抱着怎样的感情，只要她还在撒谎，在清野神的眼里，她跟那些讨厌、排斥自己的人都一样令人反感，不快，无法接受
自己的付出只能得到冷漠的回应，没有人能够一直坚持下去吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这。。。这是撒娇吗。。。虽然知道不是。。。但是这也太像了吧。。。就是那种小时候会想为什么我在姐姐那里不是特殊的（撒娇脸）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野认为美姬背叛了她是因为违背了不能说谎的诺言，并不是美姬对清野说谎而是接管家族不得不说谎…美姬和清野要好，喜欢她维护她，得到的确实一视同仁的对待，自然是有怨气的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这件事上肯定不是美姬的错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一视同仁的理由其实很简单，看渡边就知道了
九条虽然也对她好，但撒谎的时候也是真的想瞒骗她，而渡边即使撒谎，也是在以另一种形式对她说真话
所以渡边才是清野唯一的例外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了看评论解释得很糟。
ab是很要好的朋友
b讨厌一件事
a不得不做了那件事
然后b觉得a虚伪，断绝了来往
a觉得b自私，但还觉得b是自己朋友

这么简单都能扯，b不自私吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬哭哭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么可能没区别啊 神把美姬视为最大对手的嘛 这几个小姐格局层次都太low了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只能说美姬像父亲那句“我都是为了你好”，双方出发点不同价值观不同吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人的本质就是双标，渡边彻撒谎不一样还是爱到不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样可以想到以前的故事了，说着永远不会说谎的两人，美姬应该是为了清野好，说谎骗了美姬出来，或是家业的原因，或是为了维护清野而说谎，结果一心一意的美姬却同样被清野厌恶（也有可能是被别人激所以说谎维护清野，然后向清野求救，），总而言之，最终清野不容忍说谎，两人的友情破裂。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;热情会被熄灭一次又一次就不会再有下一次而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重度精神洁癖加测谎仪带来的苦恼。 其实真的没有什么对错，逼迫一个人去放弃他的处世之道不也很残酷吗，更何况清野虽然讨厌但也没有放弃和清野妈妈和九条家的沟通不是吗，这已经是不同了。
只是放在旁人看来太过无情，但又有谁关心过清野的难受。
总结：难得糊涂。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我没懂，为什么这么多人觉得清野太伤人，清野太自我，清野很病态，清野“仅仅”因为别人撒谎就伤害别人
讲逻辑，清野为什么会这样？那是因为这个世界先对她残忍的啊，别人对你撒谎，你可以毫不知情，但清野从小就被剥夺了维持体面的机会，她被迫看到每个人内心隐藏的恶意
然后去批评她“你凭什么这么自我？”合适吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其他的女角色多少都因为渣彻有改变或者付出，渡边彻也为她们付出了不少。美姬的改变有目共睹，青奈不争不抢，默默的喜欢渡边，可以说是作为渡边的避风港，麻衣学姐为了渡边甚至可以付出生命。
所以我认为下面的剧情应该有清野神的改变，而非男主单独一人的改变。 这也是我认为最近美姬的魅力超过清野的原因。 （一己之见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野认为自己能做到不说谎所以有资格鄙视以及厌恶那些与她不同的说谎的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这里也算是说出我的感受，坚持做自我，这很好，但是在这个过程中如果伤害了对自己抱有善意人，这是否过于自我？
其次，就我个人观点而言，感情是互相付出以及让步的，即便是所谓的灵魂相契，在一些事情上总会有分歧，倘若仅仅是一方的让步，这是否有些“舔”的意味呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：不，还是不一样的！你是我的对手，而她们甚至不配拥有姓名！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以，美姬还是爱凛的[fn=2]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是一个小女孩罢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬因为接手家族产业的原因，小小年纪学会了社会的人情事故/（虚伪），所以凛不再与美姬交好。
而美姬这方面不会让步，所以我还是坚持未来剧情R桑为了K桑说谎。
为了保护所爱之人[fn=48]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬呀！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;而站在清野的角度，美姬是自己最好的朋友，清野肯定是希望她能够成为一个跟自己同样，拒绝谎言的人吧？清野是孤独的，所以希望美姬能够陪在自己身边，但就连自己最好的朋友都拒绝了她，所以才会更加失望吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么一想，美姬确实很委屈：她是喜欢清野的，想对她好，但不管她对清野付出什么，抱着怎样的感情，只要她还在撒谎，在清野神的眼里，她跟那些讨厌、排斥自己的人都一样令人反感，不快，无法接受
自己的付出只能得到冷漠的回应，没有人能够一直坚持下去吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这。。。这是撒娇吗。。。虽然知道不是。。。但是这也太像了吧。。。就是那种小时候会想为什么我在姐姐那里不是特殊的（撒娇脸）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;两个人都不愿意退让，但并不代表她们不在乎对方</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;唉，心疼美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是突然的彻凛糖</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边特殊的理由很简单
不管是亲人还是九条，他们虽然会对清野好，但撒谎的时候也是真的想瞒骗她，而渡边即使撒谎，也是在以另一种方式对她说真话，只有渡边是打从心里认可她且不欺骗她的
所以渡边才是清野唯一的例外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;整本书，除了小泉老师，我最喜欢的反倒是那几个配角。人是一切社会关系的总和，不能过于自我与自私。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想看看评论，但一翻那么多字，还是算了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说作者很厉害啊 这算是欲扬先抑的又一典型，上次见识到这种转变的小说角色还是《间客》里面的邹郁。我还是认为，爱情不能只是索取，要有付出，不然就会像eva tv版的香和嗣，只能互相伤害了。唉 本来我还是比较坚定的清野党（毕竟前面我对美姬的感官确实不好）但读到现在，我反倒觉得还是美姬值得渡边更多的爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;简单说 其实是只有渡边认同了凛的这种过于自我活法，并认为这种活法另凛极具魅力 这才是凛喜欢渡边的最主要原因 并且也想让渡边和他一样活的自我，但正如东京帅哥的定义 只做自己该做的 而不是想做的 所以读到现在 我更认同美姬的爱情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是为什么同样是说谎，渡边就独独为清野钟爱呢
我认为，渡边是一个象征，他说谎或是为了缓和气氛，或是为了父母家人，真正为了面子，利益其他什么的说谎完全不存在。
而在清野看来，亲近的人的善意的谎言，也只是为了他们自己罢了，清野并不需要别人为她说话，所以不会感激美姬；不在意其他，所以幽子的话也被认为是逼迫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在小说中，大家都支持，认为是优点。如果现实中真的有这样的人，我会非常讨厌。凛神我最讨厌的地方，就是太过自我，坚持不说谎，为此不惜一切，包括但不限于没有朋友（渡边也是后面才成为朋友），脱离家族，与家人决裂。为自己的坚持放弃友情，亲情，伤害对自己好的人，我觉得我是受不了。当然，这份坚持也正是凛神魅力所在</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有渡边彻的能力、器量，谁敢喜欢上她们啊？2楼说的一堆废话。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;需要东帅来打破</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得如果真的是喜欢或者是真的朋友的话相互诚实也无所谓，我到现在还是这样想的：如果有一天我有另一半了，然后如果我想开后宫的话，我会先问她“我想开后宫，可以吗”，她说可以就。。。，不可以就不做（好吧，我知道这种想法很蠢，求别喷（跑））</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太自我，我打包票，如果是在现实中没有一个清野党能喜欢上清野的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;独属于清野凛的魅力</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;越是无情在某些方面反而越是有情（执着）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实很美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舔狗战甲附体∪･ω･∪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;执着也是一种美</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;但我也不绝不会对你放手</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在床的话，这不施为一种调情的手法。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次我来 兄弟们往后稍稍[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;委屈屈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我来吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表们歇一歇！这次该我啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点委屈的感觉[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在床的话，这不施为一种调情的手法。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再说一句，放开那个女孩，让我来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下的兄弟，在下佩服！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在下愿意替神效劳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我能把她36码的🦶舔成30码，你们都往后稍稍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鞋给你们，脚给我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我能舔骨折[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次我来 兄弟们往后稍稍[fn=4]</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我只能说两个人都一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑嘻了，经典永流传</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就像喜欢美姬的人一样，一切都从她的角度考虑为她开脱，哎人都是双标的谁也别说谁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说这不会是美姬为了获胜（渡边彻争夺战）采取的手段吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人的本性，偏爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说出了我的心声</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人性吧,和自己关系好的容易多考虑些,多关照好朋友</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我还来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自己觉得对的，非要强加于人吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开玩笑，神会错？神做什么都是正确的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对，没错，硬要说那就是‘清高’</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是因为谁都没有错，才痛苦呀。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛不懂人心！！！</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;再次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言是上帝的恩赐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实清野凛并没有强迫别人不说谎，她也没那个能力，她只是点出了别人说谎的事实，而那些人听多了就从尴尬到无能狂怒，有问题的究竟是哪一边其实一目了然。
而渡边彻不同，在不断被点出在说谎的同时，他从来没有生气，反而是把真心藏在谎言里，真诚地对待清野凛这个朋友，并支持她的决心，但其他人却连接受都做不到。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别瞎说，清野还要求别人不说谎，这才是她不受欢迎的理由</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只是不想怎样而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲，努力做到人工智能的地步</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那叫中二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;集体与自我，真的几乎是无解。这里的集体是除自己之外与所有人的关系，父母，亲人，朋友……如果你想要坚持自我，并且这个自我还与大部分人的认知不一样的话，你几乎就可以体会到一个人对抗全世界的感觉。每个人都是独立的自我，但只要加入与别人的关系，自我就不是纯粹的自我。可你自我的形成，其实就是来自于和他人的相处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神是孤独的。。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样做的代价就是没有朋友，如果渡边没觉醒系统就他一开始只想当公务员普普通通过一生的态度，是不可能忍得住凛的，之所以现在能接受甚至敬佩喜欢主要是因为系统带来的自信才让他可以和美姬凛太太她们谈笑风生，如果不信的话可以重看一下小说开头看看一开始的渡边对人生的态度和信仰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可以永远孤高，只要你不背叛你自己，你愿可以做你心中的神，属于你自己的孤独的神，当然神是没有朋友的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能为他人改变，坚持自我，是永远也不会成长的</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我在脑子里模拟了4岁的神，突然可以知道有谁在说谎了，这种能力让年幼的她既兴奋又困惑，她试图去听其他人说的话，然而发现周围的人都会面不改色的说谎，她害怕了，跑去像父母寻求慰藉，然而低下头安慰着神的幽子阿姨轻轻的说着。“是谎言。”反应过来的神带着惊恐的表情躲回了自己的房间。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，这么想真的很过分
本质超级加倍版叛逆期，固执己见不是问题，可还因此伤害身边的人就错了，换个角度就是把自己的意志强加给他人，说到底还是病态</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果是心懷惡意，說謊的確不好，但委婉或閃避也不行，這就很雙標了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做自己就去做吧，但孤独是注定的。。。有想做自己又想有朋友？世界不是围着一个人转的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在脑子里模拟了4岁的神，突然可以知道有谁在说谎了，这种能力让年幼的她既兴奋又困惑，她试图去听其他人说的话，然而发现周围的人都会面不改色的说谎，她害怕了，跑去像父母寻求慰藉，然而低下头安慰着神的幽子阿姨轻轻的说着。“是谎言。”反应过来的神带着惊恐的表情躲回了自己的房间。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只问你一句：如果清野凛是个丑逼呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得小学还是初中的时候，有次考试，作文题目是善意的谎言，随便想想就能想到很多。但是实际上呢？绝症病人会不会更想知道自身情况而不是什么也不知道的死去？等待儿子从军归来的母亲是不是更愿意知道真相而不是被蒙蔽？我后来问过我的母亲并确认了这点。谎言一定不会是正确的，善意的谎言也只是自以为是强加于人的谎言。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坚持不说谎的人 只会比其他人受到更大的伤害。从小就可以分辨谎言，最好的朋友，亲近的家人，跟你说话的时候全是谎言，你是什么感觉？在这个一层章说中十几个人大部分都是认为不说谎是伤害别人是有错的世界，在这个大部分人的三观下，不说谎坚持自己需要多大的勇气？在任何时候我都不觉得抗拒谎言是种错误。但很多人不是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以人家哪里伤害别人了？是强迫周围的人不能说谎了吗？如果你天生就能分辨谎言，那么当亲近的人对你说谎的时候难道不是你受伤更大？举个例子，你的朋友找你借钱然后说一定会还，谎言；你的妈妈说下周带你去游乐园，然后你发现还是谎言，这样子的人，自身才是受到伤害最大的啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛并没有要求别人不说谎，只是厌恶别人说谎。把自己的意志强加给别人和不喜欢所以远远的逃开。这两件事的性质和体现的性格是全然不同的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坚持自己，伤害亲近自己的人；为了亲近的人，宁愿改变自己。我无法说哪种更好，只能说选择不同，而闪耀的美是相同的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主角早期满嘴谎话，还拉着清野蒙九条，那时候怎么不说她是个坚持己见的人？还不是为了主角该蒙就蒙？所以，清野不叫坚持己见，这叫在碰到主角前，没碰到愿意为之放弃己见的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，清野凛的问题不是坚持自己不说谎，而是要求其他人也不能说谎，坚持自己和把自己的意志强加给别人是两码事。其他人对清野凛的问题也是类似的，他们想要清野凛也说谎，而不只是接受说谎的自己。双方都像把自己的意志强加给对方，又都不肯妥协，就只能闹僵了。这也是渡边做的好的地方之一，他不要求清野凛说谎。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心里的两个小人作斗争</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，看来不能用中国人的思维去看了(●—●)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，这么想真的很过分
本质超级加倍版叛逆期，固执己见不是问题，可还因此伤害身边的人就错了，换个角度就是把自己的意志强加给他人，说到底还是病态</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能之前有看漏，哪位书友有留意到帮忙点一下，清野凛想做的是什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做自己难道不应该是做自己想做的？比如渡边的“要成为东京帅哥”。
清野凛这最多算是坚持不做讨厌的事吧～
而且这样的坚持还伤害到周围关心她的人……
这也不需要什么勇气吧？
想想自己叛逆期时候所谓的坚持，要是叛逆期长点，家里人再惯着点，不就是清野凛本凛吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做自己最想做的事，生活在自己喜爱的环境里，淡薄宁静、与世无争，这难道是糟蹋自己吗？与此相反，做一个著名的外科医生，年薪一万镑，娶一位美丽的妻子，就是成功吗？我想，这一切都取决于一个人如何看待生活的意义，取决于他认为对社会应尽什么义务，对自己有什么要求。
——毛姆</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真够虚伪的你
说凛清高，毅力，孤独，可以
可有人理解美姬么？自认为踩在道德制高点？还换位思考？
美姬和凛都没错，我很喜欢这两个角色。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但凡不是大家族不是美少女，屁事没有。大家清一色讨厌就是这么简单，三观跟着五官走。家族给了别人任性的资本而大伙没有这个资本就这么简单</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛因为生在大家族才可以这样吧，不然从小被孤立，甚至校园暴力，长大后也无法顺利工作，估计会活活饿死吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是《月亮与六便士》里面的男主思特里克兰德啊，所有人都认为他应该选择一个家庭幸福美满，拥有令人羡慕工作的生活，但他偏偏要选择去做一个被所有人不看好的画家，但即使这样也有理解与支持他的朋友。</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里的意思是，美姬知道渡边要去见清野，不是让渡边不去，而是开玩笑的同意了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬装作不知道》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一语成谶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“别跑哦。”
“只要安艺同学你不跑就没事。”
“别摔倒了。”
“只要安艺同学帮我开路就没事。”
“还有…别离开我。”
“只要安艺同学紧紧握住我的手，就没事哦。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不许偷跑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野赶紧抢了渡边做压寨相公吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画：《美姬在看演出》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这下旗就插好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你给路哒哟</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;男人经典语录。只要你不说分手。我就陪你去一直走下去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：一动不动是王八！很明显我不是[fn=64]</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想起教父3里，麦克也是在教堂的福音声中走出，但可惜麦克和他的家族没有得到拯救，彻是去拯救凛</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;侧面说明渡边和清野是一类人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻走出的不是教堂，是清野凛讨厌的地方，站在教堂木门前，这是能看见清野凛的地方。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;语文课代表呢</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;错的是世界</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;林间之神.JPG</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁说树上不能有书，书上不能有鸟?
我说的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;树上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;树</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我不能动，你过来啊</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是泰瑞莎这套吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人！上图！</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可以可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到一手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一只漂亮的小鹿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为有你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跑了跑了，要跑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有你才是风景</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上面走着一个漂亮的神[fn=4]</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可惜不是黑发</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻译：太平淡 ，继续努力</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;翻译：这样如何？</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;长满了我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绿了！绿了！渡边脑门长青苔了！[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，不愧是神，讽刺都好有意思</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彳亍</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;以后每天都请这样走一遍[fn=4]</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;诶嘿 太甜了。
凛酱已经想听情话了</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对神的赞美难以言述</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;R桑一眼就发现了渡边情绪不对！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我网卡了？明明有6条消息却加载不出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就是我的神！
神爱渡边，因为神必将爱他！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发生肾么事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;像跟妈妈说自己被别人欺负了的孩子
清野凛，我的圣母
清野幽子，圣母的圣母</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看到彻特意来安慰，神开心了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“只要亲密的人理解我就好，别人怎么想我无所谓”—雪之下雪乃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛yyds</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神又怎么会在乎凡人的看法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除了彻</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;无敌是多么寂寞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孤峰的青松</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;评论呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搁置争议，共同对外[fn=4]</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“这样被人讨厌的人，我一个人就够了。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在教我做事啊？[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬确实有委屈的理由，清野对于美姬是特别的，而美姬对于清野却和其他会撒谎的人没区别。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该说是虚伪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神和美姬和解的时候，也到了本书的结局吧，后宫达成[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;傲娇的凛</p>
`;
        case 175:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;路在脚下，更在心中，心随路转，心路常宽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要和神在一起，再烦闷的心绪也会逐渐开阔</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;期以岁月</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;理想还未实现，做出的承诺还没有兑现，怎么可以停下！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;珍惜此刻，不必焦虑</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我来翻译一下，东京帅哥要有“我全都要”的信心。</p>
`;
        case 178:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;都为对方开心而开心</p>
`;
        case 179:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我会让你们重新成为朋友=我会让你们成为我的翅膀🤯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会大被同眠……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是我的翅膀。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后都娶了（）</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野心里其实也希望和美姬和解</p>
`;
        case 181:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;支棱起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;掃地僧：霸業雄圖，血海深仇，盡歸塵土</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等会儿……“我所认定的事，就会贯彻到底”……？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么大一个flag，怎么没有人评论</p>
`;
        case 183:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;助攻?</p>
`;
        case 185:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;结婚照结婚照！</p>
`;
        case 186:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:你是想让我死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但愿下次来的时候美姬不会注意到这张照片[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以啊，准备供神像了！[fn=4]</p>
`;
        case 188:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;经组织研究决定，同意你主做主了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：没错，是我告诉他们的   </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上帝为您打出一个助攻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶意操盘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们经常是自己做“主”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想起了当初的那个占卜:你明知道那是个谎言，却会相信它</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这位小姐，你会被教堂里的病娇剁碎了喂狗的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是上帝的助攻！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喔弥陀佛，信上帝还管发老婆吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一种钦定的感觉😁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书友们研究决定了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神（划掉）至高意志乌鸦（勾）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神预言啊[fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神：哦，居然没撒谎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得，这应该是剧透了吧。作者居然光明正大的剧透，太过分的。我建议这两天必须加更10章，希望你不要不识抬举。不然。。。。。。。。。。。。




我哭着来求你好不好[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说渡边和清野在清野神的神像面前结婚是什么样的景象呢？
突然想看这个场景了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神：真话。
没错，我说的！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们这是什么神啊？
哦 清野神啊 那没事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神：真话。
没错！我就是这么说的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抱歉，我只信清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是个无神论者，唯有此时此刻，我希望神真的存在！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“会不会是钦定的呢？”“进过众神研究讨论决定了，就由你们来结婚。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经组织研究决定，同意你主做主了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神：没错，主就是我，是我说哒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神，就该有神的样子[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的主说的没错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回去告诉你们那个上帝，祂是个神，我清野凛也是个神。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是清野教的神职人员吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;漂亮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;支持！！！！！！[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;10条评论呢？！我那么大的十条评论呢？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;紧张啥，真话哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦操盘了啊，绝对操盘了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神教怎么到处都是呀！摔.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说得好！你买菜必打折！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是清野神教的信徒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：没错，是我告诉他们的   </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赞美煮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是真话哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主告诉我，这是真的 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这教堂是乌鸦神教的吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真话！</p>
`;
        case 189:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神表示这妥妥真话，我乐得不行呢[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上帝也会说谎，例圣经里，有关禁果，神说吃了会死，蛇说吃了不一定会死。问谁说了慌。(别给我说，神的意思是在神的心里死了。)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正宗教发展这么多年，基本上就是在科技人文发展的基础上不断完善自己的话术…各种福音版本就是各种打补丁圆之前的话。
这点上东方宗教神棍们就简单轻松多了，多说似是而非的话，多打机锋，他们会自己脑补圆回来的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终有一天会喜欢上谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一着急家乡话都出来了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上帝也会说谎，例圣经里，有关禁果，神说吃了会死，蛇说吃了不一定会死。问谁说了慌。(别给我说，神的意思是在神的心里死了。)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可能是真的的，且不论主存不存在，单单说她一个小圣女上哪有资格接受神谕啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会吧，渡边不是完全懂r桑吗？怎么现在会错意了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在神职人员的加持下，上帝说谎了啊[fn=26]虽然上帝说谎如同家常便饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都没反对。你着急啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好不容易有个机会[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神表示这妥妥真话，我乐得不行呢[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，渡边这反应，是担心对方说谎神生气么？但万一对方说的是真话呢[fn=8]</p>
`;
        case 190:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有信念的人相信自己说的是真话？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我会不知道？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草不是谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野:我偷笑都来不及，怎么可能生气，你急啥啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有“主告诉我”，怎么也不会是真话吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在质疑（清野）神的威严？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家没说谎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这大概是神唯一不会反驳的谎言了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真话</p>
`;
        case 192:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;求婚场景</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已阅
每日祈祷
最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我下剑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，大量楼层消失</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里我对渡边不太满意了。。他完全没有考虑过九条么。。。美姬看到这照片会是什么心情？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请注意，这里清野神说的是“不是婚纱照也可以的话”，但却没有否认是结婚照</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神:渡边还不赶紧带老娘去拍婚纱照[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神:准了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神说，要有光，所以世间便有了太阳，神说，要有人。所以猿猴走出了森林。神说，要有邂逅，所以渡边和神在人类观察部相遇了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求婚场景</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不就好起来了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神说，要有光，所以便有了太阳，神说，要有人，所以猿猴离开了森林 ，神说，要有邂逅，所以渡边和神就在人类观察部相遇了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那么渡边和清野结婚在教堂用西式?
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就没了？！来人把乌鸦关进地下室，继续码字！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！！！好短啊。。。就这就这？就这就这？就这就这？就这就这？就这就这？就这就这？就这就这？就这就这？就这就这？就这就这？就这就这？就这就这？就这就这？就这就这？就这就这？就这就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘶呀～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天怎么感觉这么少</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;婚纱照也会有的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想不出来骚话，我觉得角色马甲都打不过你们[fn=22][fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已阅
每日祈祷
最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先抢个一楼再看，晚安了[fn=45][fn=45]</p>
`;
default:
			return '';
	}
}
        