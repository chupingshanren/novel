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
<p>&nbsp;&nbsp;&nbsp;&nbsp;两条毛腿肩上扛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图呢，这不给张图？盖楼不严实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章很搞笑的，小强要娶贴饼子，回家跟包子一起开早餐店，说是还缺碗粥，太干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书还能看？特么的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两条毛腿肩上扛！</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;傻子犯病的时候还没到呢，你高兴的太早了</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实在受不了，可以试试夸克——这是一款浏览器。不要误会，不是向你们推销盗版的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尿血也能被删？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九九章无非就是秦始皇一会杀主角，一会不杀主角嘛。特别搞笑的章节干嘛都删了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈卖批</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章又怎么了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这特么还不如个盗版，盗版也没抽成这样吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又特么少了一章
每次看到缺少章节的地方
我都想知道
我是不是下了一个假的起点APP</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少个没完了是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;exm?还来?</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穷哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑岔气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二他妈妈拿大木盆儿来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33][fn=33][fn=33][fn=33][fn=34]</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;害 看的不就是出岔子么 [fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉又要出岔子</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三观很正..满意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;废话，你羽哥算得上你老老老老……老丈人了，哪有老丈人撺掇女婿出轨的？胖子，胖子给包子喂了一年饭，心当然向着包子啦</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么有郭德纲的声音？？</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好讽刺好真实</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千娇百媚可还行</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那地方软软的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家俩眼睛分开工作的</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死😂😂是柯子的作风😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是兄弟</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起12年春晚荆轲刺秦了，[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗仗人势的完美写照</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太坏了 踹人</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;燕国使者此番前来，所为何事？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大殿上说话跟百姓唠嗑一样😂</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也能理解为什么历史改变了，小强太搞了，不像原先那么庄严肃穆</p>
`;
default:
			return '';
	}
}
        