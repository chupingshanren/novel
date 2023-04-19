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
<p>&nbsp;&nbsp;&nbsp;&nbsp;百万大战给搞成饮食会了？</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒙古人吸收新科技和新战法的速度超快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒙古人确实牛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实际上蒙古人是重骑兵，和铁浮屠差不多。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实打完中亚蒙古人就拥有全世界最豪华的配置了</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;x你老木……</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒙古人便携的干粮是肉制成的肉松，据说成吉思汗打天下也有肉松的功劳</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有小人</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人在装吃的这方面永远是天才，无论是往包里还是胃里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长途交通上的恐怖故事：帮回家的女大学生抬行李箱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鞋盒子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哆啦A梦的小包</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人装东西是人才，装吃的是天才。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没准是武神的关门弟子</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;痛快</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒙古高原南下的风写些什么内容——天空啊下着沙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实。。人数过万就是在视觉上无边无际了。。。</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双语都没看懂的金人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是写宣战书的时候，想到那是都外国人怕看不懂中文然后又加上了英文？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀秀真秀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈秀迟但到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈啊哈哈哈哈还中英双语啊，看得懂吗</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真和谐啊！</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铁丝网也可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除了大汗的命令外还有马克沁机枪</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金兀术贪性大，好冒险，这里做袭营而非突围的决定也是很合理的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金兀术应该趁这个机会突围啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈艰苦岁月开始了开始了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;干粮不香了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜</p>
`;
default:
			return '';
	}
}
        