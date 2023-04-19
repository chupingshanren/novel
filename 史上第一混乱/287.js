$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一个知道这些的老头已经死了</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龟鳖丸吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我这个脑子”，老虎很有自知之明嘛</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;百年前的饼啊[fn=33]</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花涉猎挺广啊哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是谁杀了我，而我，又杀了谁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是我杀了我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哲学三问</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈 姬家三兄弟都栽在了客栈</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过不去了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是26分，莫非是13的2倍，2B的意思？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花一辈子的怨念[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第五次，第六次，第七次了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又见26分</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老虎又被支走了😂</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可算了吧，吃喝嫖赌也够一个人彻底完蛋的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，这话到现在来看可真够讽刺的</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万万没想到是空空儿叛变了</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧还犒劳过岳家军呢</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢·挖自己坟·政</p>
`;
default:
			return '';
	}
}
        