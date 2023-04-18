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
<p>&nbsp;&nbsp;&nbsp;&nbsp;第十六章：造枪
第十七章：服刑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不敢乱造</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弄不好私藏枪支罪[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不敢给国家添麻烦啊[fn=10]</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;置气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这兔子，就想起了一只一直在鸽子的地精</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有个问题，吴三桂留不留辫子[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈圆圆的那个吴三桂？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得，后面的评论区又得争论吴三桂是不是汉奸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴三桂还是有点骨气，比他爹好得多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;教书先生，教“客户”历史知识的来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2333</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那句话怎么说的来着，人啊，对自己骑过的东西总是难以忘怀</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再写个20年的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那感情好啊，不完结多来劲啊|･ω･｀)</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关键是下辈子还是马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说真的给时迁什么时候给卖了都不敢说，梁山之前就是偷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猴骑兔子。。。我就听说过狗骑兔子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时迁需要马吗hhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很灵性</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;左脚不找离合吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽的驾驶技术算是成手了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🌿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥你碰见红灯停车也拉手刹啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草料要93的95的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;充一百给个洗🐴券</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还真是，哈哈</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那岂不是虞姬状态不如从前，就是欠…[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太惨了</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书一向厚古薄今甚至可以说是神话古代技艺，唯独对于武器铸造的技艺一直很拎得清，不仅意识到古代铸造技术怎么也赶不上现代，前面还能精准用皮搋子的棍代替剑（中国剑的手感确实更接近棍，但是一般人都会想想到用匕首代替吧），加上妖怪里对刀具的描述，小花本人应该是对武器挺有兴趣和研究的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来跟振金的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个可真不好说，没看秦朝的古剑都是镀铬的，不是说美国还是德国，都到19几几年了才掌握同样的技术</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们在想哈？枪啊……来把AK……不行沙漠之鹰也可以[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来根镍的</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前叫裁缝，现在叫私人订制。[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;锻刀大赛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;劳斯莱斯那一条线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;才发现混乱里有刀具的描写，这是写的不过瘾所以妖怪里加戏份啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;找邵冠今打武器呗！再把阿破一人拉过来帮忙基本已经能灭老何的队了2333</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打工是不可能打工的，这辈子不可能打工的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时迁：跟我学偷电瓶车(自行车)养人吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉呀妈呀，每次看都要在老笑点和又发现的新笑点上感慨一句：哈哈哈哈哈哈哈小花你到底有谱没谱呀😂😂😂😂😂</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉确实是bug 前面还说很多学生上不起学呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃着吃着惊喜道：呀，这是我家养的猪！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我当年看这段蛮疑惑的，家长有钱请客，没钱让孩子上学？</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人才啊，这都能给你打出来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好段子！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下看得出平时看视频的时候说的最多的字是驴～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想的是铁匠负责手↑榴♂弹，木匠负责装把儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说真的能打……</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;理论上用白铁皮的确是可以，只是个外壳么，木头的都行[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大人，时代变了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白铁皮不行，太薄了，做核弹还是用铸铁构件</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我这也有，这玩意不保密的，反正给你你也没法提炼高纯铀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是人才</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我这有简易流程你要么？</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;南一小可以啊，校风颇恶，善使桌腿，医院主任，食品厂厂长还把儿子送到这学校</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花的书就是这么生活[fn=33][fn=33]</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在火葬场吃香了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说明强哥这没遛是遗传的</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，这句话没毛病，教师节孩子给我送花时我都胆战心惊的不敢要</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也许吕布也有这毛病呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有画面了</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汉奸来了</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，看花叔小说确实有种俩人差个几百年，只要没隔个朝代就觉得俩人认识的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感慨</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家父张二河！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有王希孟的千里江山图呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;几年前上海世博会时，我爸妈还带着留着大鼻涕的我去中国馆参观过，里面就有一个专展《清明上河图》展柜真迹大幕上是电子仿真活化播放，哇塞那真是让幼小的我激昂澎湃的说了句“牛比”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总想起张若虚春江花月夜
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看到这些心中也是激荡不已</p>
`;
default:
			return '';
	}
}
        