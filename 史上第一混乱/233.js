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
<p>&nbsp;&nbsp;&nbsp;&nbsp;成吉思汗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈哈，我最喜欢的这章回来啦</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子这思维转折不比她爹差啊。看来是祖传的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想吃你大。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让你*尽*亡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是极端的非黑即白，很难当一个好刺客</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帮你口角好吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;算上标点十六个字替换六个字 水的光明正大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪六个字？</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话我怎么似曾相识的</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴～</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呸，表脸</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我坐在那里焦躁得不行，就在网上找了一些“写真”看，有柏芝的，有阿娇的，有MAGIC.Q的（奥运期间温馨提示：那时是2007年，我看得还很不彻底）……后来当然是越看越火大，我索性把两只胳膊放在桌子上，蹲伏起身子，仰天长叹道：“嗷——呜——”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;删减了</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃饭问不开发票能不能打折咋就成混混了？你给我说清楚！</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;表姐来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木兰！</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;耿直</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最烦各种面子活动，实事没办多少不说，讲话一套一套的，关键还又臭又长，还没一句有用的。学校听校长讲了十几年不够出来还得听各种大小领导继续讲</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也有平均？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我倒要看是什么个乱法</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上飞机前把那一军用水壶橘子水当着安检的面一口闷了，画面参考人在囧途里的王宝强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飞机上禁止携带液体，食物也有严格要求数量。</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;山寨质量比正版好的有好多例子了…正版的参数是号称的…自己达不到人家盗版愣是做出来了…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为“义正辞严”点赞，顺便鄙视“义正言辞”。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想当年，山寨版的飞鹰刀片的质量比正版的还要好，于是，山寨收购吞并了正版…………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;a货</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高密度缝纫机？不应该是织布机吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前是低仿，现在是高仿了，技术活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正版和盗版的区别只在于授权</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莆田系</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让胖子先把淘金者1代50关给通了，再给他个魔界村玩着，完了淘金者还有2代继续老鼠吃米</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男女男，超级小嬴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子缺魂系列的快乐啊。。。</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说怀孕了到时间肚子里的孩子怎么办？</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少一句“包子在我怀里欠了欠身子，仔细看了看，居然脸一红，猛的跳到了地上。”</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我顺着她的目光一看，原来在她刚刚坐过的地方支起了一个小帐篷……</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不用为我们省钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面就是付费内容了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;另外加钱我也看，一个字一块可以了吧？诺贝尔文学奖也就这价了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我差那37个字的钱吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;省略了啥啊？</p>
`;
default:
			return '';
	}
}
        