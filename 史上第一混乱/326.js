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
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一章终于回来了！撒花！</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这句鼻子还是一酸</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完了我脑子里的秦舞阳都是这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是二哈那种白多黑少吗😂</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目啊</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;害，这么弔，我还以为你是十二拜相呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞧给你能的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这人脑子可能不大好</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是还没吃诱惑草就恢复记忆了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实最疼小强的就是轲子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我圣代那么大的眼泪啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的轲子回来了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柯子呀</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我6年级看的，大概也是13岁，看来差不多啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那只能说强子你看的有点晚</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没头脑和不高兴</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来就不是傻子吧，只是在小强那想开了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里荆轲好像还不是个傻子</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个好盆友</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这就笑了，笑泪目了。[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到位了，到位了，A神～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看到这都很有感触，太喜欢赢哥和荆轲他俩了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈、二傻真是好演员
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然眼睛里进了块砖头……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有爱啊啊啊啊</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花版荆轲刺秦王，除了他俩谁都觉得这是在演戏[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲刺秦王，荆轲刺秦始皇感觉怪怪的</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抢劫警车，视同强奸！</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隔断千年的时光，阻隔不了心底的友情</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讽刺当年的时政……</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑出翔了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没想到还真是基本国策</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;08年就已经是这样了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲讲呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花你泄露天机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;! ! !</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈
</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这搞不好会改变历史啊，史记里写上五十荣五十耻😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈[fn=26]</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太损了啊，哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊嘎嘎嘎嘎嘎</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;踏马的，小强太能扯了吧，笑抽了要😂</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑的流眼泪哈哈哈哈哈</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段把我乐死了！</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花是狗</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子哈哈哈哈哈，还记得呢</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿喝不死的这就来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的确也喝了，不拉了一晚上么。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;傻子一般都有强人念…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大智若愚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和洗衣水还记得呢，有点感动，荆轲就跟赵白脸一样吧</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强难道不想一睹剑神的风采吗，这会儿的盖聂愣是一点戏份都没有</p>
`;
default:
			return '';
	}
}
        