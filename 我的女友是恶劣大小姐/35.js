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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;敬酒啥的可把我恶心坏了……看会儿小说压压惊……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等等，难道这个突然狂风就是指这场台风？[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷懒的乌鸦只更新了一章！
他看书请假偷懒，停电请假偷懒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这今天不双更？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;14了吧？上一章不是13吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给爷冲！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蛤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2333</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;111</p>
`;
        case 256:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;去年渡边想去将棋部赢钱被将棋部按在地上打了 所以说要报仇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以-雷霆 ！！击碎 黑暗！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龙王的牢饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就是想看腿吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也要吃龙王的牢饭？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是被腿控制住了吧，是吧是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神川龙王，我当定了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;╮(︶﹏︶)╭</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;天空是蔚蓝色……不好意思，走错了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仿写：月云还算明亮，漆黑的池塘偶尔会倒映出月亮的背影，草边的蟋蟀和池塘里的青蛙在合唱，引得鱼儿总要浮上水面看一看，水面的波纹在回荡，夜还很漫长。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，“书法部”应该叫“书道部”</p>
`;
        case 257:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;鸦桑，你已经15分没更新了，我写高数作业都不敢这么歇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们的组合名称是“乌鸦超短”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不白了一眼了，傲娇吧[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还短？你们是没有追二眼珠子的书吧！？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们的组合名称是“乌鸦超短”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我从08年就开始等完结了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又看完了今日份的更新，一天一天接近着完结的故事，心情波澜着，收拾一下，洗澡睡觉去



啧，每天晚上被孩子闹醒三次，真的很难睡着啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸦桑，你已经15分没更新了，我写高数作业都不敢这么歇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🙄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;短乌鸦短</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告，楼下接</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是叫掷杖部吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉子大概不会再出场了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉子的爱情故事出现了</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神奇的间隔符</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;奔狼领有个奇怪的家伙在游荡</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那么人呐就都不知道，自己也不可以预料</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;将来报道要是出了偏差[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙楼上加急</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;内部都不开会研究的吗？
哪怕意思一下呢？[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会不会给人一种钦定的感觉？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻好美:你说我一个...怎么就...人类观察部已经研究决定了...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美可以的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边已经研究决定了，由你来当下一任部长</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;人类观察部下属部门实锤[fn=58]</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木是吹长笛的吗？</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;无锁？</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;放心，我嘴挺紧的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人人都是广口瓶真人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我朋友的嘴都挺严的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秘密是一个人的，两个人的话就是，天知地知你知我知，四个了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你放心，我嘴很严[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只告诉你一个人，你别说出去。[fn=31]</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那是怎么传出去的呢？[fn=39]</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;房门一踹</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;难道要首尾呼应，泯恩仇吗</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，根本进不去</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好美你变了</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;很好，是一个合格的领队</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经开始研究全国大赛的对手了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;研究强队demo</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我往里搁药！</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好美好美[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这名字真好听[fn=31]明天都被夸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美你好美！[fn=4]</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;连一木抬着都费劲，确实是很多钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摇一摇哗哗直响是吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;振作啊，一木</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，出来接客了！</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好美变太多了啊 成长了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来一份扬州炒面</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;战争年代留下的都是狠人，后面和平久了就慢慢软了。世界范围都一样吧，除非每天打仗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了三次才发现是男的，女装大佬nb。
啊！这世道怎么了，男同学就不能穿女仆装，男同学什么时候才能站起来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男主扮女仆，人气挡不住哇[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;令和猛汉？🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？女装？可惜不是渡边啊🤺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？
男同学！怪起来了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啦啊啦</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;震惊！玉藻好美看到渡边和一木要一起离开，嘴里的炒面突然就不香了</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不要死啊好美，你至少还能被迫害30章！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;停一停，走廊禁止开车！[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：渡边君，我去……嗯~去了！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵，你怎么这么容易就去了？！</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是忘不了最初(￣ε(#￣)~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;借人[fn=4]</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;天台吃饭，灰往里灌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那一天台的风，从冰凉的伤口吹进来，格外的冷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;论地点的刺激性，玄关明显比天台好[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诚哥的战斗现场，值得怀念的地方</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;青峰大辉，老天台拖地人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坏事就是指动漫里的在天台上躺下睡觉(不嫌脏吗)的行为</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对 诚 宝 地 ！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灌篮高手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看不懂，请务必上图[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坏事？什么坏事[fn=39][fn=39][fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这叫中二</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;人贵有自知之明，这句话对谁都很适用啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正每打你的主意[fn=4]</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;王国好汉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你有(被迫害的)才能[fn=4]</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;贴，都可以贴[fn=31]</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来人啊，非礼了！然后好美就在东京湾了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美：你叫破喉咙也不会有人来救你的（痴女脸）</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你为什么这么熟练啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“你让我留宿就跟你做”（不）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;气抖冷，男生还能不能好了？怎么是个女生都欺负渡边？就不能冲我来嘛（震声）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也想被按手印？</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;自以为是加自欺欺人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你确定除了你有人会信吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;色谁也涩不着你啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全校女生：岂可修！放开那个碧池，渡边君冲我来！[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神一句话就可以让你万劫不复。还有注意风评啊喂，渡边是人气第一的超级帅哥，你在传言中是一个那啥女。渡边会对你下手？估计狗都不信。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;计划不错，可惜有凛酱</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;都在向下看</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;重点</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;八嘎莫诺！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巴嘎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ba ka~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八嘎牙路（弹舌）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿齁[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雅蠛蝶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Bug yellow～～！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Aho</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿猴嘎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八嘎！</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;傲娇已经退环境啦，所以你才会是本作唯一指定败犬哒！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？好美</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喜剧之王</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;迈特凯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有两个潜台词，坚持努力才是才能，不屈才是才能，就如战争星灵故事里的阿特瑞斯，百折不挠才令人敬畏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;努力也是种才能，不是所有人都能认清自己的弱势而坚持努力的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;努力是一种天赋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;努力只是兑现天赋的方式，所有人上限一直没有变过。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不努力，你都看不到我的脚步，
努力了，你才知道你与我的差距</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坚持努力是最宝贵的才能！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最不值钱的就是努力O(∩_∩)O但单纯的努力，能做到的也不多啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;追踪梦想的道路上，最不值钱的就是努力，但最基础的也是努力</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;努力需要理由，没有理由的话，任何人都会堕落</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三国志7的锻炼和圣痕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶，谁不想放轻松慢慢来呢，可这社会推着你往前，不前进就后退，卷的要死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但上了大学之后我就不想努力了，除了自己感兴趣的东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;同意二楼！一直努力也是种天赋的。懒惰可是人类的劣根性之一啊，有些人把好牌打得稀烂就是因为懒（比如我）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是能一直努力也是一种天赋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是的，唯有努力这个天赋我们每个人都拥有</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好美是学渣（相对渡边五人组），我也是学渣，我和好美贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一个箭步上去就是“嘶溜~”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我康康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美也有八分的外貌啊   起码千里挑一的大美女了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神高の肉包怪[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想吃白呼呼的大兔兔[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喔哟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正所谓，白嫩翘挺大！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呲溜~呲溜~~[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一个箭步上去就是“嘶溜~”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老板，这馒头多少钱一个？[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美是学渣（相对渡边五人组），我也是学渣，我和好美贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎嘿嘿</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只两句话就蕴含那么多东西，且练习/看见/推荐/误会等这两方不同的视角所发生的事又联系在一起，这对乌鸦来说是基操吗？无论是结构还是细致程度都很棒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里表面是骂渡边，但上面一句特意写到这明明很诱人，可渡边没有那么庸俗的被吸引，完全没把注意放在上面。
所以这里好美明白了前几天是误会，在心里对渡边的印象也再次发生变化。（假正经自然是傲娇嘴硬，确实是她的性格）
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野应该不待见这种人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是要我把眼珠扣下来你才满意了，对男生的压迫什么时候才能停止，气抖冷。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“诸位！”
“你们都看到了，这就是女人。”
“当你们粘着她的时候，她们丝毫不会给你面子。”
“但当你不看她的时候，她又会埋怨你。”
“子曾经曰过:近之则不逊，远之则怨。”</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有时候，高兴不必是因为被喜欢的人夸，还可以因为能力被同领域比自己强的人认可，所以没必要什么都往股市上拉扯。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高兴了吗，可惜你的股票已经退市啦</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你可是我的第一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是人类观察部</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太会了哥 顺便还捧了下美貌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无论怎么说，你也帮过我一个大忙，即便你不知道</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这么说显得有点傲慢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;百人一首？歌牌部吗？[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦笔力是真好，回想好美前期人物形象和观感，和现在努力上进的好美，并且还能让人接受这样的变化</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是啥东西？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？啥玩意</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;突然狂风写了那么多章，台风还没来呢，多拉啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仿写：“……”九条美姬脸色慢慢平淡，但是连刚刚还在咕咕叫的皇后，都察觉到了危险。
（果然水平不够啊，感觉怪怪的。）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个台风写的好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雨女无瓜！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;药泥寡</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;胸扒扒的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害好美，人人有责[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做部长，要巧立名目，拉拢R桑，R桑来了，渡边才能跟着来。拿到全国金赏以后，R桑的渡边如数奉还，剩下的渡边和老师学姐三七分成(ಡωಡ)</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;楼下楼中楼那位差不多得了，好美都能凭自己努力考上神川了还不是学霸是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;「不在意」，但是玉藻好美这个人反复作怪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;校学生会主席：首先记住各院老师各部部长名字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大一刚刚进学生会的时候也是这么被要求的，要记住学生会和相关老师的名字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来有这么多人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看你是在为难我胖美[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神:这不是很简单的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哟哟哟，R桑当初也是让你背名单哟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《怎样当部长：从入门到放弃》</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你对面可是个身经百战的大人了呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，还是你的大</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;很多书，穿越的主角特爱用两世为人，瞎用，30+30怎么就等于60了 见闻经历。有加成但绝没有那么大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;详见五楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;试管婴儿下山坡，经历比他爷都多[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抖音上成天刷到这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“使人成熟的是经历，而不是岁月”</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，单方面关系破裂，然后再单方面和好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻好美：渡边君，我申请进场，可以吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;相逢一笑泯恩仇，就这样吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美[fn=12]，我的好美[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻好美赶上末班车.JPG[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻好美：渡边君，我申请进场，可以吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，单方面关系破裂，然后再单方面和好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这又多一个签到？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经消失在境界线外的玉藻好美线，我还有机会看到吗?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;破  镜  重  圆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你想吃桃子？</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吉良吉影表示很喜欢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很合适</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;泪目，玉藻也变得可爱了起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻也在学着变好啊，没有谁是一成不变的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说句扎心话，就算玉藻好美人堕落了，很多人也不一定够的着啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按乌鸦描述，好美应该是经过努力考到一流高中，但是还没来及窃喜，就发现其他人都是学霸，都比自己厉害(=_=)
于是迷失了，差点就堕落了。。
幸好进了吹奏部，再加上渡边的刺激，重新开始努力了。。
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然都觉得变了或者可爱什么的，但是我的第一反应是：丑人多作怪。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;才不会自称好美呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以的 这个女配写得也很不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美从来不称呼自己好美！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每个人在不停的做出选择然后改变</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点绕口…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=58][fn=58][fn=58][fn=58][fn=5][fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;动手吧乌鸦，渡边债多不压身，摆烂就完事了，什么老师三人组真姬姐姐，都给我冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以自己的名字自称，戳中xp了兄弟们。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呀我摔倒了，要乌鸦写个好美if才能起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自称“好美”的好美好可爱☺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成长的故事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目，玉藻也变得可爱了起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻也在学着变好啊，没有谁是一成不变的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;傲娇？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻变了……</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;此处不加个 ◇ 表示一段的终结吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里是很温柔，换成我不知道会不会直接骂出口：你以为你是谁啊，耽误我这么多时间！</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前面忘了，我的神，好美！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美确实好美～[fn=58]</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;万一最后没选你呢。</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;……我看完励志剧，也是这么个感觉。放心吧，撑不过半天的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在床上翻个身吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;于是我在床上扭了一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美 :燃起来了
</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好美大意失渡边啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后早见学姐考虑玩决定让其他人当部长 这就搞笑了哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早见：想了想还是觉得好美不太合适</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人类观察部的传承[fn=48]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话这本书里面任何一个配角单拎出来都能当女主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样的努力家好美真的好美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻果然是一个充满正能量的人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦斯！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，和我女朋友一样可可爱爱的</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;每个人都有属于祂的未来</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好美好美啊</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;噔 噔 咚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好没握手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:我是只莫得感情的查岗姬[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;漫布精腥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回答的好是漫不经心，回答的不好[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典漫不经心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正宫的盘问</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木试图反杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美还在等机会进场
一木已经悄咪咪的融入后宫了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有内鬼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;告御状</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你啊，一木</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没办法，作为轻小说男主角，渡边注定是一个温柔的人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大部分日剧或者漫画，男生普遍的共同点都是温柔，女生都是可爱[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无节制的温柔，特别恶心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对于好美来说，渡边的态度是傲慢的。
可在九条看来，这样的渡边是温柔的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“你很勇嘛？”
“开玩笑，我超勇的。”
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;危</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大部分日剧或者漫画，男生普遍的共同点都是温柔，女生都是可爱[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万恶的亚萨西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没办法，作为轻小说男主角，渡边注定是一个温柔的人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白天温柔，晚上就不一定了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边老亚撒西了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，你好亚撒西[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看你都对谁温柔了[fn=31]</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没关系，她有啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚刚还看了好美的事业线[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过是第一个名义上的女友罢了_(:з」∠)_</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有企图，而不是没有过企图，说明了渡边渣男还是打过主意的🐶</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咋才五月就有人冲KPI了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个人的命运啊，不光要看自己的努力，更要考虑历史的进程，人类观察部决定了，玉藻同学啊，这个吹奏部部长啊，由你来接任吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人类观察部已经决定了，就由……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道人类观察部不是暗地里掌控学校的部门吗？
你们难道就没发现，就是那个，侍奉部其实暗地里掌控了学校的运转——泛八爷</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害好美</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟想去局子里坐坐？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你个“海中龙王”还看得上这种小头衔？[fn=51]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八体痰走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小学生真棒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八一姥爷生前是个体面人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边老爷生前…也不是个体面人，多吐两口痰吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龙王的牢饭？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然龙王的工作说是小学生，但我只想说:银定了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一任还在吃牢饭吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;✓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去年那个部长毕业了是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接八一老爷的班吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龙王的后宫
开演！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你个“海中龙王”还看得上这种小头衔？[fn=51]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桐生零毕业了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 海王本王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟想去局子里坐坐？</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘟噜噜，课代表～[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这笔账我记下了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;200元记一年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻:记仇[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我信了（一脸天真</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，绝对没有[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;斤斤计较</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;忽然狂风</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的风儿甚是喧嚣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;（忽然狂风）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的风儿很喧嚣</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是不是该用晴天娃娃了？</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里是作者的心理描写</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太直球了。根据我的经验，频繁直球出击，效果会断崖式下跌。不过也有可能是语境不够到位？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;标题终于上线</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;十！九！八！一个都不准走！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有哥斯拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有怪兽袭击的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一到高潮就想攒一会了…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喔！！！ 高潮要来了吗！！！</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是有晴天娃娃的吗？挂上啊直接强制晴天</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日本对台风与地震的应对很熟练</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;yes/no?</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里应该曾经有人</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晴天娃娃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界上最安全的地方是彻的身边
——明日麻衣</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;搁这泰坦尼克号呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到东京湾双人旅游套餐[fn=4]</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;区区一个台风奈何不了我 ✓ .jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“一丘之貉”</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看得出没有存稿 现写的</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你在描写我大武汉嘛</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp; 以前读高中遇到这些天气都会让人短暂忘掉学习的烦恼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为何不用晴天娃娃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能放假的都不是好台风[fn=34]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了，想起晚自习停电</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以-雷霆！ 击碎黑暗！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实，我喜欢狂风和暴雨，来点雷电更好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是我当初没错了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 以前读高中遇到这些天气都会让人短暂忘掉学习的烦恼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鱼唇的人类幼体[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了+1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;被糟糕的天气困在学校的时候确实是这样，特别是学校还因为天气原因给我们放假的时候</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一枝红杏出墙来[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两岸猿声啼不住！</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;写的让我感觉身临其境，真的是太棒了</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神奇的比喻</p>
`;
        case 179:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲眼看着一楼消失</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，这集我看过，三上老师演的</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;能不好吗，前天武汉就是这样子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段的描写很不错啊</p>
`;
        case 182:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦嘴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然感觉这些不会是边看窗外边写的吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要啊ヽ(≧Д≦)ノ，指停更</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;停电了就要停更了[fn=4]</p>
`;
        case 183:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;系统：我让你隐瞒系统的存在，不是只隐瞒“系统”这两个字啊！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪一章来着，有提到渡边给美姬坦白了很多事情，转生有没有说不清楚，但是系统方面美姬至少很清楚可以获得一些特殊能力、有系统商店兑换东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这……看来美姬对渡边灵魂（系统）的了解比清野更深啊……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啥时知道的</p>
`;
        case 184:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;后面也许有理由这么做</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;目前为止，超多的台风都是吹过来，马上要到岸边了，一个大拐弯都跑去了霓虹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;观察近来台风走向，有的就是眼看到大陆了，一个大拐弯去了脚盆[fn=31]我怀疑我国掌握了意想不到的天气武器！比如晴天娃娃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就真是神的力量了，甚至有些神话里的风神海神都还做不到[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实有的。之前某一个台风，快吹到普陀山的南海观音像的时候，一个转弯就跑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边与风之使者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界未解之谜系列</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就是世界未解之谜与奇迹了</p>
`;
        case 189:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;周同学：为什么没有三年二班</p>
`;
        case 198:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;中央线停了，清野线起飞了</p>
`;
        case 201:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;比如小地震，一堆人跑马路上还挺兴奋。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是好台风[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也兴奋了我也兴奋了[fn=61]</p>
`;
        case 202:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这种等级的高校，物资起码能维持一周</p>
`;
        case 205:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条、清野、老师、学姐：那今晚和渡边睡的人是。。。
国井：没错，就是在下！[fn=4]</p>
`;
        case 207:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美雪：那我走？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的美雪呢[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛居然能麻衣接触吗？
还以为会和美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐，把R桑按住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛和麻衣[fn=7][fn=24]我预测过的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小渡，整点刺激的！</p>
`;
        case 208:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学生会长  宫下奈奈</p>
`;
        case 210:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有归宅部我不是很认可</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 人类观察部上去表演段三口相声比啥都强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊這，看成狡辯部了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到神之一手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;将棋部能表演什么...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;落语部是干嘛的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在？看不起我是侍奉部？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在？看不起我人类观察部？</p>
`;
        case 213:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，放个电影整个晚会结束了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这电影他正经吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学校没停电吗？</p>
`;
        case 216:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为什么我想到的是恶魔高校[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;山田君与七人魔女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白老师？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天降之物</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;援桌骑士赛高！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;援桌骑士？[fn=31]</p>
`;
        case 221:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;成功升入上级部门的一木课长[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别搞错自己的部门啦！你不是人类观察部的</p>
`;
        case 225:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;继不继续不是大小姐一句话的事？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马上结局了哎</p>
`;
        case 226:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吃了好多天的柠檬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我想到了五月</p>
`;
        case 227:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谁啊[fn=31]</p>
`;
        case 228:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个“您”用到点子上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时刻准备着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，这本能的求生欲，学不来学不来[fn=11]</p>
`;
        case 230:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;经典高考语文，到底赶上了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典压轴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么刚好排了个大轴</p>
`;
        case 232:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;很喜欢这首歌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;琉球，我们的琉球</p>
`;
        case 239:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好气呀.jpg</p>
`;
        case 243:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;沙发</p>
`;
        case 244:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;强劲，无敌，最强！
粉碎，玉碎，大喝彩！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;粉碎，玉碎，大喝采！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超绝 豪快 闷绝
优雅 超级 究极超级！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上啊，渡边！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传统中二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;粉碎，玉碎，大喝彩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蜘蛛子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强劲，无敌，最强！
粉碎，玉碎，大喝彩！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以这很龙王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;粉碎，玉碎，大喝采！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老海马了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至仁 至善 至高 至强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉碎！粉碎！大喝彩！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;強靭！無敵！最強！</p>
`;
        case 249:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;浪速白雪姬！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我想起了抗战烈士在日本的翻译是华夏无畏战神，非常贴切</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本人真的很喜欢起各种外号</p>
`;
        case 251:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;浪速白雪姬！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龙王的牢饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么梗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小学生真是太棒了？</p>
`;
default:
			return '';
	}
}
        