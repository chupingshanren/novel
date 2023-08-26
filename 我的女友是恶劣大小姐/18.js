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
<p>&nbsp;&nbsp;&nbsp;&nbsp;加油已经16了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘀嘀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;b</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦豁！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前来报到[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我美丽的公主。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真快啊你们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，都好快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一！
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;审美疲劳了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有我看成了“太太的，软软的床”吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大大的，软软的九条正躺在床上酣睡。连选词造句都不会的作者也配写书？（狗头）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大大的，软软的。。。床?[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬早已爱到了骨子里～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬在睡得挺香的呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的美姬啊，你已经是渡边的形状了啊[fn=12]</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬 我的美姬 已经变成了渡边的形状</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你懂什么，这叫打入敌人内部</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当时不知道多少人退坑了呀，因为男主过于憋屈，导致这本书其实在其他地方风评并不好，不过当时是R桑支撑我走过来的。现在美姬已经成了渡边的形状，做出了最大的改变。R桑！你咋还在原地踏步！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边还是处啊[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最亲密的敌人？（滑稽脸）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么不是动作，这些动作你绝对能在动作片里找到同样的动作[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;警察：你管这叫动作吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想问一下这个动作它正经嘛？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个故事告诉我们不要疯狂立flag，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“等我强大了把九条家给你扬了”
“敢不听我的命令就把你杀了”
……
“你快动啊？”
……
“我要睡觉了……”</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说真的，r桑对于渡边有的是灵魂的契合，仿佛命中注定的那个人。而k桑则更像是恋爱的两个人，有过辛辣，甜蜜，酸楚，各种味道混合在一起而互相牵着手走到现在。这才是我所能理解的爱的最终模式。r桑当真只应天上有啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日久生情啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵，区区致命酸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵，区区致命伤（滑稽）</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;0距离不行的话。。。负距离？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对彻的渴望已经化作了本能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也要贴贴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得对美姬也太残忍了吧。想想你喜欢的人给他情人献殷勤。啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羡不羡慕？羡慕也没用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥的自我检讨[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:我只不过想做东京帅哥，但我不是东京人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《渣男的自我修养》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诚实小郎君就是在下</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;作势是重点
搁原先早就一脚把彻蹬下床了[fn=31]</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;送你亿万惊喜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我把我的心❤️都摘给你了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不患寡而患不均么……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我给你摘了蘑菇，要吃吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摘心❤️</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这种锁技很厉害，还好我学过，让我来教你解开啊……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边睡左边不该抬右腿么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;寝技[fn=33]</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和美姬一起晨练，开始！</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不挺有自知自明的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老夫老妻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是的，男人都是这样的。</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看得我想去背诗去了，转头想想我有没有渡边的颜值，背个P，咸鱼才是我的该做的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫吃鱼，狗吃肉，奥特曼打小怪兽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雨停船泊湾 日落鸟归巢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;归家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈的 骚话一堆 我怎么没渣男这功力[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边渣渣是真的会，美姬想要的是渡边，要捍卫正宫的地位，渡边哄她的时候就这样，告诉她无论他在外面咋了，美姬这才是他的家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸟归巢用的好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果脑浆有颜色
那一定是黄色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄昏之际，归鸟投林</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;船进“港”，鸟归“巢”都是进进出出的嘛[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，我仿佛看见夕阳下呜呜呜的小火车，那是我逝去的青春</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家一般的安心，幸福，自在，温暖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每个人心里都有一泓湖水，即使有时它会凝结成冰面，如果允许我在你的冰面上滑行，我定会在冰面下找到我的投影。我一直在你的湖水里等，等待另一个我前来寻觅，当两个我在你身上相遇，我就忍不住要说我爱你——《我爱你什么呢》沈浩波</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此，没有不也活着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都有一个共同点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵，岩手县民</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;倦鸟归巢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总之就是非常“幸”福[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看得我想去背诗去了，转头想想我有没有渡边的颜值，背个P，咸鱼才是我的该做的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不对劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就像凸与它专属的凹，榫与它专属的卯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我想起了渡边和绿子第一次做的对话[fn=33]村上春树的书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太暖太甜了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怀疑你在开车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不对劲 不对劲！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯→</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;www乌鸦太会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫吃鱼，狗吃肉，奥特曼打小怪兽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建议有能书友回头整个渡边情话语录，供广大单身🐶学习😃🙂😐🙁😢😭</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样！（张飞抱拳）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜的发腻了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样！（张飞抱拳）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;あたしも</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;进了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条彻底沦陷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜的发腻了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，永远的第一！</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一 转 攻 势 反 客 为 主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈，以前有人这么嚣张，现在坟头草已经三米高了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要用魔法打败魔法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以爱会消失的对吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妄图反杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猎杀时刻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以爱会消失的对吗[fn=12][fn=12][fn=33][fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;走女朋友的路，让女朋友无路可走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥，他膨胀起来了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一 转 攻 势 反 客 为 主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“你变了，没有原来爱我了”[fn=33][fn=33][fn=33][fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈，以前有人这么嚣张，现在坟头草已经三米高了</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;熟练度满格</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家庭弟位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秒怂哈哈哈</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;记笔记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后我就称渡边为师傅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从现在开始记笔记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学不会啊，骚话还是你多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要么世界就此凝固，要么去到哪里都要把你抱住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻哥，我真的是学不来啊，这就是母胎solo的原因</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;话说前面戒指的事说了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尤其别跟R桑说</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正宫彻底确定了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没限定范围，依照渡边的尿性应该指的是和他确定关系的四人中最爱美姬，算是限定条件的实话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛。。。只是朋友[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会吧。渡边的话也有人信？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野[fn=12]我的清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是渣男老套路，（你们三个人里）我最爱你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太渣了太渣了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此乃谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也有吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没限定范围，依照渡边的尿性应该指的是和他确定关系的四人中最爱美姬，算是限定条件的实话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;考虑到渡边做过不对美姬说谎的决定，现在这句话，是真真切切的实话，还是适逢其会的情话（因此不用在意是不是完全实话的那种）？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有本事你当着清野凛的面再说一遍？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花心的渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正宫彻底确定了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假如凛在这里</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;男人的嘴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你爱过大海 我爱过你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个最爱，一个最喜欢。。。哎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曾经爱过[fn=19]
现在还爱[fn=4]</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渣男或许恶心，但明知道彻是渣男且一路看到这里的人，却被这样一句符合人设的话恶心到，更奇怪好么…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《关于在后宫文里总是看到有人恶心渣男男主的我究竟做错了什么？》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比起某个渣男故意隐瞒，渡边的坦诚就看得舒服多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好狗啊🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从喜欢到爱已经体验过，又失去，如今有心动的女生，但是好像已经忘了怎么喜欢了，会夹杂渴望得到她的欲望和证明给前任看的想法。想的多有时候是件很烦的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢看后宫文，但又总是被各种渣男操作恶心到，只有渡边的后宫是我理想中的后宫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经历过陈大渣男的我无所畏惧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至今看过的后宫文里渡边绝对是最负责的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《关于在后宫文里总是看到有人恶心渣男男主的我究竟做错了什么？》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男或许恶心，但明知道彻是渣男且一路看到这里的人，却被这样一句符合人设的话恶心到，更奇怪好么…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;yue</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你渡边老狗，不过为了你的坦诚我始终佩服你</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以对清野美姬是无所谓的嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咕，杀了你
简称：咕杀[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话以前听起来还挺可怕，现在就和猫猫头的语气差不多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神可能不会输，但美姬一定赢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐表示你们随便赢，彻也不可能离开我。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神表示我赢麻了呀！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神可能会赢，但美姬不可能输</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;R桑，虽然不能跟你在一起，但是我不说谎了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以诚哥为本?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但这个前提是因为神才存在的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诚哥，九条清野家完全攻略计划[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后就叫你诚哥吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世人皆知温皇一向以诚待人</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你心里幻想着她们也加入吧？包括母亲们的那个未来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻译：要是她们主动我也没办法阻止是吧？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像个齿轮，每个人都卡进去！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有那种世俗的欲望
…
贫僧这就还俗</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊！姬你太美！姬你实在是太美！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言不会伤人，真相才是快刀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真话伤人谎言反而让人有理由逃避</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……卑微啊，太卑微了。真话都不敢听了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下面为您播放的是，由美姬点播，she演唱的——《你太诚实》[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;道理都懂，听了还是会难受。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;格局小了，这里要拆开读[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“嗯”这一个字用四个不同声调，就可以表达出不同的意思[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说说而已，你敢当真试试？</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是不是还要感受相连，脉动，压榨，填满啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;零距离要变负距离了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你好坏啊，我好喜欢[fn=8]</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快进到叠在一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到大被同眠</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;丰饶富婆？那不就是……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次半夜都这么刺激</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这么看是挺远的哦[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怀来，是河北一个地方[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怀里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫！</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她早就接受了，不接受的一直是清野凛，清野凛讨厌说谎的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实美姬和凛在遇到渡边前都是孤独的啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里，结局最后的难点就在清野上
老师，学姐不必说，美姬看似强势，但欠了渡边太多，有了第一次让步，就有第二次
神过于完美，以至于没有理由让步，好奇作者要如何处理清野的线
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的很温馨啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最近几章一直有书评说清野没变化，擅自认为这部分观点说的改变不是接受后宫，而是“讨厌谎言”。但是怎么变？变成什么样子？不说谎是一定不会变的，那么想让改变的就是因为“谎言”而与亲友的疏离。不过，现在也没有理由改变，本身已经坚持十几年了，没什么转折会一直这样下去的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三观这就被剧情带跑了？开后宫成了理所应当了？不接受后宫就成了不愿意为爱改变了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太卑微的爱情 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;！！！这这这，要结束了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;~卑微</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她早就接受了，不接受的一直是清野凛，清野凛讨厌说谎的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;动摇了啊我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经暗示可以接受神了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一起来轻井泽度假吧，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实美姬和凛在遇到渡边前都是孤独的啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪样？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点懵？具体点？</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这怎么舍得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岩手县的男人就是喜欢花言巧语骗女孩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼，渣男，现在说这种话，得便宜卖乖[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到抱头出海</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诚哥你死的好惨啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她舍不得，除非真的成海王了</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;把你的灵魂，一起带走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈人，难道渡边也是病娇么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是你的学习能力嘛了不起的渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边本来就是病娇美少年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铁索连环是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬有花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后你小子就又复活了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呼应前文的轻井泽谋杀小说？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又不自觉的想到了失乐园</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把你的灵魂，一起带走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名想到巨婴艾伦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;What a nice boat</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈人，难道渡边也是病娇么</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太会了，有这本事十分之一还愁没有对象？</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谁能不爱呢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我沦陷了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿，这。谁能忍住不爱这样的美姬大小姐呢[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻了麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。有那么一下，眼睛润了一下，我酸了，真的[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师可能会守活寡。但其他几个人肯定会殉情。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道以后有没有人说什么，我提前说一句：在？拆。懂！</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;心的距离越来越近了，想起了小水和松冈，哎</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;让我想起天蝎情侣。。。唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这可真是强欲啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，让我想起凯瑟琳和希刺克厉夫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我宣布：九条美姬天下第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在偷换概念[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我死了我死了我死了，我要背叛清野神了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就比如两个病娇</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;虽然好像美姬赢了，但我总感觉是渡边赢麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：渡边，我比你想象的还爱你</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我如果是渡边，设身处地想想，不会对美姬做需要负责的事情，并且不会爱上她，只是忍辱负重，妄图到翻身之日罢了，因为这是她欠的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不对呀，明明之前还有四个楼，怎么我成一楼了？[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说评论呢？</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;出事，出大事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大预言术</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯一神：谢谢，已经出事了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人呐，给乌鸦斩了给美姬姐姐助助兴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以我之见，陛下所担心不无道理，但是陛下，臣甚至能预感，臣等正欲死战陛下何故先降。故臣清斩妖妃渡边，以正后宫（大雾）（手动滑稽）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到出事，我要看，赶紧的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经出事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到今晚就出事[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶 美姬觉醒了预祝未来 现在我宣布九条神教正式成立。谁反对？谁赞成？</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;走到这步我无怨无悔，一切都是我的错，杀了我吧，我绝不反抗！
【药来】</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不不不，这里请斩杨沂中</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！给美姬递上柴刀！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三块钱🔪，十块钱🔪🔪🔪咯</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哪一晚在三楼抱了清野凛。还有清野凛出水对视真的是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宛如哪戏台上的老将军，身上插满了旗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话让我想起了川端康成的雪国[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然不是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得，这话连自己都不信了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此乃谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“当然”</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：都大被同眠了还能不懂你[fn=34]</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实相比其它女人，美姬最能接受的是清野神吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;若渡边死了，清野神真的可能殉情，因为渡边是世界上唯一一个从心底支持她理解她的人，是心灵港湾精神支柱。渡边没了，极大可能会产生万念俱灰此生已毫无意义的感觉。
有句老话说得好，本可忍受黑暗，如果不曾见过光明</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;参考诚哥[fn=31]</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;又让步了，我的美姬啊[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不算震惊，一个人一旦心里让步，底线就会越来越薄弱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以退为进，立不败之地</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实美姬最能接受的就是清野神了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条让步也是因为对方是清野，不是清野多有威胁，只是她曾是自己的姐姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬啊[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阶段性胜利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我三刷了还是最喜欢清野，毫无疑问的清野
看了评论很迷惑，我以为我挺摇摆
突然发现原来我属于坚定不动摇的那种人……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬😭😭😭😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉 说实话虽然合家欢确实很快乐 但是倘若是我 到这个地步 就算真的很爱清野 我也会开始主动克制了毕竟这样对美姬太不公平了 爱还是要克制 东京帅哥做该做的事 有想法但也应该克制 当然灵魂伴侣确实可遇不可求 只是有点替美姬不值 唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在我是坚定的美姬党了！她太温柔了，我真的要哭死[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一刷的时候一直更喜欢凛，结果二刷到他们去露营发现美姬也很可爱，不是印象中的差清野一头。我叛变了吗[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心疼我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果我当时没有杀他，我将绝杀，可惜，假设不得。 清野，你快点，清野，别磨磨蹭蹭的，给清野倒一杯卡布奇诺，开始你的翻盘秀。 我们三个女的，你能秒我？你能秒杀我？ 你今天把我们三个都免了，我九条美姬当场就把这双长筒袜吃掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊咋啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话一出，结局已经很明朗了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬美姬我的美姬呜呜呜 她真的太好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻:我吃软不吃硬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬赢了，她赢的太多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《以退为进》
明白阻止不了后，索性让一步来封住凛有可能的正宫位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一直是追求类似柏拉图恋爱的人（不算同性），所以一直喜欢清野，但看到这儿，无语哽咽，千言万语也只有一句【美姬…我的美姬】</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;臣等正欲死战，陛下何故先降
美姬帝国打倒清野神教！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沉默成本影响决策方向，美姬一旦开始让步，必然步步后退[fn=12][fn=12][fn=12]美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬姐他是渣男啊，不要再妥协了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的天，有这么一瞬间我真的不想渡边开后宫了。我无法理解有一个那么爱你那么爱你的女人，还有多少的爱可以被分出去给其他人。我已经彻底沦陷在美姬姐姐玫瑰色的爱里了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬太爱他了，所以害怕失去他，愿意做这个最后的让步</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以退为进，知道他俩早晚或者已经出了事。直接把凛固定在情人位上。论战术还是九条高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她又妥协了，她凭什么妥协，但是她妥协了
我感到开心，也感到难过，开心是因为他获得了机会，难过是因为她改变了自我（当然她的改变也是自我愿意的改变）。
目前看来，清神并不能做到这样。（虽然这或许是他最爱她的原因吧）
我个人喜欢愿意为爱复出的人。
[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猛男落泪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜哇呜哇呜哇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;退一步海阔天空，退两步越退越后</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情人是永远不可能情人的，清野永远的正宫位(●°u°●)​ 」</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，我的美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;QAQ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜呜呜我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了渡边让步了，我的美姬啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多么卑微</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主公，臣欲死战，为何先降？帝位破灭，非色不佳，资不美，弊在爱彻。爱彻而位卑，破灭之道也。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日割五城，明日割十城</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好了，凛不认为自己有错是绝对不会道歉的，否定了自己的坚持就不再是清野凛。
这大概就第一个任务有关了，需要让凛真正的犯下错误</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬落泪，我直接心碎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你轻轻一个吻😘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可能，神是不会低头的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬怕不是被渣男pua了。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]女王，我的女王大人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，美姬为了保住正宫的位子一退再退，主导局面的早就变成渡边了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇偶，大事件</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，她太好了……
美姬，美姬……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不算震惊，一个人一旦心里让步，底线就会越来越薄弱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震惊一整年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胜利的法则已经确定了!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我室友问我为什么大半夜突然在床上乱摇，笑死根本停不下来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷青结</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震惊小伙一整年[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得渡边应该是那个情人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后宫党，起飞！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我高傲的美姬[fn=12]
渡边彻给爷死！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高傲的凛不可能是情人彻注定是渡边·清野·九条彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬,美姬,我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会后面清野就真成一个情人了吧´<_'</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧，解题方法找到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渎神计划</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又让步了，我的美姬啊[fn=19]</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;请把诚哥遗照添加到渡边的人物标签里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，前面几楼是不是该反思一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这河里吗？</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小傲娇</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就是内卷吗，因为主角足够优秀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有为清神的爱情感动，也更为九条的爱感动。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻了，从这里能看出来九条在操作，让步个锤子，清野已经有了同意老师学姐的苗头，这就跟美姬一样了，为了保住优势地位，肯定要继续操作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她也愿意，但是情人是美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到九条清野贴贴，渡边带学姐老师远渡大陆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是三个人一起睡觉就刺激了，到底是美姬压清野，还是反过来呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到亵神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，三人在一起越来越和谐了</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你想的是五个人在一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是吗？我不信。</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;此时渡边彻的表情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：不能笑，还不是时候…但是，我将会是新世界的男主角</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：嘴角开始疯狂上扬，我控制不住我自己啦，哈哈哈哈哈哈哈哈哈哈～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边笑起来了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;"嗷吼 嗷吼 嗷嘶~"</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐妥协是因为渡边不爱她，但不接受她会死+那时候他并不爱九条，完全没有对九条的愧疚，才勉强在一起
老师也一样，是感动她十年的付出
九条更不用说，她是最对不起渡边的一个，她不妥协根本无法继续
可清野凭什么，她从没有对不起渡边，他们正常相处相爱，渡边心里最爱的也是她，她道歉妥协接受情人的理由是什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最爱的人怎么会是情人
如果是普通情侣那会是以结婚证来论
但他们现在这种畸形的关系
不是最爱的才是输
九条就像有一次她妥协之后说出口的“你都快为了清野凛放弃一切了”，就是因为她知道她不是渡边最爱的那个，才一步步后退一步步妥协得到了读者的怜爱
但本质上她妥协是因为她必须妥协，她没有清野一样可以强硬的基础</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从家庭旅行之后，美姬的地位已经不可能被撼动了，就算清野同意其他两人，而且渡边背叛美姬，那么美姬肯定会疯，那就是不死不休，一旦美姬真的死了，渡边不可能心安理得的跟清野过下去，要么殉情，要么离开，麻衣学姐找不到渡边，那肯定就殉情了，小泉老师应该不会，至于清野那就不知道了，估摸着也活不了多久吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说来说去还是绑架</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条帝国板载，打倒清野神教！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后渡边没结婚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神怎么可以做情人？肯定是正宫，最差也要和美姬同级</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波啊，是以退为进。九条美姬天下第一！！！[fn=57][fn=57][fn=57]</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是后宫小说最难处理的矛盾。清野神要是成了情人那就真的没意思了。但美姬要是不是正宫又说不过去。所以乌鸦这个老贼干脆就没写这个问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这我希望这本书不收清野了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宁愿不收，做情人还是算了吧，一个从头到尾都在描写的角色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不用让，正宫一直是美姬的，在怎么爱，也只有美姬能做正宫，也只有美姬有度量做这个正宫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多大点事嘛，反正她俩背景大，两个女的和一个男的结婚当个例外不是轻轻松松。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然是几乎不可能的条件，但九条做了这么巨大的让步，正妻的名字要是还不是她感觉就说不过去了</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦yyds，人物写的太立体勒，我都能感受罩杯下的温度勒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实还有个办法，不知当讲不当讲😊</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟美姬第一次婚纱照是和凛在一起拍的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬和凛贴贴，渡边滚粗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段话指的是渡边还惦记着清野还是指九条还关心着清野🦆？</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟讲真的是当初美姬答应的事没做到，尽管不撒谎是相当反人类的，但作为当初凛的挚友承诺没有做到就有了亏欠，同时美姬心底肯定还是认可和钦佩凛的那份坚持</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟前夫</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我tm直接把民政局搬你们床头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;傲娇了吗，是傲娇吗？哈哈，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;领证了吗[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赶快结婚得了😅</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;槽，美姬是天!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前都是美姬说还没结婚。现在角色转变了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先结婚再离婚</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谁不是呢→_→自知之明啊(=_=)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得小泉老师就算了，麻衣学姐肯定不会在意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 和她们在一起，不过是因为她两都是舔狗，只是可怜她们[fn=62]</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，这算是呼应前面“就算再怎么互相折磨，最后也会相爱”乌鸦太会写了[fn=24]</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今天天王老子来了渡边也不是处，我说的[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那又怎么样 渡边彻依旧是处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这俩三楼可太搞了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人在路边走，车从脸上过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书的评论神奇无比，在此处达到巅峰。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看这对立统一的两个三楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要在每天的晚上12点的第一分钟里同时发评论就都会变成一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我靠，我看到了什么三个一楼[fn=62]。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后呢，渡边不还是个处男！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算被埋在棺材里，我也要用腐朽的声音喊出—渡边是处！！！[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当你凝视深渊的时候，深渊在说：渡边是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乐了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看到一条评论，点进来它消失了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天天王老子来了渡边也不是处，我说的[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那又怎么样 渡边彻依旧是处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么没人？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦，这糟糕的台词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看见飞车已经不再惊奇了</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来来来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：你知道我昨晚是怎么过的吗！！.我这不多找几个分担下，你还来？</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就这（提裤）？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压住抢，大晚上的，UC</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这。。过了过了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就逛到这了
浏览器打开…
（按到广告）
📱：学生会室内会长竟…
👴：这个我喜欢啊（按返回键）
📱：高冷学姐竟对我…
👴：这个我也喜欢啊（按返回键）
📱：可爱女老师竟在教室对我…
👴：🐍🐍兄弟（按返回键）
📱：高贵大小姐竟在床上对我…
👴:就这个了……🌿要付费</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不错不错，画面感十分强烈，都忍不住要打开UC了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有画面了有画面了</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;动画化，国内有点不现实，可以做成游戏成本还比较低</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我最开始我以为这书动画化应该找Brain's Base，到了吹奏大赛要找京阿尼，后来觉得要找SATELIGHT。现在我是越来越明白了，什么春物、什么京吹、什么相簿都不合适，这本书就应该找PoRO才叫专业对口啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又体力槽清空了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面是付费内容！</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉中间少看勒一章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在连省略号都没了？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我刚才发的评论呢？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完事了？几点开始的？</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嗯...到天明</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;奇妙的早晨</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一楼神秘失踪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是睡够了，所以没睡够啊…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中文考试“睡够了，没睡够”这两个睡分别是什么意思🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡够了，也没睡够</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原版这里直接说的是没睡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡够了，但是没睡够</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶嘿(•̀⌄•́)</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;到底在担心什么呢[fn=8]</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;早餐吃香蕉奶昔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;酸奶养胃助消化 美姬 渡边的都给你咯～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原谅我……</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野神也敢，虽然事后要被欺负</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该说没睡着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是彻彻底底干了个通宵啊</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;做爱做的事情[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬准备偷听墙角~然后这样这样~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自己都知道怎么回事还搁这问，想再去门口旁听嘛，19**年的女高中生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂得都懂，还问，房门外不都触景生情了吗[fn=4]</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不能让第4个人知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂的都懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是第三条腿的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孕育第三个人的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双关了，看个人理解了（阴险）</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;ArkNight</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;类似于分割线吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;菱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是个啥啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两位太太有点东西，如果可以的话[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是什么符号，总不可能是美姬的小嘴吧……[fn=61]</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边好算计[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在是给渡边创造独处机会吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画《美姬在睡觉》</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的清野同学，她还不知道发生了什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还搁着挑衅呢？某个人恐怕不知道自己要一辈子当小啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我tm直接笑死，可怜的清野同学被美姬姐姐玩弄于股掌之中。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢了，我的美姬赢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肯让步就已经赢了，某些极端凛党能不能现实点，在书里为了追逐自己理想女友，连正常一点的行为都能拐着弯贬低了吗，至少九条一直在改变</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她这是没胆量抗拒，没信心阻止，只能再次妥协，但既然是后宫，清野也要被安排妥协⋯⋯不得不说到了现在，男主确实是渣，贬义的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的清野同学啊 啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次可真是…格局小了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;格局小了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛牛啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次来说，已经输了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的清野同学，她还不知道发生了什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还搁着挑衅呢？某个人恐怕不知道自己要一辈子当小啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的嘲讽</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛老妹，你已经是情人位了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大局已定，你还是认命吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：呵(胜利者的微笑)，败→犬↘。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;闷声发大财</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美有姬回头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美有姬回头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正宫的自信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬已经让步到这样了，如果不是正宫别说读者，渡边自己都过不去那道坎。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等你和他经历过晚上 你就知道我为什么不去了[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你知不知道这一年每个晚上我是怎么过来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正宫的从容.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大局已定，你还是认命吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：呵，败犬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正宫娘娘的从容</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《从容》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：看你可怜让着你的[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王の蔑视</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛老妹，你已经是情人位了</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神觉得事情渐渐脱离了掌控</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可达凛眉头一皱，发现事情并不简单</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神发现事情并不简单</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野：发生甚么事了，一个晚上怎么感觉天都变了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大人，其中必有蹊跷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野：？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神眉头微微一皱，发现事情并不简单，默默退至众人身后。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神觉得事情渐渐脱离了掌控</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真女主的眼神变得犀利了起来[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可达凛眉头一皱，发现事情并不简单</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野的笑容冷了下来，发现事情并不简单</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然而清野还不知道事情的严重性</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发觉有问题</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;忘性好大啊，当时渡边上完厕所在洗手间洗手恰巧清野刚上完厕所出来，渡边就说美少女怎么能上厕所，清野说即使再可爱的人也会有生理需求（大概是这么说原句记不清了）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦你怎么这么没常识啊！美少女怎么会上厕所呢？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自信的笑容？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是自信的笑容</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽！草蛇灰线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忘性好大啊，当时渡边上完厕所在洗手间洗手恰巧清野刚上完厕所出来，渡边就说美少女怎么能上厕所，清野说即使再可爱的人也会有生理需求（大概是这么说原句记不清了）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朕的课代表呢！？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表在哪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边当时还感慨，原来别人说他不帅的时候，自己脸上的表情也是这么欠揍。
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只是洗手而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过年的时候么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦你怎么这么没常识啊！美少女怎么会上厕所呢？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快帮我回忆一下！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美少女不会上厕所啊，有点常识！</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;抓重点小能手</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;窝草，我tm在看甄嬛传？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是算计</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本宫一日不死，清野只能为妃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本宫一日不死，清野终究是妃[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢麻了，赢麻了。</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这叫以退为进，在战术上作出让步以获得战略上的主动权和更高话语权</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬已经稳赢了，以退为进都让步到这样了，渡边就算再喜欢凛也不可能把大房位置给凛了，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬这叫存人失地人地皆存</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬的哀鸣。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这钵啊，这钵是美姬以退为进，真的赢了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬以退为进，早就实现稳赢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后的倔强[fn=19]</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画：美姬在睡觉！</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她急了</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说和做往往是两码事[fn=4]就比如说是岳母却......懂得都懂[fn=58]</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;聊聊世界之王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也是赛马娘？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孩子他们感情的事，不就是骑马么！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我们在说孩子的事，你为什么要说骑🐴”
“因为我想让渡边骑🐴”</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在工作》
《美姬在国外》
《美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬在渡边水晶盘打坐，清野还在上路带线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;头戴王冠是她，手持权杖是她，一切权利，终归于她，我的女王，九条美姬，阿门，哈雷路亚[fn=25]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬让渡边帮她跟清野和好，那么渡边的后宫全是美姬的，这波美姬在第十层，渡边只考虑到了美姬和清野全收，他在第五层。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正宫的从容</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;头戴王冠是她，手持权杖是她，一切权利，终归于她，我的女王，九条美姬。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正宮大房的從容</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条:学会了姐的让步，剩下的只要睡觉就行了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你以为是彻的后宫，其实是美姬的后宫，这波美姬在对流层</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥我感觉这两位妈妈有一腿？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胸有成竹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬在渡边水晶盘打坐，清野还在上路带线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个叫余裕(从今天开始，你叫做‘皇后’)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在工作》
《美姬在国外》
《美姬在睡觉》</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我只是一个路过的卡面来打</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一直都坚持的晨跑呢？</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我第一反应是恶意......</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个我懂，《生化危机8，村庄》，男人杀了古堡女主人和三个女儿，以及宠物，最后带着警察，连人家家都扬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是《轻井泽的猫》这本书，几年前看的，剧情大概有这个内容，然后目前剧情就是在轻井泽，还有猫这个字，应该是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;百度的。只搜到一千零一夜貌似有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《母娘乱馆》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;漫长的告别</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫知道？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来个大神，什么书？</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;话题能够通地气，但绝不能通地府</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野神专属光影</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;寂寞啊</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;心情美丽，风景才美丽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么时候才轮到老师啊……</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;梦里不觉夏已逝，余情岂是为他人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想向折木同学介绍这里
话说回来，天气已经变冷了呢
不，以经回春了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在是渡边对战神的局了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;何止，前面的楼层都没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到白色的季节[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胜负，还未定，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在删评论都是直接抹去所以痕迹重新从一楼开始了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我tm</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就专门删我的评论吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千万在冬天前搞定一切，拜托了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想向折木同学介绍这里
话说回来，天气已经变冷了呢
不，以经回春了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梦里不觉夏已逝，余情岂是为他人。</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前方道路上有一对小情侣骑着自行车是一边看着手中的书一边又谈情说爱，这样的行为实在是太危险了，咱们得赶紧让他们停下来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冰菓的“已经入春了”那一段话里，充满的是对未来的希望与等待，是千反田对折木暂且搁置下的感情的鼓励。这一段话里，是由盛夏转至秋天。和折木“有些冷了呢”的忐忑不安不同，凛的“夏季还没结束呢”是对美好时光的留念。而渡边的“轻井泽已经快入秋了”，既是对凛桑留念的回答，又是乌鸦暗示剧情要加快的伏笔（胡言乱语）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冰菓啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始发力(刀)。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“有些冷了呢”
“不，已经入春了”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;午时已到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晶莹纯净的爱已经开始凋零</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛的季节结束了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野是夏季出生，九条是秋季出生，清野说夏季还没结束，指自己还没输，早晚会赢。而渡边说快入秋了，我不太确定，由夏入秋的改变可能是暗示最终会是清野对九条的道歉来达成两人关系的和解。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有种要完结的赶脚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野：你我之间还应在夏天，不受他人，不容他人（纯洁的爱恋容不下第三个人，清野已经在试探和心里动摇）
渡边：你我之间已快近秋天，因你一直拒绝有其他人的夏天，而我是渣男（我就是全都要，你再这样我就没办法了啊，差不多得了）
总结：渣男渡边彻！（成年人的世界就是全都要！狗头）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为你就是整个夏天，我们离开，这里就入秋了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“变冷了呢...”
“不，已经是春天了呢，村上君。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然看完了，以后要痛苦的追更了[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这栋楼没了多少层了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表出来回答一下！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胜败已定！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冰菓的“已经入春了”那一段话里，充满的是对未来的希望与等待，是千反田对折木暂且搁置下的感情的鼓励。这一段话里，是由盛夏转至秋天。和折木“有些冷了呢”的忐忑不安不同，凛的“夏季还没结束呢”是对美好时光的留念。而渡边的“轻井泽已经快入秋了”，既是对凛桑留念的回答，又是乌鸦暗示剧情要加快的伏笔（胡言乱语）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阅读理解一下，谢谢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快入秋就是夏天结束了，而夏天结束了这句话包含了满满的美好之物逝去的物哀情绪，无论是比较普遍通的甲子园，玉龙旗，烟花大会，还是这里特指的完美结局的楔子都已经结束了，定下了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉这一段剧情有点长了。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经是春天了。（带上千反田的绝世微笑）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看见了四个一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马孔多在下雨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么多个一楼？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曾经有一年，我吃饭的时候突然感觉到天气有些变凉，心想：秋天要来了啊。然后我奶奶撕日历，立冬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在删评论都是直接抹去所有痕迹重新从一楼开始了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“开始冷起来了呢”
“不，已经入春了”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;游子寒无衣[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里楼层好奇怪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《冰菓》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬手段高明啊，不愧是九条家的掌舵人～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;起点现在删评论连存在的痕迹都删去吗，连直接删去，然后重新从一楼开始吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有人做阅读理解吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一开始是五楼，结果，结果发了一下，却变成了一楼，我删掉了我发的两层楼才是三楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么楼层都消了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前方道路上有一对小情侣骑着自行车是一边看着手中的书一边又谈情说爱，这样的行为实在是太危险了，咱们得赶紧让他们停下来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“开始冷起来了吗。”
“不，已经入春了。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要心中有理想，身体有活力，整年都是春天[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梦里不觉夏已逝，余情岂是为他人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想向折木同学介绍这里
话说回来，天气变冷了呢
不，已经回春了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经是春天了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千反田彻[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;南望更新又一天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示下章高潮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;短小无力又一章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冰菓吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很有冰菓那味儿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没了？睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“不，已经春天了，村上君”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安啦[fn=45][fn=45]</p>
`;
default:
			return '';
	}
}
        