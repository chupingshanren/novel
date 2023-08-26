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
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽！有毒！说难产还真就难产呗</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这位也是穿越者</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;葛优: 这是我的台词儿</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刀币嘛，胖子不是在灭国么，让他拉几车来都行，赵和齐好像都是刀。</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;专业不对口啊</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，不知道小花写的这个梆子的性格从哪来的，我是真的能感同身受。我老婆长的还行。化个妆那就算得上漂亮了。但是看她躺在那懒散的样子就是不得劲。她要是忙活起来那就好多了。现在是越来越懒了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这场景怎么看怎么像鬼怪故事之类的；一个人做梦被别人以莫名其妙的方法带到了别的地方。</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖手冰凉 哈哈哈</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老头儿！你引起了爷的好奇心</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时候有这个说法？</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这吕后挺好的呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自己生的时候没注意。。你想怎么个注意法。。</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妇人产子六字诀：睡，忍痛，慢临盆</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;华佗一老头，他要会生孩子2000年前就不需要女人了吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子为啥跟老郎中聊这话题，细思极恐啊</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扁鹊才是妇科圣手吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该找张仲景……</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扁鹊名闻天下。过邯郸，闻贵妇人，即为带下医；过洛阳，闻周人爱老人，即为耳目痹医；来入咸阳，闻秦人爱小儿，即为小儿医，随俗为变。秦太医令李醯自知伎不如扁鹊也，使人刺杀之。至今天下言脉者，由扁鹊也。</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孙思邈没来过 找不见人，话说张仲景明明跟华佗是同时代人。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来你们是不把我孙思邈放在眼里阿</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦异人</p>
`;
        case 98:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉差一根指挥棒。。</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 100:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，这段看的哪有开车的心情啊，包子都那样了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上边一群啥都不懂的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这车开的
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夭兽啦，扁鹊调戏虞姬啦</p>
`;
        case 104:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑哭了好嘛！画面感太强了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心疼我胖哥。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我没啥文化不会形容，就是特么笑歪了</p>
`;
        case 107:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这细节给满分！现在很多写手写生孩子就跟玩儿似的，一看就是自己没生过又不好好体验生活的</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;酒酿酸了就是醋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡鱼刺喝醋其实没有一点作用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时有没有醋啊？</p>
`;
        case 109:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你知道还写的那么详细？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿弥陀佛，施主你经验真丰富，阅历极广呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正好赶上小小花出生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花，你不是去采风了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鬼知道小花经历了什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。真的耶。。</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸭涎化刺就不说了，喝醋啊用馒头噎下去啊也都是医生非常不建议的，去医院才是最佳选择……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实有这个办法。虽然本书是恶搞，但是切记到治病救人，小花还是不会瞎白活。毕竟中医世家！</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喝醋和鴨涎都是偽科學…
不管那一種，接觸到魚刺的時間，都只短短幾秒鐘，完全不足以軟化魚刺--若短短幾秒的接觸就能軟化魚刺，那醋魚早可以整尾嚼下去不用吐刺了</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;憋住气喝三大口水，一直憋着，气上来了就没事了。再就是憋气，我都是捏住鼻子，一直到不打隔就行了。再就是打嗝的时候往下吞空气，死命咽几下，把肚子里的气都带出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在鬼吹灯里看到过一个办法，憋着一口气喝七口水，后来每次打嗝就这样，很管用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打嗝我最有经验，嘴里含口水，站直，弯腰，形成一个直角，仰头，把水咽下去，咕噜一声就不打嗝了，如果没咽出声音就重复做一次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;膈肌痉挛憋气是不管用的，但吃药也很难管用，我爸当时只能吃了药硬靠时间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吓一跳也行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扁鹊：我是！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就好像你真是大夫一样！</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在很少了吧，像书一样，一页一页的，还有专门的夹子，有黄历，背后就是各种笑话，小知识这类的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我小时候喜欢看那种一页写个笑话的日历，也在蹲卫生间的时候翻着看……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也有一段时间是……</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还行 比亮强 没直接失去梦想</p>
`;
default:
			return '';
	}
}
        