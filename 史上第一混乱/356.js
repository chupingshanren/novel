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
<p>&nbsp;&nbsp;&nbsp;&nbsp;又油，又腻，又滑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来，跟我唱，长大后～～～，我就成了腻～。</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有谣传说我没什么本事，在这里我澄清一下：这不是谣传</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞅你们这点出息，等唐僧来了让他把猴儿喊来，让猴儿把牛魔王喊来，让刘老六把他外甥喊来，这仨吃完饼干，你这半个小时想干啥干啥，这地界没有能治得了你的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;野生奥特曼也没嘴吃饼干啊</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;够远</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你昨天的浏览记录是。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你小时候掉到粪坑，被人救出来边笑边打嗝</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这里不难猜。他之前说喜欢三老婆的虎牙晚上咬他手，就是说明他有点M的体质。加上他一直喜欢打老婆，其实S的尽头就是M。所以厉的秘密就是其实他是个M。</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天试一个仰卧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仰卧起坐 晚上仰卧 白天起坐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一天一个一个一天？ 一天一组 一组一晚 休息一天在继续？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这在我们老家叫趴着睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;分解动作演示么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真他娘的是个好方法~</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在涨到5块了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是5块吗？</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实小花也不知道啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刷第三遍了，还是好奇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿山甲到底说了什么？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;网文第一未解之谜：八大天王的不可说到底说了什么。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢打老婆的男人，多半性功能有问题。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到底说了什么呀？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“其实你死了，你是你哥哥”。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以小花这么猥琐的人品来看，一定是见不得人的事情。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可告人的秘密！[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实小花也不知道啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道是县令老婆？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有书友开开脑洞吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刷第三遍了，还是好奇</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了这么多遍，才发现是我死你活</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿山甲到底说了什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老手艺人？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实小花还没想好是什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿山甲到底说了啥？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿山甲，，，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢被咬，我怎么觉得是抖M</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大概是怕老婆吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我郁闷，我纠结，我头发一缕一缕分往下捋，到底什么事啊，</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花数学可以的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强前世的岳父吧，老会计这账算的啪啪响。</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里得加个蛋，要不和刘老六一辈了</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回去给小六吃个饼干！[fn=8]</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在看到呼延灼顾大嫂就会想起呼延大嫂哈哈哈哈哈</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦，原来“这个妹妹是见过的”啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能痴痴啊大兄弟，把持住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这妹妹我是见过的</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历代家主都叫张起灵？历代掌门都叫刘大彪？</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金杯十一坐，这才哪到哪？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强啊，你这面包车是阿三家生产的吧</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妻管严的大将，哭笑不得啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也太惨了</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了有一次我爸换手机号给我发信息：我是你爸！我二话没说回了个：我是你爷爷！回家之后就被揍了[fn=12][fn=12][fn=12]</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好只是换了弓。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前说猜错了的，其实还是猜对了，冉冬夜才叫强哥</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“......”指“讨厌”</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我办我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老王厉害啊</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西方：牧羊人的老爸就是木匠？</p>
`;
        case 112:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用点子智慧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;聪明啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真省力</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包治百病[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看过的也就花儿可以把搞笑与生活融入得这么滋润了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浓浓的生活气息</p>
`;
        case 113:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈 神特么佛家的智慧</p>
`;
        case 114:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和精神分裂差不多[fn=33]</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;探监或上坟的语气……</p>
`;
        case 117:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方腊在金老爷子手下是明教第一代教主。郭靖他太爷爷是赛仁贵郭胜，那梁山就是唯一一个剿灭明教成功的武装组织，实力比六大派强多了……</p>
`;
        case 120:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个时候有猎枪吗[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唱起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家就不想当皇帝，咋就哀上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段话说的……好悲凉……哀其不争啊……</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还挺可爱</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈，你不会是偷窥狂吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 127:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了这几个问题硬是刷了几遍水浒传</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊……憋死我了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年看了这章以后，我想来想去实在想不到自己身上有什么这样的事情，干脆就想了一个暗号，要是以后我自己要和自己相认，直接对暗号就行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方蜡女扮男装替父造反</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一个春梦对象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方杰不是你的侄子，是你的儿子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你24岁那年长的痔疮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;12年看到这的时候就在想秘密是啥，现在都不知道第几刷了还是想知道[fn=61]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神特么不可说。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怀疑他是机器人[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了这几个问题硬是刷了几遍水浒传</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪位大哥满足一下我们的好奇心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我郁闷，我抓狂……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们好烦啊
有脑洞侠满足一下吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊……憋死我了……</p>
`;
default:
			return '';
	}
}
        