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
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章没书评合着又是刚回复？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;缺的应该是黑，手，党那张，就是往金杯上印黑手印子那章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草 体验感极差 垃圾QD</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;擦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书没法看了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;MMP</p>
`;
