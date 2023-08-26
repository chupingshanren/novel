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
<p>&nbsp;&nbsp;&nbsp;&nbsp;萝卜开会</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看卓别林的摩登时代吧！拧螺丝一百年了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然发觉，这书当年就有拧螺丝这个梗了呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这算个啥，那个修摩托的和包子铺老板才是真的牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不不不 你忘了 你现在是强哥的手下了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一会还有开大车的和机关小职员呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那肯定相当紧</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神特么基层……</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这俩工人也有点东西啊，能追上李逵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;台阶=超级板砖可还行[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈台阶笑死我</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥章评留不上</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;程丰收也是好力气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太惨了，面包车招谁惹谁了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;面—包—车—</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀小兵就是收割机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原著里李逵空手只是一般强，但拿上板斧能冲垮一只军队</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈你的语言表达功底也确实过硬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈太有画面感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实过硬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;匍匐前进怎么反向啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈(ಡωಡ)hiahiahia</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈俩高手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来这俩工人才是高手。。</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这既视感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比项羽力气小不了多少</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好大的气力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感扑面而来</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没说过不知道就算了 卢俊义已经跟你这么说过了你还来这样 确实不是啥好汉 还能舔着脸说出来这话……</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学会了，遮天蔽日的壮汉，哈哈哈哈哈哈哈哈哈哈</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝金重生二十多年，确实是几十年以前的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又不老实，老老实实说很久前不行么？几十年能衡量你们的仇怨？</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;描写的真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;段天狼也蛮有意思的</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我那里缺烧火做饭的劈柴，你要来吗</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那锅煮过人的百年老汤…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿汤哥？碟中谍啊</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么养人的汤弄个温泉咋样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细皮嫩肉的  哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真·阿汤哥</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疯狂的赛车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们翔记的贡丸汤里真的有米田共</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘跃进的骨灰？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小六这个人塑造的不错，真实的很。小花书里的人物感觉一个个都是活生生的。</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;起点文化有限公司。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🌿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是女为悦己者容啦哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文化荒漠了属于是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咦，好像也没毛病</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2333</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花真的太厉害了！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的是每一个人物，都有血有肉</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也就900多年没练</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我自己传自己</p>
`;
default:
			return '';
	}
}
        