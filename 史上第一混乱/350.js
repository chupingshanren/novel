$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尔等匹夫！也敢占山为王？啊不对，拿错稿了。
诸位大侠！替天行道真乃大丈夫，仰慕已久了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年，冰河世纪工作室解散了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点不严谨，不过无所谓，应该是奉官家或者圣上或者圣人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有画面了</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那他老婆赚了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按别的小说就是夺舍了，只不过夺舍的是自己上辈子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是冉冬夜这个脑死亡相当于文档被破坏了没法修复，吃了药直接用华荣给覆盖掉了，毕竟小冉也没下地府喝汤，身子还活着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冉冬夜哭道：“原来我只是个工具人。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;相当于一具活着的尸体，然后给他装了个活着的脑子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别人吃了药都是保留两辈子记忆，为什么花荣只记得上辈子？因为冉冬夜是植物人？算是死了吗？那他吃了药记起的就该是冉冬夜的记忆啊</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年还没看星战还纳闷来着，外星人就是外星人，叫绝地武士干什么😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问题是据说有钱人就是这么无聊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以看看卡孟德的我的儿子祝佳音，就是有这么无聊的一群人…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是成本的问题嘛[fn=17]</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不错了 知足吧 你不来 他连个露脸的机会都没有 连个龙套都不如</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蓝色生死恋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一老段戏份真不少</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好一个心里暗爽[fn=33]</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想不通，梁山在山东，方腊在江南，平方腊该往南去，为什么是“征北”？</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太有画面感了</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看你咋滴？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小乙哥[fn=33]</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差不多得了</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你和王垃圾肯定有点血缘关系</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说对了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐牛？</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扈三娘上了山之后不是这个性子，要不是经历使然也不会变个闷葫芦，唉还是把她和矮脚猫拆了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁山不是在山东么，无论造反还是平方腊不都得南下么？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;sb
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;深井冰</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姓王的？会不会是王远楠同志</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后没有第四卷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李师师不开心了捣乱？</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来看这段笑喷了🤣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高桌子低板凳都是木头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张大花张小花都是小狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金疙瘩银疙瘩还嫌不够</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天在上地在哈你娃包牛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;走一步退一步等于莫走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高桌子低板凳都是木头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高板凳低板凳都是木头</p>
`;
default:
			return '';
	}
}
        