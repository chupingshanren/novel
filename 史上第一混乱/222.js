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
<p>&nbsp;&nbsp;&nbsp;&nbsp;皮鞭行不行</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花荣和冉冬夜，他们的灵魂是一样的，本质是没有改变的，武松成了方镇江也依旧是重情义的磊落汉子，邓元觉成了宝金也还是洒脱豪放，冉冬夜又怎么可能不是一个有傲骨的爷们儿？秀秀更爱花荣也完全可以理解，因为花荣身上，毕竟比冉冬夜多了一份失而复得、柳暗花明——她为了冉冬夜几乎倾尽家财，又哪里对不起冉冬夜了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉小花对花秀两个人感情处理的还是太过理想化了？让人觉得有点强行，导致我每次回顾这本书都跳过他们两个的戏份</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞎扯啥？你们穿越过吗？好好看小说就行了。[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们这些人，看犬夜叉肯定也会争桔梗还是戈薇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还能怎么办，总不能男人还在却守活寡吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花荣和冉东夜，有点桔梗和戈薇的意思了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有冉冬夜记忆的花荣就只是花荣，这话说明秀秀喜欢的是这幅皮囊而已，以前对感情的执着也变成了只喜欢皮囊的变态，这感情戏写的什么玩意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是花容没有冉冬夜的记忆，严格地说，秀秀失去了和冉冬夜的过去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冉冬夜能爱上秀秀，为什么花荣会不爱上秀秀？他们本质上是一个人，能吸引冉冬夜的特质也一定能吸引花荣。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花荣和冉冬夜，他们的灵魂是一样的，本质是没有改变的，武松成了方镇江也依旧是重情义的磊落汉子，邓元觉成了宝金也还是洒脱豪放，冉冬夜又怎么可能不是一个有傲骨的爷们儿？秀秀更爱花荣也完全可以理解，因为花荣身上，毕竟比冉冬夜多了一份失而复得、柳暗花明——她为了冉冬夜几乎倾尽家财，又哪里对不起冉冬夜了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八大天王几个也是吃了药的，按你们这想法，他们这几个这一世的老婆孩子可就不能要了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是馋他身子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉小花对花秀两个人感情处理的还是太过理想化了？让人觉得有点强行，导致我每次回顾这本书都跳过他们两个的戏份</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这里也不算是绿，因为真花荣已经死了，这个“花荣”只不过是继承花荣记忆的冉冬夜罢了，赢家还是冉冬夜，只不过是没之前记忆罢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能是因为好用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但在冉冬夜的视角其实是移情别恋了</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后来才知道这俩不是一种导弹，而且爱国者也没那么神奇，但那时候资讯不发达啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实爱国者拦截率才30%不到，要换战斧的话连10%都没</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去腊味馆找找看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有烧腊呀～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神特么方蜡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这把我Mvp！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王[fn=4]</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑出声</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那还打个什么劲儿。有个三长两短孩子咋办。看人家历天润！</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真和金家有关系？</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;润洁打钱</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先用意念锁定……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好几个奥运冠军都是近视，他们说射击全凭感觉，根本看不清靶子。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;据说大蟒也是近视眼~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好多射箭选手视力好像并不是多好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有个射箭选手也是近视眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;近视眼还能射这么准也真强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;近视眼真绝了</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这事得陈老师来</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都有梗哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;WC:厕所</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;WC，噗~</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你大哥刚被你揍过一顿[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;镇江的大哥[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方腊的人格魅力认识到了</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝金没揍你一顿算你们交情好</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐不是肤浅的人，不在乎里面有个啥样的灵魂，姐主要爱的是这句活好的肉体……</p>
`;
default:
			return '';
	}
}
        