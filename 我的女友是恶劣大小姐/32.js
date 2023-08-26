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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;突然狂飙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂风狂风</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木呢 没啦?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬第一次呢？！！没写吗？</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;男枪：关灯咯~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我与死亡同行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;安安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天黑请闭眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，联盟玩家纯度太高了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狐闹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉妈妈[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑帮教父刘玄德？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拥抱黑暗吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把头埋低</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边-麻衣 门 一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈，门，一木，这才是正确顺序</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我是地板，我现在觉得很舒服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我是、</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好！我是空气！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我是被窝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个排位，大概是怕一木葵做些什么吧[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我是窗户，也是门[fn=4]</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;窗户，清野九条，门，渡边彻，（渡边彻婚后的生活。）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不对吧，渡边不是说要睡清野和九条中间吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛靠窗户睡，我也靠窗户睡，我和美姬贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边两边靠墙，一边是美姬，头上是一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是凛和美姬中间的顿号</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好！我也是空气！</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬变啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;未曾设想的道路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，橘势大好？</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是你吗，韦一敏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;君名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦这是铁了心要玩君名梗啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像电影 你的名字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;改成陨石就是我的名字了[fn=4]</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请之前的各位不要像蛆一样在被窝蠕动，我？开玩笑，早八[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请不要在被窝里滚来滚去[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也只能兴奋了，啥都做不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你除了兴奋好像也没什么可干的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也在蠕动[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为有麻衣[fn=39]</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;又到了神的不眠夜聊了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻要开始夜袭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京的天太热了，想想都兴奋[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不，你在和美姬睡前锻炼</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉这一次应该是失败了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得到时候就该飙戏了。少女第二次进入仙境之后，会和仙女撕起来。比如仙女:我讨厌恶魔（说谎），少女会说恶魔（说谎）也是有必要的什么什么的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然有阴谋</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大家猜一猜</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我以为麻衣偷家呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉 一提到半夜出去，就是清野神的回合</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神可是有换地方睡觉百分百前几页不适应的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛绝对也出去[fn=58]</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;回忆录</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那天？用错了字？</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;每次夜晚相遇的人都是清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷跑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小呗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心有灵犀啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就知道会出来私会[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么每次你们俩都会偷偷跑出来谈情说爱啊！</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个描写，受到世界宠爱的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这月色好色，人家好喜欢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美的描写啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这描写666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫不及待的扑上去，咋想出来的的？简直666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这月色好色，人家好喜欢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道说什么好 我给你俩鼓个掌吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这描写学到了学到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个描写，受到世界宠爱的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我是月色[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;月色带我一个，我也想扑上去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这描述，爱了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢这个描写 </p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛：吾与美姬孰美？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没猫体恤，就猫娘吧[fn=43][fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到底哪条最美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神喜欢猫咪和海豚，可美姬又喜欢什么呢，我们好像没了解过美姬的喜好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫咪已经彻底取代海豚了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竟然是猫咪不是海豚[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个就很暗示了[fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里的月色=爱情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神说，要有光</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美妙的描述</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊[fn=21]</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛老爷说话还挺有玄机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬在睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;枕头应该给神的[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;粥粥的终极理解</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那次找麻衣 神也醒了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;yes....and no?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老驴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是也不是，不是也是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 是但不完全是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;矛盾文学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是也不是 不是也是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬在睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛老爷说话还挺有玄机</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛酱眼里的渡边[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;bo ki</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真实想法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦：
难办，难办我看就别办了！[fn=31]</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛：实不相瞒，我很激动</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她有那么一点期待</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，确实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;文爱？搞这个我就不困了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做弹弓啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不否认允许彻钻进来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大半夜不睡觉背着大伙在走廊调情是吧[fn=31]</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你搁这儿文爱呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只是看见那一点 点。身体一下子就热了起来。
我没开车，别胡说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦是不是玩过雨爱啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圆润平滑的只有肩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;掀开被子，但没有完全掀开。
能看，但只能看一点点[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我黑切呢(ಡωಡ) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始调?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文 爱？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我嫌太麻烦，用法术变没了[fn=43]</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;至少有40甚至39℃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱情是多少度！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情书？爱情就像重感冒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是抽出橡皮筋做成弹弓打你家玻璃</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;别乱说，来点实际的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再说河蟹就出来了</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你啊，渡边彻！</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不，清野神，不要被渡边彻迷惑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句是谎言 前面是真的
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越漂亮的男人，越会骗人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你真的很喜欢骗人，我不喜欢骗人的人，但我喜欢你。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;个人经验，骚话说的越多女人越喜欢，前提是关系好的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了学到了，我学到了啊！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“美姬在睡觉”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到做各种各样的事[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有些话，虽然是废话，但只和你讲
有些事，虽然很无趣，只想和你分享
这种感觉吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;9999999，6翻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了，学到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学废了学废了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太会了太会了！</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野神大人：快说你喜欢我啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;月色真美，风也温柔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回答就等有表白
一般遇到这种情况，我们称之为——绝杀！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为喜欢你呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为今晚月色真美[fn=4]</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;因为我也把你当做我的一部分</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;飞机是有翅膀的，虽然很慢，但飞起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时间快要静止了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就像飞机即使有超越声音的速度，也难以到达终点
我还要多久，才能到你身边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有没有航道云啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请分析此处环境描写的作用（上）</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边对去年烟火大会丢下清野凛十分十分的懊悔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;面对未曾经历的记忆，第一时间想到的也是你
无时不刻
想要与你一起</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;爬山丘啊爬山丘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爬清野凛的小土坡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了海底（凤凰传奇版）
春日雨，夏蝉鸣，明天是个好天气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从试胆桥上跳进河里真是冷透了，但是很过瘾对吧。偷看音乐教室的那轮圆月，看起来就像馒头一样美味，和电车赛跑时觉得自己真的能赢。繁星下，我们合唱的小星星，很有趣吧。夜里的学校一定潜藏着什么吧，雪花就像是四散的樱花花瓣一样吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幻想是你，冲动是你
爱也是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然好想看清野if线直到完结了（不是说美姬不好）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美好的描述啊，就是看着，心也在扑通扑通的乱跳，仿佛代入其中了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么恋爱日常🍋🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;弱鸡ling</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要与你一起
不论何时何地</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起一个叫程晓羽的渣男。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实是这样（如果喜欢一个人）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想和你一起体验各种各样的姿势。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有很多时间想和你一起渡过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想要将此刻无限延续</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以，卡密sama，您忠实的信徒希望得到神的陪伴。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感情要有重大进展了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;撩啊</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喝醉呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;深夜中向神展示真心</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前方高能?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，还是表白了</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;现在的情况下说这句表白，几乎就是在邀请清野，让她放下自己的坚持，加入渡边他们的亲密团队。
心疼我凛酱，岩手县人果然渣！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把我杀了给他俩助助兴吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑鄙的岩手县县民</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;优秀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴，二刷打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我是未开化的猿人。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毫无感情波动 仿佛听见这个喜欢跟上厕所一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;劫杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边只对神表白过吧（真心）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;月色真美啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其他挺佩服清野的坚持的，真的非常棒！但就算是足以对抗世界的坚持，也抵不过神对渡边的喜欢吧。无论是坚持自我的神，还是最终走向渡边的神，都真的超赞，超喜欢！所以清野yyds！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛yyds！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边之前说的只要凛在活动教室穿巫女服就什么都答应她，凛说也说过要渡边向她跪下求着她交往她才会答应。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼╯^╰两个没有开化的猿人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凜：“我也喜欢你”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男猿人你好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;优秀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伸手党，自己不会动手吗？
刀给你，自己动！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我
爱你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果有下辈子，让我们早点遇见吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过去300多章的情意啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于等到这一句了，就像春物结尾…等等你俩谁是二小姐[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老图了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在的情况下说这句表白，几乎就是在邀请清野，让她放下自己的坚持，加入渡边他们的亲密团队。
心疼我凛酱，岩手县人果然渣！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吼吼吼吼吼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呦呦呦，这不是猿人彻么 几天不见 咋表白了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好起来了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是蛆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噢噢噢噢噢噢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兴奋起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大哥们来在床上侧躺笑的图[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把我杀了给他俩助助兴吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我又死了兄弟们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhhhhhhhh</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;万一变成谎言了呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蚌埠住了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛是在竭尽全力按捺心绪
害怕自己情不自禁答应</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这完全不是谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢你，乌鸦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她害羞了，她害羞了</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;写的太好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翅膀带我飞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的心融化的很慢，但在一点一点的融化</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗喻 彻的决心无可动摇，神的抵抗慢慢融化
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作用托物言志，借景抒情的手法，女主讲自己的感情寄托于清美的夜空中。又以黑夜中的缓慢飞行的飞机以来象征自己的感情历程以及自己对男主坚贞的爱。纵使前路一片黑暗，我也会一直前行。相信终点会是一片晴空。（说实话，我写的很烂，毕竟很久没写这玩意，再加上当初语文也不咋地，）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请分析此处环境描写的作用（下）</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野可以分辨谎言的，渡边也清楚这一点。所以玩笑并不能掩盖渡边的爱意！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心同此意，情同此景</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想通了什么?</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;轻一点是因为怕被听到颤抖</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，我现在……简直要high到不行了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人间情话本不多，眼迷腮红胜千言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是柏拉图式恋爱的魅力啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;动摇的心，无以言表</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果我没有特殊能力就好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此时此刻，语言多么苍白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神在那一刻很想放下一切，接受自己一点点改变的内心和其中裹藏不住的对渡边的感情，但又不甘心放下自己的坚持，自己的骄傲。。。神明白渡边不会强人所难，只会将自己一点一点改变，在这一刻的神选择了坚持，但是从神有过一丝动摇开始，她就像被恶魔所诱惑的踏入沼泽的少女，当神意识到一切时，就早已无法逃脱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为今晚感到高兴又难过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想要表达出来，却发现世界上没有一种语言能够形容这种感情</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;能不能翻译成地道的日语小说给日本的投资方看一下啊[fn=12]好想看到这本书动画化</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经答应了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永久收藏了这本书，筹资动画化踹我一脚。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后毕业混好了，一定投资拍成番</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一句话表示自己很高兴，会铭记这一晚。后面的话表示拒绝，希望今后会有一天能再一次听到渡边的真诚表白。说白了，清野还是拒绝了渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老母亲的欣慰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话其实在我读来有点悲伤的感觉，因为清野仍然是会选择坚持自己的道路，她只是开心自己喜欢的人会愿意坦诚地告诉她</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远在深夜里有多好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段好像以前喜欢的青春文学作家的字句，乌鸦文笔实在太棒了</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清晰，颤抖
雀跃的心</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;答应了，但是没有完全答应[fn=58][fn=58][fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;急了啊   渡边</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可爱　(′～'；），想(｢･ω･)｢嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为你让我无法思考</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;额。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我清野凛最喜欢做的事就是对自以为掌握绝对优势的屑渡边说no！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;口头哇路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我拒绝你是给你不停表白的机会</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诚实的清野神啊</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今晚心满意足</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不说谎的清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我心目中的凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑色长发，蓝色配色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛是什么时候喜欢渡边的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没办法了，只能拿出老底了，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神！
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心理学 摸头发</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早上一大早起来，看到这，又是美好的一天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女猿人你也好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咕咕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊 要死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直到这里就宛如巨人的看海结局，烂尾了我就只能选择性遗忘后续剧情。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留名啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;互诉爱意……时光，停止吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵，两个猿人🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果后面结局烂尾，那么这里就是我心目的结局了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我为什么要半夜看这个，激动的我在床上深吸了好几口气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老规矩，kiss就投币（不是）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;酸了啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以睡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不说谎的清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今晚心满意足</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远诚实</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？还有药吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正也死不了</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谎言吧？主观上系统不也是有钱的</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有bear来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的明见万里[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也在你的算计之中吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这！穿着安全裤还想着带钱包，凛酱一定是预言家吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你身份证也带了吗</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;特别是你，在所有之上的你，我的神 清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你 在所有之上是你 我的神 清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有之上是你，我的神，R桑！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有之上是你，我的神，清野凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有之上是你，我的神，远坂凛（？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有之上是你，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有之上是你，我的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有之上是你，我的神，九条真姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的她，在一切之上，我的神，清野凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有一切之上是你，我的神，清明美奈。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有一切之上是你，我的神，清野凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忽然吟唱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别
是你，
在所有
一切之上
是你，
我的神，
哆啦A凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有之上是你，我的神，R桑！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果能够被你俘虏的话，哪这个夏天也一定会充实。哪怕无法时光倒流也不要忘记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有之上是你，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是你，在所有人之上，我的神，圣～额，九条真姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有之上是你，我的神，凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是你，在所有之上是你，我的神，幽子桑！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上，是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛



下面圣经咏唱出错的全拉去斩了给我神助兴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有之上是你，我的神，国井修</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她 在所有之上是她 我的神 清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有之上是你，我的神，九条真姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的你，在所有之上是你，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有之上是你，我的神，九条真姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特别是你，在所有之上的你，我的神 清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一切之上！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，在所有之上是你，我的神，斯卡蒂！
为斯卡蒂献上心脏！（振声）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬党混入其中[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所以一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神教的人呢？出来走个流程🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的老婆，清野凛!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;官 方 吟 唱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你 在所有之上是你 我的神 清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在所有一切之上！！</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咦噫矣，这么快就进入撒娇模式了[fn=62]</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日本是没有身份证的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是身份证？</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好久不见，铅粉</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你瞅瞅，你瞧瞧
还打情骂俏起来了[fn=31]</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是军费！不能省（神智不清）
理智溢出</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一天4亿，渡边攒了250天大半年呢，我感觉你要不起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起这里了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一天4亿，渡边攒了250天大半年呢，我感觉你要不起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵，我要有一千亿，先给慈禧太后造个园子。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从今天开始，打算保管渡边彻的一千亿？暗示同意交往了？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经开始管起来家里的财政大权了是吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是军费！不能省（神智不清）
理智溢出</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟无论如何他们都会在一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次算是变相答应了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;管家婆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;进入管家婆模式？</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一千亿是纯流动资金，银行都未必能立即拿出来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;借500块还1000亿，这是什么利率</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超级加倍！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;58亿不少了，2021十亿美金，也就是65亿左右排世界前3000名了，也算有头有脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;60亿人民币[fn=31] 我的乖乖 这做了多少任务啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=64][fn=64][fn=64]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛:我不仅惦记你的钱，最关键我还惦记你[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你惦记她的身体，她惦记你的钱[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊，有画面了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意思是等会要用到是吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天黑好办事[fn=58]</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个昆虫，莫不是瓢虫？</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正宗的乌龙茶是可燃的[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙全是提神的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这个乌龙茶……它正经嘛。
莫名想到了96°的生命乌龙茶</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;唔，宿舍楼里有贩卖机，深夜起来买饮料体会过，走廊空荡，寂静无声，铝罐哐当，可乐冰冷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，确实这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;景更幽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心静</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我很可爱 请给我钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以分期么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次一亿，一千次就好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然你表白了，那老婆本存我这没问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妻管严模式妻管严</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妻管严模式</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛:反正很快就是我的啦[fn=24]
</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;六个人都不打呼噜不磨牙吗？</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;估计要夜袭，但是等了很久没来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;门的方向是渡边彻睡的方向吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？麻衣知道了？</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在梦里和麻衣学姐贴贴[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;dd狂喜</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;无论何时都能感受到老师的温柔啊</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;姬不在乎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画本体《美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像美姬允许偷家的（对清野凛特许）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还搁这儿睡呢，都被偷家了，起床！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！
美姬，我的美姬，虽然你在睡觉，但是我还要说！
昨天晚上凛偷到了！</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个我也会!，多亏了小时候睡觉奶奶把我和被子捆起来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是这样，睡着什么样，醒了也是什么样，应该是深度睡眠吧，除非中途我醒过来，不然是绝对不会翻身的。改变之一就是枕头一定要“太空枕”躺下两秒会缓慢变形的枕头，睡一般的枕头会把脸颊肌肉睡僵，一天张不开嘴，一张就疼。除此之外就是容易手脚麻痹……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然中间偷了个家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然…但是…我们寝室管这种叫躺尸或者死猪躺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛，我的睡美人[fn=24]</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我和我基友都是这种睡法，两只手叠放在肚子上，有一次出去玩，和他在一张床上睡午觉，醒来的时候寝室群已经疯了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是没睡吧  凹的造型？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，我晚上会打把式，把周围东西都弄乱那种，但是第二天早上醒的时候还是头天晚上睡觉的样子[fn=39][fn=39][fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我好像也可以。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这……突然想到奇怪的玩法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的睡颜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女神范十足</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐大人</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那个枕头应该给凛的，但是为了剧情发展，不给最好😏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要我这样我能鲨人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我睡觉也轻，一点细微的声音就能吵醒我，很痛苦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一晚上被渡边弄醒来两次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后家庭外出的时候，得把美姬的【枕头】借给凛用
不然渡边和美姬、麻衣声音太大，哪怕在隔壁也会吵醒她，至于青奈应该会很不好意思的克制声音，不用太担心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得亏没有电钻的呼噜声，有一次我舍友实在太大了，我被吵醒愣是一个多小时没睡着，就这我还是除了打呼噜的5个人中睡得最多的，最后那天上午就我和打呼噜的上课去了，另外4个逃课了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那以后岂不是得分房睡?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又到迫害一木葵的时候了[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都怪一木，对，都怪他[fn=9]</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个水池嘿嘿嘿[fn=58]想起麻衣学姐了</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有人问我，自律的人有多可怕。
我：嘿哟，瑞拉蛙哥法克蛙哥放个屁，蛙哥法克放个屁，嘿哟，瑞拉蛙哥法克蛙哥放个屁，蛙哥法克放个屁，谁谁…谁sei谁谁个谁谁…谁谁个谁谁，ok鸭涂的蓝鲨克呦咦呦涂的蓝鲨克，欧呦欧欧欧呦偶王茨沟王茨沟鹅偶，鹅鹅鹅有鹅有鹅，王茨沟王茨沟，苏喂苏喂，苏伟苏伟发芦苇苏伟苏伟～</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么到处刷无关梗啊，我一老博士都觉得烦，看小说就好好看，就一个劲乱刷。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梗小鬼很难不4000+</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下下那些人也太ky了吧？[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么尊尼获加😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猿神这体力，以后怎么应付渡边打桩机啊[fn=33]</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;光是想着神打哈欠就已经够可爱了啊～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;型月名画：士郎在跳高</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我来组成。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛酱切菜小心吖[fn=9][fn=9]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我当空气！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我勉强当这条围裙[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家好，我是菜[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到五人一起生活[fn=21]</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，我赛尔号</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是餐具[fn=31]</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;感觉看见了她们的未来。[fn=31]</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;欧尼same</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐大人</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只有我关注腿吗</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐大人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假装没看过前面，抓住重点，使用渡边彻！</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好奇老师用渡边身体看神的时候，会不会有反应[fn=48]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，你对面是神，不是别人</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木显得很多余</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六人在早饭边吃桌</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清风不识字，何故乱翻书</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咕噜  看着看着上网买了半只🐔咖喱块和椰浆[fn=31]待会去看看教程怎么做</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渐渐被美食驯化的败犬[fn=31]</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;曾经我也有过这样的幻想，现实无疑是残酷的</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我深度睡眠每天1.30-2.0小时正不正常</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抱歉，深度睡眠是不会说梦话的...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你究竟在得意些啥啊一木葵！</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一楼二楼三楼和五楼的兄弟呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么连五楼的兄弟也走了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼和二楼的兄弟呢？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;上次文化祭剪电影那次吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剪辑电影那次吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;燃起来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;另外几楼呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里大概是上次文化祭，拍电影剪辑的时候吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打起来打起来</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今天的风儿，甚是喧嚣啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;风暴将至[fn=31]</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你怕不是在想屁吃[fn=31]</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;特典</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉渡边这个体质不止20了吧，他这一直自己锻炼成这程度。。。这个是渡边天赋还是外挂附带的被动？强的一批啊，这不就力之极意吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;....</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛逼，这已经是都市兵王的水准了</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实，九条和明日以及小泉没有本质区别，都是爱上渡边并为之改变。只有清野与渡边的爱，才更纯粹。清野对于明日以及小泉的态度，也更接近渡边。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木是误认为神是三个女朋友之一吗</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这位是真的猛士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁也救不了一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木！</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;痛苦面具</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害得好啊乌鸦，你迫害得好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常辱葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘴里的饭顿时就不香了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每日辱木（1/1）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;痛苦面具</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又到了喜闻乐见的迫害一木环节~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木已经能接受自己是个局外人了，很好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦带头迫害一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害一木葵！ 好耶！[fn=1]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，一木可怜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每日迫害一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害得好啊乌鸦，你迫害得好啊</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她以为是神和学姐，谁知道是老师和学姐。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日迫害（1/1）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的一木葵还以为两位情人是包括清野凛</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神:不说谎话误导别人的方法，就是把真话说一半[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神爱上渡边澈的那个晚上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今年的台风也快了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛说的是真话，她是睡在彻旁边，问题是后面还有:彻做了一夜电影剪辑，没睡。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;视频剪辑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表截一下图呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;127章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表呢，救一下啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神:不说谎话误导别人的方法，就是把真话说一半[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的神开始进攻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神的心动时刻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神的心动时刻</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;亲爱的~
你是否还记得
第一次吻你的那一刻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏 韵 锦 你 这 里 欠 我 的 用 什 么 还</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;红豆泥，阿娜达？</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻，危！</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;然后你用在美姬身上挣得积分为凛酱兑换了视频剪辑技能，呵呵呵，渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你还想碰！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是，然后你花积分买了剪辑技能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为美姬在身边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神好像就是第二天洗澡的时候意识到自己喜欢渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隐约记着这段剧情，从这儿开始两人感情指数上升的</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;胆小鬼！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请叫我无情铁手！</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，还说你俩不是一对？这种细节都能看出来</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬你最大的错误就是爱睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里的小笨蛋们，晚安哦～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的神🙏🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱哦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱是一道光，地上鞋两双</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又偷跑了一截</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟昨晚接了一记直球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都偷家了，能不开心吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画：美姬在睡觉之凛与渡边小剧场！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你笑什么？
我偷家成功了[fn=62]
？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬你最大的错误就是爱睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然明知双方互相喜欢，但听到渡边的表白，效果还是不一样的。看到渡边不会因为自己的拒绝而疏远，心安了许多。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为我稳赢了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家都偷了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里的小笨蛋们，晚安哦～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;值得纪念性的一刻（bushi），我404条本章说了。在这本书里我被点娘404了多少条本章说啊</p>
`;
default:
			return '';
	}
}
        