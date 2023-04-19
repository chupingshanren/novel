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
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不亨通嘛，自己是齐王，媳妇是秦朝大司马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大连那一溜 老人跟吃药叫歹悦（都是三声）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看胖子在餐桌上气吞山河的表现，就算真有毒他也得放嘴里嚼两下</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早年造梗 现在玩烂梗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在春晚已经没赵本山了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我说牛策反呐…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下蛋公鸡 公鸡中滴战斗机欧耶</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没人评论？专业对口</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小说估计是没收学生的</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥归位！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈，好喜欢这个小胖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小胖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好喜欢赢胖子[fn=4]</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;炸出来一堆使徒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;科技部基础研究司时空平衡处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;TVA</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最早是浅浅办的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡鸦12345</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王八坨子办事处</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不光是公务员，还是个高级干部</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇者归来：歪你们滴皇帝灰来咯！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是的！（疯狂点头！</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;行，都够能侃的</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;钓 鱼 执 法</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拉进育才就妥了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汝勿虑也</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吾妻女，汝代吾养之</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这神仙当的真憋屈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开三蹦子那位可有个星球</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来李斯上辈子不是武术迷，连散打王都不认识，另外，强子所在的那个北方小城是哪里？怎么穿越众都在那里神出鬼没</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多新鲜呐，育才的校长不也传到秦朝来了吗</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没五楼人家那屋顶也比五楼高啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂了，盖中盖可以看到自己前身</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盖中盖啊</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当教师的 你伤不起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你个老师会的花样不少啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给我也来一个</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节到位哈 太监尿不干净 身上有骚味</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太监:交出来吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哕了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这小船开的贼溜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是赵高吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑成傻子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不仅声音在回响，甚至连画面都加载出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我脑海中还在回响</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这语气我都自动脑补了</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;菊花残，满地伤，你的笑容已仿徨。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那……还真未必[fn=62][fn=62][fn=62]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小哥我看好你哟，刺他</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也不一定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两句也太搞笑了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不一定吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂😂😂😂</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哟，胖子急了</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊～～！</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日月神教，战无不胜，东方教主，文成武德，千秋万载，一统江湖。——《笑傲江湖》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被射到墙上《英雄》啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来是一统天下，你现在只让我统一个江湖，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;星宿老仙嬴春秋……</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我觉得，荆轲刺秦王的时候，嬴哥应该正直春秋鼎盛，应该是个大帅哥才对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老秦，始皇帝是你啊。我第一次感觉老秦腔那么动听[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊太亲切了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为逐客令没实施，大臣来自各个国家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合着这儿就嬴哥一个说方言</p>
`;
default:
			return '';
	}
}
        