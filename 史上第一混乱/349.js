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
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会...爱上自己了吧[fn=9]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种感觉...也太好了吧！！！</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老张头：“俺飞升了！不来你这了，没想到吧？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太极拳明代的吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世人对太极误会太大了 25年前我的散打教练就是练武出身 他说过 太极其实是至刚之拳 所谓四两拨千斤首先你自己得有千斤力才能4两拨 巧力巧力 自己没力何谈巧字 都是那些所谓大师忽悠的懒蛋的 不做基础体能训练 光会摆个架子 算个毛线太极</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张真人估计得死了成仙了才问的了[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张真人估计是来不了了，毕竟人家是真君一级的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张三丰创的是武当拳，太极拳只是因与武当拳相似，都是以柔克刚，才被金庸写的是张三丰所创，你是当作者的，应该明了吧[fn=10][fn=10][fn=10][fn=10]</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来就是一个人，还排什么[fn=33]</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了农药</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段是不是张小花的亲哥哥补的？小花就是二花？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怎么把机密说出来了，这样大家都知道你楼下有个傻子了，这样会没朋友的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵白脸原型？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大花：？？？</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跑步跑赢了第二名还是第二名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还真是26分啊？你怎么再听了一声嗖后又听了22声就是27箭啊！小花果然处处有他自己的包袱。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花同学对飞虫拟人化的描摹非常的贴切生动，打喷嚏时的显著特征也总结的很到位，足以看出在作文写作上用了心思，值得表扬，再接再厉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脱缰的野狗老师怎么评价的？</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;14.5</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原谅小花吧，27支箭让26分的小花来数，太难为他了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这应该是21声嗖，后面是22个啪才对</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武松数学不错啊，去高考没准也能拿26分</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然多两个抢位子的</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被老师表扬算什么。你当年上中学把这段写在作文里能名垂校史</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这歪车也太[fn=10]</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯 有意境</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个小白脸 在哪偷偷发展基情</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十个亿呀十个亿？[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑补西虹市首富</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;斩铁斩铁斩铁斩铁斩铁斩铁斩铁斩铁斩铁斩铁斩铁斩铁斩铁斩铁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;耶耶耶耶耶耶耶</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是就是（此处略去若干就是）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;靠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不一样不一样不一样，（此处略去一百多个不一样）[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;史上第一混乱是严谨的纪实文学 希灵帝国是严谨的硬科幻文学  没毛病！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胡编体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神™记实体</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;华荣是坟前自尽的。可见人生之绝望。</p>
`;
default:
			return '';
	}
}
        