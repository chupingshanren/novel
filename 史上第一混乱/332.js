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
<p>&nbsp;&nbsp;&nbsp;&nbsp;看这标题是剑神一剑救命了</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀气和辐射实体化你有一套</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该说“燕使者何事起奏？”</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真细</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃了两碗的粉，就给一碗的钱，你这不是欺负老实人吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你和皇帝们待久了越来越有草菅人命的潜力了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hail hydra</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强你这逻辑就不对了，一命换一命的事，老樊死为荆轲了两回，荆轲才还了一回</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九头蛇万岁！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Hail Hydra!!!</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这鼎还是时迁偷回来的呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不喊这一句不能启动使用密匙。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈[fn=5]</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现实里的话
眼睛：看清楚了。
脑子：想明白了。
腿：走不动道了。
手：艾玛手滑了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看着不乱吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强现在是体验到了最接近刘老六（上帝？啊不 玉帝）的人的感觉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸福啊</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这主要是血小强刚才的大白话太搞了，让秦舞阳没吓着</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们说大白话人家能害怕吗</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结果第三卷写到了结束</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这回咋不是急出一头脚汗了？
嗯——说明还是不够急！</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈心疼胖子</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就跟拿水枪枪毙半小时一个标准吧</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈  一只胖手儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhhhhh哈哈哈哈哈哈哈哈哈嗝哈哈哈</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是:人咧</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦舞阳莫非也能感知杀气，之前秦王没真想弄死他所以不害怕</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Abab</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;右左下上ab</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想当年我也是玩魂斗罗调过30条命的呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;BABA</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你一直都只给胖子玩1代魂斗罗的吗，我还会教他2代调人秘技呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈 这是什么神仙咒语</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;BABA，哈哈，我有30条命了</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑补了张丰毅和赵东来上殿的场景</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不应该嚷嚷地图为什么被砍了一半吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拍下来也是世界名画[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段很有历史的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里不对啊，地图是半截啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完了！两个人都变回去了！😨😨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满眼都是贪婪之色写得好</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这成语接龙用得贼溜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又短了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿！哈！是谁～把你带到我身边～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图穷匕见！</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你那是冷汗吗？你那明明就是冷尿！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，纯棉裤衩我可是记了好久</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史的车轮啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃啥啥不够，干啥啥不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关键时刻掉链子！</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我二傻呢！
我不到啊！</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有说法是，任务是最好生擒，不能的话再杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还想着活怎么能当刺客</p>
`;
default:
			return '';
	}
}
        