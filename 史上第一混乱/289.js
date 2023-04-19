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
<p>&nbsp;&nbsp;&nbsp;&nbsp;大逆转が雷老四の危！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全书最燃的一节！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弄他</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标题有早期日漫的味儿了</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强着实有点窝囊</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到最后也没想出来，还是赵白脸出的手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小赵的杀气应该是造成危险的气息</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小赵是能看到未来的杀气……不是预知未来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是赵傻子搞定了空空儿，赵傻子貌似可以预知未来</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空空儿是刺客，项羽是骑兵，平地上肯定是空空儿有优势啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书里项羽作为事实上的千古第一战力，战力比拼却没怎么赢过，打吕布略胜但是从结果上来看是输了，这里又打不过空空儿，后来又被人说打不过盖聂，李元霸作为神话人物他也打不过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让小赵来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是时候让我荆哥出手了</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子：这仙界好生无趣，还是打架才符合我的心思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是职业杀手</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡帕[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道大伙儿小时候听过一个背靠背的鬼故事没有[fn=31]
“背靠背，真舒服……”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那叫卡帕，KAPPA！[fn=32]</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子铺</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多个客户而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来你是担心你自己啊刘警官。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感动</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是合作单位了，居然没有上层联系人电话？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，大家都是文明人</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这是骂自己屎壳郎啊😂</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不应该是第一个想到的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;师师，你咋不喊表嫂了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一语道破天机</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然还是平西王了解雷老四[fn=58]</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心细如发啊，心乱才如麻呢</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上回人都去新加坡了，这次就可以体会一下5+2+300+54+……的感觉了</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这算好的了，大金国八十万将士就因为包子被三百万联军围的铁桶一样就快自杀了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;惹谁不好偏惹包子，那可是本书第一大惹不起啊</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实  谁能想到全市最牛逼的黑老大只会抓人老婆这一招  太掉价了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怎么不说自己也是个笨蛋，明明上次经历过一次，这次还犯同样的错误</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得输的那么惨那么快，就这德行怎么腆脸叫闯王的？</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道现在是否有人可以描写一下...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年就禁止、在起点没有五部入V作品的作者、不能描写包子长相...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎哟，我这小脑仁快跟不上节奏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在想，花嫂看这本书的时候，小花得跪平几块搓衣板</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好毒呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;???</p>
`;
default:
			return '';
	}
}
        