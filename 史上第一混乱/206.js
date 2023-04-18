$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕是戴宗给狗哥安利的蓝色生死恋……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个不比 蓝色生死恋 差 催泪</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“嗡”的一声就很传神了 耳机不小心最大音量 第一感觉就是这个</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这药还有生理上的治疗功能就离谱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以我一下子产生了很多疑问 为什么恢复记忆的药可以就醒植物人？植物人又不是失忆症 为什么救起来会只记得前世不是今生 又为什么不能一起记住？</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥一下就想起这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泡腾片</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿着大顶倒立吃砒霜</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跑得很快的假马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打给老张啊，一着急怎么大伙全慌了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全当穿个马甲，反正不重要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甲马就是平时烧给死人的纸马。水浒里描述过，戴宗就是利用甲马中的鬼神之力带着自己飞奔，一点也不会累。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马甲具体是啥样子我很好奇</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;233每个人说的话都很形象的反应这个人的性格</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赞</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郝仁的北斗星一个师都装的下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看过五菱宏光装49人的新闻没？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;破金杯一拉门跳下来七八条大汉。。。</p>
`;
default:
			return '';
	}
}
        