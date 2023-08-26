$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷老四你对聊得投机这个事有曲解啊</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀，比我看的快哦[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合着他不是一个人，没人吐槽吗？
告诉我2023年还在看混乱的我不是一个人</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟我差不多，電腦科學和企業管理</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个切入点太刁钻了</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然一身正气</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好在是个外国人，瞳色浅能看出来瞳孔一缩</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不是已经能看图了吗</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ASCII码？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捂脸长叹，小花啊小花，都不知道怎么说你了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？？你对编程有什么误解</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你送给刘老六那辆三蹦子拿来估估价吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;买了这车 第三次世界大战都不怕了</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好，砸了，就是晚了点[fn=4]</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗汉奸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古德白＝goodbye。没点文化，莫看小化。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古爷：真他娘的晦气。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神特么古德白 …</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;划重点，混乱里第一位反派“露面”了</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘老六？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哥儿·皮实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗝屁</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=5]恶趣味</p>
`;
default:
			return '';
	}
}
        