$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都说搞笑，其实我想说上一章巨感动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈恢复了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章我快笑死了，看不到本章说真遗憾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正版小说受害者？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搞毛啊？少一章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章巨搞笑，居然没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前看都没有断章的，现在都是这样很烦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去啊，搞毛啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又少一章！气死人了！</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;的确烧包，为了显示铸造技术好。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;潮败啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;装 b</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我老家山西的也说烧包</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不良人里边见过这招</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我五岁之后就很少跟朋友们这么闹了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太有画面感了哈哈哈</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，嬴哥不想听你白话了</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以cos托尼斯塔克最有面子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先说说刹车的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花你…现在一把剑就牛的不行，没多少年到项羽那里都十几米的铁链子了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十几年以后的今天无人驾驶不新鲜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然而谷歌无人驾驶出事故了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被查的是百度[fn=32][fn=32][fn=32]</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帝王思想</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子好可爱哈哈哈哈</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后世只剩下本能就那么厉害，春秋时期能使真剑的盖聂得厉害成什么样？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说就更加恐怖了，这得强到什么地步。。。</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷，武器升级了。</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强人念…</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小人论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了。。(ಡωಡ) </p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此地别燕丹，
壮士发冲冠。
昔时人已没，
今日水犹寒！</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千古第一义士</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太可爱了</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;气死偶咧！！！</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这得带多大的充电宝[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个还真是</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;樊於期倒了血霉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可这辈子人家依然以国士待荆轲了</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁说小强不尊重皇帝的，这书里李师师拍电影宋徽宗只给个背影，金少炎拍电影皇帝们只在借兵的时候跑龙套，轲子拿秦始皇当群演，只有小强给李世民抬咖，成了西游记男二号，谁才是最重视皇帝的人？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这位更是重量级</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么重量级的群演吗？我还以为就算不适合主演也是个男二呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，荆轲刺秦王，秦王是群众演员可还行，。说到演戏，突然想起一个荆轲刺秦的小品，“下蛋者何人”“请荆轲乘好了端上来”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合着轲子眼里这是他一个人的戏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是群众演员，俺们胖子可是皇帝，是30块能打发的吗？30盒盒饭还差不多！</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这身份不配给个特约吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这戏要让师师拍，你顶多露个王冠，连脸都不露群众演员。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲：连个替身演员都没有还说不是群众演员[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢胖子抓狂得要崩溃掉了 [fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句也是看一次笑一次[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈 笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好有画面感[fn=5]</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强这是编了十几分钟的胡话啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柯子太淡定了，好了也不说声，害得强子还在那白活</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个节奏笑死我了</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这可是荆轲刺秦王的地图啊，败家的小强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画副西红柿鸡蛋面图呗[fn=4]</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艾伦或柯达演得好荆轲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;傻子式的狡猾笑容，太考验演员了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲不是傻，是太重义气契约不撒谎，咱小强就灵活多了……</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了</p>
`;
default:
			return '';
	}
}
        