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
<p>&nbsp;&nbsp;&nbsp;&nbsp;像我这么牛B的人还有107个[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6666</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们这么爱剧透是会没朋友的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邻居二哥是吕布</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放屁 明明在别墅里一起喝的药</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张条子 生日快乐</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，邓元觉没杀梁山一个人</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈想象出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你邻居也不简单</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感啊！</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段开始都是宝金了</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强天生捧哏的料</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是没钱了才想出来的办法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是个狼人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈你算盘打得真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;何天窦贼忒兮兮：你去诈降，然后将其吃穷……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，穷啊</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王莽才是现代人穿越回去的，另外这段是犹太人追杀老什么啊？屏蔽了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;几句话道尽人的一生…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不对吧，如果梁山的是刚死没多久，就被送到07年了，那说明天庭是可以站在时间之上穿越时空的，但是前文老六又说，他们不能前知五百年，后知五百年，这不就矛盾了么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;活的忒明白</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纳 翠</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就喜欢你这种认得清形势的态度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那倒是</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只能放进去片状物体了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放dvd它也不识别啊</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有了宝哥，有了！</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=37]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下次记得大喊一声月棱镜威力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好歹来一段变身动画啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后变身前是不是还要大喊一声henshin啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美少女啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绿巨人啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这谁受得了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段笑死</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强行觉醒么[fn=4]</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隆基努斯老贼的主角教艾达王用水龙头[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多新鲜呐 我特么现代人好嘛[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑的我肚子疼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个也笑死人</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个时候的电话都是转盘拨号的，我小时候使过。</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;故事太密集了…我连原神都不打了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈老程咋进去了</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;取代了他的身份也要承担他的命运…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个神秘人有没有可能是那个金少炎(就是特有钱的那个集团公子)，或者金少炎也恢复了记忆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也很绝望啊！！！</p>
`;
default:
			return '';
	}
}
        