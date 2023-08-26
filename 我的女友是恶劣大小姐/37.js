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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二刷，又要结束了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡，预言家刀了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边 我的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;缓缓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;26</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好晚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么快你们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完这章就睡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好快好快～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一分钟前就已经这么热闹了？
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴滴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真就住这了呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们好快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;c，一个个这么快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘟嘟嘟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;究竟是来自故土的刺客，还是妄图侵扰轻策之水的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是谁，在敲打我窗，是谁，在撩动琴弦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要完结了嘛，现充十元钱订阅一下1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是我闯进你的花园</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁是我的新郎？别再让我东张西望，别再让我天天幻想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;…是谁送你来到我身边？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是渡边彻，是渡边彻闯入了你的花园（心）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看这个故事，不知道为什么，我脑子一直在唱周深的达拉崩吧</p>
`;
        case -10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我能拿你怎么办呢？谁让我那么喜欢你[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸦桑斯巴拉西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这质量的文章两天一更都无所谓（虽然我是完本才入坑的（bushi））</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖
起飞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，高质量，乌鸦，行，乌鸦，休息，猝死，不可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太惊喜了，早上起来看到这么棒的一章！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早上一起来能看到这么高质量的小说简直是惊喜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这有什么，看的好开心呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有什么办法呢？谁让我那么喜欢你呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;质量好，晚点就晚点吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也能圆啊，彻哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完本吧，让渡边滚蛋，让美少女贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天这章写得真好！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我能拿你怎么办呢？谁让我那么喜欢你[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抱歉，我好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抱歉啥，我可太满足了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们能拿你怎么办呢？
我们那么喜欢你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;质量好就行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，中国人的骄傲！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱了爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;更了就行</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;人可以……至少该试试[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不装了我摊牌了，完本之前我想看到渡边把R桑和K桑摆在一起。</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;暗喻凛与美姬的命运紧紧相连[fn=31]</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野不能说谎，所以清野是真的仙女[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼前这只应存在于梦中的仙女是谁呢？
凛：
so!瓦哒嘻desu![fn=31]</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬又调皮了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗喻和凛一起的回忆对于美姬来说是独一无二的</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;幸福的终点，理想的彼端，一切的答案</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;暗喻凛也不知道如何实现自己那超越凡俗的愿望</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛神永不说谎</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前人的经验终究有限，接下来的路要自己走了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连坚持完美的凛都无法到达，难道自己的追寻是个错误，自己的付出都是没有意义的虚无吗</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;暗喻，凛不知道哪里才没有谎言，但至少她在的地方她会拒绝谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要停下来啊，只要能到达那个地方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔无处不在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔到不了，但是少女可以把你拽出去，嘿嘿</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：“……有这一段吗？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;若干年后，人们回想起。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两位嘉宾牵手成功[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从此美姬和清野走上了幸福的阶梯，留渡边一个人黯然神伤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史性的一刻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:牙白牙白，事情脱离了我的控制</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;橘势大好</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;约定是什么？</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛与美姬童年的约定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11][fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曾经的誓约</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别出去吧，少女，外面全是恶魔👿</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;别离开我</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大橘已定，凛姬贴贴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈，不知道为什么，看到这四个字，我发出了狂笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美凛贴贴～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早点回来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指的是友谊早点回来（）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多出来的一句话吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里居然发那张姨母笑的图，但不要紧，我知道认真看到这里的人，八成都是带着姨母笑的[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要抛下我一个人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大菊倚腚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大橘已定，凛姬贴贴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈，不知道为什么，看到这四个字，我发出了狂笑</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;去tm的渣彻，凛姬党天下第一！</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是清野的内心，从未被人理解的孤寂的心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灿烂又孤寂的神明</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里后面一个都应该是女巫吧</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵是那棵树吧</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一旦人与人开始交流，谎言就如影随形。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔来了</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;泥给路打哟！</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我还能和凛姐重修旧好吗</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;三个人对应少女，女巫能体谅恶魔对应少女这里体谅女巫，巫女爱神却不在意神的看法，少女想回到仙女身边不在意她的看法，但骑士的原谅咋办，剧本是不原谅</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该是女巫吧</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这这这！！！不就是小时候的美姬和凛吗！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小美姬和小清野～</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小时候的约定，美姬也是这么想，她何尝不是失去了唯一的朋友，她的朋友为什么不能理解她，这对她来说是背叛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔=谎言吧</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;从此仙女和美姬快乐的生活在了一起，而恶魔只能孤独一生。（全书完）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“不！我没有错！不可能永不撒谎！但我还是喜欢她！我还是想和她在一起！就算被恶魔（世俗）缠身，我也玩和她贴贴！”这里恶魔的意思也体现出来了，即“世俗”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻:终于达到效果了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“就算让渡边进入仙女，就算被她讨厌，我也要和她永远在一起！”[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牙白牙白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑和美姬贴贴</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;姬骑士吗？</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个转折绝了，对应以前是好朋友的凛和美姬，因为谎言，他们又分开了，乌鸦，真有你的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达咩呦～达咩达咩[fn=31]</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这一段有删减吧？我记得还有一段呢，这也违规？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;普通人不可以看破谎言，可以选择和谎言共生，但凛神不一样，她可以看破谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有没有大佬解释一下寓意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛有着超越常人的坚持</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神终于向渡边彻低头了！！开心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双关？</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嗯?转折点吗!</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不，世界尽头是小说完结</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始搞事！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，世界尽头是世界终结？</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛也希望渡边会想出让她们和好的方法，能过她自己这一关</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬意识到了也许，都心照不宣了，等渡边主动进攻?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自心灵相通的瞬间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终究是暴露了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灵魂升华，</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;开始即兴发挥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不笔直一个给我看看啊混蛋！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;信仰仙女的王国能原谅与恶魔交易的骑士，虽然是由一木葵演，但对应的应该是凛能原谅（接受）渡边撒谎；那为什么不能原谅四岁时的好友美姬呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指美姬</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边不要求清野放弃自己，他只要求清野，看看那个在四岁就被她拒绝的妹妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做约定的基础条件是至少人类能做到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段写的太棒了，完美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始了开始了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没遵守约定就是没有，不管是主动还是意外。顶多是程度的问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为女巫的无心之举（指世俗之事上的无可奈何）导致少女（美姬）说话（说谎），但是少女担心见不到她，我相信这也是美姬最开始的想法。这是一场还原当时情景的剧。同样朋友少的美姬遇上了清野凛，但是因为九条家主的早亡导致美姬接管不得不说谎，但是即使如此，她还是会说谎，因为恶魔（世俗）无处不在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始双关了
美姬因为不可能不说谎，凛和美姬绝交</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这会不会就是小时候，美姬和凛闹掰的原因？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就很nice</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛一直秉持着绝不退让的心，保持着自己</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;相信渡边，他是我们的骄傲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别吵别吵！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这楼的人已经和若子一块进去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，又是他！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抽奖抽奖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成啦，兄弟！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的恶魔我是认的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只想看到神的水晶现在就爆炸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你永远可以相信渡边ccc</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里关键，你别搞事啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别吵别吵！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;相信渡边，他是我们的骄傲</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻的不可一世</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高傲的渡边！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生徒会の一存</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这语气漫长宏大到像全长一千三百公里的国道，一头在新疆，一头在我家门口，上面铺满了小石子，渣到家了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老渣男了啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然有点坏气氛，但是u1s1一开口就是老渣男了</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是渡边要让清野不再坚持无法忍受说谎的人吧（应该不会反对清野自己坚持不说谎）</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;观众:我看不懂，但我大为震撼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边所扮演的角色恶魔（世俗）向清野发出冲锋，因为不要忘记，渡边从现实角度代表了“爱情”，也是世俗拉下清野的一种方式即恶魔的低语</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑真的生气了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有技巧全是感情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;观众？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛以为渡边不再支持她了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看不懂，但我大受震撼.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶，带上单片眼镜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渎神者，渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边所扮演的角色恶魔（世俗）向清野发出冲锋，因为不要忘记，渡边从现实角度代表了“爱情”，也是世俗拉下清野的一种方式即恶魔的低语</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;WC，我都感受到了一股愤怒的味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神：跪下！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等等，现在美姬退场没</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;观众:我看不懂，但我大为震撼</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;厉害。这段如果是这一章的结尾感觉就太帅了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好帅的文笔</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好像在看传统文学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神罚！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这猴子被抓我们高地怎么守啊？
雷云 雷神之怒 刷新
我宙斯要教你当大人
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;分析此处环境描写的作业（10分）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这时窗外飞过一只乌鸦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;台风天哪来的闪电</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神怒之日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神怒了</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以平时渡边口嗨的时候都是半真半假，清野也懒得理他，倒不如说可以通过谎言来鉴定真话，反之则一样，当渡边说出血淋淋的真话时……（后面看个人理解）</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;也是真的</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真的生气了</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边太过偏爱凛以至于认为她的一切都是对的且美丽的。但这样无法真正的把凛拉出来。说服凛之前他所做的都是在说服自己。</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是在意识流吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;虽然美姬很委屈，但九条不是好人。这可不是撒谎不撒谎的问题。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说太对了，有原则没错，但是也很自私</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我爱学习 学习不爱我，爱是相互的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十分赞同，不论是友情还是爱情，都是相互的，只有一方单独的付出是不合理的也是不可能的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说出来就好了</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这一段如果用和大老师那一段想要真物的表演类似的画面表达，震撼感应该会更强。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是九条彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;语言的苍白，在现实中，有时连一个迷失的灵魂都无法拯救，在小说里却可以让神跌入凡尘，这可能也是文学的虚幻吧。</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如果到这里结束清野凛又只有一个人了</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我也最喜欢清野凛</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;别想了，你的心里话，她都听得见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天下桃花为你开，我扶长剑为你来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说人生如梦，我说人生如故，那有什么不同？不都一样朦胧</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;WTM</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;命中注定要爱你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;糖尿病犯了，谢谢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特に彼女は、すべての上に彼女は、僕の神様ーー清野凛！</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻宝！帅！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看在你这一段比我帅的份上，允许你开后宫了🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是你，所有一切之上是你，我的神，渡边澈！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一辈子恐怕只有一次的硬气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的神渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜站起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸王硬上弓才是正解啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻，站起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂小彻！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彳亍，你比我帅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻宝勇敢飞 出事自己背</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻宝放心飞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;いい加減にしろ！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅呀，渡边少年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;燃起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;魔鬼渡边彻，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“不可一世”世界线开始转动了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😱😱😱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;硬起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我先run了🏃🏃🏃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻宝，外公爱你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有生之年，硬气，以后看不到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻宝放心飞，妈妈先撤退</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边放心飞，出事一木背</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻宝放心飞!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻宝向前冲！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于等来了这一句</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看在你这一段比我帅的份上，允许你开后宫了🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;酷炫拽霸狂·渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻宝，妈妈爱你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远滴神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻宝！帅！</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晴天娃娃牛逼plus</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呼风唤雨!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晴天娃娃登场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渎神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鬼鬼这文笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龟龟 这就是乌鸦的功力吗 太有画面感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;庆贺吧！这才是真正的傲慢的神！让我们看看你内心的傲慢与无礼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神陨之日</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;第一次这么凶哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;观众：这把高端局</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你吼辣么大声干什么呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你吼我，你竟然敢吼我！！！[fn=44]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻彻你不爱我了呜呜呜</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;外面的世界很无奈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有土之地虎铠甲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各种各样的人，指一木……</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我又想起那天神和渡边说不要愧疚，不要自责，等我过去。那一刻我以为神要做出改变，要帮助被完全束缚的渡边而做出的爱的宣言。可接下来那么长的时间，她一边做出攻势一边又固步自封。到现在还是要渡边来勇一把来把神拉出仙境。</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬早就同意了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妇目前范，牛头人了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一想到这是恶魔对仙女说的🤔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你当着美姬的面把真话说出来……你要死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直球，好耶！
直中靶心 射门（！）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就当是为了我，可不可以稍作退让</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妇前犯[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个就是爱情吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真话</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;冷酷的神，被爱所动摇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终究是要进入大家庭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是真话</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是要你放弃坚持，只想让你给美姬一个机会，也是给自己一个机会</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如果能说谎，这波将绝杀 可惜 说不得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有渡边彻能让清野凛说出自己不愿说的实话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说，「虚伪」不为过，「双标」有道理，清野凛也不够「诚」。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;封神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果能说谎，这波将绝杀 可惜 说不得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有渡边彻能让清野凛说出自己不愿说的实话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问心有愧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要看舔鞋[fn=64][fn=64][fn=64]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神为人妥协了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;转折点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前的神选择沉默
现在的凛选择回答</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;转折 就此展开～～～～</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没看出来有承认了什么错误，只看到有过后悔的想法而已，没错跟后悔并不冲突。这波承认错误是渡边的话术了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来的世界是没有尽头的，仙女承认了错误，现在世界有尽头了。(这个世界的故事也要结束了)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;nb，这就是阅历吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔掏出单片眼镜。“少女归你，仙境归我”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仅仅这一句话，把剧本的名字里的伏笔给解决了；把这本会让观众一头雾水的对话拉回来了。真的超佩服乌鸦这一段的剧情，即使猜到了会这么做但这个处理我还是想给满分的，当然也包括了话剧里的映射！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我想到亚当在那里自己独白</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;剧本不会是渡边安排好的吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文字的序顺并不会影响阅读🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会是</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;瞎说什么大实话[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，刀了他</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，就是你偷看了剧本？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你知道的太多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻从来没有成为过任何人的英雄，他从头至尾都是彻彻底底的用不主动和胡搅蛮缠来达成后宫的恶魔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说得对这剧本就是为了夺取清野而设计[fn=4]</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;表白吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请快进到晚上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;分手吧，我不爱你了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在期待强吻</p>
`;
        case 181:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你比我帅的样子真的很靓仔，但之后气管炎的时候却又那么狼狈😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂cd，渡边彻的狂cd了！</p>
