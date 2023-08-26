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
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强快跑，对方上拖鞋啦[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是小鸡快跑的梗吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蟑螂：？？？</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的很有气氛…可惜给你戳破了哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系着缰没？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好的，你营造的很成功。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咋啦，看不起北宋？辣么大的北宋，虽说也没有西红柿鸡蛋面，但是野狗总是有的吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这题目，哈哈哈哈</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一根儿头盔😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄金来源：金少</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人，上图，无图无真相</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周星驰鹿鼎记里的韦小宝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除了野狗，第一段还有啥情况？夜色降临还是两军安静？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这根儿盔让戴宗戴着就行，敌人又不认识人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈下面有请小强为大家带来古代寓言故事：截竿入城</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;针上不打算串只木头鸡么？还能测风向，看🐔头朝那就知道，考虑一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不叫“避雷针”，而应该叫“引雷针”…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅盔得接地啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一根儿头盔😂😂</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总座高见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打蛇腹则首尾皆至</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看国共内战沙盘推演看多了老觉得一字长蛇阵不好使</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;形容，比喻，夸张的技巧三绝！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花的形容没谁了</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个是吓的，一个是兴奋的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是兴奋还是吓得[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他这是吓得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还陪你抖，真是兄弟</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不0.6米吗？咋又一米多了，这是在头盔上种了棵树吗？就着小强头油、头泥和头屑的营养滋润又长了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逆风翻盘[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尖尖的帆[fn=11][fn=11][fn=11]</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;论信息在战争中的重要性</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;磨没了可还行
</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记得唐初的府兵都是征兵制，玄宗时渐渐变成募兵制</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巨蟒吃小白鼠一般不用盘，可以直接吞，绞杀比较大的猎物才盘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在美军不也这样么，自己买趁手的装备，部队给补贴。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，好长</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这好像是我看过最长一段网文了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么长段竟无评，那我来句，涨姿势了</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花容在书上是单枪吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀秀知道吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花荣好帅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以为是那种枪，就是突突突的那种</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这边居然有17条评论，就知道争论起来了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说起码逃命了，骑驴都可以，某车神架着驴车一骑绝尘，手下人找不见他还以为阵亡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋朝不是骑兵弱，而是没有养马场，缺少战马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中国北方产马，宋朝没有燕云十六州也没法装备骑兵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除了早期蒙古军队，横扫天下的时候也是步兵是主力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋朝的弓箭可不差，神臂弓了解一下？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也是宋朝的悲哀……重步兵横扫天下，结果遇上了机动力一流的轻骑，除了稀少的神机营几乎只能被动挨打……想试试的可以试一下罗马二希腊对西徐亚……那叫一个酸爽[fn=34]</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很形象很生动哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒙古打的时候女真已经走下坡路了，巅峰时候的女真和蒙古真不好说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫花子领救济哈哈哈，重刷又发现一个笑点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是施法前摇嘛</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说到CPU就想到了灭凤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么是cpu黑屏了</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嚯，小花还用挞伐这么高级的词呢</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;徐得龙咚强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竟然有这么多评论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然没评论。</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想当年玩诺曼底战役的游戏我可是费了十好几条命才抢滩登陆成功的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抢滩登陆可还行</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥不事先复制块岱宗的饼干？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强吓极反笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;愽尔特来也是被骑兵追上然后砍死，马跑一千米的纪录是50秒</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也是，黑白无常就是戴这种高帽子的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑白无常牌……</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实当年就有刘翔了，只不过博尔特一直是在挑战人类极限的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在有了苏炳添了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可是你要跑五里地，短跑冠军顶什么用啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让戴宗来试试[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一直为自己是个中国人而骄傲</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以详细讲讲，我差这点订阅费吗！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺觉得不大一样</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=4]那根儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丢盔弃甲 哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那根儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那根儿！</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;形象！人家用词相当准确！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这距离，博尔特也跑不掉。博尔特跑500米也得差不多一分钟，相当于时速30。已经跑起来的马时速最快有五六十，哪怕普通骑兵打个折扣也不是博尔特能比的</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兔子永远追不上乌龟那个是啥故事来着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得有一次跟堂姐玩跳远，我从小搞体育的一步就跨过去了，堂姐很顺利的掉进了茅坑，还好我喊得大声她妈妈听到来救起了她[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还记得那年炸翔炸出了沼气爆炸，直接助力了我们村的旱厕改造</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天真无邪的孩子们最喜欢围着厕所做文章：我们小时候喜欢把沾着屎的手纸向上抛粘到厕所顶子上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花小时候太坏了
我们小时候充其量就是午休时间在楼道里扔摔炮[fn=31]</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古人到底是怎么喊加油的？看古装片里有喊打气的有喊加水的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老刘加油。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;社滴对，社滴对</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想到发条橙被比利围住的女孩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;裸    女</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;知道中招了 心里明白现在回头可能也跑不了 为今之计 只有抓住对方领头的 然后挟持人质才有一线生机啊</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时候不是蹦沙发么，我家沙发弹簧就是这样被我蹦坏的，所以我结婚选家具的时候是去家具厂全实木定了一套，搞卫生的时候是真麻烦，重。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;害，谁小时候没蹦塌过自己家的床啊|･ω･｀)</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是裸     女</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刺激！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章太有意思了，几十秒的事还带好几个闪回的</p>
`;
default:
			return '';
	}
}
        