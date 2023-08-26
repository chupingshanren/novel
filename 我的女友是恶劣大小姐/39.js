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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;出自著名翻译家朱生豪先生在给妻子情书中写过的句子：“接到你的信，真快活。风和日暖，令人愿意永远活下去。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来晚了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出自著名翻译家朱生豪先生在给妻子情书中写过的句子：“接到你的信，真快活。风和日暖，令人愿意永远活下去。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好早啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么早啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花好月圆，让人想永远读下去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么看着都想是要完结了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看一章少一章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话很有味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老爹：成龙，还有一件事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦你只管开车，办法由老爹来想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欸呀呀，还有一件事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老爹配音</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;虽然不在乎他人怎么看自己，但还敢正面冲锋的渡边彻，我由衷的佩服。tui！</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻：你们一起上吧，我赶时间[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？
怎么都是女性？太太你不对劲啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;里子早起登场过喔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我赶时间，你们一起来吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;解锁新人物</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;助攻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小姑姑是不是正在读大学？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然姑姑也姓清野，说明清野家并不是入赘的情况？是清野太太嫁入清野家的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是小姨吧，姑姑没理由跟她爸入赘改姓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有一个大胆的想法。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：你们一起上吧，我赶时间[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;买一送全家[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来有这么多清野的吗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？
怎么都是女性？太太你不对劲啊</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻，我的童养夫[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们无法一起学习[fn=11]</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;十四年后，31的渡边风华正茂，40的小泉可已经是中年女人的模样了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻的试探.JPG</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师应该是26吧，那就是31了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;熟透了更好吃[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三十而立</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;31、32应该</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三十几了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五年后某个下雪天，明明是我先的[fn=3]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师你都生了好几个了[fn=4]</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我有枭雄之资</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是渡边第一次叫清野名字？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小知识
当两个三声字连在一起，其中一个可以读二声
不然会很绕口
如：清野凛 qīng yě lín 
         我们 小学老师 武老师 wú láo shī
不信你可以用原本的声调连着念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;lǐn</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Rin</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我不管，这行字我就看一半[fn=24]</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好了，通向大家都幸福的道路已无阻碍</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师我不小了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《重活了》既视感[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小，那里小，我不对劲[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太小了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：小？夜里试试</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没感受过，怎么能言小呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我太小？！(脱裤子)</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太看的好现实，爱情的水太深，让太太们把握</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她俩都是老傲娇了，橘里橘气的jk贴贴</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，
在一切之上是她，
我的神
清野幽子
</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;本色出演</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在哪里演？</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我也不信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就和之前彻看的那个小说一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是反差，对比[fn=41]</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你們都是我的爸媽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子：还好我早走了，不然要再吃一顿</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;双女合璧，才能降伏渡边(互相)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还以为都在讨论剧情，结果是在教萌新玩方舟[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬更加感性化</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两面包夹芝士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬、我的美姬！
【ps：有哪位大佬知道这个怎么办，入坑十三天 三十六级，现在龙门币才一万多了（升了太多的干员了，关键就是都是不得不升的，十三个六星）】（补充：理智刷材料刷光掉了 只有一百多点）[fn=38][fn=38]</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;干脆由你接手得了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么可有可无，接手了不就联合统治了吗</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就是我梦想中的生活，溺死在这该死的幸福里☺️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今夜，又是对人生心满意足的一夜[fn=21]</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;依稀记得，村上好像也这么说过，在凹酱问他能不能救自己已逝的父母前面一些</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;eMMMM，生孩子呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：东京帅哥就是想做的话就能做的很好[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边: 不是我自夸 ，想做的话 ，我可以和她生一群来管理清野家 [fn=26]</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看完睡觉时渡边穿越回了系统刚激活的那天……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;星际穿越是真的好看啊，去年重映，朋友拉着我看，热泪盈眶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;科幻鼻祖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诺兰yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强尼银手武士x</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要温和走进那个良夜。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要温顺的走进那个良夜，激情不能被消沉的暮色淹没，

咆哮吧，咆哮，痛斥那光的退缩，

智者在临终的时候，对黑暗妥协，是因为它们的语言已黯然失色，它们不想被夜色迷惑，

咆哮吧，咆哮，痛斥那光的退缩。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完睡觉时渡边穿越回了系统刚激活的那天……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神作啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯心主义科幻大作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;星际穿越是真的好看啊，去年重映，朋友拉着我看，热泪盈眶</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;语文老师：细节呢
数学老师：过程呢
英语老师：发音呢
音乐老师：音调呢
地理老师：位置呢
美术老师：画面呢
物理老师：实践呢
化学老师：反应呢
政治老师：思想呢
历史老师：记录呢
实践老师：体会呢
体育老师：力度呢
舞蹈老师：动作呢
班主任老师：结果呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《关于完全听不懂老公说什么的事》？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会这么爽？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是该省字数的地方吗[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关公说事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了，已经开始不加掩饰，摊牌了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有多爽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎狼之词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;于是渡边干了个爽
话说渡边怎么还没有子嗣，是不是ed[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然自爆出处太过分了，我还寻思给大家爆一个料呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;干了个爽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关公说事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那部动漫最劲爆的有两句话，这句话太牛逼了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是存书的后果，细节全没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就想问下群里有细节吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，这么简便吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦至少偷偷扣下了五千字的内容，可恶的乌鸦，吃独食可不是什么好习惯啊，坏乌鸦！[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸦桑，你变了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里做=干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能不能写详细点然后再改 让我们之间有丶信任感好不好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关公</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大佬牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能看到这的几乎等同于全订了，也不差这万八千的了呀，写出来多好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有个朋友想知道有多爽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大佬牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在是都不愿意水了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛啊牛啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《关于完全听不懂老公说什么的事》？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;内容呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;简单粗暴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我差那百十个币吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹！这么书这么省字数的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关公说事……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车轮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;语文老师：细节呢
数学老师：过程呢
英语老师：发音呢
音乐老师：音调呢
地理老师：位置呢
美术老师：画面呢
物理老师：实践呢
化学老师：反应呢
政治老师：思想呢
历史老师：记录呢
实践老师：体会呢
体育老师：力度呢
舞蹈老师：动作呢
班主任老师：结果呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来100币的详情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦你...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做了个爽。。。[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《关公说事》点了个赞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;动词：做</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关于完全听不懂老公在说什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也能开！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我差你这点流量吗？详细写5块钱的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请详细说明</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？细节呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是我理解的那个做嘛[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《关公说事》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了一万字的说明</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喃喃呐呐[fn=1]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的吗？我不信 除非你详细说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;多努力努力，[fn=64][fn=64][fn=64]</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边首相</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是做太太们的老公</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;靠，是真的</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，我突然想，是不是他用了自己开发的系统，丢给了自己和三岁的凛？一个闭环？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两位岳母大人...这是渡边渣男第一次这么说吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边如果想打第二次甲午战争，🇨🇳奉陪到底，毕竟现在的🇨🇳也已经不是100年前的🇨🇳了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来系统是这么来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该不会，清野凛四岁和美姬决裂、十三年的孤独生活并不幸福，我不觉得渡边有选择的话会让凛再走一遍。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两位岳母大人，嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;愚蠢的人类，接受我渡边彻的统治吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次喊幽子岳母</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统姬准备出世</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，我突然想，是不是他用了自己开发的系统，丢给了自己和三岁的凛？一个闭环？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，我突然想，是不是他用了自己开发的系统，丢给了自己和三岁的凛？一个闭环？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到黎明小镇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到2077</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两位岳母大人...这是渡边渣男第一次这么说吧？</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是精神科，而不是神经科，这是两种病。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，
在一切之上是她，
我的神，
清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太，干的漂亮！</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;因为九条妈妈见识过治疗药和化妆品的神奇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条太太会信主要是大家都说真姬爸能编 ，你们以为她是相信女婿，实际上她是看到了父亲的影子[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岳母，我的岳母，还是你懂我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬，我的真姬，还是你懂我</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;系统怎么来的实锤了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实笑的是两位岳母大人啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仿佛开玩笑吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然细思极恐啊哈哈哈哈。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真搞人工智能？😨</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;永远的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师，渣男永远的港湾！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫什么阿姨，叫母亲大人![fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我能把你怎么样，你那么喜欢我，我那么喜欢你。[fn=18]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛默认了哦[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男的避风港</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我只是一个路过的卡面来打</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;互相和谐起来了呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的就是我的[fn=31]</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;抓虫，赶紧干净</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好有爱哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬和凛小时候的关系更像姐妹吧，凛是姐姐角色，爱哭鬼凛是妹妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬越来越诱人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;枕头，我的枕头😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的枕头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个枕头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统还有机会上线吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛和美姬贴贴！我和渡边贴贴！</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;逛街</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逛街呀逛街呀</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阿加莎最广为人知的作品应该就是东方快车谋杀案了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一般都叫阿加莎吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最近在玩besiege，满脑子都是克里斯蒂悬挂[fn=14][fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿婆，推理界开山怪，yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;印象深刻的无人生还</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿加莎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东方快车谋杀案的作者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿加莎最广为人知的作品应该就是东方快车谋杀案了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是哪个鸟人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一般都叫阿加莎吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女性，英国，推理；第一反应是角落里的老人……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿婆的小说</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你有本事偷男人，怎么没本事开门啊.GIF</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;克里斯关下门！</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧，这地位转变得真快，爱情真是奇妙啊[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;橘式大好[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大橘已定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;外人竟是我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，渡边惨遭出局</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你们俩在一起吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我现在比较好奇清野神会在什么地方报复回来，现在是体力方面被碾压，另一方面直到本垒前都是落后状态，然后最近一直有被美姬调戏的趋势，期待神大人翻身</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边只是一个意外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一乌鸦是真的懂，2个有感情基础的妹子同时喜欢渡边这种渣男，甜甜蜜蜜（现实当中不保证保质期永久）和一刀两断差不多就是37开左右（亲测有效，不怕闲言碎语，破坏朋友圈或者被人打的这个可以学）[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没想到九条是攻</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;支持美姬一夫一妻制不动摇[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高举美凛大旗[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是什么语气呢，我整个语境
小学男生被指认出了自己在意的女孩子
没办法只能逞强去欺负她
还装作对她毫不在意的样子
看着她赌气不理自己、眼泪盈眶的样子
突然不知所措 想想只好道歉
然后后面推波助澜的另一个男同学
发出来的声音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反差萌最致命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Jk贴贴的剧情比我想得要香多了。嘿嘿，少女贴贴🥰</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不仅要参加，甚至还想插一杠</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;柯南的差不多得了啊[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看一边看柯南，一边记笔记，已经记了1200多页</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：首先准备一个密室[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;追完柯南就差不多了吧</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;多种手法联合下，作为警察局的我们，没有找到一丝一毫的证据，这是我的警号10086[fn=64][fn=64][fn=64][fn=64][fn=64][fn=64][fn=64]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟要结合实际情况不是🐶</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，话剧演完真就放飞了？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的宠爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;装都不装了，直接摊牌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你舅宠他爸🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咕咕咕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偏爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的偏爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被删了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……一时无语，只是傻笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，话剧演完真就放飞了？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的宠爱</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;肘，跟我进屋！</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;主角的新属性</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个枕头排面真大，总是自带括号</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看成抱着懒羊羊的枕头。什么鬼</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最感动，相处最自然的小泉老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么时候才到小泉老师回，难道没有了吗？（小小泉老师不算）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师让我站讲桌前，老师跪坐在桌下，然后...</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在群里聊的那么开[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有观众姥爷给配上图嘛。</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟，看会儿书好不好？</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是盗图者不要让我看到你好看的图。[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又没油了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典手机没油</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 没油啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;油? 是电吧！</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她们
在一起之上是她们
我的神
真姬 幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女子会～</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;然后又做了个爽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;温馨又美好的日常 。
晚安书友，要保持充足睡眠啊。做个好梦～[fn=2]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就要完结了吗，好快啊，唉，好舍不得，刚发现这本书的时候就已经上瘾了，越看越入迷，美姬，清野，明日，小泉，每一个角色都让我如痴如醉，每一句对话都能拨动我的心弦，感谢陪伴。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结撒花?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;倒计时：66h</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真美好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大概十章完结的气息</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当我刚准备在床上像条蛆一样扭动时，鸦桑就结束了，鸦桑，能在来个百八万字吗？不得劲啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊.感觉到了快完结的气息</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;温馨又美好的日常 。
晚安书友，要保持充足睡眠啊。做个好梦～[fn=2]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后又做了个爽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦你完结后番外好好写，打赏大大滴有[fn=12][fn=36][fn=31][fn=28][fn=9]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是九条你怎么想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经不是随叫随到了，变了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们拿着手机，笑的一批。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关掉手机丢在一边。

就这点量乌鸦你就想完结了？我土下座求你你能再长一点吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天已经过去，想必，明天会更好吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越看越上瘾啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点甜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好屑啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以把渣男这个称呼换成屑男吗？</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看成了“把青奈老师放桌上”</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;多肉有花语吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;井井有条......自从看了打更人，已经不能直视这些成语了[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多肉可是从开篇活到现在的元老！这不给多肉一张角色卡吗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每天一只玫瑰花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多肉还在啊</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;也许某人要死在天台[fn=64][fn=64][fn=64]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笨蛋和丑女就去东大吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜没有大学篇了，高中就要结束了 。</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边你坐啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，烦死你们能不能让我安静的坐坐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边你坐呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，你坐啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子:渡边你坐啊</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;工贼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的笔记本上赫然写着“最严女教师一番赏”。</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没错，作业少了，居然还有心思说闲话！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心疼学生一......你们别笑啊，我快憋不住...哈哈哈哈[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子老师不要这样，啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小了，格局小了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了，作业少了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我用得着这玩意？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子的反差萌我也很难顶的
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们老师2个班  互换着改[fn=17][fn=17][fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有体温，
请分析作者此处描写的用意[fn=31]</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好贵的
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;VTB指定烤肉店</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然有目的</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;房东好像已经是渡边了，这么说三个教师在给渡边交房租</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晃子老师，房子美姬已经整栋买下来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子可以蹭青奈的，她不会介意的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你抓鲁迅和我周树人有什么关系？[fn=64][fn=64]</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是都走了么[fn=20]</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;良心，大大的坏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;量心？🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和隔壁许七安一样啊他是大粪良心</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日本也这样？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=41][fn=41][fn=41]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;相亲对象就是在下[fn=4]</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日本也这样吗？</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;91x先生的全部带走👮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;91彻先生（有端联想）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我tm真是服了，我原本以为可以看到大家夸奖好美的场面，谁知道一个车轮子从我脸上碾了过去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捏妈的，本来是想看看夸好美的，结果都在飙车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这数字 不对劲啊不对劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟考上的是学生要么努力、要么天资聪颖、要么既努力又天资聪颖的学校啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心心念念蹭烤肉[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻好美，是个人材[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;91[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？我怀疑91不对劲[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;F91</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿😊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;91x先生的全部带走👮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;91不见星空[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;91彻先生（有端联想）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美是努力的天才</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;91周先生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美越来越好了[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;91分可以啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美，你好用功。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻好美，努力型人才啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美成绩提升很快啊</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;蔬菜：气抖冷！我们蔬菜什么时候才能发出自己的声音？！</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;震撼爸妈一整年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;TM的，已经毫不掩饰了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点过分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把小泉老师拉进家庭群😂😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;父母：这是有多两个儿媳？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是你骚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，腿不是被打断也是骚断的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃惊！
儿子居然有.....</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震撼爸妈一整年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;TM的，已经毫不掩饰了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然又多了两个儿媳🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嫉妒使我面目全非</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;瞎说什么大实话[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子早一看穿一切就是玩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真相了</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;暗喻现在人太少，怎么也要凑个svip两千人群</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再把孩子拉进来对吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“渡边”种群</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多年后群就变成后宫群了[fn=43]</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师，我永远的港湾！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉青奈@亦嗔亦喜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面忘了，我的神，小泉清奈！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师——</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前略，我的神，小泉青奈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师作为唯一正常的后宫辛苦了</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊啦啊啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啦啊啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我觉得不用标记出来也知道是谁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的肯定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有姐姐的气质了</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;经典各论各的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你叫我妈，我叫你老师。
咱俩各论各的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她们都是我的翅膀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真，震惊我妈一整年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尴尬😳了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;究竟是我儿子在学校里犯事了，还是我儿子把老师搞了？！</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，一句话就解释清楚了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;承认自己是渣男了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵 东京帅哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🤣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;简洁明了，不愧是你[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=8][fn=8][fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你儿子是东京帅哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边本渣 渣男本彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，一句话就解释清楚了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;承认自己是渣男了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31][fn=31][fn=31][fn=31]</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;和？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道领两个人回家过年就不是渣男了吗😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然是亲母子[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，都二个了还谈什么对不起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脚踏两只船那叫渣男吗，那叫熟悉水性！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很宽容的妈妈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹？！只有两个不算渣男？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？小凛和美姬？不是...所以...嗯...</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《了 不 起 的 渡 边 澈》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本秀儿之渡边秀，如果日本动漫有渡边一半撩妹技能就好了 ，整天就一个设定亚萨西，看着就烦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=26][fn=26][fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震惊渡边妈妈一整年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是真的震惊我（渡边彻）妈一整年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边渣彻🐃🐃🐃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么秀的儿子，其他小说主角做得到吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀儿是你吗</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边妈：老师你也不放过？!
这简直，简直……
……
……
……
干得漂亮[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 为什么老师会在这里 指漫画</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;以后子承父业[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;气抖冷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《关于穿越成渡边彻儿子这件事！》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1235楼没了呀，兄弟好走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面的几楼呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欲言又止，艹！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：师生恋
高情商：孩子有人辅导</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是渡边澈！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;转移话题大法</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一如既往呢</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;接触多了以后渡边妈妈最喜欢的应该是小泉老师吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;...怎么讨自己（懂得都懂）喜欢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边妈妈：谁是中年妇女！？我只比你大十岁！(肯定语气)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;顺便找机会也混进去是吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;另类婆媳？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们怎么这么熟练啊[fn=39]</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;计划通！肉都是我的了！你们人还是我的，哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃着碗里的看着锅里的</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？
你不对劲[fn=31]</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不，我爸会把我腿打断</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关于父母其实也是后宫的一大阻碍，清野家和九条家的关系实在是得天独厚……麻衣学姐是断绝关系，渡边直接海王宣言，不知道小泉老师怎么处理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接受归接受，可是渡爸应该久久不能入眠。</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你女朋友不会生气吧~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条同学好可怕，只有我心疼gaigai</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;郎被围奸
啊啊啊啊啊！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狼狈为奸我只想到一张图

我常常因不够变态而与你们格格不入.jpg

去他的格格不入.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沆瀣一气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郎被围奸
啊啊啊啊啊！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奸夫淫妇啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;优秀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;同流合污</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狼狈为奸我只想到一张图

我常常因不够变态而与你们格格不入.jpg

去他的格格不入.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沆瀣一气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结婚后的美姬：“渡边的后宫就是我的后宫”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一丘之貉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成语意思不用解释了。但是狼狈为奸的这个动作却要好好斟酌一下。</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这本书里挪威的森林元素真多[fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都忘了还是初中看的村上春树，现在只记得黄色剧情了草</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我草</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊。。。我挪威的森林和1Q84剧情都整混了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恕我不能理解，我能看出父亲对母亲的深爱，以及之后带着丧偶的绝望感继续抚养孩子的麻木，但我实在没法体会到有啥可心动的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜高三看的挪威的森林[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;父母是真爱，孩子是意外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有些扭曲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶毒的比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至今还记得「直子死后....」那一段给我的当头一棒...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死非生的对立面，而是作为生的一部分永存。                    </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绿子她父亲……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这比喻真好呀，让人心酸，希望我和我未来的妻子也能这么好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都忘了还是初中看的村上春树，现在只记得黄色剧情了草</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挪威的森林</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绿子的家庭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绿子的父亲啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;个人感觉这比喻不是很恰当</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好危险的比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书里挪威的森林元素真多[fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，很微妙啊这个比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟孩子只是意外，老婆才是真爱啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这感觉就像是JOJO的奇妙比喻</p>
`;
default:
			return '';
	}
}
        