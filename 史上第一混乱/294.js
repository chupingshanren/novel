$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗨嗨的迷子</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一定一定，下次一定，咕咕咕</p>
`;
