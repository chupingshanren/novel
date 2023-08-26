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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;采风回来，慢慢看。只剩五十余章，能不能看一年呢[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我又回来了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都住点娘家的吧，三更半夜不睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你好，我是贝尔格里尔斯，你现在已经来到了世界上最难以生存的地区之一----本章说。如果无法掌握这里的生存法则，你可能连一天都活不下去。在这里，你将遇见最为凶猛的喷子，并且随着天秀或有深度的章说不断增多，你的生存环境将不断恶化。在这里，你必须懂得如何正确使用表情护体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;11</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们住起点的嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压线更新</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看到长野县莫名想到了长野县警官</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该是盂兰盆节</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盂兰盆节别名：盂兰盆会，指每年农历七月十五日的节日。有些地方俗称该节日为鬼节、施孤，或亡人节、七月半等。一定意义上，中元节归属道教，盂兰盆节归属佛教。盂兰盆中“盂兰”意思是“倒悬”；“盆”的意思是“救器”所以，“盂兰盆”的意思是用来救倒悬痛苦的器物</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六魁首～六魁首[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;索兰～索兰</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Made in China</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也包括彻你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你喜欢海豚</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;现代工业的残次品</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;牵着天皇两口子散步</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成牵天皇的两口马子还有救吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个马它……和大伙想的是一个马？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成牵天皇两口子散步的过来 </p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这串葡萄它正经吗</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不明摆着吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一颗？不累吗</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;决赛圈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秒懂怪！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是为了两个人缓和吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是为了防止渡边和别的女人过多相处吧[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;温馨提示日本的葡萄是按颗卖的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;休想跑去陪情人[fn=44]</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：你不给我们吃吗？
高情商：你打算一个人吃完？</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;等等突然想起来，这才5点啊！就算跑了一个小时也才6点，这么早就开门了！！！！</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，假期你不干活你在家干嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了，在家里就这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起来清野中暑，醒来发现渡边再削苹果，然后自己吃了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;整个水果:            我不喜欢吃水果。
洗好切过的水果:   我喜欢吃水果。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了，在家里就这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，假期你不干活你在家干嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：没错，必须彻洗干净了喂我才行[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太们：对，我们要吃洗过的渡边！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，我就是懒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我妈放假时候也这么讲我</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这层楼点进来的人都拉去枪毙的话，估计没几个无辜的[fn=32]哦，我例外，我是进来批判你们的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不洗，你们是不是就不用？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我没有第一时间想歪，我不管，我还有救</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;外面弄个保鲜膜就可以了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用不用削皮？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想找个说是敷面膜的都没有，你们真的。。。没救了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用啥黄瓜🥒，用我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点猛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下通通扣走，不要证据</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要说没什么暗示，我是不相信的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我和你们不一样，我是进来想当黄瓜的。[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这层楼点进来的人都拉去枪毙的话，估计没几个无辜的[fn=32]哦，我例外，我是进来批判你们的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不洗，你们是不是就不用？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;xdm，要到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬：洗根黄瓜，我晚上要用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🥒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;茄子也行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼要歪了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这栋楼都不对劲 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不需要吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不对劲</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边想做就能做到。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特别行政区特首</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉要成真呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彼可取而代之</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三十而立</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是首相[fn=33]</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好嘛，原来在这儿等着呐[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边吃葡萄，太太们吃黄瓜</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不是疑问句</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们继续</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：知道您惦记这个啦，差不多得辣[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不需要再买点牛奶吗…
哦，的确不需要[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，不★！神，★！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻:别说了，直接报我身份证号吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幻肢一痛</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好听吗，好听就是好瓜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嫩啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隔壁太太都馋哭了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那可不，差了十几岁呢[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有端联想：新鲜，热气腾腾的……什么呢[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟肉做的</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;当然是渡边首相的久美子秘书官[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小了，格局小了。一个怎么够。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我敲 我竟然天真的以为 她叫九美子三千子[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么？久美子到了？不！这不可能！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;身边是辉夜大小姐🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不放过任何一个进攻机会的凛[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是渡边首相的久美子秘书官[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是神母啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是国井。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疯狂暗示</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;"是眼镜男~"</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀疯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是太太！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灵魂质问</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小了，格局小了。一个怎么够。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，话里有话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是你，我的神🙏</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这要旁边没人是不是得用嘴喂啊[fn=31]</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;很难说其中有没有渡边的小心思
——站在你身边的会是谁
——R桑
渡边:我们是来买书的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;身边的人是谁？
现在是R桑
以后也是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑（回答）///我们是来买书的（转移话题）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只想听见前半句[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：如果我回答九条美姬，被证明是谎言怎么办…
对抗清野凛的正确办法就是不正面回复。</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太：再强下去我们4个一起上也吃不消啊[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条天天是没错的，毕竟下面没那一点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：要什么自行车 
要什么一个月的早饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是太太了解渡边的身体啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再强就受不了辣[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条天天是没错的，毕竟下面没那一点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：再强下去我们4个一起上也吃不消啊[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条太太啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天天=太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，九条太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;足够强壮，指门外偷听（滑稽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条天天🐶</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，在所有一切之上是她，我的神，清野凛（划掉），清野幽子√[fn=53]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神上之神，清野幽子[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，清野教徒集体叛教吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ring门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的神，清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神上之神，清野幽子[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，在所有一切之上是她，我的神，清野凛（划掉），清野幽子√[fn=53]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，檀（划掉）清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;严格来说，这句话可以说是撒谎了，反过来说基督教是阿门就没问题</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘉门</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;任何普通事情能持之以恒一万分钟都是将不再普通。当然……✊🐛除外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曾经我也有想过这些东西，但是现在我已经认清了我是咸鱼的事实_(:D)∠)_</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;了不起的东京帅哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;了不起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;了不起！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比如睡觉前不看手机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曾经我也有想过这些东西，但是现在我已经认清了我是咸鱼的事实_(:D)∠)_</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我变强了头发也秃了[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;任何普通事情能持之以恒一万分钟都是将不再普通。当然……✊🐛除外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说简单的朋友可以试一下，每天20个俯卧撑，固定时段，能坚持500天的都是狠人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看好了！这就是东京帅哥的魄力！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;始终不放弃做一个特别的人
所以彻才足够特别</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指忍住和神在一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;了不起的渡边彻！</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;废话，天主教不应该算基督教的一个分支吗，渡边宗教学的不到位啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡咪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;若本规夫会两把武器交叠成十字喊AAAAAAAmen！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前在B站上看到一个视频（BV1kr4y1F7M5），说的是基督教的上帝、伊斯兰教的安拉、犹太教信仰的神 其实指的是同一个神。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我讨厌欧洲历史，特别是宗教改革。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天主教和东正教原本是同一个宗教，
罗马以基督教为国教，后来罗马帝国分裂，基督教也分为两个教廷，西罗马的天主教，和拜占庭的东正教，
后来，文艺复兴和宗教改革催生了另一个教派——新教。
综上，新教，天主教，东正教，都属于基督教。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是阿门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应有科普</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;基督教一共有三大分支，东正教，天主教，新教。一般中国人印象中的基督教指的是天主教，教廷教皇梵蒂冈啥的就是属于这一支。新教的“新”则体现在没有一个权威性的中央教廷，理论上来说各地的教堂都是平级的，都有对于圣经的解释权，在中国传播最广的也是这一支。东正教不怎么了解，好像主要是在东欧一带流行</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不不不，太太你想多了，如果没有系统他只想当体制内的蛀虫罢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是同时是清野家和九条家的女婿才是最牛的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没系统的话，在日本只靠一代人是不可能起来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话 有系统给的几十亿 加上渡边的颜值情商  奋斗二十年很可能创造出来新的渡边豪门  </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明白了，我这就去晨跑！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一个这么狠的家伙叫北原……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是很那比同时做两家的女婿强。
就这么愉快的决定了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不不不，太太你想多了，如果没有系统他只想当体制内的蛀虫罢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错，要让世界在我面前低头（指建立后宫[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;了不起的渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是同时是清野家和九条家的女婿才是最牛的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不比那什么齐格强？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以他才是了不起的渡边彻</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好骂，看了好几遍每次都觉得渡边这都不知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那清野神教用什么呢？不如就用达令吧。
最特别是她，在所有一切之上是她，我的神，清野凛，达令</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬|凛
左右横跳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我承认上一秒你比我强，但是这一秒我和你一样强[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人与人之间确实有差距，假如R考试一百分，度99，她会说你为什么没考满分，但是不会和你说，因为你最多考两分[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，这是垂落神的爱意[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也匮乏</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我也只是一个普通人，我和渡边只差一个系统了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，渡边的性格要是系统给评分的话，应该是9。就算没有系统，成长后的渡边魅力也能超10。所以，就算没有在高中和学姐确定关系，之后遇到也会成为情人的。（学姐太卑微了[fn=19]）美姬和清野也是一样的，只是攻守转换而已，不过应该没老师什么事了[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;普 普 通 通 渡 边 彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;普普通通渡边彻🐵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只是个科学家——光之国外挂头子希卡利也是如此想的[fn=24][fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，渡边的性格要是系统给评分的话，应该是9。就算没有系统，成长后的渡边魅力也能超10。所以，就算没有在高中和学姐确定关系，之后遇到也会成为情人的。（学姐太卑微了[fn=19]）美姬和清野也是一样的，只是攻守转换而已，不过应该没老师什么事了[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻没有系统也可以成为一个了不起的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给大家讲个笑话：渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话就算这本书没有系统，给渡边一次再来的机会他可能依然选择去御茶之都然后开后宫，过程可能比较艰难但结果我觉得不会改变</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神™的普通人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;魅力十二体力破表随时能加智力的普通人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只是一个普通而自信的东京帅哥罢了(迫真)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也只是一个普通人，我和渡边只差一个系统了</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;见到了这就</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;出自菲茨杰拉德的短篇小说阔少爷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《了不起的渡边彻》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能是比较喜欢这本书吧，前面也有其他书的引用的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没看过别的书吗……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;将来你们孩子看的第一本书，说不定就是这本《了不起的盖茨比》</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;未曾设想的道路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;公务员---指首相</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有时候看新闻，老在想，世界上应该没有比我国外交官更“憋屈”的存在吧！每天面对世界各地媒体“不太聪明”的问题，而每次措辞激烈的回复完，那些媒体又是“你说你的，反正我不报道”的态度，毫无爽点[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我渡边最大的梦想就是成为一个普通人，就像马云最大的错误就是创立了阿里巴巴。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你俩的电波是无时无刻不接在一起吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好普通呀 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后坑货系统来了</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;别骂了我不配</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;诗意的不是风景，是与你一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两人的相处总是美妙而充满诗意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总觉得林荫小路的下半句应该是早已挂满晨露</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;路的尽头，相遇天使[fn=24]</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喵帕斯帕斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲酱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;OMO</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哥！嫂子！</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说好的回来的时候考呢？搞突击检查。。。</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;求生欲满满</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;普通DISCO？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平平无奇渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：普通的我在普通的摇.mp3</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;普普通通渡边彻</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;果然不是人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;法国什么时候成为法兰西斯坦的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;君士坦丁堡什么时候得到了她真正的名字伊斯坦布尔？</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说明更记得阿彻说的话，尽管可能是乱七八糟的[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只记得昨晚的故事了[fn=58]</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太:你想做我家女婿可能是为了家产
实际:我做你家女婿是因为想活着，也想父母活着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虾仁猪心[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虾仁那啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以来我清野家吧，直接给你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然啦，已经到手一半，剩一半也不能放过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波啊，这波是(         )</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;预言家🔪了</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;之前说过放弃这个想法了（具体哪一章我忘了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不兴这么讲啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子阿姨，这话不能乱说！一会去你屋里咱们好好聊聊</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;滴…滴…
乌鸦更新，骚话开始
读者说出骚话，可获得加更奖励
说的骚话必须达到书友认可标准（本章点赞数第一）
骚话配上涩图，可掉落额外特殊XP值，鼓励书友积极开车
想骚话中...
想到骚话...
骚话已生成，祝您骗赞愉快
合理组织语言，注意更新时间，谨防不能过审，真心实意瞎扯；…远离章说达人（涂黑）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥渡边彻
魅力:★★★★★
体力:★★★★★
智力:★★★★★
手机前的你
魅力:★★☆☆☆
体力:★☆☆☆☆
智力:★★☆☆☆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;324</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;434应该有了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我应该有253hh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;333吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自恋点，511</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬天下第一
明日麻衣我的唯一
小泉青奈我的最爱
两位太太也很可爱
最后的最后
最特别是她，在所有一切之上是她 ，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一章真的各种细节含蓄，几乎每一句，每一段背后都能解读出更深层的意味，需要反复细品。
我愿称乌鸦为恋爱日常界的鲁迅[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;        我真的很羡慕彻和凛这一对默契、相爱、心有灵犀的恋人。随小说一路走过来，忽然明白自己这二十多年来不是学习就是打游戏的生活，让我不懂也不配去爱人，也明白我这一生可能就找不到、爱不上一个与我两眼相视就能相通的‘清野凛’神。想清这一切后，直觉得所有事都没意义。浑浑噩噩、大脑空白地度过一天，直到凌晨无法入睡。
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每天睡觉之前的吟唱，凌驾一切之上，至尊无上的神，我的神九条真姬，万岁。晚安xdm</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;短小无力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，新的一天从嘶呀开始！美汁汁儿～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她，在所有一切之上是她，我的神之才（划掉）神，清野凛
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安咯，好梦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提前习惯教育女儿[fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完睡觉，晚安各位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安晚安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安，大家早点睡吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，又要等待24小说，1440分钟，86400秒才能看到下一章。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好了，看完了，兄弟们晚安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥渡边彻
魅力:★★★★★
体力:★★★★★
智力:★★★★★
手机前的你
魅力:★★☆☆☆
体力:★☆☆☆☆
智力:★★☆☆☆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;短小无力……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴…滴…
乌鸦更新，骚话开始
读者说出骚话，可获得加更奖励
说的骚话必须达到书友认可标准（本章点赞数第一）
骚话配上涩图，可掉落额外特殊XP值，鼓励书友积极开车
想骚话中...
想到骚话...
骚话已生成，祝您骗赞愉快
合理组织语言，注意更新时间，谨防不能过审，真心实意瞎扯；…远离章说达人（涂黑）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你好，我是贝尔格里尔斯，你现在已经来到了世界上最难以生存的地区之一----本章说。如果无法掌握这里的生存法则，你可能连一天都活不下去。在这里，你将遇见最为凶猛的喷子，并且随着天秀或有深度的章说不断增多，你的生存环境将不断恶化。在这里，你必须懂得如何正确使用表情护体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安了各位！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻的三维
体能★★★★★
魅力★★★★★★
智力★★★★☆
此时躺在床上看手机的你
体能★☆☆☆☆
魅力★☆☆☆☆
智力★★☆☆☆
获得键盘加成之后的你
体能★★★★★★★
魅力★★★★★★★
智力★★★★★★★</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一到本章说，所有看书的人便都看着我笑，有的叫道“阿巴怪，你的本章说又没人点赞”我不回答，对柜里说，“要两个赞，要一个评论”便排出九文大钱。他们又故意的高声嚷道，“你的本章说一定又没比过别人”我睁大眼睛说，“你怎么这样凭空污人清白……”“什么清白？我昨天亲眼见你发本章说沉底一个赞都没，被吊着打”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;11点55：快要更新了
11点56：快要更新了！
11点57：关掉其他应用
11点58：刷新刷新刷新！刷新！刷新！！刷新！！！
11点59：刷新！刷新！！刷新！！！更新啦！！！！
12点03：索然无味.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你会记得自己吃过多少面包吗？</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得渡边决定认真爱上美姬的时候就不这么想了（大概）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里可以看出，即便已经和九条和解，渡边依然对九条家和清野家保持警惕，即便是有心灵相通的人，但是这份小心翼翼却不会改变，这就是必须要付出的代价啊</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老婆救我！[fn=31]</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦这一章分明一直在无形开车
他都没停过[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放进谁的嘴里？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫老婆！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;r桑也是你叫的？叫神</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻：R桑你这样让我很难做啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;误会了更好</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈好有意思</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;让美姬陪着说明九条妈妈得到了自己想要的答案</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太想打野了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这钵啊，这钵是修罗场加强版[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轮流好啊
周一美姬
周二猿神
周三真姬
周四幽子
周五老师
周六麻衣
周日国井</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样晚上就可以跟彻君两个人独处了！计划通！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子姐姐开始助攻</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;人人平等，但有些人更加平等</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想看你们陪渡边去。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是平等的，你们都是渡边的翅膀啊</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;两边都在疯狂挖墙脚[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你觉得呢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里是清野太太吧，错了</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野太太给清野创造机会，被九条太太抓住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……然而真姬姐姐早已看穿了一切</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;臣附议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬：都是少年的狐狸你跟我玩什么聊斋！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬：我不装了，开战吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬番外哪里有呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬姐姐天下第一！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬姐姐天下第一！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野太太给清野创造机会，被九条太太抓住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自信点，把觉得去掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野太太：我觉得你才是个狐狸精</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……然而真姬姐姐早已看穿了一切</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;讲道理，骂人狐狸精就已经是承认对面长的好看身材好了，的确是夸奖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柚子：打就打，谁怕谁？[fn=31]</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬只是早上起不来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男友力爆棚的美姬(确认)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男友可还行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边君男友?把我直接整不会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纠错，是女友</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉好像哪里不太对劲？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;主要没和渡边一起睡就可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老番重演</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凭借着东京帅哥的力量，让美姬早上起不来床是理所应当的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传世名画《美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典老番《美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚上太操劳了，起不来[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;致命打击</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;起不来[fn=12],晚上工作太忙了</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不是渡边的锅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：渡边跟不起床，我全都……emmm算了选不起床吧</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一人一日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太请先出示驾照[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太:以后咱们各论各的，我管你叫死鬼，你管我叫太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们轮流使用渡边君</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好一个我们，快进到早上渡边抱着幽子太太！</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;高手过招呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有你，你超速啦你知道吗[fn=31]</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不只是让美姬堵神，而且是还创造更多美姬和神共处的时间。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是聊斋现场[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要锄头挥的好，哪有墙头挖不倒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个渡边与四条狐狸搏斗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狐狸精斗法[fn=27][fn=27][fn=27]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对应前面的九条太太发现清野太太给清野创造机会并且堵住了机会</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;俩太太接机疯狂往车上挤，俩闺女都快被你俩挤掉下去了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请快进到太太大胜利，俩闺女欲哭无泪</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛：这局我赢定了，我一定带走渡边彻，耶稣也留不住他，我说的！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛:我有早起的习惯，每天都可以一起ㅍ_ㅍ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每日吟唱:最特别的是她，在一切之上的是她，我的神——清野凛。</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;做人不要太攀比，要比就比谁早起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可能小赚，我永远不亏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远不亏</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛把败犬的这个身份用到了极致</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打天下易，守天下难</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈怎么感觉输的人才是赢家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《偷家》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这叫私掠制度，西班牙气的直骂娘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;射球手和守门员</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画之美姬在睡觉，能看见的机会不多了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来清野是为了帮美姬养成早起的习惯[fn=18]，清野还是很关心美姬的（认真）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光脚的不怕穿鞋的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是内卷吧哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么叫做操作啊？（后仰）
其他人做得到吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当我到达了南极点，就算躺倒，也是离北极更近一步</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狡猾的凛也很可爱[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边是真的享受着这种被两个美少女大小姐追捧着的感觉吧(大概</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪有防贼千日的呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卷起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光脚的不怕穿鞋的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要我触底了，剩下的都是赢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;游击战</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸君，我兴奋起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打天下易，守天下难</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬：飞龙骑脸怎么输？
神：嗯嗯嗯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛把败犬的这个身份用到了极致</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条应该回：我可以拉着彻一起睡懒觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神：“优势在我”</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正宮の余裕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正宫的从容</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有竞争力 </p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;自从幽子名字出现后，清野教祷词就变异了，教义也形成了分歧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在一切之上是她，神他娘，清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝世美少女的对手只有绝世美少女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神上之神，清野幽子[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我真姬难道没有排面？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，诸位，我们该搞个神母教</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，超越所有一切之上的是她，我的圣母，清野幽子（改进版bushi）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边和清野的默契，晚上渡边努力让美姬第二天起不来，然后明天顺理成章和清野约会，计划通</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡觉
睡觉
睡觉
美姬啊美姬，你怎么能如此堕落，从明天开始早起
睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八月二日，来轻井泽的第二天
九条美姬“死活不起床”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边和清野的默契，晚上渡边努力让美姬第二天起不来，然后明天顺理成章和清野约会，计划通</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬也加入胡适豪华套餐[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了和神每天独处，小渡边肯定会加大力度的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡觉
睡觉
睡觉
美姬啊美姬，你怎么能如此堕落，从明天开始早起
睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典复刻：美姬在睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻宣布对此次事件负责[fn=9]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说这会不会是渡边故意的？为了独处？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚上过度劳累，工作好忙啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;信息量略大</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬在工作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬！我也想要这样的姐姐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一切都是渡边彻的阴谋[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐上弟下？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;干姐姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你见过凌晨四点的洛杉矶吗.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是彻的姐姐陷阱[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的诡计</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬！我也想要这样的姐姐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车车，好快的车车

余：你见过凌晨五点的天空吗？我见过！（自豪脸）
先生：这就是你上课睡觉的理由？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬在工作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不正经</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个姐姐，他正经吗？</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;...摄像头，拆，懂？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;
睡觉＞渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;困觉姬今天也如此慵懒[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：渡边是什么东西？我要睡觉不要臭男人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像我大二上早自习的样子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像不像周末决心早起学习的你？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇，好可爱</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一年后
凛：是我错了，我要为这件事向美姬道歉[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到绝世美少女早上一起起不来渡边又不在中间所以互相贴贴（好耶）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在的神都不知道美姬晚上要经历什么[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你上你也麻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;磨镜子？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到绝世美少女早上一起起不来渡边又不在中间所以互相贴贴（好耶）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神啊，等你和渡边一起睡了，你也起不来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一年后
凛：是我错了，我要为这件事向美姬道歉[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波啊，这波是九条下不了床，渡边也还是处！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波渡边处男在大气层</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;单纯的神，是你太低估渡边的体力了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野大胜利</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻：短暂的机会不会改变什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以，趁着这个机会再来一次“就当他们不存在”吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画——《美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬在睡觉，美姬还在睡觉！清野偷家了</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《未闻楼语》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越是删掉的评论我越想看！！！！！挠心啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1到13楼呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：但是因为一个微小的契机成了我永远的失误</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到清野if线[fn=31]</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;穿裙子怎么骑车？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书友技高一筹
凛还是太连清耿直了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该选择跑着去的，这样就变成渡边背着你去了</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我看成了胸前没有一丝赘肉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种衣服就是配贫乳的…………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想起，以前说有的女同学啊夏天穿着短袖，肩膀抬起来一眼望过去能看到隔壁桌的情况</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胸前也就只剩下漂亮的褶皱了（悲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;法式长袖白白衬衫好看啊</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;长裙好骑车吗。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美女描写眼</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神会不会有这么可爱的时候呢[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个咋样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最开始的时候，有问过渡边喜欢是什么，渡边说是会让你开心的想拎着裙子转圈圈，印象里是这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我心中的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;OMO</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;将就看吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人！上图！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以章节名就是八月的清野神，这都冠名了还不乱杀？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种描写，让我想起了朱自清的荷塘月色。</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：瞎编的。
高情商：没见过，但所有人一听，就觉得那一定很漂亮。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要是有他一半水平，至于混成今天这个样子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;落霞与孤鹜齐飞，秋水共长天一色。一听就感觉美不胜收</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就像凌晨四点半，看到牡丹花未眠。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边好会啊</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;满分就是8分哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;one eye fake，zero</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学霸高端对线局，难搞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果情话说的好听，那就说给她听</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻译：还不够，再多夸夸我[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高要求的神</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;五点就开门的书店？</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;無聊順手谷歌了一下，輕井澤還真的有TruffleBakery 這家店</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好像岛国跟排队有着不解的缘分</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻曾经说过在放烟花时让清野一人在门外，事后他很害怕，说过他不放心日本的环境，以后只要他和清野出去绝对不会让她一人出去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能分开哟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;「我只是想到什么，就说什么。」</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们无数次的提醒我，这本书我可能要重新再看一遍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不看评论都没发现这么多细节……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一次在烟花大会上看着清野凛孤生一人我就……后面爷忘了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻曾经说过在放烟花时让清野一人在门外，事后他很害怕，说过他不放心日本的环境，以后只要他和清野出去绝对不会让她一人出去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;dame</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打咩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了不浪费短暂的二人世界[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打妹德斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能分开哟</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;石之教堂不論裡外看起來都像一顆海螺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;江南老贼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弗莱迪出没</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;04.24，和sakura 去东京天空树。
世界上最暖和的地方在天空树的顶上。
04.26，和sakura 去明治神宫。
有人在那里举办婚礼。
04.25，和sakura 去迪士尼，虽然鬼屋很可怕，但我一点都不害怕。
因为有sakura。
最喜欢sakura了</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可颂面包就是牛角面包[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可颂面包人 看这书的诸君谁是博士？</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哦嚯，那些小姐可是因为信仰不洗澡的脏鬼喔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;靠，好不容易忘记薇尔莉特.伊芙加登的，可恶啊啊啊啊ﾍ(;´Д｀ﾍ)</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;五点书店开门么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吟唱走起，最特别是她</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶啊水字数还跳脸</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;惭愧，我只喜欢看小说，对于文学名著有点难以接受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话我到一个地方看见书店也喜欢进去溜达一圈。到也没多喜欢看书，不过一旦开始看了，肯定会心无旁骛的看完。这习惯也导致我不太愿意看新的东西。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊……我也喜欢看书，但是旅游的时候却根本想不到去逛书店</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他俩简直就是修道路上的道侣，心意相通</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，每次出门旅游其实我都想跑一趟书店，但因为不是自己一个人去，所以也就想想而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻译：和美姬/凛一起看假面骑士是一倍的快乐，而叫姐姐/看书这种两人都喜欢的就是双倍得快乐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻译：喜欢的人有着共同的兴趣，实在是一件美妙的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叔也喜欢看你们[fn=31]</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你自己想想，当时你看到书店想的啥[fn=33]</p>
`;
default:
			return '';
	}
}
        