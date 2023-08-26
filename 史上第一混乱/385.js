$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;优势在我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;优势在我</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这有啥丢人的！跟朋友玩吃鸡，都好唱“没有枪，没有包，敌人给我们送上前。。</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=5][fn=5][fn=5][fn=5]</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刷完副本回来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;单雄信何必呢，屎刷子不是一样的用吗，干嘛用狼牙棒委屈自己……</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你搞点对讲机不好吗</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肉不好吃？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;酒不好喝？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;活着不好？</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俩人都是门神，一人一边门</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗨呀妈呀😂😂😂</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然我也是农民，但是我想说一句，历史上真正造反成功的，除了朱元璋之外的其他人本身都是处于精英阶层的~~</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;个银两粒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么就没有热心的看官说说这是哪个小品</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈好抽象</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二百多万兵需要多少钱呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，想到了电影，《南征北战》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;声嘶力竭……</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五（wù)毛俩（lià），一（yǐ）块钱不（bǔ）卖（maī）
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是方言问题，项羽那里有信号，离胖子也就十来年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里的意思是秦朝离信号增强器太远，通话效果不好，不是赢哥方言的问题。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子的方言着实头疼</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛逼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明军降维打击了。明军那时有红衣大炮和三眼火铳了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;70万军队要从南京走到太原不得走大半年啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这排比句用的，真该让语文老师们都来学学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是20万明军么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段写的好。</p>
`;
default:
			return '';
	}
}
        