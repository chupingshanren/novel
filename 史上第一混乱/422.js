$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真舍不得啊</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说好的历史名人变成了四个“心地还算善良的小老板”</p>
`;
default:
			return '';
	}
}
        