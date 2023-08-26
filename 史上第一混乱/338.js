$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盲猜董平那缸子鱼用上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三条被吞了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这小花就不懂了，其实小狗越小越看不出品种</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈神</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没个250的智商还真看不懂呢</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那2016也有信号塔啊，应该不是因为这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2017有信号塔，秦朝没有信号塔</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。记得这是部电影，小时候看的，哭的稀里哗啦</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为没有信号塔</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实就是当年没想好怎么编</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回不去了肯定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘老六：其实就是张小花也没想好怎么填这个坑</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这玩意儿给李宗盛，他做梦都能笑醒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李宗盛：记得穿越到我梦里来给我一片</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;代入感很强，已经开始rua面粉了</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在摇头丸和伟哥都没事了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亻韦    哥</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到底是北山还是南山</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然跟他爸一摸一样，结婚的时候：你是老子还是我是老子啊</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈神吐槽</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花书里应该是央视电视剧里的水浒，大家不要带入原著，历史啥的哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只恨当时年少，看不穿老影帝啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有宋江108人就聚不到一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花对宋江好苛刻哈哈哈</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们几位是什么关系呀？我咋瞅着有些不正常捏？</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真香</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这flag就算立下了</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强把花木兰收了？你把她绑在椅子上只给放一条腿她都能打得赢小强吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果木兰一来小强就把她收了，十个月后生一孩子会怎样？</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木兰姐三观永远是那正…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;英雄不为外物所动</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书没了</p>
`;
default:
			return '';
	}
}
        