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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;感觉我这儿要下雨了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，准备好浏览器！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来咯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌拉乌拉乌拉乌拉乌拉……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦，老弟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。都这么快么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第三！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈
</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;后续呢</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;话说弄成这样怎么上课</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个班级应该没多大，能布置鬼屋吗？地方够吗？</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是吧，看了一章，用了半个小时？
我怎么感觉只用了几分钟呀？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猜的不错的话，这栋楼要被整顿一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对A要不起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;私密马赛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;道歉要露出胸部，这是常识！</p>
`;
        case -10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢乌鸦！希望多写一点欢快的日常啊！别完结得太快了，舍不得啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这断章,我想知道九条第一次[fn=47]</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真刺激！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当着神和女王的面搞了这么久麻衣学姐还没有翻车吗？
麻衣，你好强大！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两🍞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣，永远的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;热评出处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当心夹脚.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣桑真是大胆呢，坏孩子应该接受惩罚.jpg</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣太涩了</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一直想说了，这个榉木桌老是让我想起《上海1943》里面的“铺着榉木板的屋内还弥漫/姥姥当年酿的豆瓣酱”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老司机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冷面巫女，名不虚传</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;24小时高强度练习</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只能说懂的都懂。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：东京的哪种美女我没见过？我是身经百战见得多了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人生如戏啊，靓仔！[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂得都懂，不多解释[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，学会了，那么请问女主在哪？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男本能</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有条件那就创造条件
神：chance！
我的回合！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边要累死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神？
这是你的进攻吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了，又到了白色相簿的季节[fn=1]</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵这下彻底没跑了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高强度训练？高强度迫害！</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐她向来是没什么所谓的。
反正在哪都不影响她偷家[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自律的麻衣有多可怕
1-8点偷家
8-16点偷家
16-24点偷家</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“对，不同性别分开睡。女生一间，男生一间，一木一间。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，一木单独一间🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在想屁吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，分开睡（来自渡边的低语）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木桑，口水擦一擦[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木狂喜！</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原则上是这样的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喂喂，这家伙最不安全好不好？,,Ծ^Ծ,,</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这可不安全[fn=4]</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只有我在想，神不想让美姬回去和渡边贴贴吗[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：我要和美姬睡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神要出击啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啦</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只有彻能叫美姬起床。
渡边，我的闹钟先生[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事，不让渡边和美姬一起走，美姬就能起床了[fn=4]</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;多早起来‘做’？🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，只不过是打的久跟不打的事情！</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有文化的想起了村上春树
没文化的想起了路人女主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么梗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;村上春树…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，万恶之源的万恶之源</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只有我关心老师吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;痛苦面具</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正版受害时间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节不说话，防止被测谎</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;注意一点。：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;困觉姬这是已经察觉了？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33][fn=33][fn=33]</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原文：渡边彻拿走‘趁他说话不注意，跑进他两腿之间的’女大学生的脚。</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只要打了码，就留下了无限畅想的空间，起点也很懂嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;星星是？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天台战斗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昆？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲热</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苟合</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要打了码，就留下了无限畅想的空间，起点也很懂嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是 快活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搞基</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打桩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;**=打桩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲热？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这痛苦，我来替你承受[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;星星是？</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;请问是什么词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶女士您别，诶女士您别这样[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶的战士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别一言难尽了，这儿就你一个外人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本文“诶——”的担当一木葵</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻的味道.JPG</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条同学，听青姐一句劝，这里水太深，你把握不住，让姐来[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至少不能天天做
 至少不能当我们面做
  至少不能一起做[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么潘噶之交[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到我不是来拆散你们的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条同学，听青姐一句劝，这里水太深，你把握不住，让姐来[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么事？
讲出来。[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至少不能天天做
 至少不能当我们面做
  至少不能一起做[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“九条同学，我毕竟是老师，至少不要加我一个”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为九条是学生，所以应该让老师我亲自上（雾）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪种事？详细说说[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师，你的“毕竟”“至少”可不好说啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那种事？？？[fn=39][fn=39][fn=39]</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛到陌生的地方的第一个晚上通常睡不着，那么等所有人都睡了，渡边和清野凛。。。[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶 快进大被同眠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就知道渡边肯定会想着法跟美姬睡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的一木，只能睡在边缘，但是她一想到渡边也只能睡在另一边边缘，而且旁边就是老师，她就快活起来了[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，两面包夹芝士的作战计划？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥降伏了女大学生[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;TKR</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;选择题:九条美姬面朝哪边？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到学姐钻被窝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛到陌生的地方的第一个晚上通常睡不着，那么等所有人都睡了，渡边和清野凛。。。[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶 快进大被同眠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对，你就是那个在后面推屁股的通房丫鬟[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对，你是侍寝丫鬟[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：爽到！学姐和渡边我都要！</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快进到美姬学姐同时动手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：这么多人，想想就刺激！[fn=4]</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;当然是做令人快乐的事[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑吟吟的美姬</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;高情商发言，学着点。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果你不在，就是对别人做了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸君我开始兴奋了</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;撞到桌子是假的！</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;放大招了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不对劲</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;突然发现一木真的能混入其中，这是好美酱也做不到的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;窗帘是用来防止一木偷窥的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帘子是用来隔开一木同学和其他五个人的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《局外人》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;外人竟是我自己！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一直以为是男生和女生的分组，突然发现情况有点不对的一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;窗帘是用来防止一木偷窥的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然发现一木真的能混入其中，这是好美酱也做不到的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家都是翅膀，就你是个尾巴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵，你还没发现只有你有问题吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，一木你还真是一点逼数都没，四大女主都在，你要不在直接懂得都懂了。所以，继续被迫害吧你个小迷糊蛋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为只有你是局外人呀[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯有一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好惨啊</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这样是哪样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木最幸福的时光，都是她喜欢的类型</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木是想渡边学姐通吃。小小的胸脯有大大的梦想[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=58][fn=58]</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;以后我们就是好兄弟♡(*´∀｀*)人(*´∀｀*)♡
不过，啥时候让兄弟爽爽（¯﹃¯）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害一木同学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝杀</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：今晚对线：明日美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;半夜三更
一木掀开麻衣被子轻声：学姐，哦哈哟！
然后透过夜色看到渡边被子下在蠕动
呆住，下巴着地，石化到早晨[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦！
想到了，脑补到了麻衣学姐叫渡边起床的方式！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某天深夜，凛轻轻拉开彻的被角凝视着彻。彻说“巧了，五黑缺你一个”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：总之，先尝试一下美姬•麻衣套餐吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;头号嫌疑人:麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那些人[fn=58][fn=58][fn=58]</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你会发现半夜起来女生一起睡的房间只剩你一个了噗噗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是，到时候你会发现女生就你一个人睡，其他人都去渡边那了..</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《格局，小了》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐，被子，凸起！
就这么多！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小了，格局小了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师：我不配拥有姓名？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想 少 了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是这样的</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;雪花飘飘，北风萧萧～</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;局外人一木葵[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挖槽，老师居然有夜袭的想法</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;自己选的路，哭着也要走完啊</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;此乃谎言jpg.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女生一多就这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯洁的天使抚慰自己的翅膀，又能有什么坏心眼儿呢[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;处男能有什么坏心思呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岩手县的乡下人花花肠子没有东京人多啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冰 清 玉 洁 渡 边 彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯洁无暇九条彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯洁无瑕清野彻</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真话</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不好意思，原谅我想歪了</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真忙起来便利店解决了，哪有时间做</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能✘</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;被偏爱的永远都有持无恐</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;确实是，熬一大锅咖喱能吃两顿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，次！</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说是集训合宿那就是为了集训，但不代表不能顺便做点别的！（诚实！）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神爱渡边，因为神一定会爱他。所以，东京帅哥呦，你就是她玫瑰色的梦啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=6]</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;半夜十一点半看到这里饿了，现在睡觉明天早起做早餐[fn=29]</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;永远走直线的麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咱学姐就是这么耿直 [fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不应该是小泉老师的回答吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你和我一样关心学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句一定是学姐说的</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;已经进化成干饭人了</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;牛肉火锅，五个人吃肉，一个人啃拳头大的骨头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猝死要在加班后</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻竖起比拳头还大的食指</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;品酒还要在成为夫妻后呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;推理还要在晚餐后呢</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你就这样被食物收买了？你对学姐的爱呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木，没出息！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木兄弟！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你背叛了…….jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木工具人石锤了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木，没出息！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咕噜灵波</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃火锅当时要哈啤酒拉，吨吨吨……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵，永不为奴，
除非包吃包住。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咕噜～我吞了一口一木的口水[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就这样被食物收买了？你对学姐的爱呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咕噜咕噜咕噜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咕噜咕噜～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咕噜咕噜咕噜</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我只是一个路过的卡面来打</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;记笔记。</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日本也有相声？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大老师和会长在搓螺旋丸呢</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;但是我不理解[fn=31]</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是，在好的环境里体会不到，其实在大家都出去玩的时候自己回来努力，是一件挺厉害的事情，人是社会型动物，一个人久了会很想和别人交流，所以当你努力的时候，发现有人和你一样静静地坐在一旁努力，会是一让人感到十分满足，即使什么话都不说，重要的是“让人能感觉得到的陪伴”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;换个思路就是恐怖片前夕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尤其是在医院</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;唯一的外人，一木龟龟[fn=32]</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;气抖冷，渡边彻什么时候才能站起来</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;拜托了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在脱了，在脱了～</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;都是lsp啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老司姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;窸窸窣窣</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;全力听渡边呢，哪有空尴尬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其他人都看过渣男的肉体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是老演员了</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;感覺老師像是硬塞進去的，老實說我覺得老師線走完可以做很要好的朋友，但感覺其實是沒有感情的。畢竟渡邊本來就只是有點感動，老師來到東京，是沒有記憶的，這就有點像是小時候喜歡一個帥哥，為了他去到大城市，但後來忘了那個帥哥，去大城市的想法沒忘，然後在10年後想起少女喜歡帥哥的感情，比較像是思念的心情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怎么还在玩AP剑圣？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师，你落后好几个大版本了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2楼4楼到8楼都阵亡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就在我保存的时候，4到7楼就这么没了(●—●)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然还是我手慢了吗，图片没了(●—●)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;落后了，你这个妹妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师，你的版本早就落后了</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是我和渡边~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奶凶奶凶的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超凶的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不把我放在眼里，当着我的面调情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃醋了的神好可爱啊啊啊啊</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;冰箱的东西能跟人分享了，不得不佩服美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呼兰河传那味</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;灭蚊灯是带电那种吗，回来家院子里放了一个一直啪啪想，不知道电死多少。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一点用，但是没有蚊香那没有用。…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是能操控低智力生物吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得睡觉之前点屋子里不能有人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是有用的，但市面上没用的居多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灭蚊灯真的有用吗？</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神明的馈赠，价码注明于馈赠的背后，故显得慷慨慈悲；恶魔的交易，直接在正面标明了代价，才显得贪婪昂贵。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的馈赠会在暗中标价，恶魔的交易通常是一次全款</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔要你现在付出代价，神明看你以前所作所为。神明总在需要时不见，恶魔在你困惑时低语。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去掉谓</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;六元首充，吃土的开始</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玩过冒险类网游吗，你从商店里买东西的价格，和你卖回去的价格完全不一样。
恶魔可不是什么好心肠的生灵，当你愿意拿永生换死亡的时候，永生已经跌价了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……那这不就是在自杀嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我先用死亡来交换，再用永生来交换。然后死亡就回来了</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;萨斯卡阿库玛桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31][fn=31]</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;三千万年前，黑暗迪迦背刺了他的老婆和兄弟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迪迦点了个赞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很尼安德特人一起想的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么老人迦没顺便把你扬了</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原来这恶魔这么菜的吗，能够被自己给与力量的人消灭[fn=10]</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对应青奈说的相互体谅，相互扶持，才能幸福的生活下去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三分之一的地图×
三分之一的渡边彻✓</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;古来论迹不论心，有点诡辩的意思，人心是不能被考验的，在正常情况下是一种清醒，可在收到诱惑又是另一种清醒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;百善孝为先，论心不论迹，论迹寒门无孝子，万恶淫为首，论迹不论心，论心世上无完人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;路鸣泽？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;勤酬勤酬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;野良神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圣诞老人可是365天只上一天班的人啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;勤勉的渡边，怠惰的 _ _</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;百善孝为先，论心不论迹，论迹寒门无孝子，万恶淫为首，论迹不论心，论心世上无完人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这位小伙子你很怠惰啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古来论迹不论心，有点诡辩的意思，人心是不能被考验的，在正常情况下是一种清醒，可在收到诱惑又是另一种清醒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个恶魔是怠惰教司吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大脑在颤抖</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这很符合小泉的人设，是最最最温柔的人呢</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所在</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不错，蛮有代入感的[fn=4]</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木:“我走？”</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是不是每一次都只写一点独白出来，慢慢展现，就现在的角色和对话已经能猜出渡边彻的心思了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;类似这样[fn=26][fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;结局有什么寓意吗？感觉有大事发生…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔的目的是找到仙女？少女出卖了仙女？却让少女得到恶魔？还是最后少女跟仙女一起打败恶魔？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言跟着美姬找到了凛，从此二人再也不是朋友</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;秘鲁~秘鲁~</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;防火防盗防一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱战神坚守阵地</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我早就看出你是小黑子了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真护食</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么不自觉，确实很烦人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害一木[fn=33]</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：铺完床，我随后就到</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：我的回合！抽卡！</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;本章，神的最后一句话</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;领先版本的女人：九条美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等等，美姬觉得凛和渡边睡过了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吼吼吼吼吼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬接受她们的表现</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=39][fn=39][fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不管，反正渡边是处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“都”</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;11.9版本还在玩人马打野的你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说得好有道理 ，我竟无言以对 [fn=14]</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;等等，神没说话？！
哦吼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我神清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正宫娘娘</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻永远都是处</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边没有第一次，永远的处男</p>
`;
        case 175:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野现在估计反应过来了，当时渡边在房间里不是在看片跟她说话👀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挖槽，那个时候啊</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;勇敢牛牛，不怕困难</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是牛头人是女的你们喜欢吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛头人狂喜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;性别反转，那就是经典苦主自乐ntr文了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，开车的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，美姬你也是拱坝老哥？</p>
