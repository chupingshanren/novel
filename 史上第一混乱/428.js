$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人界轴以2008年为界限，为什么不把他们送到2007年呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李师师历史任务已经完成，为啥不来现代社会呢？</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果时间观一致的话，几个故事下来，天庭就没闲下来过，笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面被剧透了刘老六的身份，然后一直看到现在也没管……恍惚中我感觉我都快忘了……</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tui</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tui</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抓紧换个手机吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蓝屏手机yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂😂😂😂😂</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把师师带回现代不就行了？或者未来一个月什么的？金少炎不就是未来来的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留名</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大师啊，这都看出来了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应有吐槽</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个数其实过少了，光是宋金和平交班就能多活数百万人</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有线管道的话几个交换机的事，反正用哪家系统就让哪家来排线</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是万？</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对头，是牛就比牛粪强，没毛病哦✌️</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;几个唐朝公主？一群小胖妞？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你把公主当交际花用吗</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个修长城前文呼应可以的</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是项羽那五万返乡老兵吗</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一会一旁的太监过来了：陛下该更新了 朝堂上的大人们都在催更呢</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实项羽应该也没杀子婴他们，毕竟是胖子的血脉，毕竟项羽这回连二十万秦军都没坑杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道不是因为大个的*****楚军？</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李世民在现代一年全用来看网文了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=5][fn=5][fn=5]</p>
`;
        case 88:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没人吐槽，是不是之前吐槽的被清了？</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九阴白骨爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不是么，她最喜欢在住的地方摆放骷髅头，脑洞都大到梅超风那了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;科普一下，08年梅超风是形容头发乱七八糟。的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么鬼形容。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，每次这里都笑喷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个形容的好</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我11年的时候就想说这个了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Facebook</p>
`;
default:
			return '';
	}
}
        