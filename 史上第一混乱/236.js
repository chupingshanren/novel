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
<p>&nbsp;&nbsp;&nbsp;&nbsp;中华女子多奇志，不爱红装爱武装</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我咋滴想起了梅普露</p>
`;
        case 130:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;辛亥革命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不来了个金少炎吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时空管理局嘛…之前说好划到五四，这会儿直接辛亥咧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;辛亥年60年一次，你说的是哪个辛亥年？</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你别是萧何的后人就行。。。</p>
`;
        case 132:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，质量可以的。巅峰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强人已经多长时间没跟新了。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以这就是你请假5个月的理由？</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这媒人做的。。</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这几个女将真说供给，平阳公主排第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最牛的是妇好，还有秦良玉，我算是补充</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁红玉名气肯定没花木兰大，杨家女将是小说编的，平阳公主功绩很大但名气总归差了点比不上木兰姐上教材了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;论名气，花木兰当之无愧的第一，谁让写进教科书了呢，其次可能杨门女将吧，平阳昭公主也是牛人，但是好像名气不是很大，世人皆知娘子关，却少有知道平阳昭公主建的，大唐双龙传李秀宁原型人物，为李渊立下汗马功劳。</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘴真毒。羽哥那话其实没毛病吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子:阿嚏</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开无双了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说真的，如果项羽真是乌江自刎的话，也就是说垓下之围那么多汉兵都没能围住他，冷兵器时代能拦住他的军队也就未必能有了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万人规模的战斗项羽就是个bug，这是唯一一位正史记载单人挑三千人的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兵法推演不包括hug，羽哥就是那个bug</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一刀999，装备全靠爆…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过项羽还真是这么干的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽日常</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变态英雄</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关公哪能战秦琼</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，后面木兰打了12年的柔然被项羽一个下午打废了</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;而且其实正面一点也不简单，排兵布阵，安营扎寨。。。人数一多什么事情都很难</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果是历史类我会来吐槽一下兵家分类，但这是搞笑文。。。。</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;表演给她看[fn=33]</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只说兵法的话和赵括说去啊，说赢了牛逼</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纸上谈兵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是羽哥在冷兵器时期根本就是个bug</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽学万人敌，学了几天就放弃了，估计兵法不会太精</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五千人，项羽一个人挑了</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;推演的前提是双方战斗力一致</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽巨鹿一战，破釜沉舟，数万破秦军20万，彭城一战，3万击溃刘邦联军56万，以少胜多，是项羽的强项</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牢之命高祖与数十人，觇贼远近。会遇贼至，众数千人，高祖便进与战。所 将人多死，而战意方厉，手奋长刀，所杀伤甚众。
