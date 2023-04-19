$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这口号是真帅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名的有种魔兽世界鱼人的既视感[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emm~</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像有一个系列电影，里面有振远镖局</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是林平之家的镖局吗？</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;--211，我记住你了。找到你我非撑死你不可！2-1-1！！
--（突然站起）谁叫我？！
--现在没事了…[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花绝不会浪费一个搞笑的梗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;⊙ω⊙</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦朝不只有青铜武器么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是啥军纪，连武器都卖，难道想赤膊上阵？</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个我知道，2000年上映的电视剧《突出重围》，第一次军旅题材出现电子战和黑客，基本上成为了后来许多小说的样板。最经典的主角对白是“看看到你是你范英明 英明，还是我简凡 超凡！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;DA师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到陈二狗他兄弟了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特种兵？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;活捉满广志，解放朱日和！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是你，钟跃民</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;称霸朱日和，活捉满广志！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突出重围</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉╯﹏╰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年8月5日留言。特殊的日子。</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也得亏王寅以前是个开大车的，这要是别人天天这样跑长途非得吐血不可</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草🌿，一种植物</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有你的，老王</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想多了，买国旗一般都是好事要用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈太有生活气息了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃我农夫三拳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我王力宏表示不陪你玩儿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我三哥神油包三个月的军粮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我茉莉蜜茶准备再追加投资</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我王霸洗发水这个独家广告位要定了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我今麦郎凉白开追加资金竞标</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我恒大冰泉给10倍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没人说吗？我康师傅广告费给三倍！</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感爆棚，自带音效，还有超现实主义锯齿皮肤特效[fn=27][fn=27]</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这上下五千年的部队都齐活了还说啥现代化呀（滑稽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴用思维强化了</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这几段解说词真的写的好！</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦有锐士，谁与争锋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;风！大风！秦军牛逼</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;运动员进行曲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有志者，事竟成，破釜沉舟，百二秦关终属楚</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;08年奥运会入场式那帮小姑娘可累坏了，真心疼啊。所有国家队伍入场完毕一个多小时呢，她们一直跳过不停。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十一年了，谁还记得这个场面[fn=4]</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒙古人会不高兴的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郭德秀：你最好按着词儿说</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重步兵的确可以刚骑兵，没骑兵主要的问题还在于打赢了不能追击扩大战果，打输了又跑不掉。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刀斧手宋初还没有吧</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神***半个东道主[fn=34]</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;棒！</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是有73个死在异国他乡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国庆阅兵15000人走了两个小时，在没有严格精确步操训练和机械化的古代，20000人的步兵得走老半天了，主席台上的人儿估计晒得不轻…</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呼伦贝尔大海战</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成了蒙古海军司令</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们好烦，又在这吵mz分裂的话题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑不如，射未必，渔猎民族对准头要求更高</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那皇上确实该寻思着杀你了</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又玩坏一个[fn=34]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胡八万一筒呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看这该叫胡什么[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我胡二五饼[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你改成胡百二一不行吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我胡三六九万</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神特么胡左右左哈哈哈哈</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊，骚啊，凶猛啊</p>
`;
default:
			return '';
	}
}
        