`;
        case 182:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里居然没评论？</p>
`;
        case 183:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正宫的许可[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛</p>
`;
        case 186:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有技巧全是感情了属于是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是真吵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;zqsg了属于是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关于吵架的谣言，我澄清一下——
这并不是谣言[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实在吵架[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;预言家，刀了</p>
`;
        case 188:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你是杂物，她是导演。</p>
`;
        case 191:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻：我只会心疼凛giegie</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛姐姐，彻知道错了，呐，呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噫 恶心心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶心心 呕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶心心啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;七羽姐和仁叔的既视感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听了之后全麻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捏麻麻的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……要恶心吐了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从脚指甲到大腿骨，从膀胱到肺泡，从智齿到天灵盖都在回荡着我的冷颤，为什么没有鼻子，因为味太冲了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶心!
恶心呐！
噗A！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶心心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;（（（呐）））</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又渣又绿茶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶心心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;味太冲了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我居然看到渡边在撒娇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十分生艹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差不多得了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻了.JPG</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶心心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;md好渣的一句话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶心心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻了麻了[fn=51]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;md突然麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点恶心了😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只会喜欢jiejie</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是女绿茶发言吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻了麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是因为人家喜欢你捏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛姐姐，彻知道错了，呐，呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只是心疼姐姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：我只会心疼凛giegie</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。麻了</p>
`;
        case 194:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你何尝又不是岔开话题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她急了她急了</p>
`;
        case 199:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这种方式好像路哥，把所有人玩弄于股掌之上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大佬出来</p>
`;
        case 200:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此乃谎言</p>
`;
        case 202:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家庭弟位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是能当首相的男人... </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;私密马赛～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有谁呢拒绝一只无害的小猫咪呢，即使是神也不行[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猛虎落地，喵喵磕头[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说，不会撒谎怎么谈恋爱啊[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建议去找半泽学习一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;士下座给你看！？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家庭弟位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;土下座什么意思</p>
`;
        case 203:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;外面不是在台风？我记错了？</p>
`;
        case 204:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野：我能拿你怎么样呢，我这么喜欢你</p>
`;
        case 208:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟快把我杀了给二位助助兴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们，快把我杀了给他俩助助兴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天哪，杀伤力好大，心脏被击穿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21][fn=21][fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛呀这段</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者太牛逼了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老夫的少女心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来杀个乌鸦助助兴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿巴阿巴阿巴，全柠萌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以，为什么清野就算是虚伪、双标，九条就算是委屈、付出，我也更能理解渡边的感情呢？因为爱本就任性。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段浑身鸡皮疙瘩，这作者是个怪物吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说了，这楼我帮你跳了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人呐！给朕杀了这群帅逼读者，给他俩助助兴，而后，朕自己驾崩，不用劳烦众卿家了！这个节目，众卿可满意？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀狗了，兄弟萌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经把自己杀了助兴了，你们呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;磕到了磕到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唔( ´艸｀)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;糖分超标</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;（（（（（（呐））））））</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还能怎么办呢，我只会心疼giegie</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这糖，致死量</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我能怎么办呢，我只能心疼geigei</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行，笑忍不住，又感觉好温馨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们，把他们全杀了，给大家助助兴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛何德何能！我不同意这门亲事！彻是大家的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神无敌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太高兴了，快把看手机的你们傻了给我助助兴[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，我死了，为清野凛献上心脏！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们，快把我杀了给他俩助助兴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛攻略度100%</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;侧躺床上姨母笑的图呢
速来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🥰🥰🥰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦永远滴神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此，没有不也活着！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宠溺jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然但是，排序错了
应该是“那我能拿你怎么办呢”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！要死了要死了
诸位
我，永远喜欢凛酱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;酸了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟快把我杀了给二位助助兴</p>
`;
        case 210:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真心为你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这招叫做天地同寿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你为了我，我为了你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心字去掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;希望每个人都能遇到那个让自己无可奈何的家伙！</p>
`;
        case 211:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
`;
        case 213:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬的一夫一妻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条不放心，彻和神晚上有大动作，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这算不算渡边彻把美姬跟凛放在了一张床上？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到推*股</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条宝宝！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:你们都是我的翅膀啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这会不会是美姬决裂后睡得最踏实的一觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻睡在一边，美姬和凛贴贴~</p>
`;
        case 216:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神的内心终于被打开了，开始审视自己的内心了</p>
`;
        case 223:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;错的不是九条爸吗，谁让他这么早领便当的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四岁的孩子没有对错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是渡边来的太晚的错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁都没有错，全都是世界的错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全是渡边的错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……凛就没有正常世界观？不要擅自乱加设定，不接受不代表她不懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看下文应该不是错字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是谁对谁错吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;错字？</p>
`;
        case 224:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;手受伤了，伤口会结痂，那是保护伤口。
心里伤了，也会结痂，那也是保护伤口。
但是手上结的痂很容易掉，心里的呢？
因为对于美姬的友情的重视，又是因为“背叛”后觉得伤很深，过度的自我保护了，不愿意再面对。
也只有自己爱的人，可以进入到这里外人难以触碰的地方，让她自我审视。
走到这一步，已经是必然[fn=31]</p>
`;
        case 225:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;( •̥́ ˍ •̀ू )</p>
`;
        case 226:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好激动[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里人这么少</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我靠，这里没楼，这不是历史一刻么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她终于主动伸出手了啊啊啊啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插个眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;见证</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;占个楼，别把我搞没了，求求</p>
`;
        case 227:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;傲娇的提款姬[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桃子给你，来推</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抱上去，亲亲就好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉清野伸出手探向美姬的手就有着清野要向美姬道歉意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来两人都没睡着，不，应该是三个都没睡着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
`;
        case 228:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这时候渡边握上去就超神了</p>
`;
        case 230:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里的时候我的心凉了一下，然后下一页我就把自己杀了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果当时握住的不是硬币，而是勇者的手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人与人的邂逅充满了神奇,各种刑案更是迷题重重,能够遇到你真是有缘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以需要爱和包容，也许回不去，但可以往前走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是多了个不</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然齿轮回不去了，但人的心可以啊！</p>
`;
        case 231:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;于是清野闭上了双眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛:这种世界还是毁灭好勒(果然做错事就要坦然接受无可挽救的结果啊)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点想看黑化的凛[fn=31]</p>
`;
        case 232:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我早就想和好了 就要傲娇一下 就是玩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我试了一下背对着伸手抓动作，差点把手整抽筋了😐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;于是，神离开了她的神国</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得前面人少，都在这了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和解之印</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬回手抓了抓屁股</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸位，把我埋了给二位助助兴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶，我过来了，诶，我有又走开了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我起鸡皮疙瘩了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快把我刀了给她两助助兴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灰白色的世界忽然有了色彩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，我咋没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心化了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=64][fn=64][fn=64][fn=64][fn=64]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实是渡边的手，这也是他的计策，为了让清野以为美姬牵了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个脑补的场景：在对方明显有所表示的那刹那，自己比对方先做表示，因为都有错。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我早就想和好了 就要傲娇一下 就是玩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大橘一定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhhhhhhhhhhhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;独属于九条的傲娇 爱了爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;橘势终于开始稳定了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我试了一下背对着伸手抓动作，差点把手整抽筋了😐</p>
`;
        case 233:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;抱一起！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蛾子翻身</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱的凛[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡姿从未改变过！不知道以后和渡边会不会改变[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开心的打滚？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有翻身想压住渡边彻的冲动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻身压住九条[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦我学到了，但我不想试试就逝世</p>
`;
        case 234:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;万一是渡边……我记得他的手也是纤细的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：那我走？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊齁死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的手[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人是什么？渡边是什么？贴贴万岁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实那是渡边的狗爪子！థ౪థ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是处男的手吧</p>
`;
        case 235:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！渡边渣子滚开，这是美少女之间的贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道该说什么，只能说乌鸦牛逼。人在这个世界上总是要面对这样那样的事，清野凛也是，她是来到世间的仙女，她不能忍受污垢，所以她如此选择。但从这一章开始她便不再是女神，不再是仙女了，她真切地成为了人。她将感受到世间的一切，爱情，友情，谎言，背叛.......欢迎来到世界，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在高举美凛大旗[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜甜甜[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神，欢迎来到人间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到这结束也挺好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感动了  作者牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;oh！oh！oh！美少女贴贴，渣男快滚啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我觉得到这儿结束就很好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边下场，美姬凛酱与小泉麻衣的爱情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二刷才看懂，第一遍懵懵懂懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的她，在所有一切之上的她，我们的神，凛酱美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把我大卸八块为二位美少女助兴。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论的合理性，不在于字数的长短、点赞的多少与时间的先后。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我直接哭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;340章，340章啊！这是两大女主贯穿全文直到最终的感情线，终于交汇了。黑夜中看不清彼此，只感到两手握在一起。这一刻我的心都化了！13年的隔阂总算是瓦解了啊！我太爱这里了啊啊啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;月票拿走吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边滚蛋！少女赛高！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画:《渡边彻在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边ntr进行时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以开后宫的不是渡边彻是九条美姬？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少女，还有恶魔先生，欢迎来到仙境</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好了，渡边你可以领便当了，后面的剧情交给凛和美姬就行。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边可以退场了，我要看美少女贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跨过漫长的时间
两个人与过去、与彼此和解</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是翅膀…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是麻衣可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男主角从此退出</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美少女互相贴贴
渡边和真姬幽子贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果美姬没有接受，那么感到伤心的凛会不会感到伤心，从而将所有爱意都倾注到渡边身上呢，会不会变成病娇呢？真是有趣的世界线啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以下一卷是不是世界尽头（大结局）！?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到“放开手的话，就再也抓不住了”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好嘛，既然和好了，那么接下来两个美少女之间的竞争会更激烈喽，期待下一篇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波啊，这波是恶魔的背刺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快完结了，撒花🎉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结撒花！🌸🌸🌸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;答应我！让接下来的修罗场更猛烈些！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想看下一章凛酱和美姬贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留言记念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明着演话剧给全校师生看，其实是众目睽睽下的调情啊[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻，又称美少女贴贴502</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边一手牵一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;找不到图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱了爱了，神为了凡人下凡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻走开，我们要看美女贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章写的真好耶，虽然是意料之中的妥协但是通过话剧的形式呈现了出来真的很棒。希望后面能再写写日常和未来再完结。相比美姬和清野做出了很多改变，麻衣学姐更让人心疼，说她是为了神明（彻）抛弃了自己除了爱的一切一点错都没有。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边啊，妮可长点儿心吧[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话到嘴边再说不出口……这章看得是真的……emmm……有内味了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬和凛贴贴，彻宝和我贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结撒花？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神在天上是仙女，来到人间便是信仰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得到这里就行了，美姬凛贴贴，渡边彻滚吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R———桑———-[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我能拿你怎么办呢？谁让我那么喜欢你，你又那么喜欢我。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家：大声的说出睡前祷告</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦yyds！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好，渡边已经失去作用了，轮到真正的主角w美少女大小姐组合正式出场了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶 渡边只是和好工具 现在他已经没用了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;月票有了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪怕明天就完结我也不奇怪，但是还是想说：多写一点吧，太好看了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这，突然的确感觉到“世界的尽头”的到来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这，突然的确感觉到“世界的尽头”的到来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于和解了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界的尽头，倒计时开始</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;收回昨天的就这，乌鸦yyds，看得我嘴没下来过。同时美姬和凛终于和好了，渡边前面终于可以同时加上九条•清野了[fn=58]，大圆满的后宫结局还是让人开心啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！渡边渣子滚开，这是美少女之间的贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道该说什么，只能说乌鸦牛逼。人在这个世界上总是要面对这样那样的事，清野凛也是，她是来到世间的仙女，她不能忍受污垢，所以她如此选择。但从这一章开始她便不再是女神，不再是仙女了，她真切地成为了人。她将感受到世间的一切，爱情，友情，谎言，背叛.......欢迎来到世界，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我好了
说不出话了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这收尾还行吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚看到情人节那里，看到新章后面一个（完），我还以为完本了，直接全订了。。。这本书是我最喜欢的国产轻小说了，反正早晚也要全订的，全订的月票也都给作者了，支持作者。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等了好久终于等到今天😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶 美姬大胜利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快，乌鸦想个办法让渡边再穿越一次，我要看九条清野贴贴！！！渡边？什么渡边？就是委屈麻衣学姐和小泉老师了[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边大胜利，开始大后宫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好了，渡边可以滚了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜～泪目了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一
</p>
`;
default:
			return '';
	}
}
        