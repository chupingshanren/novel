$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;掐掉上边的还能吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然是群众</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都什么时候了还想着你的西瓜🍉</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某少将：打什么比赛啊，来参军吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;育才文武特种兵培训学校[fn=32]</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是他上辈子特别能打，他这辈子虽然也能打，但是警察有枪啊~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好有道理，不提醒一时都没想到[fn=34]</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;踢档的印象太深刻了😂😂😂😂</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我拉肚子了😓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上面有剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花能正儿八经写部武侠吗？其实“王小军”不错了，结尾急了点，花儿，好酒，有侠气，有生活，写这类的，好！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲁智深是他亲弟吧</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然是空房间？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！《空房间》俺好爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白眉大侠？那俩双胞胎合伙偷东西那回？我记着那回是给看着的人给累睡着了  还哪回了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么韩国电影？</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卢俊义马下拳脚无双，马上枪棒无对。在水浒里当真是天下无敌寂寞如雪的人物。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里说他年纪大了，而且他现在是领头的，这些兄弟人才济济，要哪方面的高手都有，纵观全书我也没见着必须要他出手的地方。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小浣熊卡，卢俊义攻击力98，排第一，范围是公孙胜99第一，防御徐宁90第一，当初吃了几箱干脆面吃的想吐才集齐全套，还富余了好多，还有闪卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老卢可不大，上梁山时三十二，比很多好汉都年轻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老卢是水浒传中，唯一有过杀散千军战绩的人。先是一打四胜了四兄弟，这四兄弟打平了关胜呼延灼徐宁索超，接着又一个人杀散了整整一千人的辽兵。水浒常说万夫不当之勇，但真的干到这事的，也只有老卢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一直很好奇为什么不让老卢动手，按理说纯论武力，老卢是水浒天花板。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周侗的开山大弟子，麒麟可不仅仅是祥瑞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在再看，正好在听河北墨麒麟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水浒里面老卢战力天花板。一个人单挑辽国四个耶律王子完胜。关键这四个王子之前刚刚战平关胜呼延灼他们。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全盛的老卢打八大天王一对一的话富裕。跟霸王，吕布也应该就算是稍逊一筹，得几十回合之后才能力怯败走，如果有个明白的对照的话老卢可能还得和他俩在一个水平线上，输赢看环境因素。所以太影响游戏平衡和剧情发展。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那可不</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死的时候老卢年纪大了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卢俊义马下拳脚无双，马上枪棒无对。在水浒里当真是天下无敌寂寞如雪的人物。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里说他年纪大了，而且他现在是领头的，这些兄弟人才济济，要哪方面的高手都有，纵观全书我也没见着必须要他出手的地方。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书最大的缺点就是低估了卢俊义的武力值了，天下枪棒无对说的就是他！
梁山武力值卢俊义第二没人认第一！</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈还有点可爱</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;房租到期了吧？[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈猝不及防</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都特么头脑简单，四肢发达，笑死</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;段正淳表示真给祖宗丢人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有堂弟说明你爸那辈也不错啊……</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像铁掌里面也有这么一段话</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还不善言辞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太有见识了，这两门学问现在也是就业必备</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实也一部分反应了现在是太平时代。</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然这样为什么几次补刀下狠手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别动不动洗白的   显得你很low</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;洗干净了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是不容易啊</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么？狂飙分子？？？？哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂飙早有伏笔啊，哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂飙！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两天有部电视剧叫狂飙[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老虎有钱啊</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是武松觉醒了不应该不找他们啊。</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刷牙杯……</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲道理不应该啊，鲁智深可是挨了张清石子的。邓元觉设定类似鲁智深，不是个心细的人，容易被偷袭。最后死也是花荣射的。这里不应该能接石子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于用到啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗器[fn=26]</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要小强作为第一人称不能走，不然这一段就讲不了了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是动了杀机，吴用和林冲他们早就让小强走了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段对话很有郭德纲单口的意思</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;排行109·天煞孤星·不高兴·小强！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;109号斑点狗代号9527</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感来了</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;林教头你坐啊！</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;找金师傅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扣。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，该赔</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个可以让姜武演</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桀骜不驯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我特别喜欢这段描写</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;教练，我想学这个！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈好玩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;排排坐吃果果</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑飞</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝金哥哥今年五十二了。
我这八四年生的小伙，也是四十岁大汉了。</p>
`;
default:
			return '';
	}
}
        