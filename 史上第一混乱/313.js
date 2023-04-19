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
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫和老鼠既视感</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扯淡，你自己说的有钱以后才开始穿内裤睡觉的，以前都是裸睡的，你会没吹过自然风？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们农村也都有公厕了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈。</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;分别对应：兵败乌江刚穿越到现代，现代成长，和张冰相识又分别</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写的太好了</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不得不赞叹，细节真是处理的好。</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈胜吴广</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗血[fn=33]</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铁岭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你终究是问出这句话了，我还以为你会老老实实写反穿越，没想到呀没想到，你浓眉大眼的张小花也开始问地方了。</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要见到羽哥了…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵人在燕赵之地，现在北京就是燕赵之地的，小花可能根据普通话是以北京方言为主就认为赵人方言跟普通话一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这他喵的是自带翻译器了吧！别问，问就是神仙给的，不解释！[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盖了帽了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么秦末的老大爷会讲普通话？
因为真用秦末的话题那谁也听不懂。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圈起来要考！身体倍儿棒，吃嘛嘛香。</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一股相声味儿</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乃一组特</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;根据后文来看他们并没有不要“不要乱说”</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问题是还没到目标年代就没油了，说明这是刺秦之后的年代，永远也等不到二傻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胡歌版神话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，吐槽的网文经典套路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你写啥我都看。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿，想法很好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒙毅？</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈[fn=26]</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最柔软……[fn=8][fn=8][fn=8]</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了客户刚到小强那儿小强也是手把手教他们穿衣服</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那位大人也不能乱说，加急加急</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骂人话记的可清楚了</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸王餐的霸王啊</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;章邯，挺厉害的，逼得项羽破釜沉舟的是他吧？</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉！瘦弱啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用较少的马拉更多的人，单位时间更快的到达战场。</p>
`;
        case 94:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊啊啊啊啊啊啊啊啊虞姬！虞姬！我要见嫂子！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;激动人心的时刻到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也哭了T﹏T细节写得太好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然泪目</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙，妙，妙不可言。</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒充项羽小舅砸🤪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只能变脸啊，大兄弟。脸变虞姬身体还是小强……</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张冰[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的是你啊小环</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子:脸皮厚和不要脸是两个意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子：你礼貌吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子：？？？</p>
`;
        case 98:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕失望</p>
`;
        case 102:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五斤的喇叭你想累死个谁？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好诗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打南边来了个小环，手里提溜着两斤药丸，打北边来了个张冰，手里拎着两只老鹰.....</p>
`;
        case 104:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打小强这样的富裕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小扫帚，好萌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三五个人不在话下</p>
`;
        case 105:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天啊这才是虞姬啊！人还没出现呢，形象都出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼前老是晃过章子怡的样子，感觉她可以演活虞姬这个角色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王熙凤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一句话写活了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这一句话就把虞姬和张冰给区分开来了！</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子下次见你非把你也摇散架了</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小东西 还挺别致🧐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众骑兵：还没我大[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面一来，我也笑了</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事，丢的是刘邦的脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正丢的是刘邦的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张冰是你吗？张冰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小环是专门服侍虞姬的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小环，是你吗小环？</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正丢的不是我的人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汝妻子吾养之，汝勿虑也</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疯了，正在吃酸辣粉，辣椒、粉丝一起从鼻孔里逃出来了[fn=12]</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么二选一，我就做个必选题</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这请停止你的刘邦行为，我羽哥可干不出这事儿</p>
`;
        case 56:
            return `
            