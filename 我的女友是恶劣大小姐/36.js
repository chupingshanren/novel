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
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这叫晚更？本来都准备睡了，结果看一眼更了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，这也是一种鸽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，被骗了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能没人看到吧，先祝自己生日快乐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，我的超人！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦的嘴，骗人的鬼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请了个寂寞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，差点被骗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被骗了[fn=28]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;惊了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;惊喜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是晚更嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意外惊喜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;信你个鬼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌拉</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，美姬不想让你们看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强迫症患者啊</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得是避开新后宫的世界线，龙王姬属性还是很突出的</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要我说，我就觉得九条美姬是他妈世界上最可爱的女人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;裂开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结合上一句，笑裂开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，你不想[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：不，你不喜欢舒适</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈你以为在话剧里你急站起来了吗[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家庭弟位</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;的东西？</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所咧哇多卡那！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打起来打起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;导入结局CG:
一年后
大家的彻.JPG[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我最喜欢看，女人吵架</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬：清野凛，败犬食尘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真正的爱情
不是物质上的门当户对
而是灵魂间的势均力敌
《领风者》——马克思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：“明明我才是九条家的女婿”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胡说，明明是玉藻家的[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是国井家的[fn=4]</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;全都是受害者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说的这个交易，它正经吗?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你那是正经交易吗</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里人多，回家我给你跪下了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姑奶奶们回家再打[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一语四关</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;女子落语
吃饭睡觉婊玛（佐）丽（仓）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女性相声我只推荐虚研社小希小桃[fn=36]</p>
`;
        case -10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一点左右更新</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，清野凛，我的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;带佬后面的剧情要是不好写没事的，哪怕三四天一更，只要你不切，不大纲遁就行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天这是咋了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不对劲咋还没有更新</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;适逢七月，大旱，草木皆枯。水，荒漠之稀者也。南方有一山，高千万丈，四面险峻，凡攀者皆落而亡，故世人称为奇巅；奇巅上，有一鸦翱于空，其色皆黑，如碳粉般乌亮，故得名乌鸦。一日，乌鸦从枯河中掠过，口含石子，落于荒地。地上有一瓶，瓶中有稀水和沙石。乌鸦至于瓶前，口中石皆落入瓶中，石子数之多，水渐满也。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加油，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快更，写的越多越好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别跟我说清野神答应就完结，我不能接受！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就不能多写点吗[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这文字掌控能力真的太强了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是高潮？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要完结了？可以多写写番外吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了啥又好像没看啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道是下一章太难写了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦你这章断的[fn=47][fn=47][fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道是该好耶还是该哀叹，只期盼能尽快看到鸦桑明日份的奇迹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天这一章好像有点急，错别字有点多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是快完了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奥力给，干就完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是接下来就是最后一两个大章就结束了[fn=12][fn=12]</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;失去了所有的感情，得到了神灵的救赎。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐赛高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除了所爱之外别无他物
明日麻衣， 为爱而生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从出生开始，我没有任何感情，人偶？空壳？或许吧，旁人可能会感到遗憾，但我连这份感情都不具有。终有一天，我也会死，并不是自杀，因为我没有这种感情。我有时也会向神灵祈祷，祈祷我的心动，但我也并不期待。直到。。。那个人的到来，我头一次知道，原来，这个世界，真美好啊？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐用所有其他感情换来了渡边的爱情</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;关键是，再过不久渡边也能直接进去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？这都要迫害一木？？

你很懂我们啊乌鸦[fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：岂可修，难道老娘就不算是女生了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又在迫害一木葵了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：对不起，你们都是我的后宫[fn=58]我全控！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：我太难了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵，性别：一木[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：我连性别都变了么？？？</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;翻译翻译</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面乌鸦说了，美姬知道渡边要干嘛，这样的剧情，加上美姬作为正宫来穿针引线，最后来到凛神旁边，这一波是夫唱妇随</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉美姬他们的剧本可能和彻心中的最终版本不一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连恶魔也怕母老虎[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你给翻译翻译，什么TMD叫TMD惊喜！！！</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老婆回娘家，恶魔委曲求全</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔委屈[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉冲，是</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谁上谁沉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不对劲
你羡慕谁？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们说的都对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对于麻衣来说，渡边就是她的神灵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是麻衣学姐啊！麻衣学姐yyds[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻:无论在哪里，我的魅力都这么</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;换走了神的电话号码</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点形象</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是不是有一种钦定的感觉？</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;祂们，我快要颅内高潮了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，细节</p>
`;
        case 154:
            return `
            `;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;疯狂明示</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;漆黑无垠深渊中的光有多吸引人呢?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个话剧有点东西啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐啊[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的世界是没有太阳的，但并不黑暗，因为有其他的东西替代了太阳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不需要光喜欢我，我只需要能靠近它就好了，感受他的温暖……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边这剧本下了心血啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其他人只是无源的光，穿过精致透明的水晶瓶后留不下一丝痕迹，彻就像太阳一样，穿过水晶瓶的同时让瓶中充满了阳光的味道，只要能被照耀着就好，哪怕这光并不是为她而来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话剧上演的既是彻与姑娘们的过去，现在，也是大家的未来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个话剧有点东西啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;漆黑无垠深渊中的光有多吸引人呢?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三个一楼…………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：我的神，渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是明日麻衣这个人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是麻衣的真实写照吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全部都是隐喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐只爱渡边</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;收了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早见沙织小恶魔声线
啊哈哈～[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加推！加推！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好坏的小恶魔，爱了爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大旮旯.mp3</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大卡拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡哇伊～</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想看这部剧了！</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一小段就把人物的可爱一面写的活灵活现。
不愧是你，乌鸦鸽[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有九条，本书就成了全处全收的装逼打脸文
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;qcqs yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一小段就把人物的可爱一面写的活灵活现。
不愧是你，乌鸦鸽[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来几个只有早见薰，好美的单线番外吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一直有一种直觉:如果没有起点,所有美少女就都将成为后宫。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有九条，本书就成了全处全收的装逼打脸文
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建议完本了多开几条线的番外[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一直有种感觉，要是没有清野神、没有系统，女主大概率是早见学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她一定是喜欢我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早见股有吗，只有有我就买</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;村上渣男点了个赞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;崇拜是距离理解最遥远的距离</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;憧憬是距离理解最遥远的感情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😡👊🏻给渣男一拳</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说不清</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人是整体，如果没有美貌你会爱我吗？如果没有财富你会爱我吗？如果我不出众，没有才能，你会爱我吗？如果我失去记忆你会爱我吗？这些都是矫情者的无病呻吟，让人羡慕其天真可爱与上天的青睐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自私地爱着神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是病娇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;占有欲？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一开始可能是被吸引，后来却觉醒了真正的爱。
错误的开始也未必不能有美好的结果
美姬与彻也是如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 问题来了，是爱渡边附带美魅的魅力值，还是爱渡边本身的灵魂呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吾只爱心中之神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明日麻衣的感情</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明年不是久美子夺金吗？（不过金奖好像不止一个）</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;女骑士是谁演的？
一木不是演路人吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有女骑士的扮演者没有观众在乎是谁，一木又被迫害到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咕…杀了我吧</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条的父亲去世，为了家族，接受了谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结果王国自己跑了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了告白成功，我借助了渡边的力量</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我好像懂了，这是指一木去找人类观察社去追明日，结果明日投怀渡边的故事[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家的信任(柱间.jpg)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没想那么多</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里早见熏说的双簧部唯二成员是之前渡边开玩笑说过的，可以看出早见确实对渡边有很大好感，记得一清二楚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我他妈直呼好家伙，这要是从小说改到galgame，然后再从galgame转动漫的话，我看这能出的不比fate少</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实一开始渡边确实很喜欢熏的温柔，这个角色如果以没有挂的渡边为对象的话，其实相当的搭，完全可以做日常甜漫的故事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早见熏if线开启：
两个人的双簧部</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈 好可爱呀 卡哇伊ฅฅ*</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;魔女之夜！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快躲到彻怀里来[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是神怒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫你不听话，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一刻应该抓住她的脚把她倒挂起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没扑进怀里吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一般该抱住她</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;向往诚实，却又不得不说谎</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;拜托了，爱之恶魔[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来，可好？</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，在所有一切之上是她，我的神，清野凛</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;熟练</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条太太（小）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您好，渡边太太，真的人妻力Max</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以说凛只是仙女，渡边才是这个世界的卡密！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告，最特别的是她，在所有一切之上是她，我的神，清野凛</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;边城浪子。渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我是美有姬</p>
`;
        case 178:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;预言一下哈
340.忽然狂风（完）
341.世界尽头（一）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，在一切之上是她，我的神九条真姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汪峰！听我号令！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坐久了痛，洗澡先</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如梦似幻，狂风止息</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下一更不见了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昨晚说的要好好打磨剧情 今晚写到了 大概一点左右发～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;撑不住了宝，明天再看。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快更新啊宝，我都困了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没更新……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;更新了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能说一模一样，只能说很像</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来还说这章会晚点更新没想到还是按时更新了，惊喜。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我叼，这卡文卡的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天空一阵巨响，仙女乌鸦闪亮登场！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写的好，票子给你预定了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有没有大佬出个图片[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，在一切之上是她，我的神九条真姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这啊？乌鸦第一次说细琢，我还以为会是高潮呢[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小剧场明明白白啊，美姬对渡边的控制欲依旧是满满的，小泉老师（略），麻衣学姐对渡边深深的依赖，接下来是凛的回合！少女呀 用你的决心去改变话剧的结局！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的出场永远都是那么夺人眼球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真正的爱情
不是物质上的门当户对
而是灵魂间的势均力敌
《领风者》——马克思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶啊这个断章！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;预言一下哈
340.忽然狂风（完）
341.世界尽头（一）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想看[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，考虑一下大结局让悠悠一家出来打个酱油呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;断的真好[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告，最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告，最特别是她，在所有的一切之上是她，我的仙女清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的仙女，清野凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌拉，出现吧，凛！</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真不能带入式阅读啊啊啊啊啊啊啊啊</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;扎不多得嘞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差不多得了😅</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如果没有清野凛，在这种相处模式下，九条有可能称为渡边的挚爱，但是如果不成立，九条永远不会赢，顶多不会输。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老夫老妻什么的，不过是看客的看法而已。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实领带这点可以看出渡边和九条的不合，九条除了占有欲，还有控制欲，渡边只是从忍让变成了迁就。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都老夫老妻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬天下第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬真的无敌了，我感觉我要动摇对凛酱的决心了</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;代入感来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最强英雄一木葵使用了她的迫害引擎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帝  王  引  擎</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;冰龟罗克！</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;莫非要来个中庭告白的东东，能让渡边紧张的，会是什么骚操作呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是男人的话，为了某人而变强吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Hazard On!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;即便赌上蓝羽的性命！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;英雄可不能临阵脱逃啊</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看来剧本并不简单，渡边肯定准备了其他骚操作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一语双关，指的是美姬和凛神和好的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个（勾）字用的妙！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;勾到想要的人/生[fn=58]孩子名都想好了是吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;10.5号，见证历史，楼上成功的避开了洪荒神兽的视线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然没炸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来剧本并不简单，渡边肯定准备了其他骚操作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记录一下
5月13日7：31
楼上还活着
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人只有努力走下去，才能勾引到想要的人[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要做出正确的决定，人生就会变得灿烂起来，加油……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记录一下，3:20所有楼层都还活着。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坐等评论区日常车祸现场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以，努力走下去，不要停下来啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一语双关，指的是美姬和凛神和好的事</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;——然后不跳了[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男呼吸法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;据科学理论来讲，这样只会加快速度</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我只是一个路过的卡面来打</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;雷光千道!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;演完之后 拨云见日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以-雷霆！！ 击碎黑暗！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后，下一曲开始了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到狂风的终点是天晴，世界的尽头是光明的未来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;通完结局的帷幕拉开</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不清楚乌鸦是不是玩过冥神的牧师节，感觉有点像</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我永远喜欢美姬！</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真姬痛哭，终究是错付了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;md就凭这谁特么再说美姬，我……我就哭给它看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只对你展露真心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥这么多百合厨？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也就是还有凛对吧，ね、ね</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻彻!  !  !</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🤺🤺别人都尝试过
🤺🤺但只有我成功我渴望
🤺🤺有价值的对手
🤺🤺刺穿他们！🤺🤺
🤺🤺要刺得快刺得狠！🤺
🤺🤺我的剑准备好了🤺
🤺🤺这也称得上是挑战吗🤺
🤺🤺状态真差 🤺
🤺🤺他们不敢还击！🤺
🤺🤺锐利的剑，锐利的眼!🤺🤺

渡边速速与我击剑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为东京帅哥打call</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁不喜欢温柔的渡边呢？🤺🤺🤺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边！我的渡边！



这样?</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有点双关的意思，因为她要去找的是凛</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛:反正我是笑不出来 眼泪在肚子里打转</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;介揍是自由![fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完蛋，剧情开始跌宕起伏了</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你好看起来真好看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写的真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是有多好看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某某凛：这仇我记下了[fn=28]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀了我给你们助助兴？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又当着老娘面调情！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示凛没有眉毛(不是)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眉毛？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是眉毛吧[fn=31]</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边君说的对！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;点的好哇</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬真的喜欢给渡边整理仪表，重头到尾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛啊牛啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我美姬还是适合按自己喜欢的来演，哪怕渡边（的剧本）也不能限制美姬的行动！</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个世界尽头，会不会象征着凛所追求的世界</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在后宫小说里谈百合，真有你的，纯爱里说牛头人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里不会是预言吧，美姬去了一个渡边彻不能接触的地方，在那个地方有清野凜，所以实锤美姬和凜搞百合，抛弃渡边彻，，，</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;马哒馁～[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=26]傲娇的美姬？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是再见吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;～Σ>―(〃°ω°〃)♡→～</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;少了个“们”吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好活！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是实话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了你</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;提前，今天错字有点多呀</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;确实是暗示老师忘记了那一个月
所以世界的尽头是指和渡边一起快乐的生活？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示老师啊</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;努力，要很努力
东京，一定要去东京</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做梦，然后遇到未来的男友[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经历了那个月，小泉老师回忆起了16岁的自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师想起了十六岁的自己</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥amsr[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道的，还以为又是什么道具</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那么蛇是吃什么东西塞牙了呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然但是弱小的只是从食物变成了奴隶[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有黄鼠狼给鸡拜年[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怀疑这都是真兔子真狼真鸟真蛇在接受命令.....</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们我找到了！女巫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这表达的啥？有课代表么！</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起了爱情公寓里面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不曾见过的另一个你</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;相互接受，相互改变</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里是不是改了?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;体谅渣男？</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明日麻衣</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;马克</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巫女服评论下面居然没有灵梦？这正常吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巫女服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33][fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巫女妆的学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：说的太对了！今晚就让学姐穿这身[fn=4]</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小泉忘记的一个月</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，女巫的经历就是青奈的经历啊！！</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;故事的映射太牛逼了，乌鸦牛逼[fn=35][fn=35][fn=35][fn=35][fn=35][fn=35][fn=35][fn=35][fn=63][fn=63][fn=63][fn=63]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：彻就是我的一切</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全部、彻吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想要的一切，已经得到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她已经得到了一切</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;细节满分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妻管严啦</p>
`;
default:
			return '';
	}
}
        