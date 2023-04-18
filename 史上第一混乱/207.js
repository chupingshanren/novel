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
<p>&nbsp;&nbsp;&nbsp;&nbsp;等着哭吧</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是要笑死了</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;施瓦星格抬棺扫射即视感[fn=50]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，很难想象把床扛起来是啥样</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈此处应该有评论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年初一那场球，我窝火到现在，气死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说了，2022虎年大年初一国男足对战越南惨败。。。还发微博说这是中国人的失败。。。彻底不要脸了。
对了，女足姑娘们好样的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我当年就是看了这段受了启发，在路边玩投沙包砸娃娃的游戏时候故意瞄着摆娃的架子边框扔，砸中了好几个娃娃呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没人吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不懂足球，也不想懂，去死吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十年，中国足球还是一样烂。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可是...足球也不是用手踢的啊...</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们真的有截肢把好腿给截掉的[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有这个手术，把膝盖切除然后把脚反装到大腿上，这样方便装假肢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好腿🦵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反着接，那不是狗腿的样子吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那医生是真的牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有这种操作？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接反了，那大夫也别活了</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈看评论涨姿势</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谦儿哥的父亲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫狗这种动物，你们以为的膝盖，其实相当于我们的脚后跟，它们平时走路就相当于我们踮着脚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个梗我估计是济公的，济公里面专门有一集接腿给接了条狗腿。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我特么笑吐了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;题外话，其实狗的四肢关节方向和人是一样的，只是大腿方向比较平看不大出来，乍一看是狗膝盖的位置实际上是相当于人类的脚后跟，只有前脚掌着地</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑出猪叫声！哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;遗憾用的好，记住下次要考</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夺门而出</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是流氓张小花🌸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正常小说写到，幸好里面没人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花啊，啥时候你都能保持流氓本色，都成本能了吧？</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这闹腾劲[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然很精彩不过考虑现实还是有点担心张清，那些小瓶都算医疗垃圾吧容易带上其他垃圾的病菌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，玩塔防呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一章笑得我肚子疼[fn=4]</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇哇哇好帅啊好帅啊好帅啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老派武侠作品就这风格</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇哇哇，爆裂箭！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也太牛了，奥运会不参加一下太可惜了</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我本来以为是“哇”一声尿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花阿，我告你我在农村见得牛蛋和网球差不多大，这货怕不是纤哥后人</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，梁山好汉全伙劫法场呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;专业团队</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沃日。应急处理反着来你都做到了，干过是吧[fn=16]关键横幅这玩意真不是你想要就有的，需要时间</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么劫法场的时候啥都没安排</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怕</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感好强哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好吧，这种横幅……确实符合现场的氛围</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈乐死我了</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记者用的相机应该很贵吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铁翼飞旋小姐姐[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;战地记者……战地记者</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来，大朗……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么不给虞姬药💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊💊</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杯子打扫一下</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说花荣咋死的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前看怎么没觉得他光脚踩碎玻璃得扎脚呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毒酒喝多了。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感叹</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这俩人一个瘟疫而死一个活到最后，怎么会是战死沙场呢[fn=4]</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅帅哒</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小白脸子，没有好心眼子（俗话这么说的，不针对花荣哈）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想看嘴对嘴人工呼吸</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肯定是成心的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这假发，真是啥小细节都用上了</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你马上要被对A的打死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贫乳妹子风评被害</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;带拉链的枕套，里面是晴纶棉[fn=8]撕的啥明白了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强啥时候有这本事了</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;36C 确实没有到太大的程度（也不小了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;目测大小，绝活啊2333</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精准简略又贴切的比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我居然无话可说[fn=50]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这比喻没谁了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;极度贴切的比喻</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;取其轻，取其轻~[fn=4]</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老108还在家里瘸着腿看电视呢🤣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚喝了一口汤差点给吐出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;108个吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫的是座次吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是演《雍正王朝》吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太有画面感了哈哈哈哈哈</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老费又得擦屁股了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真·快闪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;医患关系毁于育才！（痛心疾首）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感好强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;专业！！！</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑点层出不穷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铁锅炖自己的大馄饨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;些许名声在外之美食，其所谓祖传秘方配料都不足为外人道也</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;煮过人没啥，手脚不干净点的不小心碰了汤或者端碗的时候手指探进去的也有，但是他是坐进去的，说不准有没有屎尿混进去。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好汉们一听食欲大振</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是煮过寡姐，会有人坐飞机赶来喝。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;💩都煮出来了[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;混混从良，有点感动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人肉馄饨</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文化课老师来这高兴死了，就上半天班，工资还比别的地方高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜景生一进教室：一只乌鸦口渴了。下面学生：老师，我们已经三年级啦。</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老李头真有你的！！！！干得妙啊～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没气魄干不出这事 从古至今 纵火都是重罪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诗仙神助攻哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;操蛋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我大概是后知后觉了，能不能给张校长来一颗蓝色小药丸？看看是不是杜甫转世啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老李头永远保持一颗少年的心态，从他的诗里就能看出来[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是跟过造反派的主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已无语</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老李这劲儿</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有主角光环，能得罪吗</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弯弓射大🦅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在有点软没关系，只要没毛病迟早能硬起来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典老书就这么被埋没了，放到现在的新书就是999+</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然没评论！？</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要找倒霉</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;借你吉言！</p>
`;
default:
			return '';
	}
}
        