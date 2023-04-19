$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜你真没超过自己的巅峰之作。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你啥时候把戏说写了看看能超越不</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一本不如一本</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜啊，目前为止，混乱依然是小花的巅峰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;20年，强人也没超过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下下下下本都没超混乱</p>
`;
default:
			return '';
	}
}
        