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
<p>&nbsp;&nbsp;&nbsp;&nbsp;北魏和刘宋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强，你金杯呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这他喵到唐朝了吧，打匈奴了</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看人家这悟性。服了[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人的天性不是封建礼教能磨灭的</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画风不对啊。我以为；
木兰：大恩大德无以为报。
霸王：这是你嫂子。
木兰：来生再续缘，与你共缠绵。
小强：带大个儿过来的可是我啊！</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话你羽哥可不爱听</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽你刚打败能不能消停的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(全新语种)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还用着蒙古语[fn=33]</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴三桂啊，他不是二斤多还能用筷子夹芝麻么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花的比方，总是脑洞大开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这有啥难的？再叫两个妹子不就OK了？又不是给不起台费！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青山不改、绿水长流，咱们改日再来，再见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像这种喝酒的情况，我们这叫打掰脚老虎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，这句真的太生活了，不能再喝了，开酒不喝车</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿提拉？你们说的是那个坏文明大王吗？萌新只抽到了6个，唉，萌新运气太差了(∗❛ั∀❛ั∗)✧*。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;FGO阿提拉真难抽</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花木兰？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万一是赏善罚恶使呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;法外狂徒张三</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就张三李四 这四个字 退钱 四个字的钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你还要我怎样。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多敷衍的名字啊…多路人甲的角色啊…多懒得想的小花啊[fn=33]</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟匈奴是曾经对汉人造成威胁最大的外族</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岳飞把女真都叫匈奴，这都成外族入侵的代称了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柔然和匈奴其实差别很大，匈奴是n系，柔然是c系，柔然是从鲜卑里分化出来的</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在大润发杀了十年的鱼，我的心早已和我的刀一样冷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈 杀鸡师傅 小花生活里形形色色见的真多</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还真是羽哥风格[fn=14]</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥也皮了一回哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀，你真残忍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个乐呵呵……</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龙城飞将是卫青，中石没镞飞将军是李广</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花木兰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李白</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽是不是蹭荆轲的半导体，听多了相声？</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥死里逃生后性格也开朗了很多啊，变得幽默了</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱国土匪…</p>
`;
        case 58:
            return `
            `;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那叫器重~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花的吐槽太有趣了</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有包子丑呢？</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么多年等你就这么让你一嗓子秃噜出去了</p>
`;
default:
			return '';
	}
}
        