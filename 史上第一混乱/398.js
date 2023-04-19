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
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈喜欢演习这一段…小花nb</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竖起好多金针菇？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是你？不过这家伙老婆应该挺漂亮，靓女怕粘汉[fn=4]</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一眼望去尽是免费的群众演员</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们玩的很开心啊。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子现在已经是一个成熟的演员了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一看绝对是大片拍摄现场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花的搞笑功力简直炉火纯青了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;面对面站着惨叫哈哈哈哈哈那画面太沙雕了……</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马鞭？还有这种兴致？</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;微操高手[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没想到小强还是个帅才</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不要伤亡数字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强凯申</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大风！大风！大风！</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;300万人冷兵器搞演戏死了少于1000人算组织得当了</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孔灵大悦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飙车大帝</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新年快乐[fn=4]</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看个乐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;落马？演习是假的，兵器可以拿木头代替，箭头可以不装，落马马蹄子可不能是假的，落马就全是践踏伤害了，大规模骑兵冲锋落马就必死吧。。。</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前说过，秦二哥在，尉迟恭出场领兵机会不多，正好让他在这跟秦琼战场上演习演习，也过把瘾</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第 n 次刷，看到这里突然想起来最近很火的电影《大突围》。大学生群演们是不是就是这么欢乐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子:啊！你砍到我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！我血流满地啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神剧亮了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！我死的好惨啊！</p>
`;
default:
			return '';
	}
}
        