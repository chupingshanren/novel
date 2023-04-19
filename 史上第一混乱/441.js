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
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是就是，比如张小花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最无聊瞎搞的是你啊  张小花！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;由此引出了三十二公公的书，如果结尾推一波那应该是绝杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恋姬无双和一骑当千</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《真鄙视那些无聊写恶搞的》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恋姬无双[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是就是，比如张小花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张飞也有胡子啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有
萌娘三国演义</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿 还有脸说别人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最无聊瞎搞的是你啊  张小花！</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这些问题大部分都是当年追书的网友提出来的问题。给小花整不会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这是什么业务[fn=37]</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好，樊哙的戏份可以后加上了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面呼怪不得反复引用这育才本纪。让我想起三体里时间之外的往事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;司马花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当初还说有陈近南呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别等了什么本纪了，司马迁是个太监</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按说应该是育才世家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说《育才本纪》啥时候出</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以啥时候写育才本纪？</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥硬要写云南 是哪里有上下呼应么</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也不一定要各过各的，大家合并上市也是不错的，就是司马家有点惨，这辈子别想收购他们公司了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不打的话刘备集团的合法性就没了，刘备集团自诩大汉继承人，正统的老刘家，不打就变成割据政权了</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一哆嗦是尿尿吗</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没四没四，流水的小花花，铁打的刘老六。下一部，下下一部，刘老六没跑！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不好找？？哪有啊？</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;分久必合，合久必分，新马泰也逃不过，再过500年说不定就合了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神枪无敌，霞飞双颊的小说，主角的本事来自赵云</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新马泰:新泰，化马湾，泰安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;未尝不是一件好事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;必须统一一哈</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是还有三个月，一年以后咋回去</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我一直在想……最初的设定是弄错了剩余阳寿才去的小强那………秦舞阳怕是阳寿无误吧[fn=13][fn=13][fn=13]</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精神变态</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑虎骂骂咧咧的走了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说真的中华文字博大精深啊，每个词拆开都是天地</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑子里只有一件事，反清复明，大事业!</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，小沈阳啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;惊，有小沈阳的春晚已经过去这么多年了。</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段让我想到周星驰了😂😂</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变成异闻带了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成平行宇宙了</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细想想能出国的人家总共也就几十万人，在服务区开个饭店才能挣几个钱，不可能养得起军队</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用自己挣的钱养兵是大忌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;军队一律不得经商！</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那不能，关羽也不傻</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;502匹</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兀术：[fn=12]不玩了，你们就逮着我一个打。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逻辑不通，平行时空，遇事不决，量子力学！</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是，每各四个文化点加四枚金，绕沙漠一圈配合佩特拉古城直接文化起飞</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实老嬴知道后面的事以后，理论上胡亥还当不上二世呢，也就后面圆了一下给扶苏个镜头才说的通</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是每个时间点全部成独立的平行宇宙了呗</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生活气息普通喘着粗气进了茅房</p>
`;
default:
			return '';
	}
}
        