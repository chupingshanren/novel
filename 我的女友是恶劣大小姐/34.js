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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;关于这章，初看觉得有些问题，再看可能是我人生阅历太低。明日麻衣大一的时候，她妹妹高一，年龄相差三岁或者四岁，按照最大年龄算，相差四岁。四岁的孩子一般都是粘人的，而四岁的麻衣情感就有些麻木和超脱，写到这里我不经笑了，我也不过是用过往的人生来判断这件事，对于父母离异对孩子所造成的伤害，我，我真的懂吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人活着就是为了**麻衣[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐视角</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么进全订群</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关于这章，初看觉得有些问题，再看可能是我人生阅历太低。明日麻衣大一的时候，她妹妹高一，年龄相差三岁或者四岁，按照最大年龄算，相差四岁。四岁的孩子一般都是粘人的，而四岁的麻衣情感就有些麻木和超脱，写到这里我不经笑了，我也不过是用过往的人生来判断这件事，对于父母离异对孩子所造成的伤害，我，我真的懂吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊不！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣万岁！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好心疼，但好甜好甜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多少男生的梦中情人，明日麻衣。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前排</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐的个人回？好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日是麻衣桑的个人回？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们是住这了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前排</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;q</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣！好耶</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这一刻，多么希望这个人不是渡边彻啊，麻衣不应该只有这分割了四份的爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想你的双脚搭在我的肩膀上。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主角就是除以n也大于1的人，而现实很多人连1都不到，就不要酸主角了。他值全天下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正因为是渣男才能有机会给麻衣学姐幸福啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也太让人心疼了吧。。 何德何能啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抱歉，九条主上，我现在是麻衣大人的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，渡边真是渣男吗。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好心疼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只想到我们班同学一句话，放假时，睡觉就是浪费</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想你的双脚搭在我的肩膀上。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一刻，多么希望这个人不是渡边彻啊，麻衣不应该只有这分割了四份的爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是沙发上吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种睡觉浪费
另一种睡觉不浪费[fn=4]</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我在等 全力无双大蓝狗[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这怎么又断了 根本接不上啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦次尬累~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一直等更新在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不辛苦</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;仿写：
三年的高中生活就此落下帷幕，渡边彻带着两人离开了这曾经热闹繁华、纷纷扰扰的校园。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是不是少看了一章，剧情衔接不上啊😂</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神如果能体会到这种失去的痛苦，应该能接受大家一起吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梓川咲太对牧之原翔子（另一时间线的梓川翔子）说：如果你回到自己的时间线，请对未来的我说一句，一定要让翔子小姐成为幸福的新娘子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能幸福当渣男也无所谓了</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;仿写后续：小泉青奈站在教学楼门口，目光注视着前方慢慢远去的背影。</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明天烟花登陆，十分应景</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仿若梦中相逢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仿写后续：或许是春天刚刚开始的原因，微风拥抱着她娇柔的身躯，让她感觉有些刺冷，课堂上渡边彻认真专注的日子，只能装进名为记忆的盒子里。然后想到刚刚那个少年对她说的话，身体开始燥热了起来，明明刚才还觉得很冷，现在春风让她感觉很暖和，大概是属于她的春天开始了。</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;坚定情敌彻底被口腹之欲所击倒[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仿写后续：“青奈，青奈，你怎么了？站在这里冷死了，快点叫上美雪回家吃饭。
咦！青奈你怎么脸红了？是不是渡边那家伙……”门口突然蹦出的晃子看着小泉青奈的侧脸到。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;糟了，一木同学正朝着肥宅进化 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然我很想抗议，但他给我吃的实在是太多了</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我脑海里自动浮现的是穹的声音，我不对劲</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只有男人懂男人[fn=31]</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你们联合！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算天王老子来了，我渡边彻也是处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以3000块的评论区才那么多人清理评论区啊，就是因为这些莫名其妙动不动就玩梗的梗小鬼，就很弱智。真正的爱好者，看到作者主动玩了，才会会心一笑，心情好了就顺便留个言。只有这些弱智，动不动就玩梗，不分场合，不分地点，不管情况，就懂的玩烂梗。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梗小鬼差不多得了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玩梗次数真的太多了，而且关系不大。请注意场合</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别当梗小鬼😓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伊藤润二的《漩涡》结局，男女主就是紧紧搂着对方，如丝线般缠在一起，不分彼此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们联合！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算天王老子来了，我渡边彻也是处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种睡觉就不浪费了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜了，一木葵不在这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不分彼此，[fn=39][fn=39][fn=39]</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来人！给我把渡边的作案工具剪了！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咔嚓~美姬的性福没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咔嚓！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;割以永治</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直至死亡将你我分离</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人，烧开水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;斩断丞信的樱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;割以永治</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细长？[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来渡边的是线……细长……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;割以永治</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有死亡才能将彼此分开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;线缠的太紧，已经找不到下刀的好地方了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咔嚓~美姬的性福没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;支持</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死结以死解。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人！给我把渡边的作案工具剪了！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剪不断了</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这恒河里[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯路人，不吹不黑，我觉得很合理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错，就是听她的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;副部长的权利是聆听神的教诲，我作为局外人，觉得合情合理</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我只是一个路过的卡面来打</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：
我 们 联 合 ！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬の附和</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙 我太迟钝了 我才意识到。渡边准确的知道台风来的时间，但一直没说，这段还叫忽然狂风 是在演出的时候配合他操作吧</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野的妥协，是渡边的渣。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么，一两回合后加入？？这很合理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有来有去的，嗯</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晴天娃娃不服solo</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这估计是个伏笔。到时候，窗外刮着台风，屋里状况激烈。</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;葵一直注视着麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼中永远只映照着你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盯...... </p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;屁股，屁股还在树上呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;树上挂满了资本家[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;崇祯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸽子，资本家及会长等展览树[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;熊锤爆了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者今天肯定在打会战</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会长，我yly又自爆了.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;地下室4个钩子一人一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;树上挂满了官僚和资本家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;树下一个猴（一木），树上几个猴啊?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挂树了挂树了，救救救救</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高树上挂满了带学生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;屁股，屁股还在树上呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挂满了败犬[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;树上挂满了资本家[fn=4]</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这时候晴天娃娃发挥作用了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;预言一波晴天娃娃</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晴天娃娃，永远的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有晴天娃娃呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尽人事，听天命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的护佑</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就是眼里只有你？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是这首诗的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想看花田朝子纯爱战神的拳头暴打渣男[fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然觉得一木好可怜……</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;荣幸至极</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;穿越者都提前毕业</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我不太懂，我觉得作者需要为我们读者做一次演示，你写的我看不懂，你得负责。就比如说这女仆装，男的怎么女仆，作者要不演示一下[fn=10][fn=10][fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男生也穿吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男生也女仆装？</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;松板砂糖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有种没回神的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是啊，有时候总感觉像在看电视，一切都与我无关，像隔着一道屏幕，虚幻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我某次感冒了也是这种感觉，全身好像包了一层膜一样，就是感觉格格不入</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好让人心疼的比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偶尔也会有这种感觉，身处于这个世界，但突然感觉周围的一切都与我无关，甚至与别人沟通时连自己的声音都有一种不真实感，仿佛是别人在说话，而我只是个旁观者。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当场想起冰菓的op，我当时也像折棒那样，被千反田直接拉着入了坑</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一瓶2L的麦茶是140-180円普通的纸杯就能装100-150mL，一瓶能分出15-16杯，也就是800円，这是300-400%的暴利，真黑[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我想起了网吧五块钱一杯的可乐，一个大桶可乐至少能装4-5杯，一桶好像是7块钱吧，忘记了，直接利润翻倍了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;血赚</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。这时候麻衣才2岁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只是觉得他们吵闹。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人类的悲欢并不相通</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;但是这样的母亲最后为丢下自己的女儿舒了口气</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;戴眼镜的男班长不配有名字吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木村唯人[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫木村什么来着</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;等等，我记得，麻衣的妹妹就小她三岁，算上再婚怀孕的时间，这时候麻衣应该还不到两岁，这合理吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后她妈期望甩掉她</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这种感觉应该用在留守儿童身上，学姐的母亲是全职太太，这样用感觉不太好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，心疼麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还能这么形容，，读书多就是细腻</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻:你们不要过来啊</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;让我想起了两仪式呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下离谱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻就是麻衣的补完计划</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明日彻：学姐还有我守护你</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一开始我还以为是重组家庭，两家各带一个女儿，没想到是同母异父的妹妹。我记得前面有一章写的是同父异母，bug实在太多，懒得吐槽了。写不清楚还不如不写，麻衣本身戏份就不多，完全没必要扯一个这么复杂的家庭背景，直接交代一下父母离婚然后再婚不就行了，越写越乱，估计作者本人都忘了前面的设定了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姓氏还能说得通，日本嫁人改姓，麻衣跟着改姓也说的过去。不过年龄明显是bug，麻衣高中毕业，妹妹刚好高一，没有留级的话年龄差三岁。妈妈离婚后没过多久就再婚，到妹妹出世至少也要一年多，也就是说离婚的时候麻衣最多两岁，两岁就能独立自主思考父母离婚再婚的问题了，明显说不过去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以嫁了两个姓明日的男人？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;bug吧，和妹妹差3岁，2岁的时候就离婚，还知道这么多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等等，麻衣毕业妹妹去学，应该只差3岁啊，那么小就记事了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;的确是外人</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你只想被渡边君炒饭吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不得吵一天饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边家的饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东方馅挂炒饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;馅挂炒饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是只想和渡边君炒饭吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的烤肠-炒饭[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只想吃渡边君的香肠 炒饭</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]学姐</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;村上再现</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;春物体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不抱期待</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣，我的麻衣，我好心疼，怎么可以再让她承受这些，渡边你得支棱起来啊！因为我，没有力量，只能靠你了！我们一起，两面包夹芝士，让麻衣快乐起来。</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33]</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;金风玉露一相逢，便胜却人间无数。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远与世界存在隔阂的少女遇到了她的意义</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;架空走廊的笑容此生难忘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣的认知上我觉得没有任何问题。人在孩童时代的三观，都是由父母建立起来的。父母没有给予孩子足够的爱，孩子当然不可能有足够丰富的感情。她对于一切的事物都是无所谓的，因为父母根本没有给她活下去的价值，根本没有告诉过她要为什么而活！她没有什么想要的，也就没有人们所说的“欲”。我觉得这是导致麻衣性格的原因。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;存在的意义</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是你 绫波丽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;架空长廊初相遇，一见渡边误终生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金风玉露一相逢，便胜却人间无数。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去年的五月二十八日，明日麻衣和命运邂逅了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;遇上命中注定之人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远与世界存在隔阂的少女遇到了她的意义</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一笑误终身呐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一眼就是千年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么好➡️怎么都好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12][fn=12][fn=12][fn=12]</p>
`;
        case 175:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;中华超市是什么鬼</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;雨过天晴遇见你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;父母都背叛之后，遇见了命中注定的他</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好嘛，搁着拍美食广告呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一顿操作猛如虎，一尝味道仰望星空</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可有人补个图？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢，饿了</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;主要是这该死的代入感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这小小渡边君，怎么可能有各位读者大人帅！！！[fn=31]</p>
`;
        case 179:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;招待不周！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;检测报告出来了：药里没有一粒米饭！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;osomasu！
招待不周！
创真小天使！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偶嫂麻子
哇嘎哩用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺搁了药</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;招待不周</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我撕胖次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是米饭，我在春💊和闪光弹里加了米饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爆衣爆衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起来创真做的那些炒饭。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是米饭，我在药里放了米饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我撕胖次！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老仁酱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，又让他装到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;药王附体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记不住了就问，渡边之前换过厨师相关的技能吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;检测报告出来了：药里没有一粒米饭！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;招待不周！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;松冈是你吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我往里搁药</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下一章没爆衣我可不会放过你乌鸦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老食戟了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是饭，我在药里加了饭！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会发光的料理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;香菇呢？[fn=11]</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来自纯爱战神的助攻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花田是谁？哪个路人？完全没有印象了，干啥去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花田人设都搞好了居然就这样路人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那这波是纯爱战神自己给自己来了一刀？[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花田都没戏份了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;架空走廊初相遇，一见渡边误终身。</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是一个空壳少女遇到东京帅哥的故事。一具“尸体”成功复活，不，与其说是复活，不如说是一颗名为“明日麻衣”的种子第一次发芽的故事。在你之前，我不是我；遇到你之后，我才是我。我相信，遇见你，使我成为世界上最幸福的女孩。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该会用到那个晴天娃娃的道具，解决台风问题？在表演话剧的时候？宏大的舞台与不可思议的奇迹的交汇？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要不结婚就不会有重婚罪[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;需要我教你们吗？礼物刷起来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统是什么东西？有这玩意儿？你们说的晴天娃娃又是啥？变天气的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉好像什么都没看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;食戟，开始！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不太会夸人。
我说一句：乌鸦，我的超人不过分吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在那所有一切之上是她，我的神，九条美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章是作者感觉麻衣的人设太单薄了，所以开的单章吗？还是大结局之前，每个人都来一篇单章，只不过吃学姐开始?哎，想想还有二十几章就完结了，感觉好不舍啊……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是一个空壳少女遇到东京帅哥的故事。一具“尸体”成功复活，不，与其说是复活，不如说是一颗名为“明日麻衣”的种子第一次发芽的故事。在你之前，我不是我；遇到你之后，我才是我。我相信，遇见你，使我成为世界上最幸福的女孩。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以，刚看完云澈，就来续上渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该会用到那个晴天娃娃的道具，解决台风问题？在表演话剧的时候？宏大的舞台与不可思议的奇迹的交汇？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐带一丝ki</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一章?

嗯？嘶~~~哦哟~~~我永远喜欢明日麻衣！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在一切之上是她，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在一切之上的是她们
我的神
清野凛
九条美姬
小泉青奈
明日麻衣
晚安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在一切之上是她
我的神
九条真姬
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
在一切之上的是她
在我之下的是她
我的神
清野凛</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是一种充满神奇色彩的笑容，让人愉悦，让人着迷。

人们会因为这个笑容，喜欢上少年的唇，喜欢上少年的鼻，喜欢上少年的眼睛，终至于喜欢上少年整个人。

它不可思议，无可理喻，就像你喜欢的人，对你表现出不可抗拒的偏爱。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要知道，麻衣学姐从08年就在等这个令人着迷的笑容了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吟唱了 兄弟们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花田朝子是真的惨，明明颜值够攻略标准了，偏偏是个纯爱战神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说白了，你们命中注定要相爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;happy suger live</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是一种充满神奇色彩的笑容，让人愉悦，让人着迷。

人们会因为这个笑容，喜欢上少年的唇，喜欢上少年的鼻，喜欢上少年的眼睛，终至于喜欢上少年整个人。

它不可思议，无可理喻，就像你喜欢的人，对你表现出不可抗拒的偏爱。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在这里？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要知道，麻衣学姐从08年就在等这个令人着迷的笑容了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波还得是系统的锅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有我几分风范[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11][fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万恶之源</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我泪目了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个玻璃瓶子的描写让我想起了砂糖，啊，是刀[fn=12]</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正因为看到了转瞬即逝的那抹笑容，才会迷恋，才会着迷，进而沉沦。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有意识能控制的笑容，就说明他能只为自己而笑，而不是对谁都可以的温柔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无法理解[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为对笑有意识控制的人格，才吸引到麻衣，而非单纯的笑。</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;写的太好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑着白马的渡边必定是麻衣极端渴望的吗震</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;多么浪漫主义色彩的感情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那不就是喜欢好看的吗。。。。真的怪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;珈蓝之洞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道为什么一下就想到了空白第一次相遇的画面，明明并不像，甚至可以说是完全相反</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐，我的学姐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣补完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段描写有四月是你的谎言公生去公园见到熏的味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不用吸取，我直接进来</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐，赛高！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱，感动</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你把顺序放反了吧？不是火热进攻然后在慢慢试探吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;慢慢试探是火热进攻，火热进攻是直球！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;慢慢地试探？有这一步吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先火热进攻再火热进攻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大胆假设，鲁莽进攻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额，什么时候试探过？我怎么不记得了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是，我印象中学姐第一次进攻。

就是渡边在学姐大腿上写了个正字，难道我记错了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻要看看吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始只是把纸巾丢地上让渡边去捡啊……后面写字什么的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;慢慢试探：指撩裙子给渡边看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐你弄反了吧，明明是先火热进攻再慢慢试探[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;慢慢试探是火热进攻，火热进攻是直球！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有慢慢试探这个过程吗[fn=31]我是不是漏看了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我特么直接推到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你把顺序放反了吧？不是火热进攻然后在慢慢试探吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;慢慢运营，然后F2A[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你管这叫慢慢试探？</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;帮一木问麻衣他们班修学旅行去哪里。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忘了，谁知道</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;现在平淡的要求这么高了吗？</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小肥宅经典动作，轻抬右手，将左侧耳边垂下来的一缕细发从上至下捋过</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;父母不爱她了，最喜欢的人要杀了她，那瞬间她该承担多大的悲伤和孤独啊！麻衣学姐，我的麻衣学姐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;修学旅行10</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无1无靠，孤苦0丁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀渡边，抢麻衣，一人血书！</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“我就在这里，等着渡边彻拿琥珀碱。”这句话印象太深刻了。</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽这句话我真的哭死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是个男人都顶不住啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭了😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起当时那段，突然泪崩。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我.......</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;背景音提供：一木葵[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木，：学姐离开渡边渣男跟我在一起吧
麻衣：嗯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木，惨</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;讲道理，现实里如果有这么个女孩对我，我是不敢的，她的世界里只有你是彩色的，如果你稍有不慎打破了这色彩中一点平衡，想象不出会对她造成什么样的伤害，实在肩负不起这份责任。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太沉重了，实在佩服渡边彻，反正我是没法担负这种责任的吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥，顶天立地</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情深不寿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沉重归沉重，但是既不病娇又没柴刀有啥好怕的啊[fn=39][fn=39]，还不介意你女朋友不止一个，怎么想都没理由推开啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不配。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我，渴望这种爱情。。。如果她喜欢你，你喜欢她，她不离不弃，你始终如一的话，全心全意并没有什么不好的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难以承受的沉重的爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就是我黯淡人生中———唯一的光</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太沉重了，实在佩服渡边彻，反正我是没法担负这种责任的吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲道理，现实里如果有这么个女孩对我，我是不敢的，她的世界里只有你是彩色的，如果你稍有不慎打破了这色彩中一点平衡，想象不出会对她造成什么样的伤害，实在肩负不起这份责任。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜 好卑微</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐真好啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她的世界因你而精彩，她的世界也只有你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐的世界里只有渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=5][fn=5]</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就和九条说的，女生爱的比男生更深</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐yyds
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边是明日麻衣世界的唯一啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=19]</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正常的应该是缘起分合，她这样的不正常。</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;香槟色玫瑰花语：爱上你是我今生最大的幸福</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心疼麻衣</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不懂，求解惑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;火车便当？[fn=31]</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;斯派克</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万一渡边秃头了怎么办</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不靠视觉靠感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得麻衣学姐能一眼看破青奈的伪装</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说实话，我总是觉得麻衣对渡边的感情是畸形的，但看到这些对麻衣心理的描写，我才知道渡边是麻衣唯一的救赎。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;或许是她也知道自己不正常，如溺水之人拼命抓住稻草一样。渡边彻就是她的救赎。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高举学姐大旗[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉很像少年的深渊里的小凪啊，没有什么欲求，别人叫她干什么，她就干什么，她对自己的一切都不在乎。她本身就像一个深渊，把周围的一切都吸过去了。好在，她生活富裕不至于沦为凪，又遇到了渡边把她拉出了深渊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边神的信徒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个都不是普通人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一无所有，别无所求[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到了小怪兽……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣唯一的要求彻你爱着我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边就是学姐唯一的光啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莬丝子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;或许是她也知道自己不正常，如溺水之人拼命抓住稻草一样。渡边彻就是她的救赎。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣这种，属于人格有缺陷。通俗来讲，就是精神病。这种角色在ACGN里还是不少的，很多病娇角色就属于其中。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话，我总是觉得麻衣对渡边的感情是畸形的，但看到这些对麻衣心理的描写，我才知道渡边是麻衣唯一的救赎。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现实生活不可能有这样的人，但我也希望这份偏激和扭曲的爱能得到回应</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;心疼麻衣</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;心疼麻衣</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可能有孩子后就好些吧，不然渡边不在她身边的时间很多啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不被认可没有关系，不被关心没有关系，只要彻在，对“明日麻衣”这个躯壳而言就是存在的意义</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为明日麻衣献上心脏！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我永远喜欢麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丰富了麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，这妹子。。。。还是不要在现实里出现</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我永远喜欢麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道有没有人看过《重生之官道》，我看到这一下就想起了那本书里的朴允儿，这样的妹子可能只存在于书里吧……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人活着就是为了明日麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界第一好的学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为明日麻衣献上心脏！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心疼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上天啊，请赐予我这样一个妹子，我愿意用一生去守护她[fn=2][fn=2][fn=2]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;估计四女主都要来一次这种描写</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;处男环节</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;独特的分割线</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我还记得学姐端着吃饭眼睛一直直视彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像猫咪一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太卑微了…</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是这样→_→</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渣男中的好男人</p>
`;
default:
			return '';
	}
}
        