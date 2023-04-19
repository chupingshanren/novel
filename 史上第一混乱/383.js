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
<p>&nbsp;&nbsp;&nbsp;&nbsp;800万勇士</p>
`;
        case 128:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大佬们号称给了票滑稽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老铁，没毛病</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;BUG了，前后都说了金兀术是时间点之前的人了，这里又说是未来的敌人</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看过射雕英雄传应该会记得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强比我强多了。。。我就不知道</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒙语是玉石的意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这名在贵州是骂人的话😂</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟王寅学的吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是最强Rider</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈 听荆轲讲隋唐十八好汉 跟项羽学开车 现在还可以向成吉思汗学修车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大汗老司机！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成吉思汗连车都会修了哈哈</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还以为羊皮着了。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的强子，手机没梁山土匪用的档次高就罢了，连修汽车还得铁木真来教……</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太热情了</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是他也不怕扯了蛋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点不懂这个梗 有兄弟能给说一下不</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刷了那么多遍还是发现那么多笑点</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他这会还在南京享受江枫渔火呢🤨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱元璋的时候首都还是南京。北京那是他儿子。说正宗咸水鸭更靠谱。</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯这个没毛病[fn=26]</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花是包头人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两句真有味儿</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狼夺多呀( ´艸｀)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拼多多呀</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱老大懂人心啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强心说，我心心念念的不就这点事儿吗。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱哥懂事啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是朱哥知道疼人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;底层爬起来的皇帝就是知道心疼人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是老朱懂事啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就等着大司马发兵征你吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是朱老哥善解人意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梦寐以求的侍寝</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈可以另说</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一尺八寸五的腰围保持了二十几年，最后被疫情困在家里的时候终于突破了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想当年，我去买裤子，一量腰围，一尺九，羡煞了那个导购妹子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想当年，我去买裤子，一量腰围，一尺九，羡煞了那个导购妹子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腰围2尺九很吓人吗？小花你当年还是年轻啊</p>
`;
        case 88:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看，这就是老江湖。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就冲你嘬牙花子这动作。。你应该姓刘。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上个月来估计也这么说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈军队也有上个月有这个月没的情况啊</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦表示不知道你在说啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今儿算碰上真流氓了</p>
`;
        case 91:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你话茬儿接得也很上道嘛</p>
`;
        case 92:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欺负小强不懂历史，不知道你卫所的农民伯伯都是百战雄师转职的</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正我已经来了.jpg</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灭霸：我怎么觉得多此一举</p>
`;
        case 116:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现代人打仗真实诚</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑马围着王帐转一圈</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这拟人太可了</p>
`;
        case 120:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱哥到底还是不含糊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大方</p>
`;
        case 121:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实，老朱才是最够意思的，借得最多，70万。关键也没什么利害关系在里面，也没提什么要求</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绕一圈，圈内是圈外，圈外是圈内也行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是我的人了！</p>
`;
        case 125:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;事实上历朝历代，古今中外，大家都是号称多少多少，只是号称的数量有点区别</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;号称哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实也行 后边的人每个人举两套盔甲 密密麻麻的 离老远一看也能唬人 就跟草船借箭似的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上特效</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;印度吹牛逼他们古代有一亿大军跟人家开片呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高，实在是高！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;300万号称800万已经很良心了，清缅战争时缅甸号称700万大军</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈绝了</p>
`;
default:
			return '';
	}
}
        