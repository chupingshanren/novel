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
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可控因素</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是阮小八啊，二五八嘛</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽不是还要了烟吗[fn=5]</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戴习惯了眼睛，突然摘掉之后不仅看不到了，连耳朵都不好使了。[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都上升到哲学思辨了，你可以呀，内心戏很多嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从三d切换成标清</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前没有眼镜也就习惯了，有了又没了，怎么受得了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在睿智可不是夸人的</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给重了就疯了[fn=33]</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戴隐形以后也是习惯性扶眼镜</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我睡了多久</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句特逗</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来个位面穿</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有些字想不起来怎么写 但看了能认识</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞧这生僻字用的，茕茕孑立。。。要不是现在有生僻字这首歌，我还真不认识</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阮小七在陆上没那么厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，小花你可太有梗了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我擦，快笑死了…</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真道理😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有理有据哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于找到根源了，我这就写到百度词条里。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来这句话是这么来的，涨姿势了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈 说的跟真的似的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;煞有其事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;woc这忽悠的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;┐（─__─）┌吃了吗</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感情是俩臭棋篓子</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不中</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不中</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不！</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是那52位兄弟</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强也是臭棋篓子</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喝自己的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至此，安道全终于想起了他当野人的点点滴滴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后连输十五把</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴用：我没招了，但我不说……</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;链式反应</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瘟疫公司偷了你的灵感[fn=31]</p>
`;
default:
			return '';
	}
}
        