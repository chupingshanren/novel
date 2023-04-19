$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 130:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不唱完就不吃饭，两人的声音比整个六连都大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;许三多啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不抛弃不放弃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是虎就该山中走，是龙就该到海洋——</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈</p>
`;
        case 131:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全乱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神tm楚歌。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强个王八蛋，多么悲壮的场景都能让你给带跑偏。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈(ಡωಡ)hiahiahia</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楚歌还行哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是晒的挺黑的么</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁山伯：嘿嘿！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不先让兄弟们爽爽😁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在一起10年的兄弟突然变成了个妹子 然后要嫁给自己 不应该是笑醒吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霍雨浩：？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日轻啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟我一起10年的姐妹啥时候变成花美男啊【痴汉笑】</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;受得了（留口水</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弱弱的说一句：秦朝那会好像没裤子……</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李二狗不是那300岳家军里的人吗</p>
`;
        case 134:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得是磨刀霍霍向爹娘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爹娘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么记得是猪羊</p>
`;
        case 135:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：我认他做干爹差不多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;继小强，项羽以后……项羽的儿子也要自己当自己的祖宗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你得问小强敢不敢</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传令官之前没发现？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;力士：花木兰更适合给我们代言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实在忍不住了，飘柔给多少，我清扬给10倍！</p>
`;
        case 137:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扈三娘何在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是没说完</p>
`;
        case 138:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小品没少看</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这双眼不要也罢！身边一直有个美女都不知道勾兑下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意思是以前这样锤过？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小鬼，胸肌练的不错嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑抽</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越共探头。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当金兀术听见帐外小强和八国联军在说话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当美国人听见树木再讲越南话.jpg
当苏联人听见雪地再讲芬兰话.jpg</p>
`;
        case 92:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这生活气息就像百米冲刺进旱厕一样扑面而来</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李宇春</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好你没说曾，不然我要接小贤了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一定是李双江</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生男生女都一样的那个？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;春哥，我是春哥！我是春哥你信我啊！！</p>
`;
        case 94:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呸！你想得美！😂😂😂</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是吧，真以为12年别人看不出来啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;skr</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲兄弟明算账</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你王姐归来吗</p>
`;
        case 98:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了好多影视剧小说里的各种刘邦项羽，反而就这书里给我的形象最为深刻，似乎历史上的刘邦项羽就切切实实是小花笔下的这俩角色，毫无违和感，佩服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子可是把羽哥摸得透透的啊 所以 多少遍 羽哥还是打不过邦子</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们怎么什么都能开车[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽亦知刘邦长短</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不離譜，美帝這裡，填官方資料，都需要填曾用名，別名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就TM离谱～</p>
`;
        case 102:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强果然落邦子埋怨了</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太贫了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧律师</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是你自己内心戏太多吧</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘大哥讲话，理太偏</p>
`;
        case 107:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜欢强点的还可以去奏罗马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就去打西域呗，不行打印度也行</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯 *****带回家 能抗能打</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唧唧复唧唧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的语文老师立功了！</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为羽哥在当铺那一年也没怎么学文化</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强一吟诗 虞姬就飘过～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥，你啥都跟嫂子说了为啥就不给嫂子扫扫盲？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不要脸呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好贱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文抄公啊！！！</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被屏蔽的字：兵   痞</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搁着开演唱会呢</p>
`;
        case 122:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;身边多了个女人和身边多了个古人，能一样吗？</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北魏就是拓跋家那个吧？改姓元的那个？元淳公主～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小受受男是瑰宝啊，就可惜气场不够的压不住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;何止北魏，现在都有小受受的男人。</p>
`;
        case 124:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大个每次介绍小强都得变口吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 125:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前孟浪还只是形容词，现在一看就想到黑猪了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：我媳妇还管他祖宗叫大个儿呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你还喊人老弟呢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈笑死[fn=5]</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呀，想到陈朵了</p>
`;
default:
			return '';
	}
}
        