这一人追着几千人砍你告诉我也是局部强吗？战争就别玩幸存者偏差那套了，仔细分析吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逻辑思维听过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你历史还挺好，不是26了吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还真是……</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;华夏全面战争</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上兵伐谋</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我必须重新集结部队</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;f1,f2就完事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽：我都是直接A过去。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这人打字估计只会按fb两个字母</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暴雪死啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你带着一个2米的人去和一米八的人打篮球，他说靠单打打穿你们真没问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搁在当时算实情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不怎么算，好歹都是暴雪的产品</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按照隔壁神三的说法，这叫勇战派，可以创造奇迹的那种，兵权谋兵形势兵技巧兵阴阳四大派系</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艾萌：“说好的打星际，你们那刀锋女王诺娃扎加拉德哈卡泽拉图是几个意思，一个英雄打我一百人口部队”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大主教下船</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二炮，东风啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花这算数都绝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;08年也就七八万，多久十来万一辆普桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二炮不用炮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有人算过，一发火箭炮弹都顶上一辆宝马x6了，更别提二炮了……</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉到的……</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;足球不行..是因为高俅死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;远东球王了解下，不是没出过能踢球的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个梗现在还很潮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在还是不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2023年了，还是不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一直就不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年了，还是不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今年世界杯又没进</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呀，2022年的，男足继续平衡国运，带着大家学地理，学习各种小国家……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国足不行还不让人说！最近又出幺蛾子了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经输越南啦拉拉拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟數學一樣 不會就是不會</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年春节第一天男足就迫不及待的像世界又一次证明了:他们不行。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2023年了。中国足球依然不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年了，国足还是不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也证明：还一周就2022了，男足还是不行！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我证明！2021年了，还不行！哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不看球，就听男朋友跟我神侃来着。
反正至少中国足球躺平任嘲呢，前些日子看吐槽大会，体育专场下半场愣让中国篮球某些玻璃心给我搞没了！森气！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只完整看过中国一场球赛，输给了马来西亚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我小的时候那会儿中国足球也没烂成现在这样啊，虽说一直有恐韩的毛病，但是对上日本沙特伊朗啥的都是不怵的，自称个亚洲强队也还算名副其实。有几次没出线是被抱团的西亚球队玩了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花，你这是第四次鄙视了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上世纪国足还不错的，世界杯边缘级别的，然后越来越烂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2019了快2020了男足还是不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;足球不行..是因为高俅死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实80年代的时候男足不差，不过市场化以后你们懂的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李惠堂先生不服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;远东球王了解下，不是没出过能踢球的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇，这充满年代感的名字。</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1楼？？？？？？？</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子自带辉煌光环，男女老少通吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家都喜欢</p>
`;
        case 100:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长得好看的是觉得你丑 没有竞争力 不足为惧
厉害的是觉得你弱鸡 没有竞争力 不足为惧
聪明的是觉得你傻 没有竞争力 不足为惧
有钱的是觉得你穷 没有竞争力 不足为惧
所以他们都喜欢和你在一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说明他们觉得你比他们丑</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这个应该用两张纸玩盲的，花要是选择去山上劫项但是项没选山上那肯定能比她快，最起码不能是五千对五千，花兵分四路算她一路先到才一千三对五千，那有得打，先机很重要。项羽先把自己意图亮出来花属于见招才拆招确实也有点胜之不武那意思。当然要说项大男子主义男人让女人那套说辞的当我没说。</p>
`;
        case 106:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完全是一个现代人了呀</p>
`;
        case 107:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我饿了，想吃炸酱面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点心酸</p>
`;
        case 111:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是胖子可爱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;同样第一次听说木兰的事迹，始皇帝的反应比楚霸王可爱多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看人胖子多会说话儿，千古一帝[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子好可爱</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;通关虽然还差得远，不过我能闭着眼睛过第一关</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021年，没想到真的有人闭眼通关超级玛丽了[fn=35]</p>
`;
        case 117:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在有健涨………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，国之大事，唯祀与戎啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妇好。同时掌管军队作战和祭祀，古代一个国家最重要的两件事全她一人负责，牛的一塌糊涂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那女集团军司令呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;薛刚反唐……</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强:来，妞，大爷带你出去浪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果把主语换成小强</p>
`;
        case 119:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子要真是模样磕碜，店老板能让她干门迎？那可是一个店的脸面啊</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;160公里每小时？？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥还是牛，小强的金杯敢上100迈[fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈</p>
`;
        case 122:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你确定你数学26？</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十年了，今年考下了驾照的我终于看懂这个地方了[fn=62]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑出声</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点烧机油啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2JZ的大金杯，拉着烟跑的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2JZ？</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那句话咋说来着，项羽牛逼是因为他不怕死，我比他牛逼是因为我不怕他死～</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子真好，跟个大姐姐一样。怨不得她出事了五人组要拼命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子好可爱哦</p>
`;
        case 126:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦国防部长叫太尉，汉才是司马，司徒，司空</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔，哈哈大兄弟我帮你喊一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是大司马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔那哥们呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是没文化吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太尉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老说伏笔那哥们哪去了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这留个爪印，当司马了</p>
`;
        case 127:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纸箱厂工会主席，这么多犄角旮旯的职位，张小花在哪儿搜罗的。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别剧透呀


。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真香</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎哟 划重点 特大重点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;flag</p>
`;
default:
			return '';
	}
}
        