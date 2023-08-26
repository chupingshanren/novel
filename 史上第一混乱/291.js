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
<p>&nbsp;&nbsp;&nbsp;&nbsp;满城尽带黄金甲</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梦想成真[fn=28]</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小BUG，两组都有张清。</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;闻出来了，吃的韭菜馅饺子[fn=44]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;严肃不过三秒就得变逗比</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不喜欢战争，但也绝不惧怕战争</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;倒霉虎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，300万像素的手机怎么不用个企鹅群，统一发号施令呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老虎老倒霉蛋了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老虎也是真够义气</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;字怎么突然变大了</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这痛快劲儿🤣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是人才啊…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=26]把钱收了，就不办事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当下就把钱收了哈哈哈哈哈哈哈哈哈</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伙同</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一个“伙同”就让人笑个不停。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;林教头，好汉们现在应该是公开用梁山俱乐部的身份与人交集了</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎你说吴三桂有没有可能是吴用后人</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我小时候看到过一篇小说，主角就是收钱不办事，等尘埃落定了再把钱还给对方顺便教育一顿……当时看了我觉得可太有智慧了！就把人家这桥段用在我的作文里了，写我爸。
就是功力不够，我光写我爸收人东西不办事了，没写后面那段最重要的，结果我爸看了我写的作文以后气得要揍我[fn=61]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;收钱不办事。。</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还得是你吕布啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二胖:吾尚有余勇可贾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;修车铺，我一人镇守足以!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们不许过，我的修车摊就是虎牢关</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;顺手打发了哈哈哈哈哈吕布nb</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老炮还是干不过吕布啊[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tm吕布万人敌。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈二胖干得漂亮！</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;整个晋西北打成了一锅粥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人  民  战  争</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四海之内皆兄弟</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意思就是打小强够用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前从来没写过张冰的亮点，你说她漂亮吧我们看小说也看不到，所以一直不喜欢。写到这里张冰总算是有亮点了</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也觉得她此刻最可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧峰表示亦有同感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，张冰也实在是……关系到项羽就放不开，反倒起了反作用，也是命吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=4]</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是，这当年都经历了些什么啊</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;领导最后定调</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段，才是好汉的味儿</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，太出戏了，掏出手机看一看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对表</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岳飞也吃了药了？</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人情啊 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是人精…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇，每次看到这都起鸡皮疙瘩</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵画家:用得着时喊人家宋徽宗，用不着就叫赵画家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞅瞅你找这人[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋徽宗过一阵就被你坑的滴溜乱转了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昏德公……你还不如对当时的大大保证</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花最擅长在只最后加一句话，就瞬间搞笑😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对岳飞来说这可能算是打奸除恶剿土匪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑飞</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈小心思笑死</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样的老师</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打黑除恶</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张参谋长，把孔团长枪下了，关起来，等咱们回来再说</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李云龙，你敢，你动老子一下试试，李云龙，李云龙，老子跟你没完</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;徒弟，团长老子跟你没完</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李云龙！老子跟你没完</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周瑜亮飞脚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚看到这段的时候我想象过画面</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜老师写活了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李云龙和赵刚的感觉</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他俩算是从这开始的吧</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一巴掌不就把爱情打来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上辈子小乔，这辈子木兰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘟嘟还是个受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的是一见钟情哇～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一见钟情</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;行动刚开始就已经结束了哈哈哈这个笑死我了</p>
`;
default:
			return '';
	}
}
        