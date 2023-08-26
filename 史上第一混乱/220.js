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
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段当时看不错。现在回看真TM假。唉！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真·漏点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我辈修士，何惜一战</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原标题:露点之战</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等后面梁山上两个花荣你就老实了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花这是啥脑袋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好专业啊</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人形机关枪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;27根箭，箭箭相连，这是拿了根几十米的棍子捅过去了！</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神剧，又是一部神剧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们这些人一般不用AK，暴露值太高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书评论就没一个正经人。。。
是个正经人也被你们给气走了。
我就不一样。
ak射速就比花容快，也比他远，哼！[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃鸡呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你加个扩容少十三发呢</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是张冰吃不吃，是虞姬一定会选择吃，这夫妻俩人真是灵魂契合天生一对那种，都不把命当命，自己的也不当</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张冰要是不愿意吃呢</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花是有多喜欢胖子？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扭秧歌的胖子[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，画面感极强[fn=5]</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吸鼠霸王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是西楚霸王啊</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是又开车了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，花花不厚道</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每天不是有秀秀给他按摩嘛，才半年时间又不长</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这玩意没法深究，体力和精神应该关系不大，主要还是物理上的身体素质吧……就算精神是花荣，身体还是那个刚醒的植物人，卧床半年都得有点肌肉萎缩了吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;体力还比不上一个躺了半年醒过来没多久的植物人</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是锲而不舍</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两边同时出现就代表了俩人神交以往，过了一辈子还是有默契</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话写的真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人物塑造很好哇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写的真棒</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自古对波…</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实不好……</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不急不9[fn=11]</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6个？！容我思考一下！</p>
`;
default:
			return '';
	}
}
        