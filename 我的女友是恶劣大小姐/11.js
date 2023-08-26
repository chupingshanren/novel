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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊吧啊吧
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我先放个椅子，你也来了？来呐，你坐啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们住在起点的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;c</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们在起点有房吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我不信这个还糊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;找到清野神了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这🐴不是很高吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;种马渡边骑马
简称🐴骑🐴</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;踱步才坐的笔直吧，跑起来还能挺着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;背虽然直了，但据说腿容易弯，变成O型腿，不知道是不是真的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实骑马和赛马还是有比较大区别的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只记得腿会不自觉的夹紧，非常紧，下来以后腿疼的不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;首先，要有钱[fn=31]</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有代入感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑士装？你的全身板甲呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是公主的骑士[fn=31]</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;俊脸、宽肩、细腰、长腿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真羡慕那些有故事的人，不像我，一个( )字贯穿一生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;色女们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“骑”士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个个也想试一试是吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的假的，来，让我康康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;量太大，处理麻烦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翘屁嫩男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少一个翘臀[fn=4]</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;内在的傲慢要表露出来了，和棒球赛时一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你免费了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界第一自由[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我是自由的！[fn=4]</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这叫代码驯服，我们普通人用的是和平驯服和打晕驯服。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;面对一个可以单手举起自己，浑身散发着位于食物链顶端荷尔蒙气息的雄性生物，马儿心中自有B数[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;驯服太太可以更快啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等一个驯太太[fn=4]</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，美姬的毒打我看你是还没吃够</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总感觉骑在头上怪怪的，是我怪，，不是书友群带坏了我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又在吹逼了，你不是有了系统后才可以这么做的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是穿越者，还是挂壁🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疯狂输出</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵，我多伟大！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑兵回旋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可一世[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一遇无始接成空</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时逢三五便团圆，满把晴光护玉栏。天上一轮才捧出，人间万姓仰头看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对渡边来说：呵呵，一群npc</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从今以后，由我立于顶端。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迪亚哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雪之下雪乃，似李</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特质：不可一世</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最深的喉是骑头上的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是何等的傲慢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是骑在你们身上才对吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咦？这姿势好怪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你想怎么骑？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的“傲慢”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑在人民头上的 人民把他摔垮； 给人民作牛马的 人民永远记住他！ </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑在人民头上的，人民把它摔垮。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暴露本性了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总感觉骑在头上怪怪的，是我怪，，不是书友群带坏了我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，美姬的毒打我看你是还没吃够</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;魅力12?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;（命令）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟还有霸气侧漏的buff</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;他不可一世的自信来源于她</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神还是分辨了出来这其实是被修养所压制的真话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神永远都这么特殊。
最特别是她，在所有一切之上是她，我的神，清野凛。</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;买瓜大队</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘华强：不年轻气盛那还叫年轻人嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神是不会说谎的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最了解渡边的清野</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你可劲儿笑，再多笑会儿马场得被你笑成水龙敬乐园</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻子，老哥劝你一句，年轻人不要太气盛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;德莉莎世界第一可爱！可莉世界第二可爱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻子，老哥劝你一句，年轻人不要太气盛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人不轻狂枉少年（）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是你吗冠超？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;守护世界第一可爱的魔法少女轮轮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可劲儿笑，再多笑会儿马场得被你笑成水龙敬乐园</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;德丽莎才是世界第一可爱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不气盛叫年轻人吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;装起来了！又进行假装混水摸鱼的虚假气氛发言实际心声袒露</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:我不装了，我摊牌[fn=31]</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;光明正大的偷情[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盲猜清野天下第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心  有  灵  犀  一  点  通
不是一家人，不进一家门[fn=4]</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;都退后，我要装()了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马鞭，跟虎鞭一样吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你最近有亿点点膨胀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“你们家”</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;把口水吸回去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看呆了的美姬也太可爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻膨胀起来了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一时半会竟不知这句话是在指什么，这就是一语双关的力量吗</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;从心</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快进到真姬太太想要抓住理想[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬至死是少女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三年前的理想型</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;【真话】</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人至死是少年，富婆到老是红颜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在还是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远的十七岁少女
是吧？紫m…紫妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我懂了！你是曹贼，我也是！.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬至死是少女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到真姬太太想要抓住理想[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不是十七岁的真姬吗你想干什么[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太永远年轻，由此可知太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知太太永远十八岁，所以还来的急。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那岂不就是现在的理想型！[fn=4]</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是也没用，反正你永远都是处男[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花田朝子表示很淦</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神之自信，在神的面前，一切都不堪一击。清野神教万岁！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神:我也不装了，开战吧！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿来吧你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：卍解！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;战斗模式！开！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又有谁能拒绝清野神呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(前略)我的神，清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死刑宣告</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦豁，开战！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹  看成车底就是我的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;( •︠ˍ•︡ )</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神:我也不装了，开战吧！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跳预言！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;犹豫，就会败北</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的，也是大家的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛神：我的[fn=57]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神之自信，在神的面前，一切都不堪一击。清野神教万岁！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今晚就是我的了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人打架唉！超好看的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？是不是有大动作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖！！！打起来！打起来！</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可有那味了！(｡◝‿◜｡)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;倆太太和美少年玩得越来越年轻了嗷[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咦嘻嘻</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;中*二次</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊！我的神体力是个弱鸡～</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;冬梅！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬是美姬的🐴，幽子是凛神的🐴，这波啊，这波是🐴🏇🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成了九条太太是黑色丝袜，清野太太是棕色丝袜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺的爱马.GIF[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话说的，搞得太太们就像是赛马娘[fn=4]</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;双关</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚开始确实都是白的，但汗血宝马跑两步就会流血汗，然后被染上红色吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都跟渡边一个色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不为别的，问就是般配[fn=31]</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;马的身价都这么离谱，果然出生可以决定一切，</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;别信，不充钱拿不了第一的，充了钱也不一定😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再安排一场穿越，平行世界的梦境</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里渡边可以驮着🐴跑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边骑马是约束啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要比谁火的快！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;公婆骑着摩……骏马，要和我比一比~[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想看这腿夹渡边肚子[fn=4]</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;很好奇那个死鬼（实指）到底是何方神圣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;辣妹真姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想看，少女真姬与少年渡边相爱的番外，想象了下非常浪漫的感觉，穷小子与富家大小姐群众最喜闻乐见了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有点想看真姬少女时遇到渡边的番外了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在也是这样，真姬股买爆！</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;坐在腰上呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到今天美姬不在家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，这岂不让人更兴奋？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;表面骑马，实则互撩[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那这岂不是买一送一？渡边狂喜</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;单纯点，只是以前骑马的时候真姬太太也是这样偷跑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬跟幽子少女时期挣过男人？

哦哦哦，番外居然来个！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各就各位，走着…


对于这种偷跑的人我们该怎么办？


悟空，快用你的如意棒爆了她啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一语双关，一针见血</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;"又"</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;直接扛着马跑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比就比，谁怕谁～</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;俺の爱马</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;曹操是吧(ಡωಡ) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王侯将相宁有种乎？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高呼:    骑兵连！进攻！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马鞭？？是和牛鞭差不多的那个吗？？</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：“我是这世界的主宰，我是一出生就站在山顶的男人”所以要素总结，渡边就是山顶洞人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻桑，太中二了，彻桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是玩梗，不是硬尬，泰坦尼克号名台词，导演在拿奥斯卡最佳导演的时候也在台上喊过。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;余は世界の王なり</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;I am hte king of the world!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是世界的终结者[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：我已经过了中二的年纪了，那种话让人有些尴尬
渡边彻：我是世界之王！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吾乃渡边彻，万王之王是也，盖世功业，敢叫天公折服！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没征服日本就说这话不嫌早吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界之王，高高在上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这世界就是因为我的到来而存在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尬，太尬了，但我知道，如果真的能帅到举世无双，那么就有资格这么做</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吐了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;I’M a king of the world！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡梅隆大船获得奥斯卡时说的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奶奶说过我是行天之道，总司一切的男人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我生来注定立于百万生命之上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界之王，起源</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孩子，在你出生的时候，
整个岩首县都在呼唤你的名字，渡边彻。
我一天天的看着你成长，成为帅气的化身；
记住，我们是用帅气和魅力来迷惑妹子们，
同时，我也希望你能稍微收敛自己的本性。
但无敌的帅气是后宫的希望。
总有一天~
靠，字数太多写不下了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泰坦尼克号里面的台词～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;i am the king of world都有人觉得尬？笑嘻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是一出生就站在山顶上的人，万事称心是我的特权，这个世界就是为了迎接我的到来而诞生的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是东京之王了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示要翻船了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花蝴蝶：I am the king of Tokyo！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帝王ko no 迪亚波罗 哒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在泰坦尼克号上？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;I m the king of world!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人至死是少年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我们一起摇摆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：“我是这世界的主宰，我是一出生就站在山顶的男人”所以要素总结，渡边就是山顶洞人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻桑，太中二了，彻桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好尬，尬的我想用脚趾扣出一个两室一厅一厨带独卫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是电音之王～～～</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;红尘作伴活的潇潇洒洒，策马奔腾共享人世繁华[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到溢出来了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的翅膀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我们红尘作伴……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这三人是真™般配</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 懂了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满脑子都是还珠格格...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好啊，伴君左右</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到溢出来了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当当当当当当[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;红尘作伴活的潇潇洒洒，策马奔腾共享人世繁华[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的翅膀.jpg</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“骑术精湛”，嗯，不是系统给的，所以是练出来的，不愧是每天晚上奋战到天亮的男人，熟练度拉满。</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;策马奔腾共享人世繁华</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野或许不会说什么，但九条大概会因为她的马不听她的话听你的话认为它不忠诚，把它拿去炖了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《敢停我的马》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;pong友，停一下，停一下，pong友，no run</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;停了怕不就是没了，直接马肉火锅</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;……又强又厉害？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看出了配上他白皙年轻的胸肌[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么一下子长了三岁[fn=39]</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示太太以后还会“偷跑”</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;若有所指</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指美姬偷跑，靠卑鄙手段获胜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总觉得太太们也在暗示</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不信，除非你让我试试[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仿佛看到了十年后的美姬清野</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我似乎懂了什么</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为什么变成结城美姬了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：而我，是要成为世界之王的男人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我是世界之王后！[fn=4]</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;陛下何故造反[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;膨胀的渡边</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;二王到位了hhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，top3有10个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是玛尔甘尼斯，我是不朽哒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一人之下嘿嘿嘿，懂得都懂，不懂得也不要问，毕竟这件事牵扯很大，网上相关的资料都已经删了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界第二王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有错字吗？</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;硬实力冠军</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了，请问哪里有富婆太太可以实践一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无冕之王可还行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;端水大师，在线教学[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，这就是东京帅哥的情商嘛[fn=4]</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神就该有个神样，不要跟败犬一样啊，我的神，虽然这样我就更爱你了，所以这也是你笼络信徒的一种手段吗？不愧是你啊我的神。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您不是神么？还用问？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您不是神么？还用问？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺王凛：那我呢？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是最特别之上的无与伦比</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您是世界王中王！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事就迫害一下渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神就该有个神样，不要跟败犬一样啊，我的神，虽然这样我就更爱你了，所以这也是你笼络信徒的一种手段吗？不愧是你啊我的神。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所谓君权神授</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神不屑于参与凡人的竞争</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是神</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说谎会被拆穿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦想不出骚话了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是人，是神哒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为神跟人是没办法比较的，所以这个问题太难了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是神啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：你是我一个人的王</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛：没有机会创造机会也要约会[fn=31]</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这文笔真扎实呀，功底可见一斑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有没有小姐姐来配下这句</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;皮皮船，呸，黄金船</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东海帝皇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么白，
那就叫苏妲己吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;的卢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🌿上飞[fn=4]</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这波渡边在所有人的上面，九条太太，青野太太，美姬和神都在渡边身下，然后渡边还任意驰骋，说实话想看本子了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要骑世界之王，大小姐太太们，都是王，你不仅要大小姐，连太太也不放过，好家伙我没看错你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;king of the world</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条太太＝世界之王
世界之王＝马
不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;号外号外，渡边公开宣言要一年骑一次九条太太（无误）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：我想骑世界之王
好耶！真姬太太天下第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意思是彻就是王的骑士[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波渡边在所有人的上面，九条太太，青野太太，美姬和神都在渡边身下，然后渡边还任意驰骋，说实话想看本子了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要骑世界之王，大小姐太太们，都是王，你不仅要大小姐，连太太也不放过，好家伙我没看错你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛批</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;砸瓦鲁多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边（乌鸦）之心，路人皆知</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀儿，是你吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太党狂喜[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑世界之王</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙 直接骑 快进到骑【世界之王】</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没啥意思，就是想试一试[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界之王是妈，骑的马是世界之王，所以我骑妈?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错，我是要骑你哒！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两位太太一起夹着渡边！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你懂我意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高难度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没啥意思，就是意思意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没啥意思，就是想试一试[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是你想的那个意思喽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条真姬是世界之王！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这幅画面，从数学意义上来说，叫做夹逼法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一 起 夹 着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：意思是我骑着九条真姬😘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙 直接骑 快进到骑【世界之王】</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是那个意思咯</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没别的意思，就是你懂的意思[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面说真姬是世界之王，这匹马也是这名字，渡边骑马=（ ）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是曹贼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑它</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;临时培养hhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到赛马娘</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;骑了一天，渡边彻没事，太太小姐们倒是有些屁股疼[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛病，你骑你也疼[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大小姐们。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑得时候不是站着骑吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是姿势不对，跑起来的时候正确的姿势是屁股不能挨马背，骑马其实挺累的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帮忙揉啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;lsp们 集合啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;力的作用应该是相互的才对啊😏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边还喜欢扮马让太太小姐们骑么[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛病，你骑你也疼[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑的时候爽的飞起，骑完之后两股战战[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不疼了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑了一天，渡边彻没事，太太小姐们倒是有些屁股疼[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31][fn=31][fn=31]</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;青青的绿草地，乌鸦骂骂骂的飞过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看戏的乌鸦[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问：为什么只有松鸦没有乌鸦？
答：乌鸦咕了</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;软软的屁股[fn=6][fn=6][fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，我帮太太揉揉就不疼了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不信，除非让我也摸摸[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太我帮你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事，今晚屁股还会疼的[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太，我的技艺一流，请让我帮你揉揉吧（认真脸）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太，不疼，屁股在树上呢</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;此处有删减</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这.....</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条吃的💊肯定不少，乌鸦把面板亮出来让我康康是不是涨体力了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来平时都是九条骑渡边呀...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:我天天晚上骑🐴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平时渡边马🐴骑多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突如其来，拍在脸上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边骑的多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有谁还记得，渡边是处男…(小声地说)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平时没有骑马吧？是我错过了什么吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:别问，问就是日 常锻炼[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：我只是把别人睡觉的世界花在练习寑技上了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车辙在我脸上碾过。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，平时很努力，哈哈哈(ಡωಡ)hiahiahia</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;pg受过多次击打，早已习惯[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条吃的💊肯定不少，乌鸦把面板亮出来让我康康是不是涨体力了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来平时都是九条骑渡边呀...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟晚上经常运动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车车，好快的车车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂的都懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;?不懂就问?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂得多懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑人训教比较频繁</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;体力不行，歇逼了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神已经进入贤者模式。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神已经没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神倒了（哭声</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑真的太纯真了吧，信徒哭晕在厕所</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛听不懂这话题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神这也不行啊[fn=58]她加上美姬 麻衣都不是渡边的对手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神已经进入贤者模式。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神：哎呀，好气呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神之沉默[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;体力3的神...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;体力不行，歇逼了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;而神在暗中练习</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前方事故多发地，请小心慢行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十几楼人全没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;事故高发地段[fn=31]禁止飙车(´-ω-')</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这……车呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想起了范爷演的一幕与皇帝一起骑马场景。[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;16楼之前全军覆没啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里居然没有车车</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;两边看太累了</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥正在演示驾驶技术.GIF[fn=31]</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凑活看吧</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;之前系统说的是生物吧？那植物也算？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐，别停啊～</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;改过了这里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四十一楼？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天就算天王老子来了渡边也是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前段：九条美姬抬臀，继续骑马，朝目的地驶去。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; ？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段没人还是人没了？</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;车！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野只知道他能命令鸟</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谎言才是你的本体吧渡边，清野不是也知道吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱说谎的东京人，神也知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秘密</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉这次说了，差不多有的完结的那意思了。应该等美姬和神和好了以后就完结了。</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没说实话，清野也知道
前面清野问他是不是能控制鸟，他当面否认，清野就笑了，让渡边表演一下
以他俩一贯的默契，渡边只要回答，其实就是在说实话给清野听</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好快的车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！美姬天下第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可是聪明的真姬已经对渡边产生了兴趣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬：小心我让渡边彻当你爸爸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬已经变成渡边的形状了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱的美姬，可爱的独占欲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前的章节出现过这句话吧？</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凑活看吧</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《平时多骑骑》</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么时候能站起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男女搭配，干活不累？
反正一刻都不能闲。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就剩五个，到底错过了什么？</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;进进出出，弟弟都哭了三次了，还要继续吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三下。。。
三秒？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天王老子来了，他也是个处！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不管，反正渡边是个处，处！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死了这么多……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=8]到底行不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每天抱你三次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太快乐吧！</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;驯养美人犬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三国时代有个木鹿大王，穿过去你可以号称马鹿大王～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;埃及法老，养狮子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知皇帝是能开后宫的[fn=31]</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=6][fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;废话，到了床上，少女一般都娇憨可爱[fn=31]</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;鼠疫暗杀团，蚊虫艾滋群</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虫群，鼠群，鸟群……</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;尤里的复仇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;撒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到催眠剧情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界^O^^O^模式</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不直接快进到11区？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Code Geas ？？？</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“被渡边彻命令过。”强烈的危机感伴随着视听错位的感官。
高傲如美姬，这个念头的萌发就像一颗魔豆的种子深深埋进心头，等待这一个契机破土而出，到那时，撕裂的可不仅仅只是一个人的心。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬已经由傲转娇了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的女王啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挚爱玫瑰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙～这甜的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，我死了～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太可爱了吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“被渡边彻命令过。”强烈的危机感伴随着视听错位的感官。
高傲如美姬，这个念头的萌发就像一颗魔豆的种子深深埋进心头，等待这一个契机破土而出，到那时，撕裂的可不仅仅只是一个人的心。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;即使这份爱情 只是魔法的效果
它的效力也永远不会消失  ——《I say yes》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;K桑已经被彻融化的差不多只剩娇了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;锁情咒.txt</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是啊，为什么呢，我也在寻找答案呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬已经由傲转娇了</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那得你允许我开一个大大的后宫</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：乌鸦没有存稿了吧？
高情商：紧跟时事，不愧是乌鸦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Jsc直呼内行！！！

所以，鸦桑，你没存稿可不行啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前可以，现在怕是要404</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里为什么没评论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界人口七十多亿，百分之二十是十四亿多[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草 好开!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谏山创的创是开泥头车创死你的创</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十年前起点有本这个内容的小说。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;温泉店组队拉屎（右侧为报名人数）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谏山创的创是创伤的创[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谏狗直呼内行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？这是什么梗？没搞懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：乌鸦没有存稿了吧？
高情商：紧跟时事，不愧是乌鸦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Jsc直呼内行！！！

所以，鸦桑，你没存稿可不行啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;统治？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;海的那边是敌人.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;知道大结局前三季动画都没法看了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我现在对80%感到恶心[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就是艾伦？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这比例？我想到了一个叫某创的温泉店老板的漫画</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;🌐社会学研究:暗黑星际文明
领域:🌐社会学
分类:🧬生物学
花费:84000
稀有科技


国民理念:死亡崇拜 已解锁
帝国修正:
来自岗位的科研点数⚛️🌐⚙️+200%
劳工岗位👤生产资源+200%
人口增长速度👥-80%
来自人口的帝国规模-80%
人口舒适度🎭消耗-50%

</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;007，丧尸的福报</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艾伦点了个赞
谏山创直呼内行[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;资本家给爷爬，挂路灯去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;紧跟时事（✘ ）
没有存稿（✔）</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;赶快付诸实践</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一楼二楼呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;飞电智能觉得很赞</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我直接拿出我的雷龙卡组</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦要不写写游戏王打牌，老想看了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当我拍出这张卡，你的生命将化为风中残烛！来吧！发动仪式卡！多看空我！来吧，空我！

所累哇多卡那，我空场时可特殊雷霆战机，当有战机字样怪兽时可从墓地特招驾驶员新城！再通常召唤大古，把大古、新城、雷霆战机调星！把大古熬成汤！你也能变成光！斯麦路奥特曼、特利迦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;DNA动了！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以系统是你自己研发的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;闪刀姬天下第一！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我直接拿出我的雷龙卡组</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;duel!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忽然想到海马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全息投影！？河南拔智齿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想玩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦要不写写游戏王打牌，老想看了</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;意图侵略全世界的怪人组织依然打工挣取资金中</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真好啊</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;主要还是渡边按摩了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点好奇以渡边彻的身体素质能不能活过理论寿命极限</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其余的人，那就是只有清野家母女啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;困觉姬已经进化成骑士姬了，蛐蛐骑马，小菜一碟，甚至还能晚上继续加赛[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬习惯了所以没事，清野凛和真姬太太没运动可以理解，幽子太太也……？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬体力这么好了嘛，白天晚上的骑还能起得来床</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬居然没有腰酸，体力有长进[fn=4]</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;钱包还用带呀，微信支付宝先弄个吧[fn=58]</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喵帕斯！[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲酱</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;接下来是五人独处时间（想屁吃）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某些人祈求的莲酱消失术[fn=10]</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小龙女那种形态吗？[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《神之痛楚 》《神在忍受》《神的无力》《瘫痪的神》《一整个上午都在吊床上面的神》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瘫痪的神
也很可爱[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咳咳，这个疼痛他正经嘛？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画《清野凛在看书》</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;運動後有做舒緩體操，代謝乳酸的好處</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和上一段连起来截图，断章取义一波</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;天天烤肉，不上火么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是烤肉又是烤肉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;BBQ想烤的外面没糊里面也非常嫩的状态要低温烤几个小时吧。还要醒肉什么的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟只有烧烤技能够用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;深夜放毒[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;烤羊球挺好吃的</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;半夜你给我这个？？？</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？别人家的酒杯vs我家的酒杯</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;被我脑补成汤姆了</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神的奴仆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦，我们的世界之王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提前享受女友待遇 [fn=31]
</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;但是彻可以让她鼓起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平坦的，也许不止肚子（doge）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是想说到年底之后就不会平坦了吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平坦的小肚子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不用上厕所吗？[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的r桑</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明明是假期还得考虑两个问题美少女，实在是辛苦渡边了。。。所以为什么不放弃她们呢？她们真的不好，不像我，只会心疼哥哥~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的车门已经被我焊死了，我宣布乌鸦开车为起点前三。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？，这俩段之前的章说呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;111111111</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个叛变的直接没啦，清野才是神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《大被同眠计划》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双一楼，起点又抽风了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实只要让美姬和凛一起这样自然而然的想出，继续创作共同的美好回忆，两人的和好就是水到渠成的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完睡觉觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没了，又没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的车门已经被我焊死了，我宣布乌鸦开车为起点前三。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，我的麻衣学姐这么没有排面[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《关于渡边老爷在轻井泽骑马打仗肆意妄为，却心里还念想着文学创作》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的学姐在哪里?不会正在骑马赶来的路上吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完了，今天这字数比不上昨天，我记在小本本了，睡觉睡觉💤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是假期还得考虑两个问题美少女，实在是辛苦渡边了。。。所以为什么不放弃她们呢？她们真的不好，不像我，只会心疼哥哥~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么是偶尔呢？因为渡边现在沉溺在温柔乡里。话说学姐怎么还在赶来的路上。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在外面看明明是七楼啊  还有六个人呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祈祷
最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《关于渡边彻悠闲八月在想什么这件事》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;认真的吗?十分钟。</p>
`;
default:
			return '';
	}
}
        