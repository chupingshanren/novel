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
<p>&nbsp;&nbsp;&nbsp;&nbsp;第三卷第一章也叫这名？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郝仁初到霍尔莱塔就是按这章写的，大眼珠子受小花影响挺深的</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花这段写的真好，那种无助的感觉很到位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;這不是費三口送的防風防水打火機嗎</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么档次[fn=15]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等离子电视？ 什么档次！跟我用一样的电视！（手动狗头）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忘记提醒一下他们这个杯子不能烧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直到明朝，俺答入寇每次抢的最多的也是锅碗瓢盆</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段写的太形象了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蛇虫鼠蚁应该不少，而且还是最好环境下生长的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章写的好啊</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我小时候八十年代末还能听到狼叫，九十年代初期还能听到那些村里来读书的孩子说哪儿拉电网电死老虎了。我奶奶也给我讲以前我太外公打老虎的故事。括弧，当然用的是炸药，我太外公还是很有自知之明的，枪都不屑用，因为用了也白用。</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈😄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一头狼，遭到猎人的围捕，路遇东郭先生，东郭先生就把他给吃了</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的很细节啊</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以紧急避险</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郝仁当时也是这想法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝对公平</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都快没命了害搁这儿贫呢😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼珠子肯定看过混乱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老虎老虎，你要是不咬我的话，我保证……我也不咬你[fn=19]</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八分钟吧也就</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八分钟不到，</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Энэ хэн бэ?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丁丁点点点钱干？！</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;端著碗騎馬…</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全新语种[fn=33]</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;05年我就开始用颜文字了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;12年了耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十一年前就有人这么干了！白前辈输了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个蒙古语还是个颜文字呐…</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上辈子一定在秋名山跑快递送豆腐吧。那这女的就是谢谢叔叔零花钱那位？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“稳定鸡”了解一下哇～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;估计在马背上竖个硬币都不会倒的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一看就是秋名山上买过豆腐</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈说了句人话</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一整章写的真的好！从开始的无助恐慌，到牧民解救，再到铁木真派人来迎接前的忐忑。中间又穿插了几个小段子。小花不写纪实文学可惜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花内蒙人，写草原风情很真实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈真可爱</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈[fn=5]</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一看就知道东北滴。[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中国人呗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;何主任的康耐都只是在上班时在办公室穿，出门换拖鞋</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你身高超过车轴了吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真正的蒙古牧民我信，可惜能见到的都是旅游景点的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前段时间去草原，牧民是真的热情</p>
`;
default:
			return '';
	}
}
        