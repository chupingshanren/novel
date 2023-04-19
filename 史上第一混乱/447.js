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
<p>&nbsp;&nbsp;&nbsp;&nbsp;长大了不得恨死你了起的什么破名字这是！</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是轲子，第一个想到的是包子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;母子母子不是母女</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;师师也有糊涂的时候[fn=33]</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿软了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是你推的你为啥要扶？</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你老婆生孩子，稳婆和侍女为什么要端着盆鱼</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这长大后吹牛皮就有的说了，我出生在公元前223年，给我接生的是扁鹊和吕雉，抱我的是李师师西楚霸王还有汉高祖。[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿，我出生9斤8两，自从我上高中之后我妈没事就给我两巴掌说是泄愤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子真牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八斤能顺产下来包子是真的🐮哇</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和拉裤子了有异曲同工之妙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hah</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睁眼也看不到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把祖龙怀里当温床，小家伙可以的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚出生的孩子挣不了眼吧，就算能睁开也看不了东西。得过几天才会有趋光感。</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玩玩[fn=4]</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈太可爱啦</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写这个的时候估计张小花没结婚吧，结婚了也肯定没孩子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑就扯淡了，刚出生就算能睁眼也绝对不会笑，一个月都不会，最多睡觉中能笑一下，醒着都不会笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然是男人。。。👶🏻婴儿不睁眼，睁眼也看不着哇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚生下来的不会笑，更不会呵呵笑</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧项全！[fn=8]</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧万皇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都别说了，萧楚生，笑出声</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕后挺好的嘿</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不…叫秦汉？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。楼上是魔鬼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那还真幸亏不是在大清生的</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈楚生:？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑出声</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然包子是初次生孩子，就叫他萧初生吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要叫楚生，就不能姓萧；叫子滕，不能姓杜；叫云涛，不能姓毕……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈楚生:MMP</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朝秦暮楚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧育才！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在不是复姓取四字儿的多了去了……也不知道心里怎么想的？</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼泪笑出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;康熙快来了，清迟早也得加；隋唐好汉里还有保隋派，隋也不能落；竹林七贤和王羲之的晋不能忘吧；完将军（还有颜将军）虽然不是客户，但点子表人口表的事人家也出力了，金也要算一个；荆轲不是一直觉得对不起太子丹吗，趁这机会给他把燕加上就扯平了；木兰是北魏的后面没准要变成北齐或北周；俞伯牙毛遂这些先秦人再加上……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以。。。萧·秦汉楚·魏蜀吴·唐宋元明·周·替天行道？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强你不厚道，把梁山的兄弟们忘了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来总结一下*，萧·秦汉楚·唐宋元明周·魏蜀吴</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好名字！[fn=8]</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无论刷多少遍到这儿都还是忍不住笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛批</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你儿子出生在秦朝，到2022年是多少岁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧不悔呗。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应有bgm</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;湘玉附体</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杨不悔表示很赞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按照2022年 应该叫 萧战！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧雄不好么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;广东人：嗯？小扑街？</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小扑街？？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杨不悔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饿错咧，饿真滴错咧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧·祥林</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;涨知识了，等媳妇生了，想不好名字我不张嘴</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧扑街</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧强 Jr.[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大壮。。。那会儿崔精还没学会下棋吧</p>
`;
default:
			return '';
	}
}
        