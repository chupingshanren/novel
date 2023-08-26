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
<p>&nbsp;&nbsp;&nbsp;&nbsp;羸（lei 3声 磊）弱，每次看到这个词，就像一大群人在那里念成赢弱。</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花真的好会写！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有画面感</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然好贱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明晃晃夺人二目，冷森森要人胆寒，紫薇薇蓝哇哇霞光万道瑞彩千条</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自在极意功</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这叫预判！</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你借我一万个脑子我踏马也想不到是因为小赵拿不动[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里的剑柄应该是剑鞘</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛铁[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空空儿好像是在梁羽生书里出现很多，不过我没看过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古龙风格</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苍云甲虽能抵御天下利器，但对于你的咽喉，一把木剑就够了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不禁想起渊虹断了呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渊虹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么虹啊，大叔最擅长的还是用木剑</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸡皮疙瘩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵白脸是四维生物吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一部电影 叫预见未来 尼古拉斯凯奇主演的 非常好看 里面就有类似的画面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;见闻色霸气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我预判了你的预判！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能活在狭窄四维空间中的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自在极意功</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;见闻色啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这可是剑神！~~~~小荆等啊等的高手~~</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古龍風格…</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像一颗海草海草海草海草海草，浪花里舞蹈。</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尿一道，是真TM有内蒙味[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是小花风格~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上debuff了</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花木兰：洗手了吗就碰我剑鞘？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空空儿刚刚还平端起了一把自己的短剑呢，是双剑吗</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛逼！</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅！</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？？干什么！刚兴奋起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懒驴上磨屎尿多[fn=11]</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花写得好！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写得真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铁掌无敌王小军很好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家快来看啊，张小花说ta自己是男人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这梦挺大啊，专门写了本武侠</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛病...</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈 秃子？</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是来拉……尿尿的吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老何：我也要尿一道[fn=33]</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，七情六欲</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我其实挺好奇的，能不能用现代技术造出更好看的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是有点儿觉悟在身上的，只不过觉悟很歪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老外收集古董不是为了收藏，而是准备让我们再高价收回来而已</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小红丸，落圣丹</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空空儿这时候要是给荆轲磕一个，小赵还好意思出手吗</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说荆轲说过，为了太子丹我能去死，为了你更没问题了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太子丹这人不地道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就你话多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦武阳是小强害死的</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我又迷之泪点了…前面包括老张走了都没哭，但是这个小荆小赵的情谊真的是哎……惦念一个人可以超越轮回穿透生死吗，你是我的好兄弟，上辈子是、死了是、这辈子还是！哪怕两世为人，只有盖聂懂荆轲</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高衙内还是西门庆？[fn=4]</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈小强说话真的很艺术</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无非…不过…写的真好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就决定是你了，许仙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是老李头仙师吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噫嘘兮～我大概知道是谁了。说到混乱，重生。这类非大话西游了。他，该是那狗，那猴，那人，那仙，那佛。又该是那后悔的，执着的，执迷不悟的倔强生灵。也是那被猴子附身的侠客，也是那附身的猴。更是那斧头帮练了七伤拳的帮主至尊宝，或许是至尊玉。秦祥林也说不定吧[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这就很限定了已经，甚至可以通过蛛丝马迹找到名字和传说。毕竟不是爱上妖精[fn=58]和爱上（动词）妖精[fn=10]单纯谈恋爱的传说不多[fn=58]甚至没多少[fn=41]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;路人甲会和妖精谈恋爱？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;名字……这句把人一生说透亮了</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就不信太监死了还会留恋自己的人生</p>
`;
default:
			return '';
	}
}
        