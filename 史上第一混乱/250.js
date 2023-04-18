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
<p>&nbsp;&nbsp;&nbsp;&nbsp;更应该像地头蛇和帮派</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还不忘这茬呢🤣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmm古代人都这么喜欢脑补的吗</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5+2正式成型</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5+2</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五人组有六个，这是常识</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最佩服小花的上下文连接的天衣无缝</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙跟训狗似的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兔子太忠心了</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说相声呢？</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我跟你说，还是鹅最好使。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马在动物里面睡觉时间最短，好像只有2到4个小时吧！</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岳飞的亲卫，顶的上一个特种营了。。。。再加上几十个混不吝的武将。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子笑眯眯的说你错了，但不意味着你错的小啊。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥说的是。。有啥事儿直接揍小强不就完了，去动人家妻儿老小，不跟你玩儿命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的底子浅啊 而且虱子多了不愁 这还和和天斗斗着呢 也不差这一个 但是你动了包子 那就不好意思了 我小强不把能动用的所有力量跟你死磕 我就不姓小（口误）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的底很浅，就认识几个傻子，胖子，妹子，卖包子的和一些平头百姓，但是惹到包子就不一样了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;的确很浅，还认识国安局的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;的确很浅，就认识个胖皇帝，刺客，英雄，几十个武将，一支超一流特种兵还有一些体育老师而已</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实  打丫挺的。。才有气势</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是骂人吗？</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人项羽是造反</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;内战你叛来叛去都还有一说，你这是放异族进来**我族，还能洗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前都是亡国 改朝换代罢了 吴三桂让中原亡了天下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不说这个了，都过去了，现在56个民族是一家，都是中国人，以前打来打去，起码肉还是烂在锅里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实没有清朝，我们的版图也不可能这么大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀其父夺其妻，这还要求忠诚？李自成也没敢怎么说啊。历史上有伍子胥，故事里有黄飞虎，君视臣如土芥，陈视君如仇寇。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐宋朝的时候引外族导致河北地区沦陷的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叛的是汉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他叛的是汉家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本怎么进中国的，大家心里也有数吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前都是亡国 改朝换代罢了 吴三桂让中原亡了天下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有爱新觉罗家，加一块赶上吕布了🌚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;内战你叛来叛去都还有一说，你这是放异族进来**我族，还能洗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史都是让后人评说的，如果身处其中谁又能做的多好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你叛的是汉人！</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段印象深刻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强脑袋被开瓢，羽哥也是笑话一下，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子是真的好，五人组来了之后那一大桌子饭啊</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贾队长很不爽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行了，现在看不得中分两个字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贾队长要发律师函了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是说这汉奸的态度性格和贴狗皮膏药的两码事，意在说他当汉奸还敢这么大声……楼下想什么呢……</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柔然。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花木兰那时候应该已经叫突厥了吧</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，能在史书里记载一笔，哪怕一笔带过，都是当时的顶流…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桓温啥时候来，他俩绝对能聊到一起去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起一个老段子：流芳百世和遗臭万年至少在时间上是对等的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴三桂你要说他是汉奸吧，他行事也是光明磊落的，你要打我我就打你，不服跟你干到底，要说他不是汉奸吧，又老是投降再叛变，很复杂的一个人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能名垂青史，便要遗臭万年。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是对历史一窍不通 历史都是十年前跟小花从这本书里 学的...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大丈夫，生不能五鼎食；死当五鼎烹。</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我挺喜欢这本书里的吴三桂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的还挺好的[fn=33]只不过没有古人的愚忠而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拉倒吧，少给自己脸上贴金！不忠不孝不仁不义，上有负家国社稷，下愧对黎明百姓。自己立不起山头就老老实实给人打工，偏偏又各种不服气，脸呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;300只敬岳飞而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这话也就离开学校能说，不然那遍布全国的300非杀回来给你点天灯不可</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然而说破天还是讨厌吴三桂这个大汉奸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圆嘟嘟可死得一点不窝囊，反而被他砍的毛文龙才叫死得窝囊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实李自成还真有机会，只要取得旧明官僚的支持，《南明史》开篇就讲了，所以吴三桂开关是真的断了大顺的命，他吴家多少人还在李自成手上不是为了利而是单为了一个陈圆圆造反真这么觉得那开心就好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;崇祯欠你的了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个充斥着蠢货、杀人狂、内斗精、二五仔、野蛮人和水太凉的时代，悲哀啊……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 哎，那个年代乱七八糟的人和事何其多，降而叛而复降的人又何其多，那是一个除了大西军之外几乎没有一个好人的时代……就说南明某些人吧，就说史可法吧，联虏平叛的招儿不就是他老先生想的吗？嘉定元凶就因为后来又叛了清，南明竟然给那孙子谥号忠烈……先把事儿搞得砸人害死，然后一死了之，跟崇祯一个德行，简直了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果假如现在真打起仗来，现在个个都是满口忠贞爱国的人，在大时代环境下就真的能动摇不变吗？我也爱国，但我都不敢保证在受到虐待或者被拿家人来威胁的话还能一如往故，吴三桂不是好人，但至少他活得比我们都真实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;崇祯对他们也不差</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宁可天下人负我？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我挺喜欢这本书里的吴三桂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的还挺好的[fn=33]只不过没有古人的愚忠而已</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乐，今年贺岁档里那位秦桧也不觉得自己是汉奸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最起码不遮掩，也不为自己开脱，他那个处境，可以说要么痛快死，要么憋屈死，做不成岳飞，就只好做自己了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么说呢，你把吴三桂放在别的时代，咋看也没啥看头，但是放在明清之交……放在那群内斗精杀人狂舔狗水太凉里面，还真显出一点可爱来……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;福尔马林不行，拿王水试试</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲道理，项羽烧咸阳的时候，咸阳百姓看项羽不也是侵略者。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汉奸汉奸，背叛的是汉族是老百姓不是单单哪个政权，汉族政权互相征伐的时候背叛阵营的人(比如吕布)有被称之为汉奸吗？说实在的这个角色换个身份毫无问题，他本身的身份有什么不可代替性吗？换个会打仗的暴躁老将军不一样能写下去？这个角色和洗白就是混乱的最大败笔。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老实说，各自立场不同，三观不同，互相尊重吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;划重点 秦桧</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不扯民族大意的话，其实他做的其实也没错，你上司要睡你老婆还要把你裁员，换了谁都会跳槽到竞争对手那里去，回头把老东家搞破产吧？当然要说名族大意那就另当别论。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;非酋没错了，</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，现在越来越流行了</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强真的无耻得有点可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皮</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逗猫呢</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴三桂竟然喊项羽老弟？感觉怪怪的</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要来了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷老四，危！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要出大事啦！</p>
`;
        case 103:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;斩首行动。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可是你连胖子都没杀死[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅</p>
`;
        case 104:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子霸气！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子帅气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是真杀手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好恐怖，哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子傻的时候萌正经的时候帅，嗷嗷的</p>
