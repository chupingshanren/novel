$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里胖子咋不说陕西话了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸气</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和始皇帝分食一个面包，这牛能吹一辈子吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒙古人的行为艺术，把一个国王关到堆满财宝的屋子，然后把那哥们儿饿死了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讽刺啊</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要想？</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，包子啊……</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亏了半个月的利息</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯 还差两下</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢这个赢大哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥是真的像个老大哥啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪崩了！</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;条件反射了</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后来这个技术让郊区一个姓王的老头学去了 大家都尊称他为王垃圾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柳下拓看见会很亲切</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也受不了女孩子身上香水味太浓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈的，以前小时候我也是这样，有些女的香水味好浓我也受不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;而柯子就是个憨憨 哈哈哈哈哈</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想了十天十夜也想不通……</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要让宋朝皇帝去zz避难</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花的奇妙比喻</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书中最喜欢之一。这段绝了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打一回仗还把姓改了[fn=24]</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么多天不上厕所吗？</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仿分家在十月的经典台词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好不是完犊子啦……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要笑死了</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放弃挣扎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心累</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈 被俘虏了胃口还这么好</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🌿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哀乐，哈哈[fn=33]</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没想明白，啥样的女人能让两个国家打十年仗</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关公大战外星人！big movie！！！绝对的big movie！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疯狂的外星人溜了溜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;火星人玩转地球😂是不是暴露年龄了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;于是你下一部就给用上了</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金兀术：你tm爱怎么叫怎么叫吧</p>
`;
default:
			return '';
	}
}
        