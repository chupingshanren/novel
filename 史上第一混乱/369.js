$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是小花说我还真不知道原来这句话出自西游记啊</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐朝不是有说法，食素侍魔，信奉魔鬼才吃素</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最早的和尚是可以吃肉的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长久吃素的话闻肉有特别重的腥膻味，而且消化不了，吃了拉肚子。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，我姨奶奶以前快80的人了一辈子吃素身体健康的很，有一次上楼梯摔了一跤，人没事却是突然想开了开了荤，然后没过大半年就去世了[fn=12]</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌克兰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年了  开始乱起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿富汗应该太平了，我说的是应该~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叙利亚也要乱啦</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;山涛，向秀</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有这玩意不如用快递</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在晚几年走王玄策的路就不用绕那么远了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话玄奘法师想的是把经书取回来在中原流传</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;悟空，这玩意可比白龙马快多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有这东西玄奘法师也不会有现在的历史地位了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了，多接地气啊</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;遇见对手了[fn=33]</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咋排序的，根据发型吗？[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏格拉底参过军，柏拉图练过武，亚里士多德不太清楚但应该也差不了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古代宗教和哲学经常是混同发展，印度更是其中之最，西欧在文艺复兴后也出来专门的经院哲学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，从师爷到徒孙都划拉成了一个辈分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏格拉底还真是靠打仗勇猛先出的名，后来才改行搞哲学[fn=58]一个斯巴达风格的汉子拿着金箍棒穿着小皮裤，嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中希合拍的西游记是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这几个可都比玄奘大多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两开花两开花</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段写的好</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这绝壁不是什么小城市</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花通透</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来荤菜就是说葱姜蒜这类，即使是现在菜市场买的肉也可以吃。不可以吃的是因自己而死的肉。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五荤没味精吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节 葱蒜这类也算荤腥</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;机会风险都说得明明白白了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然没评论</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈老师说得对</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不爱吃素丸子</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的想法是：如果你是觉得为了吃肉而杀害动物残忍，吃这种仿肉素食是完全没问题的。可是如果是因为信仰的话，吃这种仿制肉就跟吃真肉没有两样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面两个楼歪了……我是很支持这个观点。虽然吃的是素食，心里想的却是肉，修个屁的佛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的对，我就讨厌现代这些似荤实素的假玩意儿。既然要吃素就别想那么多乱七八糟的，弄些假肉骗人骗己还不如直接吃肉呢。</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一棍子抡懵[fn=33]</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强说的有道理</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最初的佛家其实是荤腥不忌的，一天只能化三次缘，别人给什么就吃什么，不能扰民，要不就违背了佛家不争不贪的初衷</p>
`;
default:
			return '';
	}
}
        