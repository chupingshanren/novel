$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙哈哈哈哈哈哈哈哈哈</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，所以知道为什么古代结婚都是大早上去接，傍晚办仪式吧，太热了(开玩笑)</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我到现在都不知道我们市长是谁～～～</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚想问为什么不发微信，哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=8]李咸鱼，干一行爱一行</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我第一反应是短信费…</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张校长可不简单</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这哪还是县太爷，最次都算是太守</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好感动，充当婚房的当铺变成大别墅</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阮小二这时候应该投胎去了，或者正在平行时空的梁山，是张顺被醉拳打下擂台，倪思雨的犯二的二师傅，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小柔哥来追求自己智深姑娘了……</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马上就要结婚的我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;温馨</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老张这也算大庇天下寒士俱欢颜了吧。育才那么多孩子读书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小度小度 导航去快活林</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老张真是个好人</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去去邪，别碰李鬼了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乐疯了。你把铁牛娶了吧。</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小赵：小强一拿箭 百米之内全是红色 果然高手  溜了溜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是小赵机灵~~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能在白脸的预感里小强的一箭那真是漫天遍野无处不在射哪都有可能</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呦  要开车呢</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;估计小花嫌写了麻烦哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大儿戏了吧，两老都没到</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一般酒店这样整，连菜也不够，最起码大件都是有数的，比如螃蟹龙虾海参鲍鱼扒猪脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段小花写的粗糙了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;預定五百人，來了兩千，酒席能安排的上嗎</p>
`;
        case 88:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郝老板不会就是  和天斗  吧？</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐伯虎点秋香桥段</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈  包子还以为只包了一层楼吧</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冰箱门又没有门框咋夹小纸片？</p>
`;
        case 92:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好女人啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈好可爱</p>
`;
        case 94:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家让让，要生了——</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家让让，拉裤子上啦～</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早上迎娶，晚上吃飯，洞房一樣是晚上吧，哪有下午在洞房的…</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强结婚，没钱送礼，要不……全订？</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;横幅给我写本命啊喂！</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈我的妈</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子真的是看网文这么多年来，最喜欢的女主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一时间忘了这俩人是谁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好讽刺啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里看的我特别乐呵，别看咱包子大大咧咧的，可是感情很细腻呀</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯嗯嗯，礼炮的烟起来了。云里雾里的[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三层、高耸入云…这两词放一起怎么这么别扭……</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凤凤也很传奇了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有排面</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;300来了吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有伏笔么？</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不是吗？花瓶精</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真虞姬来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俩重量级大佬啊</p>
`;
default:
			return '';
	}
}
        