$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后羽哥去找你也是因为大裤衩</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个臭美劲儿</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是和你睡，不是睡你[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今晚睡小強[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Yoooooo～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎哟，基友来了都不要老婆睡了</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他追上也杀不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢胖子的兵你也好意思杀</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先救妈，然后去你家吃席</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夺笋呐</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵高干的</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小环自此埋下了千年夙愿…………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是不是已经在心里听了虞姬的劝说了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你倒是想</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑的都不行的啊，大把的钱给</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他的悲哀，谁懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大锤八十，小锤四十😂😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;heitui</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我先呸 呸！
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长亭外，古道边，芳草天[fn=15]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要脸不</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应有我的头像</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应有呕声</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没用，江山易改本性难移，项羽就算知道前因后果，优柔寡断的性格不改还是斗不过刘邦韩信。名将之所以成为名将是因为会随机立变</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是书面点的话？你怕不是要把我笑死</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要他回到刚穿越走的时候不就行了</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们为什么要打他。[fn=4]</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能打通叫警察叔叔来把这些开团的全部铐走。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“喂？！警察叔叔，我困在秦末啦！！！！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个手机居然能带回来？</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽：桀桀桀，我要这世界给阿虞陪葬！</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提示一下，这玩意应该是青铜的。</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时间又错乱了 一共才5000年 你一发动就几百年 还开了大半天？</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再送，假败[fn=34]然后就是打脸来得如此之快</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈和项羽一个思维，项羽刚来时候也觉得垓下不远</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花真的把项羽写活了 军营里的项羽意气风发 和现代的项羽没有刻意写哪里不一样 但是他就是不一样了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我羽哥啊 真的好</p>
`;
default:
			return '';
	}
}
        