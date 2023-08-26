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
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怀疑你嫂子就是貂蝉[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于正式登场了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二胖来辣</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郑州火车站的客运量亚洲第一</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隔靴搔痒，真特么绝了，非常精准地描述了，想不起人的感觉</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关银屏呢？不是你女儿？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有WiFi吗</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个翻着手掌有多少人无视了呢？我就是[fn=8]</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一生之敌！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二胖：可算该我出场了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书战力天花板，下面的大吊灯。
可惜还有个李元霸这种外挂选手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书到了50%，才出来的战力单位………你能打几个吕布？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕二胖，我已经天下无敌了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二胖提到好几次了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二胖来辣</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无一夺冠可还行，建议说关羽这个版本不强势，更有内味儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周仓值得，听说关羽死了，立刻自刎不愿苟活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三国论统兵论武力论智谋二爷无一可夺冠，但能被尊称武圣，就是因为二爷忠义，冠绝古今。羽之勇，千古无二。羽之义气，天下无双。古今中外最为人所佩服的两个羽哥</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万一你顺利。。。每次看都有新发现[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;流弊</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五十块送一碗烩面[fn=37]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有经验</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;旅馆便宜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大哥？来碗滋补烩面不？</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年代感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;站台票啊，好久不见了[fn=4]</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有生活</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好个吕布！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拨云见日，茅塞顿开。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包头当地九原吕布</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我吕布嘌呤半升，只恨未逢明主，公若不弃，布愿拜为义父。
小强卒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然脑洞奇大啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三国战力排行看来得变一下了  一吕二花啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎我去你妹啊  大奉先啊 ！</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;xp系统用到半个月前[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年微机课补习班 连特么鼠标都没有 教的是“到死” 槽！后来上网吧 开机还是我弟教的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;286什么配置</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年代感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的第一台笔记本就是vista，很多人都不知道有这么个系统……</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是286装了vista还中了熊猫烧香啊[fn=58]</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这又是个伏笔，后面小强用了不属于他的力量</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真用不上十分钟😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不怕的，半小时就配齐了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;答案是不能，奥拓没那空间装。</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二胖！</p>
`;
default:
			return '';
	}
}
        