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
<p>&nbsp;&nbsp;&nbsp;&nbsp;教父里 就因为桑尼多了句嘴 对面毒枭就判断出柯里昂家族不是一条心 之后老头被刺 老三流放 家族元气大伤</p>
`;
