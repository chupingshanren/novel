$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么不带回现代？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;典型的自私自利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做了一个违背祖宗的决定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真会选“小地方”[fn=14]</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写作“绅士”，读作“Hentai”！</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一破蓝屏手机有什么舍不得的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hi哈i</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都去放羊了，绝对比墨西哥仙人掌还绿了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重刷对墨西哥仙人掌有点猜测，应该是个双重梗，陈圆圆被抢——帽子像仙人掌一样绿，冲冠一怒为红颜——怒发冲冠像仙人掌刺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小金:来！来！一砖500万！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿板砖掀丫儿前脸</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太阳能就够了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么不整个柴油发电机啊，再在梁山弄个炼柴油的小工厂，就不怕没电了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时候有手摇充电器，我摇坏过好几个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十年前是不是还没有充电宝啊，要是有，估计小花能发挥的更好</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还得是金杯，当初小强要是买了奔驰宝马，这么多人你拉的回去吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变形记</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花肯定是忘了过年的时候俩人就钻过小树林了，还是王寅要比武搅和了俩人的好事，才草草收场的。</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就二傻本来就死的早，没事了可以跟着溜达了</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;踅摸？河南的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爸妲己给我运过来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要李清照[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有搞头，开本新书吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在更严重了😂😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈太真实了</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花式比喻</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是真有才，狗还是秃🐶[fn=26][fn=26][fn=26]</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉花木兰和颜景生挺配的</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈七零后也五十了</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这位是唯一没被恢复记忆的客户，也确实没恢复必要。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里没改，还是纪委，前面改成检查员了</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完蛋这时候还黑九零后呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不是吗，十年后的现在，90后都奔三了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是独生子女，80后好歹还能赶着房价上涨前买房，90后倒血霉，一大学毕业房价飞一样涨，直接断了念想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前几年90后看00后也差不多这样嘛，一帮作业太少在网上装社会人的傻蛋。估计五年后00后看10后也这样……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一晃十三年了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;90后的非主流时期，一晃11年了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在的90后确成了最苦的一代</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书可以说十年经典了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可不是吗，十年后的现在，90后都奔三了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写这本书的时候还是零几年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时候最大的90后，比如我，才18岁。。。正是不懂事的时候。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完蛋这时候还黑九零后呢</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;立班超志，守苏武节，歌武穆词，做易水别。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏武：这只匈奴，砍掉头，都能吃………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;送几箱暖宝宝吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;送电褥子，但是那边没有电~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏武留胡节不辱，雪地又冰天，苦忍十九年。
渴饮雪，饥吞毡，牧羊北海边，心存汉社稷，旄落犹未还。
历尽难中难，心如铁石坚，夜坐塞上听笳声，入耳痛心酸。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这意志力</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是！！火星文多好的玩意儿呀[fn=33][fn=33]</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是不够脸厚，沈断腿可是弄了两屋子的字画</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，美国式的普通流感吗？那是冠状病毒啊！！！！[fn=5][fn=5][fn=5]</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这破路也能开车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是真  厕所门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自己黑了还说的这么无辜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神™厕所门</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前庙里的送子观音，你们以为是啥？都是和尚送的[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;据说和尚的那活是方的[fn=43]
瞎说，只是比常人出货多些罢了[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个字叫僧
两个字叫和尚
三个字叫鬼乐官
四个字叫色中饿鬼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不人家老王家的开大车呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疑车有据</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王寅车门焊死，谁都别想下车</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你会后悔的</p>
`;
default:
			return '';
	}
}
        