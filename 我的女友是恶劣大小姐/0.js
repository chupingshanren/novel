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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;从这章开始改名了[fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;20:16</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夏期旅行[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每天指这个活了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了，看完就睡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没发现</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精了居然更了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神奇，竟然提前了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？惊了，竟然提前更了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神奇，今天怎么这么早？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一楼</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛已经杀疯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拉手了</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边从清野中挣脱出来</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;将就看吧</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;愣着干嘛 搂她啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瘦出来的马甲线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马甲线是因为瘦的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不运动就有马甲线？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不懂就问，马甲线到底在哪里？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马甲线过分了</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;少了多少层</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;流放目的地：没有美腿的世界。
以下是流放名单：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是想舔[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好腿！</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是熊小了点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛​</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好，321唱:
You leave me breathless, 
You're everything good in my life</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其他人都不能相提并论
凛是彻真正无法抗拒的吸引力
难以直视的美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也就一般漂亮吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢的人朝我笑的时候我也会忘记呼吸[fn=41][fn=41][fn=41]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;I can't breathe[fn=58]</p>
`;
        case -10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;更新晚了，三张月票给 别人了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;短短短短</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太短啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不加更还想要月票？？？！！！[fn=26]</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是两颗灵魂在相互吸引
这引力无法抗拒
永无止境</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚开始就想着满足物质（系统）的需求，现在什么都有了，开始追求精神上的满足</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能因为穿的太多了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是自由属性点，我点了魅力！</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;團戰贏了，結果韓信在偷家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她输了 但没有完全输</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;k桑赢了比赛
但家没了
这一切真的值得吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关系缓和第一步</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还在嘴硬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《猿神输比赛》
《猿神在偷家》</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;偷家了🥰</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;但我真的感覺不到渡邊對美姬有愛，總感覺是口上說愛，行動上說愛，心裏並不愛。

但對凜凜是，心裏是愛，但被逼說不愛，行動上也是。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明已经重新变得亲密起来了
但两个人都那么骄傲
谁也不愿意向对方低头
只有彻能真正将断开的羁绊重新粘合起来
以爱之名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：败犬还挺会找借口</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧，渡边lsp了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟也就一年多，还算热恋期</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忠于东京帅哥的欲望</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忠实于自己的内心
对爱的贪婪也永无止境</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚看完神就盯着正宫了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不对劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里应该有评论[fn=9]</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么看得见[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神：嗯？我也有！山不在高，有神则灵！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是？谁好呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;xp暴露</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么看得见[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二到九楼都已经被拷走了，希望后面的同志好自为之</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中间的九楼呢？，放我兄弟出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总而言之 我图多 听我的[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;将就一下 清野妈妈（我忘了名字）[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;将就一下 清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神：嗯？我也有！山不在高，有神则灵！</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话是对渡边说的，
类似于“橡皮擦你还用吗，不用还我”</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;♀♀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一起玩♀♀♂</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻今日依然胡适[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此城可有。。？领五十甲兵与我取来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就看到这里了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野太太没有胸。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻今日依然胡适[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此城可有。。？领五十甲兵与我取来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有我的太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孟德直呼内行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到拔罐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盖饭走起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲子丼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到 母 女 饭[fn=18]</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;My queen</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，我的美姬🐶</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;闪现接枪！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“喷”在他的短袖上</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;难道不该和太太一组，拿水枪射美姬吗？和美姬一组，你是想射太太们咯？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为你而战 我的女士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好[fn=31]</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不对劲 应该是九条母女互🐍才对啊</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：彼可取而代之</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，美姬，你不能抢你爱人的活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎狼之词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话说出了渡边的心声</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野家的女人真香</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我征服彻，彻征服清野家的女人</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个骑手他正经吗？</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我还能更快！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;公婆骑着摩的，要和我比一比</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:绝对是我更快。我只要三秒。[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这比不了，渡边是处，太太已经输了</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;cece，好快的cece</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看出来了，还是真姬你的车快 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好快的车车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打断施法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬啊，渡边叔叔要加速了哦</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好躲，就是晚上可能被收拾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起小时候和隔壁家妹妹手拉手在小区里玩，前面下水井的盖子没盖，我嗖一下跳过去，妹妹嗖一下掉进去了，我在千钧一发之际，还松手了，还好妹妹胖，卡住了[fn=20]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;危</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这辅助怎么不挡钩子啊？哦，是蓝哥啊，那没事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你🐴？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你躲腻🐴呢  🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国外版城市猎人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;个der啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;布隆站在后面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你🐴？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这辅助怎么不挡钩子啊？哦，是蓝哥啊，那没事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波是宝蓝附体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像极了下路怂怂的辅助和气到炸的ad</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你多个啥啊，晚上给我等着！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你躲你🐴呢</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阳光，波浪，打水枪  还有四位美娇娘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看成了浪叫声，大概是废了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;解锁新CG：海上的夏日回忆</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;此时海豚🐬出现，凛瞬间忘了彻。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有🦈吧，快进到🦈出场，渡边大杀特杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;惬意</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;海边的阿芙洛狄忒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;35度紫外线五级这么舒服？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;35度紫外线五级这么舒服？</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神交？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;犯规啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个眼神就已明了我爱你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心有灵犀，眸光相续
不着一言，胜却万语</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有丶丶心酸，只能靠偶尔的瞬间来表达爱意的两人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野在偷家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：危！</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;但兵就快死光光了，再無決定性的勝利！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉好惨的亚子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还搁这回甜呢，连招啊，追刀啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心被爱所填满</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来你也玩猿神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搁着玩柏拉图式爱情呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么嘛，猿神</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;you jump ,i jump[fn=31]</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，那张</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;肉丝，妮依定腰火下去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后在海上男主对着在海面上的女主说的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了，但是已经结了婚的怎么办</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现实中原型好像没死</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;😄豁</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;孙悦：“中”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;害羞了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是捧读吗？棒读是什么鬼？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是一个没有感情的读词机器</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;棒读？</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;戏精附体啊。就你那非人类的体力，真掉进海里估计也能一个人游上岸吧。</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;全书完 神作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被章鱼拖走就神作了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结撒花，感谢陪伴。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咕噜咕噜
咕噜灵波~[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘟嘟噜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戏精渡边：咕噜咕噜~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咕噜咕噜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我先在这摆一个茶道赛高，你们随意[fn=26]</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你们说…渡边会不会在水下捣鬼</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：他大姨妈…</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;霞洛的台词吗？有点像</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就宠他吧</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;winning that ticket was the best thing that ever happen to me，it bring me to you</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边太会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里怎么能没有大大怪跟小小怪的客串呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这个快乐 正经吗</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;救你就等于救自己~  请带入哇哈哈纯净水，顺便让他们把广告费给一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬当时的视角一看，渣彻的嫌疑真的大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小男生出门在外要保护好自己，这很正常</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有个小bug之前这个问题在有清野在场的时候问过，而且清野肯定了渡边说的是真话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咱们用上帝视角来看没有任何问题，但从第一视角，你受到了生命威胁，然后出现了一个陌生人身上还带满了武器，这怎么看怎么可疑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男孩子出门带点防身装备很正常吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，当然是为了拯救美姬你啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，这个视角看渡边嫌疑是真的大[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做案</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬陷得太深了，5555，美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经是渡边的形状了[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是救一个可能遇到危险的女孩子</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是命运的指引（实话）[fn=31]</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大地母亲忽悠着你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：实不相瞒，在下是为了积分去的[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么说也没毛病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我老婆系统姬告诉我的</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;重点，他可能多救了你一次，后宫名额+1</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;额</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学废了～</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是渡边告诉的渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明白了，我与爱情之间相隔了一个系统。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果你不违背我，你要什么我就能给你什么，你要什么都可以。把你的心交给我吧 《泰坦尼克号》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞧瞧人家，再看看你，能像他一样也不至于单身几十年</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不小心把假发撩掉了</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;跳行的我以为渡边又钻进裙子里面了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：海的味道我知道[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你使我尝到，咸的味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;核废水的味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：海的味道我知道[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是泪水吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她是不是喝了一口海水，然后吐到了渡边的嘴里？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;波力海苔，大海的味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;粉色柔软的“双唇”带着大海的味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;品尝到海的咸味
与爱的甘美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尝到她的咸😌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跳行的我以为渡边又钻进裙子里面了</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野-安逸？</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;绳子断了，大家上不去，渡边得到海洋礼包+3，得到海豚的能力，跃上甲板</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不应该是 父爱如山 某一集爱莉在海边的剧情吗[fn=62]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一部惊悚片（或许是灾难片？）的剧情就是几个人坐游艇出海游玩，全部人都跳进海里游泳玩水，结果发现游艇船舷太高，人爬不回船上去了。。。</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有妊娠纹吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;富婆，饿饿，饭饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饿饿，要吃饭饭！</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;貌似是。哈拿给 黑哒? 十万三千小本本</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看我富婆！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;茵蒂克丝：我那个…很大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦那噶pekopeko</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;富婆，饿饿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;xdm我冲了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太好可爱。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饿饿，饭饭！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那 神去哪里了？</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;肯定是万能的东京帅哥呀∽</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：念我身份证号得了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很高兴为您们，我的太太们
【绅士.jpg】</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《油嘴滑舌》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这要是没人，就不是在嘴里收回了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这（我把手指从一个湿湿漉漉的地方抽出来，发出惊叹的声音）</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;直接报我身份证号吧！</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可爱，果然还是太太们更棒</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你给大伙有大声的、有感情的念念，亲爱的谁？谁是你亲爱的？
</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不是谎言</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;懒懒的凛喵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;波斯猫？</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好！终于有渡边不会但是我会的东西了！</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;改天试试这样做的水果汁味道[fn=32]话说有人这样喝过吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猿神套餐：异世相遇，接！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;试了一下 感觉可能3个奇异果 150苹果汁 50凤梨汁 加100ml碎冰 不好喝请来把我的头拿走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;试试</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;试试</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个猕hotel</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猿神套餐：异世相遇，接！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猿神套餐，欢迎品尝！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;改天试试这样做的水果汁味道[fn=32]话说有人这样喝过吗？</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;斯国一嘚丝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑补御坂大小姐星星眼和当麻说话的场景</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这算不算说谎？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情趣型阴阳怪气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;棒读</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;从未去过海边的我还真不知道有这回事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去浴室冲一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盐渍松茸，欢迎品尝！[fn=4]</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;印度人还真会这么干好像。之前看过一个视频，印度人会用手制作料理时的食材，比如你和面搅蛋抹匀调料什么的，他们认为食材中沾上汗液味道会好而且省盐什么的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;撒盐哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么感觉在开车？？？</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;坏了，核废水！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;氚含量过高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“等会儿我会吃你”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抛开剂量谈毒性，都是耍流氓。啊，美姬在对我耍流氓</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;my lord!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Oh，captain！My，captain！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别塞了别塞了
再塞就不用吃饭了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要调，去房间里调！</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;双重含义🤔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫？炭？</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说实话，苹果超容易氧化变色的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;优先级高的，调度先执行，其他进程或就绪或等待或挂起[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神是最先的！（拼命地在一些奇怪的犄角疙瘩里抠糖吃）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这优先级，嘶，凛yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;波尔多马尔格</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我的第一反应是把佣人烤了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盲猜有人第一反应“哪来的佣人，不是快乐五黑吗”（没错就是我自己）</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一会就在这做[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚上可以躺五个人的那种？</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;读作船长，写作佣人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Oh captain！My captain！</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;总比舰长好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这让我想起了某个荣誉骑士</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太好可爱啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得想办法吃掉他，或者被他吃掉[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得想办法嫁给这个男人才行</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小孩子才做选择，有系统的东京帅哥全都娶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是，就是 NO
既是，也是 YES!</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;确实应该</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;反驳！！明明是都要娶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我，刚开始没反应过来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草率了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边这波啊，这波大意了，没有闪，两位太太可都是跟他同一级别的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太贴脸输出</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波大意了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坏了 暴露了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里居然没有骚话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我与我的神同在。</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;此处需要一张图片[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不识庐山真面目，只缘身在此山中</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按顺序来，真理、美姬、幽子、凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腿是神，其他都对应谁？我想知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;娘的，乌鸦不写小黄文，对我们这些lsp真是一大损失</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你在看风景，而我在看你[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦已经给出来画面了，剩下自己体验</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂了，第一个不是神[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥别的都是形状，只有一个不应该暴露的是颜色？</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;下饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芬达，橙子味或者苹果味，谢谢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快乐水永远的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来瓶可乐杀杀精</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你时而看云，时而看我，我觉得你看云的时候很近，看我时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀色可餐[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来瓶快乐水</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只要炭打的好，消防车来了都灭不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;烤乌贼</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;秀色？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个肉，它正经嘛？[fn=11]</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真姬：快点喂我[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我顺便冲到太太身后！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我需要一张图</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得腰子最好吃，你们觉得呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是这样子？</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就逛到这里吧。。。哦，我在上高数啊。那没事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应召而来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么写作者你想干啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就逛到这里吧。。。哦，我在上高数啊。那没事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给大佬递茶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应召而来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹贼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年幼的目光（召唤图）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您正在访问危险网站！[fn=51]
爷要的就是这个！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的阅读到此为止，接下来开启浏览器</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我好了 你呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？（看高数题）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还没好！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马上完事儿[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一语双关</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟烧烤技能点满</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压枪</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《油嘴滑舌》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人类对油脂和（女性上半身前胸）脂肪的追求是刻入DNA的[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲜亮的颜色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真没办法，让我来帮你弄干净吧[fn=31]</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一滴都没有了[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫多莫多</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大晚上把我看饿了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羊排没有有羊肉串</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大半夜的我饿了</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在現場，我是肉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从 看成 把 字了，纠结了好久</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是羊排的底部！我想了好久才想到[fn=37]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从胸前经过直沿而上，最后放入口中.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上面吧？</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“看”[fn=58]</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;半夜两点给我看饿了，牙白，麻吉牙白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃着烧烤唱着歌，突然就。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不来点酒加头孢？</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;肉丝在哪呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃着烧烤，唱这歌[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来点音乐，我就想起了JOJO三人黑帮摇，的那一首歌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唱歌技能终于有了作用，这么一想，那只被心控的鸟儿有日子没出场了</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边领了唱歌基础的技能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;松田聖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快跑！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青い珊瑚礁</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，今年五月二十号情书重映了，我刚刚去看过，看到这首歌我dna动的不是一般的厉害
顺带一提我去看的一个重要理由是在本书前期被乌鸦安利了</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;冬季露营剧情里两人互诉衷肠后一起躺在雪里时，凛酱唱给渡边听的歌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青珊瑚，跟神的小情调</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hh村上也被这么吐槽过</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;请务必给我整多点🌶️🌶️🌶️🌶️🌶️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请放点华莱士的辣椒粉谢谢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真的不错，嘻嘻嘻，好听</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;If you missed the train I'm on,若你错过了我搭乘的那班列车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;if you miss the train I'm on</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;five hundreds miles</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;500miles
</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;You will know that I am gone,你应明白我已离开</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;You can hear the whistle blow a hundred miles.你听那绵延百里的汽笛</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;A hundred miles, a hundred miles,一百里又一百里 载我远去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从岩手县到东京，400公里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;醉乡民谣</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;4.1的愚人节到了，我猜乌鸦要发一个请假条出来！
但是穿越时空的书友们告诉我，乌鸦玩愚人节整蛊活动，乌鸦在骗我[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请快点到母女同床的缓解</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;這個場景應該點播 Rod Steward 的菸嗓唱 Sailing 更應景</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一章，色气十足[fn=27]有点京阿尼卖福利的感觉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不够啊，不要请假，想天天看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;41到了，乌鸦先说今天不会请假，42号单章说我是开玩笑的今天请假。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新的一个月开始了，乌鸦又要来例假了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四月了乌鸦又可以请假了[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;4.1的愚人节到了，我猜乌鸦要发一个请假条出来！
但是穿越时空的书友们告诉我，乌鸦玩愚人节整蛊活动，乌鸦在骗我[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日的美梦素材就收集到这里了，睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请快点到母女同床的缓解</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;GKD!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，乌鸦写的好是好，就是每天更新的量太少了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这。 就这 就这点儿给谁看呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又看完了，，，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一章没啥东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦要请假了，老例假</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到沉船，荒岛戏码</p>
`;
default:
			return '';
	}
}
        