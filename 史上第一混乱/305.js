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
<p>&nbsp;&nbsp;&nbsp;&nbsp;又放出来一章</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花特色 接地气的爽文 看着开心还痛快</p>
`;
        case 128:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“练的少”</p>
`;
        case 129:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是你自己听岔了，人家说的是练的少，又不是说的没练过。</p>
`;
        case 130:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夺笋呐</p>
`;
        case 131:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你四哥仁麻</p>
`;
        case 100:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这帮人里论折磨人的手段，梁山的比起邦子来还是差了一大截，虽然他们已经是杀人不眨眼的土匪了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在虐待俘虏这方面他们的确没什么人性的…削掉鼻子耳朵都是常见操作了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，call back</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蛋疼</p>
`;
        case 133:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这集我在猫和老鼠里看过</p>
`;
        case 134:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看都乐出声</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这操作，我的鼻涕也要流出来了。</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;地府都去过了，你还对月亮感兴趣?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总的来说就是想“上天”了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;试试就试试</p>
`;
        case 110:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜景生接电话的时候，身边梁山好汉都围满了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;估计是个诱饵，毕竟论耍心眼……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是么，我不信</p>
`;
        case 113:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个桥段在张小军里见大师兄还用了</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：没记住</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会玩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李时珍的皮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;调皮</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子啊[fn=12][fn=12][fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;省港旗兵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦又跟好汉们说：“行了，塞上塞上，哎哎，那个谁，别用我的袜子呀，用老吴的内裤……”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面还有半句，用老吴的内裤</p>
`;
        case 118:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恭喜玩家获取武器</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神器入手了</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好轮回</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子撒过的人怕是比这老外见过的还多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以小强最喜欢刘邦了…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关键时刻还是邦子狠呐</p>
`;
        case 121:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不解气啊</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不得不说混乱写的真好，处处透着细节。杰士邦和杰米，古德拜说起弟弟名字时的昵称都符合欧美人的名字简化习惯。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀一个看看小强会不会黑化</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;号哈哈哈哈哈哈哈哈哈哈哈哈真流氓啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;流氓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小流氓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;换我，我会说：你这个真的是这么大吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;流氓！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;流氓</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈再打就死了哈哈哈哈哈哈哈哈哈哈哈</p>
`;
default:
			return '';
	}
}
        