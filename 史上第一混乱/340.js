$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原著里宋江诏安时算上喽啰好像也就一万人左右</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水浒传里全宋最精锐的军队都拿不下梁山，招安后更是把辽国上下都吊打一遍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坐山雕也挺强的</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是干一天休一天呀？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就福报好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;资本家，资本家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前边说是北山</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉像是某些网游的NPC聚集地</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该去拍大话西游了</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;琢磨了一会儿应该是调头</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都没人吐槽？我都以为我看的是盗版，还纳闷的看了下，</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也是个人才</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他能懂这个？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都看出来北京口音了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伙计的左手臂上还戴了个红箍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这伙计也穿越了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太传神了哈哈哈哈</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，和之前那个梗首尾呼应啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这之前都射哪了[fn=33]</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节太妙了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;军师才有凉席睡，普通小喽啰直接睡石板</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么大个军师还睡凉席。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈凉席褶子，谁睡谁有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凉席褶子…太特么有画面了</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他大舅他二舅都是他舅</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;随手一句，到就这么舒服</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我老公呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我这么大一个眼镜呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我徒弟呢?</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼鏡才是本體啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这画面感哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得看不懂阵法原来是近视眼啊，哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这反应，，，不愧是干军师的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈哈，笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扶着门框幽怨道：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿哈哈哈
</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美国人又不打算打梁山[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多新鲜呐</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好一个又分又割</p>
`;
default:
			return '';
	}
}
        