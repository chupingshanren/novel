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
<p>&nbsp;&nbsp;&nbsp;&nbsp;沧浪之刀，留痕于此。</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11]</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽这话跟二流子似的🤣</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起郭德纲说宋某德：“其母善守寡，育五子……”</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;窦娥冤里有一句：“怎生糊涂了盗跖和颜渊”</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈打断施法</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽！狠呐…！</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吾乃吸鼠霸王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗跖是春秋战国时的人，在项羽之前，不认识项羽，王垃圾是现代人，自然知道项羽，他跟金宝一样双重人格</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没转过弯来</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;圣人不死，大盗不止</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;庄子书里也有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这现在好像证实了是伪作，不是真的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;算是最早的农民起义军了</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想一想好像是这样</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到处游历问别的君主 我这里有一套训狗良策 你们要吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孔子不是一米九的山东大汉咋能被吓跑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧。。。。孔老夫子向来是以理服人，讲理讲不过的就动手打。。。。。不然你以为凭什么可以开着战车带着弟子游历各国</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五帝三皇神圣事，骗了无涯过客。有多少风流人物？盗跖庄屩流誉后，更陈王奋起挥黄钺
农民起义被统治者污蔑是在正常不过了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗跖庄乔流誉后，更陈王奋起挥黄钺。歌未竟，东方白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗跖年长，不是良善之辈；
颜回命短，实非凶恶之徒。
尧舜至圣，却生不肖之子；
瞽叟顽呆，反生大圣之儿。
张良原是布衣，萧何称谓县吏；
晏子身无五尺，封了齐国首相；
孔明卧居草庐，能作蜀汉军师。
楚王虽雄难免乌江自刎，
汉王虽弱却有河山万里。
满腹经纶，白发不第；
才疏学浅，少年登科。</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽:呀，你真残忍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要当恶的善良人</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;dog</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗哥盗哥，我好几天没吃饭了</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢文东= =</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小混混就是这样的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里心理描写太到位了</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有愣的直接就给你干进去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲真，我是普通人，看的都心惊，我心气儿再大也扎不下去[fn=14]
好丢脸……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个真不能玩，当年海淀小流氓就是这样死的</p>
`;
        case 103:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽就怕有副作用 而且前面强子问项羽 若是虞姬 你要是没了她怎么办 项羽说大概率会随我去吧 小概率还有她自己的事要做活下来 那么项羽就属于有点自私了 那么这里怕副作用的推论也大概成立</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看这书总会忽然感慨历史上的人物和我们这些小人物的区别……小花的笔力真的好…</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柳下拓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妇人之仁！妇人之仁！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能得到项羽这样的评价，看来还是有些武力的</p>
`;
        case 109:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;更带劲了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岂不更刺激？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这脑洞奇大呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;罗老师，这情况该怎么算啊？</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人才</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 111:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来如此+1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柳下挥客串[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗版好像没这句话</p>
`;
        case 113:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以你已经开启宿慧了？先介绍自己是谁？</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狠劲儿</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗跖，老革命家了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗亦有道？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柳下跖？</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下流挥[fn=4]</p>
`;
default:
			return '';
	}
}
        