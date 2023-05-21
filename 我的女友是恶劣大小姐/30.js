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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;打卡卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前小故事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;14</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《忽然狂风》这个命名有一种日本俳句的感觉，总是会想到《言叶之庭》里的“隐约雷鸣，阴霾天空”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀嘞呀嘞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧，你们也太快了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我的意志，可是，，，，，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提醒一下后面追的人，上一章后面全删减了哟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是进行了晨练</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从此君王不早朝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀嘞呀嘞</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;课代表呢？[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;缱绻qiǎn quǎn，跟着作者又学了一个词，这样下去，就算没有系统，我也注定会了不起嘛[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有猩猩跟猴子打野辣么激烈吗[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以要第一时间看，每天晚上都看的我，基本上没有错过开车[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昨天的没删呀，哪删了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昨天的已经删减了，乌鸦你还是收手吧，外面全是举报🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又少了点东西</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;去学校补觉[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然没有请假，渡边你不行啊[fn=31]</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;狼人，你藏不住的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木的颜值是几分来着？
我只记得她的力量，是八分。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轮到一木，描述就只有一句话了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咕，杀了我吧…</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边有晴天娃娃[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上大学前：下什么破雨啊，想上体育课
上大学后：🌿，为什么总在体育课前后下雨啊，我不想上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总感觉狂风正好在表演的时候来临...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在祈祷还来得及</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主线快来！</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;打不过就加入</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵，恨着恨着就白给了[fn=31]</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就被收买了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然靠食物收服了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对学姐的恋心已经被美食打败了，一木，完 全 沉 默</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃你[fn=4]</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一拉拉一宿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻婆豆腐在岛国从来不上税doge</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水煮白菜居然是川菜</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没事，到时候涂上马应龙就行[fn=4]</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;随便乱扔的其实是我的[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该不会是一木把麻衣学姐，嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常乳法，不对，辱一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;随便乱扔应该是美姬的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;随便的是一木葵的，细节迫害一木葵，好评</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我原来想着那叠乱的有可能是不在乎这些的学姐，但是又看了一下，果然还是感觉应该是急头白脸想拍照的一木的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三个后宫，一个一木</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我本来以为四川料理也没啥，但是听说有的四川人会觉得吃完哈气丢脸，我整个人都傻了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;医生＝奶妈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你需要一个长得像呱太的宫崎</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一直盯着也算没看第二眼呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟我一起，啊噗A！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hei tui！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tui～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平平无奇渡边彻
正人君子九条彻
冰清玉洁清野彻</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;出门在外，要小心好好保护自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男孩子在外要保护好自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：男生就没有隐私权吗？气抖冷！</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;幸好没对那些衣服做什么事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Lsp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁来打一套咏春[fn=58]</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛：
神，莫得感情[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冷漠的神</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;🤺🤺别人都尝试过
🤺🤺但只有我成功我渴望
🤺🤺有价值的对手
🤺🤺刺穿他们！🤺🤺
🤺🤺要刺得快刺得狠！🤺
🤺🤺我的剑准备好了🤺
🤺🤺这也称得上是挑战吗🤺
🤺🤺状态真差 🤺
🤺🤺他们不敢还击！🤺
🤺🤺锐利的剑，锐利的眼!🤺🤺🤺🤺🤺🤺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;擅自碰渡边的话，会被美姬杀掉的吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，好想</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大家都去过日本？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结城！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四川料理赵杨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;池袋西一番街有一家 做的超棒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上野有一家四川火锅还算不错，辣度可以</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;耶，公狗腰和打桩机最配哟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;公狗腰[fn=4]</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是渡边给她的枕头？</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，男女通吃啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“恭喜渡边彻成功达成一秒改变女色批嗜好成就”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要被扳回来了吗</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;第一反应是那玩意儿，我还有救吗</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是打赌了吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不吃醋吗？</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;该不会还是英语作业吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新活：清野凛在写作业</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你舅宠他爸[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是不是宠他 还放桌角</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;熟练的让人想骂人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人渣啊，帮九条做作业，抄的还是凛神的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=40]</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她只能管你这个了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼没的也太快了吧|･ω･｀)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纵容的老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师：我很紧的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是自己的老哥，得培养好（滑稽）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很紧的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;温柔的老师今天可不能温柔了哦✌🏻️🙄✌🏻️✌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个老师不教……只教恋爱[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学习看得紧，作业交的勤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要你好好学习，老师什么都答应你[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她只能管你这个了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼没的也太快了吧|･ω･｀)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的嘛？那会不会发展成讲台play？</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个监督正经吗</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;超人般的手速是用来干这个的吗[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这手速！美姬吃得消吗？</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;林星洁还在补作业</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也可以一边写作业一边激战，别有一番情趣[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有什么关系呢，彻还是处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;品酒要在成为夫妻之后？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;激战，激战，狂野！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来来来交作业了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;林星洁还在补作业</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到，要是美姬第二天早上起来发现渡边不是在摸她，而是在摸作业本，想想也挺生草的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不对劲，贤者时间不是拿来赶作业的嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;推理要在晚餐后？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，作业不是正事吗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;neta品酒要在成为夫妻后？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，一科作业一次是吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也可以一边写作业一边激战，别有一番情趣[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么激战？</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在床上
当然，也可以不在[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个点评它正经吗？[fn=7][fn=7][fn=7]</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么企图？[fn=39][fn=39][fn=39]</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不，我要紧的</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看看方便不方便</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是测试实战性能[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要叨这个我可就不困了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一只手能不能撕扯开？[fn=24][fn=24][fn=24]</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻的功劳[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么成熟吗，渡边彻功不可没啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘁～</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不行啊，我这放荡笑容根本压抑不住。[fn=33][fn=33][fn=33]</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我拿过早稻田大学GSICCS的admission，虽然我最终没去，但感觉录取难度也不是很难，你国内本科有个211以上，均分85+就可以试试，重点是研究计划书要好好写</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说日本应该不像中国一样，top1有3位，top3有5位，top5有7位吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早稻田b格还是在的，日本人的补习班打广告也普遍推东大早庆这三个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听说上智大学的人看不起早稻田的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早稻田留学生不难进，就是学费太离谱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;qs150名开外吧，见仁见智</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早稻田倒是很适合文学少女，明明理科很出彩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早稻田应该算霓虹大学TOP5勉强吧，就是在国内名气太大</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;巧了，我知道</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;然后快进到变成姐妹是吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？目标转变了？</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吸溜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵，玩得还挺花，滋溜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦呢，一只穿着白纱的乌鸦经过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！

我的浏览器传来了动静！

我得去看看！

</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯洁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜美姬太会了！！我的美姬！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条君，请务必调教渡边君，直到他能无负担穿上女装</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白希（</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊啊啊啊啊</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那泉姐要好好给你说说早稻田大学了含金量了嗷</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是放弃晨跑改为晨练的男人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王境泽警告⚠️</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33]</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一开始的美姬角色图就是爱姬⑧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实际上爱姬是非常喜欢扯猪蹄的领带的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这张乌鸦发过</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有谁能拒绝坏女人呢？
快进到，美姬小姐是我的菜[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;向你敬礼啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎！美姬 我的美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬 我的美姬[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟乱葬岗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我弟弟动了，我不看了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此时，一只穿着黑纱的乌鸦飞过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有谁能拒绝坏女人呢？
快进到，美姬小姐是我的菜[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;向你敬礼啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个小时没到就有人阵亡了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有多坏[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘶，好一个吃孩子，吸阳气的妖精</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我看看，让我看看！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑希（</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;然后渡边选择了穿村姑装</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然女装只有一次都没有和无数次</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不用克制想法和表情了，真好</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我要为你写一首藏头诗🤗

我
喜
欢
你

笑死 我对你的喜欢根本藏不住💕💕💕​</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告：最特别是她，在这一切之上是她，我的神，小泉青奈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：女装的胆子我们没有，但是借着女装的名头玩花的胆子还是有的，而且很大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚间祷告：
最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告:
最特别的是她，在一切之上是她，我的女王，九条美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噢，美姬，我的公主～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺过分的，赞助我点纸吧，看你这书太费了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐说的对[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已阅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我要为你写一首藏头诗🤗

我
喜
欢
你

笑死 我对你的喜欢根本藏不住💕💕💕​</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样的内容请多来，越多越好，不要逼我跪下来求你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我决定了，以后不当狗了，汪汪🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这特么谁能忍得了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越来越喜欢美姬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡了睡了 每晚这么晚睡就为了这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告：最特别是她，在这一切之上是她，我的神，小泉青奈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦咋回事，这两天看的都睡不着觉！我就想说能不能多写点，不差这些起点币</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看不够→_→，永远看不够→_→。我真没出息→_→。希望美姬骂我没出息→_→。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已阅</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小川对渡边
一个月前：魂牵梦绕
一个月后：还是魂牵梦绕
没毛病！[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;整整一个字典的欧拉……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甲方该死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小狗勾能有什么坏心眼呢？</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;像极了比赛前一个月的吹奏部老师：“打球的都给我消停点，腿断了没事，手不准受伤！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还真的是贴心小宝贝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这拿还算是人呐！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟我渡边也不是什么恶魔嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但凡是人干的事你是分毫不沾啊，渡边君</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做个人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噢，多么贴心的人啊</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;意思是，实际是描述的情况过分10倍。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙 你也是千骑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当你认为你很蠢时，请记住，有一位父亲要求孩子在满分100分的试卷上靠1000分</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还敢咽口水？看来是乌鸦的力度还不够大呀！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个女人想开后宫？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;才发现，一直以为自己是渡边，其实我们是一木?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你又自信了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就不一样，我是盯着一木咽口水[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木又嚣张了哦[fn=7]</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;打断施法。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是哪个傻子扼住了我命运的后脖领</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小 心 女 流 氓 [fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是哪个傻子扼住了我的后颈肉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;命运的后颈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：损失一个亿啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：损失一个亿啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木设定身高不超过一米六，渡边身高176，身高差差不多一个头，可以想象那有趣的画面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怒不可遏</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“你说呢。”渡边彻眼睛瞥着她，“你其实是男的吧”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老实点！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：臭女人  还想看我老婆 gui</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强行打断ntr施法（bushi）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵之心，路人皆知[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：一点便宜都别想占到[fn=5]</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哼</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“就算是我们三个”
凛神这显然是在明示她和美姬、麻衣一样，不是不能对她们做下流的事情，但场合不对，主要是“丢脸”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是在暗示九条-清野-渡边彻</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;传说中的ASMR吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给大佬递笔～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这……这触及了我的知识盲区。我不禁感慨，这也行？！不愧是你，渡边彻！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“听着她们换衣服的声音，能让我多下三碗饭”多年以后，渡边君这样回忆道。</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;被子裡的小徹說到底還是想看看世界，於是穿過了囚籠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻底裤被看穿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被彻看穿底了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被彻连底都看穿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻被看穿底了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻被彻底看穿了</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;选C，九磅十五便士</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;校服，便服，制服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是传说中的心中无码自然嗨？？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你！渡边！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;照这么算当初太太在房外怕不是连哪根手指都被听出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：我是钢铁……啊不夜魔侠[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得要把一木抓出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;教练，我想学这个👆🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛酱声音最小</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想象力，已经超乎常人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;介，揍是东京帅哥！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是目测三围的男人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33][fn=33]</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;葫芦娃：让我们来场智力的风暴！</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;久美子😭😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻还算是主角的救命恩人呢。如果不是好美好攻略，拿钱就能换积分，那渡边没有那五千积分御茶之水就没了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是我记错了？ 渡边彻不就是用她过了一点新手任务么 我记得什么都没干啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这个画面想到了久美子
呜呜呜，我的久美子[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铁工具人[fn=10][fn=10][fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻好美，毕竟是恋爱系统首个攻略的女朋友呢，给渡边君提供了宝贵的原始积分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害角色一号</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咦！不认识的孩子呢[fn=4]</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;面前</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在她们面前</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;噗  我以为是在认真思考  是我太正经了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;角度刁钻思路清奇</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;强行控制住颤抖的手，当心404[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对于这种情况，我们应该相信——
未来可期[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来有点看不懂的，当我打开评论就什么都明白了，还的是书友们啊，让我大彻大悟，给我决困惑，谢谢你们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉青奈跟学姐可以争取一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了运动两个字是吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;群p是梦啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强行控制住颤抖的手，当心404[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对于这种情况，我们应该相信——
未来可期[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;p是一女多男，fly是一男多女，同志们请注意用词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3p—每个男人的终极梦想
—王尻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意思是他觉得这辈子不会有机会，让清野神和老师她们一起4p了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚上睡觉什么样的姿势可以做这个梦啊？</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;细嗦🔒😋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这层里的所有人靠边站，每次扫黄都有你们！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这吹累了，他正经嘛[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原谅我想多了[fn=58]</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;多白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉(゜ロ゜)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这反应应该是个典故:过去渡边和国井曾聊过，从上方看女孩子领口[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到好美卡牌的设定图......</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;换了一个能让他看的更多的方向</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想太多就会败北</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hentai～</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥→首相→九条彻→25岁退休</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;后宫不在起火，大家和平相处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总有一天大家会成为一家人[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大被同眠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是十二翼天使</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家都有光明的未来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总有一天大家会成为一家人[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总有一天你们都是我的翅膀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一切都在不可避免地走向庸俗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大被同眠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不不不，你一直都像一个普通人（性格），不过是普通人性格较好的那一面的pluspro高配版</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;普普通通渡边彻？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我全都要？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后宫不在起火，大家和平相处</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小怪兽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我TM又想到了绘梨衣，我要去刀了江南老贼[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说到巫女，为什么一直没人发这个啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;城管</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桔梗大人！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;OK，今晚就她了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;kuso，穿巫女服的居然不是凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟死了！</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老婆！</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;披发左衽，束发右衽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“但”换成“在”通顺一点吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个y很精髓</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;黑兽？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我看看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;mirror？！那你得变成触手怪！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;魔镜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示新书后续[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;WANZ-352 质量还行，不过有多人运动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听说岛国以前就是通过这种方式和神交流，混乱情况和中世纪的教堂有的一拼(●°u°●)​ 」</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;缘之空吗？
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尾行的巫女线么[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖～起飞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑兽？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;subscribe</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达咩，雅美罗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牙白，直接接线桔梗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梦想封印警告⚠️[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我看看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？你被捕了</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;斯巴拉西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太美了！太美了！</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;少爷的大升格！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈老师你好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摄影的精髓，你们这帮玩儿器材的永远不会懂[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是sp的正常打开方式，一木什么的都弱爆了</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;OK</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个！这个！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;魔女的悠闲孕期？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请指导我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《black bible》？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你把你实验报告给我交了（振声）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个游戏我见过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额，mirror爱好者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不就是魔镜嘛[fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逆转魔女裁判？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玛菲卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喝下女巫序列七魔药[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是猫DLC的剧情吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个好！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喝下的是雌激素。邪恶实验是化学阉割</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请指导我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;魔女的悠闲孕期？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丽莎。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;gkd，一定要写出来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;行了，快进到产后护理！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我相信你的实力，请一定描述出来！拜托了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莎莎！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿祖在等待</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请描述出来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;rabbit vs Tank
撒，开始实验吧</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野不懂男女朋友的情趣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平成大佬的肯定[fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33][fn=33]</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没胸的，她是个A</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没胸就很拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;婚纱（幻视）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应有配图</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;天使降临我身边[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时间停止系列[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神！</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神的偏爱，应该说独爱才对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偏爱啊～</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;五等分花嫁（印证五人于彻的婚礼[fn=32][fn=32]）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果是深崎暮人来画就好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要宰也宰，渡边狗贼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;婚纱！这不把我宰了给神的婚礼助助兴</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;资本小仙女[fn=17][fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;资本家的版权意识©确实强大</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;言下之意是，应该想想涩涩的事</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然还是雪之下雪乃啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;壮大清野家？多生几个就可以了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野家缺这点钱？清野家缺的是让凛穿婚纱的人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说是吧，清野彻</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吾辈还没有抗体</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我每天都要看妞.JPG</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是没做那个任务……</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是这个吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天下布种!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的翅膀！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有无老哥画出来？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周边！[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木是去证明普通人类的存在的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扇子像被子，不过混进去了一个奇怪的东西？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全家福！（无视一木）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一整个后宫大家庭
什么样的姿势可以做这种梦？</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;光翼展开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：一切尽在掌握之中！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就是那个开后宫的人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打开新世界的大门</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你这种人为什么会用剑，因为我刚好有一把[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚好一把可以把你们全收了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚好有一把</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;磨穿铁砚  话说辉夜大小姐这里用典不当</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条家传</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空银子:折扇啊，我也有呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;率土之滨</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条家传的是团扇不是折扇[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是哪里的啊？有课代表说说吗？</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么样的低声呻吟？[fn=39][fn=39][fn=39]</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神连自己没有的概念都能从渡边心里读到吗，，，，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一杯新的米露!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嫌弃脸太戳xp了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神读心渡边话，就是说神看了渡边和美姬的直播[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神：我穿这么好看你就不能多看两眼回味一下吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对彻专用读心术</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人前有多正经，人后就有多**。清野不回也这样吧（奸笑）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，果然神抢了渡边的读心术</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都被神懂完了</p>
`;
default:
			return '';
	}
}
        