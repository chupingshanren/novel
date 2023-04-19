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
<p>&nbsp;&nbsp;&nbsp;&nbsp;少的那章补到第一段的本章说里啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好我有纸书，哈哈小强吃口香糖变成秦桧的模样，大了大块头，大块头才打的他[fn=33][fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉观音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了一章啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文字有点乱，换成图片啦↓↓↓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少的那章标题《玉观音》，内容看下面楼中楼↓</p>
`;
        case 131:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子真好！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗨！包子这样的老婆，哪找！？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子只是用的最好用也是最简单的办法罢了 我一心付出 你若负我那便负 我失去的是一个不堪的你 而你失去的是满腔爱意的我 我有爱你的能力自然有爱别人的能力 你能随时随地找新欢 但是在偶然的夜深人静不经意间想起任何关于我的事 那就是你良心对你的审判 而我问心无愧 若爱人 我便尽全力 不成功也无妨 我心向阳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子在现实中也很难有的 你们想想 小强经常莫名其妙的就不回家 问原因就是打哈哈也不说实话 没事就往家里带人 男女老少都有 具体是谁也不清不楚的 还经常打架绑架乱七八糟的 包子连问都没问一句 一般就是邻居还好奇打听打听呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看包子 这才是幻想中的完美老婆 所以大家才会对张冰那么大意见 不过往往现实中的老婆都是张冰那种表现而已。。。</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二爷和周仓[fn=31]</p>
`;
        case 135:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 136:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得前面阵阵心疼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帝辛？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对陈可娇的感情，是不是小强唯一的强人念，所以这辈子才心甘情愿地帮她那么多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗨害嗨，前面说他什么什么上脑的人呢，咋妹人说话腻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以小强看到了就想帮她</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;故意的[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还以为是包子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纣王，妲己？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我翻了下聊斋，这两个难道是《香玉》黄书生和白牡丹？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得前面阵阵心疼</p>
`;
        case 137:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;史上第一混乱以后，再没那个张小花了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我缺那点钱么？我是缺那个命等你写</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写，一定要写。我支持你！</p>
`;
        case 139:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈可娇上辈子是陈可破，是个妖精</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，我已经想起吞食天地关羽的三拳一脚了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二爷碰见秦桧这种的不得往死了打</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二爷和周仓！！！大块头和秦桧这俩倒霉催的😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二爷！</p>
`;
        case 140:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下次别再骗我了[fn=12]</p>
`;
        case 141:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上辈子欠你的，说的真好[fn=12]</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好帅啊啊啊啊啊啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凭空飞上二楼也太帅了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他是黑。。。嘿！我要说什么来着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关二爷两臂有千斤之力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你瞅啥</p>
`;
        case 145:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高启盛啊哈哈哈</p>
`;
        case 146:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子的性格和脾气真好，和正版虞姬一样深爱自己的男人，面对别的女人和自己的男人关系暧昧也绝不争风吃醋或起疑心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书里对女性真的很尊重</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好有爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子是真好，有身材有性格</p>
`;
        case 147:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她好像一条狗啊</p>
`;
        case 148:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你女儿！[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前世情人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;初得不能再初的恋，都初到上辈子去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前世的初恋</p>
`;
        case 149:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实看着还挺感动的，最后还是遇到了真正适合自己的真爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也就是这本书，换个人来，别说李师师花木兰了，张冰倪思雨秀秀佟媛一个都跑不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花不让，这本书的时代还是流行后宫文的时候。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也明确地说明了爱什么的就是一阵激情，换个场合很可能就错过了</p>
`;
        case 151:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥:洒掉洒掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给他们埋起来，过些年在给他们刨出来，在做做旧……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这多简单，让他们自己挖不就完了</p>
`;
        case 152:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你还惦记你那自动铅笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老郝就这么无声无息的逮了…</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐人街探案2的片段不会从这嫖来的吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 154:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大混乱的序幕！</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周仓忠勇啊</p>
`;
        case 155:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好哇！！！！多来点这样的情节！！！姐爱看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子[fn=35]</p>
`;
        case 156:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺住啊，挨说应该感动，但是这三个字让我有那种喜感的画面……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里为什么没人评论邦子</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孽缘啊  想看看这俩人上辈子的故事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里没有评论？</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;外国友人是真心有礼貌😂</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很帅！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很帅！</p>
`;
        case 159:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚准备哭，这防弹衣愣是给我看愣了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皮甲加上陶瓷防弹片，抵挡手枪足够了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhh</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;号哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;味太冲了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是老爷子身上味太大了</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以是怎么感觉出来的，特想知道</p>
`;
        case 163:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你俩都被秦始皇封王了吧，比项羽辈分高啊！[fn=8]</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲剑还有刀鞘吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;憨豆有一集也是这么开的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么短的时间想出这个主意，又做这么多事，实在太夸张了——不过一想这是小小年纪就会称象的曹冲，倒也不觉得夸张了</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈给哈可不就是穿越来的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;段景柱在这本书里算是活了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不就是穿越来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都没人吐槽吗</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这有个漏洞吧，关羽应该认识周瑜呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竟然都有班车了？真成旅游景点了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;严格来说，二爷应该不会用秀才这个称呼</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里之前没细看  颜景生是在这知道真相的</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;火烧赤壁都沉的住气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以救小强最重要的几个人是魏蜀吴三国联手贡献的[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有东吴大都督的影子了</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里我真以为是提着秦桧的头了，这老不死的</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;惯在地上哈哈哈哈</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺合理的😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波操作666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;233333</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;+1+1！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;+1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我打第四下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是三楼，打第三下！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;带我一个带我一个呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难怪当初说，柳下跖不知哪来的钱买了雷老四的产业，多少也算个伏笔回收了</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要么小强就打断手脚给他扔到非洲去受苦 要么就直接整死 从生活待遇上扣扣搜搜软暴力又不解气还给他害人机会</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;倡和议以误国，挟虏势以邀君。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;酷爱狼人杀啊</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老吴属实是问心无愧，也是被逼的没办法了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岳飞没药吃是咋想起来的呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;法、西、斯</p>
`;
        case 92:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子：到底咋回事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这一幕，为啥突然想起赵丽蓉老师了呢</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;换做我是小强，这么多条命，我也不杀他，我会把他身上的肉一点一点片下来烤熟了喂他吃，让那几个神医给他吊着命，啥时候救不活了剁吧剁吧喂狗</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪个省都好几个地级市，除了省会外的大城市基本都是了，大连，青岛，烟台，连云港，温州，厦门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除了省会，随便一个知名城市都是地级市好不好，这都不懂吗？大连 苏州 厦门 青岛 烟台 大同 洛阳 开封，哪个省都好几个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;非要给这一段整上来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;地级市不是很普遍吗……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原文是，纪，委，书，记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只能说山西的力度最猛了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;山西？</p>
`;
        case 100:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梦幻联动了！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太有感觉了！</p>
`;
        case 101:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九族：6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开国皇帝这么牛逼  怎么子孙后代就成那样了呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这几句话说得我都觉得扬眉吐气的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是赵二有赵大一半的戎马之风……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该啊，当汉奸走狗卖国贼的下场，该杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅</p>
`;
        case 102:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为你不是文人啊</p>
`;
        case 103:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本：知我者，秦桧也！</p>
`;
        case 107:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岳飞是想让他们为自己活一次。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这300是因为岳飞来的，现在岳飞要让他们放弃信念</p>
`;
        case 108:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你加煎蛋给他们加不加，要不要加点咸菜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一口面条一口蒜，一分没动赵德汉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个必须侯勇来演[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉？我床底下怎么这么多钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岳飞：谁呀，谁把那么多钱放到我家冰箱里的啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;面条。。。。刚开始没啥感觉，后来看了人民的名义之后再看到这段，高官，面条。怪怪的</p>
`;
        case 110:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咋滴，社保公积金给你交顶格了？</p>
`;
        case 114:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;形意拳起源于岳家枪</p>
`;
        case 115:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;才发现，纪检委改成调查员了</p>
`;
        case 117:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，《建国大业》电影，蒋介石的台词，“打牌你不行，打仗我不行，长江防线还要各位通力合作……”。</p>
`;
        case 118:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剥皮充草</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;照这样算，秦始皇更专业。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就都杀了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剥皮实草呗。</p>
`;
        case 119:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是说老朱剥皮充草那些措施吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这的和珅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你问皇帝当贪官……这是一个很深刻的问题</p>
`;
        case 123:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;倒也是个办法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;内奸的正在用法</p>
`;
        case 125:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后小强下辈子叫 郝仁</p>
`;
        case 126:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也是最恢宏的放下</p>
`;
default:
			return '';
	}
}
        