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
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都哪跟哪啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一吕二赵三典韦，四关五马六张飞。可见马超只比张飞高那么一丁丁点儿。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;敌羞，吾去脱他衣！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知衣服越少防御越高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后这转折，，，啧啧[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;许褚那是本来就没穿就打的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;许褚裸衣斗马超，张飞挑灯战马超，不是一个事吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张飞和许褚搞混了[fn=1]三国杀玩过没？裸衣那可是许褚的技能啊！
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实应该是许褚吧</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逢戏说千年史必定有人催书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脱掉的不仅仅是铠甲，还有节操</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你倒是写啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等戏说千年史等了十年了……</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;：亨！文盲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这些人文化程度不高，三国都没读过[fn=23]</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肉弹冲击</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……这章还活着真不容易，只能说十二年前那是真什么都敢往上写啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肉蛋</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里少了个“万”吧？</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有马镫小强是怎么立起来的[fn=31]</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;组织度打没就行</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饿已经来咧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你已经来了</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呸</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猥琐得光明磊落</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强社滴对</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥也是个专业捧哏</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满脑子秦时的章邯qaq</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你若倒戈卸甲，以礼来降，仍不失疯猴之位，国安民乐，岂不美哉？</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;10万对3万，优势在我</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段话是不是应该用陕西话念出来[fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;章邯带的不是刑徒军吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样的盛世，居然让赢胖子连西红柿鸡蛋面都吃不上[fn=11]</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲得真不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艾欧尼亚 昂扬不灭！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这动员力。。</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大风 大风 大风</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实很有煽动性</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧不该</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前贵族，平民结婚处女必须先给贵族</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;勇敢的心</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句好像在刀锋1937里的听过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你上回说的是被人围的跟王八蛋似的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;身后就是莫斯科！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥：“嗯？”</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是陈佩斯的台词</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是你小子把秦军引到这里来的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是陈佩斯，谁是朱时茂？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是你小子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈有陈佩斯的声音了</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去，那时候就有动感光波了？和南妹儿的动感光波是一回事吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真挑精英</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给我八百城管，我能踏平宇超联……额……串戏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管看多少次这段都能笑昏我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈～实力黑[fn=4]</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好久没见小强薅头发了</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;枪毙哑巴，他是怎么想的</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说，我一个只知道在家抽烟的流啊就氓怎么就成高级将领了呢，天道说已经决定了……</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一笑妙啊，以柔制刚</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;场面一度十分尴尬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给对面整尴尬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑场了</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史上北齐后主就在动员讲话的时候笑过，结果军队士气直接崩了，不过小强的情况和他不一样，他那个是士兵一看，我们还给他卖命呢他在这笑，小强这是天降超级神将视几十万敌军如无物</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是兵形势的代表</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里还说黄金甲呢，下一章就没了[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽跟开高达似的</p>
`;
default:
			return '';
	}
}
        