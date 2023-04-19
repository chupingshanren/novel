$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姓赵的管不好大宋，还得来一个姓刘的来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按原著的说法，把搓宋打成狗的辽国被宋江平了，所以李逵说的“杀上东京，夺了鸟位”还真不是难事</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈能屈能伸大丈夫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不亏</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史上不是君臣互相卖金本来就不会赢</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日系RPG</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;火系大魔导师位面之子刘秀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十年前的小说很流行圣阶</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强是现任的，撂挑子都干瞪眼，
何必相欺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一把把把把住了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从这一刻起小强就是点子王了</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人有时候遇到危险会突然有种危机感……俗称第六感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;故意的吧，先前刚开车穿回去的时候，刚想着挂倒档撞人，那两人就躲开了。</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对自己认识很准确</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈没毛病</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是灭就有戏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平方腊！</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车同轨书同文不需要写，他一定会去做，毕竟性格就那样，看着乱的东西就烦，本书一开始赢哥看着酒店里各时区的钟就烦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“书同文，车同轨”不是关键点。只要统一了，就算秦始皇不做也有别的皇帝来做这件事。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呃..车同轨，书同文？不算？？</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巨鹿竟然也没有，是算到胡亥里了吗</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;单位是我家 东西随便拿[fn=4]</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;事实上修长城是当时防御北方最经济的做法了，否则需要巨量的戍边部队和损耗高到离谱的补给线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;进可攻退可守</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防守？饿从来莫想过防守</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦始皇修长城完全不是防守，是为了做进攻的桥头堡</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这，现在作弊，就不能转移兵力故意输掉吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉着没了韩信刘邦也打不动项羽</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这正版怎么回事，让他鲨点人看还行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是少杀点人</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵光义:“逮虾户！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我知道赵匡义必须干什么，他必须得坐着驴车来段漂移</p>
`;
default:
			return '';
	}
}
        