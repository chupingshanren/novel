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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴滴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来晚了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们好快，比渡边还快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然，要看完才能入睡，不知不觉，这本小说已经成为我生活的一部分了[fn=9][fn=9]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都在起点买房了是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会吧，才一秒钟就第四了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗨嗨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;桩机动作原理有人知道吗，为啥能快速一进一出的[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬的床上～[fn=58]</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这几天的膈应被这句话治好了，前几章怎么看怎么不对劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也把你当做我自己的一部分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边你已经是清野的形状了！[fn=6][fn=6][fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿一个让主角变得无情的技能？</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不可能吗？</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;按我最新帖子的分析，两个孤高的灵魂相遇，在互相人了对方后，因为其相似性和清野做出了渡边做不出来的事，自然会加上滤镜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为她是清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巧爷:我没有梦想，但我可以守护梦想，变身！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的不觉得看得难受吗😅
吐了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道怎么回事，清野线看不下去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按我最新帖子的分析，两个孤高的灵魂相遇，在互相人了对方后，因为其相似性和清野做出了渡边做不出来的事，自然会加上滤镜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种感觉吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为她是清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱让人越陷越深</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=53]版本更新[fn=53]：闪光清野凛已加入常驻卡池，闪光清野凛概率限时up，抽取100次保底闪光清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滤镜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白月光啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得不到的永远在骚动</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直说吧，你就是馋她[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我左看右看上看下看，这个女孩她不简单！</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;魔怔了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹，突然想到一个脑洞，美姬现在已经不会厌恶渡边的东西了，那要是来个系统突发事件，渡边和美姬互换身体
然后“美姬”以强硬的姿态，强行对清野用强到喊她姐姐，中间顺势舔一下鞋</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;手里摸着你的头发，心里想着别的女人，不愧是你东京帅哥！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚上10点左右打着游戏的时候，我偶尔会让兄弟们等我20分钟，别奇怪，我那是帮我老婆吹头发去了</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不洗头就反光</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从背后抱你的时候 期待的却是她的面容 说来实在嘲讽 我不太懂偏渴望你懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个太油  一个太干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑夜使者 征服者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个霸道张扬
一个深邃内敛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亮黑和磨砂黑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个是五彩斑斓的黑
一个是深邃幽静的黑
[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸王你值得拥有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个反光，一个乌黑。</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;唉，逃避吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹，看成拉到胯上。。。</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;腰不会硌得慌么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;划重点，各个部位[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各 个 部 位</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说破天  渡边彻也是个处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行？我看你不是很懂喔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们总嘲笑“美姬在睡觉”，殊不知，除了工作繁忙，大部分时候很可能是渡边彻的10体力导致的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那今晚上不睡就好啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;困觉姬总是如此慵懒的原因找到了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早起的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么不行，说清楚</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;被恋人的温暖所包围</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夏天和温暖的被窝是不是有点不合</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;莫斯：说的对！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话不通顺宝</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：抱着我还敢想其他女人[fn=58]</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我爱她，就像爱你一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越来越勇了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的吗(⊙x⊙;)，我一直感觉到不到对九条的偏爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后宫宣言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，你好会啊[fn=4]</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;细节澈彻底底</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;反正不可能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;damei da damei</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;qaq</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行不行就不行</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦放心飞，出事自己背</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一人血书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接下来就是付费内容了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请务必写出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不仅仅是接吻，难道是摸手吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲个笑话，渡边是处[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦放心飞，出事自己背</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一人血书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快发车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;血书跪求</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再写五块钱的[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷差这点起点币了?尽管写</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;背对？背对好哇…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;良将劲弩守要害之处，信臣精卒陈利兵而谁何</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是时候打开浏览器了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算说破了天，渡边彻也是处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是挪开[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对准？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被短剑指住要害？</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;客观就是如果不是渡边，清野就不是坚持自我的神，而是一个自我社死的高冷大小姐
同样不是渡边，九条就是个站在高处视平民如蝼蚁的资本人渣，虽然不反人类也没什么真人性
如果渡边能客观看，清野社死继续抱着书社死，九条该死的坟头草也要没过脚脖子了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想脱衣服看的清楚一点</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我上当了，这就是差距吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女友三大招 我没生气 你自己清楚 随便啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻依然从后面搂住她,手刚伸到她的胸部,立马被拉到肚子上。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正版受害者</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;困觉姬无法正常思考[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻，允许访问
东京帅哥，渣男养成
九条美姬，小泉清奈，明日麻衣
无路拖拉曼，T！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻，允许访问</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后续呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个是哪个？我不懂耶</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;生前遗言[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被偏爱的肆无忌惮啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记住，女朋友说让你说她哪不好，她改。千万不要信！百分之一万的谎言！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这不是客观或主观看待的区别，而是渡边自然而然地主观看法，就是不喜欢，只是能迁就。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条首相的名言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hjh，射手闪现开团</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生前遗言[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死亡发言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被偏爱的肆无忌惮啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;头铁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶，渡边来了，渡边要开始秀了，嘿！渡边没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，渡边直接直球进场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让你说就说啊，打地铺吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还是中陷阱了啊。</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;女人的嘴，骗人的鬼，但是神不会，神只会偏爱她的信徒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵 女人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生气了生气了，刚刚还说不生气</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;睡哪？清野房间？[fn=58]</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今天，依旧是舔王渡边的细节胜利</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;连被子一起抱住感觉好可爱啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，上半身</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;擦背？怎么擦？用手臂擦？用手擦</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;实话实说，如果不是日久生情，他们其实合不来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边觉得自己很有优势</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老夫老妻可</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎嘿，我闪避点满了</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不知道多少人还记得当年天珠变周小胖那句“放开你我就没老婆了” 
网文都十多年了不免触景生情</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我在听[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么时候变成“我不在。”就厉害了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;似曾相识，美姬不能和佐仓一样大失败啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“村上。”“我在。”</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;各位都学着点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《反客为主》</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来人，把我杀了助助兴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真放开 怕不是要杀两个小三助助兴了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬也无法挣脱彻的温暖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！美姬，你堕落了呀！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能再扭了，再扭明早起不了床了[fn=4]</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个森林他正经吗？</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;删减了[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有，还没亲到骨折呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到美姬你投降为止</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;掀开被子让我也康康</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“腿抬一下。渡边彻的嘴唇暂时离开她的后颈。”</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“说了今天不做!”

“姐姐~,腿抬一下嘛。”

“你要不要脸,说话真恶心,谁是你姐姐。”

“姐姐,姐姐,美姬姐姐。”

九条美姬稍稍抬起腿一点点,渡边彻扶住,又抬高了一些。

“嗯——”她发出起伏荡漾的低吟。</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边震楼器[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人呐，给爷配音搞起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“姐姐~，腿抬一下嘛。”
“你要不要脸，说话真恶心，谁是你姐姐。”
“姐姐，姐姐，美姬姐姐。”
九条美姬稍稍抬起腿一点点，渡边彻扶住，又抬高了一些。
“嗯——”她发出起伏荡漾的低吟。
“我们两个果然还是得这样才行。”渡边彻舒服地叹了口气。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这楼呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咯吱咯吱咯吱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;删减了好多[fn=31]姐姐，腿抬一下嘛~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传来了一阵阵吸吮声</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？直接断了二十多楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这？楼呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;淦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人呐，给爷配音搞起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边震楼器[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;配音何在？</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正版受害者</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太秀了，别人那里都是女方生气男方做的时候想别的女人，好家伙，到渡边这就变成这样，我tm直接好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在？能发个配音嘛[fn=58][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;客观</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“客观”是错字</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一个是上嘴 一个是下嘴</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？？？渡边你杀疯了吗，什么时候这种实话也敢说了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我超勇的啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强啊</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“今天不做”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要！停！下来！   ×
不要停下来！！！   √</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的浏览器怎么自己打开了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别停？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没评论？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还是个孩子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“今天不做”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，被子已经准备好了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;团长，不要停下来啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要让战斗停下来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要我们不停下脚步，道路就会不断延伸（黑色高级轿车）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要！停！下来！   ×
不要停下来！！！   √</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;lsp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要停</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要停下来啊！</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;自 己 的 事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你只是一个无情的打桩机</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野：我，我同意你养三个情人。说完以挑衅的眼神，撇了美姬一眼[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实现实开后宫,要有财有权.夫人还不能强势,妻家也一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是你欠渡边几条命在先</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这不就是为了你自己那糟糕的性格带来的不利因素做出的妥协?就像日本被视为神明的天皇为了保命像麦克阿瑟认怂一样。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你拿现实说那是挺少的，小说里面就那么回事儿，哦不对现实里也不少</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是性格好，而是在二人关系中，九条处于弱势。送礼都都想随便应付，本性没变。反倒是清野，会考虑赢了之后的明日。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下的全部枪毙，我毙人不需要证据[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？洁癖是装的吧  和别人共用一根棍子咋就不犯洁癖了[fn=58][fn=58][fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐和老师还允许渡边养个正宫老婆哎[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野：我，我同意你养三个情人。说完以挑衅的眼神，撇了美姬一眼[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实现实开后宫,要有财有权.夫人还不能强势,妻家也一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种语境中应该加上：嗯～啊～(￣▽￣～)~</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;舔鞋是羞辱，喊姐姐是应该的。这与性格还是有关系。说白了，九条的和渡边与清野不在一个层次。</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;难道是也用这招?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在渡边说的都是屁话，要等他贤者时间大彻大悟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在...大师我悟了！</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你再怎么叹息渡边也是处</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;泡（炮）姬吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;flag已立[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用什么擦？[fn=58]</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真相了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，美姬居然是受！?哦对了，好像本来就是新娘来着，那没事了。</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;自此，九条欠渡边的已经还完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目了，美姬的魅力果然是她的改变</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她 同 意 了
再放送[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬果然还是爱着神的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从这里开始，美姬认可了渡边“如果和好，就可以和清野嫁给同一个男人”</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;侧后或者背后，都可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个字就是一个画面！6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这。。懂的都懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是乌鸦，毫无违和感把姿势写出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别停啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姿势有了[fn=1]</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬啊[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬的又一波绝杀，无限的包容和无限的爱使他们羁绊越来越深</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，越是体现九条做出多大改变，就越是衬托出渡边的渣，毕竟九条怎么改变，渡边的白月光总是清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，渡边给爷爬，学生就要有学生的亚子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看到美姬迁就渡边就心疼😭美姬，我的美姬😭😭😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬后期真的杀疯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉自家庭旅行之后，美姬已经默认渡边跟清野的关系了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还在体内呢，哪有放弃一切的样子[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得不到的才是最好的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里说的是只针对这件事，渡边没有客观的看待。和好的问题，美姬一直在让步。而清野却坚守自己的原则，甚至不肯原谅美姬。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，越是体现九条做出多大改变，就越是衬托出渡边的渣，毕竟九条怎么改变，渡边的白月光总是清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，渡边给爷爬，学生就要有学生的亚子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬看似稳如泰山，心里却时刻害怕失去彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬和渡边的爱是在两个人无限的包容之中，两个人命运的纠缠越来越深。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃醋了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬！你是女王，不需要这样！</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我永远属于你，也永远属于她</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬大人[fn=21][fn=21][fn=21][fn=21]</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边对这俩都不客观了，回到最初的路人渡边可是对这俩都不认同的。还是败给了颜值的加成，要是这俩颜值3现在我们看的就该是渡边首相大战财阀[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;客观对待清野是欣赏，客观对待九条是不认同，起点能一样吗？</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小美姬撒娇了</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这只是占有欲强吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边其实占有欲特别强 </p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好甜，看不懂的只能说 当单身狗不冤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远给美姬留着外套</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然楼下没说错，但是我觉得跟洁癖也是有点关系，当然，楼下说的占绝大部分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟洁癖没啥关系的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我发现本楼的人都没看懂这段话啊
这是前面渡边穿个外套去教堂，
凛就说“不热吗？”让他脱了外套，
然后美姬就说“你这么容易受人影响？”
外套是小因素
关键是外套的穿与不穿代表着听凛的话还是听美姬的话。
所以这里的话背后意思是：以后我绝对会选择你。
算是一波小情话表白吧，看懂了会很甜。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;淦，我有老婆了，第一眼都没看懂→_→</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的体质不需要外套</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起来，之前清野送袖扣的时候渡边想“我夏天不会穿外套，为什么不送一年四季都用的上的礼物呢？这次是我赢了”，那现在岂不是一年四季都穿外套了2333这波啊，这波是清野糖（雾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书评？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这有啥看不懂的，你有没有女朋友又不是取决于你懂多少情话(捂脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有没有懂哥解释一下👀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别学了，你没渡边帅，没渡边多才多艺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看三遍懂了，可能这就是我为什么是单身狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了学到了，女朋友在哪领？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小嘴抹了蜜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太酸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我懂了,我不是单身狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是真的甜，看懂的依旧是单身狗狗的不想说话。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好甜，看不懂的只能说 当单身狗不冤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远给美姬留着外套</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;师傅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经扭成蛆了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥没看懂啊[fn=12]</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《今天不做》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天不做[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要停</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里难道不是美姬翻身做主人吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说话管说话，手别停啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;继续继续</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这句话该怎么理解？</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;配音，配音（大喊）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车车唉～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今晚打给你了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;…………(๑• . •๑)╭∩╮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;......</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波他娘的杀疯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恐怖，消失了20个评论[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明显示有配音的啊，我配阴呢？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们啊，配音小姐姐不害羞吗！请务必私发给我，谢谢[fn=53]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;配音（拍桌）配音（啪啪啪）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶喽噫[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;配音，配音！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看的上一本这么飙车的是《孝心变质》，现在已经被下架了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来点配音\[T]/</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飞车党集合！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就是一楼的朋友，大家直接发给我吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个时候我无比想念袖袖,肉肉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;配音，配音（大喊）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车车唉～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有个朋友他想....[fn=58]</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;删得好快，还好我看完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;希望别被删掉。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来补充……</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你们衔接的挺好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学外语？什么学外语？我也想学外语！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《清野在授课》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真就和当妈的没区别了，这是提前练习？</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;多拉贡福来！[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这玩意是我学托福的时候才背过的词汇，超纲了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又学到一个新单词，距离通过六级又近了一步</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莱 伊 飞 龙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“跟我读:G～O～O～D，咕噜咕噜～”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;dragonfly拆开来看就是飞龙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沙漠蜻蜓是龙地面还是龙飞行来着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龙舞的拼写是dragondance，读法是多•拉•攻•荡•死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以又叫龙蝇？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是沙漠蜻蜓是龙系的原因？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一眼还以为是doublefly</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蜻蜓龙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很好奇凛读的是拽根斧来还是哆拉公胡来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这玩意是我学托福的时候才背过的词汇，超纲了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龙蝇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龙飞   你也是ms？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，10年抓根宝不请自来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在一想到龙第一反应不是抓根而是多拉贡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多拉贡胡赖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飞龙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多拉贡福来！[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷还不知道这个单词呢。</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;dragonboy[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;dragonfly</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;dragonfly</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龙飞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多拉贡弗莱</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;多拉贡博爱[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多拉贡夫赖</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;考研词汇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这几个一下子简单很多，lawn（草坪），finger（手指），pal（朋友）</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是吧，这儿都改成督导了？真的难受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉长大后又是一个美姬和清野</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;比赛骑渡边吧。渡边不动看谁坚持的时间长。估计清野最废[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个马他正常吗[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马都听渡边的(ಡωಡ)hiahiahia </p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;昨天隔壁屋太吵了。没睡好。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;流汗的运动，不要叫我</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;网球男和女的差距真的绝大，有兴趣可以看b站的一场表演赛，男的发球女的一个都接不到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕小布:我最喜欢看女人打架了[fn=33]</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:这个月所以饭我包了[fn=58]，给你来点电脑配件</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如果不考虑背景，我污了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 你说这个我可就不困了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;体力测试</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有网球可以吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尺度好大，车好快[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：你们四个一起上我也可以的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：就这？我能打6个[fn=58]还不带歇息的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一对四，这不对劲[fn=24]</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬防母亲比防神还严</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这占有欲，还真是可爱😊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要原因还是身体接触吧，渡边跟清野身体接触很少</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你吃你🐴的醋呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某安暖直呼内行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得美姬的底线，其实不是清野不行，是九条太太不行……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;知母莫若女[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;：最近我的👩🏻有点奇怪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬防母亲比防神还严</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃醋啦，哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：我妈搭上了我彻的肩，想掰开[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盯～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盯…………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这占有欲，还真是可爱😊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=8][fn=8][fn=8]</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看认真与否</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看评论区，其实挺纠结。因为有时候有的人说到点上了，有时候有的人就很扯淡，明显没有仔细看。想反驳也又怕刺激到人，也烦人⋯⋯起点没有屏蔽系统不太行。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不说这个都忘了，清野的运动能力感觉就是设定提升上去的，一个体能极差的人，纯靠技术能跟渡边打的势均力敌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一色漏出甜美的笑容:西内！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下现状[fn=26]
一楼
二楼
一楼
二楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自信的凛[fn=58]，现在的渡边彻已不再是昨天的渡边彻了，他每一天都在进步，你不能想象他有多努力。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：“决定了，不穿安全裤了。”
渡边彻：“我认输！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是当初，现在的渡边已经不做人了</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学了两个单词，要准备四级了！！！abandon,abandon。。。啥来着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;xdm，六级现在都没准备能过吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;despair</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，我要是早点看到这能多学一个单词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关键点不应该是这是半泽直树里的梗吗 怎么都在学英语[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;xdm，六级现在都没准备能过吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学了两个单词，要准备四级了！！！abandon,abandon。。。啥来着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不应该是desperate吗…我学的啥？[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;despreat
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一眼就看见sp，我还有救吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蜻蜓倒是好记，龙飞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天又多学了两个单词，过四级又多了一份希望，谢谢乌鸦[fn=31]</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你忍得下这口气吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦哦哦哦哦哦</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“打假赛，懂？”
毕竟可以让太太们做饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;!开始改变了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野都没受过这么严格的看管，美姬对太太的心思～懂的有点多啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经直接叫凛了……美姬呀……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手：危！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇哦～</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;干的不错，两人关系有进展了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双关啊！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：咱们可以各论各的，我没什么所谓[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿！！！清野神的腿！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;母女对决，决定渡边到底是后爸还是女婿[fn=4]</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;肮脏的大人</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怎么说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刺激美姬和她PK</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太计划通</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑鄙的大人</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还有绝命的凶弹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个网球，让我想起一部不健康的番</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是传说中的肉林嘛？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应有笑容浮现！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;制服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要看渡边光溜溜的大腿[fn=4]</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;楼呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成真姬的我还有救吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以穿了安全裤到底还用不用穿内裤呢？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是确认有没有安全裤吧</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊这…害怕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蚌埠住了</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我劝你不要多管闲事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此乃谎言！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请问安全裤这防君子不防小人的玩意儿好在哪里？？君子不会偷看，小人你穿什么对他有所谓么？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言，绝对是谎言！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再测测楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双标狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;安全裤，人类文明史上最凶最恶的发明[fn=47]</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;龟波气功</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：不来检查一下我们的吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不检查一下太太们的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人与人之间难道就不能多一点信任吗？难道你不穿我就会看了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能组团看嘛[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也要确定一下</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不行，我要确认一下，免得你们这群无耻之徒偷窥。什么？我也看了？我那是在检查，是为了防止你们这群无耻之徒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，放心哈哈哈(ಡωಡ)hiahiahia</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不信 除非给我看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的吗？我不信。让我康康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;掩护我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面5楼阵亡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的？让我康康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，放心哈哈哈(ಡωಡ)hiahiahia</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达咩达咩~~达咩呦~达咩哒nou呦~阿娜达啊~四ki蝶~四ki四ki蝶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面几楼干了啥？全没了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打咩，打咩，打咩呦！（双手做x状）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊～我想到了麻衣学姐，卡哇伊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行，我要确认一下，免得你们这群无耻之徒偷窥。什么？我也看了？我那是在检查，是为了防止你们这群无耻之徒</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我也有东西没结账</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我康康（大声）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太我可以[fn=21][fn=21][fn=21]</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条妈妈，您好啦[fn=58]</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好儿子，怎这般爽利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在将来的某个场景：“知道我是妈妈，为什么还那么粗鲁。”</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太可爱了 渡边桑</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小嘴甜的一抹多</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是这里吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迷妹喜加二预订[fn=31]</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;同类</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以渡边你的关注点在这里？</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还有谁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可一世的大魔王！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼↘！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可一世</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我赶时间，你们四个一起上吧！[fn=4]</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“原来是这样”清野神入手不可一世</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;体力为0的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么叫夫妻相啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起来渡边第一次用魅力-笑容时候的拷贝忍者清野神了[fn=31]</p>
`;
        case 179:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;配合</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年我打羽毛球双打和我同桌也是这样，三年的队友了，基本我前场一动，他就知道我是想接球还是让他跳杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;信任</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;默契(*ﾟ∀ﾟ*)</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;网球是草地？</p>
`;
        case 181:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;求生欲极强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舔狗！舔狗不得ho……啊，是帅哥啊，那没事了</p>
`;
        case 182:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那个叫啥来着，零式？</p>
`;
        case 185:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬大人万岁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邪教现场，小伙子，你要入美姬神教吗</p>
`;
        case 187:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;别废话了，直接穿上黑色大衣开启双刀流模式，耍星爆弃疗斩吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宁就是越前彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会超能力打个屁的网球。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中二感十足！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越前龙🐴？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还差得远呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就是武士越前南次郎？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草我想到的是碧蓝之海的学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开口就是老越前龙马了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越前龙马30集前的二刀流战法就是双手换拍。他爸开创的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越前龙马是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别废话了，直接穿上黑色大衣开启双刀流模式，耍星爆弃疗斩吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;星爆气流斩！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;星爆气流拍！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宁就是越前彻</p>
`;
        case 188:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没评论？不科学啊</p>
`;
        case 192:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;以上这段我自动置换剧情，先走一步</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊学到了！</p>
`;
        case 193:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我认为6个还是不够，两老师也加上吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肾虚，总是在过度劳累之后[fn=58]</p>
`;
        case 194:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;运动量还是不够啊[fn=11][fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚上运动那么剧烈，早上都起不来，看来是药吃得少了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来是半斤九两</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样不行啊，以后怎么跟砌决战200个回合啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬晚上没运动我很难认同[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还要加强，早上老是起不来可不行[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么没运动</p>
`;
        case 196:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;反正我觉得四个女主一起也累不到渡边，乌鸦你懂我意思吧🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甚至加上俩太太也没问题[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日后怕不是会在🛏️上说这话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早年种马文哪还一个一个攻略，不都一张大床一锅端吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日后你就知道了[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想试试？[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么有四个一楼？？？合租呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野以后怎么办哦[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六个人一起上可能就能赢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四个一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甚至加上俩太太也没问题[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;足够让你俩一起把投降喊个不停[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正我觉得四个女主一起也累不到渡边，乌鸦你懂我意思吧🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;目前来看，会有6个老婆起不了床</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:你想象不到好[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等以后你就知道了
时间会给你答案</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;同时对付俩大人不在话下[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有能把美姬累到第二天起不来的体力[fn=31]</p>
`;
        case 197:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;2：1，我宣布，美姬胜（我不管，好球就是美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;OMO</p>
`;
        case 198:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：一直想看看你这副表情[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接翻了27辆车[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=24]哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凑个整</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全军覆没</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示:一个人不行，必须一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是炸了多少楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特长 体力好 这是两个优点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算是这样，渡边依然是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;起点大量人口失踪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被“车”撞到了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你早不早起和我渡边凛有什么关系</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你起不起的早和我渡边处有什么关系</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咋又炸楼了呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚上看的小说，早上起来我妈问我为啥脸上这么脏还有车轮印，我说我晚上熬夜看小说了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特长，体力好，时间久，量大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算是这样，渡边依然是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好羡慕，不对，好可恶，我也想拥有和她一样的体力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;地被牛耕坏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是巴比伦空中花园嘛，还真是有够吓人的呢[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛哇，这么多楼被哔了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论去哪里了？←_←</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至少翻了40楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=59][fn=62][fn=59]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这楼发生了啥？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美🐔：如果不是吃不消我会让他养情人？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时长，量大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，好几十楼啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，直接从四十楼开始！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，人全没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面那几十车人就没了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;40多楼沒了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为日夜操劳劳累过度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙！四十多条评论没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边永远的处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原谅我不厚道地想到了渡边少女[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去，子弹又滞销了！前面的评论全挂了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才多久？就都没了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十七条段评没了，可怕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;28楼以前都没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错，正经陪练一晚上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;集体消失</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：一直想看看你这副表情[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接翻了27辆车[fn=8]</p>
`;
        case 199:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我就喜欢看你嫉妒我的表情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是巴比伦空中花园嘛，还真是有够吓人呢[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬再次落了下风</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦吼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是巴比伦空中花园嘛，还真是有够吓人呢[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就喜欢看你嫉妒我的表情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阵亡这么多吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面的人呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面的26层呢？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：这副嫉妒我的表情[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;！？[fn=64][fn=64][fn=64][fn=64]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;消失了26楼？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是吧，不是吧</p>
`;
        case 200:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神的知识盲区</p>
`;
        case 201:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;岂可修！没想到联合四人之力也没能顶住嘛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么虎狼之词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎狼之年说出虎狼之词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八愧是太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：希望下次能用在更合适的地方[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：我早就想说这句台词了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？</p>
`;
        case 203:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;糟糕的台词</p>
`;
        case 205:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;武士抽球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了陈翔电影的那个乒乓球，我的球你接不到然后转手被削了个2:0</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：面对女儿我唯唯诺诺，面对太太我重拳出击[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;动如雷霆</p>
`;
        case 207:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Ace！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：人妻？东京帅哥打的就是人妻！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;外旋发球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不区别对待怎么能提现出对老婆的爱呢？[fn=58]</p>
`;
        case 208:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“区别对待”</p>
`;
        case 209:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;本章结尾，如果乌鸦没有图的话，建议放张新网球王子。渡边彻勉强达到了里面的水平[fn=4]</p>
`;
        case 212:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;虎炮，真就网球王子啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;外旋发球来了</p>
`;
        case 214:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里才是 Ace 🎾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铁丝网与球直接汽化</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无我境界之才气焕发</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;碧蓝之海的杀人网球？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无我境界之天衣无缝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《东京帅哥》❌
《网球王子》✓</p>
`;
        case 217:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33]</p>
`;
        case 218:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;女朋友们</p>
`;
        case 220:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;女朋友也是朋友，不过多了一个名分而已，对于渡边来说，如果九条是他女朋友，那她永远不会是他最好的朋友。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明本来应该是双倍的快乐，可是为亻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪有人会把好朋友放在女朋友前面的呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个是我夫人，一个是我妻子，正所谓一夫一妻制</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3个一楼可还行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但都是我老婆[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个是我最好的女朋友
一个是我女朋友[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男版雪菜既视感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个是我老婆，一个是我妻子</p>
`;
        case 221:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条太太使用了魅惑。。。并没有什么效果</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑鄙的外乡人！！！啊，是太太人妻我老婆啊，那没事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：想不想知道我这件衣服下面是什么？.GIF[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给我康康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：她们都是我的翅膀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑鄙的大人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我康康</p>
`;
        case 222:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻：木大木大[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;趁机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;规则是用来打破的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;趁机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;趁机</p>
`;
        case 223:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;以前叫人家真姬小甜甜，现在叫人家大妈？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你惊醒了witch[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏醒了，猎杀时刻！[fn=54][fn=54]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逐渐嚣张，露出本性</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说话的艺术  还是你会啊 渡边彻[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飘了飘了，这人飘了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前叫人家真姬小甜甜，现在叫人家大妈？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你惊醒了witch[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就好这一口</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽幽子：嗯？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的是胆子肥了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求生欲拉满</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太激怒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧巴桑的安全裤！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要看[fn=31]</p>
`;
        case 224:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小伙子，我给你一次重新组织语言的机会[fn=46]</p>
`;
        case 226:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有点可爱哈哈</p>
`;
        case 228:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;比分是15/30/40</p>
`;
        case 229:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太们真的好可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑鄙的大人</p>
`;
        case 231:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不要试图和女孩子讲道理[fn=33]</p>
`;
        case 234:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日本东京奥运会</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;裁判，证监都是我的人你怎么跟我打.jpg</p>
`;
        case 237:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;话说这小说啥时候做成galgame？有现成的文本和立绘，选择在steam上发售，补丁和本体分开，这样情节可以放开了用[fn=32]，最好出三部做成一个系列，第一部女儿篇带点太太片段，第二部太太篇带点女儿片段，第三部后宫篇，什么三个女教师啊，学姐啊，女神官的都给它加上，这销量绝对爆表[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次读到清野神就会莫名涌来一阵艳羡、嫉妒、无奈与空虚，可恶啊！乌鸦你为什么要把她写得这么完美！完蛋了，又是一个不眠之夜[fn=22]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明没有胸，怎么会胸闷呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;支持</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶✌️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是私人飞机场，哪来的胸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恨，乌鸦写的慢我们自己来！“我是童话没有句号大导演，现在开始选角”鼓掌鼓掌鼓掌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次读到清野神就会莫名涌来一阵艳羡、嫉妒、无奈与空虚，可恶啊！乌鸦你为什么要把她写得这么完美！完蛋了，又是一个不眠之夜[fn=22]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的快乐，没啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说这小说啥时候做成galgame？有现成的文本和立绘，选择在steam上发售，补丁和本体分开，这样情节可以放开了用[fn=32]，最好出三部做成一个系列，第一部女儿篇带点太太片段，第二部太太篇带点女儿片段，第三部后宫篇，什么三个女教师啊，学姐啊，女神官的都给它加上，这销量绝对爆表[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个楼层好奇怪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野喵，沉默[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野：“我没有看到”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边你说什么？风太大我听不到！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要我不说话，就没有人能绑架我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苍茫的天涯是我的爱，
绵绵的青山脚下花正开~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到在另一个地方与美姬和彻合作剧烈运动！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要预感明天起床这章起码少三页以上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她闷了，她闷了。好气啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不说话我就没有说谎[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然会胸闷？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每日祈祷
最特别是她，在所有一切之上是她，我的神，对a凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胸闷。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平胸也会胸闷吗[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祈祷
最特别是她，在所有一切之上是她，我的神 清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生闷气
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安啦，不会又被抢了吧</p>
`;
default:
			return '';
	}
}
        