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
<p>&nbsp;&nbsp;&nbsp;&nbsp;别射，后羿射下来九个了，再下来一个地球就完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蓝白社的墨萝莉已经射过了</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是真把小强当自己人</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图何在？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花的文学功底没得说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又一个角色活了</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;徐校尉还在呢</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Every sha la la la
这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡彭特的yesterday once more？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡本特兄妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是军师实在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昨日重现是when I was young没有once和very</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昨日重现吧</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是男护士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冷俊一笑，稍稍一偏头。不是常年在手术台上主刀一方的大外科主任不可能有这个架势。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是人才啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;随时注意抽吸！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;言外之意，在当时的社会大环境下，就业前培训 学厨师和护理的太过饱和，都沦落到开赌场（摊摊）搞讹诈和扒窃的境况了 ……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你tm还当街溜子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我是卧底</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那必须得安排的明明白白滴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能太草率</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是，角色扮演俱乐部嘛！</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四个I就离谱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11]我一直以为是阿伯吃得。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;起码得再加一首生日歌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;HIGKLMI</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花你高考英语是不是62分[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我学的好像是i can sing my abc </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后一句还真不会…看来我比小花英语差[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是小学一年级教的字母歌吧[fn=11]</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;nb，人家在桌上笑谈，他俩直接上天了</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们都是一号发，赶上五一国庆什么的三十号就发了，老板好人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发钱时间越早，说明单位越好--在钱一样多的前提下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;15号发太晚了，花呗借呗都是月初的，一号二号发才是好企业</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强你不是说学校成事业单位了吗？怎么还15号发工资，你这个周扒皮……小强姓啥来着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我生日…</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就知道！！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是小强最后的倔强，人前不表露真实的自己…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;豆腐进眼睛了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;豆腐都被好汉吃光了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;葱花辣眼睛啊！！</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀秀:我虽然叫秀秀，不过你是真的秀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀秀：秀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是忧虑是不是守活寡吧*****</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆二傻，赵白脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花二傻</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以你还是光着睡的？</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常黑文艺青年</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弹棉花也成啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弹弓就行了</p>
`;
default:
			return '';
	}
}
        