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
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不艺术来源于生活呢，小小花出生了</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;演砸版贼搞笑</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃饱喝足再上路。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一大汉支援第三大汉</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萌萌，站起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草堂春睡足，窗外日迟迟。[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金城武的略懂~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是赤壁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越光宝盒？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曾志伟版。。。</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我玩三国杀好爱黄月英和甄姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在有两种说法
一种是真的丑
一种是拌的丑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄月英:谢谢，有被冒犯到！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸葛亮：你老婆才不好理解呢！
小强：那确实</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天庭人贩子小强</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑红金？</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那出生证的时候，出生年月？
答：公元前223年[fn=4]</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生孩子有点太不负责任了，古代也没有胎心监测、也没有催生针更没有突发情况做手术的条件，别的小毛病就算了，生孩子在古代太儿戏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，小花神预言啊，这都能说对（doge）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哟，还真让张小花说对了</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得项羽后来，是所有这些人里面，说话语气什么的，最像现代人的，尤其像身边的哥们儿，什么事都不落空，张班儿似的</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奇瑞捷豹路虎发现神行！</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;袁术袁公路</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主人什么德行，马就什么德行。那俩什么人啊，傲娇小王子。吴三桂什么人啊，小岳岳来了都敢说吴三桂不要脸。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看此马表现，虽稍弱于小黑和红儿，但比之二胖骑过的那两匹还是要强上一筹的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强真抖m 人家不喷还觉得人家不行[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兔子还行，小花不行啊</p>
`;
default:
			return '';
	}
}
        