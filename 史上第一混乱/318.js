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
<p>&nbsp;&nbsp;&nbsp;&nbsp;奥利给</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是被别的书评引起了好奇心，过来一看果然名不虚传，感觉小花是现在的白金大神穿越回去写的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奥利给！</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次没事儿了，羽哥带人去半天就解决了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太心酸了，宁当太平犬不做乱世雄</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿越界的耻辱[fn=4]</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;愧疚胡廷秀踢踢踢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;醒醒 你们俩包子那整个一脉从根上往下都是庶出 羽哥儿子多了 小心他们不得宠 半道上让人给挤兑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;醒醒 你们俩包子那整个一脉从根上往下都是庶出 羽哥儿子多了 小心他们不得宠 半道上让人给挤兑死</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诱惑草诱惑人吃下它，你想想嬴哥那食欲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是项羽，随便换个人都不会轻易喝下那杯水</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一章还穿着呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虞在帐中坐，锅从天上来😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虞姬：这个锅我不背</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咋滴穿上内衣吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是周亚夫说的不清楚，但光着屁股说是郭德纲说的(手动滑稽)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是汉代周亚夫说的～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十几年前的郭德纲还没这么火吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花真是郭德纲铁粉啊</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以吹一辈子了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;表脸</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光速，百公里5个油，多少油也瞬间没了，嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;後來加的油應該也沒法帶回古代才對，這樣車跑兩趟就廢了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是没油才停的吗，咋开回去的呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五個多是指公升嗎？若是，那一公升可以跑將近二十公里，超級省油</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也就是换了一把剑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次放大了亢督的地图藏了一把方天画戟？</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奥利给</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞎话编的真快</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从第一章到现在才用上的伏笔[fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实地图大了离得远就看的清了，或者说离得远才看得清，这样就接近不了了。不好说那个成功率高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草蛇灰线，伏笔千里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想想荆轲带着方天画戟进殿的画面就觉得好笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草蛇灰线，厉害👍🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强这估计只是为了带包烟抽。</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你多冒昧啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;见招拆招😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高手啊😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：这人真损。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要是法医是不是该给你表演开膛？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书让人秒变sb</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没病游两圈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啊，游</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;数学26分的，你跟他谈超过100的数字都是侮辱我们小花了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出差不是上班，就这么算的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者有关算数的内容就装作没看到就行了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至今没明白这是怎么算的……或者说这话是什么意思……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好算数</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花：什么话，会不会说话，什么像变态，明明就行！</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;行家一出手就知有没有，这里应该是闻一闻，3桂果然并非浪得虚名</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正是穿越，多等两天，回劫不还是那个时间</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对天神宝具——烟灰缸（透明玻璃款）</p>
`;
default:
			return '';
	}
}
        