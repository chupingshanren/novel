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
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人是人他妈生的，妖是妖他妈生的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;签到</p>
`;

        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是人类不用经历畜牲开智这一关啊</p>
`;

        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么我爱罗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成九转大肠了[fn=31]</p>
`;

        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;催眠？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就不得不提一下冠绝古今的吞天噬地大法了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;技能树不能只点战斗那一栏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就像《巴啦啦小魔仙》，破坏力强的都被归到黑魔法一类去了，剩下的魔法大都不具备攻击性。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;催哪里[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;催熟降雨......农业型人才啊</p>
`;

        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;威猛的小老虎～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在是嘉宾评论阶段</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是小脑虎</p>
`;

        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有特长就挖掘特长，，舍长取短反倒落了下乘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灵宝不是用金属和灵材做的吗，人家死了就是灵材啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奇技淫巧；形容詞、名詞、形容詞、名詞。不少成語是這種排序，比方落花流水這類的。我甚至有遇過作者寫成奇淫技巧的...這樣與其說是成語，不如說是古風陳述了。[fn=14]  現代因為媒體掌握傳播話語權，所以用字上有些許疏漏，就容易三百萬人成虎、不是很嚴重的事情，就影響得整個集體將錯就錯了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在没有5G的山野沟沟给一个农夫推荐5G花卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奇技淫巧吧，你这个听着怪怪的。。</p>
`;

        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面说了是麒麟的种族天赋
运气非常好，只要有1%的生存几率
他就99%不会死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点离谱，空有实力没脑子的早八百年被算计死了</p>
`;

        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈想到了钟山氏的大种牛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯种和其他的生下来还是纯种吗？还以为双方都是纯种才行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所谓上行下效，得有人带头。是吧，白泽皇[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用桃儿啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白泽皇带个头呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个可以有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里可以有本子</p>
`;

        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说六宗九朝到底都有谁啊？道宗，法身宗。周朝天元朝梦江朝白泽朝魏朝武朝隋朝雍朝。宗门少4个，皇朝少1个。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忘了搁哪看的了，兽类修道一般说妖。植物类得道一般说精，死物啊啥的山水这些说怪。妖精怪，三个品种</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柳统领不算吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年还有二十位，可想而知域外天魔多可怕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老白，玉隐，剑君，柳统领，李二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能指的是，道宗宗主，女帝，大周帝，李二，佛陀这五个。
