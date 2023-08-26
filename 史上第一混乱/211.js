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
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，画面感极强！出溜到桌子底下踢人，这事我干过</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最大受害者:鸽子🕊️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《水浒传》第三十五回 石将军村店寄书 小李广梁山射雁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？合着你们梁山没有信鸽的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啥？射鸽子？你把丝袜都脱了，不是为了打玻璃而是射鸽子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸽子:咕咕哒?</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叶锦添的新红楼造型...</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大满兜是你！</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;改名叫程婉儿吧。</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呼应上了</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被小强这么一形容 立马就不能要了</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说啥呢，是嚯嚯戏？确定不是嚯嚯人？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大导演个人性格、想法和权威太强势，拍出来的必定不是她想要样子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越是大导演霍霍的越厉害么，还是按部就班的好</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还时不时被刹车传动杆夹手呢</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;湯隆牛阿，連高科技電焊都学會了</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抓捕周树人，跟我鲁迅有什么关系
∠( ᐛ 」∠)＿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;签得王远楠，关我李师师什么事儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看看我签的什么？
麻辣鸡丝？？！</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实金属弓臂从使用来说蓄能释放是最差的了，而且所耗费的力量也大，一般做弩臂用，长时间上弦待发不容易断与翻弓。</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;米纳米酱。</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空放是危险动作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呼吸声，真传神 👍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总感觉觉醒前世记忆这几个是bug，记忆回来了，硬件跟不上啊，现代人嫩胳膊嫩腿的…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;箭来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弓是不能放空的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧 这个悦耳的呼吸声的描写</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。。。。真省钱嘿。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;火筷子不行，太轻了，800斤的弓，箭没射出去就得炸手里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来自行车和火筷子，都是军转民的高科技啊！</p>
`;
        case 88:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有一口去核我不开心（这其实是一个相声段子的梗）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李逵是真能吃</p>
`;
        case 89:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是来做俯卧撑的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在的小孩子可能都不知道了，做三个俯卧撑，可是要出人命的[fn=33][fn=33]，当年那么出名的“俯卧撑”案件</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;火云邪神接子弹，尼奥躲子弹，写出了大片的即视感，这文字功底…花儿写混乱简直是信手拈来，天马行空，想怎么写就怎么写…</p>
`;
        case 91:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个人的上辈子记忆恢复了，但是身体素质怎么恢复呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呀这个箭飞出去会误伤别人不？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手持一把大盘鸡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;科学家石锤</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;净说大实话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大实话一筐一筐的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强真君子（这话千万别被小强看到，要不又要说我骂人了）[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完将军为人民服务的那段简直要笑死人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当初随口扯的一声表妹，往后他就真的一直把她当妹妹护着，表哥表妹的相处起来自然无比，真好啊[fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只想说包子干的漂亮啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;→_→</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那和弹弓一样了</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抱晚一步就是新闻头条了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差点制造一起空难</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=63]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里蚌埠住了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个梗可乐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈 笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《水浒传》第三十五回 石将军村店寄书 小李广梁山射雁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙   你这箭飞得够高的啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空难…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飞机是用来打的，射只是结果而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那么大个箭神不会测距？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飞机不能乱打，很伤身体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话我记了快十年了哈哈哈哈哈h</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第五次看这段笑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哥们，你这是让我猝不及防啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的是贼搞笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，刚上山的花荣射雁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑出声</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;川航玻璃别是花荣射爆的😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑出腹肌来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古有后羿射日，今有小冉射灰机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈。笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;形象啊</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑坏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;锁钥匙是宋代文物给了古老头，车门叫大和尚一把拍折了，项羽拿它练过车，说起来谁信啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主角一身破烂神器</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都什么车啊？</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清诗大约十万首，乾隆大概四万首。能全部背下来确实很厉害了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这得有几十万首吧，乾隆都贡献了上万首</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重生之我是花容()</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个还有点不一样，说难听点就是被夺舍了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像这种，就真的是“喜欢一个人的灵魂”了，有些根子上的气质，是哪怕重过一辈子也不会改变的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜值决定一切！</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么，这么多大魔法师吗[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉[fn=38]想起自己小时候也在少年宫学了半年的火球术，可惜那时候贪玩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈 育才又多一个老师</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真·伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 小强这嘴太损了🤣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好预言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
`;
default:
			return '';
	}
}
        