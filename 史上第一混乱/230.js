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
<p>&nbsp;&nbsp;&nbsp;&nbsp;草guan人命</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逗比[fn=33]</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无组织无纪律啊，换了300可能都不用五分钟。</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“同志”——志同道合的人，炖牛逼的词被网络文化糟蹋了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达瓦里氏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈😊</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有杀气！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有杀气！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强，我给你表演一个劈砖头。这没砖头，你把腿借我用用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花嫂的习惯</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟十里坡差不多[fn=8]〈十里坡剑神〉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再劫一次生辰纲？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精闢，把握好了梁山好漢的人物特徵，以人物身份展開語言邏輯思維，才有這樣惟妙惟肖恰如其分的經典呈現 </p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀秀不是已经进了育才当老师了吗？还需要靠家属关系才能去？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强这脑袋转的真快呀</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么木工，这叫后勤保障。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天才发现，刘忙版的好像这里改成“还有喊李魁的”[fn=5][fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我没看后边 但是我在想后面的剧情会不会有 外国选手事后感叹 中国人人人会功夫 自己被一个老木工打的毫无还手之力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，这个木工也是数一数二的武力值</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传说项羽精力过人，可以七八天不睡觉，也不知道是不是真的。</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是质量不一样，是能上场比赛的本来就不多，两家出一样的人数不就完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像好汉有54天王只有5……</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥对小强真的放心…</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新加坡人对汉人这个身份是认同的，但是不觉得和我们是一个国家，我认识一个新加坡的小姑娘，她和我说的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快拉倒吧。。。人家当不当自己是华人还另说呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像是七成</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好老师都是死心眼，别问啊，问了急眼[fn=14]</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正话反说，666</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要我说 别管是不是了 给人家个痛快 调教成x努得了 你想咋玩都行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真就没把人家当人，要追的时候不管不顾，觉得不对扭头就扔掉，有转机了不管会不会死都要让人试试</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张冰：？？？</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喊马英九的是哪路神仙？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗版的是马大姐……</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没念错，真不简单。我就念过好几年草官人命。后来四年级被老师狠狠骂了才记住。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真 草</p>
`;
default:
			return '';
	}
}
        