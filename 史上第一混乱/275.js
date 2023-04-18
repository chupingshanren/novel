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
<p>&nbsp;&nbsp;&nbsp;&nbsp;我国对于墓葬基本都是抢救性挖掘，一般都是工地挖出来了或者有人去派出所报告了才会有人来管，那些没有被发现的就让他埋地下入土为安了</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了这么多，还真就是这个秦王最有气度和格局</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是千古一帝的气度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是小花这边人设可爱……最近玩了个手游，里面也有个嬴政，死后来到忘川，还是冷冰冰的，最大的爱好是天天窝在家里自己烧陶俑，因为他觉得只有无生命的陶俑最可信，人都不可信[fn=61]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是去阎王那儿逛了一圈，啥都明白了。也不在乎了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的超喜欢胖子</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去过阴间发现还是活人殉葬管事，一下发现全在那等着呢，就是不知道还听不听话。</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;gun和毒都可以批量生产，而且在混乱地区都是硬通货，古董行吗？各有各的来钱渠道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;99美金送子弹，你们猜我怎么知道的～</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佟湘玉拿钱那个镜头：这是个撒嘛</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;印加帝国</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在好几本穿越小说里主角开始大航海时总喜欢埋点东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就应该去美洲埋点古董，到时候咱也来个自古以来🐶。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不一定，你要是刨出来了玛雅或其他美洲原住民的遗物，那也是宝贝</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他不会卖给外国的神吗[fn=33]</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接给他指咸阳在哪不就完了？</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;停车十块钱不找零怎么能忘了呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的几大执念排在前两位的一个是高考数学26分，另一个就是自动铅</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以胡亥的做人做事，四个没有也正常。</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三国里，曹操遗言，设疑冢七十二，设置摸金校尉的曹老板，也怕人在他死后盗他的墓h h h</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四外😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真不算多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总是不自觉跟着读[fn=10]</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个东西要是真找到了也没啥悖论么。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后一句莫名戳中笑点</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自己挖自己的坟</p>
`;
default:
			return '';
	}
}
        