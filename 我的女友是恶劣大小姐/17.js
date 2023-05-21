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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者就是懒得起名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迟来的打卡[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈：终于轮到我出场了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们好快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来来来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第五</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真实，下课后突然精神</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大部分人内心没有那么的坚强，或者说，并不是能够一直坚强。我见过黑暗，也见过光芒，所以我终于能够理解你们。那么，请收下我对各位衷心的祝愿，人生漫长，自强不息</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想当一个平庸的医生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;支持你们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉这层好温暖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下小雨了，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还好，最起码和爸妈关系特别好，但大部分独生子女，确实是无人倾诉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是的，我都瞧不起我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下定决心说了决定，但是到现在又后悔了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚吵了一架，出来走走，发现自己真不如狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人在砖堆，将要下雨，急性肠胃炎，急性咽喉炎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想要说些什么但是又说不出口</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好累啊，真的好累啊，但是翻了下QQ又发现没有人可以诉说</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;暗地里控制学校的部门，侍奉部直呼内行！</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是迫害吗？爷差这点千把字的迫害过程吗？麻烦安排一下番外可好[fn=10][fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木跟花田都察觉到真相了，只有好美不知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没，就是帽子有点重</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木，惨</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木爱情故事的后续请参考东仪白的番外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木，我的一木！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的麻衣学姐我的麻衣学姐我的麻衣学姐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留白真是....有用啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木爱情故事的后续请参考东仪白的番外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木，我的一木！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：我想妈妈了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我回我妈那儿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;城里套路深，想不到你个岩手县的农村人套路也不浅！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬的自觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬の悲鸣🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是发现了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;惨 一木葵 惨</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原来这么近  </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看了下地图，从东京到轻井泽基本上干穿了半个日本。。。从军事角度来讲，真可悲</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师好单纯，像是个妹妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是[fn=21]</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;疲惫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话，我还是不太喜欢老师线（不是不喜欢老师）希望作者能重写一下老师线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他太会了，太懂了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你好会哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，你为什么这么会啊！🍋</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美少女专属，45度滑躺[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在乎才会这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯情少女青奈酱[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年纪最大的反而最少女可还行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这关智商什么事？性格罢了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然是五个人中智商最低的小泉老师[fn=33]</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;幌子又要拍照了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请各位读者不要像一个蛆一样在床上扭来扭去并发出嘿嘿嘿的笑声（）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;参考路人女主第二季第八集</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请不要在床上滚来滚去！[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才像正常人谈恋爱嘛</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;灵活的地位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她明白了，她全明白了，不容易啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;向至今仍不知道实情的好美酱致敬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;校霸部门</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;当狗还得送礼</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;君临神川顶点的三个人，神之清野，美姬女王，地位偶尔再上偶尔再下的奇迹渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神川三神[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真香[fn=21]</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;ya da！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姨母笑.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟看着手中的复活币</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我在房间里等你       ×
我在房间里等你们    ✓</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不不不，清野凛现在是唯一一个不允许渡边彻后宫的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说是钱了，养情人美姬都忍了，其实清野神才是独占欲最强的吧，美姬反而会因为愧疚和害怕失去而选择妥协，容忍渡边和别人亲热，只求让渡边和自己继续在一起（虽然也有自己的小心思打算），美姬真是爱极了渡边啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐和老师的插入到轻井沢这一部分变得生硬、多余了起来，此时正是清野九条渡边的冲突激烈起来的时候，没有顺着矛盾冲突解决问题，有削弱学姐和老师的工具人属性的意思，不然给攻略清野进度打完辅助后就销声匿迹，还能算哪门子的女主角。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐妥协是因为渡边不爱她，但不接受她会死+那时候他并不爱九条，完全没有对九条的愧疚，才勉强在一起
老师也一样，是感动她十年的付出
九条更不用说，她是最对不起渡边的一个，她不妥协根本无法继续
可清野凭什么，她从没有对不起渡边，他们正常相处相爱，渡边心里最爱的也是她，她道歉妥协接受情人的理由是什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野从不用做出改变，因为清野从不欠男主，莫名其妙改变就是完全崩人设了，就连接受后宫我觉得都要个契机，不知道后面有没有这个契机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结这么久 才准备看完 以前对清野挺喜欢 现在一言难尽 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？之前不是九条吗
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说不上吧，人都有自己的性格，但我还是很向往清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在表明我的立场：最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对清野凛好感下降了挺多……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不不不，清野凛现在是唯一一个不允许渡边彻后宫的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是美姬哦，是全身心只属于渡边的美姬[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感情又不是菜市场买菜。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得清野自始自终都没有半点变化，最多变得敢把喜欢说出来，一直在坚持所谓的不能说谎的屁话，而渡边和美姬，哪怕路人都感受到成长，清野一直没有变化，就是以为所谓的跟渡边的默契就一直迷之自信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野还剩四个月，难道清野凛就一直这样和主角玩一些精神上的默契？不主动进攻？大多数都是被动防御，而且也仅仅是斗嘴。难道就靠这些来夺取渡边？不主动为了渡边做出改变，在感情上也不主动进攻，就凭这些是赢不了的，除非作者开挂写狗血剧情（或者一些老套路）让清野做出改变，不过我感觉是最后美姬做出改变接受清野。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条因为杀了主角两次因为愧疚，允许渡边养情人，并且九条美姬一直为了主角做出改变，但是清野凛却一直高高在上，并且要求渡边做出改变，主角也照做了。难道两个人不能互相做出改变吗？九条也仅仅是要渡边的一个承若。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反而都不一定[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说是钱了，养情人美姬都忍了，其实清野神才是独占欲最强的吧，美姬反而会因为愧疚和害怕失去而选择妥协，容忍渡边和别人亲热，只求让渡边和自己继续在一起（虽然也有自己的小心思打算），美姬真是爱极了渡边啊</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;估计早就收拾好了呢</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;轻井泽银座</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奥特莱斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你想干什么？警觉.jpg</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;聊给孩子起啥名字[fn=4]</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这段还是很像看挪威森林里面男女谈话的感觉</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;五米之外，人畜不分。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次我站在雾里，分不清你是牛是马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你可真不当人啊！[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夺笋啊[fn=49]</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边你好会啊🍋🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成轻井泽比青奈老师你还好玩吗?

啊这</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没油了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手机没油了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没油了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当初村上也是这么说的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;叔叔我啊，可要生气了.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生气了吗？</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里各位请自行脑补，把是替换成“嗨”</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;感觉乌鸦的笔记已经进步到得心应手信手拈来的地步了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说起来白天刷到个视频，松鼠的蛋蛋被木栅栏缝隙卡住了。栅栏内是头下脚上的松鼠，栅栏外是蛋蛋，xswl</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是因为男主常穿棒球服，所以才偏爱棒球帽的吗？</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有宫崎老师的番外吗，这是我一生一次的请求，拜托了🙏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太好了，准备拿舌头去舔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个大西瓜[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很重的，你们要理解。
就是不知道比之后藤爱依梨的cap如何了?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师，您这瓜保熟吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次旅行果然行李不少啊</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;马：感情我是背了黑锅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太会了太会了，艹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个诗很可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摘(偷)了山百合，看来又是一个伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，你一定有很多女朋友吧！太会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荐枕青蛾艳，鸣鞭白马骄。</p>
`;
        case 181:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;盛夏众芳息，景物殊寂寥。
后院山百合，开在八月中。
嘒嘒轻井泽，泠泠月朦胧。
晚凉清甚幽，欲睡更迟留。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;山百合</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，我要是有渡边一成功力，何至于单身多年！</p>
`;
        case 183:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;坏起来了，让他装到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗狗们都进来给我死！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊 小小泉老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学不来  学不来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太会了太会了！记笔记记笔记！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也太会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情话说的真好，大男人也顶不住啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太会了渡边太会了✔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写的都他们一起共同经历过的事情[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全是。。。。经历过特殊事件才知道的事情，一堆2人才知道的经历，无语，太多了，要撑死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萤火虫中的你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坏起来了，让他装到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太会了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗狗们都进来给我死！</p>
`;
        case 184:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《我们学不来》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太会了，渡边君</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这 就是T病毒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特蕾西亚（</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻的罗马音是tetsu</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学不来学不来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我但凡会一半也不至于单身这么久了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《我们学不来》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学不会学不来学不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太会了，渡边君</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太会了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么要给我看这些！这怎么学?我做不到啊！＠(￣-￣)＠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;T桑太会了</p>
`;
        case 185:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋
🍋🍋🍋       晃子     🍋🍋🍋
🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别人看了以为是矫揉造作的情话，只有咱们知道，这情话甚至透着点质朴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有不也活着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12][fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实太过分了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;未免太残忍了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把狗骗进来杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋
🍋🍋🍋       晃子     🍋🍋🍋
🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别人看了以为是矫揉造作的情话，只有咱们知道，这情话甚至透着点质朴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太残忍了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子：我在叙利亚打仗都没有受过这么严重的伤！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大半夜的让我看这个，这个世界未免太残忍了😭</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一个人的恋爱，两个人谈，三个人受罪。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对不起，我反省，想歪了[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;?不是两个跟着受罪？ 还有一个是谁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个小泉老师受不了，晃子和美雪顶上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后还有更受罪的要你们分担呢[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是正常的恋爱中和单身狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师，我可以（认真脸）</p>
`;
        case 186:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师！加油！我最支持你！</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你也太真实了</p>
`;
        case 188:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神林妈妈也是在第三遍被打断的呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;否</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐老鸭么</p>
`;
        case 191:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;偷了这么多x4 你一点都不花农你只关心你自己😃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷了别人多少不知道，反正你的心被偷走了。</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;emmm</p>
`;
        case 192:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦太会了！</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师，我爱了[fn=21][fn=21]</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;抱着镜子舔呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刀刀暴击</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《灵魂暴击》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈，小青奈的确是始于颜值</p>
`;
        case 194:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;亲爱的鸦桑，你已经11分钟都没更新了，阿美瑞肯的fbi编造兔子威胁骗经费都不敢这么歇。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“知道了知道了”我赶紧放下手机，拿起了手里的🍋一口要下去。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;11111</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的菜刀已经蠢蠢欲动了…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师天下第一！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全订了，群在哪里能找到？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说得对，但是梵蒂冈的常住人口有800人，同时，仅澳大利亚就有4700万只袋鼠。 如果袋鼠决定入侵梵蒂冈，那么每一个梵蒂冈人要打58750只袋鼠，你不知道，你不在乎，你只关心你自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是希望能多一点老师线，我就是坚定不移的老师党🐶，说实话老师线还是有一点瑕疵的，可能是乌鸦为了赶进度将老师线的节奏加快了，所以现在剧情显得有点突兀。所以还是希望多写一点老师线或者可以重写老师线。当然这些只是意见，还是要看乌鸦自己怎么写。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很好，已经在期待下一章了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;区区致命🍋  不过如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;希望乌鸦能写到1000章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“知道了知道了”我赶紧放下手机，拿起了手里的🍋一口要下去。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;身为老师的小泉反而给读者一种高中青涩欢乐轻松恋爱的感觉。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这，再写五块钱的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好甜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲爱的鸦桑，你已经11分钟都没更新了，阿美瑞肯的fbi编造兔子威胁骗经费都不敢这么歇。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天是老师的回合哒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我永远喜欢小泉老师！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻何德何能！</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;诶嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉 嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;糟了，小泉老师犯花痴了[fn=50][fn=50][fn=50]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这“嘿嘿”就很灵性</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，又让她给装到了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也就那样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶心心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子：🍋不过如此🍋</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;时间长，量多</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;藤木……想起小丸子的同学--卑鄙的藤木同学。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;藤木是谁？哦！你说哪个没胸的晃子啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来姓藤木啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子：被迫害人选已经到我了?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;藤木晃子：请打开麦克风说话</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;唉，这是对我家凛神最不友好的一章[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附议！（顺便摸了下美雪的🐻）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟胸一甩奶四海</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;校医=奶妈，所以有胸就够了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，这是对我家凛神最不友好的一章[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附议！（这里都是我的小号，不信你等我换个号再来说一遍）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的没错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;臣等附议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附议！（顺便摸了下美雪的🐻）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;he！tui！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;河南拔智齿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万有乳力为你点赞！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;臣附议！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;保持阵型，附议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附议[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附议[fn=32]</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好像没了一句？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的很大 你忍一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话。。是青奈说的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我再吐回去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么吸的，可以细说一下吗？</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看成渡边太大了，我没救了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边入赘九条，九条渡边，那是不是老师得变成九条太太了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边青奈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奈斯，全篇第一次出现渡边太太的称呼</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;当然是开除啦</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真衣desu</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真衣和麻衣好像发音相同来着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;耿鬼desu</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊嘞嘞[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;耿鬼dise</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等一个学妹被迫害[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;耿鬼妹你好啊</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;总是看成早川</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起来一句，早用早间咲</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这样？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起真田丸里的那句毒奶 
只要富士、浅间山不喷发，武田家就能安如泰山。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到今晚火山爆发[fn=4]</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有主角可惜了，北原好歹完成了，既然写校园又有挂还是别留遗憾学灌篮高手的好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能入半决赛还是强的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲道理输给大桐不丢人啊[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;惨 棒球部 惨</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你们也一样</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真实！hhh</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还有第三季，总该给久美子一个国金了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久二年北宇治全国都没进</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;章北海：都一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北宇治，fight！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打进全国大赛就算成功</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;部长还是有东西的</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就叫懂事[fn=33]，以为提拔大大的有</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊？青奈不是人类观察部的顾问吗 怎么还兼职吹走部了</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;然而你又没法指导她们，还不如去玩。</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我来到你的城市
.....
多么想和你见一面
在街角的咖啡店</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师果然很温柔呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美丽不可方物的少女呦！你已经成为温柔的人了呢</p>
`;
default:
			return '';
	}
}
        