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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;短</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;19</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压波零点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们买房?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前排</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌拉</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只有我注意一木同学</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;上图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来自这里哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人至死是少年！</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今天刚玩多娜就看到有人在玩梗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条：不是我和恶魔调情，是恶魔和我调情[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说起来，这本小说里算小恶魔属性的有谁啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野：美姬你真是渣女，以前你只叫我姐姐大人，现在你是渡边的姐姐大人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃醋了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少女和恶魔的爱情故事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;wow（森岛音）</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看个虫子都有恋爱……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《一百零八》里也加入恋爱，就离谱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为你唱这首歌，没有什么风格…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甲方：恋爱！恋爱！没恋爱怎么有收视率！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在电视剧什么都能给你扯上恋爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;同感</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最后的倔强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了解锁更多的场地？[fn=58]</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;懂了，九条渡边逢场作戏</p>
`;
        case -10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;加更就好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加更就好了</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;团长袖章给了凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪儿来的凉宫团长</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可可爱爱</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=18][fn=18]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉：姐姐大人
麻衣：冷漠.jpg
一木：没人权
渡边：我的神！</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦上帝视角[fn=32]</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不是阿姆斯特朗回旋加速喷气式阿姆斯特朗炮吗，完成度还真高呢</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：你可能骚断腿，而我能扭折腰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要说好累啊，要说你昨晚真棒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扭腰好，扭腰好[fn=4]</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻的发光料理，味道很棒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示下药🐶？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;招待不周！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有画面了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不舍得往下看了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;食戟越到后面越次了，打完团体食戟就看不下去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是药，我下了吃了会让人爆衣的💊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隔壁村上悠就可以做出发光料理，可惜这边的挂不一样，虽然在同一个世界</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦吼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偶撕袜子！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;药王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下💊，爆👔，在教室，还是五人行，有点刺激啊[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所学下药料理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;食戟之灵，布灵布灵…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示下药🐶？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;招待不周！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加了电脑配件的发光料理！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想听声音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻的发光料理，味道很棒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爆衣学院
我撕胖次！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;远月第一席 渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;食戟之灵</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里我就想问一下，美姬去哪呢啊？。不管管这俩人吗</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;勒字就很帅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;占有欲很强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“不如你做的好吃”</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就很甜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;任由</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;食戟之灵？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新东方</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没人看过食戟之灵？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新东方</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你舅宠他爸</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，创真第一次找极星寮就迷路了，天黑才找到，然后还要通过文绪婆婆的考验。呜呜呜，创真我的小天使</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抱着田所惠就看看[fn=9]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;而且我还泡到了远月的大小姐和二小姐[fn=4]</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;涛哥操作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：给所有牲口（后宫）打上标签印记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做完</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再次捉虫，做完。</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《关公胡说》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然还是清野懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中二悠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野已经习惯了</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈，村姑哈哈哈哈哈
煮饭婆哈哈哈哈哈哈哈</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有空一起拉屎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尿遁</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;人物刻画真的好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;温柔的小泉也会陪着渡边胡闹</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你 学姐 随时随地想着偷跑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;yyds，麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐:我就是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明日麻衣：上厕所，我也叫车锁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兴奋了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐勇敢的a了上去，学姐开大啦[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐=偷腥的猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：你要聊这个我可就来劲了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;yyds，麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你 学姐 随时随地想着偷跑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦ó</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;按北原的话说，是屁胡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丢人啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以不想看这类的主题动漫，一想到这么高高在上的天才厉害人物，连给资本做菜的资格都没有[fn=14][fn=14][fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;资本家狂喜</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嫐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怀疑是在报复之前麻衣的“我也去”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ó～～～</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我看你是完全不懂哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣:嗯？我一时搞不清她到底是不是真的要上厕所</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不要过来啊～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：原来你也想一起。。。搞？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣:老师，加上你一起上厕所的，时间就会有点长，会耽误排练的！</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;葌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神终于正视到了自己感情，并为之做出让步，否则她是绝对不会和学姐老师站在一起的。</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;三观合得来，真的很重要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;半价便当争夺战！</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野也去就不行了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦豁[fn=33]</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;薙切总帅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高中体育老师姓帅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作为总帅爆衣不是责任么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Zeon~Zion~Zeon~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绘里奈最后也是总帅..所以说...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以，渡边是大将？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;聪明 ，点赞 ，称“总帅”，没称“大帅”，要不咱凛神太扎心了，一对A，大不起  [fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好！看来凛要衣襟綻裂了！</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里很有意思啊[fn=11]美姬因为学姐老师获得优势，弥补了感情上的裂痕，现在这站位，，，，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;米拉比</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妥协了！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜老师即使结局也没吃到？</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以羽未到底有多少种炒饭？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以还是好吃的？我也要去吃炒饭啦</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;以前是九条，学姐和老师，然后是凛。渡边选了九条组。现在是凛，学姐和老师，然后是九条。
真修罗场。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四翼天使的诞生！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就地</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;8楼之前全部消失</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我没看懂啥意思？来个人帮忙翻译一下[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还没捞着饭啊，前辈们就都谋了。。</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;TMD这还用想?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;简单，抱着村姑九条大小姐一起去上厕所</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接抱过来呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木躲在旁边瑟瑟发抖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是选一木葵啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小孩子才做选择，大人都全都要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还用想？扛起美姬一起出去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的翅膀啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;断章？！他在这里，断章？？！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;修罗场，修罗场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;简单，抱着村姑九条大小姐一起去上厕所</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;TMD这还用想?</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;潜水社的生命之水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🌿，差点以为说的是大小</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总感觉这样安排是有意的
篮球＞棒球＞乒乓球
棉花糖＞苹果糖＞丸子
田径是用腿的所以卖烤肠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，老几样，日本动画就不能来点有新意的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毫无新意</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“渡边彻，十七岁，来自岩手县！！！”
“很好，很有精神！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三年级的老生说听不见就是听不见！大点声音！</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这么小声还想演话剧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好！很有精神！</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;厚葬友军！[fn=4][fn=4][fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大学生真轻松啊（bushi）</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊，美好的东京不会有鼻炎呢（bushi）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里有谁需要翻参考书呢？你说是吧，一木葵</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;静流是不是残疾了[fn=11]？我记得之前打完架后美姬把手上的最后一颗恢复药喂给了渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;保镖小姐连名字都消失了么 叫什么来着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;排排坐，吃瓜瓜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们，吃瓜吃瓜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈，想起来可能已经被打残的保镖小姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这瓜🍉，保熟吗？</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;（女）屌丝面对大现充，这种时候应该用什么表情?微笑，只要微笑就好了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，看渡边和他的后官团互动是真的甜，你说对吧，一木</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我很难理解现在过年不让放鞭炮[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手中的铅笔，在纸上来来回回……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记得那年真视界的烟火</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;烟花 九条 烟花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到了终将成为你，为了练习话剧演出然后合宿，老师买烟花来放</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🎇🎇🎇wuwuwu</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行了，别让我看见刷fy的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说这一句，很有夏天的感觉[fn=31]</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;烟火 一木葵 烟火</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵，你一个路人在这儿兴奋个泡泡茶壶呢</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;知道这证明什么吗？这证明她长胡子（狗子）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看见西瓜皮的绿色感觉整个人都不好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗷～三口一个大西瓜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是西瓜🍉，我和一木贴贴[fn=4]</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：早见桑，哆嗦～</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;下属部门换届征求本部意见[fn=31]</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边首相他忠实的秘书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;球迷，你的球星还欠你一个签名[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈呀还以为我黄大叔没戏份了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;195后，久美子就下线了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久二年连全国赛都没闯进去。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从上次美姬冬季露营的时候看见久美子之后久美子就妹出场过了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久美子连名字都没有了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄前部长万寿无疆！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久美子😭😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久美子 我的久美子[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄大叔，我的黄大叔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面忘了，我的神，久美子！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久美子，我的久美子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，久美子
我的久美子[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜我就久美子终于有戏份了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;球迷，你的球星还欠你一个签名[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄大叔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秘书的回合，抽卡！
嗯?（看了一眼）算了直接送入墓地吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连你的球星都忘了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边首相他忠实的秘书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;首相秘书啥时候出场啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久美子终于被提一下了</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;黄前久美子是当代北宇治高校最伟大的上低音号手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久美子[fn=12][fn=12]  原来还活着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄部长</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久美子，部长失格！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后银河战舰开翻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真惨，这次连全国大赛都没进</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在书里是久二年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久三年，全国金</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄前久美子是当代北宇治高校最伟大的上低音号手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄部长</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜久美子被神隐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大爱久美子[fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在已经不叫久美子了[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;誓言的终章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么历史选择了久石奏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久美子[fn=12][fn=12]  原来还活着</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;三千子失联</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神川的都是学霸？东大是想去都能去的嘛</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;虽然但是，一木童鞋也想着拼搏一把就上东大让我感觉受到创伤www</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真-你懂我要说什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞄了一个准，打死个翻译官儿～</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：关我屁事
高情商：我们充分尊重您的意见</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神和她唯一的祭司</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夫  唱  妇  随
妇  唱  夫  随</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你？那还不如玉藻好美当部长</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《当了部长大人的我把吹奏部部员都收入了后宫》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;٩(˃̶͈̀௰˂̶͈́)و</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵，你丫好好说话，咋还上手摸起来了呢</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不大行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不太行(^_^;)</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;第一桶金</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一直没反感这女的，总得说很真实，在人间。且没坏到一定程度，重点也是不丑，性格还行。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥还不放弃好美啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这应该是本书第一个和渡边有相当交集的漂亮妹子。可惜一出场就黑过头了，引起了大部分读者的反感。这里不是说她收钱当女朋友，而是指渡边花心思想办法帮她补习，她最后拿到了好成绩，却嘲笑他是乡下人的事。这情节一出，这角色已经没救了。后续出场再多，也基本只是路人甲。即使她曾经让渡边获得创业的初始积分也无济于事。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的好美，甚至还没有葵的戏份多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是十五万日元的关系么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;未曾设想的道路</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的汤姆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家根本不在乎，往不好听了说，玉藻好美骂来骂去，就是个跳梁小丑。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那可是我的同门手足，至爱亲朋
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美可是我的好朋友，所以得加钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的一木，虽然我也说不清楚，但还是感觉到你又被迫害了[fn=33]</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是很受欢迎[fn=31]</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个句式……（当然我们的决定也很重要）</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;第一个名义上的情侣而已，救命恩人就算了，顶多是有些情分在而已。
渡边给钱加上补习，还有好美背后说的坏话，早就将这点情谊消磨光了，犯不上给好美按上救命恩人的帽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种话以清野对渡边的了解应该问不出来吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;救命恩人诶，如果不是好美好攻略，身为一个合格的神秘商人能拿钱换积分，渡边在御茶之水就死了。而且还有那个山口直美，如果不是她告诉渡边关于好美的事，御茶之水前渡边都不会找到攻略对象的，也死的透透的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;估摸着因为之前玉藻“侮辱”渡边的话，她在凛这里是负好感吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作为你的初恋 你第一个马子 </p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在现实里，玉藻的种种转变算是人生的成长了。每个人都会犯错，像她这样的情况已经非常棒了。可惜是小说不是现实，在书里，她还是不能成为我心里理想的女主。要是有男二的话，作为女二号，那还是可以的</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哇哇偶～在结局每个人都走上了了不起的人生，大团圆结局嘿;-)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能自律会努力的人都了不起！——来自了不起的渡边彻</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;内涵美国日本</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然，人类观察部的意见也是很重要的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，真就下属部门呗[fn=58]</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;废话 大树底下好乘凉</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木：</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;由新首相自己组建内阁[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害一木葵</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;写的太好了</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《人类观察部从诞生到灭亡》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这么要完结了，能写很久就好了，我是指确定关系后</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再一眨眼，九条-清野-渡边彻当首相了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真巧，我社团明天为换届开会，下个月我就是日语社社长了</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;才高二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙这不才高二上学期吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们人类观察部招新么？</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美好的记忆不就是像尘埃一样，不认真看一无所有，仔细看去在阳光下徐徐生辉吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这倒不会，美姬或者凛都会要求学校保留教授原样的</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻！怎么了！没有精神！（振声嗡嗡嗡）</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;时间停止系列之学院篇   渡边与他的四位女友   手动狗头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂了，这次更新商店就来能时停的道……等等，我在说什么？什么商店？什么东西？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下一秒，「时间书签」兑换，设置解除时间：永不解除</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时停书签，到你上场了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史的车轮滚滚向前，谁也停不住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完书后看到这句话真是共鸣，总觉得美少女们与渡边彻也离我们远去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;漫无止境的八月</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕业时就想着快快独立，现在工作了回过头来看，真正无忧无虑的时候就是读书的时候，什么都回不去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听到了吗？乌鸦赶紧安排上！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时停不都是肥宅的专属技能吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隔壁那本日轻男主就能时停[fn=15][fn=15]可惜是个直男，技能要给渡边就好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不是换了五张书签吗→_→</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有个系列好像也是一男四女，在泳池[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时间停止系列之学院篇   渡边与他的四位女友   手动狗头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时间停止系列，好看[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时光停滞吧，你多么美好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂了，这次更新商店就来能时停的道……等等，我在说什么？什么商店？什么东西？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时停这种东西挺邪恶的</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“我关心的是你，渡边同学。”清野凛清澈的双眸凝望他，“你老老实实站在那里，不要悲伤，不要内疚，等我过去。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有拼命奔跑，才能留在原地</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以 不要停下来啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿上谜团，你说去哪就去哪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说好让渡边站在原地就好，自己会走过去的那，我的神大人，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怎么能说得出这句话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也知道啊?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有拼命奔跑，才能留在原地</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我关心的是你，渡边同学。”清野凛清澈的双眸凝望他，“你老老实实站在那里，不要悲伤，不要内疚，等我过去。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昭和年代的日本人就一直活在哪个年代</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去买几个橘子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还要向你走去呢[fn=43]</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说的是呢</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;主要还是清野凛吧[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你果然有亵渎神灵的想法</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻:你们都是我的翅膀啊</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;苍青之剑完美满足屑男的定义。不主动，不拒绝，却背负一切的责任[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是渣啊！（坚定脸）

我这只是对所有人负责！（内心肯定）
   
                   –––来自渡边彻内心读白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不得不佩服你啊 了不起的渡边彻 
我连一个都不敢找</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;操  总是忍不住吐槽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五等分的未来？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苍青之剑完美满足屑男的定义。不主动，不拒绝，却背负一切的责任[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太们呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是渣啊！（坚定脸）

我这只是对所有人负责！（内心肯定）
   
                   –––来自渡边彻内心读白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然算渣啊，只是渣的明白点罢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？说话的甄姬呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一世人，2.5双人[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，这算不算渣[fn=11]</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一直走下去，不要停下来啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有一个提到灌篮高手片尾曲的[fn=11]
看来上下有代沟啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玛丽莲曼森：running to the edge of the world running running away</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界尽头，多么古老。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面好像出现过，那会就说过一次灌篮了，这个不要停下来因为梗的原因更容易想到。灌篮感觉更严肃一点吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有一个提到灌篮高手片尾曲的[fn=11]
看来上下有代沟啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去找咩咩子吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和心爱的你行至世界的尽头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直到世界尽头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有部电影就叫世界尽头，挺有意思的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;教练…我有一个大胆的想法[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们走了，小纽特</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灌篮高手，我dna动了，有人能认出我的头像吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;走下qu</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一直走下去，不要停下来啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要停下来啊</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;完结了吗</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次见这样的渡边，这就是关系更进一步的变化嘛？</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;承载了乌鸦一年的写作成果，包括所有的正文章节、通知、请假、碎碎念、有一件事、特典，和手机前看书的你。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行，我觉得乌鸦欠了我好多番外，尤指新年番外后续的那种[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小说的尽头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怕我没有机会，跟你们说一声再见!
因为也许就再也见不到你～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦钦定的神，渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要说再见了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉😔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结束了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会出实体书吗 老是删减 很烦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完本了你可以天天写狗粮日常 你这10年我定10年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，如果真的完结了，真的舍不得[fn=56]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小说的尽头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要完结了哎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完本啊，真舍不得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完本</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要完结了[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行，我觉得乌鸦欠了我好多番外，尤指新年番外后续的那种[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到了第四面墙的t桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疯狂暗示啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别啊，真心难受😣😣😣，好书难求啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最近书架里的书好多完结的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界尽头等同于完本？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没当首相呢[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;承载了乌鸦一年的写作成果，包括所有的正文章节、通知、请假、碎碎念、有一件事、特典，和手机前看书的你。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在该结束时结束</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜番外多点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要啊，完全不够看啊[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜，舍不得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要完结了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要幸福啊，结局</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结撒花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要完结了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是小说写完了呜呜呜呜呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指完结(இдஇ; )</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要出现让美姬和清野发生完全冲突的事件了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为小说要完本了，自然走到尽头了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波，这波是感知到要完结了（算不算击穿次元壁）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完本？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要完结了？舍不得啊[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结局？</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;被起点和谐。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完本</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小说完结</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出书吧，我买来收藏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉是游戏结束了</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;后宫结局呢?赶紧的👀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还真没有胡言乱语</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;超监督[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心里位置的排名啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木:明明是六个人的电影</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额...五个人都有，唯独没有一木的，这也太惨了吧[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，别。</p>
`;
default:
			return '';
	}
}
        