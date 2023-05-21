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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫不及待看到一木的表情了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家都很快啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哔哔哔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ki da！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;慢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦豁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;带着几袋青桔回了别墅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那完了，麻衣学姐起不来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的学姐，几句就说完了</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;等你回来收拾[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万里长城今犹在，不见当年秦始皇</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夏天的栗子树的味道可不怎么样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吊床里的神醒着[fn=4]</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;追着看好难受啊，不追着看又怕和谐，我好难啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和朋友一起去搞板栗，都还小，棍子不够长，他爬树上拿棍子去打下来我捡。我灵光一现想到似乎可以把板栗震下来于是往树上狠踹了几脚，之后被他追了半里路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;md，我想到小时候碰到基本都会用脚踩开，看看里面有没有果实，有次穿的那种特别轻的凉鞋，也薄，一脚下去扎到我脚底板了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一砸就是一个大包</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;I love it when you call me senorita</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自动脑补了，感觉已经有画面了，感觉很优雅纯洁</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛：爽完了就来找人家了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好好学一下这种描述妹子的比喻，泡妞有机会用上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先生</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;也就是说出水了吧[fn=63]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也就是说在融化！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论区居然没有百年孤独？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冰在太阳的照射下熠熠生辉
冰在太阳的照射下会化掉的。
那么太阳是谁呢？
[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的有辣么平滑么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也就是说出水了吧[fn=63]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;遇到渡边就化了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也就是说在融化！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舔一舔是不是会把舌头黏住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;cece，好快的cece</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舔一舔全是水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;融化了都是水</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;毛豆是最棒的下酒菜，夏日炎炎配合冰啤酒，简直是绝配</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要是冻豆腐的话，整个鳕鱼冻豆腐贼下饭</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正常体位就行了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的第一次！[fn=4]</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;强如你也需要补呢</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里居然没有评论，惊了
“小凛和美姬和你在一起”是不是意味着九条太太认可了可以共夫了[fn=36][fn=36]</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;很好</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;奥匈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二元帝国是吧，梦回哈布斯堡，我弗朗茨又回来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：还有这种好事？我TM当场改姓！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要什么渡边，清野-九条好吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两人未曾设想的道路，渡边渴望已久的道路，最终在太太们的推动下进入了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羁绊纽带（共享平台）渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁生的随谁姓，学姐和老师的孩子姓渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边·清野·九条彻</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;姐妹在渡边的高压下和好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杆姐妹[fn=33]</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太的手指[fn=21]prprprprprpr</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这声音脆啊，啪啪的</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到这张[fn=58]</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;少了 连我们两个人妻都要喜欢你了。</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;才能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被当作过棋子的折木奉太郎认同的点了点头……</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还有一点是真的喜欢(太太乐！太太乐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂了，但没完全懂[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;¿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太烧了太烧了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼二楼又没了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;聊共享亲夫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;聊九条清野两家合并事宜[fn=4]</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太太，嗯~~</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在工作》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是美姬不在家那就……嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家外彩旗飘飘，家中红旗不倒[fn=4]</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;深情而又滥情？</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有他那麼完美那麼負責的男人，也贏絕大多數的正常男人了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥（*/∇＼*）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥的必备条件就是随时准备被捅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是渣一点好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;负责的渣人和不负责的老实人？有人来玩2选1吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我……算了 我就是一个老实人（哭）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，确实，没有比渡边更负责的渣男了</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是他，在所有一切之上是他，我的神，国井修</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拱火の神——清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野幽子（）</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只能两个人啊?那我把渡边彻的名字涂掉了哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬X清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然美姬和凛才是众望所归，T桑还是乖乖给R桑K桑让位置吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美国犹他州去一下？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先和美姬结婚，然后离婚。然后和清野神结婚，然后再离婚。最后和前妻们快乐的生活在一起。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬和凛 这样子谁生跟谁姓 不用为了姓氏是渡边还是九条/清野烦恼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很难不赞同</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边成为首相不就好了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;修改法案不就行了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬和凛，渡边和国井，完美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能kr吗[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那不是还有養子縁組吗？更刺激</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬 囍 凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不如把渡边车一分为二，美姬凛神各有其一，然后美姬凛神在一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边？不认识的孩子呢[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬X清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只能两个人啊?那我把渡边彻的名字涂掉了哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那写美姬和神不就完事了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;婚姻书上有美姬有凛，然后只有两个人，那么问题来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到登记的时候和国井一起</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怕不是打算不结婚哦[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;销售？
下手🐶</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一脸骄傲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;理直气也壮</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;反了反了</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;完了 我想起了 宇都紫宫苑的那一部作品 穿着围裙 快递员 啧啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是想解锁围裙ver吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但愿是我想歪了</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这应该是信任</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个“做”我怎么越看越不正经</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典激将，老家主了</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;过程挺下饭的，就是最终作品不怎么下饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始下厨了</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;oui chef</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道为什么，一看到厨师长，我就想起了纸包鱼[fn=51]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;血色修道院</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;yes chef</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;厨师长来条纸包鱼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剧情play</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘶～（吐了俩烟圈）[fn=49]</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该叫磨/爬回旅馆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要开始了，嘿嘿嘿嘿嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果沒有洗過澡，身上殘留的味道就會引起注意。但如果洗過澡，身上不一樣的香味更會引起其他人的注意。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了，要公开了，要虐一木葵了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这单人视角就是睡觉吗………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是从来没有过的麻衣单人视角啊！爱了爱了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;战况激烈</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;额，终于有叫一木名字的人了</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;经典p动物鼻子</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只有呼吸？[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是灼热的青莲，我是唯一的美。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到喷字的时候就已经有画面了，呼吸？什么呼吸？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个“的灼热呼吸”删了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我承认没看到第二行的时候我想歪了[fn=37]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我居然下意识忽略了 呼吸 二字，我还有救吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚出来确实有点烫，但冷的很快（吃火锅）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只是呼吸嘛[fn=58]</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;气抖冷一绿葵什么时候能站起来！[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害开始了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连被绿的机会都没有，可怜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始迫害！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空中楼阁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经开始期待了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，我从中期就开始期待的名场面要来来了，哈哈哈哈，快点迫害[fn=8][fn=8][fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是一木绿吗？怎么这么拉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;气抖冷一绿葵什么时候能站起来！[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你复活🌶️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于来了，一木！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害开始了吗</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只要是渡边的我都会接受[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起渡边对她的嘱托了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;量大管饱</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈学姐[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小孩子去公园玩，大人去旅馆玩。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木！快跑！前面可是深渊啊ಥ_ಥ！</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说起酒店，你只能想起这个吗？</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;傻孩子，快跑啊！</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐不给力没说服麻衣啊，纯爱战神8体力建议换智力。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我老早就像迫害下这个花田了，贼想知道这花田去BB渡边的时候，渡边女友们在旁边若无其事的继续跟渡边恩爱的情节，想想就有趣，花田跑去搞事然后纯爱战神看到美姬无所谓的阿巴啊巴啊吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱战神眼神犀利了起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱党被拉出来鞭尸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花田学姐是知道麻衣和渡边的事的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花田学姐老是发现些不得了的事情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发现了</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要来了要来了！</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好美是处女这点乌鸦没在书里说过，只是在群里说过，不过现在也不影响剧情啥了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯情碧池好美酱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边虫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我是虫豸，好么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边蚊子:对，我咬的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你现在看到的是本书唯一指定真败犬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是个假的海王！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;表面上是碧池实际上是利用自己的情商获取男人金钱却不交出自己身体导致在某些方面意外清纯的绿茶设定啊，常在河边走哪有不湿鞋，这种设定不是用来给主角开后宫就是在本子里被主角或黄毛破防[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次的辣妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摊牌了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美我啊，啥都不懂呢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯情碧池好美酱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美是处女这点乌鸦没在书里说过，只是在群里说过，不过现在也不影响剧情啥了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美不是很多男朋友嘛，这都不知道。误会她了[fn=19]。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边虫（ 确信）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不行(▼皿▼#)，我要看到一木葵被迫害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：感觉有被冒犯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻（x）
渡边虫（√）</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？？？[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心形屁股get！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摸一下肯定很Q弹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好尻，不知谁来弹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我打肿的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！好像拍一下这屁股</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欲取圆臀弹，恨无渣男赏。可惜了大好的屁股</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说个不敢说的事情，男性也会有这种情况</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马上就要迫害了，有点小激动[fn=9][fn=9]</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只对一个人变态的变态不算变态，那是真爱。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正是败犬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;专一的百合？</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“讨厌，别看，不然我就告诉xx了”玉藻好美象征性抗议一句，没去管裙子[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美，呜呜呜 我真的好喜欢好美</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个梭画面感太强了，我想笑。</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大的💊来了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边何德何能[fn=49]算了，只要不让新海诚，老虚，🖤🍄执笔，就好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然是不打算没说出来呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻的印记 </p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太搞笑了，我都等着笑死，这边已经摊牌了，三人组却连辨认这个的杏知识都没有😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐dd头子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的麻衣也一样的体贴啊，觉得会给渡边添麻烦而不公布关系。
麻衣！我的麻衣～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这可是爱的印记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三个单身狗</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣，我的麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;依然不想给彻惹麻烦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐不想给渣男彻添麻烦，什么绝世好女人</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哼！前天42度，今天十几度的福州笑了，在医院发的烧的我也笑了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;才36度，这么凉快的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想想武汉的夏天，我想死</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢一木葵这种性格</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好臭阿！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯哼哼，嗯啊啊啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯哼哼，啊啊啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能下几章就要真哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太臭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑补以撒里的哭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恩!哼、哼，哈！呵啊！啊~~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不对劲</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神川没有普及空调吗？</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我要喝椰子水，我不管，我要喝椰子水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对一木葵发动“绅士突袭”和“暗影劫掠”。</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;轻、轻一点</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;现在是不是管这个叫爸爸活[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;8点的魅力选择去当碧池……唉，可惜了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书书友普遍对好美的恶意有点重</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无论爱恨都不想在在意的人前表现狼狈的情感有什么值得批评的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怕是高估了自己……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唔～</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老双标了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝世好女人不宠她宠谁！</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好美吃🍋</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;草女士的耳朵贴了上去（无端联想）</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;万恶的钞能力</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;✌</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她好可爱.</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她还得跟我们说谢谢呢.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木真是，不知道说啥好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想起高兴的事情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果换个性别就变成苦主向黄毛道谢…一联想起来就格外生草</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的孩纸，都不知道自己在谢什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苦主一木即视感[fn=46][fn=46][fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢（xiè）谢（xiè）嗷（aó）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;道歉不露出胸部算什么道歉啊喂！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢你  泰罗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边本山：过啥分，他还得谢谢咱呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她还得跟我们说谢谢呢.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木真是，不知道说啥好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵，你知道你谢了什么嘛！！！你的学姐又要补觉了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢你，国井！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此时一木还没有意识到发生了什么</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老实说，老是这么哼，看得上的觉着可爱，看不上的不但没有感觉，甚至有点厌倦</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就知道欺负好美[fn=4]</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是玉藻好臭啊，还是田所好美啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼哼哼啊啊啊啊啊啊啊，嗯哼哼啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;傲娇已经不适合这个版本了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱！！好想迫害啊（bushi</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;蠢而已，算什么单纯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟开局的人设不符啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美确实是挺单纯的呀，说做一个月的女朋友就做了一个月的女朋友</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会不会其实这件事情是假的（为了钱而～）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻跟出租女友差不多啊，都是拿钱当女友。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原本一开始的时候我以为她是有钱就能上的贪钱公交车，但如果去上面评论所说还是处女的话，那好美还是挺单纯的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要么改前文，要么一直感到别扭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抛开开始的设定，玉藻也还蛮可爱的</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个B渡边还是要装的[fn=4]</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我家清野幽子部长说的</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这次是“～”了哦  不是“！”了 哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼哼哼啊啊啊啊啊啊，哼哼哼啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，那没事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬的矜持[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美是清野神的迷妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈 哼╯^╰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美酱～可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美有趣</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;额这学校不是都挺有钱吗</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;已经不需要再遮掩什么了，直球入场！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小嘴挺甜啊，用签到美姬的钱用的挺爽啊[fn=32][fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木警觉！</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要完结了 哎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有预感，系统任务就要来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，渡边渣你终于想起小泉老师了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hjh，终于想起老师了，这波聚齐了所有人是打算召唤神龙么？</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;重点是6×9=54啊。包括麻衣学姐和老师55个人，险恶用心昭然若揭啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一间房一晚8000多，贵啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：这点钱甚至不如一对耳环值钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多一个人，正好单独给学姐开房[fn=8][fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;住宿太贵，所以日本才会有网吧难民</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一间房一晚8000多，贵啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重点是6×9=54啊。包括麻衣学姐和老师55个人，险恶用心昭然若揭啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个算的时候可以1:10先换成美元，在按照1:6.6换成人民币会简单点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;243,810</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人民币24万。我刚搜的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大概28万人民币</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蛐蛐30w</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有钱真好。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是我不懂讨怎么女孩子开心…而是讨女孩子开心的方法恰好需要钱，并且需要很多钱థ౪థ</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;钱是王八蛋，可他是真好看</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好惨一一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑化吧一亩葵！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刀迟但到！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经在笑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：学姐的快乐，由我来守护！（摸上渡边的床）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好惨一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木快跑，前面。。。可是深渊啊！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在笑了在笑了[fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扎心了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦！盲生你发现了华点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好惨一一木</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怎么没评论呢？</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咋就是不说出来…等着学姐说啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我好急啊(✪▽✪)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想看迫害一幕 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我想看一木葵败犬的样子</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;葵宝(ಥ_ಥ)，咱是好孩子，咱不跟这些浪同学玩儿～～葵宝快过来，麻麻爱你～～
(ɔˆ ³(ˆ⌣ˆc)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木的警觉</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱战士正在蓄力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱战神 今日就要手刃渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱战神正在蓄力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在体力值满的渡边应该不怕了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪力萝莉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;体力值为8的纯爱战神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拳头硬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;葵目前犯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;硬了，拳头硬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱战神之杀意[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八力少女[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花田：我嗅到了牛的气息</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：笑死，根本不痛不痒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;硬了，拳头硬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会以为她打的过渡边吧，他怕不是要被渡边秒杀吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱战神可是天生怪力。
要是以前3体力的渡边，一拳被打死毫无问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;战斗力高达八点的纯爱战神即将一拳干碎渣男的天灵盖[fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然发现如果下部女主类似有类似设定也蛮不错的，我xf起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不看了，我水开了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱战士：花田朝子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里是纯爱战神的地盘！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曾经很怕你的体力8点小拳拳捶死我，不过如今我渡边已非吴下阿蒙，放马过来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷渣的就是纯爱战神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重拳出击！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;硬了，拳头硬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个楼层有毒吧，前几楼都重复了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差点就忘了这个精神洁癖了(●—●)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;硬了，拳头硬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;硬了硬了，拳头硬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱战神 今日就要手刃渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;👊硬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱战神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱战士正在蓄力</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;55个人，一个房间6个榻榻米，9个房间只有54个榻榻米。嘻嘻，少了一个应该在王子酒店吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们三个挑房间，麻衣就不用挑了～</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵内心的怀疑在这一刻汹涌成蚀骨的怒火，浓烈得好似硫酸般的嫉妒在胸膛里蔓延开来，被怒火吞噬的可怜女孩，额头和腋下冒出的冷汗却冰凉黏湿。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是大人的世界</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冠冕堂皇的理由</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;纯爱战士，就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫：已经</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木都能看出点什么来了，然而“单纯”的好美还啥都不知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木终于发现事情很不对劲。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但凡一木是个男的，被拒绝，麻衣冷淡的处理还这么赖着找个人骂癞皮狗之类的了，也就是个女性角色占优势还能缠着学姐，靠着学姐无所谓还能强制掺合来，所以说：气抖冷，男人什么时候才能站起来～（后面的不知道）[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说白了工具人就是出来逗个乐的，哪有什么属于角色的性格</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;烧水！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：请打开麦克风交流</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有援助人设的玉藻这么单纯么，人设前后差别有点大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柴刀在手，杀心自起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水开了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手持利刃，怒上心头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;⏩️⏩️⏩️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木都能看出点什么来了，然而“单纯”的好美还啥都不知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木可以去烧开水了，我柴火都给准备好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你已经懂了啊，一木[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘶，鲨疯了鲨疯了</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笨蛋渡边，学姐根本不在乎梨花，只是不想给你添麻烦而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到时候姐妹相见会不会是她妹妹先泄露姐姐“被包养”然后渡边出来承认</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么看不懂这段话</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣也不急着宣誓主权了啊，好像认命了。开始维护渡边了</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐重复着的“嗯”跟以前对渡边说“彻说什么了吗”是一样的，看似敷衍的样子，可那想跟爱人多在一起久一点的意愿也太浓了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后的最后，想说一木葵被迫害了，但没有被完全迫害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真要感情戏还得看第一人称。不过第一人称的小说太少了（太难写好了）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉学姐的爱太唐突了些，性格鲜明，但感觉不丰满</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没了，前面都阵亡了[fn=56]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐重复着的“嗯”跟以前对渡边说“彻说什么了吗”是一样的，看似敷衍的样子，可那想跟爱人多在一起久一点的意愿也太浓了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道为啥我一直不太看得下去学姐和老师的戏份，只对美姬和清野的剧情感到津津有味</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木没有被迫害到，可惜。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;攒的章看完了。吧嗒一下，我人没了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欢乐的时光总是短暂的，朱军，明晚见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后的最后，想说一木葵被迫害了，但没有被完全迫害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=58][fn=58]短</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安了[fn=45][fn=45]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我操，明明都想睡了，又来看了一遍</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;开个发表会装一波，好久没看到让世界低头的渡边了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐情欲未免太强了些。不过渡边也是猛男，不像某些小说女主几千万字战力，男主才几百万字战力[fn=10]</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就亿会儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就蹭蹭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一会儿，是他快还是你快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就一会儿[fn=58]</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么小三小四，都是我的翅膀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让小三去接小四？？？？</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样的学姐谁不爱。</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哎……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟一木她们摊牌得了，多有趣啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶嘿～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;负责的混蛋！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次和麻衣学姐在一起的篇章都太温馨了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想必女孩子都是由砂糖，蜂蜜，香辛料等美好的事物所组成的吧……[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长发飘舞，深吻期间，恋人渐远，心致永恒</p>
`;
default:
			return '';
	}
}
        