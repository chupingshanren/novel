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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来迟了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两天没看，过来一看哇三章未读，老激动了，结果是我天真了[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远相信自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以为又鸽了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天少了一个起点币的内容</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;热乎。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明天会更好。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;签到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;期待明天的更新</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看一章少一章了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们真快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(；′⌒')</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;住起点系列</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;111</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这标题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙真快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;又回到最初的起点～[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;故事开始是开学一个月，也就是4月初，一年半了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时间过得好快。。。有一年了么</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大吉猫咪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神林巫女说那是招福猫[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;临结尾开始臭了起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压力马斯内</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圣 地 巡 礼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦老车万人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？！要 素 察 觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草好臭啊</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有点怀念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;np</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么盖茨比，你果然了不起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在桥上看风景，看风景的人在楼上看你；明月装饰了你的窗子，你装饰了别人的梦。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今夜我又来到你的窗外
窗帘上你的影子多么可爱~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呆呆地站在窗子前～[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也不知道凛洗澡会不会拉窗帘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这视力，没谁了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你啊，渡边桑</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在回忆中</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神 之 一 手[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;送命题来了</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;孤  男  寡  女
共  处  一  室</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33]</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那可不，给我个加点，我能把世界笑得掉san</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以，自己笑的最好看</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没牛仔裤了，凑合看吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们来图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛，yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;whl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛穿v领感觉不起作用啊[fn=58]</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽 lsp诱捕器
不愧是清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边你就是好色，别狡辩了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心形pp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;入股？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上厕所吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刻晴和莫娜，选一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;极好的臀部</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蜜桃臀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好想看清野九条渡边三人的番外啊，真人快打那种</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽 lsp诱捕器
不愧是清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边你就是好色，别狡辩了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好  生  养</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁来说去不还是三个字 老色批</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶啊，我也想看！（震声）——来自腿控的倾诉</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;又拱火？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野•凛，唯一神  唯一“火”神。据说真的有神，是一个孤家寡人。可从未见过那扇门，是我太孤陋寡闻。[fn=41]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拱火之神-清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野，拱火的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神之拱火</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我滴神</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;裆下比较流行[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《清野同学偶尔想被束缚？这个爱好有点下流～》[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在是你比较下流[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈紧身牛仔裤，被渡边认为是捆绑，太变态了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《如果加书名号内味更浓》</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不能说谎，没有否认就是承认了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有反驳喜欢束缚[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超  神  水</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一十七岁，是学生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有红茶可以吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有红茶可以吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们玩的什么梗啊😃有了解的可以雷……科普一下吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沼气池炸了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼！哼！啊啊啊啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;114，514</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压力吗斯内</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;臭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昏睡红茶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一十七岁，是学生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有红茶可以吗？</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边有考虑过办个补习班吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三秒后……
渡边：完事了，可以原谅我了吧！
美姬：就这?
清野神表情阴郁，爱考虑跟这个闪电侠绝交。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三秒就能过送命题，渡边，你好强大！</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有些主角适合代入，因为他跟我就差个系统。有些主角不适合代入，因为他跟我差距最小的地方就是他有个系统。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;教练，我也要学这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;教练，我要学这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有种七步成诗的感觉</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么想到邪恶的地方去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一致对外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;覆盖可真牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;覆盖存档[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三  人  行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“三个人的约会？究竟是什么样的人有这种经历？真想见识一下。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;统 一 战 线</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看人先看腿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“你可以光明正大地看”</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;皮燕子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好，不愧是你</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;坏了，以后怕是得经常去麻衣和小泉老师那了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了 买衣服的反击吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野，拱火滴神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;战争早就开始了啊！诸君！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人撕逼真好看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生存空间大大缩减，以前还能撒谎，以后，呵呵，无法想象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;社死现场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刀刀致命</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好了，以后都不是 笑吟吟 了，变成 装模作样 了[fn=58]</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有个担忧，中</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只是想在靠近一点卡密萨马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把🐻放在了最后[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿 臀部 胸部，顺序不能乱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没办法，都是为了人族的繁衍大计[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刻在dna，没办法，小渡边又有什么坏心思呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国井狂喜[fn=4]</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;因为在意你，所以担忧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿出一个大宝贝</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;突然就这么有侵略感了嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜看不到胸口[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Rinの千层套路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不应该是肚脐吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;深v只能看到肩[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？戳完渡边的xp之后开始戳我的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天凛神攻势如火啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，撑不起来，V领弯腰都只能看到肩，心疼我凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老肩巨滑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我真的怀疑是神的色诱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜看不到胸口[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老肩巨滑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然就这么有侵略感了嘛</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵，我承认说出这句话的你很厉害，但很可惜，现在，我也和你一样厉害了</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凌酱的肩也很甜</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明年今日，是你周年！(不是)</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别的是她
在所有一切之上是她
我的神
清野凛</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是假话[fn=4]</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渣彻信某教吧。。正好四个老婆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有人还记得他们高几吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，这是要确定正宫位啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：发动直球技能</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;读了这么多年小说，第一次感觉到没法代入男主了。但凡想要代入进去，都会感觉被美姬她们的爱以及渡边的处境给施加无边的压力。只能被迫站在旁观者视角看这个故事，然后就会淡淡的欣慰一类的感觉。

啥也不说了，乌鸦牛逼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没问题嘛鸦桑？我们能看到明年吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没时间(ಡωಡ) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没问题！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建议带入九条，把渡边当一只有系统的🐶，你就能接受一切</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也挺好奇你们所谓的代入感究竟是啥东西，我一直以来都是看故事的心态，上帝视角的旁观者。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在这推荐网络爽文--人生长恨水长东</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没时间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点尴尬，我是看了好几年小说以后才知道带入感指的是什么……不过现在，我为此感到欣慰，因为我就是一直在听他们的故事，一个名为作者的人，说与我听。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日语这应该是問題いない……所以被赶紧打断了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没空</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看小说不就是看别人的人生嘛，为啥要代入啊[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没时间🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没问题（我来补充，然后美姬同意，原地结婚，完本）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没问题！我的美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边（疑惑脸）：没事吧？（以手抚九条额）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六个1楼了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奇怪的人，爱上一群奇怪的女孩，或许这就是同病相怜吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没门！明年？今年！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;读了这么多年小说，第一次感觉到没法代入男主了。但凡想要代入进去，都会感觉被美姬她们的爱以及渡边的处境给施加无边的压力。只能被迫站在旁观者视角看这个故事，然后就会淡淡的欣慰一类的感觉。

啥也不说了，乌鸦牛逼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五个一楼两个二楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没问题！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻:没可能的～


渡边彻，猝！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，四个一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没门，我要你们四个一起对我求婚才行(嚣张)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没问题[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻:没问题，等等，！不对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没问题嘛鸦桑？我们能看到明年吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大丈夫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没问题！</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;人们会因为这个笑容……</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;打断施法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉凛躲在卧室偷听，关键时刻出声打断！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神：没机会![fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;施法打断，党争还没结束，正宫之争还有几个来回</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野不能说绿茶，那就茉莉花茶吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有之前要回答清野凛的铃声，乌鸦恶意控股</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;断步走A，细节封走位，美姬入套了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉凛躲在卧室偷听，关键时刻出声打断！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是沉默啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示渡边可以偷听了哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打断施法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你很懂嘛</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她母上的茶被说难喝。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第六十四章，真姬家里举办茶会，清野渡边美姬与会。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;初夏的味道 难喝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;茶会一半跑出去，后来没衣服了，又回来，幽子泡的茶，被他说难喝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表了</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我永远喜欢清野凛！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在一切之上是她
我的神
九条 真姬[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在一切之上是她
我的神
九条 美姬[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远喜欢清野神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章看完了，我开始期待明天了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她绝无仅有
站在自己坚守的世界里，闪闪发亮
它是特殊的，就像《旧约》里说的，才德的女子很多，唯独你超过一切</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好多评论都漂移了[fn=31]所以才有那么多一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她
在一切之上是她
我的神
渡边母亲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我永远喜欢九条美姬！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这张看着有点不对劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我永远喜欢清野凛！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已阅，走人～</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;第一次是美姬引导渡边说茶难喝，第二次是渡边引导凛说茶难喝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表上场啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉我好像也跟着过了一年，什么也记不清了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子泡茶，然后被说难喝那次？</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好问题！你说这个我可就来劲儿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿！（震声）我xp！我骄傲！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的话第一就是腿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了一眼评论区，大部分是腿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小孩子才做选择，大人全要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿，熊对我来说大小都OK，不奇怪就行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿和屁股很重要，胸部是加分点！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胸部</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前我认为我是腿控，后来我发现我更喜欢胸部，现在我发现我只是单纯的好色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大腿肉好吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我想到了恋活的选项  大中小</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵，真是肤浅的女人，难道我们男人乃子里除了胸部、臀部、腿就没有其他东西了吗…………还有把手、脚、腰、脖子、耳朵、锁骨、眼睛、鼻子、嘴巴、舌头…………可恶，不要把我们看扁了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乳龙帝，臀龙皇，三者合一渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少喜欢一点，我就不是lsp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全喜欢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要是你的，我都喜欢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人最喜欢自己得不到的东西，凛神没有的我最喜欢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记住了，这时候应该回答，我喜欢你。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要是聊这个我可就不困了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一看到说这个，立马就不困了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿！（震声）我xp！我骄傲！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好问题！你说这个我可就来劲儿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心形屁股</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛的腿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;上移视线
不愧是你啊，吃东西也盯着看，毫不掩饰</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我是lsp我承认，但是得我自己申明</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吉良吉影表示很淦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不是腿控 只是喜欢的人刚刚好腿很美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不是喜欢腿，只是我喜欢的人的腿很好看罢了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为我我有一种 我不是老色批，只是好色罢了的感觉</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我这一生都是坚定不移的唯物主义者，唯有你，我希望有来生。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;许多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在与马克思讨论你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就是我的导师？[fn=58]</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;伟大的无产阶级革命导师！</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好书，推荐看看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那《霍乱时期的爱情》呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书虽然神，但也有精神污染，看看我国50-70的作家就明白勒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，巨多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;资本家为了防止自己被吊死，自然也会研究资本论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竟然还有我清野神没读过的书</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明明色批才是进步的动力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜，复仇者的意志还是敌不过老色批的色心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然，复仇是进步的动力，老色批也是。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;复仇少年的奋斗</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;改过的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一大段乌鸦改过，原本是马克思，《资本论》和《致燕妮》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪里有恐惧，哪里就有爱。</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以平胸的女人不配拥有爱情？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我必然是心灵的爱情了，诸君，我喜欢欧派！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个就让我想起了人鱼选择，流落荒芜海岛上的你，会选择哪一只人鱼共度余生：
A:上半身鱼下半身人
B:上半身人下半身鱼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，一二三四楼离奇失踪了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，道出了人间真实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我懂了，心灵看奈子</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我爱的是清野凛(的腿)[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我对你的爱始于腿，忠于心</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;从喜欢研究腿，变成了喜欢研究清野凛</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哦~</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我，无所不知</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，不愧是你！</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Young and Beautiful</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是伏笔吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没说胸部[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有系统哒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然不会发生，但即使如此，你也我的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正确回复应该是“别开玩笑了，那时候你照样可以把我迷的神魂颠倒”[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事，渡边有药</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，猿形毕露</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话相当精妙啊！</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;避开了正面回答</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恋爱中的女人</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊，真理。</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美貌是清野凛的一部分。改变之后的清野凛，不是现在的清野凛。下一瞬的渡边彻对下一瞬的清野凛的爱，是从上一瞬继承而来，是否继续生效，必须重新做一次忒休斯式的判定。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丑的一般没人会有兴趣去研究你的内心，人类是视觉生物，80%外界信息接收来自眼睛，所以颜控是本质</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我依旧爱你神[fn=64][fn=64]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果是你丑之前见到你，那自然会爱上。
但是丑之后初次见面，不一定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错[fn=31]长得难看，别说渡边，读者姥爷都不同意</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;迫  真  颜  狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;斩钉截铁！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他好像还有个系统？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲真的，如果是变的更美可能不行，但只是不变丑（黄脸婆），其实是可以通过堆钱来达到一定程度实现的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又学到一招</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我闭着眼睛都知道你们这些人现在是个什么表情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的太会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记笔记记笔记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学废了，快记笔记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学费了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拐弯抹角就是不回答哎嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫  真  颜  狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;斩钉截铁！</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;读了马克思都这样[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就先从吊死资本家开始……</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呔！女妖精！吃俺渡边一棒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到渡边彻棒打清野凛~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以老爸不配？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;敢 ps：床上的打不算打</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;敢</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想半天原来是保镖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;机器人静流已经退环境了，时泪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是你打的吗？是小小泉老师打的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个人物我一直代入的形象是《黑之契约者》里，能力代价是接吻的那个西装女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;静流受伤严重退休了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;机器人静流已退市</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;机器人静流已经退环境了，时泪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扁下去吧。或者是再起不能。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都快完结了，还没出现</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小小泉老师干的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想半天原来是保镖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不提，我都忘了有这个角色了[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;机器人已下线</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;用什么教育</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神授君权</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天 赋 神 权 [fn=31]</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;逼 名词作动词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦！我的上帝，这改死的翻译腔。我发誓我会用我的屁股狠狠的踢你的鞋子！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朕的皇家翻译官呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦，上帝啊！我向你祈祷！请您公证！让清野凛拥有用她的靴子狠狠提我儿子屁股的权利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦！我的上帝,老伙计,我发誓,我现在就想踢你的屁股!</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你一边儿玩去，这是我的事～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这母亲的意思，让清野神好好骑骑渡边！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好美姬并不怎么在意他父母</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段话不像是渡边母亲能说出来的，太文艺了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起一个本子《绿人者人恒绿之》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑!都可以骑!
多加几个骑手也是可以的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑人者人恒骑之[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;御夫还是育儿啊哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边妈懂什么渡边彻？
一个中穿日的系统男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻的父亲，是不是也是一匹马？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这母亲的意思，让清野神好好骑骑渡边！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我十分好奇渡边妈妈和九条的聊天记录</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲到驯马骑马什么的，就很色了[fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女骑士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是催凛骑马呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你一边儿玩去，这是我的事～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面的人呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊——阿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;野马分鬃！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给儿媳传授经验[fn=32]</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在授予清野凛渡边彻的宣称</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛：所有人都喜欢我，这是当然的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多了 不</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多算了一个字，举报[fn=22]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有“不”吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多了不字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看起来有些怪。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多了个“不”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总之很奇怪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是哪里不太对</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;hi 罗恩</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有趣的男人</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛是不可替代的，九条随时都可以替换的😗</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;现在的进度应该是两个人互相最喜欢，且美姬允许并且已经与凛神和好的条件下，两人在以朋友之上的身份交往，渡边在追求神，但凛神无法接受不唯一的爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果你不放弃她们，那你母亲的心愿就等几天达成</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让人无可奈何，又无法自拔的凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野也没错，只是想一生一世一双人，但是……这本书不允许啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还搁着傲娇呢，后宫群都进了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要独占</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;半熟鸡蛋</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我不会给你开门的是真话，但是你可以在下面等我，我在找你[fn=4][fn=4][fn=4]</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;开门啊开门啊，你有本事抢男人没本事开门啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：家被偷了？</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说实话，最不在乎别人想法的是她吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五十步笑百步</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是“通过”吧？</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那pg画上两点红点会不会弥补清野的缺点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就逛到这里吧
打开…
该网页疑似携带病毒
坚持访问</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腰细腿长屁股大，除了胸部基本没有，清野神这身材极品啊，不过更多的时候给人贫乳清瘦的文艺少女的形象，对于身材这块反而没啥实感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是圆圆的心形屁股吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羞于你们为伍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就逛到这里吧
打开…
该网页疑似携带病毒
坚持访问</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有个朋友和我说，双腿合得拢是因为还没被开发过，不知道是不是真的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，渡边少年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那pg画上两点红点会不会弥补清野的缺点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人呢？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，lsp，绝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;屁股大，好生养</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=29]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完本之前能做到吗？感觉好难</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;装都不装了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一定要把清野凛搞到手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是乌鸦说的渡边的改变吧，正式的面对自己的欲望了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发情的渡边，阉了吧，阉了后好养一些。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=29]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得想办法把这女人搞到手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日日夜夜抵足而眠促膝长谈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;追到了做什么(ﾟoﾟ;</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以先接吻在恋爱⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄羞羞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完本之前能做到吗？感觉好难</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么狗屁一见钟情，不过是见色起意罢了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扎心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要五官长得好，三观跟着五官跑，不是没有道理的，说到底，人们对美的追求从未停止</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我撇不开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;资深外貌协会会员向你问好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;讲真的，还是喜欢小脸的女孩，脸小党在此</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有图吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重点是胸部饱满[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的美姬还是熟悉的天下第一</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边失宠了</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;两个绝对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“冷却”吧？</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;都是爱美人不爱江山的，英雄难过美人关，古人诚不欺我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;承欢侍宴无闲暇，春从春游夜专夜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是愿得美人心，不做天下主的人[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剑来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反了反了，位置反了🐶</p>
`;
default:
			return '';
	}
}
        