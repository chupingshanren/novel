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
<p>&nbsp;&nbsp;&nbsp;&nbsp;大逆转が雷老四の危！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全书最燃的一节！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弄他</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标题有早期日漫的味儿了</p>
`;
