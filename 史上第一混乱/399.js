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
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章居然没人，抢个第一</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂事儿🤣🤣🤣</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿！巧了么这不是[fn=8]</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么你这么熟练啊？</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想想之后金营的惨状，被俘虏在这是好事

</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;粘罕其实比金兀术大，能力也比金兀术强，这可是做到金国国相的人物，小花对这一段历史了解的少</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高级货啊</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥我这都是切糕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新疆幅员辽阔，地广人稀，所以制作望远镜的技术很成熟[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新疆人买的这个是梗吗</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太可怜了  泪目</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点金门炮战的意思了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈好惨的小战士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦朝还真沒苹果，林擒是汉武时候的事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下次买点樱桃草莓啥的，吃着数了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哀兵必胜</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也不怕伤到包子和李师师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;炊事营才应该是重点目标</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金兀术：我们宣布对苹果门事件负责</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今年世界杯在卡塔尔举行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金兀术被围的王八蛋似的往哪后撤？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又不是绑架事件人肉炸弹，卡塔尔半岛电视台一般不收</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;海星？</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;枪不算太难，子弹才是问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛逼。</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹老板和袁绍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金门炮战</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神机营和洪武大炮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西厂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是红衣将军</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陷阵营类的特种兵吧</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这名字起的</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也靠……</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;火炮这东西在元朝就有了，忽必烈能打下中原大城，只要原因就是有火炮了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;元末时期就有了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;洪武大炮嘛，就是朱元璋时期开造的所以叫洪武炮</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，洒掉洒掉</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就不怕把你媳妇砸了</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老李！你开炮啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也不怕把包子打成烧卖。</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就是有八十门了，皇帝的话得打五折。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老朱这人行，能处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为工艺原因，那会儿都是动辄几千斤的青铜炮，完全就是拿钱堆起来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱元璋还是够兄弟啊</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然有种投掷哥布林的感觉</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;钱学森：手上没剑和有剑不用，两码事！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;另一方也没有啊[fn=33]</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;核武器就算了吧，国外买些机枪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意大利炮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冠一怒为包子🤣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你媳妇不要啦？！</p>
`;
default:
			return '';
	}
}
        