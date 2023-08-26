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
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实要搁历史上金国干的那些破事，赵匡胤哪怕把完颜兀术活剐了然后挂在墙头三天，再剁碎做包子喂狗都不算过分</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老朱也是穿越人士嘛，他想叫克格勃或者海豹突击队你也没辙啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神机营？神机营是明成祖朱棣建的吧？这里应该是五军营，三千营是蒙古骑兵为骨干建立的</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小金金感觉到了无比的委屈 差点儿就哭出了声</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大话西游都看了，在现代这一年皇帝们可真充实</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🌿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话没毛病！</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老朱在，谁敢叫八八式</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，留下心理阴影了</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这对话绝了</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胡121:为了不让陛下猜忌，我改名叫胡左右左了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人已经卦了，为了纪念他所以都喊一二一[fn=10]</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明清君主专政措施多了，皇帝不勤政不行啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;据说朱元璋就给全国官员放三天假，除夕，冬至还有他老人家的生日——一年就休息三天啊！这可比996要狠多了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱元璋是历史上最勤政的皇帝了吧，天天凌晨起来忙到深夜，一直忙到死也没怎么休息……</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟我走一趟！</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，脑袋大脖子粗，不是皇帝是伙夫，伙夫皇帝你都当</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要扒皮了</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不小强你给你老丈人找个活干？</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈。经济头脑[fn=26]</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱棣：收到。</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姓啥不好非姓“完”这下玩完了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;悲哀啊（笑）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;觉悟很高嘛[fn=4]</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纛dào，古代军队里的大旗。 　
古代用毛羽做的舞具或帝王车舆上的饰物。</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这乱劲儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一帮皇帝人臣在破面包车里打架，真想扣开小花脑袋看看怎么长得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老赵好歹也是大天位的，完颜小子最多中天位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得亏是混乱，碰上天子传奇那个赵匡胤金兀术人就么了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这锁好久不见嘿</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;住手，不要再打了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么大一车面包人，就问你怕不怕！</p>
`;
default:
			return '';
	}
}
        