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
<p>&nbsp;&nbsp;&nbsp;&nbsp;那长城呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点王家卫的意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花功底还是不够啊——把这一段放到上一章最后就好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到现在，米帝总统看的都没有小花清楚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是有用的。很多人都不会科学翻，墙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最讨厌这种铺垫了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但实际上还是起到了一点点作用的……</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不是后来知道刘老六身份，我差点就信了！</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不妨把话讲的更明白一些</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们总绑着自己的一只手，是战胜不了那些不讲武德的敌人的，现在我们办案最大的痛点，就是能用的手段比敌人少</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天天厂里呆着，酒气熏都熏入味了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是的，干什么就不沾什么</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强其实是刘老六私生子吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是人精</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那叫3p</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猝不及防啊！[fn=44]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这车开的太快了，没有过程</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我硬了</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿什么玩？你不是不玩了吗</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佳酿！老酒了，现在基本上都见不到了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;厂长不可以兼工会主席，违法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;倪？嗯，有点意思</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对，透瓶香，可惜从此没喝过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原版的三碗不过岗有另一个名字就叫“透瓶香”</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从小。。。</p>
`;
default:
			return '';
	}
}
        