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
<p>&nbsp;&nbsp;&nbsp;&nbsp;少的那章补到第一段的本章说里啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好我有纸书，哈哈小强吃口香糖变成秦桧的模样，大了大块头，大块头才打的他[fn=33][fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉观音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了一章啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
`;
