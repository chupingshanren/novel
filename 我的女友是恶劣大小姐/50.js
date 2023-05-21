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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;水旱两用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果方向错了，停下来就是前进</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;往左走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方向不能错啊兄弟们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;走右边，肯定没问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想问下，这个方向他正经吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方向错了，xx越多越反x</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;报道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;4</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我直接第一</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;女孩子面对尾随最好的办法就是站着嘘嘘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;biko</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;警察叔叔，一楼有问题！👴举报
👮：感谢！
👮：你，就是你！肘，跟我进屋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长得漂亮的女孩子最好不要一个人走，不然容易遇到变态尾随，昨天我就尾随了一个</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阿尔卑斯棒棒糖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿尔卑斯山的寒风能隔着整个亚洲吹到日本嘛😖😖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还记得上次修学旅行，又到了清野神的主场了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么感觉看过好几遍“进入十一月”了。</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边好聪明啊，每次都是把神对自己的嘲讽美化成自己人格的高尚。</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咦，为什么我的相册里会收集那么多张小泉老师的同款照片呢？[fn=37]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我又可以了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新婚少妇[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一看见制服两个字我就在想渡边是不是又有了新玩法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边不是想让老师晚上穿制服么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师我又行了</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;似曾相识</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人前。。。
人后。。。
Lsp懂得都懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那不穿呢[fn=58]</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;芜！我最爱的电车环节</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有想法和感觉但是写出来感觉又不对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得应该是这吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊我摔倒了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这操作以前好像见过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重点是一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有没有课代表解释一下凛本来想说什么？资质不够没搞懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只能帮你到这了</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就先逛到这里。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么在这里让我想起了一部番</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪句话骚一点？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我解锁了你们永远都不会知道的姿势[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竟然没有评论，看来热评是我的了</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发生什么事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发生什么事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;顶着了（*/∇＼*）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呛死！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原文变了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下面的l s p</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是 这路也能开？ 但是车呢？我还没上车呢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么如此惨烈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还以为我来的够早</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？我来迟了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Ohhhhhhhhhhhh!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼呢？</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;全场最佳：电车</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学生时代的后桌啊，整个青春都是你的后桌，嫁做人妻的后桌啊</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;巴嘎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八嘎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神的娇羞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界末日</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如果说 沙雕 就是新的故事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野之章正式开始</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始了开始了(≖╻≖；) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于出手了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次把“笨蛋”送回去！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;电车之尾行</p>
`;
        case -10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;别完结啊！一直写下去啊！就算完结下一本也好好的写现实文啊！主角要中二啊！幻想文看不下去的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘤嘤嘤，我还是希望恶心同学和清野神神的甜蜜篇章能再多点，毕竟为了清野神全订的，一定要有个好的结局啊，最特别的她，我的神，清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以当番外写点，但是主线就差不多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感谢这些大佬就多写点吧，别那么快完结啊[fn=12]，还有婚后和孩子呢</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;全cg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到一晚一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;覆盖掉[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不肯吃亏的美姬</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;结合前文这里就是清野落入危险之河了，而渡边不愧主角之名，跳下去救。为了两人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恒河</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节可以看出乌鸦真的好认真在写这本书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻木咯唯一不会说谎的卡no就</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都还有约定，感觉他两的每一个约定乌鸦都记得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贴贴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱河</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;上次回东京前最后一天吃了成吉思汗锅，羊肉味道直到回东京都没散掉💦</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是未开化的猿人[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没意思，一般🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没意思，两个猿人罢了，没意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就问你们 ，这甜不甜吧？[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到绘梨衣，我们都是小怪兽🙂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜甜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是未开化的猿人[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又没了！，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又没了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;值得纪念的一步</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊我死了！最特别是她，在所有一切之上是她，我的神，我的老婆，清野凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扭成蛆[fn=43]</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;野战</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先吃烤羊肉，再吃胖头鱼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;活动复刻是吧？我想起来了，下一章我看过。猿神有一段描写我记得特别清楚【安静了一小会，清野凛呢喃般的细语传来:“我有计算自己的生理周期。”】[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后单挑九条和清野[fn=58]</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;满足了 凛终于开始表露直视自己的内心了，现在的她不是高高在上，不近人情的清野神，只是一个开始美好爱情的普通女孩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;起飞🛫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老婆[fn=21][fn=21][fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神之妥协/神之恩赐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛牛要炸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是吃太多柠檬的表现了吧，，最近这是狗粮成吨倒，而且自己还能分别真伪。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满足了 凛终于开始表露直视自己的内心了，现在的她不是高高在上，不近人情的清野神，只是一个开始美好爱情的普通女孩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🛫️ 渡边渡边冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是心满意足的一晚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这对话也太舒服了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;✈️✈️✈️✈️✈️✈️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我好了
乌鸦，我的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;起飞🛫</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这边是故意诱导的心机美姬与吃醋的呆头凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像姐妹一样啊，那么默契</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小夫，我要进来咯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要进来了🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;表白被打断</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好きだよ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在一起吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表出来补充下呗[fn=4]</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;狗乌鸦丧尽天良，我与凛神共存亡</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;相对论之在心爱女孩旁边时间会加速流逝[fn=4]</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在此遇到收服箱根火龙的源清素</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来乌鸦早就计划啊，箱根之龙源少爷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;箱根山岳险天下！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你喜欢跑步吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;箱根驿传</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;茜色染红的坡道</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要使徒的血液才行</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;声音再小渡边也能听见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的有这么甜吗[fn=31]我不信[fn=12]</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;开摩托上富士山吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光秃秃的富士山</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不，是电车。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算是扬州炒饭，也不会是日本的扬州炒饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男，爱江山不爱美人。
不喜欢美姬吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诚实的东京人没有吃上的扬州炒饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你好坏哦，我好喜欢😍！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：没办法，我就记忆力好一个优点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太坏了，准备更坏</p>
`;
        case 152:
            return `
            `;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢的是江苏扬州的扬州炒饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢的是中国的扬州炒饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，根正苗红</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我们小时候都叫小叮当</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;优秀的人什么都是A</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不懂就问，这是啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;许久未登场的哆啦A凛出没！！！</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一本道[fn=22]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只知道一本目</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六本木，嘿嘿嘿😈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的也没有，又没人能解释一下这是啥？</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前面说了「好啊」</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边只是询问似的说了下是否去终点站</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;漏洞，清野没识别谎言</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;已经是渡边的形状了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看你今晚表现</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还以为神会上车[fn=12]</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对了，还有池袋西一番街。渡边很早以前的主要消费地，清野中暑的时候有提。黄色录像厅.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我说为什么有点在意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起来了，池袋有中华街来着。</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这场景很熟悉啊，阿彻左手是不是还捏着一个小小的遥控器[fn=31]</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;皮还是你皮。可惜力番里全是整人的 真纯爱少了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他也太懂了吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿！公然当着神和美姬的面调情[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么就没有这么会呢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他好会啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是抓紧一切时间打情骂俏，好好学习啊臭小子！</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;友情提示，杉并区其实是小泉三人组没钱的时候一起住过得地方</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你真的是不放过任何一个撩人的机会啊，东京帅哥。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;试卷上写暗号，判0分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Soga</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;口呦滋咪，I LOVE YOU</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;こいずみ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他太会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;口...口...口基马！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里怎么想都该写名字吧……没有特殊读法的话应该是Aona？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Tomako？（不知道对不对(~_~;)）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;こいずみ，I LOVE YOU</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉こいずみ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶 ，公然在试卷上行贿阅卷老师 ，[fn=29]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么写的是姓不是名字？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拉拉拉拉面，suki，koizumi桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;试卷上写暗号，判0分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;师傅大人在上，请受徒儿一拜！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你真的是不放过任何一个撩人的机会啊，东京帅哥。</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;都是悟性极高的人啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西游都给你们整花了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完整翻译：今晚二更，授业解惑，二次……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉:终于给我逮到机会了，试卷做标记，作弊零分处理，学霸你也有今天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今晚只能两次...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今夜二更……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚上来我房间，我给你留门</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如图，贴贴！</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说一句题外话，虽然我也很不愿说出来这个事实，但我不得不说，毕竟它是真实存在在那里的，你逃不了骗不了自己，即使它带给你恐惧带给你痛苦，那好，做了这么多心理建设，接下来要道出残酷了——翻页今日份甜食无了。</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;ごめん┚
┚
┚
┚
┚
┚
┚
┚
┚
┚
┚
┚
┚
┚
┚
┚
さよなら</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有没有大佬给个恰柠檬的四格图</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;芭芭拉冲鸭！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自然选择，前进四！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用西班牙语来说的话这个词也对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不择手段的前进</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芭芭拉冲鸭！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;速食面！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自然选择，前进四！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亚希给给</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前进前进前进进</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前进四！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还想了三分钟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前进向前进</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自然选择号，（          ）！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请进</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请进，纠错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;向新世界前进！</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;上任吹奏部部长一木同志携新任部长玉藻同志来上级主管部门人类观察部作年度汇报，总结在观察部的坚强领导下，三位领导的关切下，一木同志带领下的吹奏部一年来取得的辉煌成就；同时新任部长玉藻同志向三位部委作述职，汇报自己未来执政思想与主要执政主张!会议取得了重大成果，形成了“老带新、送一程”的吹奏部良好作风。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两位搅局，打断施法的好手</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我一定会回来的[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;火箭队</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;t800</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灰太狼：这话我熟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了一个会字吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小灰灰在哪里？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灰太狼：这我熟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一定会回来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话好眼熟啊，灰太狼？</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《只拿了银奖》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦将女，多多益善，惜半途而中道废，真希望长一点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪里都有吹学家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《北宇治高中吹奏乐部止步关西大赛，如何问责》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久美子第二年都没进全国，哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都能靠自己打进全国大赛了，可以了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我想起了吹响吧上低音号</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前面已经被甜死了十五层楼了，你们还有活着的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果不结合前文 可以理解为进宫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;kswl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;存了30章，都没来得及看
月票不知不觉存了6张，给你票票

加油</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊，甜死我了，甜死我了，舍不得舍不得啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恐怖，十五楼都没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始寂寞了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜到牙疼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想把乌鸦关在小黑屋里，直到清野神把渡边推倒为止</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这儿错别字还没改嘞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面已经被甜死了十五层楼了，你们还有活着的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看乌鸦的书，自动纠错和脑补的技能都慢慢练出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛蛙，15楼全部阵亡了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前十五楼呢[fn=16]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;裤裆？？？</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她俩在一起吧哈哈哈[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被迫害部的两员大将</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫  害  二  人  众</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;四保一没了一怎么打</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去年为什么赢，心理没点数吗？只要渡边上场顺便找一个吹奏部只要不拖后腿都能全国金[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没了主C了呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的双簧管也是重要原因吧</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你们吹奏部一届一届换了多少个部长了？换汤不换药啊。熏带的好好的你给她换了干什么？人家清野同学也说了我当年带的是什么人？我当年带的是渡边彻，你们这帮什么人让我带？现在的吹奏部什么水平？好美什么的都在当部长她能当吗？当不了！没那个能力你知道吧？这下金奖都输了，再接着输银奖，然后没得输了。脸…脸都不要了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为没有渡边的双簧管</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木第一次踏进观察部期待别人叫她“葵”的时候，竟然是好美第一个叫，这是我没想到的</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;技能用在清野神身上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秒速五厘米</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真不熟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好歹是前女友呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有些人，一旦错过就不在🎶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;申请连接超时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害任务-完成</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛：我的回合</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神，终于，啊，请你们快点在一起</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;给你的爱一直很安静</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“哎，来！？#*吧，渡边君”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按照乌鸦之前的心思，这该不会也打算留下一个遗憾吧[fn=38]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也有话想说，想想还是算了</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东西已经属于你了，并且很珍贵，但是这个过程有点艰难</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好比喻，作者的文采就像大海一样，超级多的。。。水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是什么奇妙比喻？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你俩这样看得我也很煎熬啊～请快进到结婚，谢谢！</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开心时，煎熬也开心
难过时，快乐也难过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在这一段我想起了动画版凉宫春日结尾那里。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一定是开心的动摇。</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你会和清野快速同居然后走进婚姻的殿堂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次这个场景设想的都是野猪大改造里的山下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统：是不是看不起我？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;命运的分界点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有如果</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，两条不同的命运就此分出</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;告白气球里的那段</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我最近喜欢听告白气球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这个问听歌，想到了源桑和gakki的恋爱小故事，拍逃耻时源桑总是自己戴着耳机听歌，终于有天gakki问他在听什么歌，递过耳机一听是gakki的歌</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实清野神才是老司机，随时随地飙车！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蓝色～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就很好[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白色衬衫，如果是蓝色内衣的话，应该会透吧，所以我猜是白色！</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;王建国，李雪琴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;即使抱胸，依然没有任何起伏[fn=31]可怜~~</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;总之就是非常完美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野小姐，你怎么世上第一可爱呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;非常完美(除了前装甲)</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;屁股肯定也不翘，毕竟需要锻炼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;部分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除了胸部</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么小作文</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我忘不掉凛小姐了。
如果不是知道了凛小姐，说不定我已经对这个世界没有留恋了。
凛小姐真的好可爱啊。做料理的时候笨拙的样子很可爱，故意撒娇养gachi也很可爱，唱歌的时候很可爱，生气拍桌子的时候也很可爱。</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;🌿，这个太多了，课代表放弃了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很好，清野专题卡的姿势，画面感来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神之惊叹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;继续</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但你还是很开心～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快开个课代表[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🌿，这个太多了，课代表放弃了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很好，清野专题卡的姿势，画面感来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：真香！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是圣斗士！</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有一种说法是夸“有趣”象征着拒绝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里好像有点小bug，正常人会这样反问，但会识别谎言的清野会知道。或者说渡边是反话？没趣？</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢就上犯法，要注意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是啊，可惜那样的人不一定会喜欢你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;见色起意嘛，我懂我懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有可能是因为在你自我介绍后，第一个给你鼓掌</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp; 用心良苦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真话</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你的大眼睛 明亮又闪烁 就像天上星星 最亮的一颗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万雌王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的眼睛，不多不少，正好是两只。[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行这比喻好想笑啊</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这一唱一和的，演相声呢？不对，这段渡边的话用歌唱出来，清野凛用言语怼回去更有意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，铅笔绝不缺席</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建议添加：0.5毫米🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个描写开头真的反复出现，好怀念啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铅粉迟但到</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;锯齿状的手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;修长的十指，最适合用来...咳....emm...弹钢琴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的十指，不多不少，正好十根😘</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;胸是不可能夸的</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;您也有钉宫癌？</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可惜是个飞机场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自信点，把凸去掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;微凸？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重点"苗条"[fn=4]</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美的有一种破坏的冲动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总感觉这里有点问题，但是我又不知道问题出在哪里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说的这个冰激凌，它正经吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;社脸上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确定是冰淇淋?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;涂上去就可以舔了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果我是四川人，恨不得撒上花椒和辣椒。
如果我是新疆人，恨不得撒上孜然和芝麻。
如果我是广东人，那么我希望你是福建人。
啊！凛！你是唯一的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;富江？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;nbnb啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;顏射？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙 偷开车 可怜凛不懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三楼说的对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个个都没反应过来？‘我想吻你脸到每一个角落’的潜台词啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现做的石楠花口味冰淇淋么🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉三楼说的到位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点奇怪的感觉的比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然这么说有点恶毒，但我还是想问是香草味的还是巧克力味的？🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美的有一种破坏的冲动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总感觉这里有点问题，但是我又不知道问题出在哪里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后舔干净[fn=4]</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;荒木附体（确信）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能他看了jojo吧（确信）</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛：。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你真下饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光听麻衣你洗澡的声音，我就能猛吃三大碗饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;格局小了，我说一个数，十八碗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀发可餐[fn=4]</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;李明华调味料[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，如果有复方汤剂，你们可以互相变着玩啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈利波特的那个嘛，想起来上次看哈利波特还是初中的时候在镇上买的10块钱一大本的盗版书。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是熬六个月确实能在一起（请忽略时间不同的问题，）</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明示抓住?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抓虫，开往</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;热恋的男女是不会觉得尬的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就我觉得这对话尬的一批么？</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;跟上去啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，那我走？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈，明明就一直很开心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我走？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轻轻的，我走了，不带走一片云彩～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要走！</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;已录音，回去发给美姬</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;欲言又止</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了大老师和雪乃的明天见😭</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;重复一遍，终幕已然揭起</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要是漫改了会有多好看？</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;岩手渡边，东京帅哥</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如果扒停电车就玄幻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他太会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;～～</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;高情商</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总之</p>
`;
default:
			return '';
	}
}
        