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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来晚了[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留印</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来是在盗版看的，但是太好看就来全订了，作者加油。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;漫无止境的八月</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巧了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还在掐点的说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1
</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怕不是八月的轻井泽要写到31[fn=58]</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;满脑子都是彻的老师</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小青奈还会出现吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前讲的那个在雾中遇见的故事，青奈开始期待了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有可能，毕竟渡边每天晨跑</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;高尔夫球场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邂逅预定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师的小心思</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;身骑白马来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白马王子还有三十秒到达战场[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;估计会碰到骑马的渡边</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我想到了官场之色戒这本书，，不知道后来者有没有人看过。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;x 1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到了这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;rush B</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Roger that[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子老师你这是在抢体育老师的课[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊嘞啊嘞啊嘞～</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为什么我有了大胆点的想法？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唔～有点难受</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;场景指导：寂静岭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不一定全是人呐</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我老婆生孩子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想起高兴的事情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想起好笑的事情</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神说：谎言！</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不不不，渡边的视力比老师你强多了</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;被虐狗了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这算不算跨维打击</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;高情商:笑一笑是好事。
低情商:你是傻X吗？</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;需要我帮忙托着吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得俄罗斯体操队有个因为二次发育太大，影响空翻重心导致退役的运动员。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是这样吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;需要我在后面帮你撑着凶跑吗  我可以的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得俄罗斯体操队有个因为二次发育太大，影响空翻重心导致退役的运动员。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得我们可以称兄道弟[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巴巴托斯（no）
巴巴托凶（yes）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我来托[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我可以帮你托一会</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我可以帮你称一称</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;需要我帮忙托着吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要穿和服吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神拒绝了你的入教[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;需要帮忙吗，专业称胸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画风突然变成蓝色素稿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐我可以！</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;也就是美姬没看见</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笔记记下来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段描写之前有过，是同一个地点？</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;都舍不得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抓虫会，回</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;奇怪，我的眼镜明明不是黄色……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的眼镜是蓝光的，看啥都带点颜色</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在脑补了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可小觑的85？</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;這也太文藝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老凡尔赛了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虐狗啦啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师超可爱</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如果能让人印象深刻，韩信点兵啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要人设不重复，我觉得ok</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都可以收，随便收，可以收，都收。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我这就去打工！！！百合贴贴！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该不至于，这要是收了不是破坏了渡边纯情情圣的人设？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;收都可以收！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦桑，应该没有这么丧心病狂。。。。。。吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我先插一面旗在这里</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不就是完美爱情吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有这三点的就是完美爱情</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你今天便秘了吗？就像爱情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我听说，在每段话后面加上“就像爱情”马上b格满满。[fn=31]</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她全招了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子线番外谁有兴趣整一个?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;稳了呀
晃子你终于发现了[fn=58]</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，让他装到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;劳资一刀一个代入感，你们别想带入我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有代入感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑白马不一定是王子，也不一定是唐僧也不一定是渡边，他可能是白袍甘道夫[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;烟气中走出的白马王子
仙儿啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边杀疯了.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，让他装到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是唐僧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。可怕ಥ_ಥ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;劳资一刀一个代入感，你们别想带入我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑着王子的公主，有代入感了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑着吕布的王子，有代入感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白马王子，有代入感了</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晃子内心：这渡边真帅，以后我也要骑骑看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：我要和渡边一起骑马马
高情商：这马真帅，我也要骑骑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某不知名女声优</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：高情商：低情商：高情商
高情商：低情商：高情商：低情商</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这衣服真白，真大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：高情商：低情商
高情商：低情商：高情商</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商:高情商
高情商:低情商</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说的是马吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：我要和渡边一起骑马马
高情商：这马真帅，我也要骑骑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑马还是骑马上的人[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶，骑大马[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子内心：这渡边真帅，以后我也要骑骑看</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;花农：“你了不起，你清高”(ಡωಡ) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，花</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;又祸祸人家种的山百合</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里其实是给美姬摘的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;联系上下文看了三遍才看懂，我没救了，活该单身[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这他妈让人怎么拒绝呀？
这就是高情商？我对自己绝望了，把我摁在门缝里夹两下都想不出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高手，这是高手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《情商》</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她还是那么温柔</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=12]</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对于麻衣来说，渡边灵魂出窍，然后附在她身上是最好的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提手旁换火字旁也没毛病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因此看来麻衣追求的不是别的，是渡边的『存在』本身。渡边猫之章麻衣对占有肉体的小小泉毫无感觉，同时也不会强求，没有彻底的占有欲，麻衣身上基本不可能会有病娇发展</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不带体温的拥抱就有点吓人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抵不上渡边一个突刺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不带体温也行。到时把渡边柴了。学姐随便分点什么都行。</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这时的渡边内心还想着当初退掉给神送的玫瑰的事吧</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是体验卡东京帅哥(ಡωಡ) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是体验过东京帅哥的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师天下第一！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;向往温柔的小小泉已经成为温柔的小泉了呢</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师真好</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;奈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉青奈捧着花</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;胡说，明明第一句话就是你</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美雪老师存在感好低啊…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦、原来校医还算老师呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;体育老师：mmp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;的确没啥尊严</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;防火防盗防——</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵，不过如此</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神的分界线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;菱形</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只是一个路过的卡面来打</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在盛夏日，我把冰镇波子汽水的少男日出蝉鸣.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冰镇的波子汽水是之前渡边在跑步的时候特别喜欢喝的饮料，这里的意思代表的是他很喜欢腿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奇怪的比喻又出现了，乌鸦的风格总喜欢这种人物事做关联比喻，只要是喜欢的[fn=26]

腿 美得像 汽水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是诱人吧， 美的像 有问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夏天的波子汽水喝起来确实很有感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的皮肤真好，就像iPhone 12</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;通感啊，清凉清新的感觉，还有着迫不及待品尝的欲望，波子汽水也很有日本的调调</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是什么奇怪的比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;止渴？诱人？（夏季，冰镇，汽水）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奇怪的比喻，但又不是完全奇怪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想这样（虽然不是衬衫和牛贼裤啦，大家尽量看吧）[fn=17][fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是什么鬼比喻？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在盛夏日，我把冰镇波子汽水的少男日出蝉鸣.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想大口喝只会堵上，只能有节奏的细细品尝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少女波子汽水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦的奇妙比喻</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如果我没有开始追你，渡边彻以后怎么样都好，但经过我的攻势，却连男女朋友没做，我决不允许。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都没进</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边会不会再上场一次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:神大人，别在让我冲动勒，东京帅哥，除了女人，没有攀登同一座高峰两次的兴趣</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是单送我一人的，还是别的姑娘们都有？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上去就是一个大耳刮了，翻了天咯[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我送给你的花你也给她们了？我送你的花真给她们了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给她一巴掌看她发不发颠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛:花也一样，你也一样。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是天选，也是唯一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就知道，别人不挑剩下的也不给我。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好熟悉的话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不是嘛，都有[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上去就是一巴掌，拍在屁股上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上去就是一个大耳刮了，翻了天咯[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搁这林黛玉呢[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是单送我一人的，还是别的姑娘们都有？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神：不是唯一我不要！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就说呢，不是别人挑剩下的，也轮不到我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高傲的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是唯有她拥有的渡边她不要（很快真香）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡密撒嘛还是如此霸道呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高傲的神，独一无二的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你啊，我的神[fn=31][fn=31]</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我想知道凛会怎么出招，太好奇了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;總覺得最近劇情中，凜的攻擊性變高了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么臭男人的东西，我不要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结合上文，凛收礼物的条件是：是渡边彻的唯一。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下三个 我全点赞了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的花，彳亍
别人的花，不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只喜欢且只收渡边送的东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老双标了，渡边的可以收别人的不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛老妹，你再这么坚持败犬定了啊</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;组长怎么办</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;恰似如此？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个夏天很小，完全被她占据，她是清新的香味，她是悦耳的天籁，她是醒目的倩影，她是心底的柔软，她是永恒的甜蜜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;非常平衡</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;抓住阳光给太阳一个过肩摔。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阳光是触摸不到的，除非照在大腚上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赞美太阳!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好白的阳光</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这阳光，保熟吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神就是我的阳光
所以我要摸神[fn=4]</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;佳织才这么小，难道也沦陷了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，好想听一声 憨态哦尼酱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：这茬是绕不过去了是吧！[fn=47]</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我才发现，小莲呢。。。掉线这么久了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她真迷人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为是调侃的假话，所以凛神没在意，不然就要用看垃圾的眼光看渡边勒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛唯有在渡边身边才会笑得如此开心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;AWSL</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她真可爱</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;再给她买一个咖啡味的冰淇淋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他急了，他急了，哈哈哈</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不少次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在很多地方做过不少。[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做过的这些事正经吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后还想和你去很多地方，做</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;写不下去直接甩大纲是吧[fn=31]（笑）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是大纲？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大结局回忆杀？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是要完结了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对，美姬戏份没你多，结果你到现在还是没赢</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该是“扭头笑着看她”吧[fn=33]</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;专业人士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;KONOsei改伊娃，屋里哇麻木露</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迪迦——</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;算算时间，应该是已经喜欢上彻但还没察觉(到台风后才发觉)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“以当时我们两个的关系，只会把你一个人丢在那里。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;删掉“但是”更顺畅吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以当时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是   但是以  吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多个但是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句是不是错了</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边是在暗示是鼓掌的关系吧</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛a了上去！
《世界名画》美姬在睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边就是凛的所有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛a了上去！
《世界名画》美姬在睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是清野凛的魅力所在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么看是4个，点进来没有？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来自神的认可</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢你，乌鸦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疯狂直球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一章渡边和神的糖也太多了吧[fn=21][fn=21]</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我来组成＊＊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来把你们全都干碎[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来组成光环</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来组成腿部</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来组成躯干和手臂[fn=32][fn=32][fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来组成头部[fn=31]</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谁赞成？谁反对？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你敢反对</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;利用有过关系的女人就是方便，真让人恶心，村上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以与心里第一位有过肌肤之亲不就行了(●°u°●)​ 」</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;pua</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以你也想试试？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又搁这儿编书呢？臭弟弟！
（等一个楼下大佬把原书段落拍在我脸上）</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谎言
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新用法，确定自己内心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你跟这测自己的谎可还行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三人美姬四人凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回答了就有答案</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快进到清野凛体力不支，双目含泪，娇唇轻启：美姬救我[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜文怎么写，学会了吗?
没学会的记得全文背诵！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看出部分九条党满满的不甘心了，但真没必要，只会显得有点无能狂怒
作者已经明写出渡边最爱清野了，还要扯出一大堆脑补，编出各种限定条件来试图否认，有点好笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真该让那群家伙学学日常该怎么写，别一天到晚水字数一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边自己都不确定去说确定最爱美姬所以错，答案不是更爱清野凛而是自己分不清，除非说比清野凛更爱美姬才能分辨，所以应该差不多的爱，美姬都这样了要是还能让清野凛占据绝对的优势那就是渡边太王八蛋跟作者恶意控股了，所以清野凛最得意的底牌要没了，你再不妥协还能怎么办呢，还能那么自信吗，让渡边继续二选一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜甜的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;AWSL</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Lie to me！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：咔哒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜文怎么写，学会了吗?
没学会的记得全文背诵！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛：《谎言》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就更爱美姬，不行就再换，总有一句是真的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到清野凛体力不支，双目含泪，娇唇轻启：美姬救我[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是真话，我要被甜死了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;顶不住了[fn=11][fn=11][fn=11]</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我最爱美姬（自己不确定）谎言，所以说，清野凛判断的最爱她也不一定，因为上一句谎言的原因是渡边自己不知道所以谎言，总得来说就是美姬跟清野凛地位已经相差无几了，所以清野凛最得意的渡边只爱他也快破戒了，快来迫害清野凛～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就說了會這樣，唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边不知道更爱谁，所以说出来让清野判断。从对话来看还是更爱清野的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句也是实话</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个问题说明渡边上一句说的是真话。
在和美姬相处的日子里，渡边自己对清野和美姬的感情开始模糊，无法辨别自己更喜欢谁。所以渡边通过测谎凛才能明确自己当前的情感状况。
所以 r桑可以慌了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都还没忘呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还想拱火</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;试图挑火</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;色字当头</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这段描写r桑的心理，r桑慌了，渡边彻真有你的</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;爱情来自于时间的积累，来自于你和她一起度过的每一个日夜，至于这份爱情是如何开始的，其实并不重要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边君的复仇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高中就对家里产业有所掌控的资本家，心狠手辣我认为相当合理。合理的设定合理的故事，再加上主角也没有被虐待多少，也没刻意刀你们，不懂为什么有的人看的这么难受。
不会真有人觉得虎躯一震就让霸道女总裁倒贴吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;互相？互相在哪里？渡边对美姬唯一能称得上是造成伤害的就是对其他几位女主的爱。“她曾经对你的伤害只不过是杀死你、侮辱你、监视你、用你父母的性命威胁你；而你现在对她的伤害可是对她的不忠啊！”真经典啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一段由畸形的仇恨开始，却最终转化为甜蜜的爱恋的故事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以才说这是一段扭曲的恋爱物语</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她没有对他造成伤害的话，他就不会爱上她（这人怎么M兮兮的）</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要🔪了么  神  我的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神の预警</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：美姬在睡觉</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晴天娃娃的用处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雨后小故事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要落下这么看氛围的雨啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请联系全文分析此处景色描写的作用（6分）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;土拨鼠究竟说了什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么巧，不会是清野神做的吧？难道清野神也有系统？因为任务所以4岁开始不说谎？</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神的意志</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;跨步电压，一章带走！</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;两人被雷劈死全剧终？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;注：下雨不要站树底下，哪怕淋雨</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;躲在一颗大树下确实容易被雷劈，但是一片树林里不会。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这边，彻！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;遭雷劈，本书完</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下雨天不能朵树下，会被劈的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神好像特别开心？？</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的🌂呢，只要在下面就不会淋雨的那个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老天爷：我只能助攻到这里了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万一打雷了呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雨天，路边棚子躲雨，一男一女，这个我熟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最美的不是下雨天，是和你一起躲过雨的屋檐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《为了渡边开水晶宫所创造的世界》</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好新奇的描述方式，小本本记下了，以后写作文用[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没见过的写雨的方式，标记一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;cy</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笔记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;cy</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;cy</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这对大雨的描写比喻得绝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雨丝连成线，不过即是缘。相遇有多远？转眼已过千年。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学习一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清新缱倦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这雨有点美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;mark</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼😌😌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Mark</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吗mark</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Mark</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;cy</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦写的真的还有艺术感啊，感觉乌鸦写的真的好，自从看了这本书，对其他日常文真的挑剔好多，不过世界观好还是该看继续看的，不过这种日常的细节，乌鸦是真的强，就连普普通通的对话，写的感觉跟别人都不一样，怪我没文化，不知道怎么形容，这种对话有种看课文的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼至今未归</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;cy</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;+1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作文模板</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小本本记一下，虽然以后再也不会写作文了[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奇妙的比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;犹记我当年水平最高的时候就是这样写作文的，但现在我只会说，这雨真大！！！[fn=48]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;描写</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;nb</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龟龟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;描写雨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龟龟！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记完了点进来一看，全在说标记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记➕1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记下来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好新奇的描述方式，小本本记下了，以后写作文用[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没见过的写雨的方式，标记一下</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晴天娃娃可以用了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手动精准书签</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最美的不是下雨天，是与你一起躲过雨的屋檐</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我有生之年还能看到凉宫第二季吗[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心里没点逼数。这难道不是清野神听到了你的祈祷，赐予的神的眷顾？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这只是神满足了你的愿望。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为向清野神祈祷过了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说回来，虚神论和春日神论到底争出来没有？</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神不需要穿内衣，小背心足矣～[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蓝色，我刚认真看过了，现在告诉你们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蓝色[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边想看的果然是这个啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咦？评论巅峰再创新高？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雨恋[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;醒醒，飞机都能起飞了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？为什么会有这么多一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蓝色，我刚认真看过了，现在告诉你们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以什么颜色啊[fn=31][fn=31]蓝色[fn=39][fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;濡湿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雨后小故事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我康康！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啥颜色？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神不需要穿内衣，小背心足矣～[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;湿身诱惑</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神降临我身边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看腿就行了[fn=4]</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真是急性子啊你[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老实点[fn=58]
别想跑[fn=58]
冻结吧[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老实点，只准摸腿</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是啊！没有更漂亮的，但一样漂亮还是有那么几个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边转过视线，默默在心里加多一句，“除了欧派。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被神之美击穿了心脏，动摇了神智
终于忍不住说出了心里话的彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;kiss就投币，拒绝白嫖</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可爱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;段友之多，无须言语</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的好色，一样坚定</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;八月飞雪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还以为少看了几章，结果是在说情话[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听听这本不该存在的过去吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两天前，八月十六日，舍不得学姐走，花钱包场把整个吹奏部都拉过来了。</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;比企谷和雪之下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木屋，下雨，草莓100%
东城作为罕见的黑长直败犬
真爱最后输给了日久生情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听听这只在两颗鼓动的心脏之中的时间吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;风太郎和三玖是吧？
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北海道、木屋、躲雪......</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是电视广告哒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是过往</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;从前有座山，山里有座庙。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界奇妙物语</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;套娃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生动形象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不存在的回忆，增加了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;何当共剪西窗烛 却话巴山夜雨时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两年后</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好意识流</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对我说话吧，只要你在我面前，我就感到幸福</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一滴雨水约等于0.05克，一场中雨的日降水量为10-24.9毫米，按降水面积五百平方公里估算，下八小时，大概一场雨有五十万亿滴水。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我警告你，你不要跟林北讲无聊啊，干腻耐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看好?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我对你的爱有多深，雨就有多少滴[fn=4]</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;根据近期的哈勃超深场项目结果，宇宙大约有两万亿个星系。按照平均质量估算，假设每个星系所拥有的恒星数量为100亿颗，那么，可观测宇宙中的恒星总数为200万亿亿颗。另据估计，平均每颗恒星拥有一颗行星，所以行星总数也为200万亿亿颗（2×10^22）。</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;又见三个一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;综上所述，一个是五十万亿数量级，一个是两百万亿亿数量级，完全不在一个层级</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了喜羊羊与灰太狼虎年电影，沙子和星星</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;循环论证大法好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙  搁这搁这呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;禁止套娃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你搁这搁这呢</p>
`;
        case 178:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这人设，啧啧，找男人浪费了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的话我觉得可以理解为，我们的人生遭遇暴雪疾雨之时，希望你永远在在我身边，一起躲在自己的小天地里，谈论着未来和过去如此时一般无二的点滴时刻，只要这样，就会感到幸福了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这很了不起，非常了不起，能这么长成不动摇的人，哪怕是去追寻仙人道，也一定会有所成就的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一句话击中内心，让我前几章对清野神的动摇烟消云散</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果没有渡边，这世间就只有清野遗世而独立</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所谓神，难以追赶之人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从公元前五万年起至今，按照估算（早期）和历史记载（现代）出生率和婴儿死亡率曲线计算可知，古往今来地球上一共出生过大概一千亿的人类。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这样挺好，和渡边维持恋人未满的程度，一直陪伴在彼此身边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我真想不出来怎么破局了。清野最令人着迷的点就是她坚持着做自己，这点也是渡边最爱她的原因。但承担着三个人责任的渡边无法改变，如果她不改变，那结局该怎么he呢。
而且清野说过 站在原地等她过来。那她什么时候才能改变呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的话我觉得可以理解为，我们的人生遭遇暴雪疾雨之时，希望你永远在在我身边，一起躲在自己的小天地里，谈论着未来和过去如此时一般无二的点滴时刻，只要这样，就会感到幸福了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边说的那段话要怎么理解？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只剩一个三楼了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么多人 我只喜欢你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古往今来，人们都是一个样，不同却又相同。
可是这位名为清野凛的少女，独一无二
就像冬季露营时渡边说的“明知道被人讨厌，却依然坚持自己的人生道路，绝不去编造谎言，这样的活法我一天也坚持不下去，我佩服她的执着，羡慕她的品格，向往她的勇气”
向您致敬。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去。。。三个一楼了。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这人设，啧啧，找男人浪费了</p>
`;
        case 179:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你给我一个微笑
我在水边想
小鱼儿游来</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;虫子:可恶，我也想避雨啊！</p>
`;
        case 182:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;圣女可以被侵犯，但神不能。懂了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圣女是侍奉神的，而刚才渡边说了什么呢。[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有这个技能，是不是以后不怕蚊子了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虫子是直接飞走还是先落地然后滚着走？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;安敢在此饶舌？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圣女是侍奉神的，而刚才渡边说了什么呢。[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圣女可以被侵犯，但神不能。懂了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圣女？咋还降阶了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里运用了借代的手法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论总是移位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;显示2，却一条评论都没有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然不是神！？</p>
`;
        case 183:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如果清野凛和渡边在一起了，我应该会遗憾，但他们如果不在一起，我会更遗憾。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，我的神</p>
`;
        case 184:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑的是她的双目，细眉，和微微漾涡的嘴角。
明艳如碧波。
嗤嗤的铃音
朱唇的小隙里藏。
那是笑
神的笑，美的笑，
天的倒影，雨的低吟。
笑的是她微卷的鬓发,温顺地垂在脸庞。柔软如花蕾，
浓浓的蜜意，
漫入你的心窝。
那是笑
诗的笑，画的笑，
风的轻抚，湖的微波。（非原创🤗）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不等月底有没双倍勒，30章月票奉上，凛，我永远的神

渡边不愿意你改变，只希望你改嫁(从九条家转渡边家)[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此中蕴含的东西值得细细咀嚼啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想看不成的结局，女主就这样子感觉也不算be啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;章说总结的很好：很美好但不现实，如果清野不改变，那么终将这样僵持下去没有尽头，得不到自己平凡的幸福。如果清野改变，她的完美就会产生裂痕，回归普通的女孩。看乌鸦怎么处理了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然不承认。但是渡边就是抖M，这样的清野才是渡边永远的白玫瑰！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很理想也很不现实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不等月底有没双倍勒，30章月票奉上，凛，我永远的神

渡边不愿意你改变，只希望你改嫁(从九条家转渡边家)[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管别人怎么办，我都不会对你放手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么说，很美，但是不现实。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了珂朵莉。不管别人怎么说，我一定是最幸福的女孩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当神爱上人，神也就不是神了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢神不就是喜欢她那独立于世的坚持吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑的是她的双目，细眉，和微微漾涡的嘴角。
明艳如碧波。
嗤嗤的铃音
朱唇的小隙里藏。
那是笑
神的笑，美的笑，
天的倒影，雨的低吟。
笑的是她微卷的鬓发,温顺地垂在脸庞。柔软如花蕾，
浓浓的蜜意，
漫入你的心窝。
那是笑
诗的笑，画的笑，
风的轻抚，湖的微波。（非原创🤗）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是这样挺自私的。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是高傲的神，自我的神，不会为任何人而改变的神真的能够企及到凡人的幸福吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是凛！</p>
`;
        case 185:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你是在万物之上，你是通晓一切，清野凛 你是神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一眼就看出你不是人，大胆妖孽，我要你助我修行[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一眼就看出你不是人！大胆妖孽，我要你原形…对不起，走错片场了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她 在一切之上是她 清野凛 我的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天气之子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛
决心，立于天之上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就离谱，真成神了？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，天气之子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;言 出 法 随</p>
`;
        case 186:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就像清晨菜摊上刚浇过水的青菜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;资本家的女儿就是水灵[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吻上去</p>
`;
        case 187:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;果然，比起美姬，清野的内核更美丽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凶是一個扣分選項。沒有人心，就算平了天下也會很快敗亡。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想，无论她是成为清野神，还是做清野凛，我都会有遗憾</p>
`;
        case 188:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这句话只有花样年华的女孩才会也才敢说。多少曾经的女神，在年华逝去后才暗暗神伤当年的清高孤傲以致错过的人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结局已经揭晓</p>
`;
        case 189:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这波是，美姬有意改善修复与清野的关系，只要清野愿意做小就可以与她共侍一夫，但清野要“不管别人怎么说都要做自己活下去”也就是不接受共侍一夫咯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典一手好牌打个稀烂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是爱，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边就是太爱清野了，如果一直这样维护清野的话，九条和清野关系不可能和好。想要清野改变从而改善两人关系，但一看到清野又忍不住支持她，事情陷入了僵局</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬又双叒叕要让步了[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点胃疼，。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波是，美姬有意改善修复与清野的关系，只要清野愿意做小就可以与她共侍一夫，但清野要“不管别人怎么说都要做自己活下去”也就是不接受共侍一夫咯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远是你的信徒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典一手好牌打个稀烂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行啊 你这样盲从凛谈何改变 怎么能制造神的错误让她道歉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谜语人滚出哥谭市</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛彻糖吃饱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜啊</p>
`;
        case 190:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你就是语文课代表吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛打断了彻准备说出的话，所以雨停了。但是雨滴还会落个不停，因为凛不会改变自己。凛啊…再这样真要成败犬了啊[fn=14]</p>
`;
        case 191:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：这章写了个啥？
高情商：过度章。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大胆的想法：渡边性转，变成这样就可以在一起啦（纯属私心）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我所爱的，你所爱的，是什么呢？
清野到底会迎来怎么样的结局？妥协抑或坚持？哪种结局可能都会带来遗憾吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果与你在一起将使得我不再做我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浪漫的画面感
这段有言叶之庭内味儿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告，最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肚子拉不出来，向神祷告可以拉出来[fn=47][fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;非常喜欢乌鸦这种托物抒情的写法，真的太神了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实也就几章没怎么吃清野神和渡边的糖，但这章看完还是有久违的喜悦，可能真的是太喜欢清野神孤高的道路，以及能有灵魂完全相通的另一半这样吧[fn=52]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人间神明，唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感情上永远都是美姬妥协，仿佛在作者笔下美姬只是工具人，渡边和清野才是绝配，美姬第三者，如同作者早期说的，只有清野凛是女主。我总算理解当初那些人的感受了，盲猜结局，清野发生意外，美姬救了清野，但是受了伤，然后清野道歉，美姬允许一起。总是美姬在让步，清野就绝不妥协，不知道为什么有点讨厌这种人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：这章写了个啥？
高情商：过度章。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完了吗?好看吗？好看就对了！好看就会觉得还想看，会觉得看再多也不够，就想让乌鸦大大加更、多更、爆更！
但是他就是没啦～
是就是没有啦～
就是没有啦～
是没有啦～
没有啦～
有啦～
啦～
～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个文笔真是绝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羡慕不来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野让人佩服 却微妙的喜欢不起来 可能是因为深知凡人的自己永远也无法理解她的境界吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱军，晚安，我们明晚见</p>
`;
default:
			return '';
	}
}
        