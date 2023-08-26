$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就没楼上那么多事，您走时烦请把垃圾捎下楼去就行！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我用不用再帮你通个厕所</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大概是02年前后吧，新浪网的首页里还有人体艺术分区。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;调皮地挤在了一起[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汤姆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;降维打击了</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给他们补补脑 用门…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀，你真残忍</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽：驴？？？</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈神吐槽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看一次笑一次、要是你上还不是白给…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没想谁下药的吗？</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：借你吉言哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过萧先生和表妹感情也不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呦嚯，猜错了</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2333333</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是没适应，现在社会，对于杀人还是无所谓</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夜明珠其实就是辐射，搁现代确实属于要躲着点的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夜明珠哎</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;次元壁破了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超现实。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽……………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真体贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是强子知道疼人啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;离谱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是五人组疼我们读者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是小强心细[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这大概就是为什么大侠打架总是要喊出招式的原因吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;官方吐槽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花，你特么赢了，我专门花钱来评论的[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;次元壁破了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超现实。。。</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhhhhhhhhhh吴老二</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和天斗呢</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不早说，我都挖六十尺深了[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021年，这是真的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🔪了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就把你刀了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🔪了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刀了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;预言家，刀了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最近人不少阿[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021年，这是真的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说我挖到的不锈钢脸盘不是胖子的尿壶？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我正在横向往机场挖着呢[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不早说，我都挖六十尺深了[fn=47]</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老郝和秦桧儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我知道了！绝对就是张小花！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;WC，不会是郝老板吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;熟得不能再熟的人，前边隔三差五的就出现</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是以为是剧透的留言，哈哈哈我就不剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个熟人～</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饼干！</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后把厕所里的马桶起下来搬走了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这黑手党也太可爱了</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有猫和老鼠内味了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙！</p>
`;
default:
			return '';
	}
}
        