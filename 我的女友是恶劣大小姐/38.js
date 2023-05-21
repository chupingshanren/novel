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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后一卷了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，不是世界尽头嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个标题怎么感觉早就想好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;nice</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经不按大章节了[fn=12]是快结束了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以为昨天是最后一章来着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;18</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就15楼啦？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好多快男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就13楼了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们好快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;comeon</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;4</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;4</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦已经出手了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有书友群吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;混个第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艳阳天那个晴空好，红的是花绿的是草</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新的一天新的开始，所以要放在0.00更新，你们懂了吗</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快去开机！别管我！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这很真实</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条居然送麻衣回家？看来也是变了不少</p>
`;
        case -10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;等你下本书[fn=9]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实可以水一下番外，结婚后的生活，孩子间的日常</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实到这我都感觉要完结了，估计最后再有两三章了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求你把6个点都水出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别这么快啊！多写点啊！[fn=24][fn=24][fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完了，感觉要结束了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个作家的话为什么看起来这么像完结感言。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求你当个鱼人二代</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多水一点吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水到明天2月都可以，慢慢写，大学生活，求你做个鱼人三代</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦再水几章吧，我能接受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我很开心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结的时候快到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到六月一日，一家十三口[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？这是要完结了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的好看，乌鸦，允许你恰钱继续水下去，就算是几百万字我也全订。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等下，这章不会是结局吧？虽然作为结局来说完全没有问题，但是，请多写点啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦最后的部分请用数不尽的糖来腻死我们吧[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这怎么有种结局的感觉啊[fn=12][fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么短的嘛？！乌鸦桑！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结了？？？？？？？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完这本书，书架里其他书都看不下去了，感谢作者帮我省钱[fn=54]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别这么快完结啊，我还想看呢，或者，乌鸦可以多写几章番外。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？完结了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢乌鸦给我们带来这么好的作品[fn=2]</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;气氛友好而又尴尬[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和好了和好了</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;贴，都可以贴[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到三个人一张床</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来一夫一妻是美姬啊，夫渡边，妻清野[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波，这波是美姬开后宫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神妥协了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贴，都可以贴[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到三个人一张床</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我想起高兴的事，我老婆生孩子了[fn=4]哈哈哈。。。美姬！等等！别拔枪！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忍不住笑出了声:我想到了高兴的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们的老公是同一个人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们的老婆是同一个人？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蚌埠住了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边大胜利！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绷不住了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想起高兴的事，我老婆生孩子了[fn=4]哈哈哈。。。美姬！等等！别拔枪！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我老婆生了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发出了海王的笑声[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忍不住笑出了声:我想到了高兴的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于可以五人一起的笑</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那人不会是你闺蜜的老公吧🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想到开心事。我老婆和她闺蜜决定嫁给一个人！</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;鹅鹅鹅鹅鹅鹅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我直接拍肚皮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶，你让我帮闭嘴我不闭，还要笑得更大声，就是玩~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这位同学，你有什么事儿？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不走程序了，直接开笑</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐的一周年就在近期，乌鸦没写应该会被学姐党打死吧😄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫猫疑惑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;痴女歪头[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=38]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐：你们的老婆是同一个人？
渡边、美姬：没错！我老婆是清野！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小小的学姐，大大的疑惑</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她戳了我一下，我也戳了她一下[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吊带衫是不是打错字了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲，三更半夜，你们又出现了哈[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hso</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就是渡边的手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是想皮一下</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就像两篇论文解决了一篇的感觉一样</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们，去舔去捡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赏给你的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21]</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;反客为主</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边已经忘了当初他卧薪尝袜的生活了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;短短一年，九条家赘婿竟敢噬主了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想穿就穿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;房间存了几条? 屑渡边连扔都不敢扔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飘了飘了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛啊牛，一声令下，十万将士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想撕就撕[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;膨胀.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不屑于了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赘婿飘了，难道是龙王归来，三年之期已到？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的东京帅哥，他支愣起来辣![fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边已经忘了当初他卧薪尝袜的生活了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经支棱起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;硬了硬了，拳头硬了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;✔（哼～）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以啊九条彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷  腻  了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;短短一年，九条家赘婿竟敢噬主了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飘了</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟现在里面已经那啥上脑了。</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：美姬，我懂了，这就来</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呵，楼下的炫耀老婆，殊不知他也有女儿可以炫耀。（悲）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羡慕，我老婆的头发一直都是让我帮着吹，我也想偷懒一回</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;上面的下面的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明天不用吃早餐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看个小说还有人不停发狗粮[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话，30秒就吹好了，我也懒得让老婆帮我吹～</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑摸狗头[fn=31]</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈～摇头晃脑～哈哈～不太用心</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬难得如此坦率又柔软</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻底软了[fn=31]</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;全部被爱意所包围</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇哇哇</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一左呆毛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;村上悠和水籁祈？</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好看好看</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;出现了，说假话的叠词</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边果然还是处！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算我躺进棺材里，我也要用我腐朽的声音喊出：“渡边彻是个处！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心情太好，都演起来了[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没想到吧小丑读者们，这两个还是处哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不是一个随便的人，我随便起来不是人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边果然还是处！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好情趣[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;事到如今以为说这种话还有用吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算我躺进棺材里，我也要用我腐朽的声音喊出：“渡边彻是个处！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始调情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每当我打出？，不是说我有问题，而是我感觉你有问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说破天还不就是渡边还是处呗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我随便起来不是人[fn=31]</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边先生，您涉及黄色，请跟我们走一趟
这是我的警号10086</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应该有 破喉咙 破门而入（你叫 破喉咙也没用）😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和隔壁的慕姨如出一辙[fn=31]</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬天下第一</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;眼神生情？</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;等水开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此，没有不也活着[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=53]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;害等什么呢（邪不压正
等它飞一会（让子弹飞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天就是天王老子来了渡边彻还是处！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;试问人间能有几回黄金机会啊？还不赶紧冲过来，大力把握住它</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一路看过来，本来我只喜欢凛，不是很喜欢美姬的，直到这里，我才突然发现，我已经喜欢上你了呢，我的美姬。[fn=7][fn=2]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还不赶快过来大力的把握它</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不管，渡边彻就是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;MD绝了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在等感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等清野凛来双飞！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在等CD</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此，没有不也活着[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等我来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等水开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边给我滚开，让我来！啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，美姬，我的美姬</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;教练我想要学这个[fn=29]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前几章被吸的地方已经被删了，还来啊[fn=18]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6翻滚起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看到这里  我都要大声说一句  渡边是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书什么时候被禁 我一点都不奇怪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;4+5，变成八</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恨塞蛋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;教练我想要学这个[fn=29]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前几章被吸的地方已经被删了，还来啊[fn=18]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说存在压强嘛[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被吸入惹</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，省略号，或者间隔号，应该有的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是睡懒觉？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个作者不行 ，[fn=29]越来越懒 ，连六个点都省略了 [fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这乌鸦不仅偷心，还偷车[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的车呢？
这么大一个车车呢？
明明应该在这里的![fn=29]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我差那些币吗？细节，细节！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;汇报工作[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画《渡边彻在报告》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在美姬和凛彼此的心思都在对方身份。我们偷偷摸摸就不会被发现了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;母亲大人。我已经让她们和好了。你当初答应我的承诺也该兑现啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搞定了凛酱，来搞定凛妈了？</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;再过些年怕是叫老爷了</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;女儿都拿下了，嘿嘿嘿，要向更高的目标前进了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不对劲了xdm</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子阿姨，您交代的任务完成了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子党狂喜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;趁虚而入</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上门提亲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，趁着某某凛不在。
你想赣神魔[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还叫阿姨？不叫幽子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是阿姨？不叫妈？</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《凛和美姬在逛街》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬在睡觉.JPG</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬在逛该[fn=31]</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;两个小时以后，渡边彻扶着墙出来了</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;搞定了女儿们之后肯定是轮到太太们的剧情啦[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;堕落挞（不是）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：好耶！我的回合！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条太太: 啊啦，既然你已经让美姬和凜和好，你就没什么用了，渡边君。
渡边: ！这，这就是资本家嘛！！
清野太太: 当然了，这就是资本家，不过渡边君别灰心，你还有我们哦。
两位太太微笑看着渡边彻。
渡边彻（认真的思考当中），，，好像没有什么不好，，，</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;瓜叶菊的花语是：喜悦，快活，快乐，合家欢喜，繁荣昌盛。适宜在春节期间送给亲友，此花色彩鲜艳，体现美好的心意。
鸦桑有心了</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;种下一颗种子，今天长出了果实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;种渡边？
往自己身上？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;春天种下一个东京渣男，秋天就能收获一堆[fn=4]</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阳光美少年，出现!</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小坏蛋，多久没来陪我了，不知道我空虚寂寞冷吗（忽略清野爸爸）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是女友在向男友不满的撒娇模式啊
好嘛，闺女还没等行使女友权呢，妈妈先用上了[fn=31]</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你说的这个花园，她有条小溪吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;走进太太们的秘密花园</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯……就那个……我污了</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻:你们都是我的翅膀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得，行使女友权的，这儿害一个[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬，哦，我的真姬[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岳母，我是来看望我的岳母的</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在太太们的花园上播种⋯⋯</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该是类似《西西里的美丽传说》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看我这邪恶的思想，怎么老往《艳母》上拐？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《妈妈的朋友》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年轻的妈妈们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能是幻视成美姬和凛的以后模样吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有个朋友想知道是什么电影</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的太太们的那些年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦你是在问车牌号吗？私聊就行了</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快夸我!</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好句啊</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;宁不把渡边当人是吗?</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我正准备进来吐槽最好的红酒是啥来着，没想到…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有红茶可以吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心满意足地离开评论区</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，死亡倒计时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喝完休产假[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到清野美姬回家发现三人滚成一团</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到酒后乱X[fn=4]</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快进到果汁后乱性</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此时应有渡边永远的处！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;樱桃汁？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王老吉？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛病，未成年不能喝酒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;石榴汁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我渡边喝果汁也能醉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过河拆桥，老年人你不讲武德</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到果汁后乱性</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发酵了的红葡萄汁和没发酵的红葡萄汁么థ౪థ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逼格不能掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此时应有渡边永远的处！</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;三个人睡在一起的时候办到的[fn=32]</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;奇怪的明喻增加了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人形开瓶器</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢女人，就这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢她们，和大家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢你，和她们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等一下，我查一下作业帮。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是一道送命题[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作为天使 是时候给你看下我的翅膀了
光翼  
ʚ🐶ɞ​</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边“我更喜欢你们两个”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢凛！还有大家！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死亡提问</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只说了姓，其实是暗中表白幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，被他装到了[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿良良木历</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁可以不爱她？这个世界不允许不爱她的人存在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得这是暗送秋波，暗示九条
女儿，你还年轻，你把握不住，让妈妈来，爱情水深的很</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神，永远的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛，渡边你根本把握不住，让妈来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有的一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只说了姓，其实是暗中表白幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条党永不屈服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老张无忌了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好巧，我也最爱清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;绝无回旋余地！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我心如铁，坚不可摧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岩石？更像山岳，仍在寸寸拔高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;漩涡无法击碎的磐岩也会在时光的冲刷之下磨损</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千年岩石，亦有磨损啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您需要一把斫峰之刃</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;无忌渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学会了！法师！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金庸老爷子太强了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了学到了
可是，到哪里去使用呢[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竟然不是九条！九条妈失宠了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老张无忌了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;顶级渣男的应对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快学起来[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;被资本阶级腐蚀了[fn=15]</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么阿良良木历，这是张无忌!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿良良木彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历那段算是我看的动漫里最真情的后宫表白了，每一个人都是无可替代的。为谁而生，为谁而死。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，历是吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边无忌是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边爱学姐我本就不求多深，心疼也是我最深的感触，心疼才是最感触到我的。
现实就是心疼比爱这个词，更戳我的心房，所以才最喜欢学姐。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呸，渣男</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我也是</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《关于张无忌投胎转世到曰本谈恋爱这件事》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，像极了阿良良木垃圾君的发言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这一个正常人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘴硬自己还是处的美姬回峨眉山做掌门，不在乎自己是不是处的麻衣心神受伤浑浑噩噩，确实还是处的小泉出走万里担任圣女，只留下清野和渡边抛家弃母远赴北海道放马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最自然的不是清野吗？毕竟对内对外语音交替使用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高 让你高完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好你个渣男[fn=44]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣的明明白白🙇‍♂️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在这给人颁奖呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全书完</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沒有加上老師。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我最喜欢战场原，比谁都要尊敬羽川，跟八九寺说话是最快乐的，但如果要我选择跟谁一起死，肯定会是你，忍野忍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好话都让你说完了😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《海王的自我修养》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话都让你说了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花田呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的翅膀啊!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全都要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请大家吃柠檬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芷若,我对你一向敬重,对殷家表妹心生感激,对小昭是意存怜惜,但对赵姑娘却是……却是铭心刻骨的相爱。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，你全都要是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最适合当女友，当老婆的老师[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，像极了阿良良木垃圾君的发言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《关于张无忌投胎转世到曰本谈恋爱这件事》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是亚撒西的大姐姐[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的翅膀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老张无忌了[fn=4]</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真的是紧吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仅仅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仅仅</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这其实说明一个问题，人的感情需要是多样的，复杂的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;普通人⋯⋯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙渣男语录</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真姬!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我全都要[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:当然和你...的女儿[fn=31]</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;他们三一起是最好的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不管，我就要美姬姐姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精神上最喜欢清野，身体上最喜欢美姬呗？啊呸，渣男[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好了，我现在单方面宣布教徒和军团从此和好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管，我最爱美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然笔墨最多的是清野，不过我还是无感，感觉玉藻那种慢慢变好的反而能触动我的心弦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，心脏分为左心室和右心室</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她们都是我的翅膀，少了一片我都飞不起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不好选啊</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太们：其实还可以再加两个[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野，九条太太:岂可修</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大天使长都不是，好逊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上次发誓还是三个[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两位妈妈：那不行，我们都没份</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;踩雷了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我们俩怎么办？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终究辜负了一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四翼上位天使。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我好像听到了心碎💔的声音？是哪位太太？[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：
那我呢！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我俩呢？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牙白牙白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嚯 听听这话 是人说的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太们：其实还可以再加两个[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野，九条太太:岂可修</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条真姬:保证之前把我们两个加上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：你保证我还不保证呢![fn=31]</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;然而并没有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21]</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;放着别人妈的面说要把她们的两个闺女弄到手来个四女侍一夫[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，当着岳母的面说渣她女儿，不愧是渡边，轻易就做到了我们做不到的事情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弄到手了你渡边彻也是处，呸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是两位妈妈？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真牛啊你渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，当着岳母的面说渣她女儿，不愧是渡边，轻易就做到了我们做不到的事情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣，渡边彻，渣得明明白白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放着别人妈的面说要把她们的两个闺女弄到手来个四女侍一夫[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣的明明白白[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真渣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回家的诱惑，洪世贤
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;够渣的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;够渣的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弄字太轻佻了，用追比较好</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;去当首相，内阁不是清野家的人就是九条家的人，修改个婚姻法不轻轻松松「doge」</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是换国籍一通操作4个都娶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一步，先修改法律</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不结婚就不构成重婚罪哦[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是都结啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去做首相吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你和多少人结婚都没关系，但结婚证只能办一张</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;肯定是美姬，真不用想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是22年穿回的，可以明确的告诉你们，选的是九条美姬。有番外篇和美姬的婚礼。哈哈😄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成为首相修改法律吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然没人说国井，男人什么时候才能站起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和两人一起结婚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里很明显就是打算回答美姬，被清野妈妈看出来制止了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正宫</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如果美姬付出了这么多，让步了这么多，最后和清野结婚了，那我真没话说了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂不懂本书第一个SSR角色卡的含金量啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现实是，不能用自己的付出去绑架别人，一定要同等的回报，否则哪有那么多舔狗的故事哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢清野，但是美姬值得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪位大佬给我解释一下渡边为什么喜欢九条，到现在还没看明白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然此时此刻这书已经完结了，但是我还是想说这书评真离谱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;代入自己不是不行，但问题是渡边怎么选，而不是读者。如果读者代入角色，那最好还是从文本而不是自己出发。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结婚是不可能结婚的，大家都是我的翅膀，其中一片太大了影响平衡还不美观[fn=46][fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬以退为进，这一步下来已经将军了，虽然最喜欢清野神，但没办法正宫确实应该是九条的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬没登顶，结婚没有含金量，九条含金量</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊拉，正宫是谁无所谓了，我最爱的依然是麻衣学姐！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是更喜欢清野。可能美姬给我的第一印象不好吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是看见了传说中的“粉丝控评”吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比起美姬，我更喜欢凛一点，主要是美姬前中期的戏份少，没有让我很明确地看到和主角感情升温的事件，好像就是莫名其妙地爱上了。我不想把原因大部分归结为肌肤之亲，也没法说服自己这是日久生情。美姬这个角色直到艺伎那里我才真的开始喜欢上，后来的日常虽然甜，但始终或多或少有种不真实感。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论饭圈味也太冲了吧😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反手就是双国籍，我全都要！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有些人的评论是在绑架什么吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果美姬让步妥协宠溺的结果是到头来渡边和凛结婚，那就当我这几个月来追书的经历是一场荒唐的梦吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“和柚子阿姨！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可能选清野的，虽然我很喜欢清野，可我还是知道理想与现实根本没得选，无论怎样答案都只有一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不选清野这书神格就碎了 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：
别说我们没给你机会嗷[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你选清野本书神格就碎了呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是选太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂不懂本书第一个SSR角色卡的含金量啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果美姬付出了这么多，让步了这么多，最后和清野结婚了，那我真没话说了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在选肯定就是美姬了 所以幽子。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是和清野幽子！</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：这还用说？当然是和两位太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的汤姆</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不管是2年后，20年后，还是更久，一直如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也用不着那么谦虚，用不着20年，顶多半年吧！[fn=31]</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;番外，写，赶紧的</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老公你嗦菊花啊</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;别吵别吵别吵，这里很关键你别搞笑</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;粑粑，我不要和这个小朋友一起玩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她要凡起来了[fn=31]</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夺笋啊</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你故意找茬是吧</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神也会恰柠檬啊！🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好可怕[fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：我若不死，你终究为妃。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剧情设计得真精妙[fn=1]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬越来越喜欢调戏清野了hhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这副嫉妒我的表情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然我们和好了，但你要认清自己的地位，清野你终究是妃[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好可怕[fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有在梦里才会做梦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大半夜躺在宿舍里笑得合不拢嘴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某某凛：扎不多德勒![fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神也会恰柠檬啊！🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是虐狗吗？</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：我不是有意的，只是雀食没忍住[fn=31]</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;和好后其实就不在意了</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;诶，和好后又能损一次了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一二三四 ，再来一次！[fn=31]</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我错了，下次还敢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该买套套了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛和美姬唯一的朋友</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双倍的快乐[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实的开心哈哈哈哈哈</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是告状么 爱了</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这仨一起太甜了吧</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里清野应该听得出是谎言，忘记铜鼓电话能不能听真假了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《情商》</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33][fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：不是败犬
高情商：还在竞争[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不争了  就等你了</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿[fn=33][fn=33][fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骚女，亮兵器吧![fn=31]</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“的女儿”划掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;辛苦你了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是在暗示彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：得找机会给他来个超级加倍[fn=31]</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我一边吃着狗娘，一边觉得我也很开心，，，
我这该死的开心
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此间乐，不思故[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家都开心(●°u°●)​ 」</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开心就完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“阿姨，你们也会很开心的”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我开心的给了自己十个耳光还是开心的不能自己，要不，各位把我刀了助助兴[fn=31][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们也很开心[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边渣子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呸！渣男！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此间乐，不思故[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看着也很开心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一边吃着狗娘，一边觉得我也很开心，，，
我这该死的开心
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也很开心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：是啊，我最辛苦，我亏大了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也很开心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八嘎，我不开心了。。。好酸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次，有了最爱的人，还得到了最为宠爱的人，两份喜悦相互重叠，这双重的喜悦又带来了更多更多的喜悦。已经得到了梦幻一般的幸福时光。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;气死我嘞[fn=44]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有读者受伤的世界完成了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么会辛苦呢，区区凛加美姬，还不够我热身，就算了加上老师和学姐，我还不够尽兴，如果再加上两位的话，应该可以性满意足了[fn=31][fn=31][fn=31][fn=31][fn=31]</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是俺心动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是湿气重啊</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;系统弟弟？还在吗？打个招呼？我特么快忘记你了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！就要完结了。话说能不能改成漫画或动漫？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到这就结束吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;春天快到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！就要完结了。话说能不能改成漫画或动漫？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结了？我觉得还有100万字可以写[fn=38]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全书完</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重点是爽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到冬季[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个字，绝.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水中月是天上月，身边人是心上人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结撒花🎉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在？起点公务员？以前一章30页，现在都快对半砍了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统弟弟？还在吗？打个招呼？我特么快忘记你了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是们，
在一切之上是她们
我的神
九条真姬，清野幽子
我是妈妈们，最忠实的信徒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天这章有点短啊，嗯——，昨天那章也挺短的，前天，，，emmmm，前天是不是请假了？大前天好像也挺短的，总之就是太短了，不够看[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经吃不下了。
那个谁，打个包![fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章最后这段好有趣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一章适合《给我一首歌的时间》单曲循环</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看这架势要完本了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜没几章了 真舍不得啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天凉好个秋！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;珍惜这些美好的相伴时光吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六月中完结，所以至少还有三十章甜甜的日常！🥳🥳🥳
嘿嘿🤤美姬，我的美姬🤤
嘿嘿🤤学姐，我的学姐🤤
嘿嘿🤤老师，我的老师🤤
嘿嘿🤤神，我的神🤤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉写的过年篇差不多完结</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是一个令人恰柠檬的阶段结局</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关上屏幕，大家面前的脸都一样[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好</p>
`;
default:
			return '';
	}
}
        