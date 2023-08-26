$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在的小李子怕是不怕纠缠了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十年一结账那种？然后全聚德烤鸡店找她，剥蒜……看懂的点赞[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好志向！</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以吃豆腐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圆房  哈哈哈哈哈哈
有够搞笑的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事，又不是大爷他爸，一边剥一边吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你你你</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了n遍才发现这写的是拿黄页查电话</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有在街上摆的，流水宴。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看，人话否？</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还得掐</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们宋江大哥？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹丕、刘骏、刘彧点了个踩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李世民</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢秀秀，好姑娘</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天凌晨，老太太走了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年，女王依然坚挺。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女王比英镑都坚挺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020年，伊丽莎白二世依然坚挺……</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这真是没有强人念的好汉能说出来的话！</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，300全回来了</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芙蓉姐姐么</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论显示11，进来怎么就3条</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面刘老六早说了虞姬没有投生在现代，老怀疑小雨干啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小雨性格明显不是虞姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;思雨=思项羽？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没结果也会哭的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉也是小雨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉是思雨！</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前我没得选，现在我只想做个好人。
小强：好啊，你去跟岳飞说啊。</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不好意思，我是警察👮[fn=13]</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做个品行不错的普通人就好，不是说非得圣人才是好人的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好人其实也没那么复杂，我感觉三个字就够，对得起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，我做不到[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句有意思格调还高，不该不火的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处不该无评啊 各位有谁能做到吗？ [fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了，下辈子一起努力哈哈哈</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实不止古代 就算现在 国家级领导 哪怕上岁数了 都是看着很端庄很有威严的 年轻时肯定差不了</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是吧，经理才不到1800块？07年的工资没这么低啊，07年我们工地上小工都100一天了</p>
`;
default:
			return '';
	}
}
        