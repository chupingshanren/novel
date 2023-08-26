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
<p>&nbsp;&nbsp;&nbsp;&nbsp;好短</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我想到了村上也曾和佐仓母女去轻井泽的别墅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱你，爱你，爱你，我爱爱爱爱爱爱爱你，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：姐姐真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嚯嚯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于更新了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好快啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们怎么这么快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ㅍ_ㅍ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么快？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羡慕起点有房</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们这么快啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; ？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我很好奇，乌鸦能在活动内更到316章么</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有奥特曼就足够了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？雪风</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;从来没信过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我倒是四五年纪才知道圣诞老人不存在的 ，很感谢父母对我童心的守护</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我试过了 看得挺清楚的 医院的信号很好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看大哥哥你啊，就是揣着明白装糊涂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是你吗 阿拉垃圾君</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雌小鬼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道为什么我突然要裂开了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您也是独角兽吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变态可疑分子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你再骂？（恳求）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给个配音行不行，秋梨膏！要日文的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：哥哥我啊～最喜欢____（填空）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想不到你是这样的渡边彻！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看大哥哥你啊，就是揣着明白装糊涂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小妹妹你观察得好仔细啊[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我试过了 看得挺清楚的 医院的信号很好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边如果会到十年前见到小美姬和小清野她们可能也是这样</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该是“骑着”吧</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Diagon Alley. </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是因为有了魔法少女，这普通的世界才变成了魔法世界</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实没毛病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可真水 这就一页没了[fn=15]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;魔法少女小莲</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清奇的角度</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;澈，我要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲酱也很可爱[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲，好可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲仰着小莲仰着小莲仰着小莲</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前后人设一致可以让人物更加丰满，可惜是对A</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;照应前面伏笔，之前提到过渡边认为凛是会告诉孩子圣诞老人不存在的妈妈类型</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神这是以妈妈的身份回答问题[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神，今天也击碎了许多梦想[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不圣诞老人存在
但存在圣诞嫂子(暗示)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那奥特曼一定存在吧！
如果你觉得不存在一定是你不相信光！</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小莲那么可爱怎么能不给她买？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给她买！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唔  有一个不得不买的理由</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;买卖买</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个世界没有奥特曼[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三观震碎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;失去梦想的愚蠢小孩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震撼莲酱一整年[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：咱的青春，结束了～</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：这事过不去了是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她有点像姬坂乃爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京的女孩子！都是这样的吗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂了，这是早熟幼女的战术啊
就和小男生会欺负喜欢的女孩子来吸引她的注意力一样[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早熟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这事没完了，哈哈哈</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小莲的原型是喵帕斯吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲超乖巧超懂事。
不愧是天下第一小学生[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂事滴小莲awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但可以花嫂子的钱💰  [fn=58]</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：真的吗？阿彻。（你真的偷看我裙底了吗，给我买连衣裙也在你的计划之中吗？）
渡边彻：真的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“红豆泥，彻桑？！”</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以你是站在滑滑梯底下偷看女孩子底裤的变态大哥哥对吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指哪里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这么承认了自己是变态大哥哥？</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;玛吉亚巴库乃！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦卡哇伊阔多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太喜欢小莲了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚想到…麻吉牙白库内…真的吗，不得了了，真酷啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来重点是礼物吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻吉牙巴库内</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明更像宫内莲华</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的人生都是些什么啊喂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看见不得了呢，就想到康娜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁来个康纳酱的图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦卡哇伊阔多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玛吉亚巴库乃！</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;保护未来的老婆，从我做起！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是一定要注意别挑太厚，不然会中暑，我有一个朋友就中暑了</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小新我知道，谁是线？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哐当哐当，新干线～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压布嘞 卡不嘞喏 亚不一下嘎
他ke亚不喏那卡诶 斯他阔拉撒
亚布卡拉波～你斯他阔拉撒
亚不嘞他 拉布嘞他 摸特斯他阔拉撒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新干线火锅！</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;轻井泽变成了下北泽[fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;臭 不 可 闻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瑞月兆丰年（意味深）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看满离</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;やりますね</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看满离</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段怎么这么臭啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;田所浩二，恶臭是用来形容他的演技的，我刚去查了，嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么看见田所你们都想到的是臭，而我却想到的是田所惠？！这难道就是lsp和屑的差距吗？[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这间贴怎么这么臭啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;24岁，是田里的老爷爷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压力马斯内</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有红茶可以吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一看就不是什么正经名字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好臭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没看懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满意地离开评论区</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;24岁，学生desu[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐 突 恶 臭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;地里的功课有在做吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压力骂死内（赞赏）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼哼哼 啊啊啊啊啊啊啊啊啊啊 啊啊啊啊啊啊啊啊啊啊_(:3」∠❀)_</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轻井泽变成了下北泽[fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;114514</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;臭 不 可 闻</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;错字，张大嘴巴</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小莲[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总之就是非常可爱</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;名冢佳织(确信)，这一刻，美游灵魂附体[fn=58]</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;震撼渡边莲一整年！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：阿巴阿巴阿巴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震撼莲酱[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：这个姐姐太实诚了吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲都被神说无语了，看来缺少锻炼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟出来走个流程</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;魔鬼の神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这里一下子把“乱花阿彻的钱”变成了“用回答问题赚了一个帽子”，顿时就让人容易接受了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：这个姐姐怎么这么喜欢问我问题[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛，严母模式全开[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛: “东京的旧称是什么？”</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真是个小机灵鬼呢！</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小时候果然是最好交朋友的啊，我小时候没啥怕的，和一堆人一起玩，大了社恐，认识的人都是班里同学和小时候玩的那一帮人，别人吃老本，我这算吃啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名想到香克斯把草帽扣在路飞头上那幕</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吃醋JPG</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像你妹妹似的[fn=58]</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为什么我脑补的画面是《闪灵》里的骑车小男孩</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喵帕斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，我的超人</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊，突如其来的美神糖，我好了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在一起，在一起，快当着渡边叫姐姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;百合yyds！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是吃这个醋吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？神不是和渡边一样大吗？而美姬不是比渡边大吗？怎么美姬成了R酱的妹妹？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一起叫姐姐大人的阴影现在在渡边身上找回来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噗噗噗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在一起，在一起，快当着渡边叫姐姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到了远坂凛和间桐樱，有一说一，春之歌樱的身材真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想看美姬叫神凛姐姐的样子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啦啊啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无时无刻不在的助攻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，突如其来的美神糖，我好了！</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这要是猪肉片子，我就以为是东北了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 昆布是海带吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;淦，半夜饿了</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原来吃了双份醋</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;给整破防了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给整破防了</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣跟我走吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给渡边一脚，神和美姬但是我的！</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怎么耍她了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前的妹妹只有妹妹只有美姬，现在多了小莲，小莲成了小凛的妹妹。渡边成了小凛的（ ）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？没懂…</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咱也要wujimo</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你在饭桌上你妈，你爸，你女朋友，你姐姐同时伸过来你给谁乘饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不会输</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前挣扎0.5秒都要被骂呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挣扎了一秒
心里真正想接哪个碗
和应该去接哪个碗的争执</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是想要和应该的区别，一个是本心，另一个呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不会输</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在饭桌上你妈，你爸，你女朋友，你姐姐同时伸过来你给谁乘饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真细</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家庭弟位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重点是挣扎了一秒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天津饭:羡慕不？[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强调家庭地位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉是个伏笔，没人评论吗？</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;现在的美姬发脾气更像是走个流程，已经没有一点当初的底气了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要确定没有人可以取代咱的地位，那可不随便浪？[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真可爱我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在全是情趣了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面所谓极限操作，自然会是这样的结果。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前是傲，然后是傲娇，现在只剩娇了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬的感情变化越看越像斗破苍穹的美杜莎[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赏你大腿吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在的美姬发脾气更像是走个流程，已经没有一点当初的底气了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;罚你舔jio</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要确定没有人可以取代咱的地位，那可不随便浪？[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波啊，叫被偏爱的有恃无恐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;才是你们废墟中唯一的信仰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边这叫做被偏爱的有恃无恐。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有种河豚律者西琳的感jio</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看起来17岁的真姬和33岁的幽子，平均一下正好25</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;25岁更好吧，成熟的大姐姐，17还是有点青涩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;25岁更好吧，成熟的大姐姐，17还是有点青涩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉是因为妆容和服饰，不同的打扮看起来年岁不一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇偶，17岁看起来25岁[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是十七吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看起来17岁的真姬和33岁的幽子，平均一下正好25</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说这俩是百合我也信呀！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;25岁比17岁更好啊[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了防止太太激怒，还是加起来25吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然大了8岁？太太激怒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是17岁[fn=39]</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;叫姐姐！</p>
`;
        case 178:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;急救包！！</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么看到三个一楼了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捏脸小分队（1/9999）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲天下第一乖巧可爱[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被捏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被</p>
`;
        case 182:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;城里老鼠，还是乡下老鼠？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;选乡下代表着更偏向凛，选城市代表着更偏向美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坏了，我怎么会突然联想到深海鱼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变形计节目上：主持人问：你觉得哪个爸爸好一点呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此间乐，不思蜀</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;突然发现，小莲和清野更亲啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个「咱家」，容易误会啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我老家也有蜂巢，还是在储物间，我都不敢进去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无端联想：共筑爱巢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喊错了，应该叫嫂子[fn=9]</p>
`;
        case 185:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这也是渡边的价值观啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我选c 都好玩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;温柔又宽厚的好哥哥啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我从字里行间就看到这是渡边的后宫宣言！</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]可爱</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;油菜花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是马蜂吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起一些事情。</p>
`;
        case 187:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是渡边对于世界线的态度，何种世界线他都能坦然对待，走到任何一步都是他的选择。而现在的故事正是渡边自己所走下来的，那么坚持走下去也是必然。另外的世界线自身如何自有另外的渡边去喜欢，去努力。
说这么多，我就想问问，有没有青梅线呀乌鸦?🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次是正确的三观和教育方式
严母慈父，这下妥了[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然觉得这本书能改编成为一个glgame[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你还没试过和神一起生活呀，快试试</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然就想到了变形计那些可怜的农村孩子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青梅线吗？不存在了吧~落后100多万字了，这能上位我直播倒立。。。。嗯，倒立就可以了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次是正确的三观和教育方式
严母慈父，这下妥了[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是了不起的渡边彻呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：“小孩子才做选择题，我全都要！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亚撒西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是渡边对于世界线的态度，何种世界线他都能坦然对待，走到任何一步都是他的选择。而现在的故事正是渡边自己所走下来的，那么坚持走下去也是必然。另外的世界线自身如何自有另外的渡边去喜欢，去努力。
说这么多，我就想问问，有没有青梅线呀乌鸦?🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“然而生活都是经历，经历过就好”</p>
`;
        case 190:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;本章全文背诵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥可以过这几种生活！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有资本的人才有自由选择的权力，否则只能被迫谋生。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的超喜欢三观正直的渡边，现在这样的理想主角太少见了……也可能是现在有这样观点的作者也罕见了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;显示四条，咋啥都莫得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边是真的温柔啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，渡边，我的超人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边真的好温柔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是什么神仙小学生的成长路线啊喂！</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小莲推车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲应该坐在车里而不是推车（笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我污了，我有罪[fn=43]</p>
`;
        case 194:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对比九条对渡边，一目了然</p>
`;
        case 195:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;回应了271章家庭旅行。
渡边彻不会强逼着某人做某件事。
他会把想让别人走的那条修得平整，再在两侧种上漂亮的月季花，让走的人自己选择这条路。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿啦，神已经是渡边的形状了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波叫言传身教</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有的人真的会发光，让人不自觉地跟随模仿，这就是了不起的东京帅哥。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说出了美式自由的本质</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是渡边首相？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能而不用
付出世界与耐心
潜移默化的去改变
这也是彻的温柔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回应了271章家庭旅行。
渡边彻不会强逼着某人做某件事。
他会把想让别人走的那条修得平整，再在两侧种上漂亮的月季花，让走的人自己选择这条路。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿啦，神已经是渡边的形状了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神已经变成了渡边的形状了(指灵魂)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你和美姬可是被影响最大的人啊，我的清野神，，，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看似是说渡边，实际上是价值观的共鸣，灵魂的连接。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神大人这是承认自己改变了很多？比如身体因为下💊耐力变得更好了？</p>
`;
        case 196:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我也觉得下（药）完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;转移话题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下了药的？</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大晚上的…我这是犯了什么错要这么折磨我[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叽叽哇哇煲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猪肉涮涮锅
大鸟转转吧(唐突)</p>
`;
        case 198:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是旧睡衣啊，小莲还真是舍不得花钱啊</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我现在非常不想做饭，洗菜切菜太麻烦了。尤其是我这小厨房还摆不开。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有钱人每天买菜、做饭的生活⋯⋯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢做饭，但是不想洗碗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做饭很有意思，但是天天做我感觉会很累233</p>
`;
        case 200:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;离不开家，工作也是选在家门口[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;外面再好都不如回家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;寄宿留守儿童表示，我没有心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实  以前刚开始内宿第一天我也特别想家</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;丸山的咖啡确实很棒 之前只知道是东京店，看到这去查了一下发现最老的店还真在轻井泽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彩彩探头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怨念……
overlord下一卷什么时候啊</p>
`;
        case 202:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最近也好难过，看到这段突然好起来了，不知道说什么，只能说牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道这段为什么没有人评论，这句话其实也是渡边彻安慰自己的吧。他可不属于这个世界。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻的温柔总是在这种时候体现呐，最好的安慰方式了吧，虽然讲殖民掠夺不太妙[fn=48]</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，儿自行车</p>
`;
        case 206:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;讲个笑话你寄出去了过了一个月坐车回去了之后发现贺卡是跟着你一起送达的（纯属娱乐）</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬主动了，美姬上了，美姬加油～</p>
`;
        case 207:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;寄！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;寄了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;了不起的渡边彻</p>
`;
        case 208:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;永远可以期待美好即将到来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怀抱着对明天的希望与期待，坚强的克服眼前的困难。
温柔又正确的教育方式
不愧是了不起的彻[fn=31]</p>
`;
        case 210:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不会是他的那本宝藏书吧</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;给你机会你不顶用啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后R桑就当前菜，美姬麻衣当做正餐，青奈事后甜品吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑还不行啊（恼），那就继续下💊吧（笑）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加大药量</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1到6楼这就没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边不下药了嘛？体力没长多少？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想做个安安静静的美女子</p>
`;
        case 212:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;等等，1621？三十年战争？哈布斯堡王朝？这种情况下西班牙人居然还能弄丢那么多金银珠宝啊！费利佩四世要气的骂娘了家人们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1621年伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想知道上面两位这是什么梗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1453年，罗马正统奥斯曼王朝击败了君堡内的伪帝君士坦丁十一世，夺回了罗马的首都，并且让罗马再次伟大……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1453年，东罗马帝国皇帝买买提二世继位。</p>
`;
        case 213:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;需要学姐来打破僵局。[fn=58]</p>
`;
        case 214:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;天哪，我的老伙计们，你看完乌鸦的更新了吗？看在上帝的份上，为什么会这么有好看？真是太不可思议了，上帝究竟是怎样打造出这么会写轻小说的作者的，完全找不到比乌鸦更会写书的作者了吧？嘿，真是见鬼，他要是不请假就最好了！他这个月再请假，我一定会用漂亮的靴子狠狠地踢乌鸦的屁股，我发誓，我真会这样做的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祈祷
最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不懂就问，恶女是那本书？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就扯了，西班牙这时候正忙着跟法国打仗呢，哪有空老是往美洲跑啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他是在引导小莲未来去当海贼王嘛🙄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一运，就是一天啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;催更催更</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说这个我就想起了，日本鬼子搬走了故宫几十万一级文物，真的很生气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小学一年级的睡前故事？对比下黄金拼图高中一年级爱丽丝的睡前故事，细思极恐。原来资产阶级在睡前故事上就已经超越了一般平民</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上课前吟唱：最特别是她，在所有一切之上是她，我的神！清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉看了个寂寞，决定养一个月再看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个船的宝藏不去拿了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日复一日，年复一年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不如写去甲子园拿冠军</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;罪恶的贸易开始了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论去哪里了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜这就看完了[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;藏宝书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是那本书吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这些日常好有感觉啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么显示八条评论，确什么也么有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安，睡觉💤
狗命要紧🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只想知道什么时候去打捞沉船</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚睡的孩子有书看\(//∇//)\</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🤔不会是之前领的那本沉船宝藏的书吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很久很久以前，在1453年，罗马奥斯曼王朝击败了君堡内的伪帝君士坦丁十一世，夺回了罗马人的首都……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舒服了，睡觉睡觉💤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我需要美姬或者凜酱给我讲睡前故事，当然两个人一起也不是不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前故事结束了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前故事看完了，舒服了，去睡了……
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为小莲应对清野神的考前培训哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡了睡了，舒服了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祈祷
最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得这个剧情中应该有麻衣学姐的剧情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前读物看完了，可以安心睡觉了🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天哪，我的老伙计们，你看完乌鸦的更新了吗？看在上帝的份上，为什么会这么有好看？真是太不可思议了，上帝究竟是怎样打造出这么会写轻小说的作者的，完全找不到比乌鸦更会写书的作者了吧？嘿，真是见鬼，他要是不请假就最好了！他这个月再请假，我一定会用漂亮的靴子狠狠地踢乌鸦的屁股，我发誓，我真会这样做的！</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这段也算是给喵帕斯也是给观众圆了一个可能的梦吧
能体会就非常浪漫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是只是一次平凡又短暂的分别，
明明别的故事中有许多更加悲伤的离别，
但这一次却格外的动人。
大概作者也是怀抱这份伤感来创作的。
小莲在和朋友道别。
作者在和观众道别。
而屏幕前的观众却不愿与美梦道别。
所以不自觉便潸然泪下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段看过悠哉日常大王都能懂，小莲从小就没有同龄玩伴，好不容易碰到一个同龄朋友还没几天就丢了，那是乖巧懂事的喵帕斯第一次哭。
小莲超级珍惜同龄朋友的，第三季最后和朋友短暂的相处又道别那份质朴又真挚的感情能击穿所有观众的心。
</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怕渡边的妹妹被歧视，好有爱的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到我叫九条莲[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲可是九条的妹妹！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲:本来相以普通人的身份跟你们相处的，换来的确实疏远，不装了，我哥是日本首相，我摊牌了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是“妖精”家的别墅吗 他爸求婚失败的地方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，你好温油啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬的温柔就是这么霸气，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬也开始渐渐变得温柔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果有人欺负你呢，就报我的名字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就是九条·清野·莲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，我好喜欢美姬，太温柔了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼上的，明明是住在清野家！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果有人问你的姐姐是谁，就说九条美姬和清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到我叫九条莲[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕渡边的妹妹被歧视，好有爱的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个可能就是美姬的温柔</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边还是放心不下吧，这就是属于东京帅哥的温柔！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老夫老妻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要和凛好好相处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别把凛弄丢了[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看👀！好东西！</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;因为小莲没说谎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;并不否认</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神无虚言[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的恋爱头脑战</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神の坦诚</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;当然是欣然接受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条！你家快被偷完了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我巴不得多来点儿卑鄙手段</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心里镜子似的</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;家都被偷了还不自知，正宫就这啊？</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实甚至不是什么“主要原因”“根本原因”，可以说她对小莲好的“唯一”原因，就是小莲是渡边的妹妹
世界上可爱的孩子多了，你看换一个可爱小孩，神会多给她一个眼神不</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算莲不是彻的妹妹，也已经是天下第一可爱了[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲那么可爱，超级喜欢~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对小莲好，或许是因为她的可爱她的童真，也可能是她说要做世界第一小学生的迷人模样，甚至是从她身上看到了小时候和自己亲密无间的美姬的影子，不过最根本的原因是她是渡边彻的妹妹罢了。（顺带一提，我好喜欢可爱的莲）</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一群阿满[fn=44]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一群曹贼，→_→</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汝与曹贼何异</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神の自信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，在所有一切之上的是她，我的神，清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;因为很爱很爱渡边，不想失去，所以高傲如美姬才会这般患得患失吧。那个没得感情的女王，什么时候有了失败这个选项？[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是在向清野姐姐撒娇吗[fn=43]</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;领先的人压力很大，会顾忌后者的放手一博，没有绝对的实力会一直担心到最后。九条美姬反复的强调自己是胜者，像是给自己打气，顺带打击清野凛。正常情况下，这种话说太多反而也是一种害怕的表现。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神：我只赢一次，那就是最后一次！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说，如果现在真的再插进来一个男的和清野凛在一起，之后三人行变成四人行，美姬你会高兴吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为差距不大 也没板上钉钉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从古至今都是打江山易，守江山难啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是守与攻的区别</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：已经没有什么好怕的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前日防贼(ಡωಡ)hiahiahia </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为你有家可偷。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：2：0
清野神：？lets see who is real evil genius</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬也稍微变得坦率了一点
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条已经这句话已经有点像清野诉苦的意思了，是因为关系改善还是现实原因？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;领先的人压力很大，会顾忌后者的放手一博，没有绝对的实力会一直担心到最后。九条美姬反复的强调自己是胜者，像是给自己打气，顺带打击清野凛。正常情况下，这种话说太多反而也是一种害怕的表现。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;患得患失，拥有了更在乎失去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你为什么那么自信，真想把我的自卑发给你一半</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神：我只赢一次，那就是最后一次！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可以一直赢，但只要输一次就够了。</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;因为同一个理由，一个赢不了，一个输不了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛yyds</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;魔镜魔镜告诉我[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为你不知道，清野已经一切战术转偷家了。</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神已经不自信了，赢和不会输可是俩种概念啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不说自己会赢，只是说不会输。好严谨的凛酱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都不会输，但渡边彻赢两次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢是独占渡边，输是不能跟渡边在一起，不会输是不能独占渡边，跟美姬她们和渡边在一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为渡边无论人在哪里，几个人都很清楚渡边心里最爱的人是清野，所以神说她不会输，她最在乎的只有这个
九条比较偏身体肉欲，清野更重灵魂，所以才能容忍渡边一直在九条身边，因为渡边心里最爱的人一直是她。如果她俩换一下渡边是清野的男朋友，九条可能洁癖就发作了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会输也不会赢，那就是打和啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边输麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前一定会赢变成不会输。可惜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我赢不赢不确定但肯定不会输，大不了都玩完</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可以小赚，但是我永远不亏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可以赢，但我永远不输！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们怎么就不能理解成清野神已经保底了呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢不了，不会输。快进到加入后宫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿凛爱上了阿彻，在一个有星星的夜晚[fn=26][fn=26][fn=26][fn=26][fn=26][fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻不会放下每一个人，最终也只有彻这一个赢家[fn=31][fn=31][fn=31][fn=21][fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;即是神的自信，也是神的决心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以那天晚上到底发生了什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家都已经偷到了，咋输?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心里默默一句“也不能输”[fn=29]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在一个没有星星的夜里～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿珍爱上了阿强~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛可能会赢，美姬绝不会输，然后渡边赢了两次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说会赢就代表凛有信心让渡边只爱她一个，而说不会输就代表凛只有信心成为渡边爱人里的一个。神已经没有只让渡边只爱她一个的信心了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双赢好吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个概念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神大人的自信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野珍和渡边强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那一夜，你没有拒绝我～
那一夜，我伤害了你～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了那个偷跑的夜晚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不说自己会赢，只是说不会输。好严谨的凛酱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神已经不自信了，赢和不会输可是俩种概念啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿珍爱上了阿强，在一个是星星的夜晚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野：无论如何，后宫中必有我的一个位置[fn=32]</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她怕渡边的爱像冰淇淋一样会融化，吃的太快太贪婪就会过早的失去，小心翼翼的呵护也会融化成水从指缝溜走。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迟了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冰化了
冰封的心也化了
凛也快白给了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是想起渡边上次可以摸手指确故意输掉的克制而不自信吗</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就怕未来会频繁到来不及擦手呢（小小试探下）[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然看上去差不多…但一个灼热，一个冰凉呢…彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前的楼层呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舔掉啊！不要浪费啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？那一晚到底是哪一晚啊？我是不是跳了几百章？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差不多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以那晚做到什么地步了呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们仍未知道他们那天晚上...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然看上去差不多…但一个灼热，一个冰凉呢…彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;勾起了那一晚的回忆？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就怕未来会频繁到来不及擦手呢（小小试探下）[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光速消失也太离谱，能不能委婉一点，当一个文化sp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人呢，这么挂的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们到底是有多直白？阵亡九楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，我懂了</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥的招数！</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，玩了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，玩了</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;忠实原作，高层次的对话.GIF[fn=24]</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“站在滑滑梯下偷看女孩子底裤的变态大哥哥”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要将来要嫁给莲的哥哥，这样就能和莲酱永远在一起了[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想当你嫂子</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;被发现了哈哈</p>
`;
default:
			return '';
	}
}
        