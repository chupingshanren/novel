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
<p>&nbsp;&nbsp;&nbsp;&nbsp;饿啊，中其拖刀计也!</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浪催的，破玩意挂那么高[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷秀于孙孙必摧之</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;堤高于岸浪必摧之</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，牛批</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剩余一分中，三分紧张三分嫉妒却还有三分疯狂；还有一分中，三分……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出现了，扇形图眼神</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;换的马甲叫啥啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十五年了，书呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;08年27，81的，今年整40</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;gkd</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到希灵银国[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十三年了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十二年1影子都没有</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要给他吃了，石宝拿下不说，梁山上又多了一个拥护你的，呼延灼和关胜私交不错，还能拉拢，他们当时打梁山打了好几遍，每个人都带着好几个副将，这又是十来个人，扈三娘那就能搞定王英，王英山上那帮又能带上三四个，俩武松加杨志能搞定二龙山俩花荣是秦明大舅子，这么一来整个梁山上得有七八十站你这边的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此等小辈，如同土鸡瓦狗，插标卖首尔。</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿越还有家？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;著名的教育家、军事家、特立独行的穿越家。这句话看着就是一乐</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也可以和他比试击剑[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来《影》里面那个拖刀也是这么来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈一起用拖刀计</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛皮靴还能把人抽死呢</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三百回合。。。石宝尸体都凉了</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神解释</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;混乱版五十步笑百步</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好形容[fn=5]</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他一个使流星锤的有资格说这话吗？</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强难得帅了一回</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;石宝和关胜打了三百回合了，体力只怕未必撑得住</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都闪开 小强要开始装13了！</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;段天狼:勿cue</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伤害力不大，侮辱性极强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;段天狼：mmp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;段天狼这是要被黑一辈子了</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;薅这么多胡子是打算凹个造型么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;似曾相识的赶脚</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是二班的[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我行！我不是一般人儿</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美式居合[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;带人，食大便啦[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用枪就犯规了不是，咱用麻醉刀砍他</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈猥琐，果真猥琐</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你占关胜便宜……</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戏说不是胡说，改编不是乱编</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个自诩就很有自知之明了</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗哥还是挺关心小强的</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是好兄弟[fn=33]</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是MT</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;头发薅完了</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃完后遗症就大了去了。[fn=4]</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉自己快要笑死了[fn=4][fn=4][fn=4]</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;耍宝小强</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅不过三秒哈哈哈</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想了半天 寻思 应该改成DAD？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拉玛：捏～～个～～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;厉害了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;街区的鸭？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿哥六十:MMP</p>
`;
default:
			return '';
	}
}
        