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
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃片蓝药不就行了？</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她心里有我</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强差点因为借羽哥力量后遗症猝死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥，次饼干～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;法拉利的马达装进奥拓里了</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我突然发现一个事，不同的饼干给了不同的人，后面他能分清哪个是哪种能力吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;80年代过来的人啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赛拉俊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;布雷斯塔警长！是你吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;布雷斯塔警长。好像是叫这个吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西瑞还是希曼来着的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;克赛前来拜访</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感！画面感！爱死包子！</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子真可爱</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是！！！就不是！！！</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子真可爱哈哈哈哈，眼睛咕噜咕噜的</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是我弟弟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写活了</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这片饼干救了小强一命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那可是荆轲！~</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲太可爱了</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这片饼干救了秦始皇一命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;聂盖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎哟喂，这下可牛逼了</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那可是剑神，真是不知好歹[fn=48]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎哟喂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵白脸的能力可太有用了，要是别把他的体力也给复制了就更好了</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;石青山也说过这句</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是是是</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，包子多好啊，我是个女人我也爱她</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像这片是最有用的，砸死了了秦舞阳不然嬴哥就危险了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剑神盖聂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都长一个德性，能分出来子饼是谁的能力吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;救了一命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是吗？</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加菲猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给胖子吃说不定祖国就统一了。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;气吞万里如虎</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孢子（大家还记得这词吗？这才是包子的本名）果然是嫉恶如仇眼里容不得沙子的心直口快表里如一的江湖儿女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈你敢得罪包子？</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那岂不美哉[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十分钟太长了</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子可是给五人组做饭吃的，赢哥还能吃饱。。。</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦王扫六盒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴胖子喝饼干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦王扫六合，虎视何雄哉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈始皇帝就是不一样，胃口大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯嗯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥威武</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;气吞万里如虎。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多大嘴啊这是</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈品诺王那里看到这个词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;念了一遍还以为是日语</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🌿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻绝活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有大智慧呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝了</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不是咋的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀手的直觉。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来你知道啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不说但是我知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还抽了抽鼻子…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大智若愚啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对对对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段都没人评论，哈哈哈</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛逼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然杀手观察力就是强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书最大智若愚角色：轲子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;洞察力那是相当的敏锐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子还是厉害啊~</p>
`;
        case 98:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呐，这就叫专业</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是专业</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀手专业素养</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也忍不住了，眼睛进沙子了……</p>
`;
        case 101:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回前面的，暗人不做眀事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强子好男儿，坦坦荡荡，明人不做暗事</p>
`;
        case 103:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻可能只是觉得阴谋怪好玩的</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陕西还有个瓜皮，最先学会的[fn=33]还有个“贼”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句土话倒和川渝的土话“瓜娃子”雷同</p>
`;
        case 106:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金少炎：我真的只是听听而已@</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这变卦也太快了</p>
`;
        case 107:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;菜！hhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都凑到跟前了吧[fn=11]</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽多磊落一条汉子，真的难……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦始皇反应就是快</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都没你打字快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话赶话的，这些人脑子真好使</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴政羽哥揣着明白装糊涂
诗诗揣着糊涂装明白
少炎揣着明白装揣着糊涂装明白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tm笑死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;xswl</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈[fn=26]</p>
`;
default:
			return '';
	}
}
        