`;
        case 178:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我也想知道，最具迷惑性的那段时间作者下场大喊“渡边是处”，导致现在这个梗就没停过233</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算没了第一次，渡边也还是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是直球的魅力吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那又这样？渡边彻还是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得她们这是很正常学术讨论，有人反对吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算这样，渡边撤也还是_______！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算没了第一次，渡边也还是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想知道，最具迷惑性的那段时间作者下场大喊“渡边是处”，导致现在这个梗就没停过233</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太牛逼了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣 牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是哪一章啊找不到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻不是处男吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想</p>
`;
        case 179:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;经典等价交换</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浴室修罗场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后宫的友好交流（凛:并不）</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;合理价钱，我跟。
--赌神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师 :你们要聊这个，我可就不困了[fn=21] </p>
`;
        case 182:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;虽然觉得无聊，但是耳朵竖得特别高的清野神[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无聊的事情。。。但不妨碍神想听</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;类似这个表情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛，你给我起开 ，没有实践就没有发言权 [fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无聊但是想听</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;准备开大插秧了是吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无聊不代表不想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无聊的事情。。。但不妨碍神想听</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乐观 悲观 

我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以凛神是真的觉得无聊啊（失望）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然觉得无聊，但是耳朵竖得特别高的清野神[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言！（不是）</p>
`;
        case 183:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喜闻乐见的洗澡环节，可惜不是海边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章危了</p>
