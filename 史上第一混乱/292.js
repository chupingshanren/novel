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
<p>&nbsp;&nbsp;&nbsp;&nbsp;张大人，食大便啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十步之外枪快，十步之内枪又快又准。</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这事我干过！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子必须陈道明演</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彭越嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子还是那么6</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看见天上那只大鸟没？我必射其左眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有十几年了吧，这句话我可一直没忘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别人，客观事实。自己，主观想象[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;起步以外，枪快，起步以内，枪又快又准</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要脸不要嘿</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“雷公子想家”味儿太正了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来吧小公子，给你的爹地打个电话吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷小朋友迷路了 想家了 哭的可伤心了</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸君武运昌隆！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多么感人肺腑的交流啊……感动不敢动？敢动……敢动？不感动……不感动？强爷，您定……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天印度月船2号差2公里就到月亮了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;祝你们圆满成功！</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是写错了吗，前面柳下跎和二胖都知道是在对付小强了</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你 以 为 你 这 么 干 我。就 会 怕 你 了?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你以为你这么****** 就会怕你了?</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;墙哥太会说话了，台阶都扑在老四脚底下了。。</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强哥他没记住你光记住你老婆了</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子啊</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;基本上……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子要是知道你这么说她，会不会榨干你？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，那时候确实有喜欢偷光缆的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;声纳无铜，捞之无用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光缆无铜盗之无用，笑死我了</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;12点哪个台还有啥韩剧呀？浪漫满屋呀？</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点孔捷的感觉</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说！500万还要不要了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2333</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦被楚军追杀的时候为了减轻负重曾经把自己两个孩子从车上踹下去过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难怪刘邦招人恨啊！哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你仔细想想你除了踹你儿子下车，还有哪些</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你儿子命是真苦那会没少让你减轻负重，到了当了皇帝还让你媳妇收拾了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟你比呢？你比他儿子多吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘盈:爸，你礼貌吗？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是项羽想炖他亲爹都要来一碗的主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦被楚军追杀的时候为了减轻负重曾经把自己两个孩子从车上踹下去过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这事邦子也干过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟刘大耳的祖宗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这事儿邦子干的出来[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这俩不一样啊刘邦是要得天下雷老四是要没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难怪刘邦招人恨啊！哈哈哈</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是邦子知道疼人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很有画面感[fn=7]</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还得是邦子…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关键时刻还得坏蛋好使，哈哈哈哈</p>
`;
default:
			return '';
	}
}
        