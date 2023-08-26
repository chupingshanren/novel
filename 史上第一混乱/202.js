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
<p>&nbsp;&nbsp;&nbsp;&nbsp;原标题:伟~哥</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们九年义务教育就学会了个“伏笔”吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔啊</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要我是小强，走之前啐口痰</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁告诉我这些**是啥</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能师师在京城的时候也在等这么一个人吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好凄婉的一句，师师不必再强颜欢笑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道为什么这个赎很有感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;师师上辈子可能都想有这么个真心对她好的兄弟把她赎出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=35]写的好</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武t兰</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我背50万硬币来，砸死他！</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，诗诗摸摸头[fn=19][fn=19][fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，难过</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高！实在是高！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我擦，差点中计</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实时弹幕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;专业吐槽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这操作……</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怎么骂人呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强看着流氓，其实是个好人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了一个“不”？</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李师师都名垂千古了</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就差说你是好人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑出声</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金少炎不配和李师师在一起。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这片名 李师师传奇 不冲着颜色谁会去看 历史大人物多了 谁在乎一个🐔的心路历程</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然……，但是确实是说出了大部分人的心声，看电影就是找个乐子。[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小金，你完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骂和尚是秃驴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小金子坑自己是从来不手软</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姓金的冲你这句话就应该拿板砖掀你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给自己挖坑啊小子</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实从这点来看不管金1性子如何，倒是个合格的有眼光的商人</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然金1嚣张，不能连自己的喜好也变了吧，金2不是真心喜欢李师师的嘛</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强有点帅，虽然动作还是猥琐，但是像个君子了</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你完咧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这真是把师师伤的很了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你完了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你完咧～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要倒霉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要倒霉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姓金的你够狠啊</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蓝色药丸.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小孩子才做选择</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个一起吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃下红色药丸你就能醒来，吃蓝色药丸你能继续这个梦境，你选哪个……
</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西地那非</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想当年，一声“伟哥”充满了阳刚之气，现在而今眼目下，“伟哥”得慎叫，对了，我一初中同窗名字是：杨伟，后来，因为谐音问题，他愤然地想尽一切办法，把名字改成了 杨刚 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我遍寻不到那蓝色的小药丸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙 小强没用过啊看来[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑出猪叫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强就是小强</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强太帅了，我要给你生猴子🐵</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该，谁叫你哪壶不开提哪壶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈😁</p>
`;
default:
			return '';
	}
}
        