`;
        case 184:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;和谐了整整两页（）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬是四个人中最均衡完美的吧，小泉和麻衣颜值气质差了，清野是胸小了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;垃圾正版[fn=31]</p>
`;
        case 185:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：四个人的澡堂，三个人的话题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是四个人的电影，我却始终不能有台词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常破壞清野神，兩可小桃子，呵呵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快乐都是你们的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那一夜澡堂，坐着如喽啰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是少了一个人？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是四个人的电影，我却始终不能有台词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一章是在迫害神[fn=26][fn=26][fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：四个人的澡堂，三个人的话题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，外面看有个一，点进来没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神在此时是什么心情[fn=12]</p>
`;
        case 187:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来第一次是在那个时候嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得，这剧情ghs的是不是有点过分的多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;外面评论3进来评论0</p>
`;
        case 188:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该是这，骗过清野和一木之后</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这....好细啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=21][fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木啊，不让你听是为了你好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以清野的记忆力应该能想起当时她在门的另一侧[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个一楼又出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两句话不用被删吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是缘之空的名场面吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这....好细啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖～诸君！我好兴奋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是这，骗过清野和一木之后</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，扯呼，车速太快了，我来之前还有5楼的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发生了什么[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;温馨提示，在玄关可一定要锁好门[fn=9]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙得很妙得很</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老哥们，有没有传送门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;继续写啊，我们不差这几块钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬就这样……</p>
`;
        case 189:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小泉在此刻又成了那个十六岁的小妹妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;具体个锤子，你是不是对具体这两个字有什么误解？？？不来个几万字的注解，你也好意思说具体？？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我劝你不要多管闲事[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有个朋友</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是不是对“具体”有什么误解[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想看具体的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请务必说出具体在哪里，我也想看看是不是真的很具体，再补充完整[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有多具体？如果没有一万字以上，那恕我不能赞同[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师你这么没经验，这么害羞，还不爱虚心学习，怎么能教好学生[fn=37]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;?怎么消失了怎么多楼？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉在此刻又成了那个十六岁的小妹妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里至少少了五万字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多说点！多说点！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精神污染</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师加油</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，再具体一点！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给我再写五块钱的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不然你拿什么跟我感同身受？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;具体个锤子，你是不是对具体这两个字有什么误解？？？不来个几万字的注解，你也好意思说具体？？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻烦再具体一点吧乌鸦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给我再具体一点！</p>
`;
        case 190:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阅读分析，这时候用了莲酱的语气说明了什么？
1. 代表着青奈在这事情上还和孩子一样纯洁
2.代表着青奈在这事情上和她们的差距犹如一个小学生
3.代表着青奈对于将来发生这些会404事件的期盼
好了，编不下去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起来机器人静流好久没出现了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;斯国一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你已莲化</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我建议，章节改名为突然狂飙比较好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真可爱…老师，真可爱…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;gkdgkd</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁知道是哪个呢ʘᴗʘ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鬼故事，翻页</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阅读分析，这时候用了莲酱的语气说明了什么？
1. 代表着青奈在这事情上还和孩子一样纯洁
2.代表着青奈在这事情上和她们的差距犹如一个小学生
3.代表着青奈对于将来发生这些会404事件的期盼
好了，编不下去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲酱附体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京，真厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起来机器人静流好久没出现了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;貌似没有说过，老师的魅力是几？反正不是8就是9吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面12楼的评论肯定很正经，但是想知道有多正经还得打开浏览器[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章绝对不是乌鸦写的，乌鸦说了渡边还是处！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知 集训 又名后宫交流会</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以是来集训这个的吧[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已阵亡14人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喵帕斯出现人传人现象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是个十六岁的少女嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三明治，五层的那种</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真可爱…老师，真可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一不留神我还以为是小莲呢[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们，文明发言，待会儿，又要消失</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看这个小泉，多逊哦[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有美姬没说第一次呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这个妹妹，你又成妹妹了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是，就到这吗？那渡边的第一次呢？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真厉害，飙车真厉害，深夜飙车，没有交警管呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦……咕噜噜……乌鸦……真厉害！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然还是个少女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被两个色女吓到的小泉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京好厉害！</p>
`;
        case 201:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;此处有无删减[fn=31]</p>
`;
default:
			return '';
	}
}
        