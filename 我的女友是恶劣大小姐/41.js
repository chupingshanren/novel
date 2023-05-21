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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还好后面的没事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自由♂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪(=￣ω￣=)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;半夜睡不着，抓到个乌鸦太太。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都这么快的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一模一样也可以交换喝哦[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求生欲强烈！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看什么才是真正的东京帅哥啊（战术后仰）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不像我，我只会心疼哥哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哥哥，我喝一口你的奶茶，你的女朋友不会生气吧，好可怕你的女朋友～</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;很冰，像你一样；很甜，也像你一样</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看成了“穿不穿衣服都无所谓”，我还有救吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 犹抱琵琶半遮面更好看，穿衣服比不穿好看，懂得都懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最好不穿[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不穿也无所谓[fn=4]</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这句话是不是之前出现过？</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好方啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;失算了啊!
当时要是请求四个人把腰都搂了，是不是当时就用海豚的样子把凛给征服了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是155章渡边赢的那个海豚吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚看完海豚湾
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在现场，我是海豚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是大床</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们男人都是海豚转世（一语双关，懂得都懂）。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是渡边那次赢下来的奖品，我没记错的话，也证明了清野神对渡边的心意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乍一看还以为高也是2米</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我姓莫，叫莫居然。是的，我就是那个天天陪凛神睡的人。
最特别是她在那一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我叫居然天天[fn=4][fn=4][fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我是居然[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我是清野凛😇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我是床[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，我也要当这个海豚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我是海豚🐬[fn=4]</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，布偶的醋你都吃，不愧是你，渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总有刁民想害朕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从这个“它”来看，这个“居然”不属于人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;em，想到了一部熊玩偶的动作片[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彼可取而代之</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;取而代之🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到了个漫画</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建议自己进去</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;佐藤同学也可以😊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛的大失败这方面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;魂器学院？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我预感到要伤害我凛神了</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我一直在想蜡烛似的香蕉长什么样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还在纠结蜡烛式的🍌，结果是香薰喔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没人划线？你们不对劲</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑吟吟，这个词博大精深</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竖壁清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平板才是稀有资源！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;同样是“笑吟吟”，却有不同含义。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们又在迫害清野了！[fn=47]
请继续加大迫害力度！[fn=4]</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;天空是蔚蓝色，窗外有千纸鹤</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一手带大的，不容易啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手上功夫好 搓揉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmm晚上项目又多了一项[fn=31]</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;zio表盘？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个小时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成熟的男人，就在这看表等女人的每分每秒</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美雪老师什么时候才能站起来？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得青奈和美姬都是85来着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;目前为止，书中最大的是宫崎美雪吧，我代入的是学园默示录的某个角色来着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈老师，拜托了！</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;某件事情的结束</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老人与海</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;拍椅子里？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搭嘎，boki</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是完全不懂哦[fn=4]</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没人吗？不科学啊</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要不起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再也没有什么比得上看见一对一手带大的兔子更有成就感的事了😉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哆啦A凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;优秀的女人连胸部都是A</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从小玩到大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野家的太平姬(手动狗头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波是神的败北</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神不论什么都是A</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每日迫害凛酱[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再也没有什么比得上看见一对一手带大的兔子更有成就感的事了😉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害一木还不够吗？为什么要迫害凛[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;独属于清野神的悲伤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;管上，对2</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对A 要不起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实如果有塑料袋装着的话，奶茶也是可以通过两个图钉挂在平板上的[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然是我的清野神，但我还想说，对A，要不起</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;随意</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;打断借书本台词隐晦示爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老娘叫你进来看上看你们打情骂俏的！</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我就让你等五分钟，干嘛每隔半小时打一次电话给我？</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;?</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;策划补偿</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;透过现象看本质[fn=8]</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在我嘴里呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以清野换成啥了？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野换下毛衣和牛仔裤那她换成什么了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清纯风美姬也是天下第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凸显曲线，但完全没有凸起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该说黑丝没了，呜呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，两人的风格反转了</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“你怎么回事，憋跟我整这素的！麻溜动起来！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小老弟你怎么肥四？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做事不专心，被察觉了😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肘，跟我进屋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么事儿爷们儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等了一会儿也太精髓了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小老弟你怎么肥四？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天怎么这么老实了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“你怎么回事，憋跟我整这素的！麻溜动起来！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;磨叽啥呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;动手啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我纯洁了，第一遍没看懂……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你今天咋不得劲儿啊？</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp; 他好会啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉是身材</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情商</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真他娘会装[fn=21]</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只能给渡边和乌鸦看，读者也不行[fn=31]这该死的占有欲</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:还搁这装呢[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越想越气</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边其实是个占有欲很强的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是出来前她们猜渡边会咋说吧，神猜对了</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;屯了一个月，就看了两天</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;uc浏览器:根据国家相关规定……👴🏻:谷歌浏览器，启动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们，我游览器动了，我不看了，再见！[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶，我浏览器怎么自己打开了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心如止水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久久伊人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们，我游览器动了，我不看了，再见！[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边永远是处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;uc浏览器:根据国家相关规定……👴🏻:谷歌浏览器，启动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事，我已经贤者时间了，看啥都古波不惊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就看到这里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，到时间了，浏览器，开！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊啊啊啊啊啊啊</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:是是是，我误会了，来亲亲～😘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个动作有问题，除非倒着，不然怎么嘴在脖子上，还是脸埋在锁骨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《傲娇》</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;走开，都和我贴贴</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐，今夜我不关心人类，我只想你。
                               ——海子《日记》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐，把腿抬一下嘛～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边是用天津话说的这句[fn=4]结介～</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到一个有趣的设定，其实四人都是系统的一部分，系统因为被渡边深深地影响了，但由于她是系统，不能与之相爱，于是创造出了四个拥有渡边四种性格的女子，代替自己陪伴渡边，但由于创造了四位个性鲜明的奇女子，导致过渡消耗，所以常年潜水。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边海王→水人 恋爱大师→A杖 
水人A杖复制队友  没毛病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四神合体渡海王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以渡边最爱自己？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总算有个合适的区分了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到一个有趣的设定，其实四人都是系统的一部分，系统因为被渡边深深地影响了，但由于她是系统，不能与之相爱，于是创造出了四个拥有渡边四种性格的女子，代替自己陪伴渡边，但由于创造了四位个性鲜明的奇女子，导致过渡消耗，所以常年潜水。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边海王→水人 恋爱大师→A杖 
水人A杖复制队友  没毛病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四  重  分  裂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬你说出这样的话，我有点想笑，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;厉害啊👍🏻👍🏻👍🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个总结有点意思啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的性格和四人的都很相似，所以才会互相吸引</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我缺这点钱和票吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得每天晚上我的浏览器卡，原来各位的浏览器都动了啊[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别的是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她绝无仅有
站在自己坚守的世界里，闪闪发亮
它是特殊的，就像《旧约》里说的，才德的女子很多，唯独你超过一切</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;语文老师：内容呢？数学老师：过程呢？美术老师：画面呢？历史老师：记录呢？物理老师：运动呢？化学老师：反应呢？音乐老师：发音呢？体育老师：汗水呢？地理老师：位置呢？生物老师：性别呢？政治老师：方法呢？通技老师：工具呢？心理老师：伦理呢？信息老师：数据呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过程呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自经丧乱少睡眠，长夜沾湿何由彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这算断章吧？这算断章吧。这算断章吧！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得每天晚上我的浏览器卡，原来各位的浏览器都动了啊[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么快就来感觉了[fn=11]渡边好强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我浏览器动了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;～(TロT)σ放学别走！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘶～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细嗦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是让我露出姨母笑最多的小说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唔( ´艸｀)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大满足</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么时候才能拿下凛神呢[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我缺这点钱和票吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不差这几个币，你就多写点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬真的是完美的老婆人选[fn=59]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;展开细说[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还可以自己做表情包的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊～</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我现在同时看各种类型小说，女尊，伪娘，变身文，软饭文。还有恐怖悬疑，科幻惊悚。往往看完这个接着看下一个，然后作品世界观混乱了。
刚刚就在想美姬是不是什么克苏鲁式的怪物</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只有这个是自己的</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;此处应有 哈哈哈哈哈哈哈</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;玉子会不会也在那里呢？[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要去</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我还没上车呢？</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;作者你怎么这么熟练</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请让我来.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：你怎么知道我这么变态？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;风元素注入</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我哪有这么变态！（嘶哈嘶哈）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的目标是换下的衣物。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬奥义：读心术！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我都是直接趴在身上闻的！</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真不错！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这位更是重量级</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我好想当清野凛小姐的狗啊，但清野凛小姐喜欢的是猫，我哭了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明白自己女朋友是抖S的你，就一点自知之明都没有吗！！你个M！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巧了，我可以给两位做m</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也差不多</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;s和m都不是独立存在的，某些时候可能会反过来</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个解释可真是清新脱俗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那么问题来，到底是你的内心本就有些M还是单纯的因为爱人有些S为了迁就她</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经摆出M腿，变成她们想要的形状</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我很期待渡边占主权的时候😊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还是很期待渡边反杀的那天的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错，我不是loli控，只是控的人刚好是loli而已。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说那么多还不是怂[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人的堕落都是由外力逼迫为始，自我沉沦为止。醒醒吧！渡边彻，是你自己甘愿变成这样的！</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哪位哪件事？</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样讲明白了就会觉得美姬真的太强了…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;五个人都搬来住啊，别墅名就叫渡边の后宫花园</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后6月6被截胡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金屋藏帅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然鹅事实是…凛先满18</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要目的是为了让渡边和麻衣还有青奈分开住吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是富婆吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明年九月九日，我会来参加五等分的葬礼的！</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;爱是包容的，美姬现在竟然如此的爱渡边。啊，不愧是yyds美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;婚礼出个特典+1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只要不和女孩子领证，我想和几个女孩办婚礼，就和几个女孩办婚礼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算写不到婚礼也安排个特典8</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但一定要先领结婚证[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大学生夫妻有点带感🥰</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咳！只看到性小店[fn=43]我是lsp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差点看成情趣商店咳咳咳</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喝过奶也喝过茶[fn=4]</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当着美姬的面发出约会邀请</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬的反击🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是清野神，轻易的就发出了约会邀请！</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实…是单纯的你没见过😂
渡边他俩逛个街，买个饭，跑个步，遛个弯，没事就天天在校外碰见，没几章没见过面的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反击：渡边是我内人</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！美姬！我的美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此，没有不也活着[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的美姬的已经是渡边的形状了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;现在已经不掩饰了，换成以前肯定不会这么说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小凛凛，生气气</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;虚假的后宫王：凭借多番努力和出色的表现（以及大妇的纵容）才拥有四位少女的青睐

真正的后宫王：轻轻松松左拥右抱从小青梅竹马的神之美少女与立誓成为世界之王的东京帅哥，尽享“一夫一妻”的美好生活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：你们都是我的翅膀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就知道，美姬才是开后宫的[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真. 一夫一妻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我开始酸美姬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你来的正是时候</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：你们都是我的翅膀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一夫一妻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实是美姬的后宫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《九条美姬的一夫一妻》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虚假的后宫王：凭借多番努力和出色的表现（以及大妇的纵容）才拥有四位少女的青睐

真正的后宫王：轻轻松松左拥右抱从小青梅竹马的神之美少女与立誓成为世界之王的东京帅哥，尽享“一夫一妻”的美好生活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的翅膀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬才是后宫王！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的翅膀啊！</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凌酱：我要的是渡边哼╯^╰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：所以爱是会消失的对吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后渡边绕到另一边挽着清野的手，清野的翅膀完成了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日的胜负：渡边の败北</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬清野贴贴！！！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赛高！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野果然是正宫（误）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一脚踹开工具人渡边，美姬和凛激情贴贴！[fn=4]</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;高坂丽奈的手指从黄前久美子的上唇黏着至下唇，松开的一刹那，唇瓣如果冻般跳动。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到晚上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野:“那我走？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们缺的是那点点币吗，请务必把后续写出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会写就多写点</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不可描述的事情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尽管如此，渡边依然是处！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹！真TM真实！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我嫉妒了”
“晚上补偿你”
“那没事了”</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;精致艳丽好点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我左想右想，在气质方面，这两个应该是，一个师妃暄一个婠婠。</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看这段描写仿佛自己又在看菲茨的书。</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：好看吧？都是本东京帅哥的[fn=32]</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;（命令）</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在外人面前笑啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦吼，笑了～</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;男闺蜜去死[fn=47]</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;现在！就在这里！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没试过野外呢[fn=43]想想都刺激</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：这个...现在惩罚吗？地方不太好吧！至少得在玄关吧！！！！</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;周围的众女生:  不，你别对我笑，
                      我怕以后得不到
                      却又忘不了[fn=21][fn=19]</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈，被发现了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是两个抖m[fn=58]</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，别😨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边圣子，好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很久很久以前的伏笔了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边巫女，好耶！</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;等灯等灯</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我好像记得，在很前面，神刚开始指导吹奏部的时候，渡边和神说，只要她穿巫女服到人类观察部等他，他会为她解决一切问题</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬！[fn=21]</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最爱凉宫春日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你穿什么我穿什么，这波是美姬姐姐发福利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我站朝比奈实玖瑠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个是凉宫春日，一个是朝比奈</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;鲁迅说过</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正经的[fn=31]，住院部还会戴口罩，甚至手套</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很抱歉，正经的护士服还是捂的很严实的，别说裤子了，一年四季都是长袖口罩和手套。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本的不知道，作为男护，我只能说我穿的是裤子，周围的女同事也是裤子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本护士服和我们的一样不？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特么的，我脸上的车轱辘印哪儿来的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有男护士服的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但我知道你要穿的肯定没有裤子[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正经的[fn=31]，住院部还会戴口罩，甚至手套</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正经的是裤子，不正经的是裙子！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很抱歉，正经的护士服还是捂的很严实的，别说裤子了，一年四季都是长袖口罩和手套。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正经的有裤子，情q的没有[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？好问题，到底有没有裤子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这得看你是不是正经的了（滑稽）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦你很懂嘛</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;舍不得孩子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这，谁顶得住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去，渡边你太堕落了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿都穿了，可不能赔[fn=43]又是一夜通宵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？？？</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可以哦,来个万字番外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个👆🏻铁定没裤子[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你还不如穿白大褂，至少这个是没裤子的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四月番[fn=13]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬: 咦，针头怎么坏了 ？让我康康。。。[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我裤子动了，我不...我还是得继续看下去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个👆🏻铁定没裤子[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帮小小扯打针</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过程呢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压枪，压住了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个这个，坐下，都坐下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦你这是看了本月新番写的剧情吗？[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以哦,来个万字番外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;处理什么啊</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：请打开麦克风交流</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你俩又开私聊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;队内语音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想知道帅哥想这些的时候表情叫不叫猥琐[fn=31]，各位帅哥请告诉我一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真不愧是神，对渡边彻独有的读心术</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真就读心呗？</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=21]</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我也想看到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后在梦里冲出来</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是甜品一条街，奶茶店肯定也很多很卷。排队15分钟也很正常吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真快，茶颜至少得排三四个小时[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;排队才15分钟？</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;以前就有便利店前喂猫的剧情吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边猫吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭了，小海豚哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是小海豚[fn=31]凛酱也变成了渡边的形状</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛酱真是爱屋及乌[fn=33]</p>
`;
default:
			return '';
	}
}
        