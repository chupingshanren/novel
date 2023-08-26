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
<p>&nbsp;&nbsp;&nbsp;&nbsp;不敢，太胖，怕把媳妇压的背过气。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花又开车了</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;貂蝉的义父不算么[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下你去朋友家借住就是他们家儿子了？家臣？嗯？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘备这个几姓就数不清了…</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那夏乐欠你那三毛的事……</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就应该吃点教训</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居委会主任…</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃瓜群众太好笑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;七条了七条了，幺鸡来没来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两军好多吃瓜群众</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;侠盗飞车呀，伸手就扯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乐善好施丶曹孟德</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丞相</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爪黄飞电？绝影？</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;罗春和李元霸比怎么样？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;罗成不如伍云召</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;富婆 饿饿 饭饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;使枪的伍云召比罗成厉害啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成都也有苦衷啊，每次筋疲力尽了，排第三的裴元庆就来收人头了</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一山不容二虎，除非一公一母</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵云这时候就在公孙瓒队伍里啊，刘备一见钟情了，分开时就恋恋不舍了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两只老虎，两只老虎，谈恋爱，谈恋爱。两只都是公的，两只都是公的，真有爱，真有爱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁山第109的在三国这帮猛人面前也排不上号啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;干脆对个出海的蛟龙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;另一個不能是  坐山的大蟲 嗎…</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个不给钱，一个不要钱。这算QJ还是BP？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这么说也不见得押韵啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又开车了</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;徐州时候张飞就不必吕布差多少了，张三醉酒跑路吕布都不敢追</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么看罗成不如张飞，张飞还跟吕布打到过一百回合以上</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;温侯讲的笑话，董卓军谁敢不笑？</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花生日1月4啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快乐</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可知二胖不姓吕、丁、董</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二胖姓什么？要是不知道姓什么，那就只能姓二了，二加三等于五。</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘备的武力确实不错，应该跟夏侯兄弟实力差不多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老版三国刘备把关张拉开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果刘备武艺差，那三大高手的战团根本掺合不进去。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;据说刘备武力和马超平级的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R110</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三个长兵器打，刘备抡两把剑在边上耍猴？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话本里一龙分二虎，相当能打</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘备武力不低啊，按百分制计算起码是八十大几，但是应该到不了90</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三国群英传应该是曹操更高吧。z</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三国群英传年底要出8了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有理有据，令人信服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这论据……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老版三国刘备把关张拉开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘备的武力确实不错，应该跟夏侯兄弟实力差不多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmm</p>
`;
default:
			return '';
	}
}
        