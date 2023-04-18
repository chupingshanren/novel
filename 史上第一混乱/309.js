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
<p>&nbsp;&nbsp;&nbsp;&nbsp;最催泪了这章呜呜呜，最喜欢五人组</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年还以为这就完结了呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次到这章都不开心了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再哭一次！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看一次哭一次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章的笑容逐渐消失</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章，第一次看看到题目时候心里就堵了一下。
现在不知道第几次了，还会堵一下。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ade,胖子，ade,大个儿，ade,二傻，ade，表妹，ade，邦子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难受啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看到这有书评还以为又漏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章没书评，果然又是刚恢复</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;MMP</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸好这一章没吞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，这一章看的心里难受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;靠！又丢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最催泪了这章呜呜呜，最喜欢五人组</p>
`;
