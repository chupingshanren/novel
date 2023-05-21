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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，全订被管理拒绝入v群，我直接不给你投月票</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就一更，根本不够看呀，想要月票就爆发吧小宇宙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，追更根本拿不到月票</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;月末没月票活动吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;35</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一天一更还想要票？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加更就把4票给你了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看在我这么支持的份上，不加个更吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我昨天刚把月票都投了艹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天这么早？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿这.月票无了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀吼[fn=49][fn=49][fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=49][fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;更新了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶更新了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦豁，惊喜，这么早</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这，今天巧了，热乎的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么早</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们在起点有房吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🌿这也太快了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们夸张了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是谁？
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可恶 美术人代入感极强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在甲方面前客客气气，转过头问候全家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈 太形象了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爆锤渡边狗头[fn=31]</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神保町哀歌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ido咖啡厅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉子，我的玉子[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心中五女人，写稿自然神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心中无女人，拔刀自然神</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;经典乙方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑微的乙方（呜呜呜）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就打了两秒？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好的~妈的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《不勉强》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢，已经在生气了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像极了改论文时的我[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;破防了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;微笑中透露着mmp[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑微的乙方（呜呜呜）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典乙方</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你没有心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我生气你个der啊！只是想捶死你而已</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对渡边彻来说应该演白马王子与七个小公主。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑白雪公主與一個小矮人。</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;假如生活欺骗了你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恨不得咬死对面[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算生气也要微笑面对生活</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;等待戈多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这三人在台上发呆都有人买账</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这几个~~太传神了，还真是欣（yao）喜（ya）若（qie）狂（chi）呢</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;艺术的返璞归真（指扮猿人）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就演《名为人类研究部的修罗场》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回复术士？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你最好是在说话剧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜值高就可以为所欲为？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来给大家表演个崩山裂地斩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猿人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艺术的返璞归真（指扮猿人）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有代入感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要笑一下就是几亿少女的梦了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇，好好看！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就演《名为人类研究部的修罗场》</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;躬酱精神，大锅崛起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;gong匠精神</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咬牙切齿</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真改了啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统发布任务</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;村上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诺贝尔陪跑员</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书莫名其妙的分单双，有什么意义么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不懂，首先想到灌篮和爱丽丝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猪王峡谷和奥林匹斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恰好看过，有点没看明白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书不错啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，我有这本书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我刚好在重温这部作品。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;村上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诺贝尔陪跑员</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;村上</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;短发波波头，yyds!!!!!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心疼被压迫的打工人
还是无偿的[fn=19]</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;村上和Sakura？ 要素察觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;悠悠！我的悠悠！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到长门有希了，
你在看雪，我在看你[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;由崎NASA！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十代！快召唤奥特曼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龙三里路明非在牛郎店的绰号好像就是小樱花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;游城？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日村勇紀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长门大明神已经是时代的眼泪了么[fn=12]
看到YUKI就一下想到了有希</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;寫做黑子讀作變態。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;村上and佐仓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这全都是yumi啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以前日语老师就叫yuki。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孔乙己联动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;与田祐希，一米三七，天下第一！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里应有我大萌神有希</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佑巳不是yumi吗，莉莉安的红蔷薇花蕾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;村上和Sakura？ 要素察觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;读出来全是yuki</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回字有几种写法？. jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;悠悠！我的悠悠！</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈  </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡了吧？香不香？爷还没睡，为什么？在改论文！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这怕不是妮妮的妈妈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧拉欧拉欧拉欧拉！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕不是和美姬干活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;西内！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是妮妮本妮啊[fn=16]</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这部电影不就是伏笔？女主角（美姬）爱着男主，但男主心里一直想着初恋（凛）。虽然不完全一致，多多少少也是个暗喻吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今年奥斯卡得奖的作品讲的是流浪者的故事，然后颁奖典礼时为了市容市貌，洛杉矶政府把当地的流浪者营地给扬了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今年的奥斯卡嘿嘿嘿</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你这是自寻死路啊学。。姐?。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这几个～看着就想笑是怎么回事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始神志不清了[fn=31]</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谎话连篇听不下去了傲娇鬼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竟然只夸她不夸我</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得她会突破极限，得到升华。别名:闭关顿悟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《甲方与乙方》</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真香</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实，看到现在，渡边对待R桑最核心的基本功就是“缠”，俗话说得好，烈女怕缠男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你舅冲他爸[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来！你就宠他吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里怎么没人说你舅宠他爸？</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;做个人吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是越来越少了嘛 (假定没)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;魔鬼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一整页，大半页，小半页，心痛妹子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好酬我勤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好勤我酬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐:要死了要死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可真是勤勉啊</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，让我们一起做出最好的galgame吧😄</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;挪威的森林男主名字也叫渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Clannad</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我反而认为冷酷仙境的少女是凛，毕竟两人比较，更加不通人情的反而是凛。美姬起码对两位长辈还有静流挺好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好吧猜错了😣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;寻找世界尽头  凛
冷酷仙境  美姬</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咬牙切齿.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;破防了破防了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实的甲乙方</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你永远不知道屏幕那边的女人现在是什么表情</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;住口，血压已经在升高了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;修改来修改去，结果还是要了第一版</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甲方：请看着我手上的支票，你应该明白我想要的是什么吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会画出一个类人猿送给甲方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以普遍理性而言，草稿一遍过的都是好甲方了。</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大声告诉我，每天睡前你们要念一遍什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，你别怪我说话直白，月票都是虚拟的，起点的水很深，你把握不住，你缺月票吗，其实开心快乐就行。但是这乌鸦不坏，我从小看他长起来的，大家还是给乌鸦投了手里的月票吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是最讨厌的那种甲方呢 ，钱到位都要考虑那种</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章真有意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;bzzb：你怎么不去死呢，快给我去死吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灌水哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一百个赞全送了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是怎么回事啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岩手县少年，最受女生欢迎的高中生被人诽腹了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像极了方案改了无数版的乙方，要是渣男彻最后来一句还是用第一版就更完美了[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后边是有伏笔还是咋的？这章怎么有种渡边人设崩塌的感觉，一瞬间就想到了那个螺旋丸学生会长。你还不如用你无敌的系统想想办法呢😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天怎么这么短</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不设置一个机关，让渡边在穿着这套衣服排练的时候直接散掉？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关掉AI和PS,下班半个小时的我，看到这张，心情复杂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章真的是啥都没看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看的太快，索然无味</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告，最特别是她，在所有的一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这钵啊，这钵四舍五入等于校园霸凌[fn=31]
渡边以后要是不好好补偿学姐的话那就变成自己讨厌的人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的猎人等级提升了！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的粉丝称号好看吗⊙▽⊙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被甲方逼疯的我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反对渡边暴政！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怀疑～～是凑字数的，但又没有证据</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大海啊，你全是水~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是有点水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害美工</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，你别怪我说话直白，月票都是虚拟的，起点的水很深，你把握不住，你缺月票吗，其实开心快乐就行。但是这乌鸦不坏，我从小看他长起来的，大家还是给乌鸦投了手里的月票吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有画面了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手撕甲方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么感觉这么短</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一章不够味，建议再来一章。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大声告诉我，每天睡前你们要念一遍什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被乙方逼疯的我</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;秘书小彻</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;高，太高了</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;女装?你这么给自己安排的吗</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么话剧？明明是《世界之王渡边彻和他的后宫团》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果算上另外两个，其实是《东京帅哥和他的四翼翅膀以及被迫害的少女》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《战国渡边》1-10</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放过一木吧，做个人吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一下就有结局的感觉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看了看手表 发现我去年没有买了个表</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说学姐毕业也能参加演出吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果算上另外两个，其实是《东京帅哥和他的四翼翅膀以及被迫害的少女》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐不是毕业了吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不得选国一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害一木什么的最棒了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2个败犬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两个人都挺微妙的，话说难道还有一木葵线？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么话剧？明明是《世界之王渡边彻和他的后宫团》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;¿
当我打出这个符号时不是我有问题，而是我认为你有问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那必是我们的迫害对象一木啊</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是奥斯卡大导演嘛，这点排面必须滴</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该喊陛下!</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;帝国时代/争霸/警戒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《帝国崛起》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻好美：“渡边彻！你居然敢说吹奏部是人类观察部的下属部门！”
吹奏部众人心想“难道不是吗？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可以找通辽帝国的可汗小约翰帮忙。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前进！清野神的利刃！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;步骤一:诸君，我喜欢战争
步骤二:好，很有精神
步骤三:阿姆斯特朗加速喷气式阿姆斯特朗炮！
步骤四:世界核平
步骤五:你们都是人类观察部的翅膀
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《帝国的毁灭》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好想吐槽但天分不够...</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前进！前进！不择手段的前进！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先礼后兵</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;手艺人做点针线活怎么了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;针线活小能手美姬酱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古有珍妮缝纫机开启蒸汽时代，现有美姬缝纫机引领服装潮流</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这个手工它正经吗</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;出生直接当裁判</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，已经在罗马了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得大雄没有继承父母双方的天赋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边是处男，怎么会有孩子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来，我说番外乌鸦说好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬天赋应该有s，那他们的孩子平均一下，天赋就cb吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有系统，渡边车的基因平平无奇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经在终点了好吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万一继承了渡边彻的绘画天赋了呢</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;泷谷源治：你们这里的老大是谁</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;宇佐美？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;波波头是什么样的[fn=29]</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是不是想说的是压倒？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑道jk少女与娇小玲珑少女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;校园爸临！</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;校园五霸[fn=58]</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;从不勉强人（手指发出咔咔的声音）</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边卡流</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是黑夜给的黑色眼睛吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：他不是乱算的啊。
是实测[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好记仇的神啊[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下流（X）
上流（X）
渡边彻（√）</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？？怎么会呢，我认为服装是多余的</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;符合要求</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;的腿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处要艾特一下美姬！[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界第一美腿</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;无良甲方登场了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说，不笑的渡边不应该更盛气凌人吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是啊，从不勉强别人，只是修好道路，在路的两边栽上鲜花，引导别人走上你所想要的道路上罢了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老夫也不是什么恶魔</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;噩梦的开始</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呦尬哒。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是太年轻啊[fn=58]</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔甲方渡边彻，登场</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;注意，现在是8点过一点。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我懂了，这就是作者折磨起点画师的真实写照[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始了开始了，甲方乙方.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得这个更好！[fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是这个了，神穿上后一定很美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;
我为什么看不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有钱后一定要买部能看图片的手机.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等我有钱了一定要换一个能看图片的手机</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;甲方爸爸</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;上色的话，需要五彩斑斓的黑，对了，不要把反光黑色金属材质拿来糊弄我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;需要这个地方看起来大一点，但是实际占的面积小一点</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这裙摆要这样改:让我一个人看起来是可以看到腿根的超短裙，让除我之外的人看到的是落地的长裙[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;符合黄金分割吗？束腰的风格?瓦伦蒂诺·加拉瓦尼?不不不，安吉拉克莱顿知道吗，就哪种复古点的就行了！</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这种给的很具体的甲方其实很好了，说明他有明确的想法，那种没什么明确想法，就是想多看几个方案的才是真的难顶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万恶的甲方😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是甲方吗[fn=10]</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;心情－1</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好细节的常亮</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;泪目</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《不勉强》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐真是太勉强了，都深夜十一点了还在加班。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甲方和乙方</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;重点不是几乎秒回吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《不勉强》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老资本家了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压榨员工加班的渡边</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;照抄の甲方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好强的既视感，这不就是乌鸦你在跟角色福利群里跟画师太太的对话吗！?</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做广告设计的我，感同身受的哭了😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扎不多德勒[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;微笑中掩藏着杀意[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大海啊！你全是水</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;无耻的资本家嘴脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长得帅就是可以为所欲为</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是独自扛下了所有，和舔狗有毛线关系。不过我想渡边应该能看出什么，然后其他方面(非恋爱)给予补偿吧</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学而致用。   from — 太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;罪恶的资本家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;折棒是真的很有天分的那类人，纯天分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;折棒太郎听到这句话忽然警觉起来</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;无情无耻无理取闹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《不勉强》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔甲方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以为什么群里不能发.jpg</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是甲方了</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没看懂啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出现了！绿茶吊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泛言泛语：啊，对不起姐姐~不要打我，我错了，我错了，我再也不会提意见了~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经可以很好的继承九条家了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是一般的茶[fn=31]</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐的段位太低了啊</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个~~把我看笑了，哈哈哈哈哈</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;茶艺可以啊渡边桑！</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;终究少了一个～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被迫开心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈～～</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乙方没有人权啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;痛苦面具</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人间真实系列</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死233333</p>
`;
default:
			return '';
	}
}
        