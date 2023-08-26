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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一路向西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从青奈到美姬[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;由内向外，从北京成到海棠叶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各位挺早啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前方多处高能 请仔细阅读</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好早</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么早？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从岩手县到东京，400公里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好早</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;由北向南，从北海道到东京，无人不知您更新的消息！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么早？有问题！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那么早？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天怎么回事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好早</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈呀一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很快啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好早</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天这么早？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;板凳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沙发</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师终于本垒了，老师党泪目，但没有完全泪目，就是有点像泪目，但实际没有泪目的感觉。嗯嗯，今天得逻辑也很通顺呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐为啥不过来，实现渡边君的三人大计划[fn=50]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;深夜。。青奈对美雪的专业知识表示了怀疑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🤤🤤🤤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;撒花，发糖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师的第一次嘛，和学姐商量了下。学姐还是能稍微体谅一下的....毕竟青奈妈妈....</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有画面，差评</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要喝椰奶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐为啥不过来，实现渡边君的三人大计划[fn=50]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧，我也要喝内内</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师终于本垒了，老师党泪目，但没有完全泪目，就是有点像泪目，但实际没有泪目的感觉。嗯嗯，今天得逻辑也很通顺呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今夜如果我将要死去，就把我埋葬在高耸的富士山下吧  [fn=42]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想吃奶糖（悲）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜(┯_┯)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;one</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小丑竟是美姬……不对，小丑是我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦，美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇哦哇哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！姬你太美！啊！姬你实在是太美！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姬你太美了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然好想你

你会在哪里

过得快乐或委屈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：俺也一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶😩，一个字酸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]不过如此，没有不也活着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我.....
或许，沉默才是正确的选择。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一点都不酸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦，美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小丑竟是美姬……不对，小丑是我</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这没搞反吗？</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;参考堀与宫村</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我的美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬啊[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬的改变</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦，美姬，我的美姬啊！</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;安全期随便🐍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来是中出了啊，甜死我了都[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看下面就突然明白了，原来是留在里面了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都结束了你问还有什么意思[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛神！你要支愣起来啊！
就差你了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该做的都做了，不该做的也做了</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呕吼，野战</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至少。。。在房间！</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日后再说[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日期很重要[fn=31]</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;早有预谋，看来是有备而来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;内设渡边依旧是处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么美肌还没怀上？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是那么可靠哦[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然但是，现实不要学小说不带套啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是有内力方便些</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有ber而来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是想命中还是想避开呢...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;内设渡边依旧是处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有备而来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早有预谋，看来是有备而来</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;路过</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她可不是随便找一天的啊，欲罢换休，计算精确，看来是有bear来</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;天天运动，就不会够吗，身体再好，那存量够吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也有可能是美姬到了后渡边在慢慢运动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;注意，这里是事后了。</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬麻衣化，不愧是东京帅哥，杀伤力巨大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还是喜欢你桀骜不驯的样子，请你恢复一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前的九条回不来了😔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点理解了，渡边灵魂在慢慢升华，纯粹强大的灵魂有意无意得感染了身边的人，有很强成瘾性</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想问下，这个空壳正经吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬别这样，我还想保留一下以前那个女王大人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曲面缝合，转化实体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;躯壳，都是躯壳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还是喜欢你桀骜不驯的样子，请你恢复一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被填满的意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，你不能这样啊，你不能如此堕落下去啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;局部空心化[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬麻衣化，不愧是东京帅哥，杀伤力巨大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;局部空壳?</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阿姨洗铁路，青奈老师~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艾希得路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬！我的美姬！</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不，是三晚，三个人。[fn=32]</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是不是年龄大了那个就不痛了，好像以前女的痛是因为结婚太早没发育完全</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我的美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬！</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬已经放弃了对她们的管控，彻底包容，同人应从后面几句开始写</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“用永远留着”或许是打多了用字，但也很有意味</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多了一个用？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师：嘤嘤嘤，你怎么还留着我的黑历史呀</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;女人的嘴，骗人的鬼[fn=37]</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“算了也不用你说了，到时候我去帮你按着她怎么样？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到下次在美姬面前和凛直播[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边和美姬对凛两面包夹芝士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬估计等着调戏清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“算了也不用你说了，到时候我去帮你按着她怎么样？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到美姬旁观凛的初体验</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到下次在美姬面前和凛直播[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：我要细节</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？美姬才是最后的大赢家
🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛酱现在最落后了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是一家三口，不算外人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;天大的谎言</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有画面了有画面了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这个骑，它正经吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻骑士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女骑士</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真的很难的，十年，在最容易动情的时候，最漂亮青春的时候，能一直保持等待的状态。老师yyds</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她对A</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各单位注意！带好笔记本，渡边课堂开课啦！</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呐~（六花音）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“お元気ですか”
“私は元気です”
“お元気ですか”
“私は元気です”
……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ā...á....ǎ...à哦！ā...á....ǎ...à哦诶！阿四弟，阿四刀，阿四带个弟个刀，阿四弟，阿四弟个刀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“你好吗 ”
 “我很好 ”😘😘</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=10]你们就没洗澡时候对着花洒漱过口吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘴唇不敏感的话为什么那么多人喜欢kiss</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘴唇很敏感的，不信你就用食指指甲轻轻的刮一下嘴唇</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;尽情地想你，享用你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;注意力，错别受</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫  没忍（不）住</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;叉出去，枪毙五分钟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，这就是学霸的世界吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜甜的感觉瞬间就终止了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😭😭😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当初考进来没压力吗，不是拼命了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，被他装到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叉出去，枪毙五分钟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，这就是学霸的世界吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;落泪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学神の凡尔赛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;河北考生泪目</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人话？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汝闻，人言否</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;他太会了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是有什么用呢[fn=12][fn=12][fn=12][fn=12][fn=12]我没有美姬，也没有凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，学到了！</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;去死吧，量子力学！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去死吧，数学！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去死吧，理工学科</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去死吧，数学统计方法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去死吧，解析几何</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去死吧，理论力学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去死吧，高数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去死吧，数学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去死吧，数学</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晃子有被内涵到[fn=4]</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真话掺着假话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣出了水平</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太会了呀</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;16岁不良jk小泉也不错呢</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说法因人而异</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在看到自由散漫，就想到袁老，有点泪目</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;去死吧！数学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呆了一个小时才出来，老师早就知道渡边的持久力了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;换衣服好像 大概有看看摸摸之类的 还想亲镜子里的自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至今我们仍不知道那天老师到底用渡边彻的身体做了什么</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬你已经完全沦陷了！</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;青奈老师抓住了渡边的把柄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴，老司机卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;垂直握把</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把握住了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抓住了未来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈抓住了未来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看这书费流量啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈老师抓住了渡边的把柄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;况起况起呜呜呜呜呜呜呜呜托马斯小火车开过去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;✈️✈️✈️✈️✈️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飙起来了？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伸。。。伸下去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，长瀞给学长洗手的姿势[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Cece？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴，老司机卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这韩漫我看过啊好像</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挖槽果然网友什么吊图都有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;散塞…</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师，你怎么这么熟练？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴，学生卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不想秒懂呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴，老司机卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车速爆表了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12][fn=12][fn=12]你怎么那么熟练啊</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;女装只有零次和无数次[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉没穿的那身教师职业装</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得，渡边彻穿什么，美姬就要穿什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬要穿？
给美姬挑一套护士装！</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;手机出毛病了，从起点自动跳转浏览器是怎么回事？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师，你就是个天才 😘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，你真是个天才，你就是做这个的料！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;📱：有风险
👴：坚持访问
📱：……
👴：转换电信
📱：好的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，你真是个天才。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上垒的天才</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？我也被……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手机出毛病了，从起点自动跳转浏览器是怎么回事？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天才</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我对手冲咖啡还是蛮有自信的[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是小泉老师，手法的天赋也异于常人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师，你就是个天才 😘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;才反应过来青奈在上！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好快的车车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;以后入门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;划重点了：小泉用渡边的身体体验过，所以她知道大概什么力度最爽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;装糊涂的天才</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只不过曾经拥有过，老熟练了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手冲………咖啡天才</p>
`;
        case 175:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;G</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一天过去了？？？</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是啊，以前多可爱啊，有事没事就沉东京湾里去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条家的美姬赛高</p>
`;
        case 179:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;光溜溜，被子盖在小腹！⊙⊙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有洁癖的美姬甚至愿意和渡边穿同一条👗[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光溜溜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没穿呢～～[fn=9]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来这是事后了吗……乌鸦删我美姬戏份</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;下雪声音都听得到吗...</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晚安，我的九条公主</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;First blood![fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;初雪在日本文化里有啥特殊含义嘛，最近看了一个催泪的日漫开头结尾都是初雪了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一般在被窝里听到下雪了都是睡意直接上来，挡都挡不住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也是你的</p>
`;
        case 181:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哒咩[fn=5]嗨吖库[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哒咩哦，哒咩~哒咩～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=47][fn=37][fn=37][fn=37]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗒～～咩</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;初血[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看语境，应该不是“今天”，而是“今年吧”</p>
`;
        case 182:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;养了一个月，二刷了，又看完了[fn=22]</p>
`;
        case 183:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;零次 and 无数次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;章末总结：这个凛神就是逊啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来个性转番外，绝世的美少女渡边彻被一群帅哥包围的故事，瞬间就变成乙女向的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别女装了，性转吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额，按照这个进度，5月底6月初真的能写完吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告：
最特别是她，在所有一切之上是她，
我的神，
清野凛。
晚安，R酱💤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;裙子和高跟鞋丝袜都曾是男装，现在男孩子穿只是复古而已[fn=43][fn=43][fn=43][fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神啊，就差你了，小泉妹妹都上垒了呀，你倒是支愣起来啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知：女装只有无数次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;章末总结：这个凛神就是逊啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都要完结了，神的出场率却降低了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿的下吗。。。腰部直接撑爆好吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别傲娇了，渡边就是想女装，快点穿上让我康康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛
另外渡边还是处(ಡωಡ) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘻嘻嘻嘻嘻嘻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女仆装也不算，都不算都不算</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;壮士一去兮不复还</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不算不算，快穿吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬天下第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;零次 and 无数次</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;热血沸腾</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;天 打错了吧，应该是年</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;酒店窗前确实刺激</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;！窗台前！？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道要？那么刺激？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给老师也来点气血药吧</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我浏览器动了，我不看了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，什么时候，浏览器自己打开了，是幻术吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会玩啊，有画面了嗷[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很会嘛～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇哦</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;女仆们渐渐习惯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;省略号好评</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有什么是我付费不能看的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;针对这六个点，我还有两个点要提
.
.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出现了！六个点大法！</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不用去去洗一下直接穿吗？ 还是说老师想把渡边的全部留在里面一整天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行！至少要毕业！
至少要成年！
......
至少要周末。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提起裤子说话就是硬气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提上裤子：不行！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成断掉的内裤…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿上裤子就是硬气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就老师这性格，保证回去就乖乖换上[fn=7]</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我们至今仍未知道那几个消失的评论想说什么，话说为什么这本书消失的评论你们的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;22个评论呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刹那抓住了未来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这样没有番外很难收场啊</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太温柔了，贤妻良母夫复何求</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;腿不软的吗？</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那不是更好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;慢一点不好吗</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就是硬气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要奶汁！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要海水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要肾宝</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只有我一个人在思考，青奈走路动作会不会奇怪吗……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看太快看成往怀里倒[fn=31]</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;果然要施肥[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么红了，容光焕发，怎么又黄了，防冷涂的蜡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边你滋润得好啊！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不是么[fn=58]</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;某人的牛奶吗🙈🙈</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美雪眉毛一挑，已经看透了一切</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雪之下(幻视</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和下面的血有关系</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇偶，校医已经看穿一切</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;纯情晃子hhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;校医已经看穿一切</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看你根本是不懂噢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂得都懂</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美雪老司机</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;实在不行，我可以委屈一下自己帮帮你[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;私下的小孩子性格，整本书下来一点没变啊。真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;单身狗总是有很多理由，就像看这条书评的你们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;理由充分</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是刚挤出来的我不喝啊[fn=32]</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我也要喝牛奶~</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师能走路？渡边不行啊</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呱太？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;儿子成标本了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呱呱呱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啥意思</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怪猎里面温泉里有猴子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在《声优》里有提到村上悠几个人看泡温泉的红脸猴子。这算是联动吗？[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好想做嘉然小姐的红脸猴子🐵啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白马家的那只猴子吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圣诞之吻里的猴子🐒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泡溫泉的猴子適合遠觀 ， 走近了就知道其實沒有那麼美好， 只講一句，猴子可不會看地方上廁所……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水猴子</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;路过</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京不太热啊</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;核废水危害地球所有生物</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只能佩服庵野秀明，鬼才啊，核废水的操作跟电影不能说一模一样，只能说一点不差。</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想想都有点小激动呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有枭雄之资</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这波是小猪佩奇背着蛙太</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在睡觉》</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;睡不醒啊 我也是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊我的美姬</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我还没上车呢[fn=31]</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;守护之花好像……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这花能干啥来着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;救命花和听话鸟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凑合看着不是同鸟种</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给美姬的那朵吧，好久之前得了。</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哥斯拉到底做错了什么！[fn=31]</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：当然是你啊，还能干别的什么吗</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;停顿一会X
害羞一会✓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《傲娇的美姬》</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这才是爱情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尚青奈的时候，也想让你尚一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了学到了(*^▽^)/★*☆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赶紧记在本本上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种感觉就，，特别真实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讨厌说这个是绿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还给你买了绿色的礼物哟！</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;ばが</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;韩语：啪咕呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个</p>
`;
default:
			return '';
	}
}
        