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
<p>&nbsp;&nbsp;&nbsp;&nbsp;催更催更催更[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你真美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在想屁吃[fn=34]</p>
`;
default:
			return '';
	}
}
        