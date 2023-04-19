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
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗨嗨的迷子</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一定一定，下次一定，咕咕咕</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越吃毒越重啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;临危不乱，大将风度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧古今第一刺客！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻有大智慧啊</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还得是邦子啊</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷老四和徐江肯定很有共同话题</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃饼干管用不</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧帮他赚的啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是卖瓶子来的钱？哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔标记</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也不是不可以[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坐牢也行……包子还真考虑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;安得廣廈千萬間</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话说的真水平，他的坟多久刨完……你品，你细品</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个思路真是充满王八之气</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我国一直秉承保护性挖坟，要不是已经被盗墓贼盯上或者已经垮塌了或者已经因为搞基建挖出来了，基本都不会动他们了，毕竟没谁会天天闲着没事像兜一样打扰死人的安宁</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以要一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金银不值钱，珠宝瓶瓶罐罐啥的才值钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就冲你这句，你就是我三哥了，不是钱不钱的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张献忠的宝藏已经找到了，不过历史上老吴在东北应该没留啥物件</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要我要啊，多不敢说，卖十几个亿还不跟玩似的。</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强，我要进来了！</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022.09.11、N刷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;N刷了，一看有评论就知道有人剧透了，新人就别往下看评论了[fn=14][fn=14][fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透                                                                                 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有的情节一透了就没意思了，建议别看









</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一刷的知道这有个伏笔就行，别往下翻，看剧透没意思。老炮们把那货踩下去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透





防剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透







防剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是这瓶酒坏了菜</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽估计早就感觉到她不是虞姬了  毕竟朝夕相处</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真·伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老张奉献了两辈子，投胎享福去了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会写悲剧还让老张走了啊</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二声</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼到底懂不懂什么是小三啊?一直在那喷，莫名其妙的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下估计是那种暗恋一个请过她吃饭的男人，就默认其他所有喜欢他的女人都是不要脸的小三的人吧。</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;药不会是张冰下的吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防






剧






透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书剧透的人真多，虽然我也是回来炒冷饭的，哈哈哈，都不记得看过几遍了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真不是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总觉的张冰不是虞姬，没准是那两个侍妾里的一个或者是丫鬟呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记住，这是伏笔</p>
`;
default:
			return '';
	}
}
        