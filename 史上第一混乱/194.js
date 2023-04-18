$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂王么这不是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有人[fn=57]比我[fn=59]更懂[fn=27]教育[fn=63]</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本纪怎么不行?三个上本纪的跟小强混</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;司马迁：我没说过这话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来以为是调侃  现在想想其实算伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多大事，李白看诛仙写现代诗，某画家被小强带坏去画超现实主义，司马迁写个本纪有什么难以接受的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不关有几个皇帝的事。本纪就是帝皇纪传，是写人的，育才是学校不是个人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;司马迁下面没了。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后就太监了。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滚[fn=37]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本纪怎么不行?三个上本纪的跟小强混</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该写育才世家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;育才这是要造反呐，本纪是用于记载帝王的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫司马迈更合适</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;司马迁：我没说过这话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下一个就是司马迁了吗？</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是司马迁会来呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太史公呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;煞有其事……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;司马迁：mmp</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好不容易选了个胖子，演的嬴荡还被鼎压死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有的啊，朱高炽，胖死的[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才叫伏笔！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱高炽啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦~~这么看来李雪健演嬴政还真合适，那嗓儿~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李家皇帝里应该就有胖子，李唐皇室有记载体型肥胖的就有不少，而且很多家族成员有心脑血管方面的疾病，和肥胖是高度相关的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;养尊处优之后多数都是吧？我看百科里的画像穿着龙袍的多半挺着大肚子，想找个瘦条的都难</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桓玄，胖得把龙椅坐塌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好不容易选了个胖子，演的嬴荡还被鼎压死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;安禄山，也是皇帝，超级大胖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有的啊，朱高炽，胖死的[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北斗下凡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿傻笑的荆轲</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没酒精中毒真是命大[fn=14][fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种问题。。。。。。小孩子是真不能喝酒的，伤脑子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这孩子的数学绝对是体育老师教的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;友情提示，酒精对小孩有害，可能损害大脑，很多危害，可不能瞎喂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈 上辈子没吃上 这辈子补</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两杯半难道不是半两。。。。</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子是个好人啊</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥看见自己的面包变成这样不会暴走吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不换车你会后悔的</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我初中的时候，我们班主任也整过这幺蛾子，早起来教室的可以把名字记到板子上，学期末统计谁记得多可以发奖状，我也发奋图强，早起了一个星期，但发现每次起都不一定能记上，后来就一星期记一两次就算，到了最后班主任就发了几张奖状，根本轮不上。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹小象跟时迁学过之后半夜窜进去写完名字再回去睡。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前班里同学有钥匙开教室门，然后他早起钻教室里不开灯，等来人了吓他，等人被吓过一次之后就加入，那一阵我们那一帮孩子都嗷嗷早起，进了教室也不开灯，靠着墙潜伏起来吓人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一年级考试，班上三个双百。因为我练字练的页数更多，排第一。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒个泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这事儿。。。我干过。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要说早起玩游戏，我儿子三点就能起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这些历史名人起码都起的早。不过也可能古代没有灯，所以睡得早生物钟习惯了</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是不是红楼梦的梗啊哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下想太多了吧，一直以来大家对段的坏印象都是因为他出手过狠，佟媛没有说什么只能自己打别人不能别人打自己啊，她甚至都没有说段什么不好的话，这跟女权有什么关系？真是什么都能趁机扯上女权骂一顿。两个男生踢足球被对方踢了腿耿耿于怀的也不是没有吧，有点不爽不是人之常情吗</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;煮豆燃豆杆，豆在锅里喊。都是一个爹，为啥要杀俺？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实是二哥，大哥是曹昂，已经为了曹操而死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当时死了曹昂，曹安民，典韦。结果老曹之后还是继续玩人妻，他这小弟弟跟了他可享福了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孙策，孙权:权策。
刘禅，刘让:禅让。
曹操，曹仁，曹真，曹爽。
你品你细品。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老大为父亲死了，我记得曹操特别愧疚啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹昂老大，曹丕老二，曹彰老三，曹植老四，曹冲老六。不得不说曹操前几个儿子质量都很高啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹丕是老二，老大曹昂战死捏</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还惦记着批转啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;劈木板子，还能当柴烧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;专业户</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玄奘？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要慌，社会关系学的老师也快来了</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉好久小强没回当铺了</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你都不知道这是小花的包袱还是错误[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四大天王有五个，这个没毛病啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;富二代归来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我演我自己！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下几个幽默细胞都死翘翘了吗……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;师师都是师字，算一个字，我只能这么解释了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5个字吧[fn=10]</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯…有那个戏吗？我就问问</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这年头真心想把戏拍好的导演不多了……</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;松鼠小子</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以便宜了林志玲？[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想的是没人吐槽赤壁嘛？表妹去了演谁？小乔？孙尚香？还是那个舞女？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花明显不懂拍电影，正常电影三四个月就杀青了，投资小的网络大电影在横店拍一个月就杀青的也有，拍一年的那是王家卫……</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我到现在喝啤酒都会觉得苦的想撇嘴。</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实秦始皇文才不差</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用句2021年的俏皮话说“伤害不大，侮辱性极强”。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强:表妹所言极是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5人组开始分开了  哎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜剧大片[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈心疼五人组之四</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2333</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史还是可以学一些滴</p>
`;
default:
			return '';
	}
}
        