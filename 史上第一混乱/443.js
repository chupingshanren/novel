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
<p>&nbsp;&nbsp;&nbsp;&nbsp;这吴三桂手下就算比不过关张赵，怎么看起来连曹仁张郃都差远了，一招被秒估计连潘凤都不如</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么老的道理现在这风气再看还是有点五味杂陈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二种让我一下想起了张校长</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二种，黄家驹</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夭寿啦，偶像骑着祖宗打老头啦</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多智而近妖是点评三国演义的描写吧，不是正经点评历史人物</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得 还没见面呢就摸了个透透的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;而且比酒好下药啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你小强能推断出这么多也挺厉害呀</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是四十度的，七百毫升兑着可乐喝掉，喝的晕晕乎乎浑身无力的睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这点家底全抖搂出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一罐330ml的啤酒，不是我吹牛逼，我能一口气闷了，然后不带杂质的把整罐口吐莲花出来</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总有一项是拿得出手的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子：你可别说了</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一板砖？</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孔子：对对对，我就是一俗人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我从未见过如此厚颜无耻之人(小强除外)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是子曰</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要有人跟你说 我是萧二狗 你还打不过他估计你也急</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你照照镜子就见到了</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有要脸的嘿</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么要用又？</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下药</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;厉害啊</p>
`;
default:
			return '';
	}
}
        