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
<p>&nbsp;&nbsp;&nbsp;&nbsp;真●护花使者</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一肚子坏水哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神机军师朱武，也是个一肚子坏水的</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实段景住也拄拐[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥这样说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了🌿🌿🌿🌿🌿🌿🌿</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白发魔女？</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西餐放蒜本来也正常，而且会事先放在油里烤，顶多就是拿在手上吃和用叉子叉着吃的区别，当然你要非要用手拿着吃用叉子叉就不对味了那我觉得也挺作的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我媳妇睡觉打呼噜………[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西餐就蒜多正常啊，不然普罗旺斯风味是啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就当施肥呗</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿：“可见情使人痴。”</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;害，胡导可还行</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;溥仪：考古的事我不懂 但我爹我还是认识的[fn=60]</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起去年美国那案子了[fn=4]大夏天偷渡 为躲避检查 一百多人身上抹牛排调料 塞进封闭式卡车 半路车坏了司机自己跑了 等车被发现时 40多具尸体已经腌入味了 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把行动不便的张顺拉上车，细节处理得真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈鱼罐头</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兜导好</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手工耿的脑花崩。严重怀疑小花是穿越回来的。</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦～～</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这导演不行，不行。[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，你有于妈的潜力2333</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是导演</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙[fn=58]</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂嗦的是捏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还顺带捏了一下。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这车开的有点上头呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，**</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个捅字用的是极好。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;英雄豪杰？算不算不说，英雄豪杰也是人呐！[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学校包场的电影院里也这么干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们那会儿也干过这事[fn=4]</p>
`;
default:
			return '';
	}
}
        