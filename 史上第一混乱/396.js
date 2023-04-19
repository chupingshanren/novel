$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呦呵？看照片文绉的，没想到小花还是海量。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以为那个肘子已够不着调了，看来十年前的小花早就不在调上了……</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的很快乐，谢谢</p>
`;
default:
			return '';
	}
}
        