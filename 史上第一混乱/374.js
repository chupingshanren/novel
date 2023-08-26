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
<p>&nbsp;&nbsp;&nbsp;&nbsp;神tm推演报告</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章看得挺爽的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;题目越来越长</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一哈哈哈</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拍成电视剧，吕布一定得找吕子乔客串！！！</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生吃黄瓜，活劈蛤蟆，下到刚会走上到九十九，打遍天下无敌手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;于：这事儿赢了也不露脸啊
郭：输了
于：那就更不露脸了</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2109年说不定就没美国了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，我也以为预言了川宝[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前段时间还真去了</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;由此可知，小花物理还不错</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一句没屏蔽真不容易</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难得没被屏蔽</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我读小学那会也经常打，而且是以班级为单位的，我们一班和三班不知道为什么老打起来，反正一无聊我们就打。然后有一次，操起一把破扫帚丢过去，对面也拿扫帚回击我。我一看是新的，打完了我就拖走。再后来每次扫帚破了打架我都动用武器，那个学期我们班没去总务处领过一次扫帚，还让校长点名表扬我们班爱惜学校财务。</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人中吕布，马中赤兔，说的没错，都是二五仔</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛病，传说赤兔是母马</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小碎步可还行</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉这段不大合理，乌骓在现代死了一回，有记忆合理，但是赤兔也没和关羽重逢过，也没死在现代，怎么会有记忆呢？</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这算是暗器</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这他妈是八岁？？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这tm八岁</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;师弟，弟，弟，弟，弟，我已经出关，关，关，关……[fn=4]</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕布:我没哭，就是没有</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕布打不过李元霸，全都要怪三国演义的作者没有隋唐演义的作者吹的猛</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神特么吕布跟二胖颇有交情</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这倒是。。。荆州说了不还就是不还。。</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可算是有人说对一句词儿了</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘大和公孙瓒那是真四大铁占了三样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;公孙瓒终归还是好哥们</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹操？</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中山靖王一辈子得有几百儿女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多半不是冒充的，不过这个宗亲身份其实没什么含金量</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈明白人</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就是这么讲道理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然是个流氓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荡寇志里写吕布天下无敌，手上画戟四十斤重就能抵得过关公八十二斤大刀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强竟然能拿得动方天画戟了，可喜可贺</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个小孩你先站起来，好了，现在在坐的各位都是垃圾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;军人，要有骨气!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然觉得好萌[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这比二胖还怂呢</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜良估计智商也不大行，看见人提着大刀气势汹汹的冲过来都不带停的，还想着问话...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽说颜良文丑不弱，但比关张就算了。斩颜良算是出其不意，文丑正面交战三回合被打得心怯，转身跑路的时候关公追上来给斩了，这差距就很明显了。颜良文丑应该是一个水平的，颜良就算强点也强不了多少</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实颜良文丑在演义里实力不输关张，颜良二十回合拿下徐晃，和马超同实力的许褚五十回合都拿不下。这么算颜良比关羽还要强，只不过气势上不如关羽。文丑能一人击退张辽徐晃两个，实力不输颜良。</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹小象这名字确实比曹冲亲切</p>
`;
default:
			return '';
	}
}
        