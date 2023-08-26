$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;左半球还是右半球？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了</p>
`;
default:
			return '';
	}
}
        