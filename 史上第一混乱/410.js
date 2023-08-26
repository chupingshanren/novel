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
<p>&nbsp;&nbsp;&nbsp;&nbsp;封狼居胥，勒石燕然啊</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我长那么大，从没跟人有过太大的分歧。直到看见了咸豆腐脑！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打个屁，胰岛素不便宜，我快50了也不打</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不好意思，我都快50了也没见那个高[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仿佛看到了胰岛素在向我招手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我还有十八年，又一个青春</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完了，我没几年了[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是二十九</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话儿没错，我就是四十多打胰岛素的。[fn=4]</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白起没输过。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千军万马避白袍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王者荣耀单排6年，千场胜率还保持在80%以上的都是神仙。</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么派能抓老鼠？蛋黄派？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咦～居然不和谐这章</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽就会F2A完全没有运营</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就跟黄晓明演一部好片子就要再演两部霸道总裁奖励自己吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽打仗就是推A</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不就是李云龙吗？</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处没有人配音吗[fn=5]</p>
`;
        case 43:
            return `
            `;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节处理得真好，这就交代清楚车的去向了👍🏻👍🏻👍🏻</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎！不对呀？小强同学是要脸才要打破误解啊！[fn=50]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;he~to  小强脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要脸</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话让我想起神剧里说抗战已经第七个年头了，还有一年就胜利了。话说是不是导演忘了交代说话人的背景了，人家要也是穿越的呢，是不是就不会被说成是神剧了</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这关注点</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;整本书，两位数以上的算法，你看看小强算对几个！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木兰到你那去的时候28岁，这倒退了两年是26岁，木兰去你那的时候你是27，过了一年木兰走时候你是28岁，现在你还是28岁？</p>
`;
default:
			return '';
	}
}
        