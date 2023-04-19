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
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那得看人，嬴政要活者，谁敢动。</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴先生，我还以为你是体面人呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种其乐融融的氛围感真是太好了</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是好几万 好几十上百万都有可能</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉这段虞姬说出来合适些哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说 昔日兄弟变美女 接受力还是很高的嘛</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦虚实项羽可是一清二楚，真下狠手直接一波带走了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这才是项羽再次输了的原因</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天地不仁以万物为刍狗</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关键他弄来的那些些人，不说儿子见爹，运气好的能自己看见自己年轻的时候。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以工代赈，相当可以</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铡 包 案</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈

</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这俩活宝</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;德性</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦其实也就比嬴政小两岁</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子和小赵给我锁死</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;08年吃火锅里的蟹棒，那确实是煮好了夹起来，那个包着的纸筷子一提就出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实应该先剥开再涮，那层塑料纸不能放汤里烫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在都是先剥开再涮了</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑户啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不做人啦，jojo</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关系太熟不好下手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牙拜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妹子能陪着小荆看蚂蚁吗？能陪着小荆练扫帚剑吗？能不能滚床单有啥要紧的，看蚂蚁才是一辈子的事啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;珂子从头到尾也没跟哪个女角色有暧昧，他也但是来岁的人了该不会真跟小赵是一对吧……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家有小赵呢！</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，全国各地都是临时工</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说宝姐是不是跟胖子学的，那么喜欢埋人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那都通临时工</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个马厩，小红兔在，瘸腿兔子在，金少炎在。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃窝边草的兔子回来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;松鼠变兔子了</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这么说我就放心了（</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这里说窝边草回来了也许更贴切点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沙琪玛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，太贫了</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花对人物的描写是真好啊，现在好多书，主角配角性格都是一毛一样的，感觉就是电脑复制人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻还是有智慧啥都不耽误</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子总是那么机智</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;角落里又走回来下面吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这些骚话连篇，小花生活经历真丰富啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然是老江湖，屁嗑儿真多。</p>
`;
default:
			return '';
	}
}
        