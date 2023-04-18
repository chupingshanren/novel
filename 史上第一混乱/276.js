$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所有小说里，唯一没有人黑的女主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的很好</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶趣味[fn=4]</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多少代了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都几十代了也不能像啊</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会是张冰吧[fn=34]</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正我一直代入的金靖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;林志玲的身材黄渤的脸？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不对阿，李师师一直喊项袍子“表嫂”的，啥时候为啥改口喊姐了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我脑海中是那个谁谁洋子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;维密身材岳云鹏的脸
姚晨的嘴巴杨幂的眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也可能是马云的脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再说一遍，维秘身材佩岳云鹏的脸</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘴巴这么臭的都销声匿迹了。杨二车娜姆，柯以敏，周立波，金星。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到世界的参差</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柯以敏？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是个狼火</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;skrskr</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;推心置腹哈哈哈
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花写的也太有生活了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;薄皮大馅儿十八个褶儿，狗不理的包子它没有这么圆~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;18褶？狗不理？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就是丑在嘴上呗</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很真实的心态[fn=7]</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合着之前还不够混乱是吗</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汉初与其说吕后是刘邦女人不如说是合作者，统治整个国家的是两个人不是皇帝一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6666666666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花是少见的能用对嘿（mo）然无语的网文作者</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一刷时刚20岁，现在比项羽大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一转眼我也这个年纪了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越活越回去了呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽乌江自刎的时候是31</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
default:
			return '';
	}
}
        