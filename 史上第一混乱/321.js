$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说亚历山大东征是在这之前还是在这之后？如果他万一绕道过来了，是让他修长城还是把他给坑杀了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是啊，秦朝再过几年也就没了</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六公主还是那么傲娇？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;葛优教美国警察学中文</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这还带画外音吐槽现实的啊</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一堆捧哏</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白起把长平之战打完之后六国就再也没希望了，除非出个刘秀，不然秦国没可能灭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以历史也有可能是小强推动的。</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这将军下辈子怕不是费三口吧。。。</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;战国文人 典型亡命徒 还都有真本事 真惹不起 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;单身的人那么多，我只是其中一个～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;单身情歌歌词。。   你算不算其中一个</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疑车无据</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;英雄</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞬间炸裂！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老前辈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李哥，你这不是听说，你已经亲眼所见了呀</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李斯吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;深tm人妖</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;'俺也一样</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪里是单身情歌的词？</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是不是从东土大唐而来</p>
`;
default:
			return '';
	}
}
        