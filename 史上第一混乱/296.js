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
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真按史书那个荆轲碰瓷式跟盖聂决斗过的说法来看，这俩人的友情很有意思啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子自己就知道小赵是盖聂了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剑神出手！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦时明月盖聂么有代入感，还是花式小白脸带劲儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起来秦时明月里的盖聂了</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊死去的童年开始攻击我：那小子真帅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那小子真帅hhhhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又一本书404了吗[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又欠一本</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戏说千年史要是真写出来就好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两本书你要真写出来，你就不是大神级了，最起码也得超神级</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真来了胖子要倒霉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一句映像深刻，那么多年了读起来还是有一种怅然</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大学的时候看这本书学的这四个字，这10年来一直坚守着这个原则。</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传奇秃子😂怪不得时迁吃亏了呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种龙套凭什么打赢项羽</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给小赵吃一个蓝药脑子不就正常了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东方不败和杨莲亭即视感</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;球形闪电哈哈哈哈哈</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他好牛啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小赵真帅[fn=1]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两句话把上辈子的剑神带回来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点点帅哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剑神就是帅啊！
不高兴和没头脑…</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打地鼠</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花自己都忘了</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坏了朋友们，今天的视频就到这里吧，麻药也要涨上来了，我是小强，喜欢赶空空儿的朋友请关注我，我们下期视频再见</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦说得对</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只做张冰的时候还是个普通正常的小女人，觉醒成小环以后我怎么有点想抽她……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和虞姬相比，你又完败了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽还有两个小妾，张冰估计是其中之一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以她不是虞姬，她顶多就是个疯狂私生粉，就喜欢跟着偶像看偶像帅气满足自己心里YY，偶像是否危险是否过得好都不在她关心范围</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有猫腻！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;漏了底了，小花这剧情安排的是真的好</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有猫腻！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这脸色变幻又沉默不语，事有蹊跷阿</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难怪刘邦能成事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;编钟，包子的编钟……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈不愧是你啊邦子！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还得是邦子啊，有谱儿！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀，你真残忍！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实吧，看管人质也是需要成本的，杀三个留一个正合适，玩你三次了都不长记性，再一个，这四个都有枪，拿起枪吃块饼干贴脸照着空空儿一梭子你看他是死是活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘季：我连人肉馅都剁过，把脑壳敲成烂西瓜更是家常便饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;场面一度十分血腥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难怪刘邦能成事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;编钟，包子的编钟……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叮咚当啷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕是砸碎了四个西瓜</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;匹夫之勇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到这里就能看出来了，纵然羽之勇武天下无双，古今无二，不过也仅仅是一个江湖游侠的脾气，成为霸王也不过是好勇斗狠，心里究竟有几分对朝廷的恨意还是不知道的。这种人终究只能做大将军，大侠，在大事上永远成不了气候，他没那么些歪脑筋，手下有这种谋士也必然不会得重用，他看不上这样的人，他心里没有天下。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心疼柯子</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比喻太好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段描写好啊</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;加个戏 让空空耳把项羽剁了 卸胳膊卸腿 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽二打一都不愿意，你让他用枪？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 小花就不对！！项羽那片饼干就该给邦子吃！那咱们早赢了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问题是邦子不说也没几个读者反应过来啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没用过枪的人乱用枪是很危险的，不说伤不伤到自己人，都很有可能伤到自己，我倒是觉得还好没用。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话这段虽然知道小花是写的搞笑小说，而且剧情需要，但是实在是恶心，这智力已经不是负数而是******了……</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那既然不是扈三娘那十有八九就是人字拖了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一共就这么2个案例。。。</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽永远不吃亏 气结</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，赵白脸能在这个时间刚好找到别墅这儿其实也挺机械降神的</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这美好的兄弟情！我暴哭，这两人是真的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘤嘤嘤这哥儿俩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哥们，东方不败是不是你客串的…</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小赵你居然还能记杀气呜呜呜呜你好牛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有杀气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的，这句特别惊悚……</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“何方屑小？！”</p>
`;
default:
			return '';
	}
}
        