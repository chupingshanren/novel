$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这例子举的生僻，感觉就像是你这么干过一样。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在下的舍友说曾遇到过，为此废了他一张卡[fn=33]</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;锅盔她爸，哈哈哈哈</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强子手里这块砖以敢下手又打不坏人著称 居然晕血</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反复无常的小人</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是早有穿越后宫之心啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岳父还可行</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒙毅：校长，您怎么看？
小强：我……我就站在这儿看，看足180天（这话好像挺耳熟的）</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你顺便说可能还有下次呢</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你给我滚下马来！</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个行业太卷了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😄😄😄😄</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强来亲戚了</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;服了，绝了你都</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一世英文名损失殆尽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花，我一世英名尽毁你手[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;英雄被气的拉裤兜子啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈咋能这么有趣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忽悠！接着忽悠～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想达叔了[fn=12]</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼实在人，说得实在话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咱这是纪实文学，得严肃</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很细节，是我的话肯定尿着血就上殿了</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦始皇身边的太监都跑萧公馆来了😂</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵，6</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能是迷糊时的李斯害的，进谏不能封王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得亏这是秦始皇，要搁一般的君主身上朝局非乱不可，这是把天子威严当儿戏了</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下次给你找萨其马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你收小妾的目的不就是干么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太干，整碗带汤的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精辟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂了，水不多</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈笑死我了</p>
`;
default:
			return '';
	}
}
        