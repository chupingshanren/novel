$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 128:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，虽然王英这人不咋地，但是对三娘确实好，就梁山这些人对媳妇的态度，跟王英还真算不错了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵，杀全家的仇啊。。。虽然是宋江注意，大傻子下的手，可真是灭了满门啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扈三娘如果不是嫁给王英可能更惨，一个美女在土匪窝里会是什么下场？痛快死了都是最好的结局</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子结婚的时候，三娘说了句，谁不希望八抬大轿的风光出嫁。这就是她最遗憾的是吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然结婚那会不愿意，可王英这些年舔狗一样，三娘心里的结其实也放下了，只是对当年少了仪式感不甘心罢了</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用你的读心术啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给剧透一下呗，有打赏哟</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每个人都有不可说的嘛…低头沉思🤔 嗯。不可说 哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传统手艺几岁开始</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高考数学26分？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的话，说不准是电脑哪个盘里有李师师、花木兰的特殊照片……二厉和老王方腊的不可说，大概会是一些私房钱？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我爱过那个谁，那个，那个谁……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到底是什么啊</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王伦有话要说~</p>
`;
        case 132:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我特么不差这点钱，就不能让我听个全的段子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浪里个浪个里个浪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浪，绝对浪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人浪起来就没女人什么事了！</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家里有屋又有田，生活乐无边。[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;河北玉麒麟被宋江闹了个家破人亡，梁山二头领又落了个一杯毒酒，累了</p>
`;
        case 133:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浪费及是浪漫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黎叔转世？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不 并没有 只是你自己离心了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万箭齐发，过河拆桥</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁山众好汉：素闻那宋江仁义无双，快将他赚上山来，同享富贵！</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双话事人咯[fn=5]</p>
`;
        case 137:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;于谦娶老婆，他老婆制服诱惑就穿一身马褂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太浪了哈哈哈哈</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您家里的呼延大嫂呢[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记得说岳里有呼延灼出场吧，老将呼延灼出战在城门吊桥上被射死还是怎么死的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;几个旧军官出身的可能都有类似想法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段又把呼延灼的形象立起来了，又把他选择的原因交代的明明白白，相当见功底啊</p>
`;
        case 139:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是我小瞧小强你，潘驴邓小闲你占哪样？邓算一样吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个时间，潘金莲坟头草都三丈高了</p>
`;
        case 140:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别人行，你可不行，包子和扈三娘铁着呢</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，这群人有揭竿起义的，有土匪出身收编的，有敌人反正的，能是一条心么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很有见地</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这老木匠倒挺有知识</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑飞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是没有理想和信仰</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，教员的湖南农民考察报告</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家给你忠告，你在这恩将仇报</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一天五块钱，要抽一包白沙还得存两天钱。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;领走老三你干么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嫌他死得不够透啊这是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他不敢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟感情好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你以后就见不到厉2了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那感情好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那回去不得被欺负死[fn=10]</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有啊 托塔天王啊！ 冤大头晁盖啊</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为他当公务员时急公好义乐善好施</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他爹的遗愿，还有封建时代的忠君思想，认为受迫害是大臣造成的，与皇帝无关。所以还抱有幻想，只能说孔孟之道不愧是极佳的封建统治工具</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“等我打完这场战争就回老家结婚”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打完仗就入洞房</p>
`;
        case 91:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晁盖？</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颇有小强之风啊</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;估计是把晁盖领回来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊啊！又说什么了？[fn=44][fn=44][fn=44]</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你再搞分裂我把晁盖弄来</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有人记得老王说过他好像有个亲戚像宋江来着，不过这个时候应该就没打算让那个变真的吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;托塔天王就是被宋江挤兑死的，他哪会怕…</p>
`;
        case 100:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋江上山之后，只会说这个兄弟不错，那个兄弟不错拉上山，卢俊义以后还有谁够打</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不一定，后上山的人就不买账，梁山的人本来就是东拼西凑的，所以人心不可能想到一起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不就是楼上受恩人嘛！后文有交代</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现学现卖[fn=33]</p>
`;
        case 101:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就喜欢小花这种一本正经的瞎胡闹</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一模一样啊</p>
`;
        case 105:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全面赢化</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈和嬴哥不学好</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈开会开出毛病</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三姐还是个傲娇</p>
`;
        case 113:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强可没少占</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人物生动形象</p>
`;
        case 114:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;改正归邪（纠正</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;改正归邪。</p>
`;
        case 115:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他可以一直算账的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他算账一直可以的</p>
`;
        case 121:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二郎心里虚了吗[fn=4]</p>
`;
        case 122:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只不过花荣跟武松变四个了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一对一对的</p>
`;
default:
			return '';
	}
}
        