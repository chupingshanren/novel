$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俩人明面上还真就是去和谈的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神TM职业操守，你特么一个谈判的跟刺客一个职业？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神TM职业操守</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最早的出处应该是金镛的《鹿鼎记》吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让子弹飞是2010年的吧！这是预言吗？</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没看这本书之前，也是这么想的，只能往后投胎…思想还是被局限了</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个人不该过来的，前书设定阳寿未尽才行，他无论怎么算都不能未尽啊，怎么着都是死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也可以说是挺了十几年</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得刺秦里丁海峰演的秦舞阳[fn=4]</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦舞阳：气死宝宝了</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时代不行了，小花也开始形而上学了</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;山东快书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当了个当，当了个当</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李世民:“他是个秦王朕也是个秦王！”</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫的这个亲啊，老六</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说，太祖长拳打个秦舞阳还是绰绰有余吧。</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这主角的嘴是真滴.... 一言难尽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;G？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忽然就开车了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某种程度上更绝望，李世民还得再看他儿子叛乱一次，朱元璋还得再看他老婆和儿子死一次。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱元璋:我也不搞四大案了，每天就抓阄，抓中孙字就打一顿朱允炆，抓中燕字留打一顿朱棣</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记住这句好久了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;华佗亲自给你颁奖！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么叫文化自信哪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十几年前小花就有这觉悟了👍🏻👍🏻👍🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个真的可以有，以后肯定会有[fn=35][fn=35][fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=35][fn=35][fn=35]</p>
`;
        case 88:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;媚娘还真不能废了，李治死了以后不是她接班就是李显，李显实在是一言难尽……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李世民大喜:“这也太好了吧，媚娘？快出来看上帝！”
赵匡胤:“好弟弟快过来，哥有个斧子想试试……”
朱元璋:“标啊，从现在开始给我进健身房锻炼，每天吃两个、不，五个鸡蛋！健身房现在给你建！”</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;急死他们</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实诺贝尔是个伟大的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在经济学奖快成变相的数学奖了，本身就高度相关，而且拿奖的基本上都是数学家出身……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;数学26分的设什么奖也得不到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;数学是一切学科的基础 说没有贡献的秀到我了。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说诺贝尔不设数学奖是因为被绿的，这是个广泛传播的谣言。诺贝尔终身都没有娶妻，不设数学奖单纯就是他看不上，觉得数学没有实际的贡献。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为诺贝尔被数学家绿了。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为数学是所以理科的基础工具，没有说哪个物理学化学大拿数学考26的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诺贝尔他老人家就压根没想起来有数学这个东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;设了你也能得一个“诺贝尔全国高考数学最低分奖”奖品是暑期你爸一对一数学辅导加抗击打培训一个疗程</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦舞阳：你们说的我都不认识！
小强：刘老六你以后地府搞个基础知识培训班！</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乐死我了。</p>
`;
default:
			return '';
	}
}
        