老柳可能知道的人很少。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个白泽妖王还没渡劫吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柳树是精？</p>
`;

        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;延续白泽血脉，吾辈义不容辞！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我愿意为白泽血脉延续出一把子力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这建议不错啊，可以收刮有天赋的低阶修士，借他们的x,也指点他们修仙，互利互惠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是我第一次来到国际空间站，兴奋之余我却感觉到了一丝诡异。我发现太空上并不能看到我们国家的长城，但却能听到有人打算盘的声音。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么说呢……这里的评论……都叉出去吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我愿为白泽血脉出力，我基因弱，不影响白泽基因，而且速度快，不浪费时间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我愿意为白泽血脉延续出一把子力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这艰巨的任务就交给我吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大臣想着那个[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个大臣危</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;延续白泽血脉，吾辈义不容辞！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生出来应该也不是纯血的吧，不过有她自己的血再提纯应该可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怎么知道人家是脑子不好使，而不是脑子太过好使了？[fn=18] 硬是没想过人家其实，醉翁之意不在酒？[fn=58]</p>
`;

        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是可以吃红尘净土的仙桃吗[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者总是能玩出成语新花样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;红尘净土那桃子本质上相当于红尘仙子吧，别人吃了就相当于和红尘仙子生孩子。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女皇就没有男妃吗？目前看到俩女皇好像都没有，但是男皇都有妃子。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，要是吃红尘净土的桃子是不是就能诞下纯血？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;照这么说，江离可以打的所有人叫爸爸，算不算父泽苍生？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来母仪天下能这么哦用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿莱克斯塔萨是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;母仪天下，全天下都是我儿子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者总是能玩出成语新花样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是可以吃红尘净土的仙桃吗[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国民の女皇の堕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到了大妈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她要是个男的，最多累点，一个女皇就算中奖率贼高，那周期在那好像也生不了几个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是天下人都要帮忙一下？[fn=33]小本本交出来</p>
`;

        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎仔子，可爱捏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不入虎穴的那个虎仔吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得下本书里，遇到的虎妖，有穷奇血脉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎牙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给你打得喵喵叫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎鞭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘻嘻嘻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎仔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀儿，你没机会了</p>
`;

        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你毁了虎穴这个词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那叫虎鞭的岂不是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛逼
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穷逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎腚，虎牙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;解说：虎头虎脑是一对双胞胎兄弟……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我叫穷奇中脑腹侧背盖区</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎坤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎肉他也不好听啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请问你们族里虎肾和虎鞭是谁啊，没事，我就问问而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲨皮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是我的搭档，驴鞭。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泡酒合适</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎蛋蛋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你毁了虎穴这个词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那……猪妖牛妖啥的，岂不是……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎肉……虎皮🙃🙃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那叫虎鞭的岂不是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想认识一下叫虎肉的</p>
`;

        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孔布分子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这得让传统一点的儒生去...会物理说服的</p>
`;

        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是排出，我不是很认可</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这九枚钱被点化开智之后是像性感手枪一样每一枚都有独立的思想还是九枚只有一个思想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你知道茴字的几种写法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;云帆摸出九枚大钱（）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;云帆排出九枚大钱（）</p>
`;

        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;儒学一来肯定会削弱血性，这在历史上被无数北方民族证明过
何况儒学本来就是一个在高度尚武以至于混乱的时代诞生，意图恢复周礼秩序的学说，削弱血性不是什么“后世儒家传歪了”，而是本身设计如此
在武德爆表的年代，儒学会把武德削到充沛的程度，但在武德本就一般的年代，那就奔着衰微去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卖了还帮点钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人族和妖族是两个种族，你们居然试图拿古人和今人的差别来类比</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么会呢，要先有血气才能跟人家讲道理啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;儒教不会让人失去血气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样既能保证民风彪悍，也拥有自己的管理，以及发展系统</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那妖族目前倒是挺像匈奴，再进一步，就是要学蒙古。但也只是那样了，可以盛极一时，但这种模式决定了他们更擅长破坏，不擅长管理经营。
当然，修仙界了，可能情况又有所不同。不过毕竟可以借鉴蒙元那种模式，蒙元已经不算单纯的游牧民族，但又保留有游牧民族的凶狠之气</p>
`;

        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;专业解说要敢于下判断</p>
`;

        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大钱：草（一种植物）你一边看着算了还是要靠我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快看，他A上去了，他飞回来了，飞的好快啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然是成熟的大钱</p>
`;

        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小脑斧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想rua</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摸摸耳朵！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好萌的毛茸茸，白泽皇朝竟是福瑞天堂(˃ ⌑ ˂ഃ )</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我摸摸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么可爱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我摸摸！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妖族可以把自己一部分肉身练成法宝啊，比如虎鞭啥的！！鞭法天下无双</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小老虎[fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大猫猫可爱捏🥺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸让我摸摸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么有点可爱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是福瑞控，我先rua🤤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎头虎脑的小老虎！还会动虎耳朵！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;山[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱的小脑斧[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秋天的第一件灵宝，欲购从速，第二件还有优惠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;福瑞控来啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小脑斧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想rua</p>
`;

        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出现了，他使用了必杀技，滑铲…把老虎给喂饱了</p>
`;

        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下次请直接写虎鞭，简单明了，让人一看就懂！</p>
`;

        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始补足故事线了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;账房先生哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乐死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年江人皇使用大钱，单纯是字面上的金钱的力量吧[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;账房先生在前面是有情节呼应的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈不知道为什么想到王破</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这要是把大钱换成乐高积木，灵宝自己随意拼接就迪奥了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这账房还是个伏笔，虽然对主线没啥作用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;账房先生哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孔乙己是吧（</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乾坤一掷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;化缘派了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始补足故事线了吗</p>
`;
default:
			return '';
	}
}
        