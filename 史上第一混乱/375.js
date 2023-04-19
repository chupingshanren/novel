$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次见这种解读，真的有道理啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实汉献帝也算不错了，不然董卓也不能看上他。他对局面也确实是无能为力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有刘彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘裕:我祖宗是刘邦老弟，遗传基因不太一样……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，原来扇形眼就是你张小花十二年前搞出来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三分沮丧三分平和四分习以为常——这太邦子了！</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后曹操没赤兔马送关二爷，华容道关二爷一刀把曹操斩了，全剧终</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我突然想起了2001年江苏的高考满分作文，赤兔之死，正好解答</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这三兄弟没说的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古往今来
为江山而杀兄弟者不胜枚举
为兄弟而舍江山者唯刘玄德</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，陆树铭……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一拜～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑补央视版古城相会</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从后面一把抱住……你们想想那个画面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从来都不喜欢这仨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面都没哭，这一段居然哭了，我现在这受姨妈期影响的奇怪的泪点呀！……不过他们三个是真的兄弟情</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宁学桃园三结义，不学瓦岗一炉香</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宁学桃园三结义，不学瓦岗一炉香。</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;单雄信不是不说自己是唐朝的么</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;罗成只是长的好看，人品的确不怎样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;见罗成把我牙咬坏，大骂无耻小奴才，曾记得踏毁瓦岗寨，曾记得一家大小洛阳来，我为你造下了三贤府，我为你花费许多财，雄信一死名还在，奴才呀奴才！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只看过黄海冰版的隋唐英雄传，其他了解不多，聂远演的罗成真没看出来阴狠，反而很悲壮</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隋唐无大义，可惜单雄信了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原谅他作甚。</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹操是刘邦后人吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹操看到厉害的武将就想上去加微信</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹操骑的不是绝影就是爪黄飞电，都是好马呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有钱了啊，上次找董卓说挤公交迟到了，在人那儿骗了一辆跑车来的事儿别以为我们不知道。</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光说不练假把式</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的是四川啊，川蜀川蜀，之所以很多人叫蜀国就是因为在四川安的家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然但是祝融夫人是云南的吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;祝融夫人要不要？头都给你拧下来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是嫌三娘手不够狠？[fn=8]</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书凉了十几年了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实以关羽重生后的武技经验加上当时年轻力壮的体格，估计配上张飞未必干不过吕布吧...[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史因果论，怎么可能，关羽真要干涉一件大事，就会导致后面的所有剧情不会按照历史走，最多提前了解各个历史人物的脾性</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明天就写</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33]</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵云就在公孙瓒那里，这时候应该出场了，也是无名小校</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;口嫌体正直，你当初不是说没兴趣吗</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这时候应该认识赵云吧，毕竟在公孙瓒那里待过，按理说那段时间不勾搭赵云也没后来的事。</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;傲娇罗...[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天下枪法一石，子龙独占一石八，余下倒欠八斗</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3×2哥＝6哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三个二哥，哈哈</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你现世家人了，不要了？</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是黄巾军</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强久历四方，必知当世英雄...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隋末三十六股烟尘一点不比三国乱世差，李世民手下的那个不是灭国将军？打的中国版图扩大一倍，周边全部上表天可汗，比曹操由于阿。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老实说李世民比曹操差远了，曹操所处的年代比隋唐复杂多了，完全靠自家子弟兵起家，李家还有关陇集团支持，比文采的话是个李世民困一起都比不过曹操</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别闹，李世民瞧不上曹操……</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虹猫蓝兔。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合着我特么是给秦琼骑的……</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两代名驹果然有不少共同点：主人是当代第一猛将、喜欢朝小强脸上吐口水……</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要说李元霸按照演义里来说确实谁也打不过，一个胳膊四象之力除了找练了龙象般若功的金轮法王(十龙十象之力)还有谁能打过？毕竟都是虚构人物</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不一定吧，万一曹操围城，结果关羽马快跑了，曹操没了笼络关羽的机会。将来赤壁之战，那关羽还会再放曹操吗？再说败走麦城的时候，身边跟着一个关平俩周仓，要把吴国武将都杀退了，刘备还能再举倾国之兵给二爷报仇吗？到时候兵强马壮的刘蜀对上曹操腾挪余地可就大的多了。</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提前心疼完将军</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不信没大纲</p>
`;
default:
			return '';
	}
}
        