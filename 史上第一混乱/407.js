$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是刘邦跟项羽的不同 刘邦要的是平天下 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人心多脏啊</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就冲吕雉之后把持大汉权柄，项羽还真未必干的过吕雉。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也是真的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕后在整个历史里也是一代人杰</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也算交情[fn=39]</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然鹅有些同类人可不会相互喜欢啊…比如杠精</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子跟刘老六似得，还都姓刘</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去年买了块表</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会真打的，但样子要做足。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卫兵有话要讲。。。</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说真的，当时就借着救包子的名义给邦子吃药，大个儿没准就真同意了。大个儿假装失败后，进兵道见木兰姐也能说的通。</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子[fn=33]</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦：那项羽不就成我祖宗了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别瞎JB问[fn=10]</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不接着乱吗</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哥找什么呢，爸帮你找找</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;献给丞相的七星宝刀</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈对邦子好残忍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等等，为啥放鞋里？不怕汗脚把药给弄化了呀～</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，画面感爆炸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个上辈子学来的卧槽都说出来了……</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来来！你自己闻</p>
`;
        case 102:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完这章感觉手里的薯片都不香了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;惨，邦子，惨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都要吐了………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
`;
        case 104:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;删减了不少凤凤戏份</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽！我是停不下来了，脸都笑皱了</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段简直了，拍戏都不用剧本改编，画面都有了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上学时没人想和衣服上洒了墨汁的同学坐一块，实在是太臭了</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正你俩半斤八两，都是流氓，没啥[fn=4]</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;py</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谷道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;钢门</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次看到这点，我和小强一样，不认识的看着一句话。。。。</p>
`;
default:
			return '';
	}
}
        