`;
        case 105:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你应该问谁不擅长</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里面除了赢胖子和刘邦，都擅长近身搏杀</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我小时候也分不清刘备刘邦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和二不配拥有姓名吗？</p>
`;
        case 109:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感情是刚来啥都不知道就帮小强平事去了</p>
`;
        case 110:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲二字分量够重！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子真是太可爱了</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记着这会儿项羽还不知道自己是包子祖宗的事儿呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥（核善的笑容）:敢对不起包子打死你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;娘家人。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子才是真主角</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这祖宗跟岳父样</p>
`;
        case 112:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃饼干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥是真正的大智若愚选手</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都管！还让不让人活啦？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古代也管啊，你以为谁都能纳妾的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那可不是吗哈哈哈哈哈</p>
`;
        case 113:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强是百姓</p>
`;
        case 115:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打了小的来老老老老……的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛病啊</p>
`;
        case 116:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚来被人瞧不起 趁着机会露露脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意气风发啊</p>
`;
        case 117:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要说带兵以一敌十那是纯吹牛批，但要说个人武力吴三桂还真不虚别人，他成名战单骑救父杀散后金兵时才十几岁。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴三桂说实话，武力确实不差</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吹牛皮，关宁军看到鞑子腿都站不稳</p>
`;
        case 118:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;0比3是大比分，5局3胜，再菜也不过是0比3，不同的是每局小分有人输9比11，而我是0比11罢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别吹牛逼，你敢不敢让张让你一个球？让你知道什么叫杀伤性不大，但侮辱性极强……福原爱咋哭滴？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我（张小花）和张大魔王打只能打零比三，福原爱打张大魔王也只能打零比三，所以我（张小花）和福原爱是同等级的乒乓球选手[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;社区老大爷：多新鲜，我上我能把张怡宁打个三比零[fn=48]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟三比零，谁上谁都行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们上的区别是三比零全队背锅还是你们背锅。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看评论比看书还有意思hhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟三比零，狗上狗也行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟三比零，我上我也行</p>
`;
        case 119:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恸哭六军俱缟素，冲冠一怒为红颜[fn=62]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是吴梅村的诗吗，吴三桂怎么知道的</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这TM家里学校里的都出来，屠一个地级市和玩似的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;动了管一个千古一帝加上一个开国之主，一个史书第一霸王，再加上史书第一刺客这四位饭碗的，上下五千年都没人能保你。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花拍了拍雷老四，说：兄弟，路走窄了呀！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘴上说的嫌弃嫌弃嫌弃，实际上谁动了包子就恨不得玩命[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不应该是ctmd的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三个字cnm</p>
`;
        case 121:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别叭别叭，花木兰说女人嫁了个好男人这辈子就该知足了，好怪</p>
`;
        case 122:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的点就是特别[fn=4]</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楚霸王 太社会了吧！！</p>
`;
        case 124:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以叫小强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子听了要打人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑回路清奇，脑洞奇大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;*****</p>
`;
        case 126:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;并不能，一般都会让分不剃头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;0：100是真输不了，乒乓球是11球的，先赢得11个球的获胜，第二场重新计算，所以怎么都赢不了100球
而且中国队一般不会剃光头，只要别惹了他们，再菜也会拼命想办法让一球的（让的这一球能不能把握住就不清楚了，这是有实例的）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你能输，我就不能输了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的跟我输不了这么多一样！</p>
`;
default:
			return '';
	}
}
        