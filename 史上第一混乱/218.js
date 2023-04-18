$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;造假？造人？</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大帝就是大帝，不服不行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是得赢哥来解决问题！不愧是“统一吓” </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是千古一帝的智慧。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是老大，这一手，有一套</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逗死我的，实在潜不住水了 咕噜噜噜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高啊</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的就是小说版的武林外传</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢胖子和荆二傻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到刚开始那会儿赢胖子“一听又开心了，噔噔噔跑上楼去”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感极其强烈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种一家人在一起欢乐的氛围，我太羡慕了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我家狗以前也是，我妈一敲锅，它蹬蹬蹬跑过来吃剩饭</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少个犯</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这顿饭把我笑死</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神马这是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处是伏笔，小花又不显山不露水的挖了一个坑</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;划重点</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子第一，凤凤我愿称她为第二。
总结一下。
这书女角色受欢迎程度和颜值（不含身材）成正比。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怎么当着人面就说出来了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhh</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;屡战屡败，屡败屡战？</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就像每个男人都有很坚硬的一面一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奶奶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧金金</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金小柔……</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双胞胎哪儿来的超生😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhhh，脑洞清奇</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁说包子傻乎乎，包子可聪明了了，心里还是向着“金少炎”的，必须把他“弟弟”隔开</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子老聪明了</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在我连office都用正版的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在基本上盗版啥都不吃香了，正版意识上来了，消费水平更上来了，现在买个正版游戏的钱不见得比一顿饭多多少，下个盗版还得跟流氓软件斗智斗勇半天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王道这词都会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗版书现在都不吃香了，发展的好快</p>
`;
        case 89:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老子当年就是王道！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名霸气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话莫名霸气</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金少：喵喵喵？</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫金少圭好些，火生土。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金少㵘不服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那改叫——金少燚？四个火呢</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这时候就不要发散思维啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你爹还叫项少龙呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肯定  否定  啊否定之否定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没看懂，怎么加啊</p>
`;
        case 100:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泼他啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说了，都在酒里。泼过去！</p>
`;
        case 103:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话就得直接砸你头上！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以羽哥的聪明，本来早就应该看出端倪来了，真是当局者迷啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里也在说羽哥自己，小花高明啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也一样，早该看出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情使人痴啊</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙好家伙[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝了</p>
`;
        case 105:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥真细</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就说有时差，这时候他那边夜深已经睡了🤔</p>
`;
        case 108:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我他马服了你们了。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这油糊茄子在小花的作品和刘老六一样是标配，在《妖怪》里史先生就用这道菜泼了戴文老狗</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子这么有心机的吗</p>
`;
        case 110:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是看到有个评论，我就直接以为是门没锁看过去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没门锁？没锁门？</p>
`;
        case 112:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhhhhhhhhhh救命啊这种新的损友加入讨论的感jio！</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 115:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在整天戴口罩，只要不出声，在哪笑都不怕[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羊了个羊，一边咳嗽，一边傻乐。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还好 我在厕所 不过可以想象 大晚上的 月黑风高厕所里传来猥琐的笑声 也不知道外边有没有人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能写点不笑的吗？公车上都当我**了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈哈哈，快要笑死我了</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里描写的很见功底，第一人称只知道自己接电话时对面说了什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行了，笑死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我真不该在吃饭的时候看这段……不说了，我先收拾一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国美已经无了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没人注意这客服是250啊哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，现在还有国美嘛？笑死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还不如打幺零零八六呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去美国打国美电话的梗是不是从这开始的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里描写的很见功底，第一人称只知道自己接电话时对面说了什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肚子痛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行了，笑死了</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是250号</p>
`;
default:
			return '';
	}
}
        