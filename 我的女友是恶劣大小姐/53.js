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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没章节名，看来乌鸦也被举报的zha种影响心情了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二刷又要结束了[fn=31]，还是带有不舍啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝了，这都能被干掉一章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸好昨天没有养[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都说了这个不能存，不看说不定就没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没了一章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽 355到哪去了 我三天没看怎么少了一章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;355呢？（暴怒）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好我看了355</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;355哪个b搞进去了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;靠，看一张少一张</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;md，谁把355弄进去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;举报的什么报复社会的心态啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;举报都我孙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫你开那么明显的车没了吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上章进去了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明天就没了，我血条空了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我355还没看呢55555</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被举报了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;355呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给乌鸦气的章节名都不起了[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的脑袋呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上章没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡，顺便问一下355章呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给355默哀！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章发生了什么？我感觉没什么东西啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没章节名，看来乌鸦也被举报的zha种影响心情了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;355章呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴滴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要告白吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们真离谱啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们这么快的么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手真快啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都不睡觉的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么敷衍的吗[fn=39][fn=39][fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标题呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么少了一章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;魔鬼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来咯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一，只能说越看越少，不舍啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;铁人渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在睡觉》[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边少年体力精力真是没得说</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;19年初去的，还好在疫情前去了一趟。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还能看啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸好找到其他地方补了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来不能养了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为小泉老师白花花的屁股，被举报了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说是举报了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽355呢，我养着的那么大的355章没了呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;355章去哪了？</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里竟然没有评论，不科学呀</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;早操！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;?我想歪了[fn=31]</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;体弱的凛啊，你要怎么承受渡边的打桩机啊٩(๑òωó๑)۶</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;上啊</p>
`;
        case -10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦老师！我喜欢你！！的书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在一切之上是她，我的神，清野神[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等待乌鸦的下一本 乌鸦！yyds！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还会有番外嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要啊老铁，虽说这么美的结束很浪漫，但是我感觉你那剧情完全可以继续写呀。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，不要啊，乌鸦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有下一本书我还是会支持的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结了，泪目。我差不多是全订了。结尾好一点啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要求番外美姬和凛趴在渡边身上贴贴[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿这就要完结了，有点舍不得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，快完结了呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新书的话如果还是日本背景能和这本书来点互动吧 向听闻某渡边男子被捅了之类的 完结真难受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结也挺好了，那天起点来个禁黄，这本书直接就无了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;短暂的分离是为了更好的相遇，下本书再见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;番外啊，甜甜的番外啊，我的麻衣学姐啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还想看神的日常，互动发糖，呜呜呜都没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就要没了？没有甜蜜的三人日常？没有斗嘴日常？没有争宠日常？没有太太们了？就这？嗯？我刀呢？？？？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭死，我永远舍不得美姬和凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;no please no</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舍不得，太舍不得了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阔多哇路[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;群号是多少啊，我今天终于全订了，想要看番外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也太快了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是你浪的理由？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新书打算啥时候发呀？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会吧，写久一点吧，继续写下去吧，陪伴了那么久，突然间要完结了，再也不能在这个时间看到这本小说，有点舍不得，有点难过😔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只剩一章了？不是吧不是吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马上6月6了生日番外该安排一波吧?然后大学、进入社会、结婚这样意义特殊的番外也得有吧?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于，可以开宰了吗[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;整点番外8 球球啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行啊！！！不能完结！！！！！不行啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还剩两章，能出个婚礼特典吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得这么浪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不要我拒绝，明年6.1吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没番外的话就等着收刀片吧[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，这就是明天吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，这不是还有两章[fn=12][fn=12]</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里应该用不以为意，不以为然是不认为正确的意思(不是为了杠，只是看见这个就想到了高三，当时时这个点遇到过好多次，现在我都快大三了，时间过得好快[fn=12])</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哥给你跪下了</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦的奇妙比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;南无宝胜如来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有意思的比喻
在我喜欢的作者里最像的是夏花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;煮螃蟹的时候还真没见过它夹锅盖，只见着倒腾腿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦的奇妙比喻</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;会害羞</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我的神！！！</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老工具人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我咋赶脚是日常迫害一木童鞋[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木：小组活动安排（女仆cos）！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;355章没了杀疯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给一木看一眼渡边女装照，全给你安排得妥妥当当</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商: 迫害对象
高情商: 路人女主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木的人生高光</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边真是太会了呀！</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;机器机器，不多说。</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上面两人咋回事？这都能吵？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木工   木工    木工    木工    木工   </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正我记得学校组织活动都是这样，干什么都要磨蹭十五分钟、半小时的，小学组织放风筝是，初中组织看电影也是，高中更是干个啥学校都要开会（还喜欢挑下午两三点，大热的天，一直坐到四五点，人都麻了），到了大学刚开学那会儿还是这样，后面还稍稍好了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有人排几个小时喝一杯奶茶，排几天打卡一个网红店呢</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;外调发配</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开局称霸全国</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去那里冲浪么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某神奈川神社表示[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;半泽直树。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的一个朋友:送到非洲公司</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去神奈川打篮球</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我超，别</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到一个很刀的剧情，就是以后真的出意外了，无法挽回的那种，渡边只能一次又一次地消除自己的记忆，靠系统引导重复书中的情节，循环往复，永远活在这个片段的人生里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉更像卢迪乌斯吧 为了拯救所爱回到过去阻止人神 也一样渣…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一切都是命运石之门的选择</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Reset!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会真有那么刀的番外吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真相只有一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;番外</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谁又不想和🦸‍♂️🦸‍♀️谈恋爱呢[fn=4]</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;红色的铁皮车</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要上了，只狼！</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;そうして？</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太有日剧感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以为神看到了海豚雕像[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的风甚是喧嚣呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神居然坠落人间了
awsl～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是神第一次漏出惊喜的表情吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神堕落了</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻，我发现你最近越来越嚣张了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刮一手油</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想当年李逍遥就这么逗月如的</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;然后钻出来一个疯子，砍了主角一只胳膊</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我就喜欢这个调调</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;L打多了…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我：a~
阿伟：阿伟已经死了，你还搁这awsl！[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刮完搓个球，弹一木后襟里[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喂喂喂，多了个 里 字，口味瞬间变得太重了啊！</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;仅仅这一幕，仿佛一张照片一样鲜明。她走在我的面前，轻轻拉开垂下的几根芒草，然后回头对我微笑。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我此刻却只想亲吻你倔强的嘴</p>
`;
        case 35:
            return `
            `;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;坐标179章</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不……不过如此，没有不也活着[fn=24][fn=24][fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬啊[fn=24][fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图呢！！！我要吃柠檬！[fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这狗粮撒得有点任性了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;傲娇傲娇，被渡边调教之后，已经成了3分傲，七分娇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好过分！把🐶骗进来杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不……不过如此，没有不也活着[fn=24][fn=24][fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬天下第一～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;98</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你舅灌他爸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你舅冲他爸🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl[fn=9]</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;188还是189冬季露营，清野假装出事躺雪地里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“如果有下辈子，让我们早点遇到吧”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彼此坦白心意的时刻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是这一段吧</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一哭走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一带一哟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看得我也好紧张啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该我出场了！看台词！清野神是我的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好机会，小渡(边)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;xdm,给我冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姨妈大！！！[fn=29][fn=29][fn=29]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲🥳</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快进到凛亲美姬</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她急了她急了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她酸了！！(´ฅω•ฅ｀)ﾁﾗｯ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;核善的笑容</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亿点点恐怖[fn=31]</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;会打渡边彻一顿</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛好像没有和彻亲过吧[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也要亲亲</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;9494</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是正常的告白前奏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男急了[fn=40]</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太会了太会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用不到的知识增加了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正因为如此</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在这里你最惨了还搁这笑呢[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑什么笑！等会儿就来迫害你！[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你掺和个啥劲呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在等后宫，你在笑什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还能笑出来，不愧是你，真正的败犬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再笑您就真的要成迫害王者了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 太有代入感了，生🌿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木在笑，我也在笑，我和一木贴贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵竟是我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在这里你最惨了还搁这笑呢[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“嘿嘿嘿！”这是我偷笑的声音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木，你在笑什么。只有你还是单身的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你个电灯泡，没有自觉吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑什么笑！等会儿就来迫害你！[fn=49]</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木能活着长这么大真是不容易（感慨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木:那我走？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大电灯泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木同学，永远的鶸！</p>
`;
        case 175:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛微微停下脚步，没有回头，纤细的脖子折射着初晨的太阳，散发出如玉般细腻的光泽，声音轻轻的传来，微微有些颤抖：“怎么了？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我做了一个违背祖宗的决定”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也听到自己的心跳声了嘛？R桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;45度转头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你听说过安利么</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;黑板擦情侣……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里是只丢粉笔那对吗？不对好像不是同班的。应该的其它同学吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朋友以上，恋人未满。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“别丢下同学”，意思即不是同学就可以丢了，所以男生在隐晦地表达关系的亲密。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以是渡边，也可以不是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啥意思，路人还是渡边和清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;寒蝉里圭介对蕾娜。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜哦</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;违背了“东京帅哥”的诺言啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对自己喜欢的人告白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥决定做自己真正想做的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要和哆啦A凛做一点爱做的事情。[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了！</p>
`;
        case 178:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：塔塔开！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应在何时？
应在何地？
将心念倾诉，
将爱意坦白。
倘若下一刻世界将迎来终焉，
倘若下一瞬故事将画上句点，
那……
就在此时，
就在此刻，
就在此地，
就在这如你名字清澈的晨曦中，
传达吧，传达吧，
回响吧，回响吧，
那简短的音节，
那纯粹的思念，
那无尽的爱恋。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应在何时？
应在何地？
将心念倾诉，
将爱意坦白。
倘若下一刻世界将迎来终焉，
倘若下一瞬故事将画上句点，
那……
就在此时，
就在此刻，
就在此地，
就在这如你名字清澈的晨曦中，
传达吧，传达吧，
回响吧，回响吧，
那简短的音节，
那纯粹的思念，
那无尽的爱恋。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全都厚葬了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越是看不到的，就越想看！像没写的，像吞掉的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么不是绿的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;?(づ ●─● )づ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，咋了这是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差点死完</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;豪家伙一下子葬送了30多个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，三十多楼说没就没</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这。。这章断的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：塔塔开！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天说不行？？[fn=13]</p>
`;
        case 179:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;组团把乌鸦抓起来关小黑屋写到完结再出去 1/n[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用什么言语来表达对她的爱意都不合适，但无论说什么话都能表达出来对她的爱。就像是十一月的秋色，无论是萧瑟的落叶，寂寥的天空，还是待种下的秋粟，南飞的候鸟都不足以概括。可是当秋天来了自然而然地就觉得，啊这就是秋色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12][fn=12][fn=12]要看完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在十一月 正好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有两分钟同志们冲！
好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要等不及了，欲火焚身</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老婆们，要走了，有些舍不得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊啊啊啊我好舍不得[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 请问起点断章补习班在那儿报的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只有一个字要说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都能断</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;断的漂亮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;wskwigzwjgakqaigaxai，来人！快起把那该死的乌鸦给朕抓回来，关到小黑屋去！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;%？*+！&$_～》…《‘·=【｝｛】¥@”、“；
乌鸦，听说你家缺刀片呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章断的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始于结束</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=30]我死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到这？？？？？？？？？？啊？？？？？？？？继续啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是一个澄澈得近乎透明的十一月清晨，乌鸦被书友找到，关进了小黑屋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用什么言语来表达对她的爱意都不合适，但无论说什么话都能表达出来对她的爱。就像是十一月的秋色，无论是萧瑟的落叶，寂寥的天空，还是待种下的秋粟，南飞的候鸟都不足以概括。可是当秋天来了自然而然地就觉得，啊这就是秋色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一楼没了，就打了个一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛！我永远喜欢清野神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;离完结更进一步</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告：最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;组团把乌鸦抓起来关小黑屋写到完结再出去 1/n[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吻她</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我tm</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊！就不能来个特大章一下子说完吗[fn=24][fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结前祷告:最特别是她，在所有一切之上是她，我的神，清野凛。我永远喜欢清野神！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没了？……没了？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;硬了，拳头硬了!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜呜呜呜呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，我死了，你挑的嘛，这章断的难受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是一个飒爽得近乎蔚蓝的五月傍晚。
乌鸦你就这样结束了非要等到明晚？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼上的大哥你们去哪里了？等等我呀。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么二十多楼没了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这断章……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么会有种在这一章就可以完结的。。。。[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是经典，看下章了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，在所有之上是她我的神清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飞踢！！！！你怎么能断在这里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章断得好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章断得好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我自己写了一条if线，自己把自己刀哭了，不过刀人的感觉好爽（即使是我自己），，，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;且看且珍惜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天阶斗技——大荒囚天指🖕🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去梦里找凛了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明天大结局吗？还是过个六一？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊啊，为什么在这里断章啊。。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以今晚回事最后一章吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，小小中指🖕🏻，不成敬意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么在这里断啊😱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这断章，拳头硬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我tm……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章断的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;典中典断章……好像快结局了也没什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看一章少一章了[fn=31]好不舍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;－</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我们是害虫！我们是害虫！</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看个小说代入进去，我感觉我都快有点小洁癖了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少字多少人</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬在睡觉[fn=45]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：而美姬你有早上必定睡懒觉的习惯[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:搜得死噶，我会在睡觉💤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你好懂哦[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在睡觉》</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;会本能地撒娇，会整个人趴在渡边身上，会一动不动地留下渡边的位置</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也许是做梦开手动挡？[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬真滴可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢像八爪鱼一样抱着我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢抱枕？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢“八爪鱼”？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢什么🤔</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;被书友猜到了</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;从凛开始的异世界生活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从凛开始的异界生活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明日姬凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重刷我突然想到小世界其乐无穷索仔256次跳崖重生救木公子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从凛开始的异世界生活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从凛开始的异界生活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道这小说是恋爱游戏？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从零开始的异世界生活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章的标题，圆，首尾相连</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;reO看多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前就有书友猜到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有道理啊</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;选择去御茶之水就是现在的后宫，不去御茶之水清野if线单女主结局</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有必要，乌鸦从头开始的布局最好的结局，乌鸦，yyds!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在的渡边彻带着记忆回去，救赎美姬的话…美姬就想要完全占有渡边了估计，渡边再找清野麻衣小泉老师的话美姬会黑化的，除非把重生这件事证明了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千万别去御茶水站</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到if线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻的重启人生？</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;高情商：渡边彻：没有重来的必要。
低情商：乌鸦：我不想重写。
[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高情商</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛if线🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仔细考虑一下，果然重来也不能更好了吧。</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬啊[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以系统其实就是渡边彻，每一个任务都是自己引导着自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果能独占，谁愿意分享啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是不满足啊，明明是她的但却要和人分享</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好爱</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，这很美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个工具人静流好久没出场了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到三槍，我就想到了我的北海道女士，嗚嗚嗚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想到了一个形象的场景，就是你和小伙伴一起玩坦克大战，然后关卡开场bgm没放完呢，只听到‘砰砰砰’三声，屏幕上出现了‘Game Over’两行小字——队友把家轰了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬:犹豫就会败北</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个工具人静流好久没出场了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;/Remake</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻，再起不能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很有画面感！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不止重来几次了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，这很美姬</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野部长：进了学校还由得了你？</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;话说还没怀孕吗</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;巧了我爷爷在武夷山有一片茶园</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;葵lsp了</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吃啥补啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑鸡蛋是全熟的，凛酱不吃全熟的蛋，所以渡边彻吃了两个，是这个意思嘛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是普通鸡蛋的味道，我一个人还吃不完，冷了之后又不想吃了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实味道还可以。。。满山顶都是这个蛋的广告，吹得神乎其神，什么延年益寿吧啦吧啦的。。。其实就是普通的熟鸡蛋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大阪黑鸡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总感觉吃了蛋黄嘴巴臭臭的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚搜的</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有点好玩的</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一点都不酷了，唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因，。，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变成猫娘了，凑活看吧[fn=17][fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给个浴衣图，大佬[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秾纤合度</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜呜</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=43]</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这段好会，mark了[fn=31]</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：你不可以吻我妈。[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别嗦话，吻额～</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;梦开始的地方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他们两的开始啊</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吻一下而已，为什么要用到做这个字呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边大师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时间管理大师[fn=58]</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为什么我看成连在一起[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开个班吧  我跪着听</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标准答案</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;雨露均沾呗，每人来一发</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连上下一段，其实不通</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;段正淳说过，他和每个女的在一起的时候心里都只有她们一个人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也就说，你要一边和美姬做，一边想着想着凛？渣男！</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渣得理直气壮。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老段正淳了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全心全意的爱着每一个人，艹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男语录？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前看过一部很红的武侠后宫小皇叔，里面说到类似，我现在进入谁，我脑子里就全是你的。。。。。。</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;2个一楼 离谱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三个一楼[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多了个独</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;润滑工作已经做好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，已经shi透了[fn=32]</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;no need</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛酱也感觉到了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该遨游了</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快完结了就是不一样，章章开车，我喜欢[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结倒计时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结倒计时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这手放在哪里才会残留温润呢？[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快完结了就是不一样，章章开车，我喜欢[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章也得没啊。。感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前排，DNA动了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我估计我发的这条评论活不了多久</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面的是倒下了？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;熟悉且熟练</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有贤者模式的男人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你有信心重新帮我穿好丝袜(划掉)衣服吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚穿好的又给人家脱了，不愧是你啊</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;此时，清野在失眠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以防万一，我先在这里放一个可能会举报的人的🐴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看都很刺激，这种直接的爱还是让人陶醉啊，纯爱战神舒适的躺下了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写的真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21][fn=21][fn=21][fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此时，清野在失眠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提前截图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以防万一，我先在这里放一个可能会举报的人的🐴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;希望活久点呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越来越放肆了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我先放一个浏览器在这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面两楼呢，这么快就阵亡了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就到这了[fn=32]</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;浏览器弹消息了，等我几分钟我去看一下[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再开就又要封了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦你太过分了！！！你甚至不愿意给我们一个省略号！！！[fn=47][fn=47][fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在都没有用……了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要看下面五千字的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好，没开，不然又没了</p>
`;
default:
			return '';
	}
}
        