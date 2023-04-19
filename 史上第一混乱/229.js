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
<p>&nbsp;&nbsp;&nbsp;&nbsp;走别人的路，让别人无路可走</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈你竟然忽悠苏武给你当传达室大爷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;门房苏大爷的故事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传达室苏大爷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;字里行间对人物刻画非常深刻 小花是高手！</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实是伏笔，老何来了，草地全种的诱惑草</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕不是卖给和天斗了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邻居来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;安排😄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是门卫吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;使命感</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;flag？？？</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打的好侯爷带我一个，不过住您就自己住吧223</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=5][fn=5][fn=5]</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;油条最早是象征着把秦桧夫妇绑在一起下油锅炸，也叫油炸秦桧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈 油炸鬼 炸秦桧</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;油炸桧哈哈哈哈哈哈哈</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听听，群众的声音！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虾仁猪心23333</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是这样吗？[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不止杭州，我小时候也听家里说这种说法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杭州故老相传的说法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈，看到这里爆笑不止😂😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有的地方油鬼和油条不一样的</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扔地上就很真实了🤣</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱祁镇</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该没有人想吃他吧？也就是妖吃他</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老实人克坏蛋啊</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;风声鹤唳，杯弓蛇影。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈(ಡωಡ)hiahiahia</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来好好的给整出心理阴影了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有觉悟了，可惜猜错了。</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二次了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这倒是真的，想当个有用的忠臣是最难的</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是[fn=37]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花绝对看过疯狂的石头</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坐车顶棚上有没有身份我不知道，但是交警查你身份是肯定的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我特么一口稀饭全喷了出来</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自作孽啊</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是汉室吧</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说白了就是抖M</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;找德爷贝爷去呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贝爷真得拿我们苏侯爷当偶像才行，看看生存的极限</p>
`;
default:
			return '';
	}
}
        