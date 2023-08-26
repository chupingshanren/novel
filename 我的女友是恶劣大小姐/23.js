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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到昨夜风疏雨骤[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好快啊你们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀吼！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;黑</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吹万不同，咸其自取。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么叫修辞手法啊（战术后仰</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就像踩下地雷的那种万籁俱寂</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我都忘了渡边还是高中生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怀念高中的生活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然而本书已经写到了11/12，真悲剧啊呜呜呜</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还记得去年这个时候和凛去占卜，说凛得爱人是一个“凛明知道其说谎却愿意相信”的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想这样就不错[fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今年来场演唱会</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喂，你们不是分班重组了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有没有SM女仆咖啡[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大胆点，比基尼女仆咖啡</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;国内是啥都学，然后学完就扔，就为了应付考试，还浪费时间，不如花时间去学真正有用的，每天六点起十一点放学，学生都快累死了，说学生时代吃苦以后就好了，结果毕业后更难受，每个内卷卷到飞起……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这。。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是我们的教育不好，但是精英教育确实对特定的人效率高。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;资源不够，真正上大学的就一部分尖子，其他都是高中毕业直接就业</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西方到底要么是精英教育，要么是快乐教育</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玩一次放飞一个月，还没收心下个活动又到了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岛国人的高中生活好丰富啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们霓虹人就不读书的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芝麻凛我老婆</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;沙耶香酱。</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我还以为是黑板擦情侣[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个应援开始反应就歪了</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;开学居然会兴奋，好羡慕。。。。</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个还真是有的 我高一的一个英语老师 谈了男朋友和没谈男朋友两个性格</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以现实里那么多灭绝师太是因为缺少爱？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是你拯救了大家吗？
彻，你好温油[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥的功劳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢你，东京帅哥</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好耶
</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;跑的话不知道文化祭被安排什么奇怪项目，比企谷八幡</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;蔚蓝的星球是……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沙滩上的你我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那年的海风吹着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仔细听听我说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放下手中的工作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是送给妈妈的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写下了一首歌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;窗外有千纸鹤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天空是蔚蓝色</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;无忧无虑，青春美好的校园时光
尚未理解失去是什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想我的初中生活了，乌鸦加油，yyds。</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还是察觉到了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬の凝视</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起来100w积分和读心术了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了，经典隔空读心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真会读心？</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你们确定不是神灵下凡一分为二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可直视神[fn=22]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某某神：大不敬！</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬越来越会撒娇了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我好想做美姬小姐的狗🐶啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;酥酥麻麻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您现在收看的是：
上课小动作－彻与他的翅膀[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;555555美姬越来越可爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戳戳～</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我为你跳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻:得嘞，跳一个给你开开眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喂，不要一脸淡然地说出很恐怖的话啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兔美酱～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:得嘞</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那我走</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木，我的一木😭怎么被迫害的那么少啊😭不够看啊😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木是什么时候发现的啊，完全没印象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;|･㉨･｀)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请加大迫害力度[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好惨一木葵[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木是什么时候发现的啊，完全没印象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;观察渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗中观察</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看着你，一直在看着你。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加大迫害力度！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;磨刀霍霍向渡边[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;惨 一木 惨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木，我的一木😭怎么被迫害的那么少啊😭不够看啊😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;斯巴拉西</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;决定就是你了——人类观察部！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们至今都不知道班长的姓名[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼镜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加学分我就去</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;三上后面不应该是悠亚么[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺选吕小布，他是众望所归！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑板擦情侣？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小岛秀夫和他的朋友</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;聪明</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三上后面不应该是悠亚么[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我推荐山上和小鸟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺选张大炮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我选肥雪，他会背帮规嘛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;风太郎和四叶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一般都选在班级里发糖的还没到男女关系的互相有好感的男女生，然后凑cp[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺选吕小布，他是众望所归！</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我们至今还不知道一直作为工具人出现的班长的名字</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不是欺负老实人吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是校园爸临？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是象王道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;悲慘的欺凌者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥我突然想起日在校园的文化祭，嗯，就是篝火晚会的时候</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周瑜打黄盖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杜绝校园霸......等等，是情侣啊，加我一个！</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大老师班里的高种姓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《狂赌之渊》的学生会，《欢迎来到实力至上的教室》里的学生会</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;周四讨论做什么，然后唱票有几种选项，周五就这些选项进行投票，日漫操作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周四唱票，周五投票？？？周四唱什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唱票是指開票時有人在喊XX號一票的那個程序吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唱票不是应该先投票吗</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;中间~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的翅膀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们是我的左右翼，渡边号，起飞！</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛：禁止联想！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是他，在所有一切之上是他，我的神，国井休</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特に彼女は、すべての上に彼女は、僕の神様ーー清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野原话</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;当言同路</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一直是九条在做出让步…看着难受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的翅膀  ❌
九条的翅膀  √</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一语双关</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女王♀邀请</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇哦</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;猿  神  绕  柱</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神的诞生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，内田 神 佐仓.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;考哥. jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边为什么是神
首先是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的诞生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话让我想到了熊狼狗的封面。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是的，你是唯一神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还说不是村上？（笑）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野竟是我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的翅膀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，内田 神 佐仓.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;松岗名场面？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反了反了，清野家赘婿（未来）噬主了</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;挪威的森林</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;机械降神，最开始指戏剧中解决不了的矛盾使用一种剧情外的力量解决（大概这样，有兴趣可以百度），这里指美姬和凛的矛盾不可调和，只有渡边作为神出场来解决矛盾让她们和好。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是文盲，有人解释一下吗</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《挪威的森林》里面，渡边第一次见绿子的爸爸，也是在讲欧庇里德斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;目前追更到他们开始演话剧，我突然有种预感，特地来插旗，台风要出事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:杯具竟是我自己</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;万恶的资本家！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前玩塞尔达，现在玩啥</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;雷雨的核心是残酷的旧社会压迫，不过现在的好多人只关注狗血家庭伦理剧了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷雨。。。虽然现在经常批评人们只关注家庭伦理，而不能感同身受，但是另一方面，恰恰说明他们的悲惨遭遇所体现出的黑暗社会离大部分人都远去。另一方面，它的文学价值并没有被否认，经过老师的讲解以及观看（我估计大部分应该都会组织吧），也能从一开始的家庭伦理转向社会悲剧并为之震撼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高中的时候语文老师放过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无锡～是个好地方!
好～地～方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乱的一批</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高一语文课本</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷雨。。。虽然现在经常批评人们只关注家庭伦理，而不能感同身受，但是另一方面，恰恰说明他们的悲惨遭遇所体现出的黑暗社会离大部分人都远去。另一方面，它的文学价值并没有被否认，经过老师的讲解以及观看（我估计大部分应该都会组织吧），也能从一开始的家庭伦理转向社会悲剧并为之震撼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上海戏剧每日都演，[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫什么名字来着？就记得有个人物叫鲁贵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷雨核心是旧社会把人变成鬼，放现在的环境就是资本对人的异化。
当年上学就能够感觉到，不管有没有人性，感情如何，你没得选</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷雨的核心是残酷的旧社会压迫，不过现在的好多人只关注狗血家庭伦理剧了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神™雷雨，高中时看的全班震撼一整年</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;狗血，把悲剧的缘由最后成功丢锅旧社会</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高中看的，剧情是真狗血，但也很有深度</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;错别字都懒得改了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是“泡”吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跑茶？靓仔疑惑</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊雷雨。高中生涯不能忘记的高光时刻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在写了在写了（新建文件夹）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神翻译</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我帮你们翻译一下
乌鸦：新书大概有想法了，但实际还没怎么动笔。</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;能演，只能演一场，不能演多哩</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;用最中二的福山润的声线来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;dio</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;回到了中二时期哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻译：我看你是膨胀的不行[fn=31]</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你舅宠他爸[fn=31]</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在自己的公司上班，领自己的工资不是很正常吗？[fn=31]</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这家文库万万没想到倒闭的原因是举办了一次轻小说评比活动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;员工们也在奇怪新老板什么时候过来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某个和渡边同名的人：我什么时候多了个文库？[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;企业自治，氨人狂喜(ಡωಡ) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;执事吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;点～起～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被名为“太太”的物种接管了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文库：我boss呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;点起:我好歹有个名字你们就这么把我忘了？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这家文库万万没想到倒闭的原因是举办了一次轻小说评比活动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;员工们也在奇怪新老板什么时候过来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;交给鄙人吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文库:我不道啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统？</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了，全给忘掉了，让他两自生自灭，估计已经倒闭了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请不要在意细节</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为管理层找不到主事人，所以已经倒闭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;本来这书的系统就只是个推动剧情的工具，日常神隐。
现在书都要完本，就更不用想了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起来好久没讲系统每月刷新技能的事了。</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;巨剑神教天下第一，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九头龙闪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是凉宫春日文化祭的过场。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿越者·异世界的勇者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;MD，虫棍是神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说了ex咖喱棒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不得用盾斧，直接进行一个超解的放</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;文化祭上混入了不知名生物</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们不就是吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;漫无止境的八月😰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那又是一个神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦头像是凉宫春日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;团长，我的团长</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是他心通了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边是说出来了，还是说完全不相关的神都能读出来？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真就读心了</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我只记得“那些花儿”[fn=31]</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈被《关公说事》给耍了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛专门为了渡边去看了假面骑士和一些番剧[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有细思极恐吗，凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得意洋洋的凛也很可爱[fn=24]</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一无尽的八月那一段一般人真的很难坚持下来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来你也</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬，你变了好多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凡尔赛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一起看 杀狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;司足米雅哈露hi  不用中文看就</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是少了几个字吗，还是说就是原本的意思</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是啥意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;安达充的味道</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咕咕咕，咕咕咕[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下次一定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下周丕定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下周也不一定</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“不是逃避”</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵:不～
雪花飘飘～北风萧萧～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘟嘟，一木葵下来战书，约我等明日决战，如何对敌?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;dual！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人贵有自知之明，古人诚不我欺。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然如此那我就选白龙卡组吧[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵:不～
雪花飘飘～北风萧萧～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;硬了，硬了，拳头👊🏻硬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经迫不及待了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我先放个嘟嘟，再放个王司徒在这[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老夫只须一席话语，管教他拱手而降</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘟嘟，一木葵下来战书，约我等明日决战，如何对敌?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刺激</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;菠萝菠萝，冰冻大西瓜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五郎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孤独美食家？五叔？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孤独的美食家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五郎?</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;眼睛！发射！</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;心机boy，来昂贵的地点消费，先从气势上压倒对手。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贫穷使我不敢点餐</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嗨，我也会</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;打不过就加入，拿自己换学姐，极限一换一，血赚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你夺走了我的爱，所以你要把你的爱给我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕不是也要白给了。
你夺走了我的爱，所以必须补偿我[fn=31]</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吃瓜群众</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宇崎学妹那部番里的老板</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中年大叔：你这瓜甜吗？
渡边：……
中年大叔：包甜不？怎么买？
渡边扭头看向别处
中年大叔：问你事儿呢！你这人怎么这么没礼貌？
渡边：你家酸黄瓜是甜的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只怕你等会酸的吃不下饭。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用瓜下酒真爽[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看戏看戏，我也想看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我跟你说，这瓜超甜的.JPG</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以为是修罗场，实际也确实是修罗场，却是另一种情况的修罗场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是大叔，我已经干了三碗饭了</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;迫害一木吗？我喜欢 </p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢鹅肝的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饿了[fn=8]</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真实颜狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花田/好美 8，一木只有6，连系统都看不上的，攻略无奖励</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做梦的素材有了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的是一木葵对渡边又怨又忍不住生出好感。
这是沦陷的第一步[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这说的是渡边吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不说的渡边么……楼下的为啥讨论一木的魅力值</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木魅力值没说，光看卡牌我觉得到7没问题，反正我肯定抱起一木葵就是一个百米冲刺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;施法材料？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵魅力多少来的？</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;请问一木葵是站在什么立场上来管这件事情的，我很好奇</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;既然有了三个人了，那为什么不能整一个吹奏部加强连呢?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然有了三个人了，为什么不能有第四个？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人言否</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;走出一个 恍如隔世
霸气～外露
算逑!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再一再二能不再三？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我giao，真TMD有道理...[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连陈狗都不敢对别的女孩，这样当面说话，不愧是彻，🐮🍺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：你们都是我的羽毛啊……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然已经杀一个人了，我编不下去了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然追求刺激，不如贯彻到底喽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这hhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：那我能做第四个吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然已经脚踏两条船了，为什么不多踏几条</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;七个！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来自东京渣男的自我修养</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边首相之正义演讲[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四翼天使（1/1）
六翼天使（0/1）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：她俩已经知道了，还知道我不止有一个，还默认了。我已经无所畏惧，我很膨胀，唔哈哈哈哈哈哈～啊哈哈哈哈哈～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是东京帅哥吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然有了三个人了，那为什么不能整一个吹奏部加强连呢?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是世界之王吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，渡边渣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么绝世好男人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发出了渣男宣言啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请问哪里可以买到您的著作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有道理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人生的赢家为什么要输？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越来越嚣张了嘛，渡边!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;理不直 但我气壮啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;理论带师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，东京帅哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然有了三个人了，为什么不能有第四个？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逻辑鬼才</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我是来看热闹的，不是来热闹的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咳咳咳，现在的年轻人玩的这么开了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃瓜群众：完了，晚上睡不着觉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五郎叔吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小丑竟是我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑瓜子嗡嗡的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这瓜够不够刺激，够不够酸爽[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊。这就是高中生活吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;准备看修罗场，结果吃到酸柠檬
哈哈哈哈哈啊隔 噗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这下酒菜贼赤激啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这瓜……还挺呛得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;垂死病中惊坐起，小丑竟是我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小丑竟是我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孤独的成年人:小丑竟是我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃瓜吃瓜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是来看热闹的，不是来热闹的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我吃了个大瓜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咳咳咳，现在的年轻人玩的这么开了吗？</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;趁机增加营业额[fn=31]</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;中年吃瓜男：这瓜管饱，竟然噎到了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;未来首相的花边新闻，记下来记下来，以后给报社肯定赚翻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中年男：还有反转？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一顿饭才吃两口，就饱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中年男：世界已经这样了么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来以为是原配抓小三结果更劲爆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中老年人：？？？世界在起舞？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;信息量巨大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我从小到大没见过这么嚣张的人！
哝，你现在见到啦[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;未来首相的花边新闻，记下来记下来，以后给报社肯定赚翻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中年吃瓜男：这瓜管饱，竟然噎到了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我，
老了？
还是我，
太正常了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中年男：卧槽，这瓜，这顿饭赚到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;活久见！</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我得儿意的笑，我得儿意的笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完了完了，渡边笑了</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看来对麻衣是真爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发烂发臭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你泼不到彻的，现在的彻反射神经，早已超越人类极限</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么可能？
乌鸦忘记了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然没迷住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木见到他笑竟然没被迷住，厉害啊</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;因为我已经是个合格的成年人了。。。所以我都要(๑°3°๑)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：说起来你可能不信，是学姐先出的手[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你管那叫勾引吗？哦那确实</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一開始還真的是學姊被笑容吸引沒錯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恰好相反，是明日用出众的相貌来勾引渡边的</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这和我有一个老婆，一个女朋友，2个情人不冲突(*σ´∀')σ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抓虫，不会再有第四个“人”，但第四个还是要有的[fn=43][fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此乃谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老婆是老婆，女朋友是女朋友，宝宝是宝宝，宝贝是宝贝。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四天王有五個人也師很正常的。所以號稱三個人其實有四個也是正常的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错，还有一个老婆，四个。没毛病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是只有一个前女友、一个现女友、一个未婚妻、一个情人、一个表妹而已啦。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没得关系，反正我看后宫从不考虑合理性，在轻小说看到这样的后宫，着实令我很讶异，不得不说这真是后宫流中的极品，为爱而妥协的男女拼凑在一起，明明每个人都不正常，但每个人的性格都让人喜欢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会有第四个女朋友，但是未来还会有妻子，夫人，爱人，老婆，内人，贱内，贤内助等等[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是说要公开小泉老师，但是渡边彻，你现在就想默示清野凛为自己的私有物的样子真的很讨厌，这既是对清野凛神格的不尊重，也是对小泉清奈人格的不尊重[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲真，希望你说到做到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话，渡边彻心里应该很清楚一木葵以为另外一个情人是清野凛而不是小泉老师，却没有任何呈清的意思，主动当个谜语人，这写得我恶心渡边彻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神当然是要做老婆的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛呢?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这和我有一个老婆，一个女朋友，2个情人不冲突(*σ´∀')σ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？[fn=20]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抓虫，不会再有第四个“人”，但第四个还是要有的[fn=43][fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神怎么办？</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边真好人，他要渣起来无人可挡的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说了，以前我也以为渡边同学是个好人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浅显了，一木同学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你居然把魅力超过10的当人看？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：姥爷我也可以不当人[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看成，我一直以为你是个人了[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我从未见过有如此厚颜无耻之人！</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;自我认知很准确哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经1000%了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仙吧仙透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;he tui</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明白白渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光明正大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自我认知很准确哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我光明正大！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是渣男我骄傲了吗[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;森帕森拖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经1000%了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁记得刚拿到系统那一会儿</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你说的好有道理，我竟无言以对⊙︿⊙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边村夫，你敢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不当场气死</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：汝妻吾养之[fn=58]</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你情我愿的事又不是吴而是王，怕啥
悲剧的是大部分人没这条件[fn=50]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;法律作为断罪的基础，道德作为处罚的依据。我虽然道德上不太好，但我不犯法啊（战术后仰）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然而警察也不能把他怎么样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你以为我们警察会相信你的鬼话吗</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵以为的三女朋友：美姬、凛、麻衣
实际的三个女朋友：美姬、麻衣、青奈</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;（旁边）：中年男难过地流下了嫉妒的泪水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她同意了. jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应该有老板</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震撼一木一整年[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我不装了，我摊牌了，她俩都知道我和学姐在一起，能奈我何？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木：那能不能加我一个？我对你没意思，只是想和麻衣学姐在一起[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作为东京帅哥，就算渣，也要渣的明明白白，让被渣的人心甘情愿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震惊一木葵一整年</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为梨花妹妹着想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是害怕你被孤立，就算你说出去也没人会信，就算人们信了也没人赶去责怪渡边，最后受伤的还是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草，那是害怕麻衣受伤好吧，云上人又怎么会在意小孩子的霸陵把戏吶（</p>
`;
        case 175:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是啥啊，被牛头了还要替牛头人隐瞒
心脏隐隐作痛，太可怜了
哦，是一木啊，请加大力度，我等好久了[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是阳谋吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“你也不想麻衣学姐不再来找你吧?”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木同学，你也不想麻衣学姐来不了学校吧[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请加大力度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么看的话，国井好像更苦逼了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ntr的最高境界就是都不曾拥有过[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太惨了 已经开始代入苦主了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么非要迫害一木葵，让我想起了四条真妃，妃常惨。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木太难了[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是阳谋吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但学姐其实并不在意这些东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是啥啊，被牛头了还要替牛头人隐瞒
心脏隐隐作痛，太可怜了
哦，是一木啊，请加大力度，我等好久了[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑鄙的东京人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前都楼呐？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老厉害了，直接从五楼开始！

biu biu biu </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老渣男了</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;假ntr而已，又没有相互喜欢过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这操作好狗啊～抢人老婆还要求打掩护，头上一片青青草原。这不不拿刀捅过去？</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;do so</p>
`;
        case 178:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：说出来你可能不信，我请你花的不是自己的钱，用的女朋友的钱，你尽管吃[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典化悲愤为食欲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一本葵:这是渡边彻，这是渡边彻，我咬死他！</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真香</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有画面感了</p>
`;
        case 182:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太可爱了</p>
`;
        case 185:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原谅我笑了出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：求求你做个人吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疯狂迫害一木[fn=58][fn=58][fn=58]，不过请加大力度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虾仁猪心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害一木，加大力度，好耶！</p>
`;
        case 186:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑死[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：啊啊啊啊啊啊！</p>
`;
        case 187:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老板，打包一份虾仁猪心。</p>
`;
        case 188:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;禁止再带真是。。。去了日本才听说，曾经为了外带鳗鱼饭差点吵起来，最后签了份免责协议。</p>
`;
        case 189:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵你怎么成沸羊羊了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扎不多得勒😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当个人吧渡边彻[fn=30]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差不多得辣[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请加大力度迫害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虾仁还要猪心！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害一木只有零次和无数次[fn=4]</p>
`;
        case 190:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看完今日份的迫害一木葵剧情，发现旁边多了个人，吓了一跳，原来是我裂开了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害一木同学的戏份怎么这么少，在座的各位哪里看的够，在来一章，一人一章。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木也太可爱了   怎么能就迫害这一章呢  请加大力度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木同学你就算有十个胃也吃不到他破产</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的一木啊，只能化悲愤为食欲，请加大力度（小声bb）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后发现这家店是九条家的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边没钱结账于是叫来了麻衣付钱...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的更新呢!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明日新闻头条－一少女想让渣男破产竟把自己撑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，一木同学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;章说达人实力恐怖如斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;含泪吃了三大碗[fn=32][fn=32][fn=32][fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赶紧的，加大力度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请客，斩首，收下当狗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到九成的人都在迫害一木葵，我真的很生气，这个世界是怎么了，剩下的人难道没有键盘吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？迫害的还不够多啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到一辈子都要吃穷你[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好惨的一木葵
不行，我要看无惨！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章通篇写的都是迫害两个字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;化悲愤为食欲，用来抚平内心的创伤——《论吃货的自我修养》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太短小了太短小了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好笑归好笑 这一章是一木明面了解麻衣的事的描写 之后估计会有更多的人清楚渡边的事情 山雨欲来风满楼啊 这个标题忽然狂风 也有了几分韵味 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完今日份的迫害一木葵剧情，发现旁边多了个人，吓了一跳，原来是我裂开了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经有了有马加奈做白盟了 乌鸦现在居然又盯上了四条真妃 真是胆大（加大迫害力度）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬的自我安慰能力超强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个铁憨憨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等鸡叮完了米，狗舔完了面，一木吃完了今天内全日本的寿司，渡边就没钱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害一木同学的戏份怎么这么少，在座的各位哪里看的够，在来一章，一人一章。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;犹如精卫填海[fn=39]</p>
`;
default:
			return '';
	}
}
        