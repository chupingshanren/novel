$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太小看现在的吊车了嘛</p>
`;
