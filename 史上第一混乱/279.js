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
<p>&nbsp;&nbsp;&nbsp;&nbsp;前半部分快结束了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纵死侠骨香，不惭世上英</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个“轰”字真是太形象了哈哈哈</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在这点上小花可能稍有误解 我从小练散打的 老师至少考察三年以上才会教你那种一击致命的东西 俗称压箱底儿的招数 能学到的都是不爱打架 至少不能是那种被问一句你瞅啥就动手的孩子</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陆羽泡的茶，听说名和利都不拿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在茶饮料可比别的饮料火多了。小花这个创意费康师傅就没少给吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个大托盘儿，一杯一杯的，哟于大夫来了</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么茶道……喝就行了，就是装逼的，抹茶都是茶沫子，道什么道……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻生太郎？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舍不得孩子套不着狼，这梗当年给我笑疯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放到现在也得有一堆人说这不符合传统，改编不是乱编啥的，跟哪国人没关系，就是一些半吊子爱装x而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你一个日本武士指责我们大中华茶圣不符合茶道？没有泱泱华夏五千年历史，你们日本的茶道也就局限于油茶面吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神TM麻绳逮狼……</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;馒头碱大了应该是邓国师来那天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此贴该沉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真留言墙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道第几遍翻出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此贴沉不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等会，我记得希灵帝国里面好像也有这个梗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;行书横着写？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强这也挺厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;馒头确实碱大了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刷了三遍了这书，从来没有一本书能让我刷三遍还是一字不漏的，期待第四遍发现新亮点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书一直很火 ！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十年后还行会火</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此贴该沉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得海星</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;馒头碱大了应该是邓国师来那天</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚建起来的时候是李师师，后来有国家调配老师了，而且李师师也拍电影去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文化课的女老师不是王远楠吗？</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者意图表达 催更的都是民风不淳朴的那种 …</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花更新太慢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;張小花才是狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花更新太慢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花作品太少，不够看！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花更新太慢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花更新太慢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花的作品太少了，不够看！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花更新太慢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花是狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花更新太慢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花是狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花更新太慢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者意图表达 催更的都是民风不淳朴的那种 …</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈最后一句怎么混进来的</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长城其实是有意义的，但是终究只是个防御公事，真要保家卫国还是靠人，长城本身只是个辅助公事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是说长城导致那些人跑欧洲很多吗？还是有用的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马奇诺放线都没防住谁不是么。[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这特么是逼着人整面墙都拆走啊，墙拆？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是想霸榜啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里是一周清理一次吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;育才墙，育才强</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不用看评论了非常过分的剧透



好不容易忘的差不多后过来再看，被剧透给噎个半死，神烦




</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放剧透








防剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;整本书唯一想哭的地方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里心里好难受</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;读了五六遍，每次到这里豆情难自禁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看到这就会深呼吸一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;短短一段话看哭了，不像有些专门拿个几十章十几章来写一个人的离世，太虚伪太假。</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纵死侠骨香，不惭世上英</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=27][fn=27]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实也可以写一句 安得广厦千万间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比老张离去更难受的点是，书里给我们感动和快乐的这些人，只有老张这一去再也回不来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次看这书还是在初中，那时候是租的小店的盗版实体书，二十块押金租一天5毛钱，那本书写到这里就是结尾了，当时看完心里就在想：不管是老张还是这本书，都没有比这更好的结局了吧。后来无意中在网上又搜到这本书才发现原来还有后面几卷，在盗版网站上看完之后，现在来补订阅啦。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平淡但有力量</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道找到杜甫还是不是老张</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然看哭了😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生死两茫茫，动如参与商</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纵死侠骨香，不惭世上英</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轻描淡写的一笔，却引人惆怅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纵死侠骨香，不惭世上英</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纵死侠骨香，不惭世上英。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再一次看到这里耳机放的歌非常应景Yesterday Once More</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老虎还是没能混到扫地位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;育才扫地僧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他大徒弟好像未必比张清差</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按照本书武力排行来看，这小日本真打不赢段大徒弟……</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然慌的一批，表面却稳如老狗。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看似稳如老狗，实则慌的一匹</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是啥先机啊？趴到的先机？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这先机抢的，都不够两下子扒拉的。</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀人？还要诛心？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不用孩子也不用麻绳，空手逮狼都没问题</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;修摩托的那个是吕布</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给他找那个喜欢看蚂蚁的，都不知道自己怎么输的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下次给安排个修手机的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二胖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开大车的，维修工人，修摩托车的，木匠，力工……这些都是你惹不起的，对了，还有个飞机场的修理工，他要是嗑药了你也惹不起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开车的一般般，修车的才是真牛逼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕布</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上学的时候看这句觉得中医好厉害，现在看这句觉得中医真厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对的，隔壁老王对他们家可热情了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是生出来的孩子黑头发黑眼珠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句信息量有点大 ！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那中医姓王？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呃，有一点歧义。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呃
</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不解释我完全没反应过来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;废医验药。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别19世纪，现在大多数药也是植物里取出来的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;19世纪欧洲也是草药学，现在医学不过一百多年</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;39胃泰啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老哥你是来打广告的吧</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你给多少钱你都赚了，过去的老中医可都是一副好字，和现在的鬼画符可不一样。再说扁鹊华佗亲笔，那就算文物了。老先生这是大义啊[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;免费看病啊[fn=4]</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扁鹊应该不知道盘古，因为我记得盘古氏是三国时候产生的神话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盘古女娲结合体吧</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实际上，上帝本来就是中国词，是利玛窦这个狗比翻译的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现代研究好像说白种人肠子比亚洲人短点，所以可以大量吃肉不容易便秘，亚洲人大量吃肉就容易便秘。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上帝有几个师！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扁鹊：上帝是个怎么东西，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扁鹊老哥也不是个实心眼儿的人，扁鹊见蔡恒公立有间，扁鹊曰“没救了等死吧你！告辞”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈神医也是老实人，应该是目前客户中“辈分”最高的吧</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再纠纷他们外国的也不敢来啊</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白虎节堂！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能是金生水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按理说有泳池叫玄武比较好吧，白虎有什么讲究吗</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真·潜水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像极了逛论坛的我。。。</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水猴子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画重点，是不出来，不是出不来，也就是说还可以待更长时间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水陆两栖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水鬼啊！（破音）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以申请吉尼斯了</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;bbc滤镜警告</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前上初中时墙也是两米五，两脚一蹬就上去了，现在让我爬个一米栏杆我还得拿手扶着[fn=31]</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈没毛病，被逮住说明轻功还没到家</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好一招恶蛆钻裆</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段有点扯了 我一个校长 当场给你演示怎么教学生？再说术业有专攻 不能说因为是校长所以学校里教的东西我就都会吧？你大学校长把你们学校360科都学会了吗</p>
`;
default:
			return '';
	}
}
        