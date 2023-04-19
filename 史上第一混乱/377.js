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
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是像，在当时就是罕见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。你现在应该能找见秦桧。。。</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太原啊太原啊我的故乡</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;够离谱的 强子心这么大吗</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爽文女主包子  金兀术算个屁啊。。。。。这书里有一个算一个，包子就是王道霸道孔孟之道。动一下上下五千年的牛逼人物都来帮忙</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话，小强要能事事周全料敌先机，那他就不是小强了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面也有评论说了 ，确实 小强太不当一回事了 膨胀了 带着老婆入敌营</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈，跑的比兔子还快</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邢倩丽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;行千里是谁？</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;屁股
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肉厚的地方……嗯，心领神会</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;代入感很强，我已经飘起来了</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比起郝仁的北斗星还是差点意思</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金兀术是傻了，他是万万没想到啊，惹了本书最不能惹的人——你就说绑了小强，都没后面那些事儿</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点强行降智了  强子见过的死人怎么也得好几千了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能因为潜意识里没把这些古代的人当真人看，而且小强怎么说也是神仙预备役，最坏的情况也能求救刘老六吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话这种行为真的很找死，不过搞笑文就当有开漫画无敌吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说真这种行为很来气的，不过搁小强包子身上只好无奈的笑笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然是两口子，没毛病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叉挑油锅[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叉出去！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈哈</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;樊哙市井徒，萧何刀笔吏</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女真人又不是日本人，小强太有意思了[fn=5]</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么滴干活！</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有人算过李元霸一秒能杀40人，五分钟杀个千八百，其他人不敢上前的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李元霸一下午能把这80万人全锤死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李元霸也得拿着两个大锤骑着一匹宝驹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隋唐演义里的李元霸杀人都是数十万记的</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金人：我们是草原上的，说不来东洋话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你特么内心戏太多了吧</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女真从兴起到灭亡也没有过80万军队</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史上女真人全族好像也没八万</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你刚出来混说这话行，你都混成几十万军队了还这么混啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出来混说话要算话。。。吴用字镇宇吧[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全民皆兵吧</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金国巅峰期真的是当时世界第一强军。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前几天我还在看绍宋，窜书了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女真顶峰期超级能打。我给诸位举几个例子：护步达岗之战两万金军打崩十几万精锐辽军；而这支辽军的残兵在燕京之战大败宋朝最能打的西军；此前河湟开边的西军之压着西夏打；而西夏日常揍吐蕃各部和西域回鹘玩儿；吐蕃人没事儿就去印度劫掠，回鹘对更西边的势力也是多有胜迹……而以上这些战绩是发生在同一时代的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑抽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽来了不一定不行</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该说是被银行催债的更合适</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈我们对贷款户很友好的</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佟媛看来是佟国维的后代</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧啊</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神特么京片子……话说黄金是超新星爆炸的产物</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;货币天然是金银哪！</p>
`;
default:
			return '';
	}
}
        