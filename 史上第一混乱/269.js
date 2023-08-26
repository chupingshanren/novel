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
<p>&nbsp;&nbsp;&nbsp;&nbsp;好喂！</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又到10.1了…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光阴似脱缰的野狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我媳妇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这世上哪有这么好的包子～</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连小孩那桌都坐不了了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坐小孩那桌的也是醉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在摆这么多桌要被处理的……</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“不能喝憋喝啦”“要不来点啤的吧”“搁这养鱼呢”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水喝得太多太急 腰子会不堪重负，会出事的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喝水比喝酒更要紧，喝酒大不了喝断片，睡一觉就好了。当年我和同学在宿舍玩斗地主赌喝水，一晚上3个人喝了18L装的大半桶矿泉水，半夜大家轮流跑厕所，折腾大半夜，腿都拉软了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小心水中毒hhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么喝你就是把解酒药当饭吃也得喝麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扁鹊和华佗呢，弄点解酒药啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=5][fn=5][fn=5]</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在想，二胖打架的时候如果是站在小强这边，应该也能找到红兔子~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑了</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦豁，醉驾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强和项羽俩人总是喝完酒开车hhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喝得多了甭管你退酒快不快，酒驾没跑了</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;报名当学生呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扫地僧这么大的职位你能当吗？</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这帮技术人才竟然都没有请保洁</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;钞能力</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是要来抢饭碗！哈哈哈哈哈😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没啥是一顿酒局解决不了的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以最后谁赢了？一直想知道</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙  这么多人也敢钻树林</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，快活快活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打野呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只见佟媛蹲下身子，用手抱着腿，把头放在膝盖上，正全神贯注地观察着地上一只已经死翘翘的蜜蜂，方镇江干脆就跪在地上，双手撑着地，眼睛也盯着那只死蜜蜂。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里怕是有个隐藏段落。。。</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是穿裤子去了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么快的吗</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北京一夜，很好听，久不久放一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;419</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北京一夜，好像这名字，当年很火</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人天生对色彩不敏感，不过更擅长分辨运动的物体和明暗变化，推测可能跟两百多万年前捕猎和采集的劳动分工有关</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;送命题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花容听了想拔管</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;口红我还没认全</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好吧，我女朋友基本只用护肤品~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是[fn=4]</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟军方合作培养狙击手啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在还是韩国射箭厉害</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金少炎扛着门哈哈哈哈哈哈哈哈哈……小强这么久了还是武力值一般呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怕宝金王寅否认，没有化妆么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。。要是他给青海红寿画过妆，那就火了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你以为是青红海寿？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;附近有个金廷会所[fn=11]</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛德华、吕德华、姬德华、苟德华、朱德华！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艾德华也是德华</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘德华，杨丽娟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是马德华</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;于德华吧</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四百多个人，不知道的还以为游行呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;据说如果你把你最爱的歌设成起床铃，那么三个月以后，你一定会……
再也不喜欢它了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以前用过秦腔，他大舅他二舅那个，一响准起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说闹铃越难听越管用</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想了半天也没想起来封魏王和郑王是哪一章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你应该跟刘邦嬴哥要两道圣旨，赐婚的，这就算原始官方认证得了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太逗人了 一本正经的哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平叛战役可还行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铁叫子乐和铁笛仙马麟不都在吗？这种排场一般也是宋清组织的，肯定这仨带着几十个三百弄的。</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;躺着看的，笑着没拿稳手机，砸脸上了[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我正在拉屎………笑的我把屎夹断了[fn=12]</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;侧面细节描写啊，项羽还是个大男子主义，目前还是看不起女人打仗的，要到后面……（打码不剧透）</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恐怕不好冲，不能做美国牧师的腌臜事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小孩看热闹不对吗？怎么成敌军了…</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;撒糖呀，或者撒小红包</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圈圈叉叉图可还行[fn=4]</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周郎妙计安天下？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段可以算是个伏笔吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个是真伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊？不是突然被剧透，不过没关系啦，看得更开心了哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白面书生，羽扇纶巾，指点江山，好嘛直接把苏轼夸周郎的词用在这了，小花可真会埋伏笔啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大都督威武！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回头看才知道是伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜老师一直带着作业本啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然是俏周郎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽扇纶巾谈笑间樯橹灰飞烟灭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周瑜啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周郎妙计安天下？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是没想到埋的这么深</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;算是了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段可以算是个伏笔吧</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还以为装着“三年模拟五年高考”[fn=60][fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;酒心巧克力太阴险了哈哈哈哈</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁山好汉都是带着人马去迎亲的，那家小孩子敢过去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈好有道理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦哈哈😄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为毛我一直把他们的话脑补城戏腔~~</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;见人就砍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲动就白给</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就着人，我们这方言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;见人就白给，见人就白给……</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈大家都很开心啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中二病犯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太二了吧……看一遍笑一遍</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：我笑木兰少智，包子无谋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我笑周瑜有谋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丞相何故发笑？
答：我从未见过如此厚颜无耻之人（君子）！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我笑诸葛无谋，周瑜少智</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丞相何故发笑[fn=11]</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你T&M真是曹小象的亲爹！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈哈哈哈，我笑诸葛亮周瑜已经智谋不足，若是我用兵当在这里埋伏一军，又当如何啊。。啊哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草！这个梗！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真他妈给我笑麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我笑诸葛无谋，周瑜少智。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丞相，你可别tm笑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是曹操儿子的爸爸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑喷了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹冲亲爹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈哈哈哈，我笑诸葛亮周瑜已经智谋不足，若是我用兵当在这里埋伏一军，又当如何啊。。啊哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你见过这么魔性的曹操吗？[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只笑周瑜无谋，诸葛亮少智……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是曹操在华容道的台词吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你T&M真是曹小象的亲爹！</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好么，洋河二厂的一万响大地春雷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;华容道都写出来了[fn=5]</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骂的好！哈哈哈哈哈😂</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死人啦哈哈哈哈哈</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一手行贿离间计用的好哇</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时迁火烧翠云楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;职业病[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是结婚不是杀进县衙啊</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“俺叫你捏！”“你是谁咩？”“俺是你滴女婿儿呀！”“那俺是谁咩？”“您是俺滴岳父老泰山捏！”“那老泰山还能咋叫捏？”“您是俺滴爹呀！”“那你是俺滴？”“俺是你滴儿呀！爹！”“哦！那开门叫儿进来吧！”</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然有点感动</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子人好啊</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;排泄。。老会计一激动拉裤里了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前没注意，从包子脑袋生出来的那一刻，之前一直没注意脑袋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;排泄？应该是发泄吧？</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前邦子说过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霍，这机灵的</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打白宫都够啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，感动的一塌糊涂。差点就泪崩！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吓的[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实也能理解包子他爹，总觉得包子长的不好看，然后碰到这么一个用心的女婿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去打盧森堡，比利時，摩洛哥什麼的應該也夠了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都感动哭了，何况新娘的亲爹呢。。。</p>
`;
        case 88:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抛去空座都满员了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我很欣～慰～～</p>
`;
        case 89:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一大男人不经意间被破防了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我靠，眼睛进沙子了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子这女孩值得这么对待，小强也是好样的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子小强真好，包子值得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要敢灭门，羽哥先拆了你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小时候我爸也这么说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜天下父母心啊</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一般做的不太熟，不至于是生的
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这应该是新娘进门，给新娘的，新娘说生。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不怕吃拉肚子咯？</p>
`;
        case 91:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就是看了这段，说了句超生，结果长辈没反应过来，打了我头一笤帚疙瘩。[fn=43]</p>
`;
        case 92:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少生优生，幸福一生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，看了这么多遍这遍才反应过来这个超生是前面生个足球队的梗——我一直以为是某个足球队呢……</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子形象跃然纸上，好生动</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;带着穿越人士娶亲这段，真他娘的是绝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我突然想起来别人骑自行车带你，然后你坐在后边两脚刨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=5][fn=5][fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完这一章，我也终于体会了一次在地铁上被人当成**的感觉了……( ｰ̀дｰ́ )</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不应该走着上轿 应该背着上轿</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;随两张推荐票</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十年书友随礼月票一张</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我随一张月票</p>
`;
default:
			return '';
	}
}
        