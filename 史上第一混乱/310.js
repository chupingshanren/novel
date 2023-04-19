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
<p>&nbsp;&nbsp;&nbsp;&nbsp;你大爷的赚了老子这么多💧终于开始了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正篇开始了</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成长是需要打磨的，就是过程太痛苦了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话太戳我了，小强太可怜了，这个时候他不知道大家还能重聚首啊</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“也”是岳元帅的意思</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岳家军第一次执行错命令是在来的那天晚上，因为听不懂现代口令搞得南辕北辙；第二次就是在这天，把解散执行成了立正</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来今天眼压高，眼睛疼，还骗我哭[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，跺脚脚，零八年的叠词词么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跺脚脚……？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书徐得龙唯一一次不稳重</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，笑不活了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈真会说话</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是我对徐校尉印象最深的一句话</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;号哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=39]</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小六子一会就给油炸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;透剧，这鱼一会就随着董平走了(在这无关大雅的地方透剧应该不会有人打我吧？)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一看就知道小强得养死</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平均一天五斤半，好家伙，比我喝水喝的都多[fn=31]</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过一会儿董平就会在奈何桥上看见它了</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自古个人不幸文坛至幸啊…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当了官可写不出这么多诗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宰相多的是，诗仙可就此一位啊</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话这里写的很好，但我这么说就不对味了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里还真有点可惜。</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奇妙比喻，生动形象</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开玩笑那是李白谁能假他的名字去写诗啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但这又是教育史上一大幸事，可以少背一篇课文</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我信你个鬼，是你自己写不出来啦，哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺好的，有的书作者喜欢自己编，写的一塌糊涂，不如这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是作者编不下去</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写出了：夕阳下的奔跑，那是我逝去的青春</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别刀了，别刀了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感好强，多美好呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梆子呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到这还是哭的无法自已啊[fn=12]，特别是听书念这一段，太有感觉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我又哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看我都会想起这个经典场景</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睹物思人啊</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞎说什么大实话</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还涨了两块呢[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扎心了</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里的林冲下山了，我记得电视剧里的招安的时候病死了吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里哭笑不得</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李云死于王寅的坐骑转山飞脚下</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;14年过去了，王寅这会五十多了吧[fn=4]</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这些细节把人物形象丰满了</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重点是口琴啊，一用的时候想起来是另一个男人含在嘴里鼓捣来鼓捣去的……[fn=11][fn=11][fn=11]有点想[fn=51][fn=51]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然我不知道俞伯牙长什么样，但想象一身古装的白发白胡老人弹古琴多有“诗意”
再想想俞伯牙抱着把吉他唱∶亲爱的姑娘你为何离开我~   太毁气氛了</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你就是秦舞阳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丑郡马。。。。我觉得最糟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拖鞋不够还得上开水</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阮小二最疼小雨，小雨也最喜欢最黏她的二师傅，唉，可怜的小雨，她的羽哥不辞而别，三个师父也马上就一去不回了…… </p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看过 后天， 2012吗？</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第四次啊</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他日相见必当把酒言欢[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三娘多可爱~</p>
`;
default:
			return '';
	}
}
        