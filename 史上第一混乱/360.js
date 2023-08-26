$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么长时间都没去厕所，肾也太好了吧</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥的游戏机到现在都没给人送过去呢</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;带点种子嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;茄子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子心心念念的西红柿鸡蛋面有了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，嬴哥</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大白马养在学校这么久都没骑骑？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人开车说的话不能全信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你男人当初要是多喝几碗现在能给你整个汗国出来</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对！时光隧道。</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不买风力发电机吗</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，千万别交孩子们“服散”啊
等等，这七个人后来不是决裂了吗？
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神闲了好(✪▽✪)</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏宁国美应该一直都没有吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这玩意现在还有，我都不知道国美苏宁能不能熬得过它</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在有，红白街机掌机都有。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有迷你fc~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;FC是正版啊，小霸王山寨的就是FC</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;京东有卖，小霸王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在淘宝上大把的自研掌机，什么尺寸都有，至少能玩ps</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;任天堂平均五年出次红白机纪念版，这个真不值钱，去年经典涂装无卡蓝牙版才八百</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真聪明啊</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃过烤全猪烤全羊，味道杠杠的👍🏻👍🏻👍🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃过一次，不知道是烤的技术烂还是怎么，表皮齁咸，里面的肉又干又柴又没味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有孜然你们吃不觉得膻吗？何况就算有孜然吃都很膻</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈老师！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接地气</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花那么长时间？[fn=11]你果然还是女的。[fn=44]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来张小花是MM！</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用电池的电视是有的…天线跟收音机天线似的…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈  上坟 哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmm可能这是个可以供电的电视……（压根没见过电池电视）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好吧，作为显示器的上电池的小电视机有了，可是，张小花，你好像忘了让小强给红白机买个电源了</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐僧不是成佛了麼 怎麼會在這禮</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史上的玄奘，不是西游记那个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这怕是大话西游版的三藏吧</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛病，就是去找他们。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，包子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有没有可能，包子以为是穿越小说的套路，撞车后穿越[fn=37]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然有大智慧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈😄</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;门清啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我直接笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好好一老师都被带偏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;*****，颜老师也有经验了</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是罗·玄奘·家英法师[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就喜欢这个腔调的玄奘</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国道有收费站吗？</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孕妇憋不住尿吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心真大</p>
`;
default:
			return '';
	}
}
        