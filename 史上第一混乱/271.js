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
<p>&nbsp;&nbsp;&nbsp;&nbsp;辈分一下子就大了哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感谢祖宗十八辈也感谢不到项羽身上去。</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可曾听过"当当当当，当当当"</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兩百多桌，一桌花一分鐘都得三個多小時</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新版水浒传张清可帅了～</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸡皮疙瘩一下子就起来了，洁身自好！正气凛然！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岳飞出场不多，竟也足以</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好多人啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周迅也说了 哈哈哈哈</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;.....</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹 笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超现实主义一头黑线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看见没，管男人得这么管才落好，里外有面子，像张冰那样……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古代也不全这样，只有宋朝，因为有钱，把颜控这个特性发扬光大到了极致</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不说好看，至少也得是五官端正。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前文提到时就有个书友留言说古代能当县令的长得都挺好看的</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里是早年网络神曲《大学生的自习室》的梗</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有句话不知当讲不当讲。宦官之后[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我能吹一辈子</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好湿啊，好湿[fn=31]</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这闹的</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈啊哈</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻真可爱啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻：我只要我家小白</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来早就有了电动打火机。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防水是能在水里打着吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无氧燃烧的‘普通打火机’……</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实是好妹子</p>
`;
        case 91:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心心念念的自动铅</p>
`;
        case 92:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘老六：外星的玩意也靠不住(*￣m￣)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不吗</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈啊哈以前都没看懂，现在终于明白了。俩老头一被窝啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋清也不老厚道的</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，用得一手好典</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自荐</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俩老头背着媳妇睡的好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你俩老头都睡好了就可以把老夫人放下了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重点应该是俩老爷子一起回答的，他俩睡得好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么感觉这里没看明白呢？</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把俩老头都赚上山去</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子很能干的…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时代变了啊  现在要是感让媳妇第一次去了就做饭  怕不是被网暴</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搭人。。。精辟</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实认识的都是牛B的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的朋友遍天下</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜帖亲自写没用啊，路上还一堆横幅呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，要不可乐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是细节啊，处理的真好。老潘的请帖必须强子亲手写！</p>
`;
        case 102:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毛遂自宫？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;司马迁忍受多次宫刑写下传世之作</p>
`;
        case 103:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超现实主义黑线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毛遂：艾玛这人……</p>
`;
        case 105:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强项是自荐[fn=4]</p>
`;
        case 106:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀秀是谁啊</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次见是一定的</p>
`;
        case 109:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三环掉个屁的头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;公交车咋掉头的?</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花开个新书吧 我赞助$200aud</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不说了，走进沙子了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子真好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赞美他
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都要看哭了。。。</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难得动心一次，你却让我输得如此彻底，焯！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强:高祖所言极是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以为他心愿已了升天了呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凭空升上天去哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽：你好像抢了饿滴天哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，这俩是真爱</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别这么说，新娘子不是你们家提供的？</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈居然真的是哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
`;
default:
			return '';
	}
}
        