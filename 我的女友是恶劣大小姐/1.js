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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;回归</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;21:50</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前排</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;徕了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前十</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前十</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前排我来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;求问昨天的番外发了吗</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;番外，我的番外[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬真姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;透视装</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条：这一点也不符合我们九条家的气质，到我房间里来，我要好好教育教育你[fn=58]</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好的太太，我来做了👌🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俗称冰割，用冰块旋转冷却杯子，然后加入威士忌旋转冰块至融化然后加水，日本兴起的喝酒方式。烧酒也会这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来杯螺丝起子[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水割，其实就是日本那套穷人富玩老套路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俗称冰割，用冰块旋转冷却杯子，然后加入威士忌旋转冰块至融化然后加水，日本兴起的喝酒方式。烧酒也会这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把冰换成蓝色小药丸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;highball，please</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来杯可燃的水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水割</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来杯乌龙茶[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ハイボール~おかわり~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好的太太，我来做了👌🏻</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;塞了两颗冰球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也有做好的冰球卖，只是更贵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冰球要现场凿的啊，把表面积搞大一点冰得快。
手好看的调酒师凿冰球真的是享受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=50]</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“道了句谢”</p>
`;
        case -10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;写番外就灵感迸发是吧 啥时候把真姬番外给我交了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬永远的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬番外，我们在群里等你。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;答应我，今天别请假好吗？[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不在本书发能在哪里发？？[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天请一定不要请假！[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要完结了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;害搁这儿女校呢，我真姬呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们想要的是真姬的番外！！！摔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬我的真姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;番外就那么勤快，我要是知道正文进行到这个阶段，也不会去赞同写番外啊！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写番外就灵感迸发是吧 啥时候把真姬番外给我交了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请你明天休息！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙 乌鸦你这么勤快？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;gkd</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么时候把太太加人角色？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始铺垫了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看看这，还测试XP，乌鸦你就是自己想写[fn=63]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这香 它正经吗</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;开始暗示了[fn=10]</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是不是还因为没有自来水，每天都到河边洗衣服啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该指的是校服，学校发的。美姬买的衣服会有人更换的，不管有没有穿过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是只穿一次吗</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;搓衣板。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时代缩影</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我居然还用过🌝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在都很少见到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神胸前的样子就是搓衣板</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搓衣板太低级了…
以九条家传的驯夫之道
用的怕都是些～嘿嘿嘿［狗头］
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也可以说比较像猿神的前装甲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是那种适合跪在上面的垫子</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要我就说锯齿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会说话的人，句句都夹杂着浪漫，难怪没人不爱（男同竟是我自己，我现在直接大爱渡边）</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;很有村上春树的感觉</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不，饭是吃情人做的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼，有钱人想象不到的快乐🙂</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这歌经典</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;613 3213 212 3216</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乡村，悠扬，静心，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大爱这首歌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Country road. 也不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上帝啊 家乡离我已然五百余里
再也无法回头
我已衣衫褴褛
一贫如洗，身无分文
上帝啊，这样的我怎能回到家乡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;if you miss the train i on～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五百英里～</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;会说出来就代表有想过，有想法就表明动心了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经爱上了（确信），因为怕和谐所以不好开口</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好清野神不在 不然发现了真姬真的爱上了 该咋办[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人说差点的时候，其实已经爱上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说不定是伏笔</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;随意就能透过现象看本质！不要小看这些贵族！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐说的对。没有谁能够抵挡住彻的魅力。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搞快点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;而且还是女儿的未婚夫……🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太我也会</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬沦陷了！[fn=31]</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如果能提早十年遇到你，说不定我会爱上你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来做阅读理解了，这里的冰球运用了借代的修辞手法，代指真姬此时动摇的内心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摇晃的红酒杯，嘴唇像染着鲜血。
那不寻常的美，难赦免的罪。</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我也很喜欢这首歌[fn=4][fn=4]</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太们居心不良[fn=31]</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;男友衬衣我好了——尤其配上超短裤，视觉上给人没穿裤子的感觉真是太涩了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尬住了，你也太想写九条太太了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姬你太美[fn=9]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姬你太美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九太就离谱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波啊，这波是乌鸦内心的欲望化作了错字体现出来了了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈  神tm九太美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尬住了，你也太想写九条太太了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是乌鸦忍不住写**岁的九条真姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男友衬衣我好了——尤其配上超短裤，视觉上给人没穿裤子的感觉真是太涩了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这名字至少要对吧[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈哈，捉虫！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我该怎么吐槽 美姬的名字都错了</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，腿控渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就我一个的注意力是在大腿上？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;英里！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文化祭拍的电影叫啥来着，呼叫课代表[fn=12]</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：自己榨！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我虽然是个牛仔，在酒吧只喝牛奶，为什么不喝啤酒，因为啤酒伤身体~”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来杯鲜榨的[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：新鲜的要吗？</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：稍等一会，我给你现弄一杯出来</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;确实是卖的……我酒精过敏每次去酒吧陪朋友都是果汁汽水或者牛奶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么没有 蟹哥也是去酒吧喝牛奶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发条橙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我虽然是个牛仔，在酒吧只点牛奶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除了炒饭，酒吧什么都卖[fn=26][fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啤酒伤身体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛仔在酒吧喝着牛奶🥛</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你好会！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;擦一楼没了[fn=39][fn=39][fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细思极恐，开车开的这么隐秘啊[fn=14]</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，是谁当时送的礼物是tt来着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无证驾驶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自从投票真姬压倒性胜利后 我就从字里行间闻到了醋味</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是您默认的了吗，妈妈桑</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太艹了，我的清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都能迫害</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;泡了很久渡边啊，小凛。
可惜还没泡到[fn=58]</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该是心有凛犀——大师级</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边也会读心了哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恭喜玩家获得技能  心有凛犀--入门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恭喜你，都会抢答了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太懂了，这两人心有灵犀</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你就永远到不了快乐星球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是要看海豚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么是快乐星球～什么是快乐星球～[fn=36][fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么我想到了快乐星球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;互相读心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边太懂神了[fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经糖度超标了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成为了对方的形状[fn=15]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心有灵犀</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只有红茶可以吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在，乌龙茶要吗，可燃的那种</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐嫣:道长，这里是酒吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用你的眼眸干杯[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为你美丽的眼眸干杯！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仙剑三花絮</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你就宠她吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就宠她吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我愣了一下，不愧是你。
表面工作做到了，给九条看。里子给了清野。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你呢，渡边桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典下不为例</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日本女生分手会留短发</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看得我心头一紧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要黑长直</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长发控心头一慌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;禁止西尾行为🙅🏻‍♂️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我拒绝！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你与那西尾老贼何异</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，居然想要破坏美好的黑长直，，，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边喜欢长发</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长发控心头一松</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢黑长直和金色螺旋卷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是喜欢长发的，但不知道为啥短发就很戳我xp（类似于春物阳乃那种短发）？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是渡边喜欢长发</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是[fn=3]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢黑长直！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边喜欢长发</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢大波浪的长头发</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，居然想要破坏美好的黑长直，，，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也喜欢长头发</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是你喜欢还是渡边喜欢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滚啊你们这些不懂得欣赏的人，贫乳绝对是萌点好吧（声嘶力竭）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们，对a怎么穿性感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里没有写肩带的款式，所以神轻装上阵[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就没有人想看吗，我心动惹</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你在教我做事？</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她急了，急了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：不用担心，我骚起来不是人[fn=4]</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好果汁[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“嗨，juice。”</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;下药</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对其他人的爱都刚刚好，就你满出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！不行了！太多了！要溢出来了…da   mei！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多一个“爱”字才是他想说的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的这一句有点超级感动到，这本书应该不止会看一遍了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱的太满</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边对神的爱哟！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好嘛，搁着演琼瑶剧呐？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！不行了！太多了！要溢出来了…da   mei！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我明白了，
清野凛，到海上指定没有你好果汁吃嗷[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽甜度爆炸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雨下整夜，我的爱溢出就像雨水～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对其他人的爱都是平分的，只有你是爱进骨子里的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗喻?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对其他人的爱都刚刚好，就你满出来了</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我感兴趣[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;擦擦吧台和杯子假装来的人很多显得生意很好的样子，这是商业机密哟～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小腿渡之名，何人不知，何人不晓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿控渡边好吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边就是想让清野《血口喷人》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;顶级反击</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;把的去了感觉才押韵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少女，想成为……</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;海上钢琴师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也想喝乌龙茶？</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这么说小心等下船炸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额 这么快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;海上调情师吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您就是1900？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也永远不下船了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五千积分的钢琴终于要买了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;电影《海上钢琴师》？</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太不专业了，连个震惊！都不加</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;UC震惊部直呼内行</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喝下去你可能会死的五颜六色的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五彩斑斓的黑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;调制人生，改变饮料！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我加了电脑配件</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;子弹已经上膛，一枪就闹出人命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终.jpg</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太，我要在这海上，给您上一堂钢琴课。</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;悠悠！</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我记得那句台词:“我们笑着说再见，却深知再见已遥遥无期！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，果然捏他了《海上钢琴师》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然是海上钢琴师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;海上钢琴师节奏好慢，看习惯了现在的电影不太适应。或者说年龄阅历什么的还不够？看完确实没什么触动或思考</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;海王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;td1900</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他的作品我还是最喜欢《天堂电影院》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鄙人不善于奔跑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还记得系统里挂了好久的钢琴技能吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得那句台词:“我们笑着说再见，却深知再见已遥遥无期！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1900</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，果然捏他了《海上钢琴师》</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可你一点都不暴躁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来凛不懂这个梗呀</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;拜托了，另一个我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;希儿表示有被冒犯到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去吧，另一个我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一飞冲天！我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;趁现在，灵魂同调!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Aibo！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;aibo~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打牌打牌，好的今天我们来打牌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Duel!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叮~(千年积木的响声)，然后大家脑补一下《热烈的决斗者》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Aibo!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;aibo</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一库搜，astral！一飞冲天！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗·渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;游 戏～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我手上有四张意义不明的卡，而对方场上是青眼白龙，怎么办，我要输了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所累哇多卡呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的回合:我在场上盖上三张盖牌 回合结束!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Aibo！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;AIBO！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;热烈的决斗者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;深蓝，加点！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;aibo</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无名的法老王哟！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;游戏！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;aibo</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艾博，一库嗦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;AIBO!!!!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拜托了，另一个我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;希儿表示有被冒犯到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也是nnk？</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这算为了真姬太太花积分吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，[东京帅哥]渡边！让她们看看你的实力！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;深蓝，加点！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;积分太多了 没地方花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于主动体现出挂逼的一面了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我渡边彻有今天实力全靠自己的努力，系统 给我加点[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于啊终于，第一个得到大师级技能终于换了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，鸦桑果然还记得这个权限</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;契科夫手枪法则，所以时间暂停嘛时候安排</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;支付5000LP，特殊召唤「钢琴大师•渡边彻」</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一幕写了枪，第二幕就会有枪响[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷青结，初期就得到的终于派上用场了[fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，[东京帅哥]渡边！让她们看看你的实力！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这算为了真姬太太花积分吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦豁咯又开挂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是哪个月刷新出来的来着 </p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不装笔能叫主角吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说这话的时候有不可一世的加成吧</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;青春靓丽高冷女神范儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这句话很重要吧，九条会主动听话去关掉唱片机，这是很明显的为了渡边而改变</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成用脚关掉唱片机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇，太太啊，让美姬来就行了，您就不用起身了</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;爱了爱了！</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想到小宝与曾柔和吹口气</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里适合《海上钢琴师》bgm《Magic Waltz》</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;得 直接具象化了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接下来是一段堪比《李凭箜篌引》的文字。</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大群！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦奇妙的形容方式</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这肺活量确实不得了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蟹老板女儿吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸦桑的奇妙比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲸鱼走进来……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有意思</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;反复品味</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦可以的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;简直了，这段文字描写</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段文字是真美啊，享受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这一段描写的水平，不知道有没有参考那部作品，词章迤逦动人，读来唇齿留香，真是天不生乌鸦，日轻万古如长夜</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这算神级了吧</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美人鱼和调酒师约会去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时间停止的感觉</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太：啪啪啪！啪啪啪！[fn=58]</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;欧，我的上帝,老伙计,我发誓,你再这么说,我就要踢你的屁股了!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噢，这位美丽的女士，请忘记那杯该死的威士忌，让我再为您弹奏一曲</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛在後面看的很火</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我还以为真有，找了好久…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有这首曲子么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给无尽做梦的进行曲</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;白天我吹给你听，晚上你吹给我听好嘛[fn=43]</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛，我的凛[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大型流泪现场。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这楼怎么回事
我也来
美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]（别破坏队形）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下面的，差不多得了😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“精英之下，皆是凡俗”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈的。。这该死的封建资本主义精英的生活（柠檬）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以谁只有精英级</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金钥匙教育，但没有童年（可以看看英国王子一天的课程，满满当当）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有钱人的童年都好凄惨
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;信手拈来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上流</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我看看消逝了几楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀疯了，杀疯了，全都死了</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这次连省略号都省略了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再写五块钱的[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请再写五块钱的，👴爱看。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀疯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会被其他人听到吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为清野神的回合腾出时间，妙啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;xdm，这里该说啥知道了吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次连省略号都省略了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来五块钱的小黄文！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再写五块钱的[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不差那几百点币[fn=12][fn=12][fn=12]</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;白天跟出水凛对视晚上哪里睡得着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，有种ntr的感觉，555</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的回合！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边渣男只要半夜不睡觉基本都是和神鬼混！</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就是东京帅哥啊</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;标准剧情热播中！请各位收看《美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;番外《清野听墙角》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画《九条在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tp技能發動</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;守株待猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;【九条又在睡觉】</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么哪里都有你？真心意相通？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼哼，老娘听着墙根儿掐点儿来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的回合</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛天天就知道偷家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷家成功！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡觉的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野的机会来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;番外《清野听墙角》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标准剧情热播中！请各位收看《美姬在睡觉》</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这辈子？上辈子坐过？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《出生在船上》（玩笑话）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等一个坐好船[fn=4]</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实清野一直在听墙角。听到渡边完事的声音，立马出来</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;伊织和千纱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老夫老妻了[fn=4]</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;但是在彻家就很容易的睡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太吵了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也是谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为要素r神同时在场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;希望日后的凛在陌生的环境 渡边的怀里“因为有他 所以不会再失眠”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边家的时候可不是。。[fn=50]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如图，第一次提到（大概）</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大概从渡边和清野为彼此不能在一起而流泪的时候就开始变得更直接了，清楚的知道很难在一起，所以在仅有的时刻就更加放肆表达自己的爱意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从什么时候开始，他俩已经这么直接了，之前都是不承认很含蓄的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜第一次见到的是御茶之水的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜 这声嗯 道出了清野无限的爱意[fn=12]</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;肘，跟我进屋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一起睡呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回去睡觉？——我的房间</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《对 肩 膀 没 兴 趣》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《众所周知，我对肩膀没有兴趣》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧，哪有那么多XP啊，不过是好色罢了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边背叛了腿控党！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《众所周知，我对肩膀没有兴趣》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在不是贤者时间？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天看了伯恩安德森后我才明白我只是喜欢漂亮的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所谓xp其实是对人，只要是你什么都喜欢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真香了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《对 肩 膀 没 兴 趣》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要舔神的锁骨！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！新的XP增加了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:大家都说我lsp在此我要申明一下我不老[fn=58]</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画“美姬在睡觉”</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;既然你写出来了，那就是有这个想法吧？直接写个支线来康康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给我两对母女，再造一个民族[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，你是不是忘了小泉老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;承载着人类的希望，拜托了渡边君[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以，作为唯一的男性，emmmm[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是传奇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学园默示录</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学院默示录？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈和麻衣不在啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我靠，这是发生了什么，整整20楼全都消失了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处神意思是只剩下他们俩，而渡边的回复将其他人一起算进来，是对神的暧昧的委婉拒绝。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;母女默示录</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到世界末日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师，学姐:我还没上车啊！我还没上车啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是个不错的番外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;转进到末世流</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学院默示录？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先停一停，老师和学姐不在船上（悲）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;末世番外，gkd
等一靠岸发现全是丧尸🧟‍♂️🧟‍♂️🧟‍♂️
我的xp动了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给我两对母女，再造一个民族[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那么为了人类的繁衍，渡边你应该怎么做不用我多说了吧[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这渡边要为人类延续努力啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然你写出来了，那就是有这个想法吧？直接写个支线来康康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光明正大的后宫番</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。默示录[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得这样的平行线也不错呢 </p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野:如果其他人也没了就更好了，例如那幽什么的，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从此君王不早朝</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;第一反应是君名流星</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;银河之下，大海之上的两人心里也有着对方的影子</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Stella！</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;
多幸运 
有你一起，看星星 
在争宠，这一刻 
不再问为什么，
不再去猜测人和人、心和心
有什么不同
一二三牵着手
四五六抬起头
七八九我们私奔到月球
让双脚去腾空
让我们去感受
那无忧的真空
那月色纯真的感动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手牵手一步两步三步望着天，看星星一颗两颗三颗四颗连成线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是打向日本的洲际导弹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连成线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;同样的流星有三个，要上了哦，游马！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;解体的美国卫星？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的名字</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;yep</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：愿望不一定会实现，但它是你心里最想要的。</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，渡边对肩不感兴趣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又觉醒了奇怪的xp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我对肩膀没有兴趣”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果是以往渡边不会这么轻易的说出亲肩膀的话，正是因为他不想再说谎了所以反而更自由了？也更克制了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边开始放开了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行的话，舔腿也行[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲锋的角号吹响了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说好的对肩没兴趣呢！</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;海风吹动的不仅仅是少女柔顺的发丝，还有那从未被人敲开过的心房，古井不波的水面轻轻一颤，“或许这就是恋爱的感觉”，少女心想。</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;贼心不死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不忘初心，牢记使命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心怀不轨，心心念念，心有不甘，好久了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开窗！
滚！
掀屋顶！
开窗可以谈~
</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如果当时吻你，当时抱你，也许结局难讲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她a上去了啊，我的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;信仰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神不会说谎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摸腿呢，还是不行么，失望</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指下午两人对视时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对不起我爱你对不起我爱你对不起我爱你对不起我爱你对不起我爱你对不起我爱你对不起我爱你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里指的是下午对视的时候</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，我直接好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱是一种信仰，把我带到你的身旁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不管心多伤 不管爱多慌 不管别人怎么想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，一群人在这唱《信仰》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我爱你，是多么温暖多么勇敢的力量</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我爱你，是多么清楚，多么坚固的信仰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我那么多遗憾，那么多期盼，你知道吗！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果当时吻你，当时抱你，也许结局难讲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当时两人对视，两人心里只有彼此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她a上去了啊，我的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛不会说谎</p>
`;
        case 175:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;装啥一见钟情，就是见色起意[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姑娘可以作此问，我却不能作此想，所以不会有结果。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能一步到位吗[fn=33]</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野神呀 R桑呀 哆啦A凛呀 献给您一句话：起初未情愿，过后最情深。。</p>
`;
        case 178:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哇哦哇哦哇哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖嗷嗷嗷嗷嗷咦哈哈哈哈哈咦嘻嘻嘻嘻嘻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来，咏唱起来，圣经呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她a上去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛，我的凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有些感情我们以为埋在心底不说会更好，却不知道说出来后才意识到对方对自己有多重要。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我神告白都没人了，你们飘了吧？</p>
`;
        case 179:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到，这是不是渡边第一次这么直白地对凛说出自己的爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;返祖现场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画:美姬在睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;转折点在哪里呢 我记得前面还是克制不去接近的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边 凛，我的凛！请等我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果这都不算爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太棒了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到，这是不是渡边第一次这么直白地对凛说出自己的爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，凛桑，永远的心头好，白月光</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;返祖现场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;稳了呀！飞龙骑脸怎么输？[fn=4]</p>
`;
        case 185:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;梦想不是要当东京帅哥嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，这里改成你的愿望会不会好一点，之前说的也是流星许愿，看到梦想，我一时间都没反应过来……但还好我聪明绝顶</p>
`;
        case 186:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怎么两个一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1楼去哪了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来清野才是最高傲的那个人？九条都因为过于深爱收敛了自己的性格，清野这么劣的局势却仍然坚持只爱她一个</p>
`;
        case 189:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;羞涩的清野神啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快点，把我杀了给神助助兴[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的底线在改变</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！我的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;切，还不是憋不住了（姨妈笑）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神已经被拉下神坛，哪怕没有，哪怕只是一只脚，哪怕只是膝盖弯了弯，哪怕只是颤抖了一下，神都不再纯粹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的神[fn=12][fn=12][fn=12][fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们承包读者的全状态！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水晶都被偷一半了 美姬还在睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条睡着了，清野杀疯了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;读到这段我脑海中响起了一段歌词
收紧一双手臂 箍紧身边的你
透过湿衬衫 贴向你的肤肌
身边多少指责 都已一概不理
爱到真心 我俩应该吻死~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神也偷家吗？ 可恶啊 这一切都在你的计算中啊 R桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊好！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜中带苦😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……就这一会儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟乱葬坟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;力的作用是相互的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神也开始一步步放下底线了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我永远爱清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我把自己杀了给大伙助助兴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的神啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好的很好得很</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑加油，底线就是用来打破的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的清野神啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把我杀了给神助助兴[fn=62]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl[fn=53]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死了死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜炸了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的神！awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;缠流子脸红伸手.GIF[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然不知道为什么，姑且放一张好看的图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇(๑ó﹏ò๑)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;aaaaawsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她们不存在（X）
想干啥都行（√）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神赛高！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我糖尿病犯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书早些时候有个热评说清野神会自欺欺人，这算不算😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛 我的凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;退一步越退越后</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;急了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;底线进一步松动了，下一次松动可能是美姬和凛重归于好的时候</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿(º﹃º )。。。嘿嘿嘿。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神急了[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人把我杀了给凛酱助兴！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，我心脏悸动了一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这点时间够渡边处男来几发了[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你从林间坠落，然后和我坠入爱河</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千里之行，始于足下
这是清野神的一小步，却是四翼大天使的一大步</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑是神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我人没了！清野杀疯了，kswl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟活了，wsl！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啥也不说了，清野神yyds！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高高在上的神啊
您是如此的圣洁、不容人间
以至于啊
当您下凡之时
是如此的动人心弦
你羞涩的神颜刻入我心
在我心深处深深烙印
我的神啊
在所有一切以上是你
最特别是你
——清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饱了，心满意足</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条已死，清野当立！
岁在甲子，天下大吉！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我又死了兄弟们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪怕只有一会，我也想体验一次真正拥有你的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡密！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千里之堤溃于蚁巢，突破，往往都是先漏一个口开始的，沦陷了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心满意足</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从不骗人的清野神为了自己爱的渡边选择自欺欺人，尽管只是一会儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈耶！！！今晚熬夜是有价值的！！！多亏明天不早八！！？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快点，把我杀了给神助助兴[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然是清野神，可青春期的女孩子的身体也不是假的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神脱鞋了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有了第一次，第二次还会远吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，男女之间很多事都是一回生二回熟[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝杀！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一课，神敛起羽翼，踩着光之阶梯漫步二下，圣歌隐约，垂爱世人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我？发生什么了，我在干什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶，神开大了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人啊，把我干掉给他们助助兴，，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羞涩的清野神啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别…预备～起！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪怕阵亡了那么楼 我依旧要冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛永远的神，唯一的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千里之堤溃于蚁穴，有一就有二，然后逐渐成为习惯。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……?！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神沦陷了？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神永远滴神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷家了[fn=12][fn=12][fn=12]</p>
`;
        case 191:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;当一个梦不可触及，就不要给出任何可能和幻想，哪怕对方希望这样。
我是这样想的，所以我确实认为和凛的感情是确切无疑的爱情，而且很美。
美到完全超越了现实，甚至让我觉得后面的故事不必写出来，此时此刻已经足够梦幻了，不忍再去看后面的故事发展，爱情终究是排他的。
（当然，这本敢切我必鲨乌鸦。）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当一艘船沉入海底，
当一个人成了谜，
你不知道，他们为何离去，
那声再见竟是Ta最后一句。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;了不起的盖茨比，他的遥不可及的梦无法实现了，但是渡边的遥不可及的梦会有结局。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;cy</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么也不说了，出书吧，我肯定买</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那些镜花水月 从未目及，
我所需的，
只是顺其自然。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弱小的我插个眼，这层评论质量太高了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这大概就是爱开花的一瞬间，仿佛整个世界都在给你打光。背景加上，bgm响起，两人相拥。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在海上没办法写乌鸦哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦写的真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出书吧，我买</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也是在船上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梦里梦到醒不来的梦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当一艘船沉入海底，
当一个人成了谜，
你不知道，他们为何离去，
那声再见竟是Ta最后一句。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当一个梦不可触及，就不要给出任何可能和幻想，哪怕对方希望这样。
我是这样想的，所以我确实认为和凛的感情是确切无疑的爱情，而且很美。
美到完全超越了现实，甚至让我觉得后面的故事不必写出来，此时此刻已经足够梦幻了，不忍再去看后面的故事发展，爱情终究是排他的。
（当然，这本敢切我必鲨乌鸦。）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盲猜一波渡边拒绝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越唯美，越悲伤，那是触手可得的你，却遥不可及的梦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白色相簿2我最喜欢的BGM，就叫做无法实现的梦。突然泪目了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远的梦，我的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦yyds</p>
`;
        case 192:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不管是亲了还是抱了，洒家都值了！！！来人杀了我给大家伙助助兴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，虽然是清野党，但是为九条美姬不值。
到底是得不到的永远在骚动。
男朋友在贤者时间和别的女人调情…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhhhhhhhhhhhhhhhhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhhhhhhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhhhhhhhh'hhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《九条在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhhhhhhhhhhhhhhhhhh！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！（牛头人限定）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《九条美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接吻还是拥抱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶(✪▽✪)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算两人融为一体负距离我也要喊出 渡边还是处！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《九条在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖！发出了apex滑铲的声音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是抱还是亲？！算了不重要我都行！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画，美姬在睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管是亲了还是抱了，洒家都值了！！！来人杀了我给大家伙助助兴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，虽然是清野党，但是为九条美姬不值。
到底是得不到的永远在骚动。
男朋友在贤者时间和别的女人调情…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;影子从H逐渐变成I型</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，打破誓言只有零次和无数次。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做这种渣男是要负责任的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！渡边和神贴贴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该只是拥抱吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于亲上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神终会跌落凡间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;擦擦擦擦擦擦擦，清野神(இдஇ; )</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，神来到人世间了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神，yyds</p>
`;
        case 193:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;醒了吗？乌鸦
来人！
没用的，这里是地下室，外面听不到的
没有人会来救你
这是我的复仇！
什么复仇？为什么这样对我？
番外呢！
你竟然为了区区一个番外做出这种事！
区区番外？
开什么玩笑！你把番外当成什么了！
每一个番外都是我们读者的心愿、梦想和未来，我绝对不会放过你！🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画《九条在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图呢！图呢，我以前见过类似的图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;返影入波平，复照银河上。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段文字真的是美煞我了，海面照着银河，身影印在海面上。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野的魅力起码在我看来是走在正确的道路上，凌然神圣，即使是与家人（妈妈）好友（九条）决裂也在所不惜。所以清野和渡边偷情你们真的觉得不毁她人设，她与渡边偷情羞涩的神情很可爱？！！！我甚至觉得清野这一波有了琼瑶阿姨的感觉，即基于爱情的小三行为是正当的。就不能发乎情止乎礼，一定要过界吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;礼包+1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上本垒了吗？上本垒了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最近的内容是有感受到一点日本小说的病态感了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊，明天开学，结果断在这儿，好难受啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好看啊啊啊啊啊啊啊啊啊wsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：你的嘴里有美姬的味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条在睡觉，清野在加班，我在熬夜[fn=22]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬暗中观察</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;断，给我断</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我好兴奋啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;醉后不知天在水，满船清梦压星河。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;海风起伏，星光闪烁
我站立在海面上，向前走着，波纹荡漾
流星掉落在身边，耀眼的光
俯身拾起，放在心旁
从此低下头，向天空祈愿
愿人世一切疾苦消散
愿有情人终成眷属
至此睁开双眼，看着天
远在天边的你，今天过得还好吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我寻思，这种游艇甲板上有没有摄像头[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;相逢在明月照耀之下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京驶向大阪的游艇上，三颗流星划过的夜空下，相识相知相爱的两人，抛下了一切，紧紧相拥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拥抱加接吻了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他们所谓喜欢在对视的那一眼就升华了，那是一种让本不认识的两个人相爱的力量放在本就相爱的两个人身上，所以渡边彻警醒了，因为他不可能放弃那些人，至少现在的清野凜不行，所以清野凜就加重了筹码让天平倾向她那一端。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爽到！一本满足！睡觉！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神也会因为爱情变成凡人的[fn=31]说的就是你，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实写到这里就结束，也没有再多的遗憾了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这应该是她俩最亲密的一次吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;断章，真可怜啊，又被书友欺负了吧，你应该清楚，只有我才是你的朋友，只有我爱你啊，为什么！为什么要害怕！你的朋友只有我一个人，我对你这么好，对不起，我不该打你，但是谁叫你是坏孩子，原谅我，我会把所有的宠爱给你。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画《九条在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;断的一手好章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他A上去了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快给我亲亲！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过了今晚，渡边依然是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;醒了吗？乌鸦
来人！
没用的，这里是地下室，外面听不到的
没有人会来救你
这是我的复仇！
什么复仇？为什么这样对我？
番外呢！
你竟然为了区区一个番外做出这种事！
区区番外？
开什么玩笑！你把番外当成什么了！
每一个番外都是我们读者的心愿、梦想和未来，我绝对不会放过你！🐶</p>
`;
default:
			return '';
	}
}
        