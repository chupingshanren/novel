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
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花放飞自我了，拉都拉不住。。。</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿线车。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就得意吧，要让08年的人知道有这个，别说200，就算2w也大把人去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搞得跟下副本似的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有味了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你一个始发站到终点站的，边走边拼车不好么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正我听到的 永远就差俩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有大座吗？</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔（</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总共才仨月，哪里被你们玩出这么多花来[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈，这脑瓜子是怎么长得，这猝不及防的脑洞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;几乎各个穿回去的皇帝首先就是把活字印刷整出来吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两段写的太好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大宋时代周刊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就没人吐槽吗？</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦哥，这是失策了呀，自己人搞背刺</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也是一个世界啊，可以写书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管啥时代都有炒房团[fn=4][fn=4][fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从这里开始有点放飞了…穿越直接整个朝代都知道了…</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴滴专车和共享单车啊，小花真的牛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不就是共享单车吗…小花真是nb啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;严重怀疑小花也是穿越者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 纯金打造的马车，啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;共享单车，以前都没看出来里面的商机，小花牛批</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了最近的“高铁帮”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，08年的i共享单车，也太早了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;解释一下——根据前文，天道只管2008那轱辘。所以以前的朝代互相穿是不怎么管的。当然这也是我一家之见。反正小花也没说清楚不是？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不就是共享单车吗…小花真是nb啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴滴专车和共享单车啊，小花真的牛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;共享概念这么早就出现了么？
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;共享马屁的概念？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个真的很先进。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最开始的应该属于公交车吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实…这不就是出租车，自驾租车和专车么…</p>
`;
default:
			return '';
	}
}
        