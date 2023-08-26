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
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？？？
当我打出？的时候不是我有问题，而是你有问题！</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在给饿打三百块钱，等饿找到宝藏封你做大司马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有哪个皇帝不怕啊，祖龙长生不老，还有其他人什么事儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我 秦始皇 打钱[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说北宋了，2019年还有人给他打钱呢</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强最大的本事就是能让历史上无论枭雄还是豪杰不管性格是奸诈还是豪爽，都可以表现出自己普通人的一面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还差两巴掌呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么突然撒娇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子，抽丫的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;红红火火恍恍惚惚</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好生讽刺</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后来被蒙古人打得，从东北人变成河南人了[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1115年-1234年，119年，也算够本了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国祚绵长</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是国祚吧……阼我记得是台阶……</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女真人崛起和堕落都太快了，不然也许能像蒙古人一样打个大帝国出来</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书第N个祥林嫂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;海伦石化</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;祥林术</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看这委屈样儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后金兀术死在和福将牛皋(类似程咬金) 身下了，一个大笑而死一个生气而死。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小时候看说岳全传觉得金兀术就天天被岳飞吊着打，谁知道小花的书里也这么惨</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蔡明的语调：这是为什么呢？</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈这句话大个儿教的</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是看过肖申克的救赎。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;论持久战</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肖申克的救赎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是越狱里的场景</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你和包子一个从起点站挖，一个从终点站挖</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈菜贩子风评被害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不听不听，王八念经</p>
`;
        case 87:
            return `
            `;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有颜</p>
`;
        case 88:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这批秦军一回去，统一六国的进度被大大提前了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，汤隆是钢铁侠吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个半月更新到第六代？而且前面的还持续量产？咋不给累死</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是为难人嘛😄，完（还有颜）将军怎么可能听说过原子弹核武器？！</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还得意上了[fn=14]</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强这里是在咋呼金兀术，点子表是具体某人的，其实没法替换</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段是填之前的坑吗</p>
`;
default:
			return '';
	}
}
        