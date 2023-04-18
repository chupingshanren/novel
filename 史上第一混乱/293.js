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
<p>&nbsp;&nbsp;&nbsp;&nbsp;板砖的传承</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是小强的女人哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扑面而来的画面感</p>
`;
