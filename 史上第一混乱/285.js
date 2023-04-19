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
<p>&nbsp;&nbsp;&nbsp;&nbsp;奇怪，清水家园是别墅群，他们是怎么进去的？</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;利</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真相了啊小强</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“就算刘老六”</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这要是过百亿了，你不得穿棉袄睡啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;价值千万的内裤…</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也从不穿睡衣，啥时候能接刘老六的班？</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咋不顺便问问古董的事情</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑手是这意思[fn=26]</p>
`;
default:
			return '';
	}
}
        