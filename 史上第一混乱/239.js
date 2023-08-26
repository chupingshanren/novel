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
<p>&nbsp;&nbsp;&nbsp;&nbsp;沧浪之刀，留痕于此。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第六章01</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又要去找免费的读啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚订阅完，接着断章，看着气，妈蛋，客服也是一句话，等审核，</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是国宝，是国宝批发商。。。</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大人说话 小孩别插嘴</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再过一年就嗝屁了，有什么用</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别藏着了，大红袍母树砍了拉过来吧。王羲之兰亭集序扣几个字都能值这株茶树祖宗了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;头一次小说里看见老家的茶叶[fn=4]</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小白自己都嫌丑[fn=4]</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对声音之听觉和气味之嗅觉的描述可以相互通感，现在又来了个视觉通感回音听觉了，阿哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每人都给你重写套，裱起来不好么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑喷了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书你能不能晚上看！笑得跟个傻子一样越笑越精神…</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴道子，阎立本，王羲之，就这面校旗没几个亿别想买下来，还得是美刀。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后育才大门口就是中国书画界的耶路撒冷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，这旗子三天不丢我跟你姓</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜真卿 柳公权</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸡贼如你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=58]</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可乐的秘方不重要，强的是人家的销售模式</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这玩意但凡流出去那就是贩卖国宝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文化人能说他盗窃么？不能，万万不能，至于该怎么说？我也不知道…………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只是不欢迎，但是人家来还不敢拦着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;读书人的事能叫偷吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，还打不得😂😂</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快去看足球，看完你能闭门写书一个月不出屋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢的都是大大小小混乱的球！张小花就是个混逑</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，以前去朋友家送东西他家里一群画协的聚会，太尼玛弯酸了</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那7个人以惊艳的孔雀开屏之姿横行乡里，最后得了一个绰号，叫葫芦兄弟。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼上几位可能没看懂，这不是数学问题，小强指的是摆个葫芦兄弟的造型，刘老六还开车当然不能算上。再加上一个“再次上演”，不难想起前文的“以孔雀开屏之资横行乡里”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道是我数学不好，不缺啊</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛病</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摘了摘了！看多了没食欲辣眼睛做噩梦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对曰：“不是个玩意儿”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给点面子哈哈哈哈</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥本章说这么少啊，书里全是槽点</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李白：不是我，我一点印象都没有！</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起来了，这段是找小孩瞎画的，但是应该是删了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那啥，大爷，您兼职算命？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;准！</p>
`;
default:
			return '';
	}
}
        