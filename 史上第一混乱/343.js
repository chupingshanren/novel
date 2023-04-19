$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，五哥好吐槽</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有五口</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少一个啊</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先撑死</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欢乐文就别抠历史细节了。就像舰娘，本子船一样是我老婆，但也不妨碍我清楚认识真实历史里小日本是些什么货色。梁山这儿也是，虽然实际上绝大多数都是十恶不赦，但不妨碍这书里看个乐呵。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实梁山本质上就是一群土匪，那么多军队和将领，人吃马嚼的从哪里来？他们又不事生产，只能去抢，被他们搞得家破人亡，死在他们手里的良善百姓很多的。不过我还是喜欢小花书里的梁山</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这文里的水浒是童话版的，水浒求生记里的水浒就彻底分裂了，我也觉得那本书里更实际一点，三娘和王矮虎压根是仇人，全是宋江瞎搅和</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都是宋江硬拉的媒，为了维稳，把扈三娘当维稳工具了，不然王英不说配不配得上三娘，首先跟仇人结婚算什么事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然啊</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿，小黑胖子！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花对胖子情有独钟</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你并没有看错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看成了有我没有我没……</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈期期艾艾的小强</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们的纪律就是有组织无纪律</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你个小黑胖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说谁不三不四呢？</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;→_→</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阮小二天罡排名其实比张顺高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈这些人太尊重女性了</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和尚骂人秃驴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑驴找驴</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少林足球？馒头店老板娘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就叫什么什么千虑，必有什么什么…</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没人吐槽这个“你死我活”吗[fn=33]</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕老婆的才是"好"汉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这可太怕了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都是小花生活的缩影啊 贼形象</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那也不是老婆，相当于外室吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精辟</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大师兄说的对啊</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家看看自己情况能排什么位置？我起个头，我家里地位略低于老婆，但应该比张顺强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那杨雄应该当大哥，不光杀了还刨腹剜心呢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段放现在不得有人魔怔了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;母胎solo至今，到梁山能当个天罡吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太精辟了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好有道理啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我排250</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇，看来我去排个110，120不成问题</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈你们太闹了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恩，说的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，说的有理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，说的有理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，说得有理。（不复读）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，说的有理</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲸鱼海豚都是哺乳类[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲸鱼也是哺乳类动物——</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;***</p>
`;
default:
			return '';
	}
}
        