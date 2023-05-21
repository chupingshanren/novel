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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;虽然我知道轻井泽是个地名，但还是第一时间想到了轻井泽惠hhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在这里打个卡，累了😔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我永远喜欢轻井泽惠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到轻井泽第一反应就是惠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赶上进度了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八月的下北泽[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;OvO</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;机动条子《两人的轻井泽》那一集可太有意思了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然我知道轻井泽是个地名，但还是第一时间想到了轻井泽惠hhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轻井泽惠天下第一[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来辽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不得来一手永无止境的八月？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美少女都是你的翅膀，关渡边渣男什么事。[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轻井泽惠！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等肥肥
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来临幸美姬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是些修仙的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀呼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;海洋生物变身莫得了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我还在等待人生中的第一块劳力士。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统商城不看了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬送的劳力士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ZIO</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捷克豹[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看了看手上的劳力士，有钱人的生活就是这么枯燥🐶</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这描述跟我一样，指站在旁边看别人出风头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！这该死的代入感</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;代入感来了  搞得我怪不好意思的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;读者的人均样貌[fn=31]</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;生人勿近不是更好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么样才能弄出不可一世的眼神，求教学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这气质是让你这么用的?</p>
`;
        case -10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有盟主你还躺着，给👴起来啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，三坪还有粉丝？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊又没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又有大佬了</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;剃须了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大胆的想法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;借着问路搭讪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“迷路”的女游客</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家 出 少 女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这个迷路它正经吗</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;苟富贵，勿相忘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑鄙的岩手县人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;富  贵  不  忘  本</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是渡边彻，我为家乡的荞麦面带盐[fn=31]</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喵帕斯！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京美人，飒爽登场！</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;心被萌化了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太可爱了哈哈</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京 好厉害！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊彻，好快，好厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈压抑 死给！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帕帕，妮妮，强！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好快，比沙拉曼达还快[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟日常说再见了，喵帕斯！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜，我的乡村土萝莉完结了，呜呜(┯_┯)，喵帕斯！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太快了，太快了，有种.......</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京确实很热，莲酱要当心呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能是李梅留下的余温</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是渣彻的妹妹，透过现象看本质了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲！很懂嘛！giegie心疼你~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这层全部铐走。
等会，那个李梅的留下[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;收藏夹的照片看了又删</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能是李梅留下的余温</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚到东京就发现了它的本质，不愧是渡边的妹妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京人超逊的啦，都不爱穿衣服[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那可不</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噔噔噔，噔噔噔～ Bgm起！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京确实很热，莲酱要当心呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Tokyo 。。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;yysy，[fn=43]确实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京不太热</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边家长：你在人群中看到觉得是东京最帅的那个就是阿彻啦</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;お世話になりました</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=14]人家说不定有对象或已婚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没问联系方式，是个男性？</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我小新不是人？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我柯南就不是人了么？？？[fn=10]</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我要让全世界在我面前低头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣彻:对不起，是我格局小了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这边和前面对照着看有意思。有一段彻夸小莲全世界最强然后小莲坚持自己是全岛国最强。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的像娘化战国的某位大名啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猛男打滚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，金鱼姬本人没错了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，小莲在训斥渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管看几次，咱都觉得这个“咱”有点可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲:    阿彻，洒家的目标是全世界！</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;樱井绘美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃冰淇淋的都是秧歌</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;等等！萝莉，裙子，杂货店，冰淇淋?emmmm我想到了很好又不好的东西。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看不起亲妈的冰棍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;塔卡西亚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;副食店的眉头一皱，发现女儿此次出去并不简单</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不给小可爱上个角色？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲酱
喵帕斯～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;うち、食べるん!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这超生了吧 一直生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大型阿伟乱葬岗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在这儿建楼的全都拷走！a？w？awsl！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不给小可爱上个角色？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来打破队形    awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：这～就～是～我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;顺理成章的接过了行李箱。这就是东京帅哥吗？</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;雏鹤爱总之就是非常可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊这 搞得和团伙似的～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天哪！看这个金色，是SSR！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不死斩，我收下了，想到了狼的这个cg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次传图，给个好评。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，不对劲，想把渡边枪毙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莱纳：艾伦手办，get！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句到手了，有感觉啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑子里自动浮现出小智(傻东西)的招牌语音和动作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲酱，get🌟daze</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给钱。不给钱撕票</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲线或许可行？（未曾设想的道路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我得到神奇宝贝了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;警察同志，这里有人拐卖幼女！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这 搞得和团伙似的～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的狩猎下限被击穿了（悲）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天哪！看这个金色，是SSR！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有你的，渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：我的翅膀又多了一只</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;表妹还是堂妹的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲不是亲妹妹吗？</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，直接进入了相亲相爱一家人的家族群[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快……一点 
我马上……到了（指马上到目的地）</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一本正经的道:东京很热</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;热岛效应[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京热</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加勒比不热</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼二楼呢，被献祭了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去加勒比吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在开车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京热不热🐶</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;让天空放晴吧！晴子！！

</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纱世里[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统，看东京帅哥的眼色行事。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;风信子号</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;城市</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;主 次 分 明
过 度 解 读</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要再开团了啊，楼下的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神在前，很有眼力！[fn=58]</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;尿毒症的兄弟怎么还没来？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬和凛归你们了，两位妈妈是我的，我就勉强当你们的爸爸吧🌚</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我也是乖孩子呢，阿姨我也要[fn=6][fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是乖孩子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对小孩子出手算什么，有种冲我来啊</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怪阿姨，东京，好厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个阿姨有些怪。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;害怕😱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“是怪阿姨，阿彻，咱有点怕”</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是美爹吗？[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孙笑川</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;川建国同志</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大和二号炮塔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麦克阿瑟，啊不对，德仁[fn=58]</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日本的古都叫京都，江户是德川幕府所在地，明治维新时从京都迁都江户，改名东京。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来东京原来叫江户啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：这个姐姐不大机灵的亚子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：有个无时无刻不督促你学习的嫂子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怕😱</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是这样吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接快进</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？直接进入妈妈带娃模式[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到凛妈教育孩子生气直接骂当爹的彻</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬心想，彻也是你能教育的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬：我的小姑子要你来教？！</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我妹妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到底是谁的妹妹！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;行使</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;行驶—行使</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？？？你以前不是这样说的，你说的是第一个孩子压迫教育啊，是什么改变了你美姬小姐，是渡边彻🐴。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压迫型教育……这种话就是说得好听，一般人根本没有玩的时候</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诚一郎“信了你的邪”[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条诚一郎：啊对对对对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬，10年后你的做法给我的体感不一样啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可不是这么做的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹，和我班主任说的一模一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压迫型教育……这种话就是说得好听，一般人根本没有玩的时候</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？你以前不是这样说的，你说的是第一个孩子压迫教育啊，是什么改变了你美姬小姐，是渡边彻🐴。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难，心似平原放马易放难收啊[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该玩的时候尽情玩，该学习的时候刹不住车了。。。。有一样的吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在渡边面前说要认真工作的时候可不是这个样子</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉小莲就是破局的关键所在。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：你喜欢哪个姐姐做你嫂子
高情商：你喜欢哪个姐姐的教育方式</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这孩子打小就聪明，早早学会了转移火力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲:我是来享福的，不是来遭罪的[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：看我干嘛？你这麻子不叫麻子，叫坑人啊～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;击鼓传花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在压力来到了渡边这边[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这孩子打小就聪明，早早学会了转移火力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲:我是来享福的，不是来遭罪的[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好，球传到了渡边的脚下[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂了，她喜欢渡边男妈妈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连小姑娘都要面对修罗场，这是我没想到的。真有你的，渡边桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：咱不过是个全国第一的小学生罢了，这题太难了[fn=20]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：本小姑子瑟瑟发抖[fn=13]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：“想让我选？门都没有！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲承受了她这个年纪不该承受的修罗场😂</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，转移话题滴神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸵鸟大法</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙 老双关了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面讨论过这个话题了</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边一家都是聪明人啊</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不站边就是站边了。要是站队美姬有什么不敢说的[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做不到啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不到啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一人一个就没有矛盾了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生一个就知道了[fn=58]</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;年轻の人妻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后面也是两位未来的母亲？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前排偷税</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈人人都爱修罗场！</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一拳县</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有你哥哥在，还用适应什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真香</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对的，万恶的资本家</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;去西伯利亚挖土豆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波，这波是太太收买人心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不去缅甸北部</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说到维也纳就想起奥地利说起奥地利就想起哈布斯堡说起哈布斯堡就想起下体外交所以果然还是应该去维也纳呢，这是和渡边渣滓无比契合的城市啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;山东菏泽曹县</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去东北玩泥巴[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们去的不好玩，带资本家去玩的和你们能一样吗[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不拿上唢呐去中东打五把CSGO</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去伊拉克
真人绝地求生[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去中东打枪！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彼得堡比莫斯科还是强多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哥本哈根的童年传说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巴黎黑人泛滥 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圣彼得堡真的不好玩[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;非洲警告[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波，这波是太太收买人心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去西伯利亚挖土豆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：我想去哥哥温暖的怀抱里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以去斯特拉斯堡上演白色相簿[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;斯特拉斯堡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秋叶原</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去君士坦丁堡（即答）</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;欧尼酱～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：笑死，这都是哪跟哪啊，根本听不懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：咩？咩咩咩？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：这就是城里人嘛，笑死，咱根本听不懂</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说实话，站在莲的角度，这种姐姐挺讨厌的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我妈要是这样 我要崩溃，还不能撒谎。。我的妈耶，母子关系3岁之后就破裂了[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为Tokyo hot它不正经</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;维也纳有河有山（离阿尔卑斯山脉也很近），消暑胜地啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛酱真的好严格</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;维也纳也临河啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是圣彼得堡和哥本哈根？理论上都是高纬度城市，应该温度低一点，巴黎有河流过，应该比维也纳凉快点？</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说的是下下一代 也就是说清野下一代不是和渡边生的 下下一代才是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有个问题，系统加持的体质、智力和魅力能遗传吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟会是和渡边一起生的孩子呀</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：OvO</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小朋友你是否有很多问号❓❓❓❓❓❓❓❓❓❓❓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;相看两不厌，只有敬亭山</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;几十道题之后…
小莲忍无可忍的说道：“清野，正坐！”
渡边彻哈哈大笑。
清野凛冰冷地看了眼渡边彻：“渡边同学，正坐！”
九条美姬面无表情的看着渡边彻。
渡边彻：“…”</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学王三拖一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;魔鬼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：硬了，拳头硬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放过孩子吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲承受了这个年纪不该有的压力[fn=12]</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我只是一个路过的卡面来打</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;砸下去6摄氏度</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就是东京帅哥之妹——未来的东京美女吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想和莲交换一下位置</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;使劲贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲通过察言观色，已经获知了真相</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲：两位嫂子都是我的翅膀！！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢麻了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贴！都可以贴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：那是我的位置</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;进来看看有没有“丁达尔”[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么问题来了？你松开的是谁的手？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光是想想   就觉得这是单纯的  美好的景色</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;戴着帽子的村上和樱小姐钻出树林</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;万恶的资本家 我也想要[fn=12]</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;别啊，什么时候都不该打的！</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;自动想到这个动作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;78定律永不过时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去游泳！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;走起走起，咱们一起[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想看太太泳装！nice助攻！</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;走一手亲子路线</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;到底谁是妈妈啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幽子太太比凛还像少女</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太真的很少女啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这真是可。可。 百变</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去抓水母！</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是谁在awsl，那个在言awsl，东京塔上都不见，[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以，你们两家是要把渡边家给分了吗，一个捡走当女婿，一个抱走当继承人？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到一个女婿半个儿，半个儿的妹妹就是我的女儿[fn=4]</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个阿姨有点怪，怕怕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不对劲啊</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你孙子孙女也没莲可爱啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自己生的算吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是暗示啊</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;ヾ(❀╹◡╹)ﾉ~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是课代表出生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年轻的母亲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬：真巧，我也是17岁[fn=31]</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小莲（拿着手机，骑着车，呆呆地看着美姬，又看看彻）：东京后花园，好厉害！</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喂喂喂，可爱和帅气明显不搭边好吧[fn=33][fn=24]</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜呜这么温柔的美姬……太可了！😭😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬，永远是那么迷人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬超温柔！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬赛高[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样真的不会把孩子教坏吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抛掉所有清野股，重仓九条股！全盘买入！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬最棒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬真是有爱又细心的好嫂子呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放个好看的图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬超棒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我可以叛变一秒吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬，永远是那么迷人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜呜这么温柔的美姬……太可了！😭😭</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好孩子，会抓主要矛盾。
小莲和渡边的关系是一对矛盾，渡边和其他人的关系是，一对矛盾，小林和其他人的关系是一对矛盾。
而在中间起决定性作用的，是小莲和渡边的关系。这对矛盾中，渡边起主导作用。
</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大妇之资</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬这里应该是有准备接纳清野的，美姬，真的为了渡边，改变了好多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面6楼呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来个人给加标签🐶</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻应该不会不让我拿吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别告诉我最后是小莲助攻破局。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲太可爱了，哈斯哈斯</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大师兄说的对呀，二师兄说的对呀，师傅又被妖怪抓走了呀！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不否认爱卖弄知识，多管闲事呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你大师姐说的对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬说的对</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;莲酱真的有笑过嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有画面感了</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;壕无人性，简直壕无人性，哦，该死，这万恶的资本主义，我也想要！</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小时候的视角和成年后的视角[fn=53]</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小莲啊  你的车轱辘有点小啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忘记在那本书上看到过类似的话了，好熟悉的感觉[fn=17]</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你是想潜规则吗太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比起做奥特曼我还是想要建立决斗都市，谁不打牌就不给上户口</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也要开？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把成和明星去掉[fn=58]</p>
`;
        case 179:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬桑！(Ultragirl K！)
清野凛桑！(Ultragirl R!)
请借给我极限颜值的力量！
(Fusion up！)
Ultraman T，东京帅哥形态！(后宫渣男！)
我名为渡边彻！照亮神川，闪耀东京！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果我是渡边，我特么直接投资圆谷，让圆谷直接特么梦回昭和52集，不，想做多少就做多少，银河格斗和剧场版都安排上！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果是我，砸钱也要出演奥和骑士主角，52集拉满，2个剧场版起步，再整点外传</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盖亚～～～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大声喊出我的名字！欧嘶超人！泽塔奥特曼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那一年我们都变成了光</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真男人都是变身卡面来打！[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻也要变成光[fn=2]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;演失忆的沙雕麦克斯？</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说到假面骑士，之前看到ex-aid的原声的作者，也有叫渡边彻/徹的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们仍未知道那天前几楼说了什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边是卡面党懂我意思了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;error</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假面骑士渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假面来哒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说到假面骑士，之前看到ex-aid的原声的作者，也有叫渡边彻/徹的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们任然未知1~6楼聊了什么而进去！
但是不要怕，接下来我讲见证后续人员如何消失！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假面骑士步惊云！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;守护这片蓝天的究竟是谁呢？你说呢？乾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我没有梦想，但我可以守护他们的梦想。还有我喜欢玲花，特别是腿[fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;standing by</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巧爷永远的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;555</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;守护</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有课代表吗？记不清这个555了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们仍未知道那天前几楼说了什么</p>
`;
        case 181:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你能表演一下那个吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但患上了高二病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是就是！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我已经从中二病毕业了！”
……
……
“我来告诉你，什么叫立于顶点！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷青结</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人至死方少年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邪王真眼是最强的，与我缔结契约吧，暗炎魔主</p>
`;
        case 182:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是集成电路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡面来打</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我没有梦想，但是我可以毁灭别人的梦想------敏鬼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我没有梦想，但我可以守护他人的梦想！henshen!”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;555

STANDING  BY

haishen

COMPLETE</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;faiz
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;heixin，卡面来打</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴滴滴，standing by,henshi，complete</p>
`;
        case 184:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边前辈，你为什么还不変身？为什么只是看着！难道你真的已经叛变了？
渡边OMO</p>
`;
        case 186:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野神和渡边总是在一些不起眼的地方疯狂发糖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精神恋爱的巅峰，柏拉图式的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;进我的书单吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;〝我今年三十岁了，”我说，“五年前我会做违心的事情，并以此为荣，但现在我不会。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;炒到这份上是不可能放手的 神隐都很难</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;静谧的精神相投，什么谎言都会被原谅
孤独的灵魂相依，任何障碍终将被击破
（其实就是清野yyds）[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我知道共同的默契很重要，那骄傲才不会寂寞得很无聊。
     ——周杰伦《同一种调调》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是甜味吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我把民政局拉过来了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;任何人都 猜不到
这是我们的暗号
他们猜 随便猜 不重要
连上彼此的讯号 才有个依靠
——《暗号》周杰伦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈的，欺负我们记忆力不好，当着我们面调情？欺人太甚！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求求你们马上结婚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神和渡边总是在一些不起眼的地方疯狂发糖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;齁到我了！但我还要更多渡神糖！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精神恋爱的巅峰，柏拉图式的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，又难过又甜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我三十岁了，如果我再年轻五岁，我说不定会自己欺骗自己把这称之为美德。（原文）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧，虽然我是九条党，但就这默契，凛已经赢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野杀疯辣</p>
`;
        case 187:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在旁边》</p>
`;
        case 188:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;金镶玉:翻一个，求你了嘛，翻一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊  我也想表演了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你能表演一下那个吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不大好吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的流氓蹲</p>
`;
        case 192:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;莲酱，yyds！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真正的妹妹，虚假的妹妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻逃脱了社死的下场[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是亲妹妹</p>
`;
        case 193:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就是情商，憨憨的动作，如果是在情侣面前，这是情趣，如果是在长辈面前，这就是幼稚，而渡边面对清野和九条的请求，通过转移话题，强行结束对话，即使她们都看得出这是他的拒绝。这个拒绝更加委婉，更加让人容易接受。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老渡推车[fn=4]</p>
`;
        case 194:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只要我跑的快，修罗场就追不上我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你开的是海超人与大洋游侠的隐形战车吗🐴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;cece，好快的cece！（陈hanser阿姨语音版）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是吧，阿sir，这破路也能开车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车车，好快的车车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比沙拉曼达还快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好快的车车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车车，好快的车车？</p>
`;
        case 197:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Oh,caption! My caption.</p>
`;
        case 198:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Are ya ready kids?
Aye Aye Captain.
 I can't hear you.
Aye Aye Captain!
Ohhhhhh～</p>
`;
        case 199:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;xr(指渡边)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱[fn=24][fn=24][fn=24]</p>
`;
        case 200:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我的中二病马上就要升级为大二病了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人至死都是少年！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人们都说中二病很难为情
不愿再度回想起来
想把那段回忆抹消
但是
当初那个行为怪异的自己真的彻底消失了吗
…………
在脑中描绘一场轰轰烈烈的恋爱
这些都是人一生中永远重复着
永无止境的重复
悲伤 害羞却又可爱
名为“自我意识过剩”的疾病
名为“自己”的不可绕行之路
所以
人一辈子都活在中二病里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;默契交锋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还真是默契啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四兄弟进攻动物园
老大打虎，老三杀豹，老四砍狼，请问老二在干什么？


渡边彻：老二刺猿咯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：还说你们两人关系不好？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人至死是少年</p>
`;
        case 203:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里是不是少字了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后把我塞进了太太怀里[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把自己从</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了手</p>
`;
        case 204:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;见泽村第一美人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最强小学生！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能说完全一致，只能说一模一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好，双方选手就位，我们可以看到，左边的是红方选手美姬，她有着魔鬼的身材，睥睨一切的霸气，绝对必胜的信念。而我们的右手边是蓝方选手清野，如果说美姬选手有着绝对的霸气，那么清野选手则是藐视所有的傲气，堪称最强气场！
双方选手均已出场，赌上一切的大对决，让我们看看究竟是才会是最后的赢家！让我们拭目以待！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咳咳咳，独角兽[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想必各位都是带着YY[fn=31]笑看完了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最强小学生！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打起来打起来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;寂寞啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没啦？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？生驴不敢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;见泽村第一美人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两人的默契</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不够看！根本就不够看！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看之前：啊，更新了满足了，
看之后：就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来，两个美少女来大干一场！看美少女打架</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美好生活的一天从恋爱游戏开始！嘶哑~</p>
`;
default:
			return '';
	}
}
        