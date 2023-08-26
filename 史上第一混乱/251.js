$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强无数次想带羽哥去平事，羽哥一次都没去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起当年300的谦让了哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;边揍人边夸人家好功夫[fn=5][fn=5][fn=5]</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦始皇不以武力见长 但是也自幼习武的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚年吴三桂确实当得这评价，一生大小数百战，从松锦战满清，一片石战大顺，四川打大西，南下灭南明，云南战土司，最后晚年回手对垒清军，这战斗经验属实丰富的不行。就算是个庸才经过这几十年的厮杀磨练也成为名将了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦的指挥很强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽鲁莽我不同意，作为一个优秀的指挥官，绝不会鲁莽，楚汉时期，项羽绝对是当时最优秀的指挥官之一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦始皇战略肯定是最强的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦始皇不以武力见长可也不是没杀过人啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲁莽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新五人组成立之初 就是一场大战</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三光政策呀这是，抢光，砸光，烧光</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后也没带</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想吃馄饨了</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戏太多了哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;300</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子太逗了</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷老虎：老弟且慢！不必劳烦各路英雄了，我这就让儿子来道歉！</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;业务熟练。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能和秦始皇论哥们？三桂同志啊，没看出来，你也是很有勇气的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;shi皇兄...</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以省的别浪费</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柯子是真聪明</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻永远这么聪明</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让陈妖精惯坏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到现在还记得轩尼诗呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清明的头脑</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一屁股扛飞，好好想画面，想到什么漫画没</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉全书笔墨最精的人物就是嬴哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面既视感哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴胖子的陕西口音太有违大战在即的紧张氛围了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥只要一出场，自带百分百笑点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，办公室笑出声</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我始终对这个一屁股扛飞有深刻印象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥威武！</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;专业。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萨日朗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我，荆轲，不想死的，走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;酒吧这乱哄哄的喝完结账谈单率起码得80%</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正常酒吧点酒都是先给钱再开喝，哪有喝完了给钱的</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额那时候这就丝普通话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;统一哈嘛，麻烦滴很</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;统一哈，统一哈，都给额说陕西话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥应该说撒人咧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻子机灵着呢[fn=58]</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太喜欢赢哥了</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧，狐闹！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有狐臭？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了还没洗澡吧？那味道是能直接熏晕过去。</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，达芙妮，当年超火的，现在都快倒闭了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达芙妮上1000的少吧，感觉就是几百的档次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022了、达芙妮没有这么贵的了…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;见证达芙妮的兴衰史……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达芙妮超便宜，哪来的1400啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在300块一双我还不见得买</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达芙妮线下都要没了吧…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我操为什么我脑子里出现了库拉索</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，达芙妮，当年超火的，现在都快倒闭了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能是tiffany</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达芙妮没有这么贵的...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花虽然叫小花，看来也是个直男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;广告挺多啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;140块差不多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达芙妮？没那么贵的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达芙妮都这么贵了！我多久都没逛商场了！</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花和路飞一样，喜欢给人取外号</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们六个就能横扫全场，我和另一个胖子甚至都不用出手</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年轻人哪，肯定是不讲***</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1234 6789</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猥琐流</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这好吗？这不好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来!骗!来!偷袭!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不讲武德[fn=4]</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;棍子:“像话吗，像话吗，像话吗”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骗！偷袭！这样好吗？这样不好</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以你不够混账啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里吴三桂的设定 小事靠得住 大事拎不清</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;步惊云就是：我不用你帮，我的仇人得亲手杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萨斯给</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;史二：我怀疑你内涵我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说明还真是用人家帮的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还行</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一万个是够呛，一百个还是没什么问题的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有一万人，你杀几百上千依旧悍勇的话，一般军队估计也发怵，再杀点估计全跑了，倒不用真杀光[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算是五万多头猪，羽哥抓三天也抓不完</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别把秦始皇放你一挡，人家也是会武的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不是有饼干吗？[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽怕真的是万人敌，当然是在马上，下马不说万人敌，弄趴下千八百的应该没啥问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥只怕当真是万人敌</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感受到了对胖子深深的恶意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢胖子武力不差</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少是谁？羽哥，三哥，嬴胖子，木兰姐，轲子？看起来小强最小吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子怎么啦，胖子吃你家大米啦，哼</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我勒个去</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感太强了！[fn=11]</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈形容太有趣了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这形容词 也就小花了🤣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典名场面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫和老鼠里我见过这场面哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时候的旋转门使劲推真的转很快，不像现在的，你再使劲也快不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死哈哈哈哈</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以为犯花案了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿~你要真说出来了，挨的更狠</p>
`;
default:
			return '';
	}
}
        