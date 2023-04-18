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
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不到哇！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;知不道</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花的小细节真的好</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我想起刘老六传奇里的一个人</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再给你三姨夫吃一颗，说不定他就是李莲英。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三姨夫当时就瘫了</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋徽宗：说实话，我是没脸见人的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北平无战事的建丰同志，顶级大佬只有声音哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大红灯笼高高挂也是通篇男主没有正面镜头。</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你最好别那么玩它，那其实是一个塑胶炸弹</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这让我想起郭德纲的相声：跟轮椅赛车，这赢了也不露脸啊！输啦…。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不露脸的事多不多我不知道 但是我知道不要脸的事已经好了很多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁说不是呢</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱笑死我了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然还是想象中的那样</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正不接雷管不会炸，放车上就当备用弹药库了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;塑料炸弹其实很安全，不通电稳定得一批</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早让你放下不是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强想看的肯定都是金什么什么来着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦——意识流～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你确定你不看  真香警告一次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真香</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们也没看懂。。。[fn=24]</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王导吧</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大型纪录片—汉朝游骑兵。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句又变成王导了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦朝游骑兵之穿越宋朝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金少炎：把我我媳妇儿哄开心了，我就开心，我开心了大家都开心</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骗子！这部戏我等了好多年都没上映。</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈[fn=26]</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剧透狗会舍得支持正版？素质在哪方面体现都是一样的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么没弱智说伏笔了</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苹果？</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;iso9001</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;iso也可以是感光度，还可以是镜像文件[fn=26]</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ψ(｀∇´)ψ</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;微型炸弹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是个炸弹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你别玩那玩意儿！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像有删除</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个石狮子才是机关开关</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放下！</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛病，国内团体四强三个都在这了</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恐怕跟新加坡打去了吧</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小刀剌屁股--给你们开开眼儿</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国安局的“顺便”，小强你可想好了，没准儿这才是正题[fn=14]</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放下吧求你了我怕书突然完结[fn=14]</p>
`;
default:
			return '';
	}
}
        