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
<p>&nbsp;&nbsp;&nbsp;&nbsp;脱缰的野狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想想这画面感就笑得停不下来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;PK去[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;野鸡见了流氓</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼上说得对，打仗就是烧钱，如果你一开始就说后勤有人（金少炎）管，士兵就当去演习了可能会好借很多，不过即便如此军权还是一个很敏感的东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;短时间内大规模集兵是很难的，而且每次都会劳民伤财，军队战时和闲时发的工资也完全两码事，而且最难的是后勤，没你想的那么容易</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说赢哥大个邦子才是家人嘛</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实哪怕是原著，梁山好汉战力也没那么无敌的，水浒原著里辽国有阿里奇这种猛将，30回合打崩徐宁，保守估计比林冲还强，金国如果有描写肯定也会有同级别猛将的，不可能说拿不出连斩对面三员大将的猛人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连斩对面三员？你们老金家从古至今算过来，也就杨康有点可能了</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈跟吃饭结账似的</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强子，对方也在阵前狂笑了，你怕不怕</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这棉花团能送你上月球</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好讨厌的感觉啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑补了一下，哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我还会回来的……！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是在他消失的地方还有颗星星闪了一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感太强了！</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像猫和老鼠里汤姆打高尔夫球那集</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一位八十岁的日本老诗人写下一句徘句：我喜欢年长的女性，可惜没有了。一举拿下大奖</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怨不得人家挣钱呢，急成这熊样了也能发现得了商机（褒义）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你强哥这不都给你准备好了吗🙄</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈爱抚</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈好好笑</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按前面的设定锤子在车外就没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也太有画面感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;锤子变锅碗瓢盆了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这开回去锤子不就没了</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿来吧你！</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有枪没有炮，敌人给我们造</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完颜洪烈：坏了，这是惹上丐帮了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双节棍的有吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行了不行了，集体要饭来了！😂😂😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;連棍都沒有？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有使板砖的没？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伍天锡雄阔海定延庆单雄信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑飞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;史上最强乞丐……</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还得是你那个半挂好用吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那等拉到地方别说人了，车皮都没了</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太子丹那会儿你可不是这么说的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次宋江被架空了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个“完了”就很微妙～</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有拿评论的</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，你们是郊游来了[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐僧都来凑热闹了😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到，这段时间育才是放假了吗😂😂😂</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金刚怒目</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个个都快精神分裂了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉有些不对，罗成和吕布能打五六十回合，林冲这么说也能，但是打二胖那会儿林冲等人不是被秒了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邓元觉还好，鲁智深这个和尚当的可不正经</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是真的混乱</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说起来，水浒里也有个锦豹子杨林</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金兀术他哥啊，完颜宗翰</p>
`;
default:
			return '';
	}
}
        