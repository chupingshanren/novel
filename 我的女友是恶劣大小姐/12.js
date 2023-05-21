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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;9呐？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;9不见啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九丢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书已经从我的睡前读物演变为了早餐读物[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都有人等</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大半夜的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;困</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了，差点睡着了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完就睡啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不活啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第十二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，修仙呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;守夜冠军～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们好快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡了睡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神说要有光</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发光</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬说的没毛病
彻的对凛滤镜越来越夸张了。[fn=31]
</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九怎么没了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天也被我自己帅醒[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也就，三点而已嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嚯，差一点我也能看到早晨的阳光了……真有你的呢，乌鸦桑</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;然后靠在他肩头的美姬啪叽摔在地上</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可怕
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;困觉姬今天也被被窝所击倒[fn=31]</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那当然！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里是清野的读心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是的！清野神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;起床啦，你这个debu</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;唯一神宣言！</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;像极了我原本说假期一定要好好锻炼，早晨起来就跑步！
假期第一天：不行了，下次一定
第二天：下次，下次一定！
。。。，。，
快开学：算了，都开学了，效果也不好。。下学期一定！</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没人？不正常啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有在睡迷糊的时候是百分百的娇。
不愧是你，困觉姬[fn=31]</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你就充他爸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能撒谎的新虐狗方式</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实在是太可爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，哈哈哈哈，哈哈哈哈哈，
该用什么表达我此刻的心情，啊哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的天啊，清野不能撒谎这点在跟渡边相处的时候，简直太可爱了！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你舅宠她爸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好气哦
不能撒谎，只能承认的凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，神也太惯着渡边了吧</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就看到这里了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别漏了（狗头）</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今天的萨纳兰依旧艳阳高照啊</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;用攻击来遮掩害羞的凛[fn=31]</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这么恼，不会是拔了根毛吧[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬越来越温柔了，以前估计就要开枪了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大小姐的起床气·JPG</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有起床气</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我的R桑啊哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然不需要，我的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛已经足够可爱了再可爱世界就有危险了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的可爱，人尽皆知</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这。。。cece？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你以为我们交警会相信你的鬼话吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正在蹲厕所的我：？？？</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡（动词）前摇一摇[fn=31]</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今日份的经典复刻
《美姬在睡觉》[fn=31]</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;别摇了，要晕了，头大了，要吐了，口吐白沫[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再摇彻就要吐白色口水了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晕什么[fn=31]</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔注意要考的</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太危险了，容易肾虚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就宠他</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;困觉姬的一天，从彻身上开始[fn=31]</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;已经和青年夫妻没什么两样了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜噜呜噜[fn=31]</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;以后以凛的体力。怕不是不能早起，而是一天都起不来了。</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;记忆力真好</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画 《美姬在沙发上睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此🍋🍋🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一点都不酸 o(╥﹏╥)o </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个猿人笑什么笑🍋(ಥ_ಥ)🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;默默无言水起了字数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ヾ(´∀｀。ヾ)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(づ′▽')づ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画 《美姬在沙发上睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完全当美姬不存在啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;.</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边套路神，但神心里清楚也愿意配合。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赶紧的继续之前的想法，美姬和凛出演《罗密欧与朱丽叶》！</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;请务必让我来演</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一部动漫就是这个剧情，主角每一集都调戏他的女仆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我演大腿可以吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在现场，我是观众</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边想看女仆装的愿望</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我当个桌子好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我演渡边的手好了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我演椅子就行，被美少女坐的那个，真的</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不，是乌鸦在叫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，我的乌鸦</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野也会命令智力低的单位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛已经带入贤妻良母的角色了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;带入一下小莲，突然感觉好害怕</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一脸嫌弃的给你看胖次，虽然啥都没露就一个胖次却还是被禁了，有两季，都比较短</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一脸嫌弃的给你看胖次。好像有这部番</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看，啥才叫专业</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下本书就写这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某粉色app里面有一脸嫌弃给你看胖次漫画</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;村上水军有话要说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很从心，然后没有完全从心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一脸嫌弃的给你看胖次，虽然啥都没露就一个胖次却还是被禁了，有两季，都比较短</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;筒子们，该贴40原老师的插画了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边你还说你不是抖M[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个就很现实了哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一脸嫌弃的给你看胖次。好像有这部番</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我非常的丑陋，这个角色很适合我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶啊，这种丑陋就让我来承受吧</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛百科妈妈课堂开课辣[fn=31]</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛还没小莲快[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯……无端联想……哦……有趣……</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是能让人两人彼此放下偏见，互相关怀，互相体谅的话剧</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;隔壁陈汉升在学外语（不正经外语）【在多少章我忘了～～】</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我个笨比，没有凛的点播，还真没看出来上一段又是双关</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;月色真美啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天气卡组</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;掩饰就是事实
在凛面前尤其如此[fn=31]</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这一段的评论都是什么鬼，从哪空降来的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，乌鸦，你太短小了[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我养了一星期怎么一转眼就看完了？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊 都看完了啊 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的小泉老师是不是没啥出场机会了，可恶啊！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜我小泉老师这时候应该还在为⚾棒球部伤心，即使她已经快一个暑假没有见到渣男彻了。永远学不会偷跑的老师[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲爱的鸦桑，你已经5小时都没更新了，阿美瑞肯的fbi编造兔子威胁骗经费都不敢这么歇。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶，学姐终于要来了</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;耗子的腰子多大个肾！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的印象就是惊悚乐园用到的雪舞九天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是八嘎么芭蕉桑？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雪舞九天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芭蕉桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;松尾芭蕉？居然是那么正经的角色？我还是习惯日和里那个</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在鄙视看裤里我最喜欢女仆了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;转移话题也是不打自招啊</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彼鹃横江，声鸣漾漾。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鹃鸣于江。</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶✌🏻！学姐终于来了，我还以为乌鸦忘了学姐了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐，终于来了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说来就来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐终于上线了！学姐赛高！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣，麻衣！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我直接好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我方开团手即将入场[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐终于有剧情了</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可惜，中文诗词只有用中文读才有那个韵味</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我傲慢的认为这句俳句，不配与苏轼比较。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个背《赤壁赋》的，停下，背什么背，哦，还有你，对，就是你，别背《逍遥游》了，大家都停一停！今儿我来这就说个事，昨日我听闻“众女嫉余之蛾眉兮，谣诼谓余以善淫 ”，我在此郑重说明一点——这不是谣言(。・'ω´・)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逝者如斯，而未尝往也。盈虚者如彼，而卒莫消长也。盖将自其变者而观之，则天地曾不能以一瞬；自其不变者而观之，而物与我皆无尽也，而又何羡乎？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得昨天群里还有人说在背《赤壁赋》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白露横江，水光接天，纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸦桑，你高中语文还给老师了吗，这是赋，赤壁赋，“君子登高必作赋”，不是诗啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦已经掠过，声音还停在读者耳畔：
咕咕咕~咕咕咕~[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以有啊 鸦桑</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有的人活着就是为了麻衣学姐，麻衣桑，dai si gi</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;以前和朋友骑车出去玩，遇到车滑链也是这么干的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看成骑在渡边彻身上，我还有救吗？[fn=12]</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不太喜欢学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《学姐的入场加冕》
此刻将无人知晓的思念寄托于此 我的眼中空无它物 我的眼中只存见你 无垢的声音在耳边流淌 万物的选择是指向唯一 若要我诉说祈求的话 此刻恳求我神侧耳倾听 请再次给予我希望 请再一次予以宽恕 我愿坠入虚实矛盾之间 我深深眷恋的场所 轻轻闭上双眼 浮现着Ashita mai的真名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新的风暴已经出现[fn=31]</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;耗子的腰子多大个肾
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说的训练，它正经吗？</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬好爱[fn=21][fn=21]不愧是我的女人～～</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木：和学姐在一起真的太开心了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐好聪明</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作为工具人，一木真的是物尽其用了，虽然很惨…噗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬晚上发现量不够</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老工具人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出场必迫害的一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：和学姐在一起真的太开心了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：偷家，我是专业的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好惨一木葵[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神川输了一木不用去应援了……合理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？  一木同学全麻，快进到经典构图</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻：看我把这张说谎的嘴堵上[fn=9]</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笋干清醒[fn=31]
困觉姬：你提这个我可就不困了啊</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;兵库？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时间这么精细的吗，还是说学姐预谋已久受不了了</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学生行为</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得很正常</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜～喜欢一个人儿，而不是说，有没有活儿？知道不知道不？喜欢一个人儿，shi～而不是说有没有活儿？喜欢他，就给他刷点[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是美姬觉得很委屈，觉得自己没被理解，刚刚接手家族事业，肯定很不容易，结果自己所认为最亲的人还认可自己，她感觉自己被背叛了一样，很委屈，却又没地方讲，因为她要维持自己的形象，因为她的背后是九条家的先辈，是九条家世世代代的努力，她很骄傲，不会让这份荣耀从自己手中失去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就证明凛对美姬的喜欢也是现在进行时[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以以前清野经常挑美姬的刺么[fn=11]</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有渡边的棒球社没有灵魂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主不在乎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我是警察。”
“谁知道？”</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;输给大阪桐荫不是很正常的事情么。</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野染个金毛，活脱脱的少女漫金毛傲娇败犬……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句描写，以鸦桑的文笔来看，我就打八分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不但当着我的面撒狗粮，还当着我的面诋毁我。
凛:这种事情，我决不允许</p>
`;
        case 175:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实这里不是东京，是京东，渡边彻是京东帅哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不懂就问，不是盂兰盆吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是盂兰盆吗</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;轻井泽军阀佳织酱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就是放养的呗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;希望喵帕斯还能有一些有爱的戏份</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好吗！成帮派了</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不是是晨练少女，人家只是出  早  操</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道不是吗？[fn=31]</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊 出线都费劲直接杀进半决赛了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以听听他们的应援曲ダイナミック琉球。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大阪桐荫吹奏部，yyds！18年的夏甲太牛了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺厉害的，不会还可以夺冠吧</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;rox跟skt（）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打进四强就算成功!
重振神川荣光，我辈义不容辞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有渡边彻的棒球队在甲子园有竞争力吗？</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;打宇宙桐怎么打得赢啊[fn=44]</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;让我看看有多少人想歪把太太算进来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊下意识以为是太太他们，忘了老师麻衣了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实嚯，你们不觉得就这样和太太们一起五个人很是温馨嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞬间想到，瞬间又重新想到。大家都一样吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，三巨头有四个，四大天王有五个，所以五个人再多两个也是没有什么问题的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我看看有多少人想歪把太太算进来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波是，这波是一语双关啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以为鸦桑在说现在轻井泽的五个人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊下意识以为是太太他们，忘了老师麻衣了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此时此刻需要这张图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边手边就有两份丼饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：我不装了 
我要开后宫！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪五个？有一瞬间我想……不，我什么都没想！404走开！</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;木里deus</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是已经80%进度了🐎？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就像渡边说的，这是“不可能的事”
但是，奇迹那么容易出现就不叫奇迹。
温柔的东京帅哥啊，去化不可能为可能吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始自我欺骗了
东京帅哥没有不可能</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野不同意渡边的小三，渡边也不可能放弃占有学姐和老师，所以不可能</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;懂了，你找这么多女朋友就是为了让美姬晚上轻松一点，真是舍己为人的绝世好男人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有人在夜晚分担就可以不那么累了，就可以不整天睡了，好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬睡不睡觉不是取决于你吗，渡边渣？</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;梅开四度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对凛偏爱[fn=31]</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以另外两个情人是比不过女王和神的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后两个人一起上手术台被解剖，完美，✌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每日吟唱
最特别是她，在所有一切之上是她，我的神，清野凛。
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯一神 清野凛</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟已经爽过了，渣彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成也败也</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不怎么信</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;但神会拱火啊</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;莫非渡边要濒临死亡一回?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么叫五年大佬？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实经过这段日子的相互习惯，感情已回复的差不多了。
只差一个契机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的谜之自信[fn=58]</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神不会生气，只会闹别扭。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会闹别扭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清廉正直唯一神[fn=31]</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;懂了，美姬就是俄式救援支持者，既然用人质威胁，那么就把人质撒了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;游戏运营方：我们接到玩家提出的BUG，我们技术团队耗时一周，把该名玩家消灭了，现在BUG解除了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：首先，我们解决掉提成问题的人
彻除外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要没人提过这个问题，就不是问题了呢</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬是不可能和渡边说贴心话的，毕竟两人之间有辣么大的阻拦物[fn=58]，换做是凛酱的话还可以[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就没一个能像黑绝一样，说点掏心窝子的话？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来自渡边的枕边风～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就不能三个人在床上一起说贴心话？？？</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边猫:懂了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大概需要通过伤害彻来创作这个契机了</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我懂了，只要美姬不用继承家业就可以了</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;除非九条4岁那年清野3年级，否则作者搞错了。
正确的时间线应该是：清野4岁觉醒能力，开始只和九条玩。九条3年级父亲去世，开始撒谎，两人闹掰。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得前文有讲，不是四岁死的，小学时候吧。四岁是清野凛有看穿谎言能力的时间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;4岁之前的事情我就记得几个画面，而且是只有画面的那种</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们可以推断出来，九条爹是在美姬4岁死的</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;人家作者都说明白了谁都没错谁都有错了，评论里还在争论到底谁错了。。。。
是你懂还是作者懂？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;理性的讲，错的毫无疑问是清野，宣称从不说谎的她自己也很擅长用转移话题、引诱误导之类的伎俩，这个与说谎的边界究竟有多远呢？
在九条当年最需要帮助的时候，是她用说谎就不再做朋友的方式放开了手；就像在渡边最需要帮助的时候她冷眼旁观一样，错过了最佳的时候，把事情拖到近乎无可挽回</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以只要让清野失去自己的能力，就解决了。
后面的系统多半和这有关。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起泛式所说的日式嘴炮。我来一段啊。
可是，为什么，清野/九条你要露出这么痛苦的表情啊！如果你真的开心，就不会这么痛苦啊！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;需要一个让彼此相互谅解的理由</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为谁都没有错，所以才痛苦啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还是觉得啊，神的能力和渡边有关，所以说错的是渡边</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和服三人组，没有教师服，省着看吧……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好久不见的老师组</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好像有顺风耳之类的技能吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐来找他了</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师，yyds！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师好助攻</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师成长了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶  现实问题呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意思是后宫和谐，大家就都幸福</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可问题是结婚的就一个啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这边也是一生一世2点5双人🌝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我要扼住命运的喉咙！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱是相互包容，合为一体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？刚刚第一次说五个人的时候我还以为算上了两个太太，看到这里才反应过来是学姐和老师。诸君，我还有救吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉又像单了，不像后宫了[fn=31]</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;t h e</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师 和学姐只是情人，海王的胜利罢了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;交换身体吧少女们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有人受伤的世界，达成了！（海王脸）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不快进到柴刀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到达全员幸福的世界线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真正的朋友是相互包容的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;思考了半天，想了个寂寞[fn=31]</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;胜利的法则已经确定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和神在一起么  以至于神愿意为你和美姬和好</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哦哦哦 ！！  终于要行动起来了吗，等你好久了！</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;回来看假睡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;chance！
凛的回合！[fn=31]
</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;校门口土下座免不了了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一袋米扛几楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈 没了挂壁 自然败北了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就没人关心关心可怜的棒球部和国井吗?[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈的愿望实现了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神川输了，那青奈不就有空了么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传统节目，带一袋土</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是为了让自己不后悔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我觉得，这本小说目前为止我最喜欢的那章就是棒球赛那章。特别是那个任务说明，真的好燃啊！在最绝望的夏天，用绝对的实力击败本届甲子园最具天赋，最努力的棒球手！</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没什么仇，只是觉得遗憾吧。天予不取，反受其咎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;升米恩斗米仇，人性不外乎如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟朝九晚五太变态了，九九六才正常一点，零零七才是完全正常嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主不在乎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从理智上说，中国这种人都不少，更何况知小礼（？）无大义的日本人，你们难道不觉得中国在世界上已经是最正常的了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;升米恩，斗米仇。你前面帮了人家大忙，后面不帮了，人家能不怨你吗?🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该不会有这种rz吧</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没记错，是四十几的章节，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人是团体型的 ，除非的无欲无求的真神。如果特殊情况下，为了那几个人，你一定会改变的 。。一切!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我打定主意，从今以后，无论发生什么，不管别人说了什么，我都要不为所动，做我自己。
另外，绝不同情自己！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加一，哪一章呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪一章啊</p>
`;
default:
			return '';
	}
}
        