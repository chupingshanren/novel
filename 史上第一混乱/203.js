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
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈画面感有点强</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇😭哈哈哈哈哈哈哈哈[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这车开的猝不及防啊！[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一直坚挺的人棍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真傻假傻</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花总是在读者觉得很正常的剧情中埋下一点东西，得一遍遍刷才能看出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是里面有内奸？还是有探营的</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小药丸是不是忘了</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼想逃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是跟小强玩玩，也不是真的想干啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果我没记错的话，这药是被，，，吃了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上辈子好歹也是要成仙的人啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实老何要真想给小强添乱还不如给陈可娇吃一颗</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金1内心：丢人丢人丢人，救命救命救命</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出息！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都记不清看的是多少遍了！每次看还能把我笑成猪。。</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我我王老五这辈子都没有见过这么多的钱啊，一五一十十五二十。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书每一句，每一个比喻都那么贴切有画面感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一捆十块钱的票子！你是怎么数出来一五一十十五二十的！十块的票子啊花！</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都坨了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不错，这很画面感😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太形象了~六刷的我 每次都能找到新的笑点</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你小心点吧，让单位知道你跟人打架得把你开除</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花是懒得起名字吧</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈爱凑热闹的人真多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这画面。。。</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不光有家室，他媳妇是他上辈子杀的一个县令</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你小伙伴借你三毛没还，你现在还耿耿于怀呢。</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶心的作用力是相互的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逗逼啊！</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“眼珠子间或一轮”这句话，大家想起还在哪里看见过没？《妖怪》里 无双他姐 那个姓魏的狠心女人被小绿的歌声震撼得快要崩溃掉的时候……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;数出一个祥林嫂啊</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;数学26分的怨念[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑哭了</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难怪高考哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈的，不光小时候啊，到现在我都经常忘记哪个手指头扳过了……或者扳着扳着忘了数到几了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也一样……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段恐怕是真事儿吧[fn=58]</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甲：你是有多闲，上网吧包宿玩一晚上扫雷？
乙：你咋知道我玩一宿？
甲：我在你旁边看了一宿啊！[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好瓜。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪都有闲人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈(ಡωಡ)hiahiahia</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心情不好就来看看小强，感觉好多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一帮子闲的蛋疼的哟</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还以为什么呢…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是多么大的怨念啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个小男人的形象刻画的太生动了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;持家的男人啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喷了</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞧给你出息的</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你猜是对方先死还是你麻袋先破？</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;药丸遇水即溶…emmmmmm</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下雨啦！收衣服啦！嘿嘿嘿，衣服啦！</p>
`;
default:
			return '';
	}
}
        