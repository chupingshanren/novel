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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;叫你欺负青奈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章没了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让你开车。哎。∠( ᐛ 」∠)_看戏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章不会被404了吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一张呢，我怎么看不到上一章啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个人的夜，我的心，应该放在哪里？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘶溜～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本章糖分过高！建议小心食用！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;报道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然来晚了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为啥我想到了远坂凛[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要全部，及其自信的清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬清野</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;玻璃拌肉沫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可乐饼吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成了肉袜</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;和后面渡边的表白呼应了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊，心疼r桑</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;开始白给
当年铃音也是这样[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为只有渡边彻是真的从内心赞同,并实际上也支持她的坚持</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那来哇，口袋挖一多自</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毁灭吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就毁灭吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯一的共鸣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是我先来的。狗头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果没有你，这个世界没有任何意义</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这黄瓜是谁的？</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛束手无策，渡边彻辗转难眠。
是不是得让系统出马哦
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;磨刀吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回到过去吧，彻底抹杀御茶之水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日久生情</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;爱的卑微</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不就是已经妥协了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？破防了</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;多女主的书那么多 还写的没意思，不明白为什么要追着这书锤。不喜欢找无，单女主文去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在三个人里，渡边情商明显和两位母亲同一档次甚至略高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实只写凛和美姬的对手戏就很好很好了。可惜渡边莫名的又飘又好色，系统也充满恶意，乌鸦也写了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三人小队（滑稽）</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，四五六全没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六楼也有嫌疑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五楼人有问题[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈，我的青奈~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贤妻良母</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我是课代表助手的助手的助手的助手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫我课代表助手！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以课代表呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是课代表助手的助手的助手的助手的助手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;淦 课代表没见到 见到了课代表助手助手助手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;禁止禁止套娃🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;禁止套娃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们在这套娃呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是课代表助手的助手的助手的助手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是课代表助手的助手的助手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是课代表助手的助手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表在哪里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫我课代表助手！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表！快点粗来，帮我们回忆一下[fn=31][fn=31]</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我就想问问 ，另外半截去哪了呢？[fn=16]</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哆啦A凛让你快想想办法[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿女巫服去观察教室呀，我记得以前渡边这样说过，只要清野愿意穿上女巫服在人类观察室等他，他就愿意为清野解决任何事。不知道这个小伏笔能不能用上</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;强烈番外来个美雪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有，只是作为“保健老师”而言，在各个作品里面都很懂这些，比如《圣经》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说起来，美雪是过来人吗</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;flag回收</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一直未完成的系统任务“成功欺骗清野凛”[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的神！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果那个任务不是如果那个任务不是限时一周，可能已经完成了吧。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心疼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实已经绝望了，毫无办法了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;内容如图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔回收</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;flag回收</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一直未完成的系统任务“成功欺骗清野凛”[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你变了r桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到最开始不原谅谎言的凛，渡边罪大恶极，但我依然祝福你们</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;做，做，做，做咩啊做，饮茶先啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瑜伽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摩擦发热</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后知后觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做括约肌扩展运动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是做作业啊[fn=4]</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;头发会滑落说明低头了</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看到这句话已经头皮发麻啦，太甜啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孤独的灵魂等待被拥抱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛神啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我可以[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看你是想男人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天我只会点赞。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl，真的不会得糖尿病吗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;章说呢？？被清光了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmmm</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确定是不是隔着纱布的躲猫猫么 眼前人是心上人好吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抓到了就嘿嘿嘿！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是WA2麻理的台词？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说凛之前说的，你站在原地等我过去，就作废了吗，这怎么还是在等主角给她一个理由....</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孤独的灵魂等待被拥抱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦哦哦哦哦哦哦哦！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这句话已经头皮发麻啦，太甜啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇哦</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;会的！凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错就是我的凛，远坂凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;候人兮猗</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神已经接受了分享了，就等渡边主动了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，我的神，凛酱！</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;理科生的怨念:做饭时的佐料没有定量</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;R桑呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好甜啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好想看番外啊</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟快出来走个流程死一下！[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜呜呜呜呜呜呜，我的清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心疼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的凛她沦陷了[fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛[fn=12]我的凛[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟乱葬岗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别急，渡边马上就到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭了 凛凛凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜呜呜呜呜呜呜，我的清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟快出来走个流程死一下！[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这怎么也能开进去啊|･ω･｀)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求求你们在一起吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，太甜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，我要被甜死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得，日后清野一定会被美姬嘲笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么消失辣么多楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟？阿伟已经死了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;期待着大被同眠的一天。[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的自白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雾草！糖分超标</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhh！！ 太有感觉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好甜啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;水到渠成似的爱恋～
甜的人发慌～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦这么个糙汉子写的好细腻啊 记得是新海诚还是哪个说的 没谈过恋爱才会写出梦幻般爱情[fn=50]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也在想你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完 杀(指杀我)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我靠好甜啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不属于这个世界的神
  系统之上的命运主宰
  掌控恋爱的剧情之王
赞美乌鸦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜得我又去刷了个🦷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟没连续看 感觉好像过了很久</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太细腻了 太美好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这下变成小糖人了，胰岛素呢救一下啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;wc</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不让你们存别不听，你看下一章就没了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已投。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下一章删了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少一章?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说不定最后凛失去能力，然后大家在一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，太甜啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在想你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边有系统，所以下一章聆听你的召唤，你的骑士渡边彻参见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到九条主动绑了清野凛，火速三p破局</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;半夜，睡不着的渡边彻同学起身走到窗边，看着外面漆黑的夜，打开手机，手指按到了拨号键上，摩挲着，手机屏微弱的灯光下是清野凛的名字。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我心如松柏，君情复何似？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦这么个糙汉子写的好细腻啊 记得是新海诚还是哪个说的 没谈过恋爱才会写出梦幻般爱情[fn=50]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想吃屁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在想 凜酱在想什么呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有你的！乌鸦，真有你的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;珍惜现在的单身时光，还有三章想单身都没法了！
哎，这么快就要完结了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无眠的夜里怀着日渐坚定的心相互私念，还有比这更能勾起对年少时光回忆的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在想‘凛，你现在在做什么？’</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安，r桑，希望你能在梦中感受到我对你如同贝加尔湖一样深的爱意~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在想你啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前天美姬，昨天神，今天老师，那明天是不是应该有学姐？感觉学姐已经变成小透明了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下一章会不会是半夜渡边来找凛[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水到渠成似的爱恋～
甜的人发慌～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就不得不提那句经典的问题歌词：你是否也像我一样在想你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在想你啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天已经5月29号了，好像乌鸦曾说6月初完结[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我总觉得乌鸦像是在暗示什么，六月完结不会还要出什么超展开吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊 我太喜欢她了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在想你啊~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神，完全堕入爱河了啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿，嘿嘿嘿嘿，嘿嘿嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草太会了太会了！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜呜，好酸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和你一样呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请根据本段清野凛内心独白写一篇50字简要分析。（99分）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在看着同样的窗外，东京同样的夜空，脑袋同样的想你啊，凛酱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛同学已经残血了，渡边快套上致命碘盐，全世界最可爱的凛酱就是你的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想你[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在想你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;身无彩凤双飞翼，心有灵犀一点通。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊我死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她
在一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在想你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚刚看完电光机王的我 有了这里吃糖  今晚应该能尿糖了</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;家庭教师的专属英语指导</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学外语嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后不能直视英语试卷了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皮筋弹弓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下象棋，我俩下象棋去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边就算有孩子也是处[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也不是不可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那万一呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下飞行棋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下象棋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学外语嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家庭教师的专属英语指导</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好想法</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;手里的黄瓜瞬间就不香了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈水晶被偷啦</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晃子有问题，她到底是单纯还是不单纯啊</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一生之敌</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我先来，渡边还是处！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么做了？</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;至少这次只和我</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;单身狗的哀嚎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子老师，我的肩膀宽，可以借给你[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子：呜呜，汪汪汪，汪汪汪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子：老娘养了这么多年的小白菜啊。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;库鲁西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;单身狗的悲伤[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子发出了单身🐶的声音: 呜呜，哭路西～卡纳西～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鼻子好酸，好痛苦</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那你还吃你男朋友[fn=31]快停下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐贴贴！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宫崎老师就交给我吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然好想笑是怎么回事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🥒🥒🥒🥒🥒🥒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宫崎就交给我吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也太真实了[fn=62]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐贴贴！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子老师，看看我看看我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Wuwuwu……他们说什么我也不会去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你还吃你男朋友[fn=31]快停下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边啊，赶紧把晃子安排一下吧[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，小泉老师已经是女人了</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;厨房更刺激吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙123全没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为有材料，可以直接做吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多说点，我喜欢听</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;借渡边[fn=58]</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我去买个橘子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好姐妹，借渡边用一晚</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;劲儿大不</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得劲不</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子：得劲不</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;👌👈👉👌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和谐了两句</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呼呼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了一句？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶，总感觉没看懂这俩句对话</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑得      都不稳了</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你知道了又怎样？还不是单身狗🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;注定白给</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舒服得很，建议以后试试</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羞与你们为伍，后面的老色批们</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;铁锅炖自己(ಡωಡ) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说明前面太重了</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是不是少了点什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;警觉.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀气</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咦什么时候改的名字 不是九条美姬嘛？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时间长，份量大，清理起来很麻烦（严肃脸）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时间长，量大管饱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31][fn=31]</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我的闺蜜背着我和另一个闺蜜以及她的学生讨论另一个闺蜜和学生共同的老公的功能这件事</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;温一碗酒，来一碟茴香豆</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦改回来了，好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感谢(❁´ω'❁)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说完了？b</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;坐</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里应该是池袋站？去那里做什么吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荻窪，不是荻洼</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;下次要和凛一起</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一人只要一块</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？？？改了还是出bug了？为啥我这显示这是两人合吃两个汉堡肉的老师这里的段评？</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多看空我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看炸弹离我还多远</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多看空我[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我科普一下，晃子这是在用大拇指估算与渡边的距离，然后发射意大利炮[fn=4]</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;反弹是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多看空我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发  现  异  常</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多看空我</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;用渡边的身体痛殴九条家保镖团的是谁啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;保镖团灭了的是谁啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次变成大人[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，打人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，打人</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿(º﹃º )</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小渡边终于休息了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，比996还忙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你以为一个人睡是好不容易能休息一天，其实是给机会让渡边半夜能去找清野同学，一个人睡晚上想去哪里去哪里，反而是最自由的……渡边不会又要半夜去找清野了吧……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好不容易休息一天</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实吧，我jio得，第七个人可以不用直接躺在床上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六个人？你在想🍑！！！[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我一算1美姬2神3学姐4老师5渡边6不会是辣个第一任女友吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六个人就离谱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六个人！？？？</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;熬不过啊，这都是什么肾仙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大量的篇幅写了两人的感情，如果在一起了这叫水到渠成而不是什么高开低走。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有人能解一下嘛？</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;以心传心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;どうすれば、この心、鏡に映るの？
到底该怎么样，我的真心才能映在镜中被你发觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;届不到的爱恋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到届到了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个时候需要来一首《传达不到的爱恋》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;届不到啊</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是起义了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;英特纳雄耐尔就一定要实现！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;英特纳雄耐尔 一定要实现（</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;课代表来了？！清野确实说过哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果我没记错是：世界不会向消极的人温柔～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只找到这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，向</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是呢，只有你，我会让世界对你温柔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是世界不对妥协的人温柔吧</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;爱她就去强…………[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻选择背负一切</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;铁打的恋人
打铁的白金[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不会阻止，我会献上真挚的祝福</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在想你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凜在想你哦 开心吧 你得到了卡密sama的想念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是恋爱啊....可惜要完结了才这么写</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凜</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嗯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个也不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小了点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;思念的少女凛，这画面一定很美</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;r桑:最近突然想观星</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在的男生，真的不太行，一到家就脱个精光学来学去的，要不是我有单反相机，我还不知道呢~[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;「无意中看到」</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷拍就偷拍，还无意中[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“无意中”</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《哆啦A梦:伴我同行2》上映了哦</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;您就是时时刻刻暗示呗</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;剪视频那天渣男这么叫过睡着的神。</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最后这几十章 真的有那种感觉了 无法形容 但是又让人觉得很美好 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有感觉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，您还没有真的抓住他的把柄。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛握住了未来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野抓住了把柄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就知道这里有不简单的评论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个把柄，它正经吗[fn=4]</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬：呵，女人。我说谎就绝交12年，渡边彻说谎就是喜欢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;長的帥還是有加分效果的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;suki~❤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;占卜的女巫挺准的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里忽然想起当初那个欺骗清野凛的任务，如果成功了是不是会走一个与所有女主无关的政客线be？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不说真话，并不是欺骗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不说真话未必是说谎话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;長的帥還是有加分效果的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬：呵，女人。我说谎就绝交12年，渡边彻说谎就是喜欢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我不喜欢清野凛
神：谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Wuwuwu.我的清野神大人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是最讨厌的东西，可一想到是你我却满心欢喜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;r桑啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜(┯_┯)感动到了</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这段描写前面用过类似的，再看还是觉得很不错</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;估计是这个时刻让清野有了安全感，有了可以依靠的人，哪怕她选择一种与世界割裂开来的方式去生活，仍然会有人去拥抱她</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;都快你的名字了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们之间的距离好像忽远又忽近</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇哦，太美了</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;黎明前的黑暗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句双关，我爱死了</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段描写太美了太美了太美了呜呜呜[fn=12][fn=12]</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊，凛酱要为渡边改变自己了吗</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;御茶之水，清野神的一生之敌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野同学永远难以释怀的御茶之水啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是重来的话清野神第一件事就是轰炸御茶之水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管别的 书中全都要 一定要大声喊出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书进入后期以来，清野的糖反而有时让我伤感。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;命运的岔口</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果能重来，清野神第一步就是把御茶之水封了，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《重生神大人》
第一章：炮轰御茶之水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野复盘自己失误的点。虽然一开始很多人说这个是败笔，但是现在看来其实也有它吸引人的地方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;御茶之水，清野神的一生之敌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野的思虑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野同学永远难以释怀的御茶之水啊</p>
`;
default:
			return '';
	}
}
        