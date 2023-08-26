$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给项羽买一辆呗</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话又说回来了，两辆车用不着就算了，两台手机哪怕在07年也不是什么稀罕事，小强在明明希望有一台符合自己身份的手机的情况下，还为了这个不买新手机就有点强行了，大不了随时带两台嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是蓝屏哒</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结果是秦桧儿</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一部分是刘老六故意捉弄小强，一方面也是为了未来剧情（剧透：草原）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你投靠何天窦吧，脱离天庭独立了那才自在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咋会这么巧，怕不是刘老六算好了的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁让他磨叽，手机碎了五百万就到账了，硬是磨叽了一个月才买好手机，好么，吃过一次亏还不长记性，这车都磨叽半年了才换。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次小强想买点好东西，工资就准时到账了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神仙预备役啊，肯定得低调了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这在一众装13穿越爽文儿里算得上数一数二凄惨的男主了吧。不过也好吧，破金杯比较搭配小强的气质……</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他家已经有俩了啊，还有一辆金少送的呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么不能买呢？普通人家都可以买两辆车[fn=10]</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是销售，不管是卖车的还是卖房的，他们嘴里的话千万别信[fn=33][fn=33]</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘老六一定是故意的，每次都赶在小强换设备以前发工资</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhh每次小强想换点好的都没换成</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方头大耳
尽显粗糙之美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就是说可以把瓤掏了换成新的嘛</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来都来了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;07年的大G，小花很有远见啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“不管灵不灵，多少信一点？”（大概是这样说吧）
怪不得这句有点眼熟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是故宫畅行版吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以进故宫[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;07年就要买大G，666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强你想让包子坐在引擎盖上哭吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;07年，有眼光。有余钱是该买一辆来看</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲道理，你这个无敌金杯车比世界上任何一个豪车都贵了（只要你敢卖）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我宁愿在宝马里哭。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020年，宝马出8系了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;07年有8系？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这口才，不做传销可惜了</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还记得当年垃圾桶里的破手机吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是第一次见手挡大G[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈你到底是受过什么折磨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好用不，你用不着哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这之前开的什么面包车啊</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;07年的大G，100挂零怎么可能拿下？</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要是刘老六就等小强买完车再说，完了我把新车开走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;买手机，买车，两件事告诉大伙做事决定了就别拖，很容易变成一辈子的痛[fn=47]</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是说其实车还是可以再买一辆的嘛 平时开嘛……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的很憋屈，尤其自己开久过烂车也有那种难受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真憋屈啊，两次发工资都是破烂货上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能是为了好笑，但其实不好笑，很憋屈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说，你不早点换车，天庭办事也太孙子了，发工资以前给人家说一声啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太坑了 整面包车上了</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很有用，再也不怕撞车了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种车特有安全感。要是我有这么一辆车，我天天吃喝拉撒都在车上。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，不用但是得有</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;憋着坏呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了在漫长的时间里穿行</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那么可不可以忒修斯之车呢</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以为本书已经够混乱了，没想到还是有原则的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然那谁喝醉是怎么回事？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝笔是故意坑小强的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘老六瞎扯谈，就是故意的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神物自晦，以后小强说不定比犀利哥还犀利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：一句mmp送给刘老六</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就不能买一辆新车平时开，面包扔一边有事儿了再开，小强这会儿脑袋咋不转弯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那不怪和天斗这样，这要是我我也这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝对是故意整小强的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么原则？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以为本书已经够混乱了，没想到还是有原则的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然那谁喝醉是怎么回事？！</p>
`;
default:
			return '';
	}
}
        