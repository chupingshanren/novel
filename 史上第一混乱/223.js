$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽和渔夫</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以这是人家仨人喝水然后你这把残留的药给喝了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好不是只找回记忆没找回功夫</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喝了刷锅水？</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽发现有虞姬肉体的人灵魂不是虞姬后，选择了不爱，但秀秀发现有冉冬夜肉体的人灵魂变成花荣后，却依然深爱，确实有问题。试问你们深爱的初恋，有一天有一个样子和她一样却完全是另一个人来了，就是撞脸了，你还能那么爱？就算是她的转世，但行为心态已经完全不同了，还能爱？至少需要时间接受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人很感性的，只要你值得抛弃一切就一切。但说实话这段感情写确实有点过于理想化和故事性了。
强人念这种情况，本身和前身性格核心基本上是一样的吧，秀秀可能爱上的就是核心。但可以很肯定的告诉你秀秀爱上的不是肉体，因为小白脸有的是倾家荡产付出生命不值得，总之这段感情戏是不太行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讨论秀秀爱灵魂爱肉体的
就是，你们不觉得，这位秀秀她目前的行为，有点渗人吗？就是有种精神状态或者说心理状态有点问题的感觉
我不知道该怎么说，同样是执着，可以为爱人去死，项羽和虞姬，我觉得很正常，很感动；但秀秀这就是感觉很渗人，有种担心她心理状态的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得你正好相反。[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀秀和项羽正好相反</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只爱肉体能爱到为了救爱人倾家荡产吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舔狗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们讨论到一个很深刻的问题 当一个人失去了所有记忆 他还是他自己吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有超越肉体的爱，其实秀秀就是爱这副肉体，而不管灵魂已经变了谁</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫我老王吧</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一本正经的胡说八道</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花，你……</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很急</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，暗恋也叫</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王英差点就绿了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开多个同人篇？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝金是想处对象了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他敢跟三娘说试试？</p>
`;
default:
			return '';
	}
}
        