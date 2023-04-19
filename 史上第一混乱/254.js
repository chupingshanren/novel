$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这老板不是停车十块钱不带找零的嘛</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后就算那些人都走了，育才底子留下了，估计到时候部队里可能会有一支精锐的育才军团。里面的士兵能打不说，看病算命甚至琴棋书画都会。[fn=4]</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那幸亏包子不是公务员，不然你再有钱也没的送啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我对这个战斗过的地方表示有歧义</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浪漫一把[fn=4]</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古爷这是给雷老四看的，他和小强关系很好</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去超市买了一堆东西，每件都不贵，加起来咋就那么多钱了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还敢要加盟费？</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该说古爷特意在雷老四面前点明了和小强的关系，让他别再找茬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷老四以为小强的靠山是古爷，所以才这样有恃无恐的砸他的买卖</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古...古筝？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贝司</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二胡!</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;透剧，古爷叫古...古啥来着小花也没说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像一直不知道古爷叫啥</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我媳妇是给我干的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强子，你再掰扯一下，继你是你自己的祖宗之后，恭喜你，你是你自己的老板</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子秘书你好今天没啥事嘿嘿嘿</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟春晚小品似的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实按前文包子说的，她们老板喜欢看搏击比赛，包子知道小强他们的比赛结果还是听她们老板说的。说明胡老板应该至少看过比赛直播的，甚至去看过现场，这会儿应该认出小强是“散打王”了。但这段并没有表现出来，胡老板只是对自己的员工家属能挑了雷老四的场子表示惊叹，可能是当初小花写这段的时候忘了有这茬儿了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说说看，你想怎么个深入法？</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真特么笑死了，雷老四被狠狠的雷了一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈反差</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么吓人么🤔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;处处是笑点</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们那里一开始停车费就是十块起步的，再后来就计时了，搞得我出门大多数时间都骑自行车了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年轻的时候看这书，对包子不太感冒，可每次重温一遍的时候，越看就越喜欢包子，老婆就得找这样滴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了，停车自由</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;炒股还能月入十万，那真是有钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在也是有钱人[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满是怨念</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老雷被雷到了[fn=26]</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老雷你想说这个怪兽是吧</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来包子要当老板娘了[fn=33]</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老太太也得抢，面子不能丢，就算娃都有了还是得抢回去。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人都是借口。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;海伦先是跟了斯巴达王，然后跟帕里斯跑了，帕里斯被毒箭射死后又跟了另一个王子，最后城破了又跟回了斯巴达王………这特么究竟是有多漂亮，能让这么多英雄为了她打十几年仗………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说句不好听的，海伦就是公交车啊</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;砸店砸上瘾了[fn=33]</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个黑颜祸水的意思？</p>
`;
default:
			return '';
	}
}
        