$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在新冠快结束了，感慨啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚毕业就赶上非典，现在……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新冠真的比非典可怕多了呀，彻底改变一个时代。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;非典没了，新冠来啦。</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;樊哙:淦 给我整不会了 我台词还没说呢</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空空儿那会就柯子一直吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刺杀两皇帝还不够</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们坐着我站着，你们吃着我看着，你们说着我笑着……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子真惨</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，好不容易混上名字了，结果台词都没了，群演何时能出头啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;樊哙：我生猪蹄还没啃呢。
项羽：没事，回头这段我让司马迁加上去。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生猪肉呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彘肩呢？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等会。。。。台词没了就算了，怎么我肉也没了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;樊哙：导演！这不对呀，我台词咋没咧？我就这几句词儿，也给我掐没咧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说好的猪肉呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噫，你咋不让额把台词数完咧</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时候语文课得背。[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张子房貌若妇人好女啊，是个太史公盖章认证的小鲜肉，这里外貌错了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……刘老六宇宙啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是袁惟仁，还有如来神掌你要不要？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑子里全是秦时的张良~美啊~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是刘老六谁能干那么猥琐的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搞不好还真是……</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还能说～～好吧露脸了，下次再加点台词吧，导演😁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我猪肉还没吃呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死且不惧抹油了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真替樊哙惆怅呀。哈哈哈</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那匹马说的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是说项羽下令，沛公光着身子找项羽这事儿不许乱说么?</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦：小哙不哭，回头这段戏我让史官给你加上去。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成名的饭局啊，那就得脸皮厚点，脸皮厚一厚多吃一块肉啊</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小才丢人，这下小花把底牌露出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太坏了</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听君一席话，如听一席话</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汉王是羽哥封的，现在邦子顶多算关中王（先入关中者为王）</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲的眼神太他么搞笑了，哈哈哈哈哈哈哈</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来还是有印象的</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷是刺客</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻：不会舞剑</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈。老头表示这个我打不过</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不你当国王呢[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;季季[fn=31]</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在楚汉争霸的世界里，萧将军文采横溢的名声是掩盖不住了！张良和虞姬可以作证。</p>
`;
default:
			return '';
	}
}
        