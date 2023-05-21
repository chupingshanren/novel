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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;花无凋零之日，爱无传达之期（无端联想）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;改名字了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;520大家一起吃狗粮[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传达不到的爱恋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新垣结衣结婚啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请继续更新，未到完结的时刻[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给大家点一首届不到的爱恋[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;起点寄宿学院</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;9</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;7</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好快！</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;因为你和美姬做太多了[fn=58]</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有过程是不得分的呀。</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊！美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的身体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊 我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬的缠绵[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九～条～美～姬～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦吼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;解锁人物卡:树袋熊宝宝-美姬</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我们无法一起学习</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我估计清野神推测出来了渡边和美姬的“幸福”清晨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周日上午要和美姬一起睡觉，没时间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊～仅仅是约会都完全不够了，清野神想要整个双休日都和渡边在一起～</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬！我的美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开幕雷击</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你都说了渡边全家同意了，美姬不也就同意了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边首相，久美子秘书，九条议员，清野议员</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我女票也这样，睡着了就很贪婪的抱住我，转身都转不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘶~贴贴捏~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我试试滑不滑，没别的意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贴贴</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真好，还可以睡死，咱就不一样了，上课铃一响或者有人叫必醒[fn=12]不想醒也不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有被笑到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画—美姬在睡觉[fn=32]</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;进来看鲁迅与周树人不得不说的故事，看到有人说了，那我就放心了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要抓鲁迅关我周树人什么事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看满离</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;傲娇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬·娇化形态[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬 我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以，每个人潜意识里才是最真实的自己。就像我，好梦中杀人一样。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双面美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说的是床上的美姬，和我现在的美姬有什么关系</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;进来看鲁迅与周树人不得不说的故事，看到有人说了，那我就放心了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要抓鲁迅关我周树人什么事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打错字的我也和没打错字的我不是一个人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡着了的我和清醒是的我不是一个人</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;傲娇的美姬·JPG</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;双手握住简单的力量</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘿，小子 ，醒醒 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个睡，它正经吗？</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;爱——不仅爱你伟岸的身躯，
也爱你坚持的位置，足下的土地  ———《致橡树》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我没听说过有成为橡树前不是一颗种子的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;据说橡树的树冠有多大，树根就有多广。那遮天蔽日的橡树，当初不过是一枚松鼠都可以轻松吃掉的坚果，现在想要彻底拔掉，从神户校门到校舍那一整条路，都得挖掉。以前，一枚橡树种子那样喜欢九条美姬；现在，一棵遮天蔽日的橡树那么喜欢九条美姬，很喜欢九条美姬。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;门前橡树，.....，今亭亭如盖也。是这样吗？</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;醒来觉得甚是爱你。


     ——朱生豪《醒来觉得甚是爱你》</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;皇军托我给您带句话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇军托我给您带个话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看满离</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无中生有可还行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是同一句话，十三楼是怎么做到力压群胸的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天没跑步？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹，一群日本娘们儿，可不都是皇军吗[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇军托我给您带句话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要你能缴枪投降，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄军托我给您带句话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃君拖我给您带句话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇军托我给您带句话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇军托我给您带句话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇军托我给您带个话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇军托我给您带句话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇军托我给你带句话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇军托我给您带句话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇军托我给您带个话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇军托我给您带个话</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一起学习新姿势呗，反正都是学习</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光速打脸[fn=58]以后周日上午和以前不一样了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章说周日上午要怎么过来着[fn=31]</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可可爱爱[fn=21]</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;赵兄托我给你办点事</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;系统沉默了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建议加一点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说起笑啊，我们是专业的[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我很讨厌别人认真做的事被嘲笑，但是我不得不承认有些真的很好笑，，，</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=48][fn=48][fn=48]我快去世了</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是你小子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;520了兄弟们，你们没有女朋友，学不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要对女朋友说去。（我有女朋友，手动狗头）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;读者一直都这么有眼光 总能从起点大厕所找到金子来（doge）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了学到……[fn=12]我没女朋友</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿，那小子眼光一直挺好的</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“村上。”
“我在。”
“村上。”
“怎么了？”
“你得说我在。”
“嗯。”
“村上。”
“我在。”
……</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对A要不起！
坚  壁  清  野  [fn=4]</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;白丝加分</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我对腿没有别的想法，我只是在研究它——渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原来真的没人玩原神了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘶哈~嘶哈~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建议去足球场，那里的好兄弟踢球会穿这种袜[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来真的没人玩原神了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吸溜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接搜小腿袜去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图呢[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画这种袜子的确实不多，手机翻了一圈全是裸足跟过膝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打开图片翻了下，抱歉，没找到白色中筒袜，都是黑丝的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等个图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，来得早了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;xdm！我喜欢中筒袜！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就直说了，不过膝的都是异端</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各位有图么[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来了踢我</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我最近买了章丘大葱。真是又白又嫩，还很好吃。

就是有点洋葱的感觉，刺激眼睛</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不是那一段吗？
悠？
在的。
我喊你的名字的时候要回答“在的”。
好。
悠？
在的。

具体记不清了，大概是这样
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧皓辰！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蜜雪冰城开始循环播放</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=14]都一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。我以前女朋友，趁着我说梦话的时候也这样问过我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧皓辰！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是那一段吗？
悠？
在的。
我喊你的名字的时候要回答“在的”。
好。
悠？
在的。

具体记不清了，大概是这样
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有我想到“池早早”“欧皓辰”“我xuan你”吗[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沒想到還有人跟我一樣想到了光良的那個MV。
“我喜歡你，我好喜歡你啊！”
“喜歡誰？”
“蕭！淑！慎！”
“誰喜歡蕭淑慎？”
“王光良！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王光良爱萧淑慎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我爱你[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我爱清野凛[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天下女人都一样</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是往下看吗？</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈 其实已经摸过了</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看到宝特瓶就想到名场面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看成了伏特加</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;返回……腋下？！！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝特瓶？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放回</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不得不说这段话真棒，要说棒在哪里，我也不知道，可能棒就棒在我不知道它怎么棒，它就是这么的棒。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“像喜欢春天的熊一样”
乌鸦老村上了
我说的是村上春树</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;初见一眼就要一个下午,才能在夕阳落幕之后不舍离去,也就是说“此情之深，愈久愈长”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是得多读书啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;8分吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比昨天多一些，比明天少一些</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是挪威的森林捏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;读书多了不起啊！！！！
–对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“你有多喜欢我！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;钓鱼那天，不是和凛神约会去了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老村上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢你就像森林里的老虎全都变成黄油                                             《挪威的森林》--村上春树</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;简单的一段话，既不甜腻也不嗝人，却能打动人心，悄悄触碰到一股温柔的情意，挺好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打西边来了个喇嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmm被狗粮噎住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爆炸吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么我要在520看这个呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟又死了，你撑死的嘛，乌鸦[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好嘛 520文案偷到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“像喜欢春天的熊一样”
乌鸦老村上了
我说的是村上春树</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;kswl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不得不说这段话真棒，要说棒在哪里，我也不知道，可能棒就棒在我不知道它怎么棒，它就是这么的棒。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我被齁死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦的奇特比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;糖度超标</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对内交流</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好厉害我去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好历害，但凡有一成功夫都不至于单身</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说话的艺术，可以啊，这些对话设计都挺精巧的。不像大部分网文作者只能说点自以为得意的油腻土味情话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等等挪威的森林的男主好像也叫渡边，哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;告实在是高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想求一波鸦桑的书单了，乌鸦重新唤起了我读书的兴趣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求生度Max</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦的文笔是真的好</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想让我被你戳穿吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：其实是我想戳穿清野[fn=4]</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;逐渐猫化</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从
心</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一个小时[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛啊牛啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不用上厕所吗</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;线条确实很完美，诶嘿嘿[fn=21]</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周日周日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年年如此，家家如此，今年自然也是如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尽管如此，你还是个C</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一直如此？
名词解释：一旦渡边彻直了就只能这样了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊那凛只能排周六了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怀疑九条老爸就是这么没的，（真）姬你太美！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你敢说将来一成不变么？清野凛第一个就不同意。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好奢靡的生活，不过我喜欢</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;h？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压力马斯内(¦3[▓▓]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圣 地 巡 游</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ん？</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=46][fn=46][fn=46][fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的神，她还不知道发生了什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟不能太快啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抵达</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你就惯着他吧，哼</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么，原来树冠除了用波浪线画以外，居然还有别的画法的啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是这样的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骂我？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯哼，瞧不起我抽象派大师渡边彻？？</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;用王者的气质说着中二年级的话语</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦，这该死男人，充满了这该死的魅力。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说起来还有这么个东西呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起（唯一进化者），难得看过几次的小说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新涩盖诺卡密</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大老师语录</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其他人做得到吗？！（夜神月.jpg）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手插进兜里，我都看错了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就是新世界的卡密</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦咧哇，卡密哒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯一神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去死吧渡边，新世界没有载你的船
美姬是大家的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用王者的气质说着中二年级的话语</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦，这该死男人，充满了这该死的魅力。</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=24]</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;此透视非彼透视啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但其实，素描可以当纯理性的东西看，完全依照规律就可以画得有模有样，以渡边的智商应该不难的...吧？——一名学习素描两个月的理科生</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，诚实的渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？你不对径[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这说的是画法透视吧[fn=22]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;校花的贴身高手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有这能力就研究人体艺术了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛为了能一直读心，也是学了好多之前不屑的宅知识</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;诚一郎点了个赞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;概率低，那就把总数搞上去[fn=31]——鲁迅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正有四个，总有希望的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的艺术病毒终于被发现了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬要生四个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我认为有道理，毕竟我的艺术细菌不太好</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你对渡边彻高高在上！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出息了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说法因人而异</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑死～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史总是惊人的相似，去年520你单身，今年520你还是单身。
而我？
✔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她绝无仅有
站在自己坚守的世界里，闪闪发亮
它是特殊的，就像《旧约》里说的，才德的女子很多，唯独你超过一切
520快乐
清野神大人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前女友都结婚生小孩，我却还在喊着美姬党头顶青天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下一篇的男主就是渡边彻会透视的娃[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完睡觉觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是谁？520大半夜不睡觉，看着狗粮文一脸姨母笑，而且还没有对象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;单身快乐，祝我快乐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完睡觉，梦也甜甜的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完睡觉💤
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史总是惊人的相似，去年520你单身，今年520你还是单身。
而我？
✔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜甜的，真爽</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要素察觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？（察觉）</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真棒</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嗯嗯，掠过的乌鸦，请问你单身么？你过520吗？不过今晚就加更吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示单身，明白了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;或许乌鸦也是…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界观测者——乌鸦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本作的吉祥物</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是你吗，没女友的作者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示单身，明白了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捕捉作者一枚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦又串戏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦你又来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯嗯，掠过的乌鸦，请问你单身么？你过520吗？不过今晚就加更吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者再次出场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错(*￣m￣)，是作者</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;邪迪[fn=36]</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬和凛贴贴</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里的理解不应该是清野以为美姬已经不认为清野能威胁到她了吗?也就是以为美姬已经确定了彻的忠诚。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为满足了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贤者时间[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说呢[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为做了个爽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来之前亲昵够了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边说的是实话，所以凛转移话题了</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;因为早上交公粮了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早上吃腻了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说话，羽绒服里塞得什么.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提上裤子说话就是硬气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲完了心态就是从容</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;技能冷却时间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贤者模式</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是可怜🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;警觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧！敏锐的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;转移话题[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早上吃腻了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为早上交公粮了</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛：你一直在笑我，你都没停过
彻，美姬：我们受过专业的训练。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬&彻：我好怕怕[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在笑什么[fn=60]</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;R桑就是如此的傲娇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你倒是搭搭渡边的手啊】</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;行动透露出来了真实想法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;傲娇の凛酱</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哼哼神也是要保持百分之三十的神秘的 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然，九条跟清野才是原配[fn=26]</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只有晚上见过，才知道白天根本不算辛苦[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们不是不相信你，就是想一起开开眼界。麻烦乌鸦好好安排个十万字。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我寻思着任何路人甲都会感觉你很爽啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你确定想说的，不是整夜都很辛苦？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不信  让我康康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的惩罚对我来说是奖励，啊，我的女王！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你以为幸福的是渡边彻，其实最幸福的人ko no美姬哒！</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日本女生是不会像中国女生一样手牵手的。因为这样会被误会成蕾丝。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，不是我以为是三角恋，原来是三个人恋爱[fn=40][fn=40][fn=40]嫉妒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贴贴 贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前有看过一个介绍中日差异的视频，日本女生之间不牵手或挽着胳膊，只有情侣才这么做，所以看到中国女生手牵手或者挽着手，很诧异，甚至因为她们是蕾丝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶[fn=31]</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好臭的评论区</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼哼哼啊啊啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仙贝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下北泽の先辈</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻海皇向来是没什么所谓的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻喜欢女装[fn=31]尤其是巫女服 艺伎服 护士服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿着就行？</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;系统去那里了？d(ŐдŐ๑)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我初中的时候，04年左右吧，大头贴很流行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到圆谷英二老爷子了</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哪个单身狗在520熬夜看狗粮文[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但我会一个人去电影院看电影🤡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmm。。办身份证？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;据说日本那边挽着手走路会被当成百合，这点和中国是真不一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;…告辞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鲁特拉曼 欧布</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;临时知道需要证件照的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孤独的唯一神[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得超人有一段经典的在拍大头贴的亭子里变身的名场面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁会去一个人看电影呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次真的是蚌埠住了xdm🤡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但我会一个人去电影院看电影🤡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪个单身狗在520熬夜看狗粮文[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别骂了别骂了</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;细节</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;很快啊，突袭她一个小同志，一个闪电五连拍</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦可以把这张画出来么，想看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈拉美姬的小脸，渡边你好勇，美姬好可爱</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没想到有一天，清野凛这三个字会跟目瞪口呆连在一起...</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(゜ロ゜) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震惊猿神一整年</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]这种温馨的场面却要完结了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和真，阿库娅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太有场面感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脸肿汉化组[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;琦拉琦拉和阿雄的大头贴也不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等我有钱了我一定要买一部能看图片的手机.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野：那我呢😶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有画面了</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野全程划水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有不也活着🍋🍋🍋🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越开心，就想到还有十天就……</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神保町哀歌好好听</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正宫的催促</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和好了，要实现小时候的梦想吗？正是如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉美姬更懂事。。</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实从合理性来说轻井泽之前之前就可以说是结束了，后面就感觉像是为了happyending而写的一样，尽管我很喜欢……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用什么拿下？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，美姬，这真的还是你吗，别说开头了，和中期比变化的也太大了[fn=41]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;必须拿下！</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;直接跪在她面前说求求你跟我交往</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大妇气质</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;主意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主义——主意</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我可以和你们同时交往</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有清野凛屁股的温度</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;越相信，渡边就对美姬越有感觉。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一旦你驯服了什么,就要对她负责,永远的负责。          
        ——圣埃克絮佩里《小王子》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有对你身体的迷恋[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲责任的渣男。</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有逃走啊。。。还是怕失去渡边</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我不信是因为这个[fn=43]</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我要酸麻了，呜呜呜，美姬，我的美姬[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在场，我是空气[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;稚气？？九条真姬？？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此，没有不也活着………美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在现场，我是垫子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是我，我就嗦手指[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜！虽然清野神很香，但美姬太可爱了！我的美姬！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在现场，我是司机</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是时间变快了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还没上车呢啊.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快了!车速快了～[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车速变快了</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;话说以后三人成行怎么办，，，，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又干了个爽是吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，乌鸦的潜台词我get到了，昨晚做了对吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野工具书，渡边工具人石锤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;左右开弓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常抄作业</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前几天没迫害一木我都睡不着觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她来了！我们的迫害对象一木回来了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等一个迫害[fn=4]</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬太辛苦了，又要应付工作，又要应付渡边[fn=60]</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;TMD，这个lsp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不对劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵老色批了[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可直视神！不然你会爱上她</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边不是人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边这个怂憨憨除外</p>
`;
default:
			return '';
	}
}
        