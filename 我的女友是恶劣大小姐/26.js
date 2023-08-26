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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;(●—●)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标题越来越随意话了[fn=11]
要完结了[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;更新了!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：确实，纯路人，有一说一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，人员组成是渡边和他的后宫团和一木，这不使劲迫害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：我像个小丑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该剧又名《渡边及其后宫与工具人》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该剧又名《渡边及其后宫，还有工具人》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害一木同学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了麻衣学姐，我。就算吃粮也不在意了www</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还记得之前那张可以躺6个人的床吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到渡边变女和一木搞姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真就路人女主呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真·路人·一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛头人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一家五口与一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：确实，纯路人，有一说一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯一的路人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉又被迫害了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;路人三（X）
唯一的路人（✓）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木偷偷加入了豪华套餐[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;表 剧团最惨受害人:一木葵
里 剧团最终受益人:一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话剧又名《渡边的后宫与路人工具》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，人员组成是渡边和他的后宫团和一木，这不使劲迫害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙！一木！不要停下来啊一木！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1V5？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剧本又名《恶魔、后宫与路人三》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;混进去了一个奇怪的家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我把路人三看成路人王了，还有救吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;预言，一木是渡边用来破解的，就是题目里的狂风</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这剧本真的不是修罗场吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵由于发言激烈被踢出聊天室</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加大迫害力度[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指腚迫害对象:一木葵</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;请斩三楼！[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实双飞是真的很累的，要照顾到两个女孩的，真不是一件容易的事。别问我为什么知道，要脸，匿了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬起不来我懂，凛?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好！快进到凛和美姬都起不来！</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只要有麻衣学姐的地方，那就有我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妻前目犯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐，学姐~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最危险的地方就是最安全的地方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐太可爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷家能手——明日麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人，你这是在拱火。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不放过任何一个贴贴机会的麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蹭哪里啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远的麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要有麻衣学姐的地方，那就有我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妻前目犯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到被九条、一木、清野发现。渡边当场社死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，我的麻衣</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;境界低了，以前都不用拼尽全力的</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《九条在看剧本》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？不是请假了吗</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为什么能把别人变成猫？什么道具啊？</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬与渡边猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边拿出了猫耳朵，猫尾巴[fn=63][fn=63]</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我三刷都没想起来，这是啥道具，什么时候刷出来的？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;买的道具，上章好像说了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么成固有技能了。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是道具效果吗？当初还以为是任务顺带的。</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;本色出演预定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦哈哟</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是让美姬体验清野神小时候的经历吗</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野神诱捕器</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔=谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;地狱空荡荡，恶魔在人间</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;解锁新cg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个猫它会掉毛吗，我家的猫就是喜欢掉毛所以从来不允许它上床的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：今天用哪个呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是植物人，不是尸体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的身体现在应该是尸体</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小镇只有她一个人，说谎的人最少，所以恶魔最虚弱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;角色相反了呢</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;形成？？？行走吧？</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快进到凛喵，彻喵，美姬喵团成一锅睡觉
我等这段好久了[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;布偶猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫片？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有一个大胆的想法。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还以为是肯普法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;片来！（指猫）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有躺猫了，只有抱猫了[fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以拍猫片了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉布偶和美姬除了样貌完全不匹配啊，很多布偶很调皮的，而且黏人，只是看起来像安静的小仙女。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：啊！双倍的快乐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;布偶猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到凛喵，彻喵，美姬喵团成一锅睡觉
我等这段好久了[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金莲道长：妙啊，贫道最喜欢上猫了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉接下来要看猫片了。[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇，美姬也变猫了！卡哇伊ฅฅ*ฅฅ*</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想起那部「恶魔在身边」的剧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让美姬每天起不了床的坏恶魔[fn=4]</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看了看自己的猫🐱，给我变！
怎么还没变[fn=47]，算了，先用吧[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天就决定看动物世界了，谁来了也拦不住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人不能，至少不该</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小心福瑞控</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你简直就是我的梦中情猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人不能至少不应该</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像这样？[fn=26][fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;警告⚠️！furry出没！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要看猫片</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仙气。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天就决定看动物世界了，谁来了也拦不住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有一个大胆的想法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高尚的食材往往只需要最简单的烹饪方式</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不对劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了看自己的猫🐱，给我变！
怎么还没变[fn=47]，算了，先用吧[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;解锁新姿势</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;与心爱的你前往世界尽头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直到世界尽头</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条猫可还行[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl~</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原本是100米，分出去一半了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不一般吧，这不是多了一倍的学习时间吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;魂交？</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在别的书找到了一个图，特地回来发的[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;⚠️未成年幼猫请在家长陪同下观看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;福瑞控快g……还挺好看的，我爱看，发多一点。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫可是带倒刺的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到猫打滚[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫片</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？玩那么花？？？</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我懂我懂，乌鸦你是想写太太吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;离谱，就是你们两个想歪了吧，哦，我也想看，那没事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，实在想写太太就写吧，其实大家最喜欢的都是真姬[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦是不是九条太太打太多了，老是打错[fn=4]</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日后再说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗喻不需要急切于前往GE，慢慢来才会更快[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多试几次，感情就有了[fn=4]</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;到处都（流）下了战斗的痕迹。。。。。。[fn=63][fn=63][fn=63]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问一:灵魂猫会掉毛吗？
问二: 布偶猫呼唤春天的声音好听吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有一个大胆的想法，两只猫是不是可以嘿嘿嘿？？</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;两只猫交配...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是只能变10分钟吗？兑换了很多个面具？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，这里没有本章说挺离谱的。
你们是没有手机吗？</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;猫尾缠在一起</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;之前艺伎那次就看出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彷彿看到扮演的人穿越到了現場。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟CEO跟演员某种意义也差不多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝藏女孩</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;科普猫开心不晃尾巴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;科普猫的视力极差，集远视近视色盲于一体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;科普鸟控制不住括约肌一边飞一边拉屎</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哦，三刷才发现这里就埋伏笔了，所以后来源宝带着神林妈妈去云海了，乌鸦牛批</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;50米也不低了，差不多16层楼的高度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了巫师3血与酒里面的云震</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在天愿作比翼鸟，浪漫的情话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦坐飞机✈️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这说不能离开身体50m吗？</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在座的各位都是BT</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有猫片吗（察觉）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，好可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条问：干嘛？
渡边回：好啊[fn=21]</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原文：喵喵喵喵喵</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;万事皆三，真是这样(~_~;)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;淦，开始肝疼了。前几天把原神屯了两个版本的任务肝完。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;头上出现了黄色感叹号！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们记不记得那个小白兔遇到了大灰兔大黑兔和大黄兔的故事？</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;直接用猫做不行吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做·爱·做·的·事。</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;主 人 的 任 务 罢 了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经 典 快 进</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;临走之后前？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大？？是达哒！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里有语病，找到或达到都可以，你这。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大？</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一起困觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐱身不行吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就看到这里吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咦？这里竟然没有猫车？渡边真是熟练的猎人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我·要·看·猫·片</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一起困觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐱身不行吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边啊，美少女是虚拟的，你把握不住，孩子，因为这里水很深，听叔一句劝，去好好学习工作，让叔来替你受罪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶[fn=9]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想和姐姐睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我要和你困觉！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这么一说 我可就睡不着了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁不想呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也要和姐。姐。睡。觉</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;猫猫sex是惩罚机制的，不会太美好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫不能交配吗</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哦豁</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神交不行吗？真的是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫消失干嘛？
人片（❌）
猫片（👌）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实猫也可以不用消失[fn=31]</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;让我想起来比干挖心那段</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔=谎言
不被恶魔发现=美姬跟清野凛不说谎的约定
仙境=清野凛生存的只有诚实的土壤
整个故事隐喻美姬跟清野凛童年事件 
大概就是这么个意思，其他的隐喻比如在仙境生活一段时间就代表俩人四岁前的童年之类的，不是重要部分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不能见到别人，约等于你不能对他人说谎，这就很好理解啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段怪怪的，有人看懂意思了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的老婆，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的仙女，清野凛</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知◇是不稳定结构，受力会变形</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再怎么写生4个，渡边彻也是处男!</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有仙女的地方就是仙境哦。清野神，请相信自己净化或者感化恶魔的能力吧！</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有外挂，就真的是作死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是杰洛特，偶尔也需要冥想！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各位书友：这是小说，不想猝死的千万别熬夜修仙了一早还去跑步。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3点开始5点结束，还没大火时长一半</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说是一夜未睡，其实变猫就玩到三点，五点就晨练，也就起点平均水平～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打桩机 [fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬辛苦了[fn=4]</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还有足够经常换跑鞋的钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;村上春树</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有时间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以身上穿不穿衣服其实不重要，重要的是鞋和路，真是随心所欲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;just run</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;村上春树</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿甘既视感[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;裤子都不穿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俯卧撑连鞋和路也不用了，只要不浮空就能进行下去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有足够经常换跑鞋的钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是东野圭吾的话吧，感觉好熟悉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;起码再给条裤衩吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后膝盖废掉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在这里提醒大家，姿势要对，不然膝盖容易受伤，俺的亲身经历</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“你喜欢跑步吗？”</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;也是暗喻凛绝对不同意和美姬一起分享彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个话剧有意思，恶魔无处不在，就是指现实生活的谎言；少女和恶魔一起寓指渡边和美姬在一起；世界尽头的仙境里的仙女是清野，清野绝不说谎，仙境里就不存在谎言这个恶魔；少女和仙女度过一段快乐的时光指代美姬和凛小时候美好的时光；最后少女还是把谎言这个恶魔带到了仙境，仙女把少女赶出了仙境意指美姬和凛决裂，</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔应该是谎言，世界尽头是美姬和清野的友谊，美姬为了继承家产离开了，却把谎言带在了身上，仙女也就是清野拒绝了美姬回到世界尽头就是拒绝了友谊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬和清野原本生活在没有谎言的世界，可是美姬为了家族离开了，清野告诫她不许说谎，可是美姬还是说谎了，于是清野再也不属于人间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这pua厉害了啊👍 这就不是暗示了，直接霸占</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然神不属于这个世界，就回归神界吧。人间的事就不必操心了。即使在神界清野神也和诸神格格不入，注定孤独。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还以为是仙女和少女都被恶魔摆平了放在大床上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是还是存在矛盾的地方，第一个人的承诺的表达为什么是如果你找到世界尽头请回来和我说？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面的那就没什么要说的，比较直白了，清野从此又孤独的活着，清野的这个故事应该是向渡边还是美姬传达消息？渡边的可能性大，那么目的呢？可能是看到渡边为两人的关系纠结于是提供线索？那个曾经的大小姐也是追求真实的，那么让两人关系缓和的关键应该是让九条找回初心？所以有些负担可以让渡边来承担？让美姬回归原来？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有出现考验在找到仙女之前，那么是不是可以理解为真姬一开始是不看好两人能成为朋友？但是考验了美姬后还是给她们的相遇提供了机会？那三人中也一定有清野太太！那么还有一个串联了两人相遇的童年？可能不是主要人物？但应该和两位太太一样重要，那可能是清野的爸爸，因为九条美姬比较早要继承家业，她父亲可能比较早离世</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野是仙女，因为她从始至终都是处于没有谎言的世界，恶魔是谎言，美姬是少女，也就是说这个故事应该是交待了两人的认识到诀别？清野孤单的处在她的仙境，美姬闯了进来说要追求没有谎言的世界，清野就和美姬成了好朋友，但是美姬要继承家业，那个承诺，那三个人中的第一个应该是真姬？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表还有么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就放空脑子等个照抄的答案了老铁们，这题目对我来说有亿点难</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬和清野原本生活在没有谎言的世界，可是美姬为了家族离开了，清野告诫她不许说谎，可是美姬还是说谎了，于是清野再也不属于人间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面肯定会改的！比如少女打败恶魔？（美姬不再说谎？）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔应该是谎言，世界尽头是美姬和清野的友谊，美姬为了继承家产离开了，却把谎言带在了身上，仙女也就是清野拒绝了美姬回到世界尽头就是拒绝了友谊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;地狱空荡荡，渣男在人间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;地狱空荡荡，恶魔在人间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有无懂哥</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说实话，乌鸦的剧本一流，渡边的剧本三流，可能到时候细节处理会加分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我赌话剧正式开演时，渡边恶魔绝对会改剧本，巧妙的几句话，使话剧变成让她们和好的舞台</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬的环境必须靠她和她妈两个人支撑本家 可能这也是r桑特别怨念让渡边只做自己的原因？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最初，指一定有修改版本
暗喻彻会改变结局[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不够不够，根本不够！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;期待这样的场景</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;！？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仙子爱上了少女，为了少女带着恶魔和仙境离开了人间，从此人间不在有恶魔。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂吗？</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日本沒有多少早餐店 ，那種只有窗口的早餐店也沒看過。 日本有賣早餐的地方只看過便利商店，咖啡廳，麵包店，牛丼店，連鎖速食，家庭餐廳， 商店街的日式料理店偶爾有看到賣日式早餐， 基本都是早上會開的餐廳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来如此</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要是在乡下，可以写成“只有生产队的驴勤劳地在地里干着活。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生产队的驴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;南南东~南南东~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老乌鸦了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者的化身在这个世界游荡，窥视着渡边彻的生活，并记录给另一个世界的人们阅读。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦  ''勤劳''？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快点继给我续更！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;勤劳地咕咕咕吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生产队的驴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是在乡下，可以写成“只有生产队的驴勤劳地在地里干着活。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦卖呱，自买自夸[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;勤 劳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好勤勉鸦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲鸦，估计会很爽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞧瞧人家鸦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿，这里有一只怠惰鸦，不如我们...... </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强烈要求给乌鸦加个配角</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;辛勤个锤子</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;恨自己不是大触，画不出脑海中的画面[fn=12]</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这环境描写就很有感觉</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有飞机云 👴青结</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;祖传飞机云</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是什么?
芝士雪豹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然不是两面包加芝士</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;请慢走</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好有画面感啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“看着由东向西的飞机”，思念的是穿越前的故乡吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;体力消耗太大</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我只是一个路过的卡面来打</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;等等，前面的描写，加上这句，这不就是悲剧文常用的初始写法嘛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九月十日，三天一日，一日两时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有我不在的街道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话的格式，突然让我想起那些悲剧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最多两个小时，美姬就顶不住啦？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正常</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛怎么办啊 想象中jpg.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这谁遭得住</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在承接政府项目的时候，就会经常出现这个情况，甚至会有三层甲方，每一层都有自己的修改意见。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万恶的甲方！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乙方:wdnmd</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;女声优一番脚最后的一番是谁啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一年了，这笔记本还没用完，这就是学神的世界吗？</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那炒面那</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;错字受，他们班</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;班长的名字叫“男女”[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接客（</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;新娘修行满分？</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;多了个只</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;伤害优衣的在哪里！！！
…哦就是我啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为迫害ue太多，我至今没有公主ue，呜呜呜因为</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;まこと?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伤害ue的人在哪里？[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ue对8起！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;惨呐
三百三十章快结尾了才有名字[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，班长终于有名字了</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是一年级那个女班长</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，为什么女班长就有名字[fn=22]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;班长的名字终于出现了</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真兄弟</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;求求你吧，离完结就一个月了，给个姓也好啊，好可怜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;干脆叫新吧唧好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;未闻男名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦：然而我不需要男人！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《我们仍未知道那个男班长的名字》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;依然没有姓名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结前班长能拥有姓名吗[fn=4]</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我也好想尝尝清野同学的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想吃清野同学下面😋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正好 你可以在台风天吃到超市便当</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想好好尝尝清野[fn=4]</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;气场也太大了，我想说话，别人却乱糟糟[fn=19][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野以前说过，不愿意给一般人做饭。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冷场姬[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃炒面，喝靓汤.狗头</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;回过神来，已是豪饮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;利根川？</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吃了真的会死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱你爱到死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以用魅力征服世界的人</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我的舔在你之上</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：搁这谁俩呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣…</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一起舔啊</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我不对劲...！全部铐走！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;负责提供香肠[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这香肠，他正经吗？</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想让清野和渡边一起炒，就像碧蓝之海中千莎和伊织一样默契的就像老夫老妻一样。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会发光的蛋炒饭是没有灵魂的！（破音）🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记得好像有种叫可食用金粉的玩意？（就是拉出来的OO也是闪闪发光的）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想让清野和渡边一起炒，就像碧蓝之海中千莎和伊织一样默契的就像老夫老妻一样。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不加点老干妈？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会发光的蛋炒饭是没有灵魂的！（破音）🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚上吃容易当场去世</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会闪光吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;民主的暴力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;樱花庄老皿煮了[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;错别字也太多了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美食文例行第一章：黄金蛋炒饭</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;挺期待带着美姬和清野神游中国的，不过应该很难写，可惜了</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边君的香肠💗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸好渡边不烤肠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿 蛋炒饭！最简单也最困难！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边牌手作蛋炒饭♡
《吃了我的蛋，忘了他的棒》</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬怎么不在，不是被夺权了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众做周知，清野神从不撒谎[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要渡边还活着就不会</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;起不来了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条又被淦趴下了[fn=31]</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐大人发话了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;慕了慕了</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟姐姐大人[fn=4]</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看到这四个字就想起白井黑子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧内撒嘛[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的吗？真的怎么都可以？[fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧奈sama</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑历史，啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要不提黑历史，咱们就是朋友</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧内撒嘛！</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;感觉一木要一夜暴富了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后还是决定迫害一木嘛？！鸦桑，你好温柔</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的后宫团（一木？谁啊，真不熟）</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;冷知识B：日本的监督就是导演</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 　  ∧_∧::
 　 (´･ω･')::
  /⌒　　⌒)::
 /へ_＿  / /::
(＿＼＼  ﾐ)/::
　 ｜ '-イ::
　 /ｙ　 )::
　/／  ／::
／　／::
(　く:::
|＼ ヽ:::
超高校级的超监督——清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超监督[fn=31]</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我觉的路人应该有花田和玉藻</p>
`;
default:
			return '';
	}
}
        