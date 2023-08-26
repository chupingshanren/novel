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
<p>&nbsp;&nbsp;&nbsp;&nbsp;自体ntr</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;觉悟不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷啥？？</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别想了就他这成绩咋考得上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变成个大蛀虫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然鹅他这个脏心眼子坐在你那个位置就不一定会惩治蛀虫了</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好有自知之明[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都被你发现了
</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迈克尔·杰克驴:可就遭老罪喽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今年出了满江红电影</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强这副无赖嘴脸，太萌了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个开大车的上辈子是万人敌，这辈子是除了拉家常就跑腿了，自从有了王尚书小强车都懒得开了</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;降维打击</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这意思就是平时很傻[fn=58]</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太深奥了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太阳应该是同一个太阳，但是看的是不是“一个”，不好说</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是防伪水印</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除了包子我也没见过哪个穿越者能被围成这个怂样的</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，我直呼好家伙</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是语音听到这段的，智能语音机器人竟然把这段快板节奏拿捏的死死的，不得不承认智能语音机器人算是被小花调教出来了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兔子一搬砖，连打17个堂口！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;论白虎团我只服苏联的</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神特么的白沙烟[fn=33]白沙不好抽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白沙烟[fn=11]美国大兵不是抽骆驼么……好像看的几部二战电影都是。小花这是多喜欢抽白沙</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都要改啊</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真 通天</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;论抗金，背嵬军是专业的</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;警觉！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来在岳飞眼里小强已经是别人“手眼通天”的“天”了，小强听了不得受宠若惊啊</p>
`;
default:
			return '';
	}
}
        