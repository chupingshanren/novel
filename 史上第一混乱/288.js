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
<p>&nbsp;&nbsp;&nbsp;&nbsp;教父里 就因为桑尼多了句嘴 对面毒枭就判断出柯里昂家族不是一条心 之后老头被刺 老三流放 家族元气大伤</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我信你个鬼，你个贼小伙子坏的很</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空空兒是唐傳奇裡面的人物吧，武功不錯，但也不是頂尖，我記得兩下就給聶隱娘還是誰殺了</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古董值钱就值钱在旧上了，你把战国的古剑磨的锋利无比，还不值钱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;准！</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是说不能算自己吗</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕小鱼：一切尽在掌握之中</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿搬砖掀丫前脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;窝囊</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文物要在发源地才有生命力</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂了，三渣每回都是坐在马桶上闲的没事了才想着更新，他那马桶肯定是个古董！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太炫耀了😂😂</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;据说打火机比火柴更早被发明</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多新鲜啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咋的打火机还能哪个朝代的</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘老六：我没有钱我不要脸
和天斗：我有钱我为所欲为</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不怎么说是神仙呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不怎么说你有神仙的气质呢</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，这也不算高分低能吧，只是思维没有突然转过来[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个高考数学26分网络写手的强人念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美国的万宝路别说了，巨tm难抽，又贵又呛，听说是跟国内工艺不一样</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花就是细节处特生活</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老潘</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是不是就露底了？</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗肚子里存不住二两香油！劳动人民的智慧让人佩服！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提示，里边的人出场很早</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧是哪朝的？元明在他后边呢，他就算现学都没法学这么快吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这会在里面的应该就是秦桧了吧？</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还得是汉奸了解汉奸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人物描写又来了</p>
`;
default:
			return '';
	}
}
        