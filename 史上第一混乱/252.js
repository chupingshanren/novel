$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;酒驾啊</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;撒掉撒掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子：我就没怎么杀过人~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凑个热闹...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个胖子能有什么坏心思呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子可能没怎么杀过人[fn=48]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感好强</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夜总会和酒吧啥区别啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你那又是扁鹊又是华佗的，也不知道给人家看一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花果然是数学26分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是第三家了</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这荆轲 哈哈哈哈</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绿茶伤胃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扁鹊华佗都来了，也不叫人给看看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃药能喝茶？胃疼能喝茶？哎呀，白开水不配有姓名么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;茶解药性！哦买嘎</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是钱的事儿吗？我都没看着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得亏没给钱 要不亏大了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的是，换我也得气够呛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这脑回路也没谁能赶得上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小🌸真尼玛大神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟梁山好汉通话的时候。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;mmp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;*****</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老吴却是挺惨的，他要是忠于明，那就只能放弃山海关引兵回朝救驾，清还是会入关，要是继续镇守山海关就只能投降李自成，偏偏张献忠就不是个东西，杀人老子多人妻子，吴三桂要还能忍就是个冷血动物了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老歪脖子树出镜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;崇祯死的太快了，但凡他好好的安排一下后事，也不至于全烂了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个话题下说李自成怎么怎么的能不能先把大顺史稿或明末农民战争史看看再说啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打仗给前方凑军粮是他崇祯应该做的，刮不动高官和豪商的巨万家资转而刮老百姓那就是崇祯的问题了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那棵老歪脖子树，还在皇宫后边儿，甜甜的盯着你们呐！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已现代人眼光来看，满族属于中国版图，吴三桂不算汉奸了， 汪精卫那种才是汉奸。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;揣着明白装糊涂，崇祯要不是刮地皮给你丫凑“平辽银”，明朝能财政崩溃没钱救灾？李自成能造反？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;混乱里的李自成有点掉价，历史上也是一代人杰的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说，时代不是个好时代，吴三桂放那个时代多少还显出点可爱来。如果占了北京的不是李自成是李定国，如果崇祯不是挂在老歪脖子树上而是迁都南下，如果满朝文武不是水太凉，那吴三桂也不会成为吴三桂。就——就只能说，什么个cd时代啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老吴却是挺惨的，他要是忠于明，那就只能放弃山海关引兵回朝救驾，清还是会入关，要是继续镇守山海关就只能投降李自成，偏偏张献忠就不是个东西，杀人老子多人妻子，吴三桂要还能忍就是个冷血动物了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，各有各得难吧，逼到那份上了，但是毕竟当了汉奸，怎么样也洗不白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老歪脖子树看着你啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老歪脖子树出镜</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的破嘴专门咒自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你和包子要是在汉朝，你也会体验把红颜祸水了…</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名霸气啊 万梓良的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噗哈哈哈哈</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所谓帝王心术，正是如此</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴三桂后面返清，一开始也打着朱家后人的旗号</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清朝时就有这样的，著名的朱三太子案就是打的朱家后人的旗子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也是不少明穿小说的思路</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不必降智吧，这能想不到吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挟天子以令诸侯。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然，花木兰还是政治觉悟比不上啊</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;英雄那部电影还是挺震撼的</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大虎，你替我送一下小明王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小明王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们害苦了我啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱元璋:我的小明王，你怎么就突然没了呀？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱元璋不就是这样干的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天子喜极而崩，国不可一日无君……</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新盖中盖。。。[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我为啥觉得这个人就是雷鸣呢？</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书看到现在最喜欢赢政了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天下就该是刘邦和胖子这类人的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最喜欢嬴哥，没有之一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佟香玉她爹更合适</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龙门镖局里的年掌柜（李传缨）也挺适合这个角色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仔细想一想，其实嬴哥可以要范伟老师来演，有演技还形象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷不跟弟弟们讨论这些[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;段位不同，没共同话题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到范伟了，微微一笑绝对不抽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花一句话把胖子真正政治家的一面就写出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天下就该是刘邦和胖子这类人的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我最喜欢嬴哥和二傻[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书看到现在最喜欢赢政了</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥:我还有俩13的呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦始皇有可能仇女，被他亲妈伤的太深了。他奶奶所附带的一批楚国高官也搅得他不得安宁。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;任他一路坎坷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥不说后宫三千，那三妻四妾肯定少不了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俩13岁的。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唱出来了</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是猛龙不过江</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不好意思，他还真就没有办法</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完了 小强被拿捏了🤣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲适合当哲学家</p>
`;
        case 89:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你什么档次和我用一样的电视</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是喝高了，还能开车吗</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太有意思了</p>
`;
        case 100:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就等如是给羽哥他们收了个N+1辈儿的孙子～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清新脱俗的装x</p>
`;
        case 102:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是你，搞得小说里面始皇全都是胖子了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们历史书上画的始皇帝就是个胖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传统的帝王将相才子佳人价值观，对农民起义领袖不待见也很正常。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是就是…想知了解真实人物看史书去…来这里就乖乖接受设定乐呵乐呵得了…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是胖子都是史官笔下修正过的，谁写得传神，嬴哥就是什么样。反正我觉得🌸写的胖子传神，那嬴哥他就该是个胖子，不接受反驳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是后面几个有名的皇帝基本上都是军伍出身不太像胖子。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文明六就是胖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇帝不能说胖，但是肯定在当时那个环境下绝对算得上胖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说真的，恶搞很正常啊，但不要用有争议的人物，没必要，咱们看的是小说。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;配合文明里的始皇还挺适应的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们历史书上画的始皇帝就是个胖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是你，搞得小说里面始皇全都是胖子了</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好汉们在海南旅游时就该见过不少老外啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前世身边就有赤发鬼刘唐，再往前也有金发碧眼的孙权，怎会被老外吓住？</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那不是一个银牌了？</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么就可着一个人祸祸呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再来一哆嗦啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还来啊</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关胜没来，要不死活回来拜见了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赶不回来，就让他们把场子收拾好 然后他们再来踢一次。</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他想明白虞姬转世的问题没</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;净说大实话。
读一下空气啊[fn=33]</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话有意思 原来没注意到</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楚霸王吃霸王餐，没毛病。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老子就吃霸王餐啦，怎么地嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段也逗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈个鸡，就是想赖账</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逃单啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萨日朗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实干家</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这领班也太可爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这领班也算条好汉🤣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行，必须打骨折</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这领班也不容易哈哈哈</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;废话，那不渴了吗[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;混混串闲话跟老娘们有一拼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是在公司群里看到的？</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;住手，你们不要再打了</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挨揍完事儿了，恭敬送走，没毛病[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;属于是保境安民了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;堪比孙思欣</p>
`;
default:
			return '';
	}
}
        