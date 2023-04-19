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
<p>&nbsp;&nbsp;&nbsp;&nbsp;三性？我就知道有双性的 还真没听说过有三性的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三家姓奴</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怀疑你是嫉妒18这个数字[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;地狱也是十八</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十八路反王，六十四路烟尘</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在手机就两种充电口了，type c和lightning，据说苹果后续可能也要改type c了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。得亏李存孝没来</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就兩根鐵棒子，有什麼難找？</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺好奇怎么让关羽吃药的</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说，他那点幸运值都在赵子龙身上呢，借枪好使么。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有，不过是在公孙瓒手下，白马义从统领</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;罗成使枪能伤李元霸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就不对了，伍云召用枪不比罗成强吗</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雄阔海不是用槟铁棍？千斤闸都能托起来的牛人。。</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花是有多不得意罗成[fn=10]</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蘸点屎更凶恶！</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神圣的F2连接着我们每一个人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张卫健《隋唐》罗成我记得是塘主演的吧</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老周这下震慑群众了，能吹一辈子了</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你忘了國產凌凌漆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;樊哙杀狗的也算屠夫[fn=33]</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小象出场的时候我就有疑问了，就算他8岁，也得有130了，一个身高130的男孩，还抱着成年人的腿叫爸爸，这小强到底有多高？何况书里说了不止一次，小象十几岁不是8岁，这可能是全书唯一一个不太合理的地方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;12岁的孩子基本能到父亲肩膀，还能抱强子腿的话，曹操个子应该不超过1米才对。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小象：小花你总算想起我来了</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦，原来是这样。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三国无双虎牢关剧本杀的够快的话就是华雄守关</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实二胖可以加点戏份的，老是晃点人家太不厚道了</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自己回忆去</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;百公里三个加油站</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜刘三刀没出来，华雄都这样了，刘三刀也不差吧🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;华雄跟许褚徐晃差远了，许褚≈马超≈张飞。徐晃跟许褚50合不分胜败，不过久了可能打不过许褚，不过比华雄强不少</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很有水平</p>
`;
        case 103:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这楞小子[fn=33]</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马弓手，想半天不知道属于啥职位，估计跟什长差不多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑弓手，好歹算低级军官</p>
`;
        case 107:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关先生 我是舒宝快递的小秦 有你的快递 出来签收一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二哥，开门！你的快递到啦～</p>
`;
        case 108:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俩二哥都很厚道</p>
`;
        case 109:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;头戴三叉束发紫金冠，体挂西川红锦百花袍，身披兽面吞头连环铠，腰系勒甲玲珑狮蛮带；弓箭随身，手持画戟，坐下嘶风赤兔马</p>
`;
        case 110:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我三五八团来帮帮场子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剛換了美式裝備[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;云飞兄你那两个营的装备我不还你了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楚云飞！</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手拉手手拉手手拉手手拉手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手拉手萌死个人</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有你自己是百姓[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈百姓梗</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁见人强子都这句。。。不是你们一个个求着人家过去找你们呢吗？</p>
`;
        case 113:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这二位同时脸红谁看得出来啊</p>
`;
        case 115:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打人要打脸，骂人要揭短</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三家姓奴</p>
`;
        case 116:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白脸贼!安敢辱我!</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;于谦的父亲和于谦互为干亲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各论各的</p>
`;
        case 119:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个乱呦</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李世民和武松要在的话怕不是也要回头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，好画面</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲道理，觉醒后的关羽和吕布其实感觉可以过两招，那时候打不过是因为年轻，刀法经验都不娴熟。</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实历史上的张飞，好像是个帅哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玄德公冲动了，公孙瓒胡子一剃就化身赵云，根本不需要救</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜现在赵云还没到刘备手下。。还说过来就给介绍呢。。[fn=38][fn=38]</p>
`;
default:
			return '';
	}
}
        