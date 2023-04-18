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
<p>&nbsp;&nbsp;&nbsp;&nbsp;全书最喜欢的女性角色，秀秀上线</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=4]</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喵的原来出处在这儿😂😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马什么梅？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感极强！</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白鸽落于肩头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神箭手白凤凰</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇好美啊！</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前看过的一个短篇科幻小说开头和结尾也是这么写的，不知道是不是参考了这里。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扯远了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被踹了一脚的甘蔗</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看过一个水浒同人，里面花荣把我迷的fiaofiao的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是张小花风格的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱上花荣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好浪漫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浪漫啊！</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超级浪漫！！！！！！我爱死这段了！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好浪漫啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浪漫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超级浪漫！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超级浪漫！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超级浪漫！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是哦！超级浪漫！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得浪漫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浪漫你一脸</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发家致富的好出路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然没算错？</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真就植物人不是人呗</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗窃尸体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古人知道绑架？</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈 一盆花</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛年牛头人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冉冬夜没了挺可惜的，我老觉得这老哥被ntr了……</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就冲这一条 花荣就不能无视秀秀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强刚到医院的时候，戴宗就在那掉眼泪呢</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面讲了安道全和他十四房姨太的故事</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原著里李逵虽然杀人如麻，但也有很朴素的正义感</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么邓元觉还记得这一世 花荣全忘了呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花对数学是有多大的怨念啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说你，我也不认识</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我和科比同砍九十分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呸流氓</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精辟啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑晕了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汤隆这是看见自行车了</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想吃！</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话有深意啊</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接说失忆了不就完了么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;严重的事多了去了。梁山好汉们嚯嚯一年就走了，可花荣(冉冬夜)可是要活到老的。而且你这相当于从阎王手上抢人，冉冬夜说不准本来就该那天死 ʕु•̫͡•ʔु ✧ </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那嬴胖子怎么说</p>
`;
default:
			return '';
	}
}
        