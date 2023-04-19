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
<p>&nbsp;&nbsp;&nbsp;&nbsp;由于朝代越往后生产力越高，但是招募回秦朝的各朝代工匠工作效率是一样的，所以越往后招工人，对于秦朝来说就越贵，就好比越南从美国招人搬砖</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出租</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没点进来就知道有人提“开元” </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李世民应该不是开元通宝吧……那是唐玄宗的钱……</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就进入角色了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛病，时光机也是机场</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;银本位</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;业务麻将不可取</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦不是赌王吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起以前大学，下午开始打，吃饭宵夜边打边解决，打通宵天亮了睡觉，睡到下午被人叫醒了继续打</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前不会打麻将，就很奇怪有啥好玩，能打到天亮。最近学会了，有一说一，要不是实在太困，打到中午都不是问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦是聪明 要不怎么能当皇上呢 但是这一桌子都是皇上啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈 意思是刘邦最菜了呗</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怕啥，你的黄金多得是</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咸阳机场不是说是赢哥的假坟么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也有可能是高铁站</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就知道你在这儿等着说“统一哈”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲这个，饿就感兴趣咧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子天天想着统一呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;统一哈</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺没看懂 哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪有那么高 照小花这么搞经济早崩溃了 大伙这也就看个乐子就完了 金本位不是简单的按储备量这么算的 汇率也不是这么简单的光听市场的 否则就没没有关税和宏观调控这么个说法了 反正小说么 差不多看看就完事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花数学26这经济学怎么也有62的水准了</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后唐李从珂那时候丢的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李世民那时候传国玉玺丢了没？</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈气太接地气了吧</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥的车，萧府的人，怎么算是刘邦派车送的人呢？</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么多皇帝，最不要脸的还得是老八，毕竟奉天承运皇帝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他吹牛你还没法反驳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天不天才的咱不知道 反正是一帮人精</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;商业互吹</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古代差不多，贸易不发达，人口流动性差。搁现代社会没有看得见的手的话，你一个国可能就成了人家的肥羊了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这么说我们学金融的也许可以，但经济学不行，他们和金融根本不是一个段数的（难，高）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特指某些主流经济学砖家叫兽</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但其实布雷顿森林体系也没持续多少年就崩了，换成了牙买加体系</p>
`;
default:
			return '';
	}
}
        