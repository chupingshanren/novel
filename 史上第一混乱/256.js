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
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次扩大会议，确立了，咳，队伍的方向</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李白怎么了</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这辈子，只想当小赵，不再做什么剑神盖聂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;同情你一分钟…</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人物性格刻画的真棒！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两位出场总让人会心一笑</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;班超：我也是文人[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜真卿满门忠烈啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隔山探海这个词绝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李白是真会功夫。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文人风骨也不落下风，见字如面，李白不算</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟侠以武犯禁，儒以文乱法，统治者当然不太喜欢这类人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜真卿这些个都是上马领军，下马管民的主……</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这细节真特么神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏武为啥要哼哼？</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《背起爸爸上学》老电影了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;背着[fn=11][fn=4][fn=5]</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两千四百古[fn=11]</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扁鹊一定是故意的</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三娘：你拉个长音就想糊弄人？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别得罪大夫
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恍恍惚惚哈哈哈(ಡωಡ)hiahiahia</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴胖子可能是中国史上最重要的皇帝，没这位现在中国搞不好割据的跟非洲似的</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翁斐然的少年秦始皇确实帅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自从看了这本书，无论哪部影视剧再出现秦始皇，只要不是胖子，我都不认</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺当年也是十里八乡的俊后生。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴师傅，你是净重最重的师傅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈的，被你误导了。只要看到有秦始皇的片子我都会在心里嘀咕：“秦始皇不是胖子吗？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢真活得最透彻的一个，啥都看开了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我赢哥可真是胸怀太大了</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的妈呀胖子太可爱啦</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你再骂！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你🐒🌶️大声干嘛啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你吼那么大声做什么啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;辣你去找物业啊！</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话圆的不错</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说不好还是佟大为姐姐呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佟佳氏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个真的伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;标记，伏笔，后面就知道了</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就特讨厌吴三桂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肯定现实不是这样的，但这样写就很符合小强的混混思维</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说秦桧也有3个相好的，再坏的人也有臭味相投的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;徐庶他老娘肯定不同意这句话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人也很多这样的呀，所以老吴反叛还有那么多追随者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实很多人都是这样啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人就是这样啊[fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是这样的。起码不全是这样的。</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忘了秦桧</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏麻喇姑是嗅觉失灵吗？</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的我心向往</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉最后这段是小说精髓，各个历史人物隔空传法</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是邓超演那电视剧里唱的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传……传销大会？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想问下秦桧去哪了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后一句想起邓超了哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小水同志，你咋不唱起来呢[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为没有二楼……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把刚来换成刚出来，活脱脱一个刑满释放的心得体会座谈会。</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满坑满谷好评 这是没少听刚子的相声啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是我觉得最有成就感的时候！</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听懂掌声</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
default:
			return '';
	}
}
        