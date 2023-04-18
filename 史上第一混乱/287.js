$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一个知道这些的老头已经死了</p>
`;
