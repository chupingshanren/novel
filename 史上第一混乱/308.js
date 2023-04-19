$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还真是皇帝</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2023年正月初九</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年正月十二</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2008年呀[fn=19]那年太多事情了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021.2.11是除夕</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甚至是第一个，过年这个习俗是什么时候开始的？</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻和李师师关系也挺好的</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;厉害，几个月就家大业大了</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;悲哀呀，这不是赵本山说的吗？😅😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关键是还没嫁呢 就不回家过年了？</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要啥自行车啊，还要什么自行车</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;歌剧被黑出翔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;95年申花10连胜头尾都是没拿下八一队</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么运动操心？足球！什么运动最操心？中国足球！(男足</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;估计你二嫂上辈子欠你二哥的，不然不这么操心</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这小品笑死我了</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还记着包子这爱好呢</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大冬天草坪上烧烤，不冷吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花这里给记差了，陈可娇前两次送的是花篮，花瓶是古爷送的</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，这动作可爱死了</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大耳贼是老流氓的21代孙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在又让放辣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，不让放！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在过年都不让放了 </p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;悲哀，悲哀呀[fn=58]</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太形象了，我好像看到了这个画面。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;23333333</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来只有一点点咳嗽，这下差点没咳过去。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=5]</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;职称到头了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万年历是商朝人万年发明的，商朝之后八成都知道过年，虽然以前叫元旦。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开国皇帝。。。这职称确实没法再往上评了。。。</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就叫无厘头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈啊哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牙口真好 酒也好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;几个菜啊喝成这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这脑回路简直了，赞👍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牙好口才好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑补画面后笑出猪叫</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你敢打皇上？</p>
`;
        case 92:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯啊嘿是去你的吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噗</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你俩讲相声呢</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太有主持人那味儿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了😂</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李世民乐的最欢实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是秦琼也成了客户就好看了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，乐死了[fn=4]</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;糊弄还行，就拿王羲之来说，南朝皇帝都没资格命令他表演个什么</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈陛下们出道吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没来的康熙送来专属BGM助兴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇帝f4</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑喷了这段哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李世民：我再活五百年就没你们仨什么事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朱元璋:老子还真想在活五百年啊[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铁木真:再活五百年世界就是我的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;铁木真:再活五百年世界就是我的</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佟圆好像还不知道这群穿越众的底细吧？</p>
`;
        case 101:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一个这么说的是李自成吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子上辈子是谁啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔！！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这句话感觉好伤感</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都是命！</p>
`;
        case 102:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥黑龙江要用英文字母代替啊，很敏感吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;红黄绿三毛哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想要！！</p>
`;
        case 103:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二向箔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那还不简单吗 先把李逵压扁</p>
`;
        case 104:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明欢天喜地过大年，我怎么会看哭了……</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁山上我最喜欢的两位就是鲁智深和武松~~</p>
`;
        case 106:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在连鞭炮都不让放了。一点都不热闹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前看觉得就是热闹，现在发现这不就是育才春晚吗</p>
`;
        case 107:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;保留节目可还行</p>
`;
        case 108:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下什么泻药啊？下蒙脱石散！[fn=8]</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;形容调高吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青藏高原</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是“青藏高原”……</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁给上一个卖拐范伟的图！！？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个歌。。。不是叫青藏高原吗？。。。。高潮也是青藏高原啊。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，想想都好笑</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看看看，包子说话多含蓄啊！[fn=8]</p>
`;
        case 122:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是个好办法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了，确实也没说表演非得成功</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子确实好可爱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了，下次喝醉了也表演这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次都笑喷，这次正好在吃饭[fn=17][fn=17]</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重量级的啊[fn=33]轲子演范伟厉害了</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;词</p>
`;
default:
			return '';
	}
}
        