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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嗝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;OvO
最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终究还是等到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉姆抗命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们住在起点的吗？这么快[fn=39][fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们这是住在起点了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去你们不睡的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;熬夜党的胜利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了

</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第三</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正宫的修养？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：反正正宫不是我，随时随地可拱火</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在野党之拱火！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;演起来了 哈哈</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘉然可爱捏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;保持独立自主的外交政策是吧😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:歪，不在其位不谋其政不知吗？ </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扎不多得勒😓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你寄吧谁啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的翅膀！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，提前适应女友身份</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦吼哦吼[fn=31]</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;偷听是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬大胜利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合着你没睡着啊？[fn=39]</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛：跟败犬过不去了是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;英梨梨：别刀了别刀了，再刀就麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，降维打击</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我英梨梨不是败犬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;破防了，破防了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，她急了她急了😄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;急了？急了？急了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑嘻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蚌埠住了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很难绷得住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;破防了，破防了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我英梨梨不是败犬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吊图一大堆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你刚刚……说了败犬对吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会心一击[fn=4]</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;盲猜这是九天妈妈</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;盲猜这是清野妈妈</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，沙发很窄，睡在一起不就是重叠着……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你俩也在装睡？[fn=39]
好嘛，一家人围观凛偷家[fn=31]</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;打哪啊？</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;合着你们全在装睡啊😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太好可爱～～想……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太们如同少女一般可爱呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我会装作看风……啊不在睡觉.JPG[fn=31]</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说到关键了，暂时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们这些警察真有意思。
我不像你，我光明正大。</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我最喜欢看女人打架了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人打架什么的最棒了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打起来打起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;塔塔开！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开打开大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不好受你也别想好过！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人打架什么的最棒了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啊，互相伤害啊[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我最喜欢看女人打架了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们别打了 </p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;自从看了卖鲍的书，好多成语都不忍直视</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边怎么不上去推一把 哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里居然没有图？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然没有人刷美少女贴贴，那就我来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛又要被压辣
真没人性[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贴贴！我要看美姬和神贴贴！</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟当时已经弄死了他一次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可能( ﾉД')，想多了，这才是没有自知之明</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老资本家了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东厂西厂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标点符号打错位置了</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;本来就是意外，哪怕系统再晚来一年甚至半年，那里会有这么多事。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当时你有机会帮他，但你选择作壁上观，现在成了意外了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;炸胡?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从一百多章开始就说是意外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金典</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，这是命运。意外这个词，只是败犬不甘的哀嚎罢了。</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一边有缘一边有分是一种错觉</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：败犬的哀嚎此时竟是如此的悦耳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天下枪兵运气共一石，子龙独占一石八斗，其余枪兵倒欠八斗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;命运里的所有意外都是必然，为什么连这点都不明白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;运气也是实力的一环，不爽不要玩[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恋爱里面，运气和时机，往往就是天意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;靠渡边的戒指啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这难道不是命中注定的相遇吗？[fn=50]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天下枪兵运气共一石，子龙独占一石八斗，其余枪兵倒欠八斗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;运气也是实力的一部分，总是这么说下去就真的是输不起了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;运气也是实力的一部分啊，又不是人人幸运E</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：败犬的哀嚎此时竟是如此的悦耳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情投意合的人未必相遇...灵魂伴侣可能素未谋面，也许天作之合早已另许人家...缘分本来也是胜负一环</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说了，别说了，再说就真贫了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬：倚靠胸怀广阔[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真相了家人们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，确实[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边以清野男友的身份认识美姬
然后……
《闺蜜の男友》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第三个太伤人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野是唯一一个，在渡边没有系统的情况下，会在日常相处中依旧跟渡边相爱的人
学姐和老师都有系统前置剧情
九条已经作者杀亲自认证了，没有系统安排的御茶之水，她就算会对渡边感兴趣，也是在清野和渡边相爱之后，出于抢的心里
只有清野跟渡边的灵魂伴侣，没有经过任何系统的剧情，无论何时相遇，他们总会在明天相爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不不不，你俩性格半斤八两</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不！我看了全订特典！清野凛YYDS！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边是腿控</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神听到的：胸比我大，胸比我大，胸比我大……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;性格正常？？？港真，半斤八两吧，老师应该是最正常的了，一个残虐，一个死不说谎... 轮危害度美姬还高一点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;性格……正常？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;句句破防</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有可能学姐偷家了呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到if线[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边以清野男友的身份认识美姬
然后……
《闺蜜の男友》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛就凭我俩心意相通[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全订番外表示美姬说的不对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第三个太伤人了</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要打架吗[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次有一个角色身上有，女神与败犬两个标签放在一起，但不让人觉得矛盾的థ౪థ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;急啦急啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里清野神后悔了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次有一个角色身上有，女神与败犬两个标签放在一起，但不让人觉得矛盾的థ౪థ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要打架吗[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三点的体力，还是不要自取其辱了[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快快快快快快快快快快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;急了急了，她急了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无名无实拿什么和美姬对线啊，绷不住了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到女人打架！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;试图把我激怒😡😡😡</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;打起来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们不要再打了啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巅峰对决[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我最爱看女人打架了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打起来[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打起来打起来，爷爱看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求图</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一想到学姐拿的一血就想笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个威胁方式是不是有什么地方不太对劲?话又说回来，等神跟渡边独处上俩礼拜，她心里不同意，身体也得同意了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？这不是败犬发言？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯有有序但激烈的市场竞争才是提高服务标准的唯一途径。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽哈哈哈清野凛yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻或成最大赢家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无能狂怒[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搞得我美姬多卑微靠什么手段一样，爷笑了，就清野有教徒！？  咱美姬的教徒呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;允许了也没用，渡边不会放弃的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉尴尬，r桑少了点神秘感，直接被激怒，还是有点无能的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打起来打起来，看主角装B哪有看女人撕b精彩[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个威胁方式是不是有什么地方不太对劲?话又说回来，等神跟渡边独处上俩礼拜，她心里不同意，身体也得同意了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛:我还可以允许他有你！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一想到学姐拿的一血就想笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日的胜利—渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双赢，意思是彻赢两次[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇塞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，赢家只有渡边彻</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我是个莫得感情的停一停机器</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;肯定是真的啦，渡边渣男不会放弃任何一个人，他只想全都要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玩战术的心都脏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话肯定是真的啊，作为上帝视角的我们，远比清野要了解男主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话要是真的你就不会玩心里战术了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是肯定真的，就是拼美姬不自信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说了一半，反过来也一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玩战术的心都脏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肯定是真的啦，渡边渣男不会放弃任何一个人，他只想全都要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到底是真是假呢？我只能说是真作假时假亦真，假作真时真亦假。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开心了，真的就不会这么从容不迫了[fn=31]</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实九条应该让清野说出来到底真话还是谎话，那样清野就说不出来了，毕竟她不能说谎。明显渡边说的是真话，清野没法说谎，所有用疑问方式迷惑九条，九条关心则乱，慌了，掉进陷阱了，不敢问</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她慌了，慌了！</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;总觉得爱一个人不愿意改变，算不上真的爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一個 有優勢但是不肯改變 ，一個起點低但是願意改變</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是那句话，不打破底线，僵局就会一直僵持下去</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;低情商:两位太太要笑了
高情商:两位太太要醒了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要再为了我而争斗了.JPG</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;旁边俩太太已经看的合不拢腿了[fn=31]</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你给我记住了[fn=31]</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这部分多写点，写个二十块的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条真姬@蠢蠢欲动[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今晚和我细说[fn=4]</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;村上悠desu</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太的游戏[fn=37]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼睛一睁一闭，标准霞之诗丘羽姿势</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了九条太太你，再苦也值得</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我靠，不愧是闺蜜，连睁眼都是对称的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快进到小时候某本湾湾小说 。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要我还闭着眼我就还没醒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还在装（卖）睡（萌）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱，

我摊牌了，我是太太党。</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实他说了实话
在这件事情上，他一直没有选择权</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，被他装到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有选择权（X）
不做选择，我全都要（✓）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，凡尔赛吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，在装13吗</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻魂都要吓飞了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冥场面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震撼男主一整年[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙！亲妈绝了哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲妈[fn=4]亲岳母[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，老早想看这个场景</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;差点以为R桑撒谎，被吓到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做贼心虚，就是谎言</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？柚子姐姐想到了新的玩法[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是谎言！我二弟天下无敌！</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;三角形稳定？笑死，五角星不香吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个我知道，“公主连结”嘛[fn=25]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我知道 奥运五环么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然已经完本了 但我还没看到结局 而且我不希望看到学姐和老师以情人这种卑微的地位结尾 如果真像渡边说的这样 相互影响磨合 后宫大和谐我觉得不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此乃正义之言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪五个人，说清楚啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，乌鸦官方剧透结局如何后宫，啊，早就说了啊，那没事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个我知道，“公主连结”嘛[fn=25]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边首相之后宫宣言[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙义正言辞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五角星，渡边你果然是党的人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的恋爱哲学之齿轮说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剧透了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三角形稳定？笑死，五角星不香吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边你要当卡在四个小齿轮中间的大齿轮吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太怪了，准备拿脑子去想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;希望有一天渡边会让剩下三个适应他，而不是三个互相适应。渡边，磨合期已经差不多过去了，是时候引爆一些东西了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他们互相变成了对方的形状</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;重点不是盖饭吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个海胆的辐射强度够吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲子丼饭[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盖饭盖饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夏季特惠价，只要90元！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有饭没有海胆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超市的薯片半价～（莫名想到）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重点不是盖饭吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;海胆他黄么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建议下次换成福岛银鱼 吃了能变身假面骑士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个海胆的辐射强度够吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个海胆……它肥嘛</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;两位太太瞬间就抓住了想听的重点[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：我们五个
青奈麻衣：没错，就……
真姬柚子：正是在下！[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这样很不错哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太的优秀我们想象不到。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太总是如此的优秀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原本是五人，这要强行变七人行[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太！！好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两位太太瞬间就抓住了想听的重点[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年轻人，不懂太太乐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：我们五个
青奈麻衣：没错，就……
真姬柚子：正是在下！[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我宣布：曹贼俱乐部今天在这开年会！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹丞相为你点赞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这层楼的都拉出去毙了（暮山来了的话尤其是他）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太，我可以</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这实在是  太刺激啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太不要啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一人一只脚吗？这CG我有啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：两位太太想怎么教♂训♀我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：晚上到我的房间来，让我亲自教育教育[fn=31]</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太在第五层</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的是小泉和麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂了又没完全懂</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个姿势[fn=21]好想握住太太的小腰，然后……</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么是家庭地位？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有怕劲夫的女人，只有尊重劲夫的女人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻:尊重老婆的事儿，怎么能叫害怕呢？
那是爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跪在搓衣板上说话就是硬气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有怕老婆的重庆男人，只有尊敬老婆的重庆男人[fn=43]比如我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我那是怕老婆？那是相敬如宾！</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说着，渡边拿出了搓衣板[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的不错，但渡边还是怂了</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哪有所谓的正宫，不过是渡边对九条的歉疚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睁开你的眼睛看看，现在是谁嗦了蒜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你嗦了蒜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条宣誓了主权</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边渡边，你mà时候成为东京のking呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明日麻衣：山不过来，我就过去[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好嘛，都在装睡[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:只要本宫不死，尔等终究是妃[fn=31]</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;互相彼此能关怀体谅的前提，不是现在这样。九条太自我，太扭曲，太不和谐。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一方是为了束缚，一方是为了兼顾。如果绳圈够大足够坚硬，那么再强大的猛兽也可能被捕获。两方从不同角度出发却相交于同一点，这是和谐，也是矛盾。当矛盾超过了和谐，当渡边无法兼顾的时候，猛兽也便挣脱了宽大坚硬但布满细腻荆棘的绳索，那个一点点将他拖入迷失的绳索</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;和谐吗？拿命换来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太你还是太年轻了</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明日学姐，还有个妹妹[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第四个特指清野神</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神倒了[fn=12]</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥的保证</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬，你听我解释！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;即使那个人是你妈？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人的保证</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后一个例外、第四个是清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这保证有谁信啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;立了flag这个就稳了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;稳了稳了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《不会，我保证》</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;系统要哭出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除非真姬能先搞定美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;工具系统[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下次系统说九条，你猜是真姬还是美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统现在已经没啥用了吧，渡边已经是完全体满级状态了，清野线的破局渡边自己操作就行了，也不需要以前系统帮忙了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统:玩家，玩家，您是大爷，我已经够丢人了，给点面子做做任务好不嘞。打折券用用好不嘞。系统报告业绩，就我不敢开口，其他系统还以为我克扣奖励呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯独在这里渡边的坚定没有说服力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，好美没机会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书系统:顶级突破手。
在迟迟打不开局面的时候，拉出来就是一枪头
对渡边彻特攻，即使渡边彻多次选择safe,也可以凭借顶级的游戏理解（开转）精确打击[fn=31]</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧，渡边在催眠和告诫自己，为了维护现在的关系宁愿牺牲自己的独立性。矛盾肯定会爆发在清野附近，期待</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;距离完本只剩四个月了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要好好锻炼哦。</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;杂鱼体力清野神可能会死在床上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;占据心的事大家都服气。
拿过身体嘛我还真不相信。
除非你证明给我看[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmmm，我感觉你可能需要几个姐妹帮你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到被打桩几分钟就撑不住了叫美姬来救场。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心里装了四个也算占据吗[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是说拿过渡边变的猫吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按照渡边永远是处的理论，清野肯定拿不到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎狼之词？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四个月？四个人都不一定能拿下渡边彻的身体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飞龙骑脸怎么输?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：即使你得到了我的身体，你也休想得到我的心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杂鱼体力清野神可能会死在床上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;占据心的事大家都服气。
拿过身体嘛我还真不相信。
除非你证明给我看[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼，不知道是谁拿下谁的身体呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到今晚就拿下渡边[fn=4]</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是说不让去么</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;虽然是工具人，但我还是要说，一木是个傻瓜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木这人设现实中也是人生赢家了，怎么被写的这么惨[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小葵好可怜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又到了欢乐的迫害一木葵的时候[fn=4]</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐属性，一般身材都很有料，不管是麻衣桑还是诗羽桑</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;淡黄的长裙 蓬松的头发</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事，可以去加勒比玩海</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们不对劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亚洲很热</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京永远这么热[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不热吗?我很热</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;BGM，起！[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂得都懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=58]</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;广东人感觉很淦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，就这？济南了解一下，40度是常态</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都来马来西亚住个一年试试？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;广东说话了？？(我点进来就发现有人说 但是我还是要说一遍)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;海南人表示一年也就两个月是凉快的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重庆人就笑笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;热天就算了，最烦的居然还有回南天！闷热潮湿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书最讨厌的角色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？广西日常35度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这。。。这不是广州日常气温吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;广东人感觉很淦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重庆平均温度过四十</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武汉人笑而不语</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真不熟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你寄吧谁？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你🖊谁啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这妹纸一出来就被系统判了死刑了。租借女友这种类型的茶味角色我实在喜欢不起来。

可能是由于当代男青年性焦虑严重吧，对于虚拟角色的纯洁性，我是要求很高的。

毕竟看小说就为图一乐，难为自己何苦呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来的最早，扑得最低。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美好美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想死好美了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;支持玉藻前！</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;花田朝子学姐，没有九条和清野的世界就靠你了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目，上次发言还是什么时候了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上次学姐出现还是在上次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波啊，是纯爱战神的失败</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱战神现在打不过牛头彻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拳头硬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪力萝莉！！我喜欢这个！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跨进到花田if</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好久不见学姐，乌鸦太太终于把你放出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个我喜欢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花田朝子学姐，没有九条和清野的世界就靠你了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目，上次发言还是什么时候了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是那个大力美少女吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新角色？🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;野生的角色粗线了！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是新角色！（滑稽）</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;脚上还有凉鞋（x）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喂喂喂!别只穿一件薄外套啊！</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻现在不太在乎别人的看法的，但是他认为学姐不能因为他而被别人看不起，这算是挺好的做法了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没法接，虽然学姐不在乎但是在唯一的几个朋友面前说自己是情人不太好吧，而且不是三老师那种交心的朋友。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要么说九条是顶尖猎手呢？她把麻衣和老师从正统恋人（和九条身份一致）逼到了低她一等的情人，通过之前的杀伐果断对渡边产生威慑（怕老师和麻衣受到牵连）来让渡边产生感激（不杀之恩）来慢慢杜绝了两位与她在爱情方面的角逐。但惟独凛例外。九条没有自信能够削弱彻和凛的感情，所以在不停的打击和为所有人下下败犬的暗示。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐，呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不好在人前表现的太明显</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么不接，呜呜[fn=12]</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐有十亿日元在手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们话太多了，耽误了和彻相处的时间。</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;每次都劝不嫌烦吗？</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;归根结底反正也是系统白嫖来的钱</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有双层床的吗？不应该是榻榻米吗？</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不要用汇率来计算，要考虑同工种的收入对比，美国的价格我一般都按照1:3兑换</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能对比有点不太恰当，我更喜欢用各自劳动时间收入对比，16000日元，算一小时1000日元，工作16小时，换到中国时薪20吧，16小时，320，考虑到旅游旺季加旅游区，还是4人间，真不算贵了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一晚960，好贵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;163RMB?</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这一波啊，以渡边的战斗力，门一锁立刻就可以一网打尽……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是床🛏️[fn=4]</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;他还得谢谢你呢。谢谢啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉到了～这是作者的恶意！一木葵被无形的迫害。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢你，泰罗！[fn=4]</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;
您现在看到的是本作唯一指定败犬
那么悲剧却那么自信[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美的专题卡太漂亮了，抱歉我要推好美酱了[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美要是自爱一点说不定就不是败犬了，毕竟也是魅力8的超级美女了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抱歉诸位，我看成了蕾丝边短腿😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差不多吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真:败犬，好美参上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都让开，我要把好美的腿舔骨折</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是真败犬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们这些heitai，说什么讨厌绿茶，如果让你们舔还不是舌头伸得老长？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷的大舌头已经饥渴难耐了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美少女的脚(弹幕)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊(⑉°з°)-♡好可爱～好美酱～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美可惜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;
您现在看到的是本作唯一指定败犬
那么悲剧却那么自信[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美的专题卡太漂亮了，抱歉我要推好美酱了[fn=26]</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就这样被我征服，不愧是我</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快住手，你的好感度虽然已经负了，但这么下去真的会变成惨案…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵，你也要当人形家畜 地球之癌吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵总是恰到好处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舔狗到最后一无所有[fn=58]</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你累了（强制</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻译:别来碍事……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好惨一木葵[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(命令)</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好好休息【命令】</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苦主是怎样炼成的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：学姐真的是太体量我了，开心😁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;工具葵</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐才是渡边改变的开始啊，没学姐渡边估计九条清野选一个了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣也是矛盾爆发的绝妙节点。她会一直深爱着渡边，那种义无反顾想来一定是最棒的情节</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐在主动出击方面一直很可以的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夫目前犯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就隔着一道门啊，这种剧情我可以说出十多种不同的版本</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐不愧是你[fn=11]</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;遭受正版迫害的人啊，失去了很多乐趣[fn=43]</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;享受两人身体贴在一起的充实感。</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对四人的爱意都好浓，大爱无疆渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟美姬说的是“我爱你”跟学姐说“我喜欢你”的屑渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣桑，dai si gi！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢(确信)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好干啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣，我喜欢你</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;本书第一指定迫害对象。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀买噶[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：很美味～[fn=58]</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;难道是要。。。</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我现在已经不能直视芳草，森林等字眼了</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐在偷家方面，天赋一直拉满。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，学姐！</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有提美姬</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;情感寄托加上爱情吗……
这段感情还真是不一样。
与九条之间的感情是责任，与清野之间是感情是默契，与明日之间的感情是寄托与痴迷，与老师之间的感情是过往的思念。
嘶……作者是个人才，人设和关系都相当用心了</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;补魔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贤者模式</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听说搞艺术的性欲一般都挺强，学姐这是不是</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;愿此刻永恒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想就这样牵着你的手不放开
 爱能不能够永远单纯没有悲哀</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛就不只是多多少少偶尔了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呸渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多多少少偶尔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;段王爷的尸体从燕子坞赶来点赞</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渣男语录</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边在自我催眠啊，为了能够让已经被占据身体的三个人开心，却唯独没有考虑代表自我的清野和自己</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有基友线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等我哪天学会开车上路了，我一定要写一本符合gal game标准线的小说，有基友线和单身线的那种</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国井倒了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我认为作者应该再加一个基友，嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛的存在就是永远提醒着彻
不要被重力所束缚
不要为现实所击倒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑永远的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要麻衣就够了，能不能给我发一个[fn=12]</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;28层楼的前辈凭空消失，这就是和谐大神的力量吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;28楼没了！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有楼了</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;水汪汪的大眼睛，湿漉漉的…</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，这高情商真是太高了，都让渡边高完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要看着她安全到达旅馆好吧[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是渡边的任务罢了(</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：你先走
高情商：我想看你屁股</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要优雅，不要污</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要看着她安全到达旅馆好吧[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是渡边会说出来的话？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总算屁股不是在树上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，这高情商真是太高了，都让渡边高完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高情商（？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎狼之词</p>
`;
        case 178:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;轻轻的我走了，正如我轻轻的来；
我轻轻的招手，作别西天的云彩
[fn=33]</p>
`;
        case 179:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;挪威的森林里  渡边彻最后没和绿子一起</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;4800字 多的不说了 真的是忙而不是懒 希望读者能留下这个印象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每天思念着学姐，什么时候才能来，什么时候才能到她的剧情，心心念念着...
真的到了，看完又怅然若失...
想听学姐笑着注视他说“彻说了什么吗”，那种感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边神的信徒，麻衣[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感知到。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光写这个，靠订阅一个月就有几十万的收入了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的翅膀啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凭这本书的成绩，工作肯定是辞掉的。一边被动日收入几千上万，一边还要天天上班赚个几百并浪费时间精力是很难想象的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;..........</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;齁到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜到满足
但后面没有了，又立刻出现强烈的戒断反应
如果能穿越到未来，老子一定先把结局看完再去记股市，彩票信息</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者这种水平，如果全职肯定也能养活自己啊，不过如果写书是爱好的话也没什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好看的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;屁股烫？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;涌动的思念将两人的目光接续</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每天思念着学姐，什么时候才能来，什么时候才能到她的剧情，心心念念着...
真的到了，看完又怅然若失...
想听学姐笑着注视他说“彻说了什么吗”，那种感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开心哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;的屁股[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看到的不是你的身影，而是你澎湃而炽热的心。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结束，睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然还是觉得学姐偷的时候有意思些(刺激</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1.比起不更，我更怕灌水，毕竟这本书没有灌水瑕疵，再平淡的对话都可能是后面50章的伏笔。
2.4800质量内容可以的话我都能水2万字。
3.我可是想入实体书给我儿子传教的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还算满意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐……嘶真的是太棒了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;安  心  睡  觉 [fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲兄弟萌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此时此刻，一木在远处观察，“明明是我先来的，为什么...”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐赛高，赛高泥嗨铁鸭子哒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢兄弟，已经爽了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结束，睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满意，睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;4800字 多的不说了 真的是忙而不是懒 希望读者能留下这个印象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
`;
default:
			return '';
	}
}
        