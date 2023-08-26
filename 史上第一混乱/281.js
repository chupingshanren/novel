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
<p>&nbsp;&nbsp;&nbsp;&nbsp;我说上一章怎么没书评呢，合着是才恢复</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;48章-1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大意就是育才在国际媒体引起轰动，李师师传奇首映取得巨大成功</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搞不懂上一章有什么好和谐的，又没黄又没暴力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正版小说受害者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈个鸡的又吞一章</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丫鬟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第48章，我去别处看的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八楼被吞了，算了不搬了
后面说的是李师师电影首映大成功就没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？发不出去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;,而且他的最后一句话给我惹来了很大的麻烦,近到育才周边的农民远到北美欧洲,前来求胃药的人络绎不绝,大家知道,胃是一个比较容易有毛病的器官,可并不见得它疼就是因为饮食不当,还有可能是胃溃疡。胃酸过高,当然,也有可能是饿的,除了最后一种给俩馒头就能治以外,扁鹊的药方并不能包治百病,他又是一个很负责地医生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我之所以这么奉承他还因为他治好了我的胃。
——美国《华盛顿邮报》
不要再问了,我的确被打败了,可你们为什么老强调我的对手是一个司机呢?
——日本国三届空手道冠军朝三暮四郎先生
除非把我们的孩子送到育才,否则以后金牌全失的事情会不断重现,我们已经不在同一起跑线了
——新加坡散打主办方发表在网站上的言论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要小瞧任何一个从你身边走过的孩子,不管他是不是以后的冠军,至少你肯定既跑不过他也跳不过他,如果你能在水里憋气三分钟以上,那倒是可以跟他聊聊。
—韩国《东亚日报》
育才的现任校长萧,是一个具有独特人格魅力的领袖,东方的保守和西方的幽默齐集一身,好吧,我不得不承认的是:</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第四十八章 《小强》到了中国,除了看看长城和故宫之外,一定要去育才,如果你现在就在中国,那么,动身吧。

——美国《时代周刊》

育才是个神奇的地方,它汇聚了全中国最顶尖格斗大师和艺术大师,我们甚至有理由怀疑:它汇聚了中国历史上最优秀的人才。

——英国《泰晤士报》

</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会不会是吕雉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又少一章[fn=39]</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;H国？M国殖民地的那个H国？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，这臭毛病十多年前就有了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这帮孙子都不敢在外边说这话[fn=10][fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大寒冥国</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宇宙国</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸陵</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你tm敢给老娘改国籍？！</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古代的帝王不会像现代甲方一样只看效果的，他们会亲自去考察地形，施工过程中也会去看的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说要解决墓的机关问秦始皇没用吧，负责制造和建立的又不是他，他顶多就是个老板交代任务</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥真是博学</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一打听 散打王表姐 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你一个扔石头子的去扔铅球能有准头吗？花将军那可是拿石头站山头上砸过少数民族壮汉的……</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金人十二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奈何取之尽锱铢，用之如泥沙？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那找林俊杰去管不管用？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;据说金子有流动性，埋在地下给点缝就跑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;土豪</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绕了一圈整容才是重点呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这位护士小姐，受国际关系影响我们没有办法给你颁奖，但是这十万块钱奖金你说什么都得收下，对了，年底给你评职称[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个***不是擅长整容嘛[fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;表扬表扬就好了，奖就不颁发了，嗯，没问题😊</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花这本书太棒了，我都不记得看了多少遍了，每次看都好似书里每个人物活灵活现的出现在眼前一样[fn=35][fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;勿谓言之不预也</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=4][fn=4]</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人间轴还没倒呢是不</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剧透了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁让你特么这部分写的这么急，要不是看到进度条我以为玩完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2019年的月票，还有用吗？</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者对细节描写真的是非常到位，在这一卷完结时各种坑都能完美的填好👍🏻👍🏻👍🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好！</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有次不小心把杯子里的酒当成白开水给小孩喝，喝一口就哭了，我以为咋了，知道小孩说爸爸给我喝酒我才醒悟[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然不喝三碗不过岗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;探着小胳膊太形象了……这真是生活给的小花灵感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看到这里都忍不住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一口啤酒喷出去了！[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好孩子……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，羽哥感觉有像小强的方向发展啊</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;而且酒精起作用没那么快，不会说一杯酒下去人就马上昏迷。乙醚还差不多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我干了，你随意，咱就是豪气[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书这么写是为了搞笑，小孩子千万别让他喝酒。</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是现在西安的秦始皇陵兵马俑吧</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年10月 还有人看吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十多年前小花生不逢时，放到现在肯定大红大紫。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书影响还是挺大的……我看好多书（除了历史类）在描写秦始皇的时候都忍不住把他写成一个说陕西话的胖子。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子坐不住了[fn=4]</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁还记得他们第一次吃火锅的时候，包子对嬴胖子说了啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子太可爱辣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这本书我最喜欢秦始皇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太接地气哈哈哈</p>
`;
default:
			return '';
	}
}
        