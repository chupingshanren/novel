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
<p>&nbsp;&nbsp;&nbsp;&nbsp;梦已经醒来，心不在害怕。吓死胖子韩红的一首歌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是歌词吧，那个年代很流行的歌，不百度还真忘了歌名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你昨天晚上就该走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最爱看后面这段了</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一睡八千年？</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肚子不得变平坦？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;儿子不得变成受精卵？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能保持自我继承下来就是最厉害得了 看看那几个都啥下场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中国是四大文明古国唯一幸存者没错吧[fn=14]</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;几个月的娃还能有么，得等娃出生吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;工……工具人</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强哥…你带我走吧 我要跟你远走他乡</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这话说的。。北宋永远是我国领土不可分割的一部分！认真脸！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;49年以前算旧中国，从49年起算新中国</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看你怎么算了</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奏四奏四！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;带走我，一个人自转的寂寞。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到遥远的以后</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在这句话这里留个言，兄弟们，我对不起大家的期望，人崩溃小白兔有对象[fn=12]，虽说我想和兔子同桌喝酒大块吃肉，顺便喝完了一块泡妞（主要是我想泡她）但是人有对象的前提下我再腆个脸干这事多多少少有些不地道，网络口嗨归口嗨，现实中不能这么干。
等兔子没对象的时候我再和大家讨论这个吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我支持串爆，他能带我们打上月球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;fly me to The moon</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;take me to the moon</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;張雨生，帶我去月球</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正我已经来了.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像我小时候要春游，早早起来的样子</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一点毛病都没有。让我想起来一个笑话，每次问老公去哪儿，他都笑着说“去找小三”，闺蜜们都觉得我老公幽默，后来我才发现他不仅幽默还很诚实。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;究其说实话呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了这么多遍，才发现这真是句大实话啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大实话</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子以为是煤窑还是砖窑吗</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实，和吴用说说，借用个几箱金子没问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是一个聪明的穿越众该做的事嘛，那种跑到古代去白手起家的真是弱爆了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该换银子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妹子的 当年看的盗版书里这部分没有看过 </p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋朝应该不流行黄金吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么多金子重的车都塌了</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抚摸机魂机魂大悦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是什么神预言，我可以摸摸你的奖杯吗？？？？</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不吃我不喝，我就要见诗诗</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是一颗蓝药丸闹得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喝脏水了[fn=58]</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金延影视更名改姓叫小强影视</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强随便去个时代装半车东西回来，基本就够金少炎全部家当了，尤其他好几个客户都是皇帝，人家家里随便什么东西也是官家生产的精品</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈看小强这格局</p>
`;
default:
			return '';
	}
}
        