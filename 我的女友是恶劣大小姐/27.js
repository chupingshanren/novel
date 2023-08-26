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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;副标题:一木和他T的后宫们[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来咯来咯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶嘿我就知道他要请假，这章屯到今天看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成了，忽然抽风(~_~;)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来咯来咯</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;长得帅就是可以为所欲为，不然服务员嫌你多事，向菜里吐口水什么的并不奇怪。（ps:建议大家因为菜品里有异物让餐厅重新做的时候，可以在偷偷汤底丢一枚硬币，防止在吃到同一道菜）</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬 我的护夫宝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条•护夫宝•美姬：我的渡边只能我欺负</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝，我的渡宝👋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬！美姬！我要你！
给你！全部给你！美姬的全部都给你！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的美姬已经成为他的形状了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;护夫狂魔[fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱了爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想看女x女[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条•护夫宝•美姬：我的渡边只能我欺负</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打起来打起来？！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;修罗场（确信）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬 我的护夫宝</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京23区</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻婆豆腐放草莓了么。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长江鲥鱼是真的好吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个菜单怎么有点孤独的美食家那个风格</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边这是让美姬走出原来的狭隘圈子，更加真实的体验这个多彩多姿的世界，非常亚萨西呢</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥能够提供美姬一天所需的蛋白质及脱氧核糖（赵忠祥腔）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高端的食材，往往只需要简单的烹饪，即可……[fn=31]</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你们可能会赢，但麻衣肯定不会输</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：清野神都不能欺负彻，我说的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=24][fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：谁都不可以欺负彻，我说的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶 给学姐比心！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣赛高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：清野神都不能欺负彻，我说的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后宫齐了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们可能会赢，但麻衣肯定不会输</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;护夫狂魔明日麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖yyds</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怎么就看成了奈雪的茶</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;修罗场噢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我开后宫不在乎好不好看，反正都没有我好看[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明麻衣也是魅力8的啊，为什么只是清秀啊</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真拿你没办法[fn=15]我来帮你托着吧…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在现场，我是桌子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商；我想看黄图
高情商：她把胸搁在桌上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神觉得很淦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神觉得很淦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全场MVP：美雪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们这样搞.....我只好打开浏览器了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上桌子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二楼的图没了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让人感到头大. jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桌子：好重啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？；</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真拿你没办法[fn=15]我来帮你托着吧…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在现场，我是桌子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也可以搁在我脸上，我并不会觉得被侮辱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上图</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你的姐姐大人不能骂渡边了吗[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想划分阵营了？</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;且慢！灶台是不是没有换新的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男友力Max</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一语双关啊999，6翻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是翅膀吵什么吵</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大妇的威严</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;果然是修罗场!</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，我直接好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;顶级修罗场</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小老妹儿你这样会失去你心爱的麻衣学姐的。
哦，已经失去了啊？
那没事儿了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野同学也在离你远去。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木同学，想死的话，不用这么委婉，直接说出来也没关系的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬最后的倔强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木同学，你是不是觉得活的太厌烦了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二天一木因左脚踏入学校而被开除</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野同学也在离你远去。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小老妹儿你这样会失去你心爱的麻衣学姐的。
哦，已经失去了啊？
那没事儿了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就像英梨梨对由比滨结衣说我支持你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬组合[fn=3]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拱火小老妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;根本不明白形势的你[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是让花田朝子来吧，会比较弹牙</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬 我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈
哈哈哈哈刀哈哈哈哈哈
哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬大人好可怕，不像我（麻衣）只会心疼彻彻~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈还哈哈哈哈哈哈</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“我骂渡边就够了，你有什么资格骂？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就你不是后宫了!一致对外jpg.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一家人吵架的时候，你上去挨揍吗[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她们一家人说话，你个外人掺合个什么劲？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来小丑只有我一个人🤡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常任务迫害一木1/3</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木同学哈哈哈太憨了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你一个外人在我们一家子讨论家事的时候插啥嘴呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：看吧，这就是说东京帅哥的智慧，后宫内部矛盾不好解决就引入外部势力，最后大家一致对外，问题就不是问题了。别问我怎么知道的，前世可是在红旗下长大的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成功的吸引了火力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;食物链压制
有你啥事儿啊？
小老妹儿[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们调情，和你有啥关系？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就你不是后宫了!一致对外jpg.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小老妹，你干啥呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神仙打架，你个凡人掺和什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有小泉老师没一起迫害一木，我的天使</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害一木葵（1/1）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我骂渡边就够了，你有什么资格骂？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，又在迫害一木葵
委屈巴巴</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我都忘记还有一木了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每样都能尝一口，是渣男没错了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画《一木在吃烤肉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说，一木为什么要同意聚餐？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我没记错的话一木还在</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;道歉要露出肚皮哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然让一木进来就是用来迫害的，加大力度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好熟悉的画面……
像极了对清野秒怂的渡边
果然一木是男版渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拱妹那塞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好惨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十年一木粉不请自来 万恶的渡边黑暗势力总是迫害一木 太过分了[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完成日常，迫害一木[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;收手吧一木，外面全是渡边！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 还搁那打拳呢臭妹妹[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无关人等往后哨嗷[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;私密马萨！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心疼一木[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;局外人啊一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;道歉要露出肚皮哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然让一木进来就是用来迫害的，加大力度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害一木，太惨了[fn=19]</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没油了（隐身）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;修罗场就隐身的屑[fn=4]</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不得把国桑叫来一起吃？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害一木葵，哈哈哈哈好惨一女的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木——！</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太惨了，这一章一木会被迫害几次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邹忌讽齐王纳谏[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后一个没有能力是最骚的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真就疯狂迫害一木同学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再次达成只有一木受伤的世界</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：そう、私です!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：“喵喵喵?”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邹忌讽齐王纳谏[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太惨了，这一章一木会被迫害几次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱你，所以护着你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：没错，正是在下</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=24][fn=24][fn=24]</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是……女舔狗在线乞求？</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;致命一击！-999999</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;悲 一木 悲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暴击了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要再迫害一木了，一木是无辜的！痛心疾首。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好惨一木葵[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;致命一击！-999999</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵卒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害一木</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太惨了，多来点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天也是败犬呢</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木：我可以说脏话吗？
那我没什么好说的了[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小姑娘还是要坚强一点，不就是学姐跟人跑了嘛[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小小的一个(嗯)字伤害那么大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有能力一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木“阿吧啊吧？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：我来到了什么地方啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵:阿巴阿巴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害加一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：老师？？？您也是？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放弃思考</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震撼一木一整年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：“那我走？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我真傻，真的，我从一开始就不该来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵：“……我是个傻子”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小丑只有我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么！在坐的都是！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：我可以说脏话吗？
那我没什么好说的了[fn=31]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;"她在说什么，我怎么听不懂"</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小姑娘还是要坚强一点，不就是学姐跟人跑了嘛[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欸？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵:所以外人竟是我自己？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连老师也沦陷了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有那样的能力</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大师姐，你坐啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚才的事？刚才事？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有仇当场就报了</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵:气抖冷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈清野演恶魔吧，本色出演</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔在rj</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段戳我笑点了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;地狱空荡荡，恶魔在人间[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仙女即恶魔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伤心[fn=33]</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;唯一的外人，各种意义上的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵原地爆炸了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木同学，这时候你说话很多余，不说话还能勉强当你不存在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;saori即视感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦不怕一木从书里面跑出来砍他吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：
我的呢？
发出了败犬的声音[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纯路人，懂得都懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯一的路人</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我得了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说白了，就是想挣w</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：钱难挣屎难吃[fn=12]
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是不是想挣达不溜呀[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挣W难</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挣点钱不容易啊，要恰饭的嘛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里面的水很深，一木把握不住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本剧组唯一路人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;气抖冷，为什么又要迫害一木葵？怎么不加大力度呢？</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;惨丨一木丨惨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是老师对彻的爱(｡･ω･｡)ﾉ♡[fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;害羞的老师真可爱[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的嘛？我不信。（滑稽）</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;冲啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;犹豫就会败北，果断才能白给🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是在想怎么烤才好吃吗？</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今晚去吃烤肉吧（后仰）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚上接着迫害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边家的饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上次是寿司这次是烧烤？被食物收服的葵酱？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今晚吃烤肉串！（下腰后仰）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们去恰烧烤</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;都没有渡边的手臂秀色可餐</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈 部长大人</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就是渣男的境界</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如果情话说的好听，那就说给她听</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个上宫是谁来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边,青奈滴超人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;善解人意渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，温柔滴超人</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大拇指(多看...</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;干什么呢小老弟 和她也有心灵感应？？？</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;厉害了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边老端水大师了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬还是更重一点</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;早上好！夜之城</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;
前方人行道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然不水了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来组成头部……按摩</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;回过神时，已是豪饮！</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呐喊声，练习声，嬉戏声，声声入耳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么我看成了操场上的唢呐声[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟之前麻衣推渡边时的那个蝉鸣声突然涌入的描写差不多呀</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野神：辛苦了。
众人：为神服务！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的说话声都与众不同吗[fn=31]</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一语中的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那这样这样的话，美姬是座在渡边对面咯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这小费得加个0了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;僚机起飞.✈️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;服务员，你做得好，做的好哇！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木、麻衣、美姬、狗、神、青奈、凑数二人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有眼光</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻了</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;每天都是几个亿的生意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;几十亿的工吗？</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美琪美雪，你们两个去对付黑魔仙！</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;xdm！我从未来穿越回来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日睡前祷告（？）：最特别是她，在所有一切之下是她，败犬狗，一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我很专一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震惊一木一整年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木犬太郎：嗷呜！嗷呜呜！
月牙冲天
🌙
     🐶      /
     /！—/\</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日睡前祷告（？）：最特别是她，在所有一切之下是她，败犬狗，一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说到做到，勇往直前，这就是我的忍道🤫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼呢？明明那么多的楼怎么没啦？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼那</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完犊子了，到五月份了，乌鸦又又双双叕叕可以请假了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木:“？？？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽这断层好厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;xdm！我从未来穿越回来了</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;袖扣？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“从今以后,不管多热的天,我都会穿一件外套,不管多么寒冷的天气,我都会把衣服脱下来。”</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;夏日加衣为美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是给美姬准备的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉我没救了，看成“渡边彻手伸进裙子”[fn=23]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我将永远在夏天为你带一件外套，好像吧，大家注意细节</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是我对最爱的美姬的誓言。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要成为东京帅哥的条件之一[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给我天下第一美姬准备哒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：啊，美姬，我的美姬。</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我是没有基</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自己发吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来张永带妹穿御神袍的图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想念久美子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;潇洒！
帅气！
完美！（久美子CV）</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;本团子大人不喜欢等人.</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高情商</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果请话能说的好听，也请大方的说给她听[fn=2]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书里已经没有天生一对，不过是茶壶配酒杯，乌鸦来端水。[fn=10]</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢听，多说点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会说话就多说点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冷笑也能归入“轻蔑、冷酷”类表情吧，所以这个时候美姬心里很开心，在憋笑？</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好像少了个离字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;离开</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是前面对美姬的承诺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻，大怂货！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;内裤是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本社畜不是一年四季都穿西装的么</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这指的剧本里的仙女，也就是清野凛吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是别人眼光的原因没。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是为了给美姬当垫子！
这是糖！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得前面说过好几次类似的话呀，铺垫很足了，觉得尬是没认真看吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都要吹一吹嚒？尬了.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;I can
I will
I must.
愿诸君都能拥有强大的意志，
和一份不悔的爱情</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱啊hhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至少等女儿再长大点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至少不要在我老去前离去（一转攻势）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上面的对决比赛还能继续吗？我想不到怎么接了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至少不要在学校[fn=33]</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的tom</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;撩妹高手渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦现实中肯定是个渣男，快进到柴刀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学不来学不来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙我直接好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学会了学会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;撩妹高手渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的tom</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情话这么多 乌鸦老会了阿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太会了，他太会了，可怜的tom，被他玩弄于鼓掌之中</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边你太会了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;年龄最大的老师反而最纯情最少女[fn=24]</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你说这个我可就不困了嗷[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;干饭人</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大体老师之后，众生平等，已经没什么好怕的了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;解剖（pou）不是解刨（pao）[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;解刨，听着像是猪肉佬，而不是医生啊[fn=34]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;医学生哪有没解剖过大体老师的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;解刨也太可怕了，解剖吧</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;都觉得渡边病了[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚看了星辰远征军，里面那个校医可真是印象深刻啊</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这体温计应该是一次性的...吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邪恶了，我为什么会懂这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实测口腔，测腋窝和测直肠的体温计三者探头形状是不一样的，算是不同的体温计。话说如果是一样的体温计的话那不是很糟糕（比如上一个放进直肠被渡边含嘴里）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来（震声）！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天我指腚是要走后门了嗷[fn=4]</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;中国人应该更习惯腋下吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假如上一个放进的是直肠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长管状物体被渡边放入嘴中，说话声音与平时不一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好色哦</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;开塞露了解一下[fn=33]</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我都是自行带入双叶的😋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牌面就用新妹魔王的契约者的老师如何？[fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦呼！期待卡牌！</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个温度计测过别人的直肠么[fn=8]</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就是对卡牌的具体描写：衬衫，白大褂，工作牌，架着腿和温度计</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指十分涩情[fn=31]</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;行髪国军礼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，举起双手</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你的手术刀是我生命的指标
你的港湾是我终生的信念
吸引着我
使我沉醉…
使我迷离…
啊~
我的女神——
宫崎美雪！！！！</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙！这句话我明天就去试试</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师已经变成了渡边的形状了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;窝草，好厉害啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;停下，这不是去幼儿园的车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没懂。[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！已经是彻的形状了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是校医妈恐怖如斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接从我脸上压过去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;校医：
开车，我们是专业的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙！这句话我明天就去试试</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嚯，这个老司姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快了快了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师已经变成了渡边的形状了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈老师:我不纯洁了</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想起日常里面的三人组，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对自己老师好色，有什么问题吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嚯，你也是个老司机</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看楼数，今天的监狱一定很多人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莱纳！要做吗！现在！在这里？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某游戏:要硬上吗？正合我意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，校医的工作一般是开车[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想起来一个新闻，夫妻同房三年，因为女方害怕，所以一直没有上，去医院看医生，医生推荐硬上🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我给奶妈满分！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好，不愧是你[fn=58]</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她急了她急了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不否定啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“硬上就行了”
“快一点，别让人久等了”</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;锁好药品柜真的很重要，有人甚至会偷喝医用酒精</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该是这种</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，所有的一切是她，我的神，清野凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸如此类？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神！</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;侧面可以看看胸有没有变化</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打破此表情才是lsp</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道以后买可乐的时候是不是也要从侧面看呢……就是不知道那时候还是不是漠然的表情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，主要因为渡边是抖M[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然这就是最喜欢么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=8]</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;退缩，是永远说不出的两字~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有地虎侠</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我爱麻衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好图我收下了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们统一称这种为闷骚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿→_→</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐，赛高[fn=32][fn=32]</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=21][fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;里面火热hhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;外冷内热（物理）[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣，你好..</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是各位lsp</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Paradise
一种看梨神后宫排成排,呼唤梨神的既视感。</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太关注于自己的后宫而才发现早已到了的晃子吗……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿什么测的测谁的体温</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边的后宫团（滑稽）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一拖七，一周无休</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是不是有虫</p>
`;
default:
			return '';
	}
}
        