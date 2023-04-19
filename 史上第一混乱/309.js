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
<p>&nbsp;&nbsp;&nbsp;&nbsp;最催泪了这章呜呜呜，最喜欢五人组</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年还以为这就完结了呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次到这章都不开心了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再哭一次！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看一次哭一次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章的笑容逐渐消失</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章，第一次看看到题目时候心里就堵了一下。
现在不知道第几次了，还会堵一下。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ade,胖子，ade,大个儿，ade,二傻，ade，表妹，ade，邦子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难受啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看到这有书评还以为又漏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章没书评，果然又是刚恢复</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;MMP</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸好这一章没吞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，这一章看的心里难受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;靠！又丢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最催泪了这章呜呜呜，最喜欢五人组</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神tm过年这章也能被删，我还等着看千杯不醉和啃麦克风呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就纳闷了，过年那一章有啥违规的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某些人的最后疯狂！这两年好多了！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在都有了哈[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千杯不醉都没了 这删个p啊 以后全国只让看幼儿读物了？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神tm过年这章也能被删，我还等着看千杯不醉和啃麦克风呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过年那章都删了，真烦
河蟹河蟹，呵呵呵呵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，其实也不能全怪起点，为什么这样大家心里有数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过年有小品《卖拐》不行还是春 晚不行？！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我从来都是整本的买书 我后悔了 我三个手机 一个平板 四个号 天天出差总在机场飞机上看小说 以后别的软件能买到的书 肯定不看起点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;QQ阅读也断章了 到底还有哪能看完整的?太不厚道了 当初看的时候花了钱买的 如今再想看还得再去别处花钱买 太恶心了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面实在看不了了，动不动缺一章这剧情还看啥了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真他妈是醉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就纳闷了，过年那一章有啥违规的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是疯狂的少章节?</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是这本书里刘邦唯一一次对身边的人漏出这种情绪吧 唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的有感情了</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留名。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;祖龙的车同轨，书同文真正意义上第一次塑造了中华民族的民族认同</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥的胸襟跟他的饭量一样…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一帝王的胸襟。
这书里只有一个皇帝从头到尾都是淡然。
除了刚看见二傻那会儿。。
那属于下意识反应。
就是李二跟胖子比，也差了不知道多少。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了小花塑造的赢胖子。但凡电视里有秦始皇，我都会情不自禁的想：这秦始皇怎么不是胖子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥真好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子是真通达</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看过好几次了，看到这里眼眶还是有点湿润</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目中又给赢胖子笑回来了</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这说明小强对兄弟们的真实牵挂，不然不会担心，只求知道平安…</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看不得这种离别，虽然明知道是小说，还是难受的一塌糊涂</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怀了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧不该</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真怀了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不该不该，嘻嘻</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪点啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥还是不舍啊...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜呜呜呜呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;n刷，每次看到这里都会哭，这三百块钱从头到尾贯穿，最喜欢嬴哥和轲子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是太好哭了…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花这点真的厉害，胖子在这本书里的笔墨并没有多少。但是人物鲜明让人记忆深刻。我太喜欢二傻和胖子了，五人组永在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自古生离死别最难自控。这也是人类最伟大的地方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12][fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他俩应该是感情最好的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奈何奈何</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭死我了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚止住的眼泪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😭😭😭😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听书听了五十多遍，补票还是第一次，每次到这儿都哭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日，是真忍不住…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ಥ_ಥ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥还是不舍啊...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪奔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再看到这里还是哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭了(;´༎ຶД༎ຶ`)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪点啊</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正常人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次对日久生情这个词不想盖楼</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人生若只如初见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;离别何必要那么伤感呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉好像士兵突击里的班长退役，好难过，虽然看过好几遍了，看到这里还是难过，这就是作品的魅力吧</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老轲走的时候忍住了，等等始皇帝那一口老秦腔一出，哭得稀里哗啦的</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再也听不见始皇帝的老秦腔了，再也看不到傻傻的老轲了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最疼小强的的确是荆轲，从他说我能为太子丹卖命，更不用说是你了！就能看出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个比喻真生动</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三人唉</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是作者的最高境界：出乎意料又合情合理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花写的太好了，眼睛里进了石砖了[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的，哭出来了</p>
`;
        case 88:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;遗忘咒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前说死过一次知道亲人重要，结果还是不重要嘛</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻！！！</p>
`;
        case 91:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，“终于”……</p>
`;
        case 92:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭的我直抽抽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭的咬牙切齿啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;师师也走了，就剩邦子了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好好想我一年，然后把我忘了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波言情剧写的太煽情的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不要这么虐啊[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好好想你一年 手都要脱臼啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好好想我一年，然后把我忘了！</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我哭得眼泪鼻涕的，一脑补这个画面又喷笑了</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最喜欢邦子这种洒脱，离别何必搞得那么伤感</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那句二傻断然道“我可以为太子丹卖命…”然后露出天使一般的笑容“就更别说为你了”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜看多少遍都伤心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊不要啊啊啊啊啊啊啊啊啊轲子！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑不出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊柯子[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前，荆轲知道剑神在等他的时候他已经死了
如今，二傻知道白脸在等他的时候他又要死了
这俩人就永远都见不了最后一面是吧？[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道第几刷了，但是当到了这章的时候，心还是忍不住的颤抖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千古第一义士也。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;傻傻的柯子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉 更别说你了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的轲子啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;更别说你了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然这是第五刷，还是泪目了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又一遍，看到这里还是哭了。虽然知道后边的剧情，但是还是对柯子说一句，走好。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那句二傻断然道“我可以为太子丹卖命…”然后露出天使一般的笑容“就更别说为你了”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😭轲子……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜看多少遍都伤心</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我爸癌症晚期最后那一个来月对我妈我奶奶没有一次好脸色过。傍晚搽了下身子，把我妈赶出房间，半夜人在我怀里没了。没给我妈留一句话。这么多年，每次不开心我都来这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样对对方最好</p>
`;
        case 98:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里扯个题外话，如果《混乱》拍成网剧，我心目中 小强的不二人选是 在唐探1里的越南仔 《夜店》里的朱辽 —— 赵英俊，赵英俊在得知自己患癌之后，也是和邦子一样，决绝的对他女朋友说：滚蛋！老子看上别的女人了 ，这得多大的勇气和决心？！万箭穿心般的痛楚，宁可被对方憎恨也不凄凄惨惨戚戚肝肠寸断的生离死别 </p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑子打成萨其马了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我应该是11楼，但是目前只有四层，我也不知道为什么，就很奇怪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这好像是本书唯一一个有名有姓被干掉的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面的读者，麻烦踩一下2楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;涉外杀人，强子放心拍死丫的，有三口帮你摆平</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高级假货指不定比真货质量好</p>
`;
        case 101:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最了解你的还是你的敌人</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我真没想到柯子是这个走法。[fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，看一次哭一次[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在这里送别轲子，谢谢你带来的欢乐。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实在忍不住啊[fn=12][fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目[fn=12]</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当时在书店看的实体书，蹲在地上哭得稀里哗啦的[fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭成傻子</p>
`;
        case 106:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完成了最初的梦想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在还是很想她，因为不能在一起才说的没分别，如果能在一起那肯定是一起才好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过几天你就不这么想了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看透了一切[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=19]</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对于被考验的人来说，是真的残酷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强至少提前有个心理准备，包子却什么都不知道的直面荆轲的离去，唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难过</p>
`;
        case 109:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;焯，这确实两个人都一笔写出来了</p>
`;
        case 110:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至少这个情谊不是假的，矛盾是真的化解了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实再来多少次宇哥都还是斗不过刘邦的，太意气用事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
`;
        case 112:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜这是什么来自祖宗的宠溺</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12][fn=12][fn=12]</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭了</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第几刷我记不清了，只是这次看到这里的时候，我的脑子里突然出现了一个女人，刘玉翠……我感觉这哭戏和她演的建宁生了女娃时候的哭戏在重合……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看过2次  有声小说听了3 4次 每次这里都会哭！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里真受不了...看几次都哭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里真是鼻子一酸…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的难过</p>
`;
        case 116:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强重情义</p>
`;
        case 118:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会有机会的呜呜呜 遗憾都有弥补的机会  是这本书最美好的部分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实也无所谓剧透，这书还百分之四十呢，要是后面五人组回不来还写啥嘛？所以后面肯定还有五人组的戏份</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫剧透了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都是伏笔啊。</p>
`;
        case 119:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个前世冤家，你们就来骗我的眼泪吧[fn=12]</p>
`;
        case 120:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管第几次看都哭的很惨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真心哭了，不论看几次，这些人的感情是写活了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此时 牧区边一牧民看到眼前跟他接手机打电话的大个子逐渐消失 不禁骇然：这手机辐射原来这么大！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次看果然最终还是蚌埠住了[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生命可贵。千言万语不过一句，珍惜眼前人，做好眼前事。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说小黑兔去哪里了我给忘了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虞姬到底是谁啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次看简直哭死我，就算再刷几次还是一样难受[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭绷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;n刷 但这章是我第二次全部看完 以前直接跳过 不敢看[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次都是哭😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果张小花敢在这个时候完本，他家绝对会被光大读者包围。特么的，受不了，虽然是第五刷。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，涕泗横流啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五人组全没了...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行了不行了，这章看的心里太堵得慌了，哭的眼泪根本止不住[fn=12][fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉……走了也都没聚到一起，莫名有些遗憾，爆哭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写的太有感染力了，巅峰之作中的巅峰一章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里真的好难受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特地回来，哭一哭...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沉重的一章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忘记第几刷了，可还是哭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好这次我忍住了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了n次，还是会觉得心塞……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个个离开，看哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十年前看这章荆轲走，真是泪流满面。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章啊，就是为了让人哭成个傻子[fn=12]每次都写的再也见不到了，然后来个黄昏的重逢，接着哭。
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刷了几遍了，照样一看就哭，见不得这样的离别</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真心哭了，不论看几次，这些人的感情是写活了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管第几次看都哭的很惨</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是刘老六全书里最像神仙的一回，但看得我难受。</p>
`;
        case 122:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不骂你，很感谢你，能有这么好的感伤体验。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一部伟大喜剧的内核是悲剧，但是为了考虑读者感受而以上扬结局收官</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李二皇帝欲望大的很，杀兄杀弟杀儿子女儿，把老爹逼退位，都是为了那个位置，他会为了一个人死了就看开？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又见伏笔</p>
`;
        case 124:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我本来不是太难过的——人有生死离别，早晚会有这么一出，这是从一开始就知道的。但是看到这句话——我还是决定把张小花打死。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然你要是不剧透也可能被读者打死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;官方剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;史上第一剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然你要是不剧透也可能被读者打死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打死剧透的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花是狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面的好歹忍住了，一看到这句没忍住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我本来不是太难过的——人有生死离别，早晚会有这么一出，这是从一开始就知道的。但是看到这句话——我还是决定把张小花打死。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;官方剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;官方剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的吗 求剧透 看的难过</p>
`;
        case 126:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奖月票一张</p>
`;
default:
			return '';
	}
}
        