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
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完上一章，一直提心掉的胆的害怕下一章被和谐了</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下次给你介绍马老师的接化发</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟元末明初才创的嘛</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;组团忽悠来了[fn=46]</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;街霸三里元氏兄弟的重脚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咋还打脸呢[fn=4]</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是郭芙蓉的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个我可以解释，我是看了《武林外传》自学的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扫地僧：？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郭芙蓉：？？？</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得他哥叫武大郎，武松小名武大雄啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕不是孵出鲲来</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇咔咔，我了个去，奥利给[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本是同根生，相煎何太急[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是谁杀了我，而我，又杀了谁！？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是搞笑小说啊，真的要认真起来古人怎么能讲现代口语，再认真一点你还得问为什么可以穿越呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北宋人武松会说“哇卡卡”？向戏台上的鲁智深或李逵学说“哇呀呀”还靠谱些</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接～化～发</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疑车无据</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说，这到底算水仙呢还是骨科[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是瘦死的骆驼比马大，受死的攻比受攻啊~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有攻必有受还行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有攻必有受？？？</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当时希灵狂欢节那段都没看蒙，这更没问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你没乱我就不会乱，反正我高考数学不止26分[fn=33][fn=33]</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一番云雨之后。二郎终于心满意足</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂风暴雨吧</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一件衣服都被你写活了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;殉情找鲁智深干啥[fn=58]</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;旗鼓相当绝对玩的最爽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦哦哦！！！
我找到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就像下五子棋一样，我下五子棋喜欢防守型下法，就是喜欢堵，然后找到能致命的破绽之后再一下弄死，找不到就防患于未然，各种堵，经常把人堵到崩溃，直到我碰到一个跟我一样下法的人，你们见过下五子棋把棋盘给摆满的吗？那天我们摆满了好几次~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呦 刚意识到 不是2018了 现在2019已过去大半</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;切枪癌和换弹癌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的是我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里80后不禁回忆起当年CS和魔兽世界的盛况...</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咦？[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贝吉塔和卡卡罗特合体即视感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是一个师傅叫的，破不了招啊</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强素有急智</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗急跳墙
</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接化发</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;表啥脸啊，你老婆不就我老婆嘛</p>
`;
default:
			return '';
	}
}
        