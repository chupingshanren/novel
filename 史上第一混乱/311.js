$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要打去练舞室打</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦哟，球状闪电呀，把小强离子化</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;旧书不厌百回读</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真招笑</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的重点始终在：我轲子呢？</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当初看到这的时候真的是要笑死我</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;勾兑 瞧瞧这话里的沙子量</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按照字面意思翻译是……齐天大圣？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这……太上老君啊？</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特异分歧点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;钓鱼执法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是说刺秦不成功，就不用抹杀，成功就抹杀所有人?天道既然要惩罚，为什么还给个选择?</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我选择成为猩猩 (╬^ω^)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人理冻结，我选仙秦</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有你，育才强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抹杀了小强，哪里还有新天道?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么看不懂这一段?</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;①掌管这个的前提是神，已知小强（至少现在）不是神。②又已知，和天斗被贬早于刘老六找到小强的时间点（论据来源于空空儿）。③本段原文“按照天道指示新的天官已经产生，那就是你…”，即小强早就是掌管人界柱的神。④本段原文“新天官上任的第一天，天道会归于平静”。。综上，哪位大神能给圆一圆？</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王负剑！王福建😏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万一荆轲带的是方天画戟怎么办</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33]</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要唠这个那我可不困了哈</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;道哥？道哥？！妮马雷个鼻啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;道哥可还行</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有神的位格，但是没有神的力量</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古一法师拉出一条线“这就是人界轴”</p>
`;
        case 94:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，想起来二人一猿表情包</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各种夸张的表情和恶搞，绝对史上第一爆笑动画</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，这书要是动画化了该多好，那得多逗</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：我谢谢你八辈儿祖宗</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姜子牙啊</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段经历才是最宝贵的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不扯呢么，你丫要不碰倒人界轴，小强吃饱了撑的回古代。这俩神仙真TM会推卸责任偷换概念！每次看到这儿都觉得刘老六和何天窦太操蛋了，就应该让道哥劈丫的！</p>
`;
        case 98:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者强行给自己降了难度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;解释不通只能用平行世界来解释了[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是说历史变成平行世界了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比特异点还省事啊</p>
`;
        case 102:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去，何老鬼没事能蹭孟婆汤喝，产生抗体，这又神不知鬼不觉的被喝掉，孟婆您老人家真是神鬼莫测。难道是道哥小姘？否则何老鬼怎能如此轻而易举蹭汤喝[fn=10]</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有什么不开心的事说出来让大家开心一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;聊点不高兴的事，让我们高兴高兴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不明真相的喝茶吃瓜子群众</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多米诺骨牌……话说你们这么大个天庭就不能给它做点保护措施么？旁边加个护栏玻璃什么的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千不该万不该，孩子不该叫……[fn=31]</p>
`;
        case 107:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;官方吐槽最为致命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛B，招苍😂😂蝇</p>
`;
        case 111:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以考虑做香水了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这得多香啊，怕不是全小区整晚做前世的梦，哦，小区就两户</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这汤是咸还是淡啊，我尝尝，你这汤是咸还是淡啊，我尝尝，你这汤是咸还是淡啊，我尝尝。。。。。。。。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，蹭汤喝</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说，猪八戒被贬下凡是不是没喝孟婆汤？</p>
`;
        case 114:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说我一个.....怎么就.......谦虚.....高明吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;管他那么多，上天安排的最大嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上天安排的最大嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上天安排的最大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天道已经研究决定了，就……</p>
`;
        case 115:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也不是谦虚，当时就念了一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鹿鼎记，下边是大话西游的梗</p>
`;
        case 116:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果拍成电视剧的话，小强只能周星驰来演</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至尊宝：上天安排你仲唔大晒咩家下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上天安排的最大嘛。小花也是周星驰的粉丝啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 119:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高潮部分要来了，这书如果拍成网剧或者动漫，这里就是第二季的转折</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是十五年前的书？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这脑洞大到没边了，太厉害了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花真牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(ಡωಡ)hiahiahia 就好这口</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸好轲子死了</p>
`;
default:
			return '';
	}
}
        