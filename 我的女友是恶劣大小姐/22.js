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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;二刷又看到这里了，哎，淡淡的惆怅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梦结束的起点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二刷，又要看完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是要开刀了，不敢看了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五刷的我又要看完了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二刷又看到这里了，哎，淡淡的惆怅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一反应是忽然狂风平地起 美人如玉剑如虹[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隐约雷鸣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这算伏笔吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隐约雷鸣,阴霾天空,但盼风雨来,能留你在此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书高潮？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这名字，感觉要搞事情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂风之力！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者写的很用心，但这本结束我也不会再看这类小说了，最近看到鬼子们谈南京大屠杀时开怀大笑的视频让我十分愤怒，不想看到关于他们的任何作品了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;QAQ有大佬会写同人嘛好舍不得啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么我下意识想到的是 裙子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;慌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;慌了哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章节名看的人心里一慌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暴风雨来临之前的宁静被狂风取代了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀吼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没到12呢，这就出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是慢了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一

</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太天真了，渡边</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京依旧热</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小莲！可怜的小莲！为啥要回去啊，说好在这边读小学的呢</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈。</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晃子的年龄也随着青奈的恋爱进度不断的退化啊[fn=24]</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看什么看，还不快点，就等你了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铁腿水上漂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，果然</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈 笑死了</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;被封了半年的评论权限刚刚解封，看见大腿肉就兴冲冲点进来了，结果你们在讨论菜价，这真是我没想到的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;点开之前想不到在说猪肉价</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我懂了，晃子是猪(</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就说想到方舟生存进化了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么你们在讨论猪肉？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子这是越来越不把渡边当外人了，不自觉白给[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;@O黑羽快斗O 来看大腿肉！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这楼歪的有点离谱呀 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别提了，鬼知道猪肉啥时候便宜一些</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有问题，绝对有问题！
是我萌新了，没有读懂他们的意思！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被封了半年的评论权限刚刚解封，看见大腿肉就兴冲冲点进来了，结果你们在讨论菜价，这真是我没想到的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;点开之前想不到在说猪肉价</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最近猪肉是不是掉价了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3块钱一斤，10块钱三斤，少了不卖，多了没有。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老板，这肉多少钱一斤？</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这波啊，是肉弹冲击</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来是激动的耳朵都红了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，原来不是害羞啊。在这等着渡边呢</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;忽然狂风</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我负责吹风，嗯哼，用嘴吹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美雪老师的人设图我看过了[fn=58]确实风进不去，衣服绷得太紧了。
顺带一提专题卡牌会在6月的时候出</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;风：太大了，进不去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;福利时刻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在现场，我是领口的第二颗扣子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是风</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让👀眼珠子灌进去</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我为党国效过力</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这几段的画面感好强</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个雪糕她正经吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不一样的口味.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃雪糕</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;田井中律附体，律队瘫[fn=31]</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的土下座，好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;土下座</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边首相，生涯之耻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;首相鞠躬就行了，泥们懂不懂啊[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波，这波是提前训练，未雨绸缪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 好耶 渡边首相的第一次谢罪</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;准备冻手！</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我想吃你</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;抗议无效</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然非人类</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不，想挑你</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊 青春！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全校女生：我们要看渡边君帅气的土下座。
（四舍五入等于球草向我求婚）[fn=8]</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;挑好了直接就下嘴了是吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;prprprprprprprprpr甜</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐就不能用那个姿势吗？气抖冷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：嗯?
彻：噗通！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣默默趴下[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实是驯好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：嗯?
彻：噗通！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐就不能用那个姿势吗？气抖冷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可美姬小姐说她喜欢猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我好想做美姬小姐的狗🐶啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太好孝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有神？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不信你没有在麻衣学姐那里跪过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到真姬也可以[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后就要加个清野神了</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;里七枷社－扶大地</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，全员公敌</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔蝙蝠幽灵！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以为要滑铲勒</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她逃，他追，他们都插翅难飞！</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;调情一下，帮外人是不可能的</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;至今为止，我们任然不知道前面22楼车速有多快[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“胸部又大又圆，十分丰硕”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;制度不是脱了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直奔主题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面的22楼呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是少了？</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边首相未来对美必修课程</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老躬匠精神了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这特么有政客那味儿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为未来从政练习鞠躬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;躬  匠  精  神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本的政治家怎么能不会鞠躬呢</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;布丁味雪条</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奶香味的，别问我为什么知道[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么味？[fn=21]</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？十一段之前你刚说过什么来着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;lsp</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈抓住了只有四强的痛脚(ಡωಡ) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去年金足农的吉田辉星一个人把一个非职业学校带到甲子园冠军赛，就是败给了大阪桐荫。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四强撞车大阪桐荫，那是真实存在的棒球名校啊。b站还有他们学校吹奏部的视频。</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，肯定已经被发现了[fn=31]</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;虽然不能做自己，但没有完全不做自己</p>
`;
        case 175:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大师分析一下，凛为什么要拦一下。</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;借着又多亲了一下 不愧是你 渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲一下，就一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会是你</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;妻子视角</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无他，神的恶作剧而已[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜呜呜呜呜呜呜不要虐神！</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我懂了，怪不得你只鞠躬。你这家伙是想要当首相是吧，提前训练躬匠精神[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以牙还牙！[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让这个学校所有人怀孕即是我迈出野心的第一步！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有私密马赛那味了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边同学，你还挺有躬匠精神啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来！</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;mo~mataku</p>
`;
        case 178:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;昨天看到一本书，里面作者前面刚讲读者不要教作者写书，改来改去最后谁都不喜欢。结果后面提到了这本恋爱游戏，评论就有人跳出来说美姬这个人设不好，应该怎样怎样。你不喜欢不代表别人不喜欢，美姬人设怎么了？没有这个设定渡边会逼自己笑都不能笑么？没有美姬，渡边现在早就成为一个人形种马了，哪里会是现在的东京帅哥！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看见楼下有人评论其他作品，下面有人喷美姬人设，然后决定跟人对线。说你这种行为，只会给作者带来麻烦，跟喷美姬人设的人又有什么区别，跟饭圈女孩又有什么区别，难道你去喷几句，就能把别人说服。一句话，粉丝行为，作者买单。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本当にすみません🙇‍♂️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果咩那塞，咔咔咔咔咔，红豆泥果咩那塞，咔咔咔咔咔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每天带薪拉屎看一章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到有人说，每个人都有自由发表个人看法和评论的权利和自由，但权利是权利，素质是素质</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;私密🐴塞
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿 我有称号了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有时候读者也有一定的道理啊。初版的美姬就是完完全全的恶魔好不，毒死了一大批读者，结果就是作者文笔好，剧情上佳，也逃不过首订100书差点太监的命运。后面作者稍微修改了前面的内容，才让美姬勉强让人接受，再通过后续的微调，把一个杀人如麻的恶魔变成一个高高在上的女王（戳了很多书友的XP）。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;yysy，跨书打击不可取</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;理客中能不能爬[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大点声 ，这么小声还想开军舰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很喜欢这样的日常，所度过的每一天，都是奇迹，平平淡淡，却又青春无限。
毕竟在坐的各位永远都是十八岁的少男少女。✧ෆ◞◟˃̶̤⌄˂̶̤⋆biubiu</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听不见！！！！这么小声还想打棒球！！！最帅的那个，这么小声还敢开后宫？？？！！！！再来一遍！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看见楼下有人评论其他作品，下面有人喷美姬人设，然后决定跟人对线。说你这种行为，只会给作者带来麻烦，跟喷美姬人设的人又有什么区别，跟饭圈女孩又有什么区别，难道你去喷几句，就能把别人说服。一句话，粉丝行为，作者买单。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听 不 见 ！这么小声还想不土下座！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起高中做错了一件事，被罚了跑操场10圈。。
然后我跑了30圈跑到放学。
现在就很奇怪自己那时候的脑回路

</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;斯米🐴塞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗咩那塞！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，看一章少一章了[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昨天看到一本书，里面作者前面刚讲读者不要教作者写书，改来改去最后谁都不喜欢。结果后面提到了这本恋爱游戏，评论就有人跳出来说美姬这个人设不好，应该怎样怎样。你不喜欢不代表别人不喜欢，美姬人设怎么了？没有这个设定渡边会逼自己笑都不能笑么？没有美姬，渡边现在早就成为一个人形种马了，哪里会是现在的东京帅哥！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果咩那塞</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我不信，除非老师也亲我一下[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舌头下面比较甜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为唾液中淀粉酶的作用，亲吻时候口水是甜的</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我靠，我第一反应是这个
“你这是什么味道？”“黏土”“黏土？”“难吃”……“糖被拿走了”
双倍狗粮打击</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;糖果超甜ξ( ✿＞◡❛)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艾玛齁死辣[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，让他装到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，老师，我的老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘴里的糖味，真甜！</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;更刺激了ㄟ(≧◇≦)ㄏ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是吃你[fn=4]</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日本的冰棍这么高级吗？还能再来一支？</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你的童年我的童年好像都一样～</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看成巧克力与香兰子了[fn=31]</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你舅宠他爸[fn=26]</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;绿舌头，小时候见过，挺喜欢吃的，现在找不到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;软雪糕，绿舌头</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我吃冰棍都是舔着吃的，太硬了，咬的牙疼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一般硬的叫冰棍软的叫雪糕</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;，提示删减</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这督导没感觉了，还是老师比较亲切</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怎么抢章说的台词？[fn=31]
删了我发！</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻去了，人没了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不打电话上去就下不来了</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我准备好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：我要彻下面给我吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我准备好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸君，痴女，我要定了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我准备好了，我准备好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做人呢，最重要的是开心。你饿不饿？我下面给你吃……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一波啊，这一波是轻描淡写就写了数十万字的剧情，乌鸦还是高啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去了就留下来吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：我要彻下面给我吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我准备好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣下面给渡边吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陷入沉思……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣:我没面好吃？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哎呀，真的不喜欢吃虾呀，鱼能吃虾蟹吃不了</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;藤木晃子，日日退化中~[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;闪灵？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜筒圆，甜筒扁，甜筒变天眼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子老师我可以！[fn=24][fn=24][fn=24][fn=24]</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，他俩可比你成熟多了，各种意义上</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这一段真的太有生活气息了，画面感油然而生</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真熟练啊</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：让她赔！
晃子：陪就陪！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一起洗[fn=4]</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岂可修，被装到了，，，，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，美姬，我的美姬</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这也太可爱了[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嚯嚯嚯嚯嚯嚯嚯嚯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日份的晃子cc也不太聪明的亚子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霍家拳的套路招式灵活?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幼稚鬼[fn=33]</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;挺正常的，在你看不见的时候你认为一本正经的老师说不定就是什么样子的沙雕呢[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我现在有充分的理由怀疑不止五个人一起生活[fn=34]</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;人活着就是为了明日麻衣！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎哟喂，我最难以招架这种直球了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说奶油是用牛奶打的吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐学姐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎哟喂，我最难以招架这种直球了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人活着就是为了明日麻衣！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐冲鸭！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇  太可爱了吧🍋🍋🍋🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;护夫宝学姐[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐😍😍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐战神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣有点可爱</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你是哪里来的幼儿园大可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子大失败！
今日之胜负：明日麻衣胜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈😂</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱啊 想娶一个</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我和晃子贴贴，你们自己贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不！让我来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作为一个普通人我还是喜欢晃子多一点，太可爱了🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快，呼叫乐迪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这电影剧情我看过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都别动，让我来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;起伏学生被轻松反杀
从今天开始，你就叫丢人晃子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请务必让我来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我和晃子贴贴，你们自己贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汪汪队出击！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二楼呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是我来吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不！让我来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来我来！</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;话说好像好久没有看到系统商城刷新了</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只有.jpg[fn=58]</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;固定狙击点之一，还有鞋柜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“你喜欢这所学校吗？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飞舞的樱花，孤高的背影</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某咤：你能和我并肩吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早上好，我的神</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;漫无止境的八月</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京队又赢了</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毁灭吧！人类！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;糟了。原来回归主线值得是清野神灭世，渡边舍身救世。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毁灭吧，赶紧的！</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;赛文战死，东京沉没！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哥斯拉是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边一定会被辐射成最强的那只怪兽</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;第一反应不应该是地震海啸吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;福岛海底的哥斯拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的名字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原始生命态来了</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;守护玫瑰就这么用的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂风听我号令</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂风臣服于我（突然串台）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天气之子渡边彻
敬请期待!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晴天娃娃？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还记得某次小鬼子刚放了污水，台风就把水刮成雨云吹回去淹了东京</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;预示着狂风来了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名想到某部gal</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大预言术：台风登陆，清野将变成一座孤岛，而渡边则是唯一的一条小船。</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;中国南方沿海省份的人就笑笑不说话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神之黑历史</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛明白心意一周年庆典即将到来！</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不挨饿，他吃的正经吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神之吃醋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭唧唧</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我最快乐的时候是一个月拿91块钱当老师的时候</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回到那个吃西瓜的夜晚吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和神住的近的时候，每次渡边出门都会期待偶遇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好想回到那个夏天 名字刻在了盾的背面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野：我也想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Wings</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说了，清野神越发后悔，早知道就早点下手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回到那个吃西瓜的夜晚吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夏去了又回来，而人却已不在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可笑到猪笑你也笑，一万二的笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我多想回到那个夏天～
蝉鸣在田边吹过眼睫～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我最快乐的时候是一个月拿91块钱当老师的时候</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夏天的风我永远记得
清清楚楚地说你爱我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢你，出现在我十七岁的夏天里。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还记得昨天 那个夏天 被风吹过的一瞬间～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是真话</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;沉默就代表羞于出口的认可</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能说谎，不好意思说我也想了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是真话。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是真话</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有点心酸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;土下座？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全体木下座谢罪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;棒球部的谢罪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑 道 训 话</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前边写的是寸头男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女生也寸头吗？</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明知故问！？</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻：卧槽，这也行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;契机是去年那场棒球赛
直接拉渡边去命运的长椅啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也来跪下</p>
`;
default:
			return '';
	}
}
        