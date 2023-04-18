$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你一看有人听说过你不跑就算了竟然还开心起来</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有杀气！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;款款，就比缓缓听起来，多了一些赵白脸弱不禁风矫揉造作的情态，真妙！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有杀气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;活在未来的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有杀气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕溅一身血</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有杀气</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段特别经典了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，大和尚骂人贼秃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前章评没时间吗，咋还得自己计时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三哥给自己的定位多半是怒发冲冠为红颜的反贼，汉奸格调多低啊哈哈，2018.6.26</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三哥内心也有一块柔软不可触碰的地方。。。记于2018年3月21日。。。
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能名垂千古也要遗臭万年！从这点来说，秦桧是个成功的汉奸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按说汉奸不少，偏偏秦桧最为人诟病，大概还是因为有岳飞做对比。</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 被动技-预知。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还真是海贼王里卡二的预见未来霸王色霸气啊[fn=11]</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新婚房</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该说是婚房了</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还差石敬瑭和引刀成一快。</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戚家军不是这么回事，皇帝和军队已经缺乏桥梁，根本不在乎你叫啥家军，东北李家军也没见被忌惮。戚家军的问题是在后来戚继光的后台倒了，这才受排挤。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九妹真的不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戚家军稍微好一点，主要戚继光那人比岳飞那几位懂人情世故，据说戚继光和奸臣也能处的关系不错。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;几千年皇帝的下限</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿，其他人也就算了，完颜构那是真的混账东西，洗不白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不想想那些皇帝是怎么上去的，能不担心么</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老吴处境有点难，夹在两大势力的中间等于是不管干什么都是里外不是人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;守不住，明朝中后期那操蛋的军事政策导致各个军镇(哪怕是辽镇这个最大的实土军镇)都没有完全脱离文官政府而进行独立作战的能力。更何况辽镇只剩下从山海关到宁远一线的狭窄辽西走廊，连粮食都无法自给。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有道理 有道理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有道理[fn=11]</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不慢慢炮制个三五万刀的，压根舍不得让他死啊</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李师师：表哥，谁要踩你啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗阿就屎</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲不知道什么时候就整个狠活</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正常新手区哪有这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双活三犯规了</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柳下跖狗头军师加一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能是雷老四那吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗跖。。</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段好逗[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈的，绝了</p>
`;
default:
			return '';
	}
}
        