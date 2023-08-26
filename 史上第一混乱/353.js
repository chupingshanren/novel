$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那小子谁啊？
我不造啊！就知道109哥是他司机。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;描写得太神了[fn=33][fn=33][fn=33]必须要评论[fn=4][fn=4][fn=4]</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二凤贵族出身又是马上皇帝难道也比不上你？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饿年轻思侯也四帅小伙</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;供电咋办？</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;涅槃凤--萧强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有个做捡电子破烂的UP主就叫这名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蟑螂哥是你吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没画只蟑螂？</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被美國人刺殺了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拉大爷是什么意思啊，有没有大神给个说法</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打虎英雄武二郎抱着电线杆 脖梗子夹着波导“喂喂？艹 别撩！我再往上挪挪！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子搬箱子也喘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新建个电话塔，再安装一套避雷针，专门打电话用。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想一想画面很搞笑</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一键自动寻路……</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁山大部分混吃等死的（没野心 不被压迫就好） 小部分想招安的 真心造反的没几个</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是真的秀[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李师师的秀</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你瓢着，我拍着[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看着。。。你喜欢看着，你就是道哥说黑皮的“窥银癖”啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花看样子也是风流阵里的急先锋啊，这一套一套的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;专业，这就叫专业.jpg</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姓金的也不是啥好鸟🤣太熟练了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是现在的网文作者有这文笔该多好</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正经老流氓了</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔！我替他说了[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感动[fn=12][fn=12]</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车老大 白胜</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没人说伏笔的话，那我可就说了啊:伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强老鸨一个待遇</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;靠，一夜急行军就从山东跑到江南了？这是坐的高铁还是空投啊</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是上锁头的吗?</p>
`;
default:
			return '';
	}
}
        