$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建设兵团</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;府兵制，大部分都是良家子应召兵</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这规矩是明清才兴起的……</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又匡人嘿，55+25噢</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在忙的，这都属于美梦了~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得 还没睡醒</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这样</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比白莲教主差远了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是没电，隔天就关机</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李二的玄甲骑连一万都没，扫把星位面都打到天竺了凑十万人都困难</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个靠很传神</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;非法集资的都租豪车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈这比喻形象</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师转头要抽人提问的时候，就盯着黑板，不要对视、更不要低头[fn=37]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我想起来以前高中英语课了</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;康熙问你：哪里人呀 ？答：清朝中国人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里要有评论</p>
`;
        case 105:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不容易啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是，人家好不容易搞个事业编制，你一句话就把人开除了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到领导家当个保姆你以为那么容易吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;⊙ω⊙</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛病，木鱼也是鱼，哦耶✌️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 刺客也是客！一点毛病也没有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神踏马刺客也是客</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死
</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他们这不算前世的记忆了 也就一年多的事 人还是本人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这些人的心理素质太好了吧？突然想起前世的记忆都不带愣神的。</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们当皇帝的哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;必须得睡午觉啊，早朝那么早起来</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怀念啊！</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;副宰相</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事儿，唐朝宰相不止一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完了，我成替身了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“那我呢QAQ”</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;府兵本来就是预备役啊，大唐打仗是几千府兵带几万附属的样子，否则安西怎么会附属一反水战线全崩</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霍迪琼斯？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;道格琼斯？</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一定影响力（指大唐西域记）</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强你个瓜怂，别个小姑娘托关系走后门好不容易进了宫，当个公务员，你一句话就给开咯[fn=26]</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是把药丢气管里了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你小子差点死啊，赵匡胤是马上皇帝，太祖长拳和盘龙棍号称一绝，在有的小说里武力值媲美六脉神剑创始人段思平</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦叔宝可是说的挺多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李治时期记录兵源总数 50万出头</p>
`;
default:
			return '';
	}
}
        