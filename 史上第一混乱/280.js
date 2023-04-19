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
<p>&nbsp;&nbsp;&nbsp;&nbsp;到了中国，可以不看三大殿，不可不看辜鸿铭！</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给我哭[fn=12][fn=12][fn=12]</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呼叫费三口，快把自动铅拿过来对着这货狠狠的按几下，丫知道的太多了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不就是嘛 但是啊兄弟 你知道的太多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一不小心真相了。</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;韩国现在可是自大的不得了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竟然没说我们偷他们学生</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大概九十年代开始，电影院没那么吃香了，然后很多单位会发电影票。那个时候，我爸单位发电影票，我去看一次。我妈单位发电影票，我去看一次。完了，有时候还得带我爸同事的女儿去看一次，这类电影往往学校还要组织看一次，那画面简直不要太美。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;07年，我才拔岁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈 我同事 每部电影都得看三四遍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来是很感人的，又被最后这一句给逗笑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;07年，我才上五年级</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;07年，我才20岁！还在读大学😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;07年，我还是个小伙子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点儿郑渊洁的感觉*2（我也说不上来是什么感觉，反正就是有点儿像）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纪录片[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男主连脸都不露的也能算言情？</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实是这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是想拍个纪录片</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏联也挺多厉害的司机，比如罗科索夫斯基[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为修摩托的人感觉你不配让他出手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那强调一下你也打不过扫地的，木匠，力工，瓦匠？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大山倍达的师弟还是个画漫画的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你被司机打败了</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《小强》不应该归属于动物世界么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前半辈子就是古惑仔无聊版，后半辈子就是修真剧都市阉割版……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越穿、都市、异能、幻想、喜剧、剧情、伦理、惊悚、（修）仙（武）侠、历史、教育、记录片</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还用想？肯定是喜剧啊。</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;付费内容</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以放电脑里。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不让放可以私下给我啊，放心我是正人君子，不会出卖你的</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全国最好的肛肠科在四川，然后全国最好的肠胃科在育才。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这活应该是李东垣的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是到了后来 只要一号脉就能开出一副胃药来 
再后来 只要打眼一瞧 就能开出一副胃药来
再后来 只要老远远的停到脚步声就能开出一副胃药来
再后来 只要一提 都不用本人亲自来 就能开出一副胃药来
再后来 只要掐指一算就会开出一副胃药来
最后 灵感一闪开出一副胃药来</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把门焊死[fn=31]</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也许只是你不知道而已</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大红灯笼高高挂</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应个景儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;靖康之耻多少儿女泪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这结局想起了老三国的貂蝉，“远离了富贵烦嚣地，告别了龙争虎斗门，师师以随着清风去，化为了一缕白云”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两天看的人不少啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是真人纪录片吧</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，可不是嘛。前面小强就吐槽过，那么多王公贵族巴巴的追求师师，到就没有一个真的想要救她出火坑，说到底就是拿她当粉头取乐罢了。</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来留白大字加导演名字是金少炎传统技能了🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一年活的比前世一辈子都值得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞬间泪奔啊
这一生[fn=12]</p>
`;
default:
			return '';
	}
}
        