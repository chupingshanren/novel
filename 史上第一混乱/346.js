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
<p>&nbsp;&nbsp;&nbsp;&nbsp;林冲骑武松 天下无敌！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看小花这么喜欢武松就觉得混乱不愧是我刷了十年的小说，这世界上怎么会有人不喜欢武松！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武智冲：武松＋鲁智深＋林冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水浒之中，真英雄唯有鲁智深和武松</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;林冲杀的是丁伟吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武松杀西门庆潘金莲端的是干净利落，不像林冲杀孔捷都杀不死，窝囊人干窝囊事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟武十回</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二哥就是那种武侠小说中主角的范本，一路走一路学</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是肚子里有孩子了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大概是第三遍的时候才看懂这个……</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;槽点太多，不知从何吐起</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佟媛劈砖，专克小强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你想变成砖头？</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武松说话光明磊落啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二哥还是二哥</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;菜园子夫妇这是打算去卖大力丸了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二龙山系的，凝聚力强，格外讲义气</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实际上二刷的时候我就在想，入云龙公孙胜也是号人物，梁山上多少也有点威望吧，怎么这么大事小花没给他安排点剧情呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲁智深没有出走吧，他好像是擒拿方腊以后才坐化的</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没毛病，自己人[fn=31]</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处没有掌声[fn=39]</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会不会出事？</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿越到2020年，带几双鸿星尔克吧。可别穿到2021年，这会儿没货</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿迪王哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;AJ吧[fn=4][fn=4]</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没说完，这是意淫出来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于说全了，掌声鼓励</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杯酒怕是不够，应该把酒言欢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于说完了一次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杨过？？？？？</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是神雕侠侣的结尾。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花，你怕是不想活了呦[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我咋觉得梁山一百零九哥的绰号应该叫“皮皮虾”呀？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是李白三五七言啊，老金也是借鉴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，好牛逼，作者经常往著作里面钻啊，抢眼球抢热点！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无耻老贼，差点上了你的当[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结撒骨灰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姑姑和雕[fn=34]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意思是后边的不要钱了吧 敢要我就投诉你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是神雕侠侣的结尾。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你敢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结撒花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花，你怕是不想活了呦[fn=10]</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皮</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;史上第一代购</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;停车费多少钱？交了吗？</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌呼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就知道是这个事儿。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是叫表哥这画面感就更强了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎～原来是叫哥哥的?</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我信你个鬼</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让费三口去中国移动查查，看看这个时间这个号在什么地方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞬间欠费停机……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中国移动：这逼在哪呢这是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中国移动穿越漫游资费标准不知道是什么样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像没毛病</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是也没电么（</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是段景住要家庭影院合理点，可以和前文对应上</p>
`;
default:
			return '';
	}
}
        