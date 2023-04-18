$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张大人，食大便啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十步之外枪快，十步之内枪又快又准。</p>
`;
