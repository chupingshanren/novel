$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前两年少好多呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一语成谶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青少年模式出了之后恢复不少章节，前两年少的多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没少，别瞎白话。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽又少了?那么好看的一章！</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;康麻子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;C康Y和小S吗？
</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒙古的话，其实贵由更适合，出身最正，诸将也都服他，听调亦听宣，各部向心力强，国力处于上升期，兵芒正盛</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;康麻子打个吴三桂都费劲，强在哪里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是让挖几个皇帝的攻？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;康熙虽然阻碍近代化过程，但毕竟完成了大一统了，什么时候台湾才能回来啊，哎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乾隆中期应该最强，汉地大致稳定，财赋充足，八旗绿营也都能战，还有五个将军府的异族兵可以动用，对朝局的掌控更是历朝最高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没打下雅克萨算不算弱我不知道，我就知道有史以来能打到雅克萨的皇帝就不多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;康麻子是强，就是几万人都打不下俄国几百人守卫的小城堡雅克萨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最郁闷的是雍正，妈蛋，我爹把家底儿给败光了，我拼了老命才挣回来，结果到我儿子手上又给败光了，合着败家这毛病还能隔代遗传的啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死时候国库还没崇祯钱多就算了吧……</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得之前有群老流氓。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扒马褂听多了吧[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;╮(￣▽￣)╭</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是，毕竟猴子也只是揍你，而不是骂你哈[fn=8]</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是纪实文学吗</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子她妈……难道？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你别说，小强你丈母娘是不是。。。这强人念可有味道了。。。</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妺喜——</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是多大仇啊[fn=33]</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要真敢这么干你最亲密的五人组能把你活撕了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要说没架子也就老朱没架子。历史上除了流氓天子刘邦和布衣天子朱重八，都是有一定后台有一定涵养上台的</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话虽如此，不过朱元璋时期还没有东厂</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开局一个碗，结局一根绳。可惜了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“你做姐姐的要大度，不许欺负妹妹”。小强这话说的和当初秦桧儿劝张冰的时候一样一样的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他俩和吴三桂咋见面</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王权没有永恒</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帝皇，40K，锤粉狂喜。</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那一堆的官衔堆也堆出来个九千岁来啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北魏宗爱是历史上唯一一个封王的太监</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九千岁不是并肩王，是太监</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;估计小花自己也不知道，这居然是个伏笔</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱重八不会说那么文绉绉的东西。李云龙是他转世差不多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱重八不会说那么文绉绉的东西。</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生当！作人，杰，死。亦为，鬼雄。讽…刺她丈夫胆小逃跑</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈[fn=26]</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得好像是rou蒲tuan</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西游记</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有才[fn=35][fn=35][fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方便打西边啊。通关文碟上写到“要么他过去，要么我过来。”</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;相声都是编的，这段是真的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咱这书是纪实文学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不一样，咱这个就没有不是杜撰的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实不一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玄奘在历史上是高昌王的御弟。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说得好像咱这个是真的一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，是不一样，咱这全部都是杜撰的</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李二认识老闫啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李世民见到王羲之还不得疯了！当时世上仅存的绝大多数王羲之的书法作品都在李世民的墓里</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来也没有，还帮大宋报仇</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刨自己墓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自己刨自己坟真是越想越操蛋哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实吧，磕头这个应该是清朝还是明朝流行起来的吧！原来的文武百官行礼不是磕头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;横山炖羊肉现给赢哥上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道赢哥在那吃得合胃口不，睡得好不，怪想念他的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心疼我胖哥</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;woc，蒙对了竟然</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老奶奶[fn=4]没看后面就觉得是了，乌骓那一段</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;✍🏻</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里脑子一首歌old tang road
</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这想起来我们邻市有个地方，传说是虞姬死后霸王把她的头割下来带着，垓下突围的时候她头上的兰花发簪掉了，所以到处长的都是兰花</p>
`;
default:
			return '';
	}
}
        