$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么还唱起来了呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞧这文采</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁说女子～不如男～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花信手拈来啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唧唧复唧唧……背这玩意儿从来没合格过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要用豫剧唱腔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次都是唱出来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个梗我笑了好多年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戳笑点。。。</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！两章，好多，不想搬了，说下大概剧情吧

王垃圾其实是柳下跖，也就是盗跖，他把混混解决了，跟小强聊着聊着副作用犯了人格分裂又变回去了，好汉们都去新加坡旅游（比赛）去了，包子和小强腻歪了一章，最后刘老六领了个人过来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了几章？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去   这是少了多少啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了好几章操*********起点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了一章?</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了，以后有人问我就说自己属鼠</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5+2开始成形</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到娘娘腔我以为高长恭呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我全书最爱的来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花木兰</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就你鸡贼</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看出来也不说[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;同行12年不知木兰是女郎[fn=33]</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男生女相 天生富贵命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二尾子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃个桃桃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两年叫小鲜肉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什麼樣的鎧甲？甲片不夾長髮？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花是不是对伪娘有什么误解？起码2007年的时候有什么误解？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男生外表偏女性化叫秀气，内心偏女性化叫娘娘腔，这个要区分开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男生女相，太吾妖女[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东北的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二尾子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东北的</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1楼不是在幽默吗，还有人当真吗😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那会算钓鱼执法，毕竟秦朝捡钱不交公惩罚很严重</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;路不拾遗这说法……不是项羽的年代发明的吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以路不拾遗的源头在这儿吗</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女同狂喜！！！！！！虽然我不喜欢铁T，但那是花木兰耶！！！！！！花木兰耶！！！！！！！嘶哈嘶哈</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木兰？晚上69？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花花赛高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实历史上没有花木兰这个人。。。</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唧唧复唧唧
木兰开飞机
开什么飞机
波音七四七</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小时候背成木兰摸唧唧</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只会脱不会穿，而且还脱得很娴熟很专业</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是真牛</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;存在即合理默认为天道允许的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还劈飞升了呢</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈刘老六会不会跟你有亲戚关系啊小强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也知道啊哈哈哈哈</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木兰是北魏的，这个国家就是是个鲜卑国家，第一代王叫拓跋焘，花木兰的姓氏在当时北魏也是一个大族，可以是她是鲜卑人，不过我无所谓啦，当年入了长城以南异族不管是鲜卑也好匈奴也好，几百年前都已经成了汉语了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木兰真不是汉族。。。</p>
`;
default:
			return '';
	}
}
        