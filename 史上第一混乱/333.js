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
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎轲子还是死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标题党🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看吧，不少章，就没有本章说，大家都高兴了，那就是点娘，一旦少了章，不用说，准备挨骂就好。</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来我大中国的领导作风从秦朝就传下来了🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老人家？</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好枪法！把保险丝都打断了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊我死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！我血流满地啊！</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三英战小强</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;速度要身体配合的，一分钟之后小强的身体肯定就撑不下去了，别问我为什么知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也就打李元霸可能打不了，李元霸那锤子带范围伤害，跟核弹似的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问题是真面对高手，高手告诉你我要一剑直劈，你就一定能躲开吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦舞阳：这小子开挂，举报啦！</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是腰（肾）不行啊～😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盖聂1.0版本太强了，为了平衡2.0版本惨遭大削</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苍蝇拍。这有什么好屏蔽的</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经天下无敌啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃了饼干和赵白脸打会怎么样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天下无敌了也就离倒霉不远了，不是拖鞋就是胳肢窝</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了 胖子跑累了</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跑三迈，你是李菁什么人[fn=31]</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太乱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个乱呐</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的柯子 还是被砸晕了 哈哈哈哈哈哈</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话要客气点说、虽然跟你工作单位不是一个系统的，但好歹业务往来很多，别某佛某佛的容易让人家机关单位的有情绪上的误会</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦始皇：难道我拿不下个宵小之辈？以后活没活不知道，但此刻他必然是死的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇帝的剑法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么霸气呀，王将军还以为胖子要面子不能戳破哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸气侧漏！</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;整个晋西北都乱成了一锅粥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这要是拍电视剧，得请大咖了，不然太难演了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都打乱套了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看多少次也觉得太精彩了哈哈哈哈哈哈</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;排列组合总共有…我也数不出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;射的对 射的对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来群臣是打你这学来的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知不觉的就装了一个比</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章可太逗了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为你不会五十荣五十耻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为你不在大委员会序列之内……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我笑的停不下来哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为不认识你啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑出猪叫声😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈 </p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦舞阳是wifi？</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲果然还是改了剧本，哈哈哈哈哈哈。</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像极了第一次[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;gay里gay气的[fn=5]</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处必须有评论！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊我血流满地啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊 这糟糕的台词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噗！</p>
`;
default:
			return '';
	}
}
        