$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你接着忽悠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还行</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到底是玩文字的 柳下垃圾 想想就透着一股深沉劲儿 跟牡丹花下死有一拼[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王跖不行吗哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留下垃圾？还是个捡垃圾的[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=5]没毛病</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下两位，是我们现在想多了[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前任还行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呃，这句话很有歧义</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孕三个月以后，没有禁忌症的才能，别问我为什么知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三个月</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;21金维他，维生素啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神™金维他</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给小花广告费没</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又打广告</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这玩意嗑多了尿超黄，跟红牛一个色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;调30条命就行[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时医院真的每天都用这个药哈哈哈，特别流行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生命一号，打钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扣钱扣钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我那时候看 这广告还天天在电视上放呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谐音梗扣钱？h</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我脑白金加倍给你！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神™金维他</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;21金维他，维生素啊</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果平行时空了，就不应该会影响到现代，如果刺秦成功后面的时代都会推倒重来，那就不是平行时空啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早走晚走有啥区别么，历史的那一刻用在哪里，又跑不掉，什么时候出发，你还不是要去同一个时间点，见同一个场面。</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从侧面点出了小强其实不是不尊老爱幼的人，只是单纯不给这俩老王八好脸色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这神仙，也是倒了八辈子血霉了。</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;态度好多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重新定义“注意语气”。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那么问题来了，这药性是三天一到，立马从满状态降到0呢，还是这三天里慢慢降到0[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸好多薅了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说带着土，不拔不就行了吗</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼哼唧唧[fn=10]</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得他是想洗白，你觉得呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在也敢写，不过恐怕得写清楚是国内几个正牌的民主党派之一而且多半不能是重要职务，这句不知道想干什么也得删</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那些年的影视作品里经常会有这类的黑老大变成某某委员的设定，只能说越来越保守了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都敢写？当年那个时代真的是宽松啊。</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看我眼色行事🤪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这整的我都怀疑这整件事到底是不是他们说的那样了，有鬼啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老何是厚道人呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贼有画面感</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天庭牌骗子哈哈哈哈哈</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;企业转型[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈，不做大哥好多年</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就想问问，开车以后怎么打开前机盖？用根棍子从车窗那伸出去撩开么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好，车子冷了，电瓶没电了，启动不了啦。回不来了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这穿越时空的热度怎么着不得水冷或者液氮？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开车以后就不用了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉要凉，汽车电瓶的电不大火情况下用不了好久</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那会都是把主机箱壳拆一半下来，还不行就把风扇搁后面吹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超频这个词很多年没想起来了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以前就没想到，当年偷摸着在家玩星际1，我爸回来一摸机箱，对着我就是一套组合拳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是用矿泉水瓶子接了一瓶自来水放上，结果瓶盖没拧紧……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;风冷…回忆杀！[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没水冷的时候，我拆了机箱盖，电风扇对着吹得。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小学时候用加了冰的毛巾盖电视机盖的我骄傲了么[fn=10][fn=10][fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，我也干过</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太监了</p>
`;
default:
			return '';
	}
}
        