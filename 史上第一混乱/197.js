$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伤害不大，侮辱极强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老太太：真晦气[fn=15]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhh我要被笑死了</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老太太上线！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼上防剧透没防住呀，我再加一楼
.

.
.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透























防剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金子……</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个一刷的人的疑惑：不会是一直活在电话里的某人吧？</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好喜欢这个称呼</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各种写师师姐姐的，最喜欢小花写的…</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也有点想他了</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，都去了固阳了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑了一天才骑回去[fn=33]</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;里面没活的了？[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该不是春坤山吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金2投的钱，金1发现不知道所以撤资了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;支票皱了就不能用了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;握成一团丢在桌上，两个动作比什么心理描写都强</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;fa防剧透









啊，放剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防沙币剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;档剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再加一层，






防剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以下有严重剧透
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
防剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空空儿</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你让费三口给你个警官证，这个应该比板砖好使。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是一个也撂不倒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兔子打老虎，想得还挺严谨。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好一个都字</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你会后悔的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
default:
			return '';
	}
}
        