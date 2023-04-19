$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好有说服力的感觉</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老朱的部队不知道带没带火枪，给他们见识见识。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二百万三百万靠斥候去点那是点不清楚的</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸运EX</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈贿赂的</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有胖吉必有4278</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个口音真的是很生活</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个专门挑事，一个专门平事</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是更强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;量子军团！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看不见我，但我能捅死你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想想还挺带感</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这听的怎么像是银行划账似的</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话看一次笑一次</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神机营警告⚠️</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那本书就成了法医秦明啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;归属地原则</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噗</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;60岁老来得子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就想知道。。。。胡八一咋办</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一二一买单出来的？[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻将桌上起的名？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是质数没法乘起来哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;這得是八十老頭和四十中年婦女生的，基本上女性四十幾就漸漸失去生育能力了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好名字</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这是一BUG，毛遂是小强婚礼当天来的，那是第一年的10月2号，唐宋元明四位皇帝是第二年1月底来的，毛遂比四位皇帝早到快个月呢，按理说这会儿毛遂早回去了。</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好吐槽[fn=1][fn=4]</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才叫棒喝！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈老师还是厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸气</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺在意细节啊，花荣就没们，还一个花荣在蒙古人那里负责接电话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有老时候动画片的画面感了</p>
`;
default:
			return '';
	}
}
        