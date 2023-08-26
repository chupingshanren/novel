$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写得真好</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写得真好！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哑剧也可以有掌声。。。你应该说看男足比赛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑瓜子嗡嗡的</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;身体是自己的那这一脚估计就得住院了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前看几遍，这里都没有看仔细，现在再看一遍真有意思，要是小花的笔力一直在这多好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;介是成龙附体吧</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不应该是玻璃碴子？[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;串台了[fn=33]</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就看出来禁枪严格的好处了，这要是自由美利坚早炮火连天了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自由美利坚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你会后悔的</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后呢？一头老血给你洗个澡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄健翔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;点球！点球！点球！格罗索立功了！格罗索立功了！不要给澳大利亚人任何机会。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是不那个足球解说？</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我知道我知道！小花是一条狗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11]还有一段，mmp，格罗索他不是一个人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你吼辣么大声干嘛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那兔里面兔子和鹰酱坑苏联的时候解说就是这个套路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄健翔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好high啊，想起了足球解说</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈！我已经天下无敌啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈…</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的有道理😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他可以斩安检上飞机</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;操！🤣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;职业病[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说，那荆州还要不要了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二爷这是习惯了    哈哈</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打穿五处安检也行</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在火车也得身份证了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搁现在火车、大巴也得要身份证，这下子去不了了，只能自己开车去了</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话赴会什么意思，你请我去，鲁肃请关羽去关羽就去了，还赴会的是鲁肃呢……
我请你来个地方谈判，我也去了那也是赴会了？那地儿还是我挑的我担心什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;单刀赴会的是鲁肃</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二爷性子 真能干出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;短短两章，关羽写活了……</p>
`;
        case 92:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹操可懂了</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老郝一生气雷老四就得跪下叫爹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姓雷的但凡敢多bb一句 尸骨无存了就。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;切，老郝才不在乎一个雷老四……</p>
`;
        case 94:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了，打败小强只需要两个字，这就是关二爷！</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他娘的，笑喷了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这……</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写小说最高境界就是把人物写活，作者做到了，致敬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强吃瘪了[fn=40][fn=4]</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尉迟敬德啊……钢鞭无敌，长的还黑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;程咬金？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;史万岁？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瓦岗山，程咬金</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忍不住想剧透啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北朝有个瘸子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北朝？宇文泰？那高欢转世就是曹操？
高欢放宇文泰那段还真的像</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也可能投胎成普通人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;程咬金？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尉迟敬德啊……钢鞭无敌，长的还黑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李元霸？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呃 谁呢</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麦城星夜悲白帝，洛阳萧索二贤庄。
宁学桃园三结义，莫烧瓦岗一炉香。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一句话立起个人物！好感动！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜呜呜呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二爷牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句好有感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝了！这是真的绝了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扮演关羽的老先生去世了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呃，演义里罗贯中为了突出刘备的仁德有点用力过猛了，“近乎伪”，但从创作意图来讲肯定是真的仁德；正史上昭烈皇帝是一代枭雄，哪有什么虚伪不虚伪的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一堆键盘侠都说刘备虚伪，可刘备能为了关羽倾尽所有复仇，最后把自己都搭进去了，这能叫虚伪？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关羽要真在现代要被气死，现在黑刘备诸葛的人可太多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关二爷的死就是蜀国没落的开端。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麦城星夜悲白帝，洛阳萧索二贤庄。
宁学桃园三结义，莫烧瓦岗一炉香。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一句话立起个人物！好感动！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年第一次看哭的地方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟情</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;锦绣江山孤不要，不灭东吴不还朝！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;    刘备：朕不为弟报仇，虽有万里江山，何足为贵？
要朕罢兵，除死方休！
    桃园一拜，千古流芳，遍观史书演义，评书话本，哪有这样的交情？
走遍天下游遍洲，
人心怎比水长流。
都说桃园三结义，
哪个相交到白头？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个为救你儿子出生入死的人有什么必要再收买呢？我站刘备真的被感动了</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说的这个神枪盖世，他这个神枪正经吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道几刷了，现在才发现在开车</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张飞是非洲的，赵云是婆罗洲的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;常年在外厮杀征战，白化病也晒黑了呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张飞其实是个白脸汉子。。。</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家是一本小说 把小说世界里面的老小说《三国演义》当作事实有什么问题吗？ 要不然项羽真的以一敌万呐？ 项羽能以一敌万 花木兰能巾帼英雄 张飞脸黑点怎么了？！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵，史书上张飞可是白脸和黑脸没关系，只是艺术加工嘛</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;子龙在演义中好像还真没流过血，全是别人的</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和氏璧不是圆的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蔺相如：再说那是板砖lz撞死在这让你看看是什么馅的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以找刘莉莉~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要先打二十七万掌~</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周仓是演义里设计出来的人物。其实就是一个老兵</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兴冲冲点开评论，结果没看到爱说“伏笔”那哥们儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朕，秦王政，打钱</p>
`;
default:
			return '';
	}
}
        