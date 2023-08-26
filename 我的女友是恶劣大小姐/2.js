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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;22:04</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;OMO</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21][fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🛫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都住在起点吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们好快。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来组成躯干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沙发沙发[fn=32][fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是几？| ू•ૅω•́)ᵎᵎᵎ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1╮（╯＿╰）╭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1
</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;橘势大好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两位妈妈昨晚发生了什么事情吗[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每日吟唱：最特别是她，在所有一切之上是她，我的神！清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接跳过昨天的激情一夜我是不开心的，乌鸦你是觉得哥差这点钱吗？</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真的！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能留下痕迹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;收拾战场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;顺便把你女儿也“收拾”了一遍</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;按照约定，由她负责，昨晚是意外[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她负责她</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多了一个她</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;包括太太们 ， 可惜现在环境不是十年前了[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唱歌除外，调酒除外，嘻嘻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坏了，让他装到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这个快去上手是什么类型的上手[fn=31]</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野爸可能不太想回来了，权利大了，而且这个家估计没人待见他（私生活全都暴露了）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条爸没了，清野爸还在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是真的到目前为止两位爸爸一个镜头都没有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野爸爸太没排面了</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条清野这种霸主级的资本家，真是想把家败完都难，别说渡边这种天才了，就是随便找个普通人上去都能安安稳稳的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东西学的快的脑子学管理那一套很快的吧，加上情商和人脉，别的不说，如鱼得水是少不了的。</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咖啡☕️：嘤嘤嘤(ಥ_ಥ)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手冲咖啡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你好有哪里不对，又好像没什么问题[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不让渡边来一杯手冲咖啡？</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我有种预感。主角又要抱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[渡边在游泳]</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在现场，我是海风</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贪心的晚风 竟敢拥吻她
将她秀发温温柔柔每缕每缕放下
卑污的晚风 不应抚慰她
我已决意一生护着心中的她[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧和清野神是母女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我猜你没穿内衣（伸手进去.jpg）</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;当年勇次郎能在时速三十公里的泳池游几个小时，我渡边今天追着游艇游一段，不成问题[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错，睡不着觉，游了一晚上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边猫超进化，渡边沧龙!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该不是全速前进，也没说什么档</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是游艇又不是赛艇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;算了算，这个倒是还不太夸张</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太果然可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我落水了，要太太亲亲才能上来[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你掉下来的，是这个金渡边还是这个银渡边[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是，太太救我！</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;兴奋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么我觉得这是在为沉东京湾做准备</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边是真的自律</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;感觉依然适用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欣赏宽厚的背阔肌和健壮的手臂。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统点赞的自律</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;柚子：真好看，美少年游泳真好看（发出了🍆的声音）[fn=31]</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;薛定谔的清野爸爸不重要！直接上去牛吧渡边！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喂喂喂，凛爹得合理处理一下啊！要不幽子太太怎么加入战场？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看点赞数，牛头人战士不请自来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一晚可以换两个呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面给清野爸爸安排个意外，然后清野家出现纷争与困难，男主看到神因为这些事变得憔悴，挺身而出，帮助神化解困难，最后就可以把神和太太收下了，奈斯!!!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发出了想试一试的声音[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应该有评论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬最有发言权，每次都被折腾得第二天起不来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喂喂喂，凛爹得合理处理一下啊！要不幽子太太怎么加入战场？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;薛定谔的清野爸爸不重要！直接上去牛吧渡边！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;体力好不好要试试才知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老阿姨的渴望</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车轮战无敌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;‘体力真好！’</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发出期待的声音！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:确实</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喜羊羊点赞</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是真的把他当做自己的孩子了，真的很讨厌妈妈车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼真不简单</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三个一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个脑袋从腿中间冒出（）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子if线开启[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子线开启</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原本是“埋怨”呢 果然还是考虑到凛爸了吧</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是去玩变身了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;顺子  压死  大你  过  不要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈抱歉   得得得得得得得得得得得得</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;无光境</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《GRAND BLUE》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水里有很多声音的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实。。感觉全世界只剩下了自己。。容易慢慢沉沦下去。。</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦被群友们的xp带偏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太请自重！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他给我的感觉很奇怪，他的言行像是不经世事的孩童，他的态度像是经历沧桑的老人，他的声音像是磐岩中温润的黄玉，他的面容像无数少女心中风度翩翩的少年郎。
他同我慢品香茗时我总是容易忘记他在说些什么，可能是他眼瞳的漆黑像极了那时映照着夜空的星光吧。​</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话啊这些擦边描写别写了，那个孝心变质都直接封了，我可不想哪天起来直接发现这本书没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么有三个一楼？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸦桑你把你番外给我交了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦桑怎么回事，没准备开展太太线却又在这写暧昧[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万人血书，幽子和真姬加入角色卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;票给你，全都给你，多写点太太就行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦被群友们的xp带偏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太请自重！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渴望.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子篇苗头旺起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宛如sp看到美女？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;攻略中</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;次数多，量大，清理麻烦——美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是留给女儿有点浪费？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这样可让我想到了血羅这张图了嗷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女儿不顶用，干脆再生个继承人吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金轮[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是留给女儿有点浪费？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两张嘴一起流口水🤤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;适当健身吸引异性，过度健身吸引同性。我不装啦！！！渡边，来🤺🤺🤺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：我是穿衣显瘦的类型[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的小说就看到这里了…？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;次数多，量大，清理麻烦——美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子：不争气的泪水从嘴角流了下来</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;宁也是发胶手？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在，男色也出卖了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两章！色气满满啊！</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太口服液</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;代入感来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女婿，你在玩火</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男版丽奈撩发.JPG[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这太有代入。。。。


对不起，我说谎了[fn=12]一点代入感也没有[fn=12]我知道像我这么帅的没有第二个了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅哥图谁有！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;危，渡边，危</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天太太不太对劲啊</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;心动了，都用叫君了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢指多谢款待</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太心里最真实的想法是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸君，我好兴奋呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬: 啊！你竟然有了和我一样的想法！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长颈鹿自四面八方赶来[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太，确定不是对自己和渡边彻在一起热心起来吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;婿の肉体.avi</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很好，这就是我所追求的命运的舞台，わかります</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太，你不对劲</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还好这不是在微博，不然就要被爆破了[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人是视觉动物[fn=31]，追星多是女生，得出与男生相比，女生在视觉上更看重好不好看[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实话罢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看100遍她的视频，她不是你的，你看100遍书，知识就是你的，该醒醒了，我们的目标是建设祖国。​</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人就像鸡蛋，外表很坚硬，剥开很清纯，内心却是黄的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从好色这方面说，追星的男性少难道不是因为女明星不够色吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好这不是在微博，不然就要被爆破了[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下的这种说法我可要气抖冷开始打拳了[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人是视觉动物[fn=31]，追星多是女生，得出与男生相比，女生在视觉上更看重好不好看[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请把说不定去掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我看看我是几楼。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？前面人呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个角度无法反驳..</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不说本就出色的大脑、能力、品行，渡边彻长相俊美清秀，身材这么好，没道理让自己的女儿上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条真姬：渡边彻长相俊美清秀，身材这么好，体力强，没道理不让自己上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是我理解的那个上吗？[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没道理不让自己上[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不如再生一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女儿的就是我的  偶尔用用也没什么的吧[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您这个上……它正经吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛还停留在名词阶段，美姬已经动名词了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两个一楼是什么鬼？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这怎么出现了两个一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不说本就出色的大脑、能力、品行，渡边彻长相俊美清秀，身材这么好，没道理让自己的女儿上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条真姬：渡边彻长相俊美清秀，身材这么好，体力强，没道理不让自己上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肥水不流外人田 ，到时候你女儿吃肉，你怎么着也能喝口儿汤 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看是你自己想上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大胆点，把“的女儿”去掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上？上什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请问您说的是哪个上？</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正义的二打一！  什么？你们也是两个吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别怪妈妈不是人，只怪女婿太迷人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就怕监守自盗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有机会创造机会也要上[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给孩子一个机会，给母亲一个机会[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先给凛创造机会，然后，女儿的不就是我的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子万岁！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得想办法嫁给那个男人才行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太，小凛睡懒觉还不是因为在深夜和渡边约会呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神大人昨晚上累了，起晚一点也很正常，对吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛酱自我发电了一晚[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里推测一下，昨晚的进度，吻了，然后凛回到自己的床上，嗯，虽然只有自己一个人，但全靠回忆的话，然后累了一夜，就起晚了！！哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦太可恶了，绝对故意滴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四个一楼，牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中间省略了nk字的番外[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不由自主的把的去掉了[fn=17]，我不对劲。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么起晚，只能说懂得都懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神大人不愧是体力3的废渣呢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到底干了啥啊，可恶，乌鸦为什么不写完整！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神大人昨晚上累了，起晚一点也很正常，对吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昨天抱了多久</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是我少看了，不应该啊。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太，小凛睡懒觉还不是因为在深夜和渡边约会呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;干啥去了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为不习惯新的环境，今晚就好了</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢勿忘我，会不会是清神当时害怕了的缘故呢</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最近勿忘我出现的好多啊，我再一次说明他的花语吧，第一次出现是在渡边与清野逛花店
勿忘我：永恒的爱，浓情厚谊，永不变的心，永远的回忆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和渡边在乡下的日常</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吓人不至于…
日本早上吃米还挺常见的…
跟同学两次实验室旅行…
只要是和式早餐都有米饭…米，汤，小菜…一个不少
不过问过同学，早上吃米饭的时候还是少数，大部分时候吃早餐还是图方便的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早饭吃白米饭，太哈人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都行的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们现在知道当年改土归流的土司都去哪儿了吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吐吧</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这波细节</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;生米煮成熟饭了?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示煮熟饭（）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到男主点了药王技能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊我死了</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;幽子阿姨？不应该是妈妈吗[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到我家煮饭婆什么都做不到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是清野神攻略渡边的过程吗？经过与渡边的提前相处，改变了渡边，让他走上东京帅哥的道路，但在此过程中又感到了酸，最后成功将渡边煮成熟饭。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道…凛酱和渡边已经生米煮成熟饭了？</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呦，全熟的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么叫默契啊</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;全熟党才是真理！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸡蛋半熟才是王道，全熟是邪教</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;半熟最好吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸡蛋不炸糊了能吃？你们都是原始人吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道没有生吃党吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝对是半熟的好吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小时候还生吃过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神不应该是全熟党吗，我记错了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胡说，全熟yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;糠心的煎蛋最好吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;根据吃法的不同，就算是生鸡蛋我也不是不可以尝试</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;半熟才是王道（不仅仅是因为追随神的脚步！）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都能吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那啥，我喜欢吃生的。。。（小声）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说能吃半熟的是不是也能吃生的啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;溏心蛋是真的香！全熟蛋黄吃起来太干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;半熟流黄才是王道！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸡蛋还是带点糖心好，有种催发食欲，令人满足的香气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道为什么突然想到芳乃。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;溏心蛋是最棒的，一口咬破那滑入喉头的溏心，让人心动不已。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全糊党不服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;半熟和全熟都是异端，抹茶糖心才是最好的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这算是小圆梗吗？我想到那个老师了[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有没有七成熟的朋友们？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荷包蛋的蛋黄什么时候戳破</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么熟不熟的，我都直接把蛋打到嘴里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;半熟？吃着不腥吗？我吃了一次把我恶心吐了，打那之后溏心蛋都不吃了，只吃全熟的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，我也是半熟党  比如煎蛋喜欢半熟的荷包蛋，煮蛋喜欢糖心蛋蘸酱油。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是我针对谁啊，全熟蛋也能叫煎蛋？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;煮鸡蛋可以半熟，煎鸡蛋一定要全熟！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全熟党才是真理！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸡蛋半熟才是王道，全熟是邪教</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我已经在研究msi的对手了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛酱哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后他们俩爱上了对方喜欢的东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经变成他的形状了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经想着在一起之后的事情的凛真可爱啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得会被纠正</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留下伏笔，以后如果出现清野吃全熟蛋的场面，我能憨笑笑傻掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皮肤是选皎月还是亚索啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;必须要想办法娶了这个女人[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盲猜最后变成了渡边彻的形状</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这控制欲比美姬还强呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没开始就想着离婚了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经在研究msi的对手了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一直如此自信啊卡密</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神之自信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿巴阿巴阿巴[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的自信</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以说这俩大小姐本质上一点区别都没有。清野是不管事，真要是管了事，下手不见得比九条轻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;味噌（cēng）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑海备忘录•渡边彻篇
1.一个不为我美色所动的家伙，有些意思，经过考验以后可以成为部员，等他迷上我了就踢出去
……
159.好像突然在某一刻，就不能没有这家伙了，是什么时候呢？是校园祭的那天早上吗？
……
626.改掉渡边彻喜欢吃全熟煎蛋的癖好，不然婚后会有早餐冲突</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么想到美食供应商了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一如昨晚的味道[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们，你们是不是闻到一股恋爱的酸臭味？</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野太太这样做的米饭，不行;渡边这样做的，行！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶


草</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下药了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是爱，我加了爱[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野太太这样做的米饭，不行;渡边这样做的，行！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就宠他吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我吃了一颗柠檬，为什么是甜的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就着渣彻的米饭确实香哈，凛神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人，上红豆饭！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大蒜，是大蒜，我加了大蒜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺甜的对吧，各位🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的米饭，有股酸酸的味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没酸味了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有爱情的味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是有人下饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经是渡边的形状了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一股恋爱的酸臭味？</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;幽子这就是你说的创造机会？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽幽子要被冲了！[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，慢一点，幽子要丢了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻，慢一点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大师兄！师傅被妖怪抓走了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时不时</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈很好笑</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;诶</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;耳机八万八，警家听匪家。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦[fn=58]听力这么好，那你听到真姬的声音吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浪费了多么好的能力啊！变身技能，哎好浪费。真咸鱼。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，两个一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有两个一楼，这不简单</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以，昨晚到底发生了啥[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，这就上手了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼上的说的对啊</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不应该是精通级比掌握级强吗？</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我淦，我一直看成海豹，我还在想是不是能变成海豹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有我看成了海豹吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，钓鱼吧老哥可以钓除了鱼以外的任何东西</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得早上去试潜水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;潜水部欢迎你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前不是三选一吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前不是三选一吗？</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;召唤海豚🐬凛酱能幸福的晕倒吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后命令等级高了对有智力的无敌，那没有脑子，是不是更吊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这太无敌了，往草原一站就是兽王，往森林一站就是虫王，往海上一站就是海王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿库娅算海洋生物吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;内涵主角海王是吧，快进到组成正义联盟拯救地球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后命令等级高了对有智力的无敌，那没有脑子，是不是更吊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;召唤海豚🐬凛酱能幸福的晕倒吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：小鱼儿，帮我把真姬带过来。小鱼儿：好的，没问题，你说什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真.海王彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻海皇，爆诞！！！
杏爱道，堂堂连载！！！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和鱼说话真能算超能力吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;level 🆙
海王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个，之前是不是有了？我怎么记得有个鸟？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这已经是超能力了，对吧？</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阿多丸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京偷心贼海王 也叫海贼王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沉船是不是有巨蛙和海毛虫啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沉船地图❌
好船拼图✅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的世界那种沉船挺有意思嗯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捞宝藏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东海沉船？</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嗯。。很多晃悠都有抱字 意思不简单</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至少是a上去了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只是抱抱吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，日本语言中的抱还有另一种意思😏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你昨天晚上干了什么</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这谁顶得住啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;承认自己没出息的渡边彻真是了不起的渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;矜持的美少年，被爱所击倒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这谁顶得住啊，那可是神啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“直视内心真实欲望的渡边彻。了不起的渡边彻”</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一克黄金368左右，一吨也就3.68亿，两吨白银五千万，珠宝价值倒是不明朗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？下一个奖励是不是要开霸王色霸气了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不算珠宝，85亿日元左右
加上116箱珠宝，起码几百亿打底
不知道三分之一九条家够不够</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接起飞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一顿黄金是准备用来吃吗？？？
不愧是了不起的渡边彻，轻易就做到了我们做不到的事🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？下一个奖励是不是要开霸王色霸气了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一克黄金368左右，一吨也就3.68亿，两吨白银五千万，珠宝价值倒是不明朗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怀疑作者在水字数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，这宝藏搞定了渡边自己就可以打造豪门了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别的我不跟你们抢，这顿黄金我吃定了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真特么直接，没有瓷器吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吨</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是啥叫西班牙王室啊？你这西班牙王室是哈布斯堡家的还是波拿巴家的还是谁啊，西班牙王室完全不是一个东西二十一堆东西啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古堡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点像猫和老鼠剧场版的开场白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本周边的运宝船以荷兰和我们的居多吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来自南美洲的掠夺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盖伦运宝船还行</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;夺笋呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卖了发现物情报，再卖个地图钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还有种说法就是不想麻烦渡边。变体贴了啊美姬。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总之就是和凛不一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我吃🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃米饭的清野和吃吐司的九条，两人完美对立，可真是有意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬醒醒呀，家要没了</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应景啊</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我能顺着美姬的脚指甲盖儿舔到天灵盖儿☺️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕刮伤渡边？🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种任务就交给我吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用牙齿给你啃了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我能舔干净</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是我牙齿的幸运，它们昨天一定偷偷买彩票中了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我能顺着美姬的脚指甲盖儿舔到天灵盖儿☺️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕刮伤渡边？🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我可以帮忙啃好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面5楼呢，发了啥虎狼之词？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想舔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;QAQ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神奇，就这一段话我当了三次一楼了，谁来谁死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嚯，这么顶的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;需要先用舌头清洗一下么[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用什么剪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是脚趾甲吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬大人，这种肮脏（幸福）的事就交给我吧！</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是有过目不忘吗？怕什么，在默写一遍不就行了</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么类型的书？</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那用过的渡边应该也行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这应该是美姬给神明脱离清野家的资本</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=4]</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;输了！输了！
美姬又双叒叕输了！（号泣）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，价值上千亿</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不厚道地笑了笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这可不兴送啊宝友</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的国宝之敌[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老魔鬼了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压喽！（卖鱼强震怒）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是好姐妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是夺笋人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们一个个都跟熊猫抢吃的</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你也不差呀[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人均谢彬</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说起来，就是这本书以及各位评论大佬，让我懂得剪指甲的含义，跟压我头发一样的酸臭——母胎sl 28</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂得都懂</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;书：“我他妈这么珍贵你往我上面放面包屑脚趾甲？早知道烂在系统手里”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书要送给清野，把美姬的放上面剪指甲，美姬要清野吻她的脚才原谅她。那么折中一下，清野看书的时候闻到了美姬的脚气，能不能原谅她！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是会乱飞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬就是世界上最大的财宝</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是自己要舔的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大师级</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剪完不用下看看合不合适么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给九条剪指甲这件事，对渡边来说相当于亲自淘米洗菜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奇怪的技能增加了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;bo良ki影的认同</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;注意：美姬用这本书垫脚剪指甲了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，最少数亿美金的书。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神被打脸了[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;史上最惨藏宝图：算了，我还是退群吧</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，神被嘲讽了</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边正面回答问题
就是暗示了清野
这本书的实际价格</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神反应过来了，这书贵的一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言，这本书竟然比那本还贵！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的贵</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我一餐一顿黄金</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一顿饭的黄金</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怀疑乌鸦取这个名字是水字数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬的反击</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个书名很好 很直接 </p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，白送一条船的财宝</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这一波啊，这一波是渡边故意说谎透露给rin桑；
这一波是美姬提前猜到这本书的价值，故意在书上剪脚趾甲嘲讽rin桑，然后这时候去争抢，假装自己才反应过来渡边和rin桑的互动，意识到书的价值；
这波啊，这波美姬在第五层</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真的吗？我不信，除非你给我闻闻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好了，今天的qd阅读就先到这</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画《清野在看书》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边伸手压住作乱的脚丫，美姬回头看了看清野凛，轻蔑一笑，转脚缓缓向下。清晨的阳光里，清野凛皱了下好看的眉头，仿佛闻到了一股淡淡的石榴花香</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情趣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边永远是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬也太会了</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我以为是不要干结果是隐藏起来干啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：岂不更妙</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太组：你说出了不能被原谅的字眼呢，彻君[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妇女指14岁以上女性，没毛病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家都是成年人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说妇女了对吧！</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可以，一语双关</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老是不做任务</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岂可修!我的超时代游艇呢!我的变身play呢!啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变身海洋生物没了。。。</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;中间？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抓虫 敞篷欧陆GT后排只有两座</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总感觉两位太太才是真爱</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这种情况下，中间大概率应该已经是个带黑白照片的小盒儿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可是换不得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京湾警告</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太的美好你不懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把两位太太当成老师学姐，那不是更凉爽吗[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那将绝杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这场面我熟，叫修罗场[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可是换不得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桃饱网年费会员？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是这样的风更喧嚣不是吗？你更躁动不是吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果开车的换成小泉青乃，副驾坐着明日麻衣，那这波将是绝杀！[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就应该是渡边皇帝与他的后宫出行图了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹，这是晋阳附体了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边畅享美好未来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种情况下，中间大概率应该已经是个带黑白照片的小盒儿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边这想法还有什么可说的?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇，你好会做梦啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;血液中的渣男本性</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是了不起的渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想的挺美 ，然后太平洋下的沉船宝藏换成了你 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼？
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终究要成为四翼大天使</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人齐了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐会情不自禁的匍匐下去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可能需要一辆七座车［doge］</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应有吐槽，太屑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真敢想啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;完了，我可能太想念我老婆了，我竟然看成了轻井泽惠，看来夫妻不易分离太久。[fn=19]</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐更惨好吗！只是她比较主动而已[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师太惨了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你忙，忙点好，忙点好啊</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;知识点</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太会了，先拉低期望值再撩拨一下，不愧是你[fn=27]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沉默是今晚的康桥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;默然之间，情意流转</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学会了渡边的运营。。你也学不来后宫的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就离谱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥很忙，东京帅哥正在死亡[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呸 渣男！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是你吗，罗志祥？[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时  间  管  理  大  师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有一句渣男不知道当不当讲？</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夏日轻井泽の兼职痴女学姐の偶遇，ssni-xxx，1980円</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;硬核偶遇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是您</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣，我的麻衣。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光明正大的“偶遇”，不愧是你，学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我最喜欢的修罗场又要来了吗</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呀呀呀呀</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“我也要去”“不告诉她”，这反差，学姐掺了老师和渡边旅行的一脚，到自己的回合还把老师扔一边了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁还怀疑麻衣学姐8点的智力吗?怕不是被学姐摸头摸到傻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是偷家小能手啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人活着就是为了麻衣啊……至于是樱岛还是明日，有区别吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，这楼错位的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐：我最讨厌双标的人和说我双标的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我也要去”  “不告诉她”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐老偷腥猫了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人活着就是为了麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;活着就是为了麻衣！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，老师什么时候才能站起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁还怀疑麻衣学姐8点的智力吗?怕不是被学姐摸头摸到傻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：青奈回合“我也要去”，我的回合“不告诉她”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我也要去”“不告诉她”，这反差，学姐掺了老师和渡边旅行的一脚，到自己的回合还把老师扔一边了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;换成渡边和小泉要双人旅行的时候就：我也去！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的就是我的，我的还是我的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐偷吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自私的，无私的，所有的，不是最好的我，只能将我所有的最好，都给你，彻，我的，彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要独享</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的是我的，我的还是我的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是学姐，忠于欲望ಥ_ಥ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃独食的麻衣，啊我死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣太可爱了！</p>
`;
        case 178:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣你吃独食不厚道啊[fn=15]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷家小能手</p>
`;
        case 184:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最强小学生加入战场，好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最强小学生驾临东京</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咱，也来东京啦，东京真厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经开始笑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《咱》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;品土味萝莉，享百味人生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说起这个前面是不是还有个渡边的妹妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;短笛大魔王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不等了，现在就去看常大王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲酱大胜利！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊 喵帕斯终于又出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最强小学生驾临东京</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最强小学生加入战场，好耶</p>
`;
        case 185:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喵帕斯来啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岛国第一小学生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喵帕斯，喵帕斯帕斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了，渡边莲！雏鹤爱或者喵帕斯的设定都很赞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边莲，yyds！</p>
`;
        case 186:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;未来咱们也是人口断崖式下跌  小学还好点 大学直接要倒闭很多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中国也是正在经历这些，乡村没人，小学初中合并。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就成学院偶像啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，好家伙，不愧是母亲，这就内定了两个儿媳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;悠哉完结了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;表姐失业啦？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最强小学生，校长就是保镖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学校倒了</p>
`;
        case 187:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;三个一楼</p>
`;
        case 192:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《背影》既视感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新干线火锅！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来夏季旅行要结束了</p>
`;
        case 195:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻，玲子，无端联想挪威。。。我污了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;悠哉日常大王完结了。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咸鱼女教师的工作保住了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，还有其他人怎么办？</p>
`;
        case 196:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;再也不能愉快的摸鱼了，唔，哭噜嘻！[fn=12]</p>
`;
        case 199:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是要做任务开游艇回去嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你与曹贼何异！[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;代表密密麻麻的错字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;密密麻麻的一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是要做任务开游艇回去嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你与曹贼何异！[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么?渡边要去哪?你真的要牛?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼阵亡了数次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论怎么都没了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野太太：我的回合！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去干坏事？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好[fn=31]太太游戏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;¿是我不对劲还是乌鸦不对劲</p>
`;
        case 200:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;本来要完结了然后一个读者说可以开启小莲的支线，今天她就来了，这本书这么火完结之后完全可以开启多条if线接着连载</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前几天我记得有个读者说妹妹好久没出场了，这就立马安排上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者记得不要点完结，状态是连载就能一直发番外之类的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出任务又不完成，每次都这样[fn=31]哪怕弄强行剧情杀也可以啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来要完结了然后一个读者说可以开启小莲的支线，今天她就来了，这本书这么火完结之后完全可以开启多条if线接着连载</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接让她来大阪就好了啊，干嘛回东京？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前几天我记得有个读者说妹妹好久没出场了，这就立马安排上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmm干坏事被抓的即视感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么上面的评论不见了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无了，睡觉睡觉🐶
还不睡是修仙还是想跟乌鸦比命长吗?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明页面显示5条评论，点开后，空白[fn=13]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊！又没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这篇乌鸦到底改了几次啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前故事看完了，睡觉睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么感觉不对劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我赌后面一段抄书评了！</p>
`;
default:
			return '';
	}
}
        