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
<p>&nbsp;&nbsp;&nbsp;&nbsp;想念已久</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全体起立!</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三口一头猪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这半儿么核儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是祖龙啊</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目，柯子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜想轲子了</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有几个人记得无性花妖混乱记~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除非你上图，要不我不信[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花tj</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皮皮花</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忘不了金喜善是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一会寻秦记都来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个是不是神话梗😂</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老司机了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不然怎么对******女明星如数家珍呢</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个说法听起来高端</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然很萌！</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疑车无据[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真笑死，小花写点什么都能接上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不拍就行，摸没事儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;警报器</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，这个画有了</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神TM下一波…
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下一拨好，斗四咸带鱼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饭后一根烟，活过赛神仙。</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两人蹲在门口抽烟，画面太美我不敢看啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦朝空气多好啊！！人们的肺多好啊！！多好的将军，你居然给他带成了老烟枪！！</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个乱啊😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一波还未平息，一波早就过去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈我快笑死了</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李斯精着呢，说不定就整个什么幺蛾子</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好有道理</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为最难的赵国已经被武安君打残了。。。剩下的都是弟弟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啥叫大哥。
你觉得牛逼的事儿。
歪在他眼里就方便滴很</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不至于吧，当时项燕不还灭过二十万秦兵吗</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯物史观</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不算马克思主义，所有的政治经济学都研究生产力生产资料</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈(ಡωಡ)hiahiahia</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲来的时候好像韩魏已经没了来着？</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的秦舞阳 哈哈哈哈哈哈哈哈哈哈哈</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“破案，有时候就是这么简单”老邢语。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想这么简单</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子的生活就是这么朴实乏味</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦始皇好可爱啊</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，这一遍又一遍滴[fn=26]</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这10分钟有点长</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;告诉他，清口气用的，怕你熏到大王。</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次看的时候笑死了，祖龙太可爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暑假去延安，在那边吃了个什么冰苹果，巨好吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苹果还真是秦国（陕西）特产</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看成了泰国特产…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;依依不舍的，哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到底是吃了国的祖龙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子的吃货属性真是太戳萌点了！</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这苹果核不是能种吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥好可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😄😄最喜欢嬴哥了</p>
`;
default:
			return '';
	}
}
        