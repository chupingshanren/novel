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
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
`;
