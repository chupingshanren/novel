$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=34]这汉奸人设是真牢固啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是狗改不了吃…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猜错了，内奸不是张冰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;woc</p>
`;
