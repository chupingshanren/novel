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
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来咯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明天比赛，我想要大家的祝福，谢谢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去⊙∀⊙！，你们好快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是我慢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很快
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很快啊，我刷新就进来了（12.01）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们好快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;OMO</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骗子，说好十二点之前更新的呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦这是准备下死咱们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不存在的，死心吧[fn=33]
好美才是本作唯一指定败犬担当</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我哒哒的马蹄声是个美丽的错误——郑愁予《错误》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哒哒哒，啦啦啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呼啸的车轮声</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骷髅骑士即视感</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的好美，抢到了位置，却错失了男人，明明是你先来的</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一遍写作业，一边等更新</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不不不，瞧不起谁呢？
最秀的明明是俩丈母娘甚至也想当渡边的情人[fn=31]</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;话说凭九条的魅力确实有资格对这句话表示轻蔑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轻蔑的。。不是形容眼神的嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷腥的渡边猫[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蛐蛐偷腥猫[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉把轻蔑去掉跟好</p>
`;
        case -10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31][fn=4][fn=4][fn=24][fn=24][fn=29][fn=29][fn=1][fn=1]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫事啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;点赞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;找歌词既可以晚发又可以水字数。生产队的驴都没你聪明。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比较好奇有错字你是怎么知道的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浪费一张请假条</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;山百合花的外表热情豪放，却有一个独特的花心，这是由多数小蕊连结起来，包在大蕊外面所形成的，结构相当细致，就如同热情外表下的纤细之心具有着微妙的美。而且，据说土着女郎把山百合花插在左耳上方表示“我希望有爱人”，在右耳上方表示“我已经有爱人了”，至於两边都插呢?大概是“我已经有爱人了，但是希望再多一个”</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;害怕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;面对视线，没有任何表情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦真的很赶</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;春风吹，战鼓擂，抢男人，谁怕谁[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸位[fn=21]兴奋起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣，你很勇嘛</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;试试表情包</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜太惨了</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐啊[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好卑微的感情啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然喜欢学姐，但你们不要忘了学姐是怎么上位的。。。。[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点可怜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐yyds[fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然感觉麻衣学姐好卑微[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐：开场就是直球</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;到这里之前，光看描写我以为是渡边的梦……</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;搁置争议，共同开发</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬：主权在手，岿然不动。</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;丹波之王·槐纸素人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;带了她最爱吃的，旺旺碎冰冰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太的朋友</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我还能说啥呀，嗨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太卑微了吧，看到这里就更喜欢心疼学姐了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;受不了了啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最爱麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;破防了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我永远喜欢麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忽然想起来九条不喜欢别人用过的东西，渡边不是被另外几个人用过了么[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇 学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人活着就为了学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;50---107中间的楼呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样的情节感觉好尬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉稍显突兀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666我的宝贝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人活着就是为了明日麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我从没认为一个角色能让我破防两次，麻衣，你赢麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐万岁！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐我的学姐[fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣眼里只有彻，只要能和彻在一起，其他一切都无所谓
情在痴，不在纯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，学姐，我的学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一页全部点赞！学姐万岁！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人活着就是为了明日麻衣！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我特么直接，嗨，学姐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还能说啥！永远喜欢明日麻衣！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还能说啥呀，嗨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐😭我的学姐😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐太可怜了，来，让我抱抱[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑微的麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太卑微了吧，看到这里就更喜欢心疼学姐了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣，我的麻衣！</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一样靓仔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑补天津话版：这小伙子可真俊啊</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里，这里，还有那里。</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这段文笔和村上春树的感觉太像了，不愧乌鸦</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个热知识:学姐和清野、九条的智力是一样的，她们三个都是八点，比渡边初始智力7还高一点
所以为什么智商一样，感官上看似九条比学姐更聪明
赢在家世、在资源
这波是教育资本赢麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣，我的麻衣，(┯_┯)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣，我的麻衣～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师将来估计是家里智商最低的话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣8点智商不是吹的，不是因为性格原因肯定不比美姬和清野差，虽然本来就不差，麻衣赛高！</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;因为这一点，九条不可能赢。</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;新的女角色？！</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;当面调情</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;難怪系統有一段時間不見了。</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哦，辣么米斯特儿～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;而太太们无疑站在心理战的大气层</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虚假的天才们的恋爱头脑战：N等分的修罗场天天上演中
真正的天才们的恋爱头脑战：逗智逗勇好想急死你[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;更是一场混战[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝友，这可不兴燃啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真·恋爱头脑战，宝友们，这可比博燃剁了</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;上门女婿现状</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没出上门女婿，有几个简单的?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(指喜欢奥特曼，和人间体也就差个变身器)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没出息的上门女婿：指龙王/修罗武神/神医/……
✔✔✔</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看成“现在已经是渡边的形状了”是我看太快了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好好被渡日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差个边</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神本身就是最好的手段</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边骑马，女孩子看花
马吃花，渡边[fn=32][fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示什么？？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女孩子会多伤心呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛嚼牡丹，马吃百合[fn=31]</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;八嘎牙路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿齁（狗头</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;电眼逼人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼睛何止发光，还会流泪呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;⊙∀⊙！没了三个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秋名山巅，渡边彻在仰望</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐就是女王，自信放光芒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疑车无据</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段真有武侠玄幻的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;采花贼</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最后の最后！to do ga na yi ko yi！（届不到届不到）</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;难忘～今宵，难忘今宵。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;64的奥运会和21的奥运会简直让人不敢相信这是同一个地方搞出来的东西</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;春宵苦短日高起，从此君王不早朝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看把孩子累的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画《九条美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从体质来说，渡边已经不当人了？这还不光明正大开后宫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天天这样 很伤身体吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬每天晚上都太辛苦了</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祈祷

最特别是她，在所有一切之上是她，我的神，清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：乌鸦18日没更
高情商：乌鸦19日加更</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冬奥时代路过。东盗主首次登场?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;距离拼刺刀的时间又近了一步，但是乌鸦别被带节奏啊，情感的描写人物的刻画以及最重要的矛盾爆发都是需要沉淀的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特に彼女は、すべての上に彼女、私の神、清野凛です。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，舒服了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃一串，想两串[fn=31]
看一天，少一天[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安，嘶哑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：乌鸦18日没更
高情商：乌鸦19日加更</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲爱的鸦桑，你已经20分没更新了，阿美瑞肯的fbi挑事中国的项目时间都不敢隔这么久</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧...怅然若失，很有内味儿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊？没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;距离学姐和老师的回合又近了一些。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;距离完结的日子又近了一天[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我听黑色说下一本小说似乎会和这本无衔接</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安了各位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祈祷
最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=10]好短</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊  又是索然无味的一天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安了各位[fn=45]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祈祷

最特别是她，在所有一切之上是她，我的神，清野幽子</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看成了轮流小便</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人的嘴，骗人的鬼</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;白玉是椰蓉的吗？我也喜欢椰蓉的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白玉就是类似原味年糕的口味（或许里面有一些砂糖），因为颜色纯白被叫做白玉。同理白玉丸子之流。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白玉是啥味道？</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;把自己曾拥有的童年分享给了现在的童年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丢人真姬[fn=31]</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要不是喵帕斯懂事就要被你教坏了[fn=31]</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;..</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;弟位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哆啦A梦！那个不是铜锣烧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“这里.”九条太太指着沾了少许豆沙的嘴唇。</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;天天操劳过度的美姬</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;勃列日涅夫同志在波兰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《猿神在偷家》
《美姬在补觉》</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;emmm，题名，没反应过来</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哎，这您可就不对了，读书人偷东西，怎么能叫偷呢？</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬的穿搭日记》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟才一百万而已，就能让九条家不丢这这个人，太划算了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你舅宠他爸</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没错，抱我，在日本算是一个很露骨的暗示，懂得都懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拥抱好像在日语中有做*的意思[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=21][fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抱，在日本有那个的意思来着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;if…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三次，sex</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抱 换个边旁 大家就懂了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一语双关[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错，抱我，在日本算是一个很露骨的暗示，懂得都懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱你三千遍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我报四次好了。一次6小时。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拥抱好像在日语中有做*的意思[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想抱五次。</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最好是肉体付费[fn=31]</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;十亿円可能没有，十亿其他的应该……（doge）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野彻同学</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;资本家的血是恶臭的。。。什么？是绝世美少女？还是我老婆？那没事了</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;南山必胜客～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迪士尼警告</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古美门！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;律师阿姨要登场了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是赖账吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻:彳亍，反正清野家是凛的
而凛是我的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“赖”账，是错字吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，赖账</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，赖账</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;猫比较吸引我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼，女人只会影响我撸猫的手速[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人，猫，女人的猫（bushi）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫，指pussy</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我没什么意思，就是想欣赏艺术</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不信，除非发个相片看看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好奇怪的xp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有实景照片吗？衣服穿不穿的无所谓，我主要是想欣赏艺术……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我xp正常，我就喜欢看不穿衣服的女人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫比较吸引我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实是猫好看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然看到现在乌鸦的书友没一个xp正常的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下，你的xp好奇怪哦(º﹃º )</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么？全是不穿衣服的猫[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼，女人只会影响我撸猫的手速[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搜了下，感觉这人画的猫比女人好看[fn=34]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艺术！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有人有图吗？我对女人没兴趣，主要是想要看猫</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呐呐呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少女与猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：没有渡边猫可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为渡边猫，凛喜欢上了猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱彻及猫[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为都比凜大，所以不感兴趣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少女和猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自从渡边猫之后凛就喜欢猫了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边猫</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快活的像是一只哈士奇。</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毕加索也是老渣男了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真·欣赏。</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条越来越像妈妈型女友了，好像揉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[命令]</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;优雅又自我，神秘且独立。
不过也有二哈，哈哈哈哈哈哈</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;石锤了，是工具凛没错了[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:今晚也不让你睡哦[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;字终于打对了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！
哆啦A梦的“哆”对了
[fn=2]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：肘，跟我进屋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🤟🤤🤟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=59] [fn=51] [fn=59]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=59] 🙄️ [fn=59]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搁着玩叠叠乐呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搁着玩叠叠乐呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下卡了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下卡了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:今晚也不让你睡哦[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:今晚也不让你睡哦[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;石锤了，是工具凛没错了[fn=21]</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金莲觉得很淦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也放光[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷腥猫[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是刀儿，我是鞘?</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么叫公主骑士啊（国际后仰）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边还是处[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只是进来看看失踪了几位勇士[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天就算天王老子来了他渡边也是个处！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1314依然失踪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放心飞，自己背</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;路修好了吗？最近好像车越来越多了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车车，好快的车车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸦桑开车是越来越多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老汉推🚗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谋刺[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么叫公主骑士啊（国际后仰）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后颈？吃我一刀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最近cece好多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也是兵长？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;背刺美姬[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羡慕嗷。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边还是处[fn=43]</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;坐等一楼无</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边猫[fn=5]</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《白猫》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：你瞅啥，还不快变？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管黑猫白猫，能变猫娘的就是好猫[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能干就是好猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管黑猫白猫......</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该是仿品吧，不然不会这么便宜。</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想起渡边🐱</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛还是想养只渡边猫</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太说中了真相
凛表面上在看猫，实际上却满心都想着彻[fn=31]</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;十七岁那年的雨季，我们有共同的期许~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那一年我十七岁，她也十七岁...</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你们？好个复数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;磕到了磕到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最，没有之一！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;表面责骂，实则撒娇[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边君（丈夫）=清野幽子（妈妈），都是清野凛最亲近的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛桑不能说谎，所以直说渡边和幽子“最亲近的人”</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你过来啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请尽情地威胁我吧[fn=21]</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怎么就这几章才看到有错字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疑车无据</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;收获</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是本书的购物点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奥特莱斯就是购物广场的意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;广州也有个奥特莱斯，东西也很便宜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是本书的购物点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是另一个购物点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主观印象不可取</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奥莱全是降价甩卖的东西，经常有买两件打六折之类的活动，但东西都是几年前的压仓货。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奥特洗手🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奥特莱斯不是专卖打折款吗？突然破产了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们那也有奥特莱斯？！我以为就我们这有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么大老板也逛奥来吗[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？bci这么大的事，还奥特莱斯？</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;刚刚我好像看成了“变态”诶[fn=39]</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;盲猜音乐会遇到麻衣学姐她们</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;开始吧，我想要了</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有画面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节描写到位</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;鸦桑，小莲这里不在，是不是忘了[fn=31]</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;光妹yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最近正好再看四重奏</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哇哦，所谓伊人，在水一方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小婊砸雷达启动[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正宫们（？）的凝视</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看似偶然</p>
`;
default:
			return '';
	}
}
        