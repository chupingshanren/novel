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
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段有意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了！我最喜欢的一段剧情来了！</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦始皇定的接班人是他哥</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉吕布只接两锤主要还是迷眼睛了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕布在这本书里应该和项羽差不多，不是接两三锤就不行了，看他那状态还能再接四五锤没问题，但是自己也知道十锤之内铁定完事，所以不打了。被抓不是迷眼睛了吗，又被李元霸拿锤子把捅了一下痒痒肉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;春晚的梗啊哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对呀，就像打动作游戏把眼睛蒙上，一般人都打不了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕布没那么垃圾，边扛李元霸的锤，边被往眼睛里扔沙子，这谁扛得住啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真正的盖聂没有出场啊。。。。小赵只能发挥一部分能力，还有体力限制</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千万别让他们知道二胖的存在~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉吕布只接两锤主要还是迷眼睛了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕布在这本书里应该和项羽差不多，不是接两三锤就不行了，看他那状态还能再接四五锤没问题，但是自己也知道十锤之内铁定完事，所以不打了。被抓不是迷眼睛了吗，又被李元霸拿锤子把捅了一下痒痒肉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;混乱出现过的人战力排行个人观点：1李元霸2项羽3赵白脸4宇文成都5裴元庆6吕布7樊哙、章邯（樊哙英布章邯差不多楚汉并列第二吧）8雄阔海9伍云召10关羽11伍天锡12张飞13赵云14张辽15罗成16卢俊义17定延平（按实力本来应该比罗成强）18杨林19魏文通20左天成21王寅22石宝23关胜24岳飞…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;裴元庆能当李元霸三锤(人基本还行，马不行了)；吕小布能接李元霸两锤(人不行了)；宇文成都使的四百斤的鎏金法杖，按战绩看应该处于裴元庆和吕小布之间。
到其他人那儿就基本一致了，都是一锤子买卖，最多分个80和40罢了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;战斗力单位——吕小布</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;林冲用的是丈八蛇矛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一字长蛇阵</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俱往矣，数风流人物，还看今朝！</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;火火兔？应该是10后才上市的啊，小花看来穿越过嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爸爸的爸爸是爷爷那个小兔子么？那也是要电的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书里的兔子能文能武的</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给你带个会唱歌的李师师，太萌了哈哈哈哈哈</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金杯本来就是十一座啊！哪怕过道活动扶手座不放下也是九座</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是对中国国情不了解，把金杯的后座拆了换成马扎，坐个十几人还是很轻松的</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;慧能会装，神秀务实，看来会装的人从古代开始就吃香的很阿，教义也就慢慢的装了起来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;买张机票去韶关找六祖慧能金身探讨去呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前一直以为玄奘取经是在禅宗六祖传完以后的，长大了书读多了才知道玄奘和四祖道信是一个年代的[fn=48]</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那得去见达摩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是那个学生一提问佛法就拿大棍子打，甚至有个被他打下悬崖的高僧吗？</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;祝无双的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有个阿朵拍的广告吧。叫什么猫人惹火？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;倪虹洁的那个婷美广告</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是无双拍的那个？</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求求你不要推了，推一本黄一本[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花，奶一本太监一本</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是一本坑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一年后的前几天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;退出去一搜，九年前更新</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平均每天几百字？</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书的大高潮来了。[fn=4]</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那肯定祸祸了啊 金兵还能等你几小时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都反抗了，没被杀真是幼儿童话故事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少时不懂历史看着没事，现在都屠城了，还一个打昏一个带走……啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看，不好好学历史瞎穿越就是送</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种情况不应该是打晕吧，都拼死反抗了，洒了洒了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国破家何在啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;住燕京那特么叫隐居嘛……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不搞一手 恶堕</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;燕京啤酒啊！</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史白痴啊，杭州泉州广州都去的啊，偏偏去辽国。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强行降智推剧情，网文作者基操</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是个BUG李师师的智商应该肯定知道南北宋的历史呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金二属实白痴，不了解历史水浒总看过吧，辽刚跟梁山打过仗也不该去啊。马上就该南迁了还往北走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;属实缺心眼子，北宋末年还往北边跑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;缺心眼，要跑也是往南方跑吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋朝时候脑袋有包才往燕云跑。杭州还没发展，要去也是淮扬啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来金少炎的历史也不怎么样</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尖角星人要杀进去救人还是很简单的</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完蛋鸟，这个金兀术可是有把宋朝公主爆缸的先例的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果是《说岳》里的金兀术倒不用担忧李师师的安危，那就是个金国版的岳爷爷，有能力的道德完人</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;地理不错历史太差实锤[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;稍后小花就说明了这点，历史知识不好的是小强不是小花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的历史水平忽高忽低，有些历史差的人不知道的事小强都知道，有时候却像是历史白痴……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是啊，他不把北宋打了，哪来南宋</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你知道还往北京跑？！</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;管他干屁，自己想跑还拖泥带水，该</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当时兀术的西路军貌似四万不到，还算上郭药师的两万怨军</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然没有通过李师师见宋徽宗燕青又怎么会吃醋</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手摇发电机呀。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;80不是有柴油发电机了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;带充电宝去吧，还能换着充电</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;bug了 等下3 4岁的过来帮你打仗了</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雨刷不是坏了一个嘛</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真能开个到也不错，就是那时小麦不够普及，只能用小米面做皮</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肯定玩没电了</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈一划拉不玩了</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扶苏去哪了？</p>
`;
default:
			return '';
	}
}
        