$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥没想带邦子啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子还有别的出场任务。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从头到尾没想过邦子啊你</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二爷巅峰的时候，也没多少兵能借你，按演义他大哥倒是有七十万大军</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里意思我估摸是唐朝服装的意思……再怎么不靠谱，小花也不会认为唐装是唐朝的吧，最不济也看过唱戏的戏服嘛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐装…不是唐朝装束…</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这突然想到这块悖论了。。。秦舞阳以后是被兵道送回去的不是天道送回的，那育才的秦琼他们以后咋和唐朝的秦琼合上，跟金2似的到期自动没了然后喝蓝药吗。。。。</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老李，小强的事儿给办一下。抓紧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;程咬金：话说，纸不要钱啊，那时候纸张是战略物资，出口赚外汇的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天策将军这名头除了李二，群雄一个都当不了。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有一点你们忘了，朱元璋小时候家乡遭灾，一大家人都活活饿死了，他去当和尚到处流浪讨饭，那叫一个惨，所以他对元朝，对贪官有一种刻骨铭心的仇恨，下手狠辣也很正常。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是唐太宗自己就能带兵打仗，而且战绩相当牛，所以还是比较放心的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二凤真是一个难得的重情义的开国皇帝啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李世民士族出身，底子厚的很，才不怕这些没根基的不安分呢。朱元璋就不一样了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李世民和朱元璋，多么鲜明的对比啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说李世民确实对这些老臣子相当的不错，历史长河中都数得上。</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把你们全砍了</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冕旒</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;百骑贾平安！</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个好像有点bug，大明宫是李二逼他爹退位后，出于孝心（愧疚/名声，随便），因为原太极宫太上皇所住宫殿夏天太热而修建的，到了他儿子唐高宗时代才正式入住。这时候大明宫使用应该不多，办事还是太极宫为主。以上资料来自央视纪录片《大明宫》</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：（对小金）别祸祸我们那点黄金储备了！
还是小强：到处使劲塞金条</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家都是穿越赚钱，你到好，把现在的黄金储备往过去带！</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种高背椅子俗称太师椅应该是明朝的时候才发明并推广的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼上文化人啊[fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抓虫。椅子这种高足坐具要到晚唐甚至五代十国时期才出现，唐初以床榻等矮腿坐具为主，跪坐或垂足坐，也有一腿偏在床榻上的坐法。譬如五代南唐时代的《韩熙载夜宴图》床榻圆凳椅子混杂，可以看到从矮腿家具到高腿家具的变迁</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;林冲:要知道我也就不进去了</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这位大哥好激动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话不是说知识多了就会反，或者不能走错一步，而是……
知识就是个助推器，你没走在正路上，方向跑偏了，那么助推器功率越大，你就离正确的终点越远。而且你走的越坚定执着，越认为自己没错，那就越不可能被别人拉回正道上来！
就是这个道理！
不先以求真务实，辨别事实的是非真假为前提，那知识就个x！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连“求真务实”都做不到，不以是非黑白为基础，那还有什么正确光明可言！
之前那些张冰啥啥的讨论已经看的烦到不行，楼底下这个“休伦神王”的言论也不止一次让我火冲，这真是忍不住了！
知识，知识，仿佛只要知识多了，人自然就是好的！
路线错了，知识越多越反动！这话都不懂！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当时我就惊了，难道不该是“虽然你话难听，但确实是这样，你说的没错，我支持你，只是以后注意点语气表达就更好”
语气居然能排在“正误对错”之前，只要语气好，哪怕说的全是错的，都可以原谅理解甚至支持！
所以说，为何现在各种问题矛盾越来越突出，这种完全错误的待人处事方式才是第一位的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这些支持的理由，乍看似乎很有道理，但只要仔细想想，就知道，纯属放x！
干什么事不花费精力和时间？！科普是好的，你学到了知识，你真的学到了吗？你连这种不分对象场合的科普都这么努力学习，你现实中学到啥程度了？学了多少知识？学以致用如何？
你要是真的打心底认为但凡是知识那就有用，就该学，那就回答上面的问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;而这两年，“科普”也是大踏步向这方面迈进。
但凡是说一些“科普”，那就不能提出任何反对意见，不管到底该不该在这科普，场合对象到底合不合适，你都必须感谢，都必须支持！
不然就会有人跳出来说你人咋这样，别人花费时间精力来为你传播知识，你不感谢就罢了，还说别人，你不想看大可不看，他可是受益的紧，喜欢的很啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小说不当小说看，这才是最大的问题！
以前我说过，现在这“梗”仿佛是什么万能通行证一样，不管什么场合什么对象，只要说“我不过是玩梗”，那么，大家就必须理解他，原谅他，甚至还得附和他，不然就是太较真，不然就是连梗都不懂，不然就是与“群众喜闻乐见”作对，是大大的错误！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别把捉虫带上就完事了，科普就科普，这种事就像“你学人毕加索啊”跟“你抄人毕加索啊”，后者总归是不好听</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我倒是觉得捉虫挺好，混乱可以让我们了解历史，严谨一点没错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呀 你这天天捉虫累不累 你先解释下开兵道咋回事？ 符不符合物理规律？ 小花这书后期虽然不那么严谨 可是他前期也是恶搞呀。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫。。唐初茶还不是主要饮料，这是和尚们苦修的时候的提神饮料，或者南方世家装b专用。。并且唐代喝茶特别麻烦，非常装逼不说，还往里加盐，加各种香料。要自己动手烤茶，煮水，磨成抹茶粉，过筛，沏茶，加香料。。。动作要优美，态度要从容，斗茶是唐代文人特有装逼技能。。又不好喝，又费事，小强咱何苦呢？</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我知道你在1v6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子之怒，不行于表</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;普通话都说出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子一直够意思</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的脸皮。。？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然是平级……呸，真不要脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐朝那会大人好像是爸爸的意思</p>
`;
        case 91:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，翼国公</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没办法，毕竟这时候在1V6，这个不是你说先不打暂停一下，另外六国就不会碰你，能抽出20万差不多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这要是统一了的话前面估计得加个一</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五人组的关系那是真没话说，如果这是统一之后的大秦，胖子拿100万兵马出来都有可能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羸哥呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个说着陕西话永远乐呵呵的胖子身上始终有着千古一帝的霸气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面其他皇帝开始还左推右推的，赢哥这直接从前线调……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是我赢哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥永远的神！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;nb</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥果然够意思！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥属实霸气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;魂斗罗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五人组的关系那是真没话说，如果这是统一之后的大秦，胖子拿100万兵马出来都有可能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羸哥呜呜呜</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，再有几年这描述就该看不懂了</p>
`;
        case 100:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李二:合着我是被抬过来的是吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;架到？起閧架秧子嗎，應該是皇上駕到</p>
`;
        case 101:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实唐朝不会下跪，至少房这个级别不会</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都依稀听到蓬的一声了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了这么多遍，到现在才看出来，这段蓝药入水即化的剧情埋坑有多深。早在设计蓝药的时候就考虑到了。这要是跟泡腾片似的半天不化，怎么给身份地位高的客户下药啊。给谁下药都一准死。</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;25万条人命啊，没有三条命重要，那25万人就该死？就算他们死了可以轮回转世，那李师师包子和孩子也可以再轮回啊，根本不用救</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子写活了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;借兵比借钱严重多了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么叫祖龙啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多牛逼啊  全死了都没事。。。我赢哥真的是硬核</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话没毛病啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸气</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥不去找刘邦啊，按理说也是五人组之一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强毕竟只能去点子图上的事情发生之前，现在才刚鸿门宴，这时候邦子手下才几个兵啊，喊了也没屁用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后来果然落邦子埋怨了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情商情商啊，实在中又维护好朋友的关系，不愧是人尖子</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;版本不对，让天子传奇里的项羽来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别气馁，神话三国里的你更牛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽：我跟吕布五五开，这说明打我也就两锤子的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不服不行啊。。那可是小说人物。。</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的有理，这要把细节一描述就不是借兵，是借帅了</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当时李师师帮项羽追张冰的时候，曾问过项羽怎么感谢她，如今尽起楚军三十万，救李师师！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俘虏都收编成军队了呗，物尽其用很正常</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;20w吃什么？大规模杀俘一般不是为了稳定军心而是因为养不起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看看你看看  胖子大个邦子说起来一个比一个萌。结果说起人命动不动都是万当单位的  咦   好残忍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽是最像现代人的一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经济名词说得溜啊</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留下了赵国可就灭不掉了</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子：赚大了，这要全换成群众演员得花多少钱啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子：*罒▽罒*</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子：搓手手</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处省略不知道多少个重</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽自从知道了这个梗。。逮着机会就吃豆腐。。</p>
`;
default:
			return '';
	}
}
        