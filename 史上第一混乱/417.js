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
<p>&nbsp;&nbsp;&nbsp;&nbsp;多危险</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老贺是岳飞转世？北魏军，背嵬军？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想象力，天马行空！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小老弟</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪个雌不掌兵？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一辈子12年，这一辈子提前两年决战，12+10=22</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然是雌不掌兵，对待敌人不该斩尽杀绝嘛？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是的，草原物产不丰，人口经不住消耗，只要消灭一部分就足够一个部族一蹶不振了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对付柔然打疼就行了，算日子铁勒和突厥也该起来了，正好让他们火拼去</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赤壁的梗？</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你把槽都吐完了，读者怎么办？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽表示老纸满手p90只会RushB</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真特么真实....</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总感觉每段话都可以吐槽呢</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光头洗头用飘柔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这广告插播得理所当然</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;联合利华</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，飘柔</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是为君者应该考虑的事</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;營長直接升任軍團長…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老看成大力</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木兰不用尚书郎。</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论区这帮人可太有意思了，花木兰说的这些是历朝历代多少明君贤臣追求的，就因为花木兰是个女的，就成了妇人之仁了，也不知道这几个男的读过几段历史</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妇人之仁！匈奴不靠抢他们怎么生存，自古以来游牧民族就跟农耕民族是天敌一般的存在，哪怕你杀光这次所有人，第二年一样组织兵力来抢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全兵2已开始筹拍。。。这次主角是花木兰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有这八国联军你小强就是天下第一，屁都不会都行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是多国部队吗？</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万一要是小强生女儿，项花生儿子怎么分来[fn=17][fn=17][fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凭什么不能是双胞胎？</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求生欲哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比王东来靠谱多了啊小强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看每一句都想吐槽我哪来那么多词，要不你让联军每人想一句我都给你写上</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老贺，你还有女儿呢</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是西红柿炒鸡蛋么……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该把那根儿头盔给老将军搞来</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家这么多年也没用过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强人念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一旦人数富余，那就相当于成人夜用一次性纸尿裤了，确实不需要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;护翼是防侧漏到内裤的，内裤都没有，不要护翼也罢～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强对这个护翼念念不忘啊</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沒有這麼老，剛才才說了，十五歲從軍，當了四十幾年兵</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;志在千里！想想就行了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的文学点全点在食色性上了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;志在千里</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真欠啊，我终于知道我为啥也这样了，有一半是上学的时候第一次看这小说跟小强学的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看有人理他吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强这是在捧哏呐～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这岔打的</p>
`;
        case 92:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;温婉</p>
`;
default:
			return '';
	}
}
        