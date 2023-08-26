$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六哥[fn=33]</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这帮好汉忘了还要去梁山了</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郝仁:你要不信我继续编。
大眼珠子绝对跟小花有亲戚关系！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;审查官的基本素养</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和谐了啥啊[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是看字母片吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]是什么(´-ω-`)</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这上学就没干一件有关学习的事啊……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重点关注，每人是几个？</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我六岁，三舅看碟片时我蹲在虚掩的门后看了好一会儿😳</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈角度刁钻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还以为这里会有愚者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老校长属于上一个时代了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;切中要害，小花🐮🍺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;举个栗子</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“包子和小象可以犯浑，但强子不行。”
“别让龟孙知道你肚子里有几个韭菜盒。”
“老子嗝屁之后，第一个叫你吃席的就是内鬼。”
——邦·刘里昂</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;具体多少？
50。</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟只猪似的在8楼爬的不是段天豹么</p>
`;
default:
			return '';
	}
}
        