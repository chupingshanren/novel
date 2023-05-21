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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;👣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂风，听我号令</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忽然狂风，忽然下雨。
冰冷的天只有清野才能给我温暖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;福建这边刮大风。。。垃圾袋都飞到我这二十七楼了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忽然狂风，我两件衣服没了[fn=12][fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重庆突然风好大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢你，乌鸦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一吗</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你还会记得，自己吃过几个面包吗？（DIO脸）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点可爱怎么回事</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有人记得星野杯吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每周三节体育课...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有马？什么有马？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神：mmp[fn=7]。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉的也是 要不是看的正版我都以为少一章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊？我是不是少看了一章？不是正在吃饭吗？</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;猫：这是朕的位子。
朕不给你，你不能抢[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暹（xian第一声）罗猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫猫探头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对，又是我，还是11楼没补充全，暹罗(luo第二声)[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暹罗xian一声</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉。。。我朋友送了我一只暹罗 让我养死了。。。因为一直养的英短 不知道暹罗怕冷。。冬天的时候冻病了。。现在想起来还难受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫：这是朕的位子。
朕不给你，你不能抢[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小豆泥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暹罗猫也很可爱，总是想到网球王子里的那只</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然不趁机撸猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫：做→坐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以为是那两位太太</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;平常不怎么练的话应该2～3公里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大概3-4公里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;受伤的来医务室找我[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在现场，神跑不动了，现在正在我怀里休息[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在现场，要命啊，半条命都交代了</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对啊，就奇怪，每次1000米都是冬天跑，不知道吸冷空气很难受吗</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大一体测，36度高温</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;36度我们测2400</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来点藿香正气水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北京大学生体测十一二月份，跑个1000米鼻子跟喉咙都没知觉了</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只有体育老师和我说过:不要走好么，这样的话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去了医务室见到美雪不是更热？</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好可怕你女朋友，不像我，我只会心疼giegie～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛！你坏坏！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哥哥，哥哥。你女朋友知道了不会生气吧。
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;——喂伊诺克，这样的装备没问题吗？
——没关系，没问题。
——喂伊诺克，这样的装备没问题吗？
——拜托请给我最好的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的后宫：衣衣、奈奈、凛凛和姬姬[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻彻~，彻彻~，美姬要是知道你单独出来和我约会~，不会生气吧~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是只有一个吗（＋两个情人）[fn=33]</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有机会[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变得更加</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;  。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一脸无语（＃－.－）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不不不，应该是：“哦尼酱，能加我一个吗？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喔哦⊙ω⊙，这么厉害的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tui</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼神翻译：渣男！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;垃圾</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就像我看请假的作者也是这样的眼神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸦桑，我的鸦桑，你怎么在刨垃圾堆啊[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书御用鸦套，就像真田丸里的那只全球鹰hhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦居然自比渡边彻！？我不能接受
居然用垃圾袋比喻清野神，我更不能接受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦刨垃圾堆没什么问题吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸦桑，我的鸦桑，你怎么在刨垃圾堆啊[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，我忍你很久了，老是抢镜头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就像我看请假的作者也是这样的眼神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常客串</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;垃圾堆里的乌(ge)鸦(zi)[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是刨吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦可还行</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;👀？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;班长：我到底叫啥？🤔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们至今仍未知道班长的名字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼睛班长的眼镜呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和国井修是谁啊，新角色吗（</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“又好吃”？应该不要那个“好”吧？</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;眼镜班长，不是眼睛，捉虫。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦这是玩麻了吗[fn=50]前面还有个  关系→没关系</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;名场面复刻
《她 同 意 了》[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真话，但不完全。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边开始秀了</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“腐朽堕落的上层阶级！（🍋）”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震撼路人一整年[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上回的喝酒大叔也是这样，啊，好怀念那次被迫害的一木啊</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对 牛 弹 琴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然而和我一只无害的小猫咪有什么关系呢[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条是布偶喵，不知道清野会是什么喵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示九条？</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神TM2KM15分钟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我两公里八分钟就能跑完，但是仍然没有勇气挑战半马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额 两千米也算马拉松训练？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长距离逃，没有天赋死路一条</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起：大家一起跑，谁先冲谁是🐶</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟婚姻届只能写一个女的名字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说，你们觉得有没有这种可能，等结婚后美姬理智回归，着手清算了[fn=58]</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真女主回来了</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;狗系统吃我一刀！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统：阔以！安排~[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到了你是这样的？？你几把谁啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统不得出个接吻的任务为难渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得可👀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们竟然都接受了</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;拥抱≌干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉 系统姬出现导致清野单推线破产</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我记得澪也说过相似的一句，什么不追求那些</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不追求这些（✘）
实在是不敢（✔）</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“凛子你啊，还年轻。渡边的把，你还握不住，得阿姨来。”九条阿姨如是说。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野一定不要妥协娃，一定要让渡边付出惨痛的代价才能换来你的不顾一切</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还一打三。。。现在一打一都估计打不过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一 清野你不是说要彻站在原地 等你过去吗 我发现你还在原地踏步唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以我不喜欢清野哈哈哈哈哈哈哈，九条党在此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要把她们全击败</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我等了三年(……半年)，就是要等一个机会，我要争一口气，不是证明我了不起，我是要告诉大家，我曾经失去的我一定要拿回来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她说 要把她们都打败
我说 我会一直都在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那一天的渡边彻被九条美姬所拥有，当时我发现自己是那么在意他，那一刻我就在想，如果给我一个机会，我一定要赢下所有。如今机会就摆在我面前，我必须考虑这会不会是我此生仅有的机会，我相信我能赢得一切，重振清野神的荣光，我辈义不容辞。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说，我会守住唯一神的一切</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“凛子你啊，还年轻。渡边的把，你还握不住，得阿姨来。”九条阿姨如是说。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;愿意，但我要做正宫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该不会切吧。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁能拒绝清野神呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我总感觉后面会有玻璃渣 才会改变</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野一定不要妥协娃，一定要让渡边付出惨痛的代价才能换来你的不顾一切</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1VS3，真是神的自信。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神一定要做到啊！</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;把 介 字给看丢了。。</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里需要一个课代表</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;卑微的乙方只能在梦里出气了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冠军皮肤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美术社长：吾好梦中杀人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;斋藤仑也，你想做出来游戏，命中注定还缺一个关键角色，一个叫慧的妹纸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草，做梦都梦到这个魔鬼发的修改方案</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这段话看起来怪怪的，虽然明白作者想体现渡边的心情，但是我怎么都想象不到现在渡边和草莓是什么状态</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一句心理描写都没有，但渡边的心理变化已经出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段秒啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;配图，今天的生活真是苦涩</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;甘甜的草莓指与神的恋爱，断了指渡边与神被一些东西阻挠，最后神拿下叶子，说明想要解决只能神自己退一步</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有没有课代表做下阅读理解，解释一下这段什么意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好甜</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;万恶的甲方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记得沙雕群友发过一个画师摸鱼去约那啥，然后约到金主。后面被一边那啥一边催画画。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是，感觉她做梦醒来一定是笑醒的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美术部部长半夜惊醒，发现床底全是渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岂可修，打工人做错了甚么！
渡边！你背叛了工人阶级，CNM!!![fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个压着，它正经吗？[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美术部部长的怨念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是，我操</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差点想歪[fn=11]</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;气抖冷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不就是万恶的甲方吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然感觉抗压这个词也不能直视了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老资本家了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扎不多德勒😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老压力怪了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;招聘要求:具备良好的抗压能力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抗压吧欢迎您[fn=4]</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;又在暗喻别开快车，又在明喻跑慢点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“快点！快点！别慢了！”九条美姬连忙喊。</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;两个未开化的猿人，呵……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶的御茶之水[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;御茶之水只是渡边成长的一个契机，没有御茶之水渡边不会成为东京帅哥，要知道神和渡边第一次见面都是负面印象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一只来自元谋，一只来自周口</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话语说错了时期，举动留错了时机。
情感生错了地区，缘分用错了玄虚。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有御茶之水，渡边没了初期美姬的压力就不会像现在那样自律，就会在系统的引导下一步步觉醒(暴露？）自己的渣男本性，清野怕是不会喜欢这样的渡边吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有御茶之水就是另一个故事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛不会爱上御茶之水前的渡边彻。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有御茶之水，渡边跟着系统的步伐走，还会是现在的渡边吗？美姬刺激着渡边但也约束着渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;御茶之水，神教永远的痛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱情这件事，又能怪谁呢？不论如何，爱过就是美好的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶的御茶之水[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个未开化的猿人，呵……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两只人猿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现实了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以你这是在第几次回来找答案？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死疙瘩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绕不开的圈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了哈哈哈</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“除非我们 从一开始就不曾 爱过对方~”</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是每晚锻炼的结果吗[fn=33]</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;亚达！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就现在这样也挺好，在彼此身边，一直到永远</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过就是占有欲[fn=41]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打咩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真渣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就现在这样也挺好，在彼此身边，一直到永远</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越充满阻碍的感情越会这样，比如罗密欧与朱丽叶。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亚达！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;即使自己得不到，也不能让别人得到。
这就是男人无聊的占有欲。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越爱越是互相折磨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜度爆炸了[fn=2]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有谁不会爱上清野神！</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你俩这么秀真的好吗 ？考虑过隔壁阿姨和服务员的感受吗 ？[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正宫的余裕，你们随便感受下
九条美姬：我赢了，败犬！
九条党：好耶，我们是冠军</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这句印象太深了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;微微一笑很倾城，里面有这段对白。微微第一次和肖奈面基。</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;路人：好好好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波啊，这波是互相折磨到白头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坏女人，谁能拒绝一个爱你的坏女人呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“这叫天生一对。”
“说法倒是因人而异。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野的占有欲一点也不输美姬和渡边啊</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野实属不行，还想一打三还是早点退场吧😃 
🙂
😐
🙁
😰
😭清野你别走啊，你走了我怎么活啊😭😭😭😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越是这么写，我越是不知道神这里怎么才能圆回来，这也是我看下去的动力。只希望神不要像美姬一样变得那么妥协，宁可最后放弃独占也要拥有彼此。我宁愿看到最后是精神情侣也不要看到神为了爱情过度妥协，她是那么闪耀以至于我宁愿让小说停留在游轮上的那一晚。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别在这理发店😅





因为我要在这发癫了，我的清野，我的神😭😭😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面那两个大妈应该在找摄像机了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉清野真不可能赢。如果渡边为了清野放弃三个人，那渡边还是那个温柔有原则有责任心的东京帅哥吗？三个人为他付出那么多，真放弃了简直与人渣无异。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发病了是吧，清野带我走吧呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小凜再不決戰就再無可用之兵了，時間不站在小凜這邊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？？[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大概早二三十章开始，就看到一股很微妙的危险节奏。现在只希望别把清野写崩，剧情收尾啥的我已经不在意了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果在元旦之前，他们两个没在一起，那算不算撒谎？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结合卷名，感觉可能是外部环境出了大事，然后神改变态度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一开始神跟美姬说别逼她也同意男主养情人。说明她已经开始有这样的想法。当时就想如果神再进一步，说同时也同意美姬当情人的话，我想这会是个绝杀。但神没有。反而是美姬先提出了这个。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然神都说了要一打三
那么我也不多说了
向世界展示一下清野党的力量
清野党顶上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以对清野神来说胜利到底是啥？结婚？还是一VS三抢到彻渣？感觉后面几章是给他们做心理铺垫的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=53]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的结局不好写啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野实属不行，还想一打三还是早点退场吧😃 
🙂
😐
🙁
😰
😭清野你别走啊，你走了我怎么活啊😭😭😭😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里两人之前的对话甜度异常，都表现了自己其实都有超高的占有欲，从某种意义上说，都是具有负面的情绪，是坏人呢。所以清野赞同了，不过，挺甜的不是吗? (笑)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告，最特别是她，在所有的一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个女人我是真的好喜欢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越是这么写，我越是不知道神这里怎么才能圆回来，这也是我看下去的动力。只希望神不要像美姬一样变得那么妥协，宁可最后放弃独占也要拥有彼此。我宁愿看到最后是精神情侣也不要看到神为了爱情过度妥协，她是那么闪耀以至于我宁愿让小说停留在游轮上的那一晚。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条，清野，明日，小泉……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我老婆，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祈祷，最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;告诉我你们睡前要干嘛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天生一对
当然，说法因人而异。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦请加大力度</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野神…</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神之怒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李在淦神魔。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夭寿啦，这个人要弑神啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯一神光线！！！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在干甚么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孽畜，你在想什麽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想杀人的眼神是藏不住的</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;卷，都可以卷</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻伏在清野凛身上，我伏在渡边彻身上（呵，现实中会有谁会不喜欢渡边彻这样的人呢）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯一神，沉默!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桌子，凛（宁），[fn=11]圆桌骑士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日后清野怎么办噢，体力这么弱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鄙人不才，名桌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏在桌上……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再起不能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神，倒了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯一神，沉默!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说了，我姓桌，名：爱凛，字：爱清野神，人们都非常敬仰我，都称呼我为——桌子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在现场，我是桌子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我自首，是我干的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻伏在清野凛身上，我伏在渡边彻身上（呵，现实中会有谁会不喜欢渡边彻这样的人呢）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我伏在清野凛身上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和我体育课长跑完症状是一样的，我和凛贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛伏在我身上[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡哇伊gudo</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;卡哇伊搜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦卡哇伊阔托</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一直想看你这副表情.GIF
再放送[fn=31]</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;马场富美凛.GIF[fn=28]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，我看这鬼地方都有人评论，还以为是啥，，，一打开。。。全是你妈的同道中人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个恰到好处指什么[fn=4][fn=58]</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;确实，我以前特别喜欢欺负喜欢的人，我都不知道我手怎么那么贱[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也喜欢欺负，现在我也不觉得需要改，因为欺负本身是种情趣，这个可以互相都欺负吗，而且只要掌控好度，不让人尴尬，不受伤，欺负完，两个人能相视一笑，其实蛮有意思的，其实还有要两个人互相懂对方，这是我理想恋爱的方式，不可能就是了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我现在也喜欢逗女朋友啊，逗猫猫一样，老好玩了（虽然事后有可能比较难哄[fn=43]）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也喜欢欺负，现在我也不觉得需要改，因为欺负本身是种情趣，这个可以互相都欺负吗，而且只要掌控好度，不让人尴尬，不受伤，欺负完，两个人能相视一笑，其实蛮有意思的，其实还有要两个人互相懂对方，这是我理想恋爱的方式，不可能就是了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以我理解，小时候捉弄喜欢的人只是感觉这样会和她亲近一些，没有考虑那么多后果，这是感觉这样的互动让自己感到很开心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我小学时候的确如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;试问？哪个男人可以拒绝的了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;执迷不悟会不会更好一点😄？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记性真不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人至死都是少年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，我以前特别喜欢欺负喜欢的人，我都不知道我手怎么那么贱[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神！</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这时候旁听的一木同学却不再笑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;优秀的败犬往往拥有较强的自我安慰能力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃饭被呛到了，狠呐美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我神啥时候才能蘸起来……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此时此刻，美姬立于唯一神之上[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大西沙织：我想出演清野凛的CV</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这时候旁听的一木同学却不再笑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神[fn=12]我的神[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虾仁猪心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀人，还要诛心！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;优秀的败犬往往拥有较强的自我安慰能力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀人诛心啊，杀人诛心啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你也不差这句话我印象特别深。。。。是村上悠说的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：九条美姬……不在我之下[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乱说，本书官方唯一指定败犬只有一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是败犬！真姬yyds！！！</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;肯定加💊了</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：没错，我就是喜欢恰柠檬</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;欺负喜欢的人，清野哟，你说的到底是渡边还是自己呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好感度即使是负值，也是一种好感度(——By桂木桂马)。这只能说九条美姬在清野凛心中也是特别的存在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻译：扔掉九条，我允许你把其他人都塞进后宫</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以九条到底有没有饮料，没有的话我这有一瓶。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;悠</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我现在看到这玩意就觉得不对劲</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;遇到痴汉咋办？？</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就这样？[fn=43][fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肯定蓝色馁裤</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，一身</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉，简洁</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有我想到这个吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我特么[fn=6]何时能学到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果情话说的好听，那么就说给她听！</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一丘之狸，我才不是狸猫，怎会如此</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那你俩狼狈为奸吧[fn=4]</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;11楼没补充全，怕你们不会读，沆瀣一(yi第二声)气(qi第四声)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沆（hang四声）瀣（xie四声）一气 刚查的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伉俪情深</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一路色货</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日语有这些词吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狼狈为奸  猫鼠同眠[fn=4]</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《汉语大词典》
宋 錢易《南部新書》戊集載，唐代崔瀣參加科舉考試，被考官崔沆錄取。當時有人嘲笑說：「座主門生，沆瀣一氣。」後用以喻氣味相投的人聯結在一起。多用於貶義。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈沆陈瀣这个起源不是贬义吗</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;它什么意思我不懂，我只是觉得意思意思就行了，你可真有意思。[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就是中国人，你有我懂？[fn=32]</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个我知道[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样的法力还在那里硬撑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还在嘴硬</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学到了，学到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得写得这么那个[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古人都知道写小黄书要单独开个马甲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦真是什么都懂啊[fn=27][fn=27][fn=27]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兰陵笑笑生，永远的lsp之神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦怎么什么都看过lsp了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛啊牛啊</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;它不是好不好看的问题
它是那种非常写实的
展现明朝中后期封建社会市井生态的深刻纪实文学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书店没有金瓶梅，我把书店烧了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等等，难道没有人注意到吗？神居然会去读这本书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者写的时候应该只想着赚钱糊口，生活本身就够讽刺的了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正比博燃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像闲聊似的圈起来，这道是送命题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢里面的插图[fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛神微笑的看着他</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金瓶梅的写作水平还在水浒传之上，如果不是lsp题材，四大名著就没水浒什么事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把挂葡萄架的全拷起来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《清野凛倒挂葡萄架》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻，危！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;它不是好不好看的问题
它是那种非常写实的
展现明朝中后期封建社会市井生态的深刻纪实文学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;倒挂葡萄架</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铜钵柳当然还是好看的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不好看，我也就看了百八十遍而已。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神之洞察</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;葡萄架:-D</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自爆技术一流，跟谁学的[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《笑》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书店没有金瓶梅，我把书店烧了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好看[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只能说,dddd</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;它不是好不好看的问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;板桥确实乡下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;淦，我老家是板桥乡，哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看这求生欲！熟练的让人心疼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老转移话题了</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;点题了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《忽然狂风》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，突然对标题？</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不，超人的眼睛可以接加特林子弹的</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以为什么是六千一百度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这又是为了渡边去了解的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在cos百科全书吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你为什么这么懂？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又水了一大串字[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了渡边，漫画知识进行补习</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;速度比光还快上百倍？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野还懂这些</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神喜欢海豚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神还真是喜欢蓝色呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要用眼睛吹吹哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细太细了[fn=31]</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有个问题，电影角色的台词对话在清野凛看来是散发恶臭的假话吗？比如，男女主说我爱你，实际上并不是，只是表演嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某个前女友原话：哪个妹子能抵挡超人撩呢（配合超人救下坠楼的露易丝的画面）[fn=4]</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凉宫春日的忧郁在内地热度一般
在霓虹的国民度可是非常高的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哆啦A凛看哆啦A梦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉凉宫人设很讨厌，相当讨厌，无比自我的一个人，强迫别人绕着自己转</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有假面骑士555</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哆啦A梦，我的童年，话说他的新电影要出了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梦幻联动，双厨狂喜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;sos</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦的头像不就是嘛～～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多啦a凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凉宫春日的忧郁在内地热度一般
在霓虹的国民度可是非常高的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;推荐你看日在校园</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁会拒绝一直帮助野比大雄的蓝色猫型机器人呢？？？
哆啦A梦永远的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哆啦A梦不好看吗？！（恼）奥特曼不好看吗？！（恼）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你舅宠他爸！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哆啦A凛看哆啦A梦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就宠他吧</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;铁轨:首先，我没惹你们任何一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铁轨：你们夫妻吵架能不能不要连累我？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让铁轨死在上面吧</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬也任性，也不讲理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实当时一开始看的时候，不知道是乌鸦的头像给的心理暗示还是怎么回事，看凛就给我一种团长的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最喜欢团长了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凉宫是神，清野也是神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猿神得意[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，长门有希，配角人气逆袭主角</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长门有希yyds</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就算是得意洋洋的凛也很可爱[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，清野神</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;插个眼，以后知道原来能击败[渡边君]的是[板桥区车站铁轨]</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;睁开你的眼睛看看，现在是谁说了算</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总感觉神在暗示着什么(๑•̌.•̑๑)ˀ̣ˀ</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有这么多吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给你我的全部身家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，58.8亿元人民币</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才高中啊，到大学毕业岂不是变首富了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1000亿円大概59人民币</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统奖励的金钱💰已经这么多了啊</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不如恒大一根毛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野家这么小么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是583.5亿人民币左右吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六百五十亿人民币左右</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大概是人民币600亿，90亿美元，腾讯市值目前大概9k亿美元</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;典中典的买下美国，邻居囤粮我囤枪，邻居就是我粮仓[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟曾经可是能买下美国的传统贵族呢，就是不知道有多少混血[fn=41]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;90亿美元等于一千亿日元吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经开始婚前调教了[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙  已经这么自然的一本正经的当作一家人了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=8]</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？。。。这不反对吗？感觉凛神在试探他</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有十九六，没有兔女郎，怎么拉赞助呢？</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;别忘了之前那个轻小说比赛，清野神靠零花钱作弊了[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对，记得你的心，这样我爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她 
我的神，清野凛。</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;他太懂清野凛了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻译：我最喜欢你了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野抑制住嘴角微微勾起:没有一丝真话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有人比我更懂凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是喜欢啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多啦A凛，伴我同行，谎话800</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯～凛酱最讨厌了呢～[fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可最喜欢你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一分钟前
渡边彻，你之前的觉悟和坚持呢？
你不能这个样子啊！
现在
最讨厌你了[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我最讨厌你了(bushi)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻译：我最喜欢你了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他太懂清野凛了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我太喜欢你了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此乃谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说谎</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有内味儿了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记录</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对十香的利器......</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十香的最爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来十香很好追</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹，40日元的面包我到现在都没见过....</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十香点赞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ki na ko ban da!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对十香的利器......</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;窝窝头！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他们一个人水了九个字，一个水了十二个字。不多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不贵，一个人花了2块5，一个人花了7块</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十香的最爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6块钱仨</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一块钱一个的酸奶油面包满地都是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两块五一个的面包在国内怕不是只能买到黄油派</p>
`;
default:
			return '';
	}
}
        