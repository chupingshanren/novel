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
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦哦哦哦哦！加更了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱👄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;决定好了，等完结再宰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是追更了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我艹 这么快？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就离谱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;关键词提取：和，两位太太做，渡边彻，很舒服</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大学网球老师说，他出去接单陪老板打球，给老板们喂球，一小时至少几百</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻让太太们得到了充分的享受（实话）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们说的球是那个球吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;控球男人必备技能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边控球一流的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打球的手感</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊，渡边的腿好棒！！prprpr</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟两对母女折腾了一上午（也是实话）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满腿都是脑子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开心吗？我不信，除非让我也试试[fn=32]</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个运动是那个运动吧，一定是那个吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太慢慢体会到了彻的厉害（还是实话）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伸介体验过后告诉了太太，太太表示不信要亲自上阵检查</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车🛻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太慢慢体会到了彻的厉害（还是实话）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边君……不以为然……慢慢体会……九条太太面色红润……畅快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;面色红润，畅快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;！FBI OPEN THE DOOR</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦的隐喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个运动是那个运动吧，一定是那个吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车车，好快的车车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这描述不太对劲啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑了，太太还记得门外偷听不</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我黄了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错，全能，能吊打你们四个</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说全面点，渡边只是身体好，智慧强，艺术细胞好……这nmd不是超人是啥。肉体，精神，灵魂，这三点都拉满不是超人是啥啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指尖宇宙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只是学过一点钢琴和书法罢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我只擅长唱，跳，rap，篮球”渡边彻说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪有什么全才，我只是都会亿点点而已</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太好了，大家一起绑双马尾吧！[fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马估计听他的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1，2点智力估计绝大部分的动物了，毕竟正常人才5点智力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这马，是母的那种吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赛马娘游戏！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个马，它正经吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这技能依稀记得有出现过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我像骑这种马：骉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑话，我渡边天天骑马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你当马？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马估计听他的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼太快了吧?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太好了，大家一起绑双马尾吧！[fn=35]</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥最爱撒谎了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;悠悠！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱撒谎的东京人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也就诚实这一个优点了</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;男人不坏，女孩不爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特别是他那双手和眼睛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老实人可没法让提款姬天天起不来床[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬：老实人可界不到女王的盘</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;迈出第一步</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;慢慢的观点一致了</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻为了让两人和好付出了一切
太太们还不赶快谢谢东京帅哥[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼快走了吧[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一起上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到双飞</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我想一次欺负四个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边同时欺负九条清野  ×
渡边同时疼爱九条清野  √

怎么，你们不想看?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;triple</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到美姬给神推屁股🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大被同眠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到大被同眠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到付费内容</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盖浇饭！双份！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接快进，然后vip收费内容，想看她们两个在渡边床上针锋相对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都要做坏人了，还只欺负两个吗？[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都好快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想一次欺负四个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边同时欺负九条清野  ×
渡边同时疼爱九条清野  √

怎么，你们不想看?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子你的发言有点危险啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得OK</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;床上欺负，床下和好[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;同时欺负你们四个也不在话下[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到3p</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;两面包夹芝士！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们联合！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻之心，路人皆知</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;请务必这么对我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的一滴也不剩了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扎心了！我的美姫，你再这样我也要扎心了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求求了，腿抬一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是我是我啊，我的美姬</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;鸟儿；你好像有那大病</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这句话是不是出现过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弱小，委屈，又可怜[fn=19]</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好可怕啊，杀人，还要猪心？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完了，我脑补了黄猿的说话方式，回不去了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还说是假话？[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瑟瑟发抖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈，凛酱卡哇伊</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;被偏爱的神</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我怀疑一楼是暮山的马甲，整天和渡边基剑[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬永烧火棍戳了渡边彻的屁股。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我自带棍子。我能戳吗</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;拔剑吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🤺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹，卖报今天也说了句来，你们是要击剑吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来骗！来偷袭！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还以为要说一声“H！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来♂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;锐利的眼，锐利的剑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;击剑！</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今晚不要想上我床啦</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我态度有问题
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我错哪儿了?我错哪啦?我哪儿都没错!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不仅怕你，关键我现在怕你妈啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：你在外面戳我，我在家里戳你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要道歉的快就不会挨打[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对不起我错了下次还敢</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;皇后成了笼中鸟，一点戏份都没有[fn=39]</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不得不承认，乌鸦的文笔真的很棒，短短一句森林染成茜色，就将林间将近傍晚的美景展现出来</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可以会，但没必要[fn=31]</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;以渡边的头脑，估计看到之后就知道该用什么姿势，该用几分力气了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虚假的渡边吹：神川高中迷妹
真实的渡边吹：清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为马上就会了[fn=31]</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;年轻的太太早上出来倒垃圾.... </p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;两位太太不正经的时候还蛮可爱的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正好抓来煲汤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这有什么好怕的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神奇的五个楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面五个楼的蝙蝠侠全被小丑干掉了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一觉醒来全是蝙蝠侠？</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么没有awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太可爱了吧</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大御所和玉姬？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都能被书友找到，这届书友可真细啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肖战😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自行车不都一下午的事么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我大一因为从宿舍到教室要跨越东西校区，太远了不得不骑车，然而我从小没学，所以十一假期专门练了两天，，，在个没啥人的小道上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成大人开小车，眼花了绝对不是我错！</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;雌小鬼🥵</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻吉，牙白，库内</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲酱太捧了，捧场专家啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;斯库依</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得原型是乙坂步未</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉是莲华和康娜融合体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻吉哑巴库奈！[fn=31]</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;作为清野党，我觉得很甜，像现在渡边彻说着谎话，但神在一旁只是静静的看着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千里眼是那章的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还千里眼都是真话[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咋想的啊，只是清野不喜欢这种教小孩的方式啊[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正常人都知道是逗小孩玩的玩笑话，但是听出了真话，就这点反应？？？？？？不愧是最懂他的女人啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，不会是真话吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是谎言但是懒得说吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话不是谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马萨卡，不会是真话吧</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明明佳织也会升到二年级的吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奈叶是哪个小学来着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喵帕斯第一次经历和朋友告别[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圣女修道院</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到
圣女小学扛把子，横卧东京过江龙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猛龙过江</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;高爾夫球比賽不見了。</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;平家物语和源氏物语。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本皇室祖传技能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喵帕斯：咱可认识一条萤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个源氏会拔刀吗，就是能斩出龙的那种</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大头和小头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佳织原型是夏海海吗</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;花田已经不配拥有戏份了吗？（大哭）</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;时间加速ing</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;个个都是带孝子[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野家的就当他死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我一直挺好奇，清野岳父和九条岳父怎么从没出场过</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦和国井击剑吧</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦啊 一轮游啊。为什么不让主角上呢，挂有高低，但也不算滥用吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦天天给自己加戏[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强烈建议给乌鸦加个配角</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好了 你们被至高意志强化了 可以放心的去送了</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上改成里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白日宣那啥[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做爱做的事</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为啥想起了藤原教会长唱歌的画面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杰克给肉丝画的那种吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以的讲过美姬画画很厉害</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;双倍快乐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬吃醋了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐扮老师岂不是双倍的快乐？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：有真正的老师在，不需要和我玩师生吧
高情商：别叫我老师，叫我姐姐大人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玩师生吧应该是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhh</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;此时，麻衣学姐正在赶来的路上。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐默默举起了手，并一把抱住了渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，您才是我姐姐。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉是老师，麻衣是姐姐。九条是妹妹。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬姐姐幽子姐姐[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想到了樱岛麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此时，麻衣学姐正在赶来的路上。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐默默举起了手，并一把抱住了渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的学姐你何时才能出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣有多久没剧情了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是学姐！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;知识点，现成的指清野凛。R桑和T桑同一天出生，美姬比他俩要小。</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;求生技能点满</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个颜料有石楠花的味道吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事，明天就会变成全是石楠花的气味[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个颜料它是什么颜色？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个颜料它正经吗？</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;写的真好。</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;记得以前的美姬要求渡边和她在一起的时候不能看别人哈哈</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只要我忽视他们，他们就喂不了我狗粮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：只要我不去看，狗粮就不存在[fn=31]</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;共同的美好回忆是爱的基石
从根本上来讲彻已经成功了
剩下的只需要一个契机</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那兵库北的笑容，都没你的甜[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成人不自在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们的快乐，并不相通？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京的暑气，莫非东京很热？[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兵库北[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段写的好有感觉啊</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我不李姐，我今天用电脑端看，电脑端是结城，手机端是九条，我不李姐，这是为什么</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“清野是你的也是我的，但终究是大家的”</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是画了个清野猿？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 猿神v2.0</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么三个一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萨特型角色塑造，故意留的弱点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻让太太无法呼吸（又是实话）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面几楼都没了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画出了个火柴人凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈嗝哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女猿人</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;烤鸡翅～我爱吃～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：我爱的是神灵魂[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来你也会抽象圣经啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接把本章说里的猿神画出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前渡边美术课画了一张类人猿</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;意思是不喜欢美姬内在？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太熟练了，不愧是能开后宫的男人，我阿巴怪愿称你为最强</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最上川</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蝉時雨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夜半狐鸣:大楚兴，陈胜王!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为当时有人在盛夏把橘子味汽水的少年日出蝉鸣[fn=32]在现场，我是鸟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好秀啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这比喻…够形象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“窃格瓦拉”</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太鉴了</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;【时夫17岁，吾16岁】这都被删。不过话说回来，这仨的17.16岁真是恐怖如斯。</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊！满足了</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这波是你中有我，我中有你，渡边在第五层[fn=31]</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;姐，太对了姐。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没皮没脸，没羞没臊的人[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句没绷住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话糙理不糙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;透过现象看本质</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得看谁骂的呢，姐姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没皮没脸，没羞没臊的人[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精辟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尤其喜欢被美姬骂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一针见血[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐，太对了姐。</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边画的是资清野凛？渡边不是只会画猿人吗……</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这段的重点，太太受不了女婿了[fn=43]</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为什么不是桃子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬: “嗯？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把葡萄塞他手心里</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;下午就可以继续丢脸</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;沙琪马？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑什么？🤔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈骑马</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不是葡萄酒</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我记得白兰地是白酒？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Calvados</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有形象没有台词也没有配音的卡尔瓦多斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来白兰地是苹果啊，我还以为也是葡萄的一种呢[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有些酒，进了酒厂之后才出名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不懂就问，是那个贝姐的舔狗，被赤井秀一干碎的那个卡尔瓦多斯的原型酒吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表在此</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我寻思现在马也不贵啊，一匹普通的矮种马也就五六千块，稍微好点的才一万多，在乡下养个这玩意不比买车便宜多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穷人都是骑着贵妇当交通工具的[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是贵族和有钱人吧</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不好意思，兽语八级就是可以为所欲为</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边能控制马，谁骑得过他啊……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐴也听他的→_→</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要快进到俺的爱马了吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑马是真的不好玩，不如开车，本人体验过</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这挂逼有个命令能力啊，骑个马算啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胯都给你顶烂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成了野猪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马骑马骑马骑马骑马</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在外面更刺激[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马与马傻傻分不清？不知是马骑了我，还是我骑了马</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;诶嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要打算带回去过美姬试试吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今晚带回去给美姬试试[fn=32]</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不知道为什么我脑海里第一个想象出来的样子是穿着骑马服戴着帽子的野兽先辈....怪了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看过，确实马术服确实帅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老实说，马术服真的很飒很帅气</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实都是sp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要打四个</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;公马母马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边君，快来骑我













送你的🐴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：赶快骑上来试试吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《关于我的神大人的妈妈送我🐴这件事》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;错别字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我生日准备送你🐴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边君，这是我给你准备的🐴</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;眼前这绝色美人是谁？
是我黄金船哒！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是我Goldenship大人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皮皮船来打</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种马？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是我Goldenship大人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;群里的图[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白马非马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小心黄金船，这蠢美人喜欢尥蹶子，被她踢死的驯马人不计其数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白马？定叫他有来无回</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提到白马，很难不想到会所</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我心骑白马呀～走三关～
我改换素衣哟～莫凉欢～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼前这绝色美人是谁？
是我黄金船哒！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一猜就有人发这苏妲己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄金船</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白马，定叫她有来无回</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这匹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皮→匹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得群里有图啊，今天的，had  gkd</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这匹马，错别字哦</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;头至尾长丈二蹄至背高八尺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《关于我成为九条家女婿，却被清野家太太送了一匹白马的故事》</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;开大车，骑大马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;掉茶碗里淹死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不如我的斗气化🐴</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阿哈尔捷金马就是汗血宝马</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;才五吨，还不如渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夏尔马不是一般用来拉车或者拉犁的挽马嘛？</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;理查德天下第一。抱歉走错了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弗里斯兰马天下第一！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一定就是人中赤兔，马中吕布中的马了</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;智力1-3就行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平砍连击带顺劈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“能征服我吗，渡边君？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“能征服自己（老婆们）的妈吗，渡边君？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻:我可以让🐴嗨到停不下来[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一全抓走都不带亏的。</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;会说话就多说点[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会说话就多说一点[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，三个一楼，起点特色[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;11142567，这顺序...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三个时间不一样的一楼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看我是不是一楼。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至今我们仍未知道那天怎么会有三个一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三个一楼?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是神的傲娇吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会说话就多说点[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会说话就多说一点[fn=58]</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来了 看看本书中的马智力有没有二的时刻来了</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边魅力，无🐴可挡!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里的人全部都抓走，可能会有错的，但隔一个抓一个。绝对会漏掉不少</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬永远的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的美姬越来越温柔了[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉美姬越来越温柔了[fn=21]</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京打更人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小马拉大车？我没问题（迫真）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小孩骑大马</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边驮着马跑可能比马驮着渡边跑还快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你干脆驮着🐴跑吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不做人的渡边彻，变身渡边野马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马：虽然我不是人  但你是真的狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐴：你再骂？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饿狼和警犬侠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边驮着马跑可能比马驮着渡边跑还快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怀疑渡边比🐴跑的还快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻:小心不要把🐴弄坏了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐴:我今天算是见了鬼了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;233，有点怪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你干脆驮着🐴跑吧</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边也就是用两个上肢的力量托举着吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夏尔马是巨型马，耐力特别强，不过爆发力不行。所以不会出现在战场，也不会出现在比赛场。举个例子，泰森肯定跑不过刘翔。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夏尔马900kg轻轻松松</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对对，就是这种不经意间装的比，多来点孩子爱看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赛事霸主级的了吧，九百多公斤还神骏不臃肿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一匹马壮的得有一吨左右</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么情况？只有一个？</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还有外星人和未来人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;钞能力战士</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真姬太太：累了吧，让妈妈来吧
美姬：不要亲妈妈，不要亲妈妈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九折</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你很懂嘛太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高速翻车不在少数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，你把握不住，让妈妈来，妈妈把握的住[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙8个一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打桩机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巨龙冲击</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到女朋友的妈妈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷听过的人说什么呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么这么多1楼？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你去试试不就知道了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九折</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬太太：累了吧，让妈妈来吧
美姬：不要亲妈妈，不要亲妈妈</p>
`;
        case 175:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;🐰[fn=54]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;（命令）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这车祸强啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙 直接没了29楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们仍未知道这里究竟发生了什么</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，乖乖加更。（命令）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们家乌鸦智力只有2
本书得乌鸦起码是个8
这技能还得升级</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马智商可是堪比四岁小孩的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大师级命令这话就是对人说的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马智力不到2吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;半人马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝贝是能乱喊的吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;（劣化）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等等，有一个问题
渡边骑马，叫马宝贝
渡边骑美姬，叫美姬宝贝
那么，马不就等</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再不听话，你🐴就没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:嗯？谁是你的宝贝[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇，不装一下的吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们家乌鸦智力只有2
本书得乌鸦起码是个8
这技能还得升级</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放群发，群番外，番外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;命令的范围是啥来着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，乖乖加更。（命令）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好些技能不能对人使用，不然就只能在小网站欣赏了，嗯……



听上去好像也挺诱人的，发群里发群里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝贝儿，听话，别乱动，快一点，低一点，抬起来。整个人都不对劲了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条老公、清野老公、麻衣老公、小泉老公还有太太（×2）老公晚上好。看到麻烦点个赞，不是就算了，路人无所谓🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乖乖听话，让我康♂康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话咋这么耳熟呢？昨晚对美姬说过吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;催眠.avi</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到囸马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也能修罗场是我想不到的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬：“以后不要叫我宝贝。”
渡边彻：“好的，宝贝！”</p>
`;
        case 178:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祈祷
最特别是她，在所有一切之上是她，我的神，清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隔壁片场的借来用用
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来是一匹蠢马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹，点错赞勒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没了，没了，唉，要是这个技能再升一级，我就让乌鸦给我加更</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和作者一样短[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白天干儿子，晚上干儿子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接下来是我小母马的会合哒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好歹试探安抚一番，给旁人做做样子也好，不然难免引起怀疑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隔壁片场的借来用用
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各位，我又来骗赞了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神啊，降下你的圣光吧，烧死这群可恶的异教徒，啊，我也是异教徒？那没事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每日祈祷
%最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美少女大师（捏他宝可梦大师）：渡边处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冷知识：当你发现章说错乱的时候，有很多一楼的时候，打开目录→长按本章节→重新下载，可解</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一堆一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;7条评论，点进来一条没有，很好奇你们都发了什么⊙∀⊙？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此时麻衣学姐还在赶来“偶遇”的路上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊，要追更了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面楼层呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条老公、清野老公、麻衣老公、小泉老公还有太太（×2）老公晚上好。看到麻烦点个赞，不是就算了，路人无所谓🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论为啥都被删了，难不成你们要看渡边御马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赛马娘联动（</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完全不够</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哒咩哒咩，哒咩呦~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，我也蹭蹭你的脸颊，写的真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不用翻了，没了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是我，晚安啦各位，晚安[fn=45][fn=45][fn=45]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要发动我的技能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祈祷
最特别是她，在所有一切之上是她，我的神，清野幽子</p>
`;
default:
			return '';
	}
}
        