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
<p>&nbsp;&nbsp;&nbsp;&nbsp;很精彩的两章回来了，可惜没评论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章被屏蔽应该是写到岳飞是记尾书籍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少两章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前一章节名是：苏氏防弹衣，犯忌讳了[fn=49][fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是****🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈可娇的身份和岳元帅还有秦桧的归宿都在被吞的几章里……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又被狗吃了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，陈可娇关键两章没了</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;95后🙋</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最关键的两章又丢了，这起点怎么回事？还不如个U盘靠谱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为抗金！所以“后金”不乐意了呗。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上章原来是不是<苏式防弹衣>改成了<苏衣式防弹衣>才放出来的？苏L，大家都懂得，国j可真够敏感的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去找刘忙说书，那个都全</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最离谱的是盗版也缺章，确定是这一张</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两章岳飞现身了，然后秦桧跟他走了，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这几章岳飞现身了，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神马玩意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看着闹心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tmd一下子少了两章 tmd</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过分了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽你大业 起点 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次好，一口吃好几章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正版受害者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这他妈怎么看
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这让人怎么看，这几章也没犯忌讳吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最关键的两章又丢了，这起点怎么回事？还不如个U盘靠谱</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小象都13，4岁了，老写的跟6岁的娃娃似的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜景升是周瑜可能是到了大结局强加的，这时候小花应该没有这个想法，因为关二爷见过周瑜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怀疑颜景生不是周瑜就是鲁肃</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天腊月二十八[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的确是腊月二十九，明天除夕，我也要准备过年了[fn=24][fn=24][fn=24]</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子有点可爱</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前杠高能！</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神特么……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有这么占人便宜的</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岂止是后妈？你们这一脉整个是庶出</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘎嘎嘎嘎嘎嘎嘎嘎嘎[fn=4]</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子真好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子太好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子像老妈一样</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骂人不带脏字啊！[fn=8]</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花写的刘邦真好，又贫又稳又狠又仗义</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实，刘邦才是大名，刘季意思是刘老三，属石头柱子之类的小名，话说，我记得刘邦有俩哥，二哥是菜贩子，就是不知道刘邦称帝之后，他那个菜贩子二哥有没有垄断西汉的素菜种植栽培收割批发零售行业……</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怀疑我老婆是包子转世，她也认为和关羽张飞结拜的叫刘邦，和项羽打仗的是刘备……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了！我老婆也是这么认为的!</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我小时候也这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈哈哈嗝</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说关二爷会不会对邦子纳头就拜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对。说多了还有世仇呢。</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老吴啊！在这群人里你就是个小角色！淡定啊！</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈她可能真以为是高圆圆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;娶高圆圆也不错，我喜欢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他不会误会成高圆圆了吧</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结果还是没有陈圆圆名气大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“陈圆圆那个吴三桂”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴三桂：我这么出名 竟然有人不知道？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵本山:“悲哀，真让我替你感到悲哀”</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么名人，就是个人名~</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老吴人挺好玩的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太酸了h h h h h</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈恰柠檬的老头儿太可爱</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚出龙潭，又入虎穴</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是怎么话儿说的，夫妻相处的最高境界，是把对方变成睡在你上铺的兄弟？
不过程璐思文都离婚了，说明这条路可能行不通哈。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多刺激啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来来来，咱们把左边的对象包含起来，再把右边的事件触发了，然后你看是不是下边的流程就通顺了？</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你瞅啥！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乖巧的包子好可爱</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雀屎，可以写一本了，名字我都为你想好了，就叫《史上第一混乱》</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起五人组回归的时候，难过得饺子都吃不下了，拿起两升的可乐猛灌一大口，才又吃起来。</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强子，你大概或许可能没开口托费三口帮忙找吧？三口出马，阳间这地界没他找不着的 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉项羽应该是骑着兔子走过了以前和虞姬一起走过的地方
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽就算到深山里打老虎打狼吃也饿不死</p>
`;
default:
			return '';
	}
}
        