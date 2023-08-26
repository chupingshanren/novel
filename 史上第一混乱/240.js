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
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名想起来一句空耳：洗笔我用洗笔液，穷也不能穷山东，初音一葱拍死了张根硕思密达（李春姬）</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;熬着吃哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏侯爷跟贝爷一起去荒野求生吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏老爷子怎么跟个要饭的似的</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我直接开无痕浏览(滑稽)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死前把浏览记录全删了</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留个药方下来，这可不得了了</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021已经破案了，就是同一个当代画家的全家所有亲戚的相貌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孔子不至于</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吐口水也就吐了，高楼往下扔东西的是真缺德啊……
之前有个女的，被高空坠狗砸成高位截瘫了，这不是造孽吗……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老王人品真不是太好，只是勉强大德无亏罢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;往楼下泼洗脚水的路过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逮住蛤蟆……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这楼接的稀碎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接成这样好意思说自己是真正的粉丝么[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;稀碎……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;福</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逮住蛤蟆……</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后人觉得雅，他本人估计不会那么觉得。</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实对一般人来说也够用了，另外，你不是还会外伤清洗包扎嘛</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;溃疡！</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我相信这种级别的医生一定是对未知充满好奇的，他们到了现代一定会对现代医学很感兴趣，只可惜一年太短了，要不然把古代中医用现代医学的方法去诠释一定很有意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;医学这种靠实验和经验的，两千多年前再厉害的医神绝对没有现在的实习医生懂得多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要什么都赖失传，从不断出土的考古发现来看，那些传说中很神的失传的东西大都不如已经流传下来的东西，它们失传是因为自然淘汰，好东西失传只是很少一部分，更何况传统医学的理论基础放到现在最多算药学，要学习现代医学体系这几位得从头学，一年怎么都不够的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花写的是童话，看个乐还行，当真那就是真傻了。全世界那么多医生研究好几百年攻克不了的病，俩老头说攻克就攻克了？难道后来人都是白痴？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两位还是没准的，毕竟医生古代地位一直不高，所以几次大乱很多医术和技法都失传了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这俩病难，毕竟医学将就的还是调理身体，可这俩病问题出在基因上，况且一年太短了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正好相反，按照当时能望闻问切，这俩名医可以望出来，甚至言脉就是由扁鹊。而假如说，他们的技术是七，咱们现在就剩零点八了，按照汉书艺文志，医经有七本，现在就剩一本还是残缺的，要不是王冰搜集整理（还按照大意填补空缺了原本用红笔朱砂写的后来传着传着都用黑笔了）现在中医和失传差不多</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有被打，没有互动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打得起来么？这几个文人摞在一起，李逵一拳能从上到下打透喽。最底下那个还不一定是打死的，是摞着给压死的</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我猜刚那个校旗毕竟创意是别人想的，他们照着那个创意重来一遍就是拾人牙慧了，所以只愿意改不愿意重来，而现在想做的画穹顶啊什么的本就是新创意，死前一直想做却没做成的，所以愿意。也是我瞎猜的</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学无止境啊</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;…</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得好吃的包子都是没那么出名的小店卖的，最多本地人比较知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020年来的，狗不理凉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有名的店反而不好吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没头脑🤪和不高兴😡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗不理凉凉喽，我很欣慰。哈哈哈哈哈哈!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021年有个不知真假的新闻：日本发明了一种只有皮没有馅的主食。中国人纷纷不以为然，因为……那就是馒头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次读的时候我也曾对你的创意钦佩的很</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020年来的，狗不理凉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天津本地谁他妈吃狗不理啊。。都吃二姑包子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得好吃的包子都是没那么出名的小店卖的，最多本地人比较知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗不理已经废了</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧蔡京，俩著名的大奸臣兼书法大师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;字不好，怎麼討得宋徽宗那廢物皇帝開心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧--楷体书法大神，主创字体宋体。凡事看过报纸杂志读过书的都见过。</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能出土个高仿的都够上海买房了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王羲之的赝品值一座元青花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王羲之的作品好像都只有摹本传世，真要流出一幅真迹来……不敢想</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脾气好那是表象，心里憋着坏呢，要不怎么是奸臣呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有皇帝撑腰，没有帮手和下人，又打不过又说不过不脾气好点还能咋的[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脾气咋这么好呢</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯嗯，有王羲之柳公权，他也就配给厕所写字。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瘦金体！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧的字就是宋体啊，你拿打印的比他快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧的字其实写的也不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太扎心了！！！</p>
`;
default:
			return '';
	}
}
        