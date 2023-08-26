$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是说赢了以后再让项羽决定吗，咋直接恢复了</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年还有人猜金老太太的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好讨厌啊！！！张冰这个emm</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁这么坏 竟然猜的是包子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我猜小思雨点</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;几匹马都好上千万了吧</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丫鬟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂热？</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心机啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有反转</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句问的有些突兀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假的</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会游泳那个小姑娘是虞姬吧</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这句台词就想到黄晓明的杨过[fn=14]</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被傻子嫌弃了还</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得我可以(站出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一年就走了，还是找个差不多一年走的合适一些</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老张……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜老师合适</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李踢裆可以不</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一次在UC里看了篇帖子，大概也是08年左右的事，媒体推测小贝十多年后也就是现在的样子，还附了张模拟照片，哈哈，推测他现在头发掉光成秃顶了，肤色晦暗，满嘴烂牙，没心没肺贼忒兮兮的傻笑着，像个吸毒瘾君子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剧透刷下去






[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剧透刷下去刷下去
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
禁止剧透！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜景生是周瑜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜景生不错</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;么事儿，我也接受不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真不能接受，张冰用现在话说就是个绿茶婊。配不上千古第一霸王。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张冰哪是富于心计啊，明明是心眼不够用……
你接待的那些个帝王将相，哪个不是富于心计，你不都挺喜欢的，因为人家用起这些得心应手不让你觉得突兀啊。
张冰就是心眼不太够使，用的小伎俩都太明显了，连你都能看出来，可不就流于表面招人厌烦了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;富于心计，你们当初的做法算什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假的真不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就是假的</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是你现在给项羽泼凉水我怕你被他丢进嘴里当豆嚼了还不咯嘎嘣的</p>
`;
        case 89:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子姐你看他！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多新鲜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;*****</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=32]我还不上牌。你给我开罚单吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;载人，还不戴头盔。[fn=4]</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三丈外，小强轻功又精进了</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸亏没穿，要不本书第一个嗝屁的人就要诞生了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是有多少人能挠到</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;23333</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜啊，项羽的神勇是史书里的，吕布的神勇却是小说里的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽更强一些</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一见大娘们儿眼就变数码的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;遇财起意，提笔忘字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这可不是步步陷入不仁不义，你是开局没两章就不仁不义了</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕布死的时候没怨念？只要大耳贼说留人，曹操不一定杀，大耳贼都说要杀。而且貂蝉都没介绍去哪了，估计是跑了，要不曹操能不声不响？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹操也恋妻啊，就是恋的对象是人家的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020年七月末…杭州杀妻碎尸案破获了…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问下，当年有这事儿吗？没印象啊</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打仗跟打仗不是一个意思[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以公为大酱，布父之</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿，flag立下来吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白门楼基建谐会表示强烈谴责</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白门楼上挂满了吕布</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能被盖聂打败你就烧高香吧！</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;破！~了相啦…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就认便宜吧，得亏是我那个枕头，要是用我那小被打你，你早死了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段有郭德纲的影子。</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我正在喝水啊……</p>
`;
default:
			return '';
	}
}
        