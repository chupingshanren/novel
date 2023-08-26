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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;wc还有44章完结。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;失恋了，看看渡边，看看清野，散散心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡不着觉，果然等到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波啊～这波我还能吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗨嗨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生产队的驴都不敢更这么慢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;慢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜哇～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;印</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前排</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;暗示太太要穿兔女郎！(错乱)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胡适，来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;工具莲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四暗刻单骑 役满</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;master piece</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;断幺九！一千点！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杠九条，岭上开花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条太太单吊九条</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脱衣麻将</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太🐰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太乐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太兔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太兔可还行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示太太要穿兔女郎！(错乱)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太兔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个兔？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太兔🤔</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这可不能迟到哦🙄</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;能读心算不算作弊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛居然会打麻将[fn=31]</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;然后当着美姬的面记下了2W字的笔记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个胸杀案的凶手首先就可以排除凛~嗯，很合理！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像是叫避暑地的猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后当着美姬的面记下了2W字的笔记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个胸杀案的凶手首先就可以排除凛~嗯，很合理！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛:我已经在研究下一个对手了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;失乐园吧，我记得是在轻井泽，作者也姓渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别吧，清野暗杀谁都会被反杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我知道是哪本，是《五等分的东京帅哥》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轻井泽胸杀案</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盲猜是情杀，或者说柴刀[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学习对渣男专用柴刀术[fn=4]</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野——母女[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我猜下面会有邪教徒吟唱清野幽子</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;腕力[fn=57]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么想到是用小彻顶住了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太一个比一个狡猾[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日乳牛顿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛顿的棺材板，被渡边屑死死地按了回去</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咕嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你甚至都没动手抬！还敢说爱我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是原配母亲更加亲近</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;安倍不是让赌博又合法了么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脱  衣  麻  将</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不动声色的转移了话题[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得这是法律禁止的事情. jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脱衣麻将[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，话题被转移了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赌女儿，或者赌太太您自己也行[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赌哪个老婆陪夜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我赌你枪里没有子弹</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真没眼力见（笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥一动不动</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;自己动[fn=4]</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;贴！都给我贴！</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;提前行使女友啊不，是岳母权[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很好 很自然</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条 vs 清野</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你说你个老阿姨装什么青春少女</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《不为难的小事》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到国王游戏🤴🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接快进到脱衣麻将？或者另类真心话大冒险</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻:你在玩🔥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是脱又是摸的，这麻将太不正经了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说这个我可就不困了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽 脱衣麻将？ 有小时候玩那种麻将街机的感觉了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脱衣麻将</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子加油[fn=63]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统:您所选择的 麻将（大师级）存在未知风险，请谨慎选择。
渡边:坚持学习！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到大清早的你们为什么不穿衣服[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像你出一张票，别人吃碰这张牌胡了，你是点炮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻:你在玩🔥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脱衣麻将</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞬间清醒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好！快进到无遮大会[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是脱又是摸的，这麻将太不正经了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太点炮</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真的吗？我不信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来，让我看看！</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？？？这几段都没有评论？？？书友们咋了？？？</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只是为了和的话确实应该鸣牌速攻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么一群假日麻玩家，断幺役牌染手三色都有可能啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“进呀”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种吃的情况下，只能是有场风牌或者清一色混一色，就那几种牌型</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日麻不是一般不副露的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武汉麻将都能吃的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;敢吃，莫不是断幺九</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刮风下雨</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这 反人类操作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么会是穿衣麻将啊？？？你当你的读者都是正经人吗（震怒！）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmmmm,去室内穿一件衣服自摸？还是渡边会玩啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶啊，你当读者老爷都是lsp吗？当然是啊！所以不要这样啊！（震声）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到裹成球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这这这，这不懂人心的玩法</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那就好说了，渡边彻麻将的水平和画画也是同一水平的，多输掉几次也是理所当然</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是太太组，这样对面就分裂了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荣！断幺九！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神和渡边有队内语音的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太福利</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;打麻将真有意思[fn=4] </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神，这句话是谎言吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自摸，大三元，四暗刻，两倍役满</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野有幸运挂件渡边也没有啊，凭啥他胡的这么快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边你绝对出老千了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神，这句话是谎言吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打麻将真有意思[fn=4] </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一巡这个牌，这要在现实就可以吃好喝好准备后事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看着这字就听到雀魂一姬的声音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？这是几倍役满？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打麻将真有意思[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？这是人能打出来的牌？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么神仙麻将啊</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;玲珑小巧，一脉相承</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我们至今仍未知道这个十七岁的太太是哪年生的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我很好奇→_→     **？到底是个啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;89不离十</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;**不离十啊，看这么多小说大家都不知道怎么肥四吗[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;根据前几章提到的2018年来算，真姬太太应该是个八零后</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1969，因为69不对劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1978？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1997年，我学会了。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦直接打的星号吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;78年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我很好奇→_→     **？到底是个啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;199X年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们至今仍未知道这个十七岁的太太是哪年生的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我说个数，19999</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来猜个数：1988</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是去取戒指了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丝袜也是衣服！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;困觉姬你再不起床就要被妈妈偷家辣[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回卧室穿上了10层小雨伞[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去取美姬的幸运戒指了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回卧室穿上三双袜子五条内裤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里联系下文，是回去拿了美姬的戒指自己用！</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;防谁了这是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人类史上最差劲的发明！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这意思太明显了吧，别人都是在最外面加，你是在最里面加，啧啧[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我康康！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不信 除非给我康康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不 这句话是在说 神本来没穿安全裤 
那她的意图 大家懂得都懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奈斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:现在反悔还来得及吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的吗 我不信</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;门前自摸？这不是番外里的九条母亲做的事么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无限立直--</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;安全裤之后还有内衣，立于不败之地[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以，打麻将上瘾的渡边君，你忘了今天等待和你约会的麻衣？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这让我想起《重活了》里面。。。</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;国士无双我的梦想，每次都被截胡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就离谱，万恶的欧洲人吃我一矛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国士无双做成过几次，是真的难胡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次做国士无双十三面都被截胡，导致现在一把国士无双都没胡过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个？[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？你有问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;韩信：你抢我台词～～[fn=50][fn=50]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就离谱，万恶的欧洲人吃我一矛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国士无双我的梦想，每次都被截胡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;离谱</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大牌不是全靠自摸么，也能点炮？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是种族优势</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;难道还徒手削白板么🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盲猜一波美姬起床发现戒指不见人人急了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;联系上下文,是真话,渡边从美姬那里取来了幸运戒指.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句是谎言，被清野看穿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸运的渡边？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我lbw没有开挂！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打麻将这种事情，只要从佐打到悠，自然就能赢了</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他实在太快了</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;岭上开花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻神渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您就是宫永徹？</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还是您演技到位</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原来是幸运戒指的功劳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦，幸运戒指</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;醒来第一件事是找戒指么，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;  被渡边拿走了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我戒指💍呢[fn=58]</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;虽然只有一点幸运，但是渡边本身就很强啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得只提升一点点运气吧，有这么夸张？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来用了幸运戒指</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;靠幸运戒指作弊！卑鄙的渡边</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今天是不需要被渡边叫自己发现戒指不见着急起床的小美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬急了，需要有仪式感的道具，比如说戒指💍确定法理性</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬也太可爱了吧~
我选择凛</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有删减，不太通顺</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;温柔（危险）的笑容[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神get到了重点[fn=4]</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：居然不带我玩！
《美姬在睡觉》</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你搁这原地TP呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：《美姬在打麻将》
高情商：《美姬在打麻将》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要小鹿说出去做头发，绿帽子就追不上他。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是高情商的说话技巧[fn=31]</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;细啊 只有跟美姬出去才坚持穿外套</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和美姬在一起的渡边时时刻刻会穿着外套，和其他人在一起时就不一定了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼呢？？？</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;困觉姬的夜中榨汁作业[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，请加强力度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太你对渡边永动机一无所知[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;火速消失，xs</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们五个轮流上渡边都不可能被收拾干净</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸运传递</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以需要凛酱帮忙嘛[fn=50]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，根本不可能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以其实戒指是幸运饰品吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尽力了，但那是一件不可能的事，最后他自摸了 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬尽力了，不能还赖她
对象不是人，肩上能立马
俩妈一个姐，你行你上啊
四个一起上，照样全趴下
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个可能不够</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怎么突然这么急了，这戒指都戴了多长时间了，这不像清野神了呀[fn=4][fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么说想起只有清野没有渡边的幸运饰品</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;微量提升。有点夸张了。不过美姬原本应该就是幸运a，所以提升不明显?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸运戒指这不作弊吗[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跳舞的邪气凛然也是好运戒指[fn=4]，这么多年我居然还记得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;敏锐的清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里凛酱估计注意到了戒指会让人运气变好的事情了</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我老公给的，你有吗？[fn=4]</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;羡慕吗？
我老公给的。
你有吗？[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反复跳脸</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：清野你是不是以为自己很幽默？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羡慕但是不能说....</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能说谎的神好可爱[fn=4]
🍋清野🍋</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大家把生理期错开一点，就和谐了[fn=8]</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬疯狂平a暴击</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大声讲出“你这只败犬”，我听不到就再讲，再听不到就继续讲，讲到我听到为止！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还能不能好好聊天了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刀刀暴击这怎么打</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“这个败犬”🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暴击一百点！</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;楼呢，怎么都没了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野太太：别骂了别骂了，打麻将打麻将</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我们联合！对这个渡边形成一个两面包夹芝士的升变！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：母亲你咋回事？非要买一送一？把清野和我绑定在渡边一起？</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;坏女人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别的不说，渡边不可能抛弃谁的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得学姐老师不是很能打 应该出个特别的女人 让她俩产生危机感合作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波是清野凛想把自己拉到和美姬一样的位置，可惜没成功</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条清野vs学姐老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯?你们想干嘛?</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波是冷静睿智的九条！</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;偷换概念，经典诡辩。。。打辩论最烦这个了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伪命题，没有之前的事，渡边不会跟九条在一起，就更谈不上对不起她</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边处理不了学姐吧，不过如果美姬先让渡边爱上她的话，渡边也会收敛一下他的笑容</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野和渡边先在一起，其他人是没有机会的，而且按照其他三位女主的性格，他们依旧会爱上渡边彻，但是她们只会留下遗憾。毕竟清野和渡边是灵魂契合，说实话现在这个世界，遇到爱不是很难的事（只是遇到，不一定在一起），但是灵魂契合太少了，很多金婚夫妻也许感情非常深厚，但是灵魂也不能一定能说是契合的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他会和你在一起吗？（补全对话）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像上一段所说：如果没有发生九条“欠”渡边的两件事，渡边自己本能的爱上了九条（这大概得是if线才能发生的了，还得是两人相遇在渡边和清野相识前），渡边自己会处理好明日和小泉这两段关系；同理可得渡边最先和清野在一起，渡边也会处理好明日和小泉这两段关系，这两人的机会也是零。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野最早出场，但现在还没有真正意义上和渡边在一起只是因为她太强了。这本书想要后宫结局就只能不停的“迫害”清野，不“迫害”清野，结局就注定了其他人都是“败犬”。以清野和九条的关系来说渡边和九条相识是注定的，但如果是后面因为清野而相识，那么从各方面（特别是三人的性格）来说九条都是零机会。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是说以九条的性格和为人，如果一开始不用生命和渡边父母强迫威胁，做了对不起他的事，渡边彻是不可能会跟九条在一起的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬不做对不起渡边的事的话渡边不可能会喜欢她</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表解释一下</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你就没有想过五个人开开心心的在一起吗太太！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是岳母大人开后门?（你们别想歪咯）
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;非常赞同，还可以加上两位太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五角星★不行，有考虑过七芒星吗？太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为上一辈也是三个人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，这！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两宫皇太后驾到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后你俩也不介意五个人一起开心是吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就没有想过五个人开开心心的在一起吗太太！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;臣附议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算两家交情再好，为什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是岳母大人开后门?（你们别想歪咯）
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，就差美姬和神松口，直接作成东西宫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我我我我天？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新的道路开辟了！</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一这要是在H网上更新 下一个任务就是穿回过去把凛和美姬都变成真女儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我懂了，渡边是让美姬猿神贴贴的工具人！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小时候要嫁给同一个人的约定要生效了？</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;确实很不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不对劲啊，很重要的，本来可以水一整个副本的心理门槛就这样过去了，这本书作者也急着收尾了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实最简单的一点，渡边强过头了，渡边现在的表现力在一个什么水准呢？
轻松灭了两家只看心情与否，强到这个程度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这为了推进剧情已经开始不顾逻辑了？之前两家太太为了争女婿还多次争锋相对呢，这就开始同意两女共侍一夫了？这中间心理变化的过程呢？就这么急着结局吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两位母亲，你们都还很年轻，可以自己亲自上场接着生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细想觉悟好高啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚年看成了晚上[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您也可以生的[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岳母送助攻，所以我爱岳母[fn=31][fn=31][fn=31]</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这么有钱都不用八口机吗？爷青结</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;洗牌马牌~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抓个漏洞 前面说是自动麻将机了 这里就不用洗牌彻牌了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然而一切正在滋生</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可是只有九分啊，满分不是十分嘛🤔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;司马脸！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟美姬也发现了，哪怕她认为自己是世上最完美的女人，也扛不住选的男人非人类[fn=32]</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我只是一个路过的卡面来打</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;但是学姐会井泽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一开门就看到这里炮火连天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这样整得跟炮友似的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐的眼里只有彻，轻井泽_那是什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸福都是干出来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，一天就是办这个正事的是吧</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渣男至少精力要足啊[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;痴女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣:让我们直入主题[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不看了，我浏览器动了🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完了，不用看我就知道浏览器要动了，乌鸦你好卑鄙！</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;立马倒贴，光速白给</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“彻，很有精神”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐的“彻”真上头</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;删了好多啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此时我要强调一句，渡边还是处男</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正版受害者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帮你们到这了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没删干净啊喂，逗号开始什么意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正版受害者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么是逗号开始？</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我是那件浴衣，渡边说的是真的，至于为什么，我也不知道，我只能说当时的场面非常混乱</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实有衣服在某种情况下更有感觉 虽然我没做过 但是能想象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;woc……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车速这么快吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没人就离谱</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我是七号</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;几</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;解锁新场景</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怕忍不住</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这才几分钟啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很好</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;梅开二度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个爬字很精髓</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;细节描写，好评[fn=58]</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽 兄弟们无一生还</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原文有
明日麻衣岔开双腿 变成m形
都阵亡了 瑟瑟发抖</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阿们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论区=高速公路事故高发区</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说楼层消失的这么快吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十一楼上面全没了（悲）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车祸现场</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前面19楼呢？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也不是叹气，是既满足又感慨，既早有所料，又暗自惊叹的 嗯~~~~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这我🉑以</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;测</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;偶尔没吃=根本没吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样✔</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;配音呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一群lsp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你~嗯~么了？我~嗯~关系…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙 六个点现在分两次放松了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么会有这么多断句？[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，这澡白洗了，有啥意义嘛[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大多数～嗯～在一起，偶尔和花田～嗯～她们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这省略号要表达的意思画面我已经脑补出来了</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;配音呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个嗯，它正经吗</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;🌝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;はい はいはいはい?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;转换成日语，瞬间理解</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣，麻衣，麻衣，麻衣麻衣麻衣麻衣麻衣麻衣麻衣麻衣麻衣麻衣麻衣麻衣！我的麻衣学姐[fn=59][fn=38][fn=59]</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;🐮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐮🐮💊🎆了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;火力全开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者今天这是怎么了，放飞自我了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;背刺！</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;25楼的弟兄们[fn=19]全都阵亡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿们</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;浏览器怎么自己打开了[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是前几天么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抓住把手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就逛到这里了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么说吧 乌鸦是不是UC给你的太多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是这种姿势的基本操作，可以无师自通的，就差个女朋友而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是抓nai了吧</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边在逼自己臣服美姬啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;错字？还是病句</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;果然是这样</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;因为空虚无所畏惧。
因为爱情别无所求。
壁立千仞，无欲则刚。
既见复关，载笑载言。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;表面上舔，实际是无欲则刚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天刚看完安达与岛村，感觉麻衣与安达是一类人（她的世界中至多只有两个人）给人的感觉就是舔狗。</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阿们</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个东西。。。希望看到这句话的人以后种草莓的时候别太用力，我对象和我热恋的时候，每天都要种，而且越来越重，实在是太疼了，希望各位能引以为戒，注意分寸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢种在尾椎骨，莫名的xp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冬天高领毛衣时候更好，不经意的露出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;种草莓原来是宣誓主权的吗，单身狗学到了，可惜国家不打女朋友</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：请打开麦克风交流</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑容逐渐缺德</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱战神已经不是对手了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么有吻痕？渡边擦口红了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又迫害一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;葵死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笔记，她们是我的  [fn=31]这波伏笔藏的很明显</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙五个第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好惨一木葵
再放送[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！所以说以渡边现在的情况根本不用藏着掖着(老师除外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，吞空了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木，我的一……等等，迫害一木？好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木:[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：明明是我先来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想看一木得反应</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你有考虑过一木葵的感受吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：明明是我先来的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑容逐渐缺德</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶，一木实惨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：请打开麦克风交流</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐这样卑微，我都好心疼┭┮﹏┭┮</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;结果还是想到了凛的话，好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种情况下，爱意很难不增加啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥，做自己该做的事。</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;从背后抱你的时候～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应有评论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;干活的时候想着神。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一刻，渡边想到了神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纷纷扰扰中，这里很宁静。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里这里应该说的是要专心对每个爱的人付出一样多的好吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男宣言，不愧是你渡边[fn=5]</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;星空下的神在注视着你</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;莫名想听曾经我也想一了百了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话看起来怎么有种麻衣有轻生的感觉</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今日份的舒爽结束了，晚安各位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看样子头胎也是麻衣的了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总结：渡边是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么这么多一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在这里的评论无故前移了三段[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，发生了什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐是情妇，给你任何你想要的。
青奈老师是妻子，带来新婚的甜蜜。
九条美姬是女朋友，要爱她，宠她，陪她。
而清野凛是神！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忽然想到要是渡边太强大了别人都怀不上，只有清野神能怀上怎么办？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉要怀上了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他永远也是处，不管你怎么描写</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我强烈怀疑我看的时候已经是修改过的了，有没有刚更新就看了的好心人贴个图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每日祈祷
最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看样子头胎也是麻衣的了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子邪教的没有来嘛[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个车速……渡边彻还是处吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丝哈～
甜腻到发酣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天就这样了，睡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本章大量评论无故消失，这是人性的扭曲还是道德的沦丧？让我们走进今日说法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示孩子👶🏻？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日份的舒爽结束了，晚安各位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;…………这小三要是先中标会变甄嬛传吧，直接被大妇下麝香[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一起一起在一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣赢麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;安心(ღ˘⌣˘ღ)入睡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是追更的快乐吗？爱了爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车速过快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵瞳孔地震</p>
`;
default:
			return '';
	}
}
        