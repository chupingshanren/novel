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
<p>&nbsp;&nbsp;&nbsp;&nbsp;复仇者，集结</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吹冲锋号了</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啥？你打平安县城居然敢不让我和老丁帮忙？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人物性格非常鲜明！</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国安的人可以叫一下啊。不是介绍认识局长了吗，非法拘禁一波带走他不香吗？</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心理素质高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;敬请养精蓄锐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;养精蓄锐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这时候看着难免有些联想，轲子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;╮(￣▽￣)╭</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷老师和金兀术干了一样的事，小强只出动几百人，已经显得很客气了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该再加上大汉并肩王、秦朝郑王之类的封号，努力努力，争取头衔长得能赶上龙妈[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷老四咋混的？育才已经享誉中外了，他居然不知道小强是校长？</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3000多亩，这会又变3000公顷了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是个个地方都安喇叭了  要不然离得近的玻璃全干碎</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武二郎！不愧为好汉！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是武松的脾气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重义的兄弟啊！这才是爽点。</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关键词， 头圆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看我包子姐多招人稀罕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;江湖儿女，难怪能撩到武松</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是江湖兄弟，义气中人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么没人夸佟媛，小强是方振江的兄弟，但跟她就是普通朋友，她也很仗义了</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这事没问题吧，锅按在背后随便就摆平了，毕竟是文物古董引起的，小强是背锅啊。</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不是一级厨师吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是街头混子，只要是打架都会很兴奋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这地方有点感动了说实话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怎么主副业又变了，上回你可不是这么说的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯哼，现在暴露了吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你终究还是说出来了～(￣▽￣～)~</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这整的跟俩人睡了一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那一夜你没有拒绝我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那一夜…我一辈子都忘不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Õ_Õ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🤺🤺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好***</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=35][fn=3]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老实人说老实话。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
default:
			return '';
	}
}
        