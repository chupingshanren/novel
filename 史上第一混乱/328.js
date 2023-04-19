$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花是狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这几个字我不要，你把钱退给我</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是本书第一战力，说话也这么帅</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那小棍划墙缝我小时候经常干，有时候没小棍甚至用手指头划</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生活气息扑面而来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花写东西太有画面感了~我第一次看的时候就把小说在我心里拍成电视剧了...</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话也很有感觉</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他只是想吃个西红柿鸡蛋面的千古一帝罢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子心心念念的西红柿鸡蛋面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还不是因为那场公元前XX年的第一场雪！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二路汽车是刀郎么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是他的命</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实吧，不是我残忍，反正秦始皇的地位在那个年代，找点真血不是简单的很嘛</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有一个大胆的想法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水是藏不住的，所以就算眼睛憋住了，也还是会从嘴里流出来，至于是哪张嘴就不好说了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水在身上是藏不住的，所以会流水。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪儿来的经验</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有饭盒怎么杀青？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以用肠衣之类的嘛</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。其他人的血照样存不住。。所以就是说你真的砍。反正别砍死就行。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了好几遍这个书了，这个地方，我发现荆轲还真是个刺客，用真的，杀个人放个血？？？？</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结果现在还在用塑料袋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自己结婚还不忘搂席</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;套套吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到时候现代人发现了两千年前的塑料？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打包剩菜吧[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么目的？竟然这么不可告人？</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲:“其实我是偶像派的”</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿个包丢人，小强真实写照</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了伊塔之柱版本的丢人[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王！南无阿弥陀佛净世拂尘灼莲六管加特林！</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么那都有吴老二啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昨天今天和明天？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=35][fn=35]</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天下无贼里黎叔跟刘德华说的一句 哈哈哈</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒙毅快疯了😂😂</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搁这卡bug呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这金杯居然是四驱的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轮胎磨刀 佩服佩服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对于金杯车，你把后轮架起来就行咧。金杯是后驱车。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成龙的我是谁哈哈哈哈，人家那是打磨针头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四驅的金杯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神脑洞</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;fgnb！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6666666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高级打磨术</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;破坏古董了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;磨成王冰冰那样可还行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;fgnb</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈咯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;fgnb！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没磨成棒槌就好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;法国士兵！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;江底雅座一位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;fgnb！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6666666</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看过这个！hhhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前边秦王绕柱那个图呢？怎么没人发了啊？[fn=8][fn=8][fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柯子可爱 哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=4][fn=4]</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搜，狗小花？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，那会儿去网吧就先试试键盘灵不灵</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼泪还我[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥真萌</p>
`;
default:
			return '';
	}
}
        