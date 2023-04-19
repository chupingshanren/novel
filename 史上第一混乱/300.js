$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没当皇帝那会儿</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧大人好大的官威啊</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵宋的开封将门就是这么来得，一个能打的都找不出来[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼睛啥时候带孔了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;节选自《戏说千年史》第三卷第959章《“假”酒风波》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各种疑难杂病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好那时候不流行做手术</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花儿说到布衣和皮夹克，扯个题外话，我一超级邋遢的哥们用了大概两年的时间 把一件布衣牛仔服穿成了皮夹克的质感………… [fn=34]</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;房玄龄：？有被冒犯到。</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个是现役神仙一个是预备役神仙当着皇帝客户的面一点天庭的脸面都不顾，嘻嘻哈哈成何体统！</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桐叶封弟不也是这样来的么。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我估计刘邦在床上也老说，之前不是在电话里还说要曰死黑寡妇……这要是也君无戏言估计后宫刷新速度比天牢还快</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是和唐太宗喝出来的哥们情义！</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：神特么位极人臣，现在来一片警就能把我铐走。</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以小强的历史水平竟然还知道尧舜，而且还知道这两位是禅让？[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其他人都是死了之后才有这待遇</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;站在你面前的是，大秦秦王兼魏王、大汉一字并肩王，大唐中书门下同平章事。</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呦呵哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在的行情不是满地飘零，无一无靠么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到底经历了什么...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了好些人之下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是有生活的小花</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当代企业家</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这些人里也就成吉思汗痛快点，老李老赵老朱借兵都磨磨唧唧的。到是胖子是真的给力，二话不说就把攻打六国的秦军给收回来了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是真正的伏笔了。。。小花的棋下的还是可以的。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得和天斗反了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太坏了...</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实是国子监祭酒，官职正四品，小九卿之一，有上朝廷推的权力</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可真自觉哈哈哈哈哈哈哈哈哈哈</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈太不着调了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老赵再封你个宋朝殿帅府太尉就齐活了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有本书说的就是一个人穿越到古代成了萧太师的故事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这太师跟内太师比没那么太师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是很多民间故事小说和后来的影视剧里太师都是坏人</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想知道朱元璋看到吴三桂后会怎么想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太祖长拳</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铁木真不会汉语吧(ー_ー)!!较真一哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话说的，小强别说马，车都开坏了还没见着人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接绕着成吉思汗转一圈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我™直接原地转一圈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;容我找个高铁</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋元那个年代的白酒不一定有现在啤酒度数高呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按法理算。。。。小强多喝点，然后去外蒙绕个圈。。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;匈牙利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄巢围城的时候还领着军队吃了一年的人肉呢，战争时人权都是p</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成吉思汗打下的领土是世界史上面积最大的国度——西至西欧诸国，东至东海，南至印度，北至北极圈，无一不在蒙古帝国的领土之内。一个小部落的儿子，在幼年就差点和父亲一同被弄死，却在其一生驰骋整个欧亚大陆，可谓是一世豪杰——这并不代表我同意他们拿感染了鼠疫的尸体当做弹药攻城的行为</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跑条线当直径呗。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管看多少遍都那么好笑</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;封你个将军，然后再“杯酒释兵权”是吧～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“东华门外唱名者，方为好男儿！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋朝的将军……</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔嗷[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;找的谁，我儿子也快肄业了</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先喝酒，先喝酒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，岳飞的顶头上司</p>
`;
default:
			return '';
	}
}
        