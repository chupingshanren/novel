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
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年那可是兴百姓苦亡百姓苦啊</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;南唐后主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木匠皇帝不算，一个临死前能跟自己弟弟说别杀魏忠贤的人怎么看都不昏庸。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫门天子朱祁镇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隋炀帝和纣王可不算，他们两个都算暴君可不是昏君，为自己的王朝还是有贡献的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隋炀帝应该不算可劲霍霍的，毕竟他修的大运河确实造福一方了，只是太着急了（个人观点不喜勿喷）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李后主！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱厚照！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦始皇也算是第一类的吧</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颠沛流离的生活状态，以及与众不同的人生定位多半给予他们这类人很多灵感～～往小了比如，周杰伦年轻时各种创作、娶妻生女变奶茶伦后，就“哥的胸肌给你靠”这……想一把抢下他的奶茶泼他脸上让他振作点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈后主是不是南唐后主之误啊？</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈好贱</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈嗝！皇帝用金锄头种地，皇后娘娘天天烙葱花油饼！真正有钱人的生活，一般人想象不到。[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个画，它正经吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是画个画什么的，怎么可能肾亏呢？[fn=21][fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不好意思请教一个专业问题哈，画油画和画国画，哪个更容易肾亏？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;教人家玩花活呢……小花变坏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是啥玩意都能干，还能指挥一国人治理国家，贼他妈爽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除非是掌控欲特别强的人，不然现代生活标准远高于古代帝王</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来小强跟我到后操场来一趟，赵哥我给你演示下太祖长拳的出招</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;调整这个词可太传神了</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;知足吧，要不是小强你就得光着身子给人牵羊了</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一般打码的都是关键地方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿山甲最后到底说了什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉 别猜纸条写得啥了 当年就是小花这个货开了书中有的坑不填的先河 尤其是那个不可说 气人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;烛影斧声的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可说，不可说</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额……宋钦宗呢</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多年以后，考古学着看着某座古墓里的矿泉水瓶和泡面袋子陷入了沉思，走进科学为此多拍了二十多集</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各位别纠结了，你们指望一个数学26分的人算清楚300W人的口粮价格也太难为人家了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不用算了，因为小花就没好好算过，从后面剧情来看你们知道对他来说也只是一时缓不过来，但伤不了元气就行了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不都说是滞销货吗，那不贼便宜！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金少炎家没个一两千亿也不敢这么装B</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;算泡面1块钱1袋，面包1块钱1个，午餐肉和沙丁鱼罐头5块钱1罐，牛奶2块钱，矿泉水3毛1瓶。那1个士兵1天就20块，300万士兵1天6000万，金少炎的那点钱看样子也撑不了几天呀</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时候宋朝也确实有资本。</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这已经是美军的氛围了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有人一辈子见过这么多人吧，几百万人呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三百万人围着城吃味儿那么大的方便面，金兵不得馋死</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郭德纲有句评语说得对，徽宗不做皇帝会是一个很好的艺术家，可惜，偏偏就是他……这就是命啊……可惜了……</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;300万人马粮草，三个月不成问题，宋朝这是囤了多少物资？它是历朝历代土地最少的国家之一了，这是怎么做到的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不在话下可不是极限，一般都是有余裕的情况下说的</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阴兵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;南下中原。。。北下中原是个什么鬼。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hetui</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那其实李师师也不知道是几手的了。和名妓谈恋爱说起来挺浪漫，实际上还是有点膈应人啊</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那又想怎样？你都八百万大军压境了，硬实力在这摆着呢，和你兄弟私交不错吧，我不是当不当皇帝的事，是不答应的话下一个被八百万大军围住的就是我了啊！</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;联合国军？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;联合国部队？</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你找杨丰来还有戏，就小强这配置王跃来也白给。</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又不是亲祖宗哪来这么大火气[fn=33]</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;依照赵家兄弟的性情我真严重怀疑这个刘东洋是赵二的化名</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一语双关，文笔真厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六贼：阿嚏！</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;徽宗的女儿还被金兀术给爆了缸了，太惨了，也着实可恨，唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有你全家女眷也不会被掳走当玩物</p>
`;
default:
			return '';
	}
}
        