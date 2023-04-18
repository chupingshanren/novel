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
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个问号就很灵性</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽卧槽卧槽！！！！！</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天道何在？仅轮回报应而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以为是韩信</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么早就给下一本新书埋下伏笔了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后来有本书真掉下来了！</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王垃圾自己选的选的后世，怪谁？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈的，到底谁才是垃圾</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么感觉这尿要那个绿毛喝呢[fn=51]</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷？明抢的啊</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把那些小混混全收拾了，然后让老头去育才看大门养老不行？非要浪费诱惑草让他取回记忆？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妇人之仁！自己选的+天道轮回，还他妈被旁人干涉，如果我是天道就一个雷劈死项羽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽也怕草有副作用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好降智啊！</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强混的时候使得一手好板砖，拍遍大街小巷无敌手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强子全身的每一个毛孔都充满了混混的气质，（看着眼熟不？资本论的调调 ）[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强也是混混界中前辈了</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面让你种的跟大白菜一样</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;补上：我骂道：“你少他妈蒙我，这药能治病吗？难道是嫪毐（史记里着名的大JJ）这辈子举而不坚了？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嫪lao毐ai，赢胖子的野爹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个大jj好像是谁的面首来着</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是地址让我有了种这是小花在推书的感觉</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真不是现在种的很多，侍弄草坪是因为他要住进去了，才打理好的，应该是和天庭合作关系确立之后在种的，有供货商了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;副作用就是一会好一会坏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要剧透，这老小子种了一草地的诱惑草</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妇人之仁啊各位！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;flag已立</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说不拿就不拿，那我垃圾王岂不是很没面子？</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有画面感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捡垃圾的出现多少次了</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;韩信：过不去了是么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;韩信：“我一辈子搞了多少事情，你们怎么就记得我钻裤裆！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你俩是不是…过分了啊喂！替韩信生一会儿气</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦一脸问号[fn=31]</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;劳资跟你打听个人</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王垃圾？！😂</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典x粉眼中先有x书后有天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;修真群？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;修聊粉丝是不是走火入魔了啊?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这时候就出现望天了？松鼠知道吗？
</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说圾，不说吧</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这世界没有非黑即白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段人物描写满分</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小流氓小混混不就是这样吗？欺负弱小还自以为是的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这些混混才是反派吧，讨人厌的很！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太欺负人了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽让人火大</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虞姬就不是那什么冰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名就变成前世，今世的人很无辜啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给她做甚，你待了几个月走人然后留她一人在这咋整</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沿用前文，没有执念，才会是这个样子，自己都摒弃前世的自己，才会活出这个样子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王安石吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个“有人”和“只好”真是神来之笔</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桌子-1HP</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;混混“危！”</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈的这不得项式一拳伺候</p>
`;
default:
			return '';
	}
}
        