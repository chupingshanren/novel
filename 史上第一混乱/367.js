$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扔黑板擦把电线砸下来了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你戏真多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神特么黑板擦砸死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈不知为毛有点小期待酱紫</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那竹林七贤可是嗑药的主，管好喽！别把缉毒组招来。</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;单田芳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一对凤翅鎏金镗？那是伍天锡吧，宇文成都就一把</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑海中还是黄海冰的秦叔宝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这数学故意的吧？18+7怎么是26啊 明明24啊</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈老师。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冠希老师</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记不得这许多名字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我太爱轲子了</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北宋的土匪还教你怎么打电话呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现代人的脸丢在秦末了你都。。。得亏是老婆的娘家人，没给你记在史书里。</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年了，股市还是狗一样。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020年啦，股市还是没涨。</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你把老婆支走了 难道不高兴吗？</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是让高僧给渡了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;故事里的玄奘和历史里的玄奘都是谁也打不过</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纣王和姜子牙[fn=33]</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;流落什么江湖啊，报警啊。武警出马，管他十八还是三十六，就算一百零…额，九+2，照样给剿灭了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从这儿再开一个番外篇，续上一部碧血剑也挺好。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一年就走了咋报仇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隋唐按演义里开说，就是一群转世的神仙在打架</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;照理说应该是自三国之后一代不如一代，毕竟逐渐进入末法时代[fn=4]</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项大个加上吕二胖能和他周旋一番，再有俩武松鲁智深，俩邓元觉等天生神力的人辅助，关老二张老三石宝关胜秦明呼延灼这些力气大招法精妙的人斡旋着，张清俩花荣俩庞万春抽冷子放冷枪，还拿不下一个低能儿？急眼了去唐朝拉他二哥回来一个人就搞定。武力不行咱就智取，就群殴，就打感情牌……</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成了高武玄奘……</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻墙被校长抓住了[fn=33]</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好嘛，小强比血流成河还恐怖呢！</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就不能想点好的..</p>
`;
default:
			return '';
	}
}
        