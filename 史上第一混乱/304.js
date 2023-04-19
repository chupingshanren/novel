$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=34]这汉奸人设是真牢固啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是狗改不了吃…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猜错了，内奸不是张冰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;woc</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶狠狠猜张冰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你想想小强身边谁最喜欢出卖人?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对，有一个大……保密</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有？</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧这次是真汉奸了</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道为啥，小强经历过一次之后还是毫无准备，第一次可以理解，第二次还是有预告的情况下，一点防备都不做</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老郝也是个爱看戏的</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;物以稀为贵…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这 我觉得这个还挺靠谱的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实要是古董能换航母，我想国家会换的，反正王羲之他们都在这儿了，画几幅换一艘，画几幅换一艘……</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽教小象开车得伏笔</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好形象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没给你开个雨刷全刷下来就够给你们黑手党留面子了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸亏工资发到车上了</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要汉节就不说了，臭皮袄这多少有点记仇了</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花后来在强人里说混乱想一出是一出，其实现在看来各种伏笔铺垫还是挺周全的，在这里先把项羽支开，然后才来写绑架</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《古董局中局》</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面的书倒是拯救世界了，可惜写的一般，除了妖怪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑手党其实这不太合理，这么了解小强，不知道去探探育才学校？再说国安局都干啥吃的…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要真写成拯救世界的估计也不会火成这样</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防核弹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈。还装了防弹轮胎呢[fn=33]</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杜蕾斯啥时候来？</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一次套七个么[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：媳妇我真没吹，我是和别人做的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次套几个，不难</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子的怨念</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有过一次经历还毫无防备，真的是，可怜包子和一家人了，小强应该只是作为一个线索人物吧</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平时总是一副不以为然 什么都不当回事 死一个伙伴就好了</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是小强最恐慌最无助的时候，整本书里就这一次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句超有感觉</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来就是本搞笑小说，小强不防备和老外不动手是相对出现的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假如啊，我说假如，那个老外真动手了，会咋办[fn=60]</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈写的真好…我正感动呢又笑出声</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“……都没见过这么丑的人”而且还是女的 [fn=31][fn=17][fn=14][fn=34][fn=23][fn=11][fn=16][fn=20][fn=30][fn=50]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是行家你是行家哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经验可太丰富了…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈 过来人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33]</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话，这里小强要是真有一拳把段天狼打吐血的战力，这大块头还真不好使</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起唐人街探案2里的了“爸爸打我！！”</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郝老板你啊！路走窄了啊！你要跟小强打感情牌，明清文物要多少有多少啊（明清文物可以卖的）！为啥非得走死路？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;公司叫吉豪，老板姓郝    233</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谷爱凌..........</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双重国籍好像是不举报不追究</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要不嚣张，出入境用中国护照，不特意查的话，一般不知道你入了外国籍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是中国不是不能双国籍嘛……</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉。老郝前面对小强是真的很够意思。奈何为啥错了念头啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前老郝可是拿小强当儿子养</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼上够6啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺喜欢...养你一辈子...霸道老郝爱上我？</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不应该是真丝小褂，戴着圆圆的黑墨镜，然后手里拿着小马扎吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古爷正经时候啥样你啥样</p>
`;
default:
			return '';
	}
}
        