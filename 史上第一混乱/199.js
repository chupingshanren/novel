$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当初都没发现漱口这个细节哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫你吃完不刷牙</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快把金2还回来！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的天，这里看哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜呜呜呜呜呜呜呜呜给我看哭了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸡皮疙瘩起来了…快哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的很喜欢金2</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜呜好兄弟啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这里相当于金二这个人格消失前最后念着的，就是小强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看好几遍了，现在看到这段前，居然有点紧张</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写的太好了 看几遍都不腻[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭了哭了 卧槽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话 看小花的书真的就是让你又哭又笑的 前一秒你还在笑的前仰后合的 下一秒就让你一身鸡皮疙瘩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看到这里心里都倍感伤感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花的感情戏总是能让人感动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了好多遍看到这里也会泪目……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以的，有笑有泪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一章没被删太好了！金一赌马那章也是最经典的为啥没了啊！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快把金2还回来！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的天，这里看哭了</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好兄弟👬兄弟情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还搁这伤感呢！！！！！</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸道总裁爱上流氓小强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玩味的笑：😏</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那在他眼里也只是个走******运的，就算小强正儿八经起来也只会嘲笑小强装得人模狗样的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要说小强作为清北校长一级的人身份也不低了</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑不出来，金2一去不复返</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;更恶心人了哈哈哈哈哈哈哈哈</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;德行</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脸皮厚的好处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老二花的还是老大的钱[fn=4]</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸气外露</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有分量</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸气</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋丹丹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张少华那张脸有点刻薄相，斯琴高娃吧，端庄大气，或者惠英红</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张少华老师肯定能演好[fn=31]</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈老太太不高兴了…难得有人来聊天</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关闭空巢老人[fn=12]</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金老太：好，跪安吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可会哄老人开心了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好啊</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起我老妈以后一个人孤零零的在别墅，我就给自己一个巴掌，我哪来的别墅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老太太真好啊</p>
`;
default:
			return '';
	}
}
        