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
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子有吃的了</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浇大粪吧，这破车不密封，熏死小强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎？龙洋洋又穿越到这儿了啊？</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;9494</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;场面一度十分尴尬</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有个简单办法，现在一刀捅死小强</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，怪不得写了一本书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就是妖怪！</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;zei↘俩老梆啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿，想坑神仙还真不容易呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;淦 你俩不是说天道混沌吗 咋还能预知[fn=44]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;松鼠航：读脸术受害者同志</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;读脸术</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个老家伙无时不刻都在对小强使用读心术</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑飞</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记得加油</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥那气度可以的 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反反穿里最喜欢荆轲刺秦王这段了！</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赳赳老秦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈笑死了</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;↘但快冲到的时候，胖子肯定先撤了，然后大军围杀。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盖聂不实心眼隔着一条街冲锋说不定能行</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国产车的通病啊，气密性实在不咋地</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那草...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是苹果一点一点从小强肚子里返回来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意思是吃进肚子里的也慢慢变成青苹果了，不是长回来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那岂不是一个苹果一直也吃不完，咬一口退回点时间丫自己又补回去了，一口一口吃的都是未来的苹果</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又一波精彩即将到来</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了要来了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;淦 直接开到门口了 你不下车也不行了[fn=31]</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了看了，特别好玩哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本我刚看完( ´▽｀)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花推了这么多本书，这还是第一本看到简介有去搜一下的冲动……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，豆子的书居然也推荐过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;豆子封笔了都</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说起来豆子还是回民，但书里一点都看不出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是写搬山的那位嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然能在这儿看到豆子？这算是唯一活着的书了吧。推荐豆子的升邪。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感谢小花让我读到了豆子的书，可惜现在没有写了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前看过这本……然后不知道怎么就删了，找老长时间了😂</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车是防弹的忘了，死不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实当时我想的是谁走火把小强恁死了就神作了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以现代看大点，两千年前都是必死，没得救</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有空腔那存活几率就大点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那岂不是跟手枪一样厉害了！！</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我问你把门都关了还怎么速速离去</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;敌人非但不投降，还胆敢向我还击！</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑喷了卧槽</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甲乙丙丁戊己庚辛，子丑寅卯辰巳午未，为啥不能有甲丑？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;露怯了啊，哪有甲丑～</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;面包车发动机在副驾驶屁股下边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊？有人给答个疑不，金杯是啥构造啊？
不是小风扇支在车前盖散热吗，这是车前盖在车里吗。。？
上网搜了下，都说是在车内拉引擎盖开关，然后下车开车前盖？</p>
`;
default:
			return '';
	}
}
        