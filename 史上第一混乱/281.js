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
<p>&nbsp;&nbsp;&nbsp;&nbsp;我说上一章怎么没书评呢，合着是才恢复</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;48章-1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大意就是育才在国际媒体引起轰动，李师师传奇首映取得巨大成功</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搞不懂上一章有什么好和谐的，又没黄又没暴力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正版小说受害者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈个鸡的又吞一章</p>
`;
