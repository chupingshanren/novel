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
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就好玩了，新《水浒》林冲和张卫健新的《隋唐英雄》里的二哥一个人扮演的</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你儿子是叫单鹰吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最义气 也最落魄的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;山西潞州天堂县八里二贤庄，南七北六一十三省绿林道上坐地分赃总瓢把子单通单雄信，</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从东土大唐来</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;而且还是全国黑道总瓢把子那种。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎～单老爷子刚刚过世了……[fn=19]</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贾家楼四十六友都对不起单雄信</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说来话长？秦琼你亏着心呢，想当初人家单二哥对你掏心掏肺呢</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;程咬金死的时候快80了吧…平行世界，平行世界</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个最喜欢，特别是爱与正义那皮肤</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金翅大鹏</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拍天灵盖儿、扬辣椒面儿、戳脚趾盖儿</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;力量型打法，一劈手麻了，二劈吐血了，三劈兵器断了，这还打个毛线啊。</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你就叫他御弟哥哥呗</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;教摄影的陈老师？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他姓孙我姓陈，下了地府千万莫告我这取经人呐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说当年写的时候有了眼罩门了吧</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我知道的两个江流儿都很牛，一个是唐僧，一个是萨尔。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上午出的家 中午就忘了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么说显得专业</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空是禅宗提出来的，唐僧是法相宗创始人，派别不同，他那会禅宗也没占上风。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听口音，天津的啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说得对，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大师天津人？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别看空了，看多吧[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最接地气的高僧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;**不碍妙有，妙有不碍**</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苍井不空，誓不罢休</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空是禅宗提出来的，唐僧是法相宗创始人，派别不同，他那会禅宗也没占上风。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘛意思？弟弟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666天津人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;*****</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听口音，天津的啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于有个不空的了</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，二师兄也挺好的吧？[fn=26][fn=26]</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孙猴子吃了太上老君的仙丹，王母娘娘的蟠桃，还有镇元子的人参果！来的可能性不大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面不是说孙悟空大闹天宫的时候股市跌到过1500点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;理论上，有神仙就应该有孙悟空啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是有猴哥就好了，可能是因为猴哥和他们不是一个战力级别的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水浒传都出来了，而且天上确实有神仙。为啥猴哥不能出来呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;另一本书当平行世界看吧，连一块时间上有bug</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以之前六爷说了几次孙悟空的事说明都是扯淡呢，根本没猴哥2 333</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隋唐第三梯队守门员，罗八爷罗成</p>
`;
default:
			return '';
	}
}
        