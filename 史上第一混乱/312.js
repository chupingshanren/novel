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
<p>&nbsp;&nbsp;&nbsp;&nbsp;从这里开始，请叫它：
第四卷 《史上第一混乱》的史上第一混乱 第一章
（doge）</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怎么回去呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多新鲜呐</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实就是神仙掌人道的意思，那天道只上八成还有东西。那人类掌什么呢？？一本道？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人界轴就是法律道德人性的综合体</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到秦朝能找到加油站吗？汽油或者柴油有吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也太坑了</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就因为吃了两只蝙蝠，都TM死了两百多万人了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没砍光，2020就已经让人类感受到大自然的威能了</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就想这要没油了咋整 那会连高度酒都没有[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面才说之前放进去的香烟都没事，那油桶肯定不是现在才放的啊，小刀和面包是后面拿上去的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《鲁滨逊漂流记(3天限时版)》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这里有bug的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两千年前铁定没汽油啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额，为什么汽油没检变成两千年前的东西</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;↘字可以写小点[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你脑门可够大的</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原以为一份工作两个身份可以拿两份钱，现在是一个人担两份责任做两份工</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以正式进入拯救人神两届的线╮(￣▽￣)╭</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;地图还没解锁捏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;地图没点亮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这和收音机一个原理？没频道的停不了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暂时是灰的，是不是意味着……</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孝子贤孙啊</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天庭高科技啊</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;药呢？[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果是这样的话很有操作空间啊</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多大仇，给人送回战争年代受罪</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二百的老太太也不保险，万一没刹住呢？ 还是500+的老太太保险一点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剩下万千那啥和那啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就带个二百的老太太</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你还很真有脸说，那是小强之前的工资，你给人派新活还不多给点储备</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿越不是摸电门吗？[fn=17]</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道还有不是考的本[fn=58]</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花还看F1呐</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这比喻好恶心[fn=60]</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们这些人……人家说了一定是小强的了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得这里有bug啊，包子过完年就不喝酒了，5五人组大概是过完年两个月后走的（？），那之后不是得等54三百皇帝组走光了才能穿越回去吗，这不得大半年出去了？[fn=39][fn=39][fn=39]</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不是生意上的事嘛，都是客户</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强吃进肚子里的东西不受时间影响，也就是说…他可以在菊花里带一些现代制品</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帶點黃金白銀…不然去了吃啥</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你开个破面包，还挺有仪式感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我信你个鬼[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;破面包开出了f1滴感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;f1方程式</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;06年的面包05年才变成面粉没啥。面粉在00年以前消失也正常</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花这都能写点梗出来……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有钱人啊，全身都是皮毛。你要是穿化纤，得抹你一身的石油。</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;格拉里，就是角落里的意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了五遍突然发现一个事，小强的车是外面上锁的，那走到清朝的时候锁怎么也没了，那这样的话车门不就开了吗？车门开了那车里的东西不就……这里写的不严谨了小花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我这也有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼是阜阳人嘛，格拉条</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们这的土话啊，格拉</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最遠我在一天內開了一千六百英哩，等於兩千五百多公里，十八小時</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李世民那算城乡结合部吧</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一下从时间切换成空间了</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十个多小时……这脚怕不是废了</p>
`;
default:
			return '';
	}
}
        