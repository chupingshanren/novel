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
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈佩斯就是这部电影被坑的退出了电影界</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上学时盗版看的连载，现在全订补书费。</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明白人</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抽了四百多天限免我又回来看了哈哈(ಡωಡ)hiahiahia</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记住这个马厩。</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是就是…小强从不轻易歧视别人</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈把我们的槽都吐完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;08年时候这句把我乐疯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金少炎的奶奶？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯嗯，于谦大爷家也是只吃自己家拉的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那另一个就是古爷了？
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书两大元老之一，金老太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然反应过来这是金家老太太吧</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小桂子</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老太太太可爱了</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一个点火的有硫磺味，第二个点的正好烧到木棍了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加上点猥琐表情就是女版刘老六感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段把老太太描述得太带劲了</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这感觉是真好</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金家的第一桶金估计是金老太中彩票</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在沙琪玛变配方，吃不惯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我再也不吃萨其马了[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后还吃不吃了</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这汗是不是脚汗</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵丽蓉老师被你们忘了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管看几遍，这老太太在我脑海里都非斯琴高娃莫属</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金家老太后！</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北方人在南方就地好过年，其他面食都能买，就是合子不好找。</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈真的很有意思啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，小花这种描写太有意思了，不是那种玩烂梗式的捅你胳肢窝，而是那种让人发自内心的笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=24][fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典的小花风格幽默</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑出猪叫声🐷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神奇</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乖乖站好</p>
`;
default:
			return '';
	}
}
        