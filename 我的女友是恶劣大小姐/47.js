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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;函馆的第二夜（×）
函馆的第二日（√）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一日二夜
我又回来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;函馆的第二夜（×）
函馆的第二日（√）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;29</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一天一个，四日三夜。我没算错吧[fn=61]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今晚不知人间几何</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶✌🏻！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太快了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲鸭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师冲鸭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;8</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;4</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;单身狗之瞪！</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，都快完本了还在惦记着那几个老太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;波子汽水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一样的现充和后宫属性</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就没人知道这本轻小说真厉害第一名《弹珠汽水里的千岁同学》嘛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;波子汽水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后被老太太们吐口水？</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一个球孙子，两个球重孙子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有种兔耳朵帽子，平时是垂下来的，一捏底下的东西耳朵就会竖起来，很可爱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咦，这是谁的老婆呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新垣结衣.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成披麻戴孝了[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡哇伊伊伊</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;缰绳？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是很可爱好不好！你们到底在想什么！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好玩，有多好玩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻因为这样那样玩起来很好看才买的这个帽子</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吃饱了好上路啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈，你吃啊</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;停车坐爱枫林晚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈，你再拖，这一章又没了</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚开始天天被欺负，再往后天天欺负</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;体 力 弱</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京女人好坏呀，都会欺负gege，不像我们北海道的，只会心疼gege</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京，斯国一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京，好厉害</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：系统你清高！你了不起！你把我带到御茶之水，你知不知道我受了什么样的欺负！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;磨秃了，也磨强了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您现在变强了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：嗯，现在她们一起欺负我
女服务员听闻，先是一愣
然后缓缓拔出了放在桌子上的水果刀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在是另一种欺负[fn=31]</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又炸一个楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是 身影 吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生一個是怎樣？打錯字？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是身影吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;身影？快进到青奈生一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生一个是什么意思？[fn=51]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么意思？生一个?</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是没有用，而是太多了</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;直接快进到这里</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿，有你疼的时候</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不想我[fn=28]我只会心疼geigei</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肯定疼，好好的疼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然我不止一个女朋友，但我的确很心疼女朋友</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;歪了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;闻了闻，是松前绪花的味道[fn=31]
</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬恐怕是难得可以早起一次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阵亡的兄弟们都说了什么[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;友善发言，老色批们？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1.4.6楼兄弟阵亡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神秘消失的一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱女人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，美姬，我的美姬。每一天都要抱美姬三次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;占楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;居然没人？那我来：渡边肯定下药了！</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;辐射量超标了，你看看系统有没有抗辐宁。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早起空腹吃海鲜，胃穿孔有一手</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看来，今晚不到12点，不能叫满满的一天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三个一楼[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;进来的请不要乱叫 “捉虫: 行程”
让老司机来告诉你们为什么:
今夜，是小泉“形成”渡边形状的一天，
所以这个词用在这没毛病 [fn=24]




</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;行程吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;行程滿滿的一天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;行程</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;鮟鱇鱼？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长的越丑，判的越久</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丑橘能吃吗？
丑女能生吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用核废水养的？</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咱居然要用这种方式出场嘛？咱不愧是世界第一小学生！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲酱竟然成了计量单位！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲，好厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帝王蟹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咱居然要用这种方式出场嘛？咱不愧是世界第一小学生！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲华121 cm，差不多60cm的螃蟹腿，龟龟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么长，蜘蛛蟹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得小莲很可爱啊，很多章没出场了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是蜘蛛蟹吧，最常见的海鲜之一了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲酱竟然成了计量单位！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;福岛特产？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：？？？</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;蛙蛙那么可爱，为什么要吃蛙蛙，气抖冷，我的泪水不自觉地从嘴角流下来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日元的价位，我一向是直接除以100换算成大约的美元来判断的...</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;75很贵了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;便宜啊</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;40CNY，在羊肉串都达到10元一串的今天，我竟意外的觉得不贵？😄</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我只是一个路过的卡面来打</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;桀桀桀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;痛风警告</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗨嗨嗨！</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;通风套餐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看着手里早饭他不香了。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开车开车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车车，车车，好快的车车，啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又粗又长又黑[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是我想污了吗😳</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;站起来，不准跪！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跪到被子另一邊，正坐著，三指拄著草蓆恭謹地行最敬禮。同時說：“今後承蒙您照顧了。小女子不才，還請您多多疼愛。”</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，真好吃[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不亏，真不亏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好吃，真好吃！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呐呐呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来个配音！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是真不想多想</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;深夜卖鲍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;目的？能有什么目的，肯定是渡边上次考试不好，老师帮他辅导作业呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当我看到这里的时候，页数只剩下五页，乌鸦，别学断章那一套啊。[fn=6]</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哇塞～超懂的！渡边彻</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;记得带头盔</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;事情未成功前不动声色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老渣男了</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;去玩几把。</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师，你书拿反了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了，太紧张根本看不进去</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;添加红色花朵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喝茶不是更睡不着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少喝点，别到一半要撒……好像也没啥关系?</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻很有精神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：怎么玩？在哪玩？都玩哪？玩几次？玩多久？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边: 学姐 ，玩吗？
学姐: 彻，好玩吗 ？[fn=33]</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是不把晃子和美雪当外人啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久美子，我的久美子[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芳心纵火犯</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就你皮，是不是还能领悟缠绝练发呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你拿木叶来烧火，我拿老班章泡茶叶蛋，这能一样吗🐶</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;8点智力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高，实在是高，果然呆萌才是最高境界</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=46][fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看过失落园，看到大雪旅馆情侣的场景就怕怕的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一定要在清野前面</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻直接降鱼san</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;抱（H）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老手啊，佩服佩服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，阵亡了九楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面八辆车都翻车了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还是年轻，赶不上车速</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前发生了什么事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;巨大清奈喝水</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;被抓上来了的，能有多聪明？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;25cm</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老人与海?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实也就20多公分长的一条吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我有挂</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嚯嚯～来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了，他真的来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：森涩，我想透…</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;fsn看过吗，士郎就是以我为原型的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;网文原型集中地</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《飘飘欲仙》看过吗？就是以我为原型。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武道宗师看过没，就是以我为原型</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《从零开始的异世界生活》看过没？就是以我为原型写的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问道红尘看过吗，就是以我为原型的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我加载了恋爱游戏看过吗，就是以我为原型</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大奉打更人看过吗，就是以我为原型</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《门卫秦大爷》看过吗？就是以我为原型。</p>
`;
        case 179:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;任由</p>
`;
        case 181:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;欧尼酱的话，可以哦[fn=4]</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;主要是想让澈握住她的手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;象拔蚌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;钓电鳗吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个鱿鱼，它正经吗</p>
`;
        case 183:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前四楼呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了！</p>
`;
        case 184:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;给我康康！（震声）</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真好啊 他和她们的故事 虽然快要完结了 但是美的让人很心颤啊</p>
`;
        case 187:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这句话是青奈第一次附身渡边时候，从镜子里看到渡边样貌时说的话。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲！！！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啥都不管，渡边就是万年处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说删评，楼层都乱了套了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;删了好多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢乌鸦桑，人在公司坐立难安。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，青奈老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原本的五十多条评论呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐知道彻的体力，青奈第一次肯定无法满足渡边，学姐下一章会不会加入进来？

为渡边释放！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她
在所有的一切之上是她
我的神
小泉青奈！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再有几章就完结了，希望不要翻车[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前边几楼呢？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都要完结了，我还缺你那点起点币吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯一每天追更不攒章节的书，说不定哪天就没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完睡觉💤做个好梦[fn=52]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉：这种好事应该让未来的我来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲师逆徒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话是青奈第一次附身渡边时候，从镜子里看到渡边样貌时说的话。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉小泉小泉小泉！芜湖！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟这俩出来约会总感觉不够甜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲！！！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉这章好急，可以稍微慢些，写细致些。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦，阿姨又开始洗铁路了 [fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对师宝具……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这……这谁顶得住哇[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，就这！就这！我是缺那几万字钱的人吗？[fn=47][fn=47][fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们等了一整天就看了四页</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=43]写的真好，月票奉上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;24楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈，我的青奈。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这外面可是显示的15条本章说呀，怎么就四个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这🐶，我好酸。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等老师等了好久，终于拿下一血</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到学姐永远滴神！快进到1v5大乱斗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算这样，渡边还是处！！！[fn=64]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？也不过如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人，杀了我给两位助助兴！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至于为什么，只能说懂得都懂[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今晚看的人是幸运的，明天也许就没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尽管如此，渡边彻是个什么就不用我多说了吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我差你这点币吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;歪日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;且看且珍惜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想了想，麻衣和老师都是在宾馆成为女人的，那么美姬和凛也是在宾馆吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢这种剧情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢这种剧情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完全不够看啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛牛要炸了！V2.0</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不管，渡边就是处，就算是保持了半分钟的处也是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以渡边依旧是处男🌚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所谓偏爱，不过就是，明明对你每月月初用光请假份额感到不爽，但还是将月票投给了你。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自我攻略，老师开始白给了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我说过 我不闪躲 我非要这么做</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;交浅言深…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师要上了 要A上去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所谓偏爱，不过就是，明明对你每月月初用光请假份额感到不爽，但还是将月票投给了你。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就是单纯的好奇，这个深层关系，到底有多深？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉: 让黑夜快点降临吧 [fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自我怀疑，自我攻略，自我白给。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;深度連接的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到晚上关系迈向更深层[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自我攻略，老师开始白给了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到晚上</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快进到魏文帝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做出了决定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;開始白給</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉青奈深吸一口气，今晚老娘必须成神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要白给啦！[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吸气。静心
今晚是我的回合</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;鱿鱼:“@%★《☞#:)”</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放啥鱿鱼啊，放wifi密码，贵族气质</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鱿鱼我也吃不来。。</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;痛风患者心肺骤停</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就有没有我想的那个盛宴，，，
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想啥呢都  是不想渡边去其他地方旅游的第一次和别的女人一起  提前过了一遍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然是女体吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是我的错，主要是隔壁卖报的一直“海鲜海鲜”的，把我带歪了[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波啊，这波是美姬的胜利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只是个海鲜商人而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;警官，你相信我，我只是想感受一下祖国各地的风土人情，就是我个人偏好海鲜而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Luo ti 盛宴？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的脑子里冒出了莫名其妙的话语，“我就是个吃播，你凭什么抓我！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北海道啊，都满脑子什么东西啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就有没有我想的那个盛宴，，，
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬好计策</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;面朝大海，春暖花开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬是东京的海鲜饭[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想啥呢都  是不想渡边去其他地方旅游的第一次和别的女人一起  提前过了一遍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车车，车车，好快的车车，啊～～～～～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;海的味道你知道？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会是我想的各种方式吧……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲍鱼？</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边以及不晓得晚上会有什么样的大礼即将到来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实 家在惠水区</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实，无锡也有个惠山</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦总喜欢用那一天，听起来像回忆录。</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不穿泳衣[fn=31]</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;两个闺蜜确实是够好的</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;生气了？[fn=4]
没有哦🙄</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为什么我也这么说，得到的却只能是冷战[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真臭屁。</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;床尾和吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一定要交流呀，你不说我怎么会知道你要波回去反打呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沟通，不逃避，是解决问题最好的方式。
六年来靠着遵守这个约定，吵架从来没隔过夜[fn=59]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;交流除了恋爱在友谊方面也很重要，又不是每个人都是心理学大师能猜你心里想了什么，不交流别人怎么知道你是不是自愿的还是被迫习惯的呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;根据我看百本女频的经验，男女主矛盾8成都是因为交流</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用什么交流？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请打开麦克风交流</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边亲自教学[fn=31]</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阿这，我就喜欢咬耳垂</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;感觉整个身体要燃起来了</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一直觉得青奈很大，好家伙原来和我一样的年纪吗。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;非非:勿cue</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年衣帽间就没有？（指指点点）</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;地质勘探员：？？</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小泉冰冰，笑一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;漂亮的记者我都爱看，我是lsp</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哪有什么岁月静好，一直都是我在负重前行 -我猜美雪至少有F吧 [fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;负重爬山蛮不简单的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;走路导致肩膀酸痛🐶</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;痛风预定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只是个海鲜商人罢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我整整吃了八年的鱼，八年。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是大海的儿子 ，传说中的海王，可不就得顿顿吃海鲜吗？[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今晚还有[fn=4]</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;无良印品店…！我似乎发现了了不得的东西呢</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;玉子家的</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;雾霾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五郎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中年的村上[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开一个中年男线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学人精</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吸烟吗？来，一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这男人难道是不二雄老师[fn=58]</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;強い、ガソリンみたいね！美味しい！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铜锣烧爱好者可是真姬哟（太太！）
凛梦可太🌿了，我第一时间想到一万元巫女了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不带回去给哆啦凛梦，这可是铜锣烧啊！</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;下意识的以为跟中年男子一起去看了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;进</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;三大夜景的另外两大是香港维多利亚港和意大利那不勒斯的夜景</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搜了下，大概这样</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;冻疮警告⚠️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发现贼烫</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就这就这，我一点也不酸</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开火车！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶来晚了，那小泉老师捂住我的耳朵吧[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐好可爱
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Ok那我来捂住麻衣的耳朵[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣，我的麻衣</p>
`;
default:
			return '';
	}
}
        