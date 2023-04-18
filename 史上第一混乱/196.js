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
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论好看！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了听了不知多少遍的作品 现在就是找找十年前的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;充点钱不看正文，专门来看你们的评论~~~</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然藏龙卧虎</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话怎么这么可乐呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话自带槽点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得让时迁把他电瓶偷了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后电瓶没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话哈哈哈槽点</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我家媛媛真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;敞亮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐们[fn=35]</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早上下个清水挂面，浇上昨天没吃完的酱。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;南方大多是汤面吧，有谁吃炸酱面的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;………还能不能让人好好吃个早点了！炸酱面惹你了啊！</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥牛逼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看，还是你羽哥疼你</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥怎么变成这样了。。。</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈好自然的梗啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑skr人，笑死我对你有什么好处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神踏马自行车！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还要啥自行车啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下回跟羽哥说，还想要谁的手表。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是电动车！
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高秀敏说的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话，怎么那么耳熟</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，笑的像个一千斤的胖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这辈子打工是不可能打工的，只有偷电瓶才能生活的这样子。―― 切格瓦拉·阿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我老公呢？[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我不到啊？”（即答）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看，还是每次笑的跟个白痴一样哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎！我黑切呢！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各位说的是什么梗，这个我倒不知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这辈子打工是不可能打工的，只有偷电瓶才能生活的这样子。―― 切格瓦拉·阿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;窃格瓦拉：这辈子不打工，忘了他我愿为你偷电动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;窃格瓦拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回家要被老婆捏死啊这是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就有点厉害了啦，那时候周某不出名吧……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打工是不可能打工的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，笑的像个一千斤的胖子</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个不用教，你让人打死一回自然就能会[fn=10]</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这画面不忍直视啊 不知道还以为催房租的呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸葛亮下来蘸蔬，约我等明日决战，如河对敌？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你先下来再说话哈哈哈哈哈</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿话挤兑人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这嘴也太损了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这豆包碱大了。四刷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巨额财产</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;08年的电瓶车大部分是电动助力车，就是和自行车外形差不多的。现在少见了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种电瓶车轮子小，滚一圈还没走两步远呢，车架比自行车沉很多踩着费劲，脚蹬子又比较靠前不好发力变得更费劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快笑死了</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又读一遍，小花塑造人物形象的功力真的6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这个！爱基吧shei shei 不服？整死我！（小强态度）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真社会，很真实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接烟屁股抽两口算了，还能省一根烟，有点像刘老六吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别瞧不起人，搞得谁还没个生活技能似的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捡烟屁点烟，这操作谁不迷糊。。。</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，小强好聪明[fn=31]</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高啊！塞麻将没得比～～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是人才啊，比起老曹，小曹这个才是真的天下英才尽入吾毂中矣。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;电瓶卖不(;｀O´)o </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后这一段画面感十足</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爽啊，比装逼打脸爽多了</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跨越三年的我来了……你要借1T还是一步或者一部？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好怀念，那时候的书里借一步还只是借一步的意思。</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，项羽刚刚已经看上它了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能，没贼我电瓶哪去了</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;民工…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太尼玛逗了</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八大王吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是被偷了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差点看成大王八天。。。</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感啊哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：neng他！
六子：妥！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋朝混混和本地混混的友好默契</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太特么有默契了啊，果然同类……[fn=4]</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从邓国师这个称呼叫看出他俩关系不好了</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水浒全套卡都全了，还有闪卡，当时吃小浣熊吃的是见到就想吐，所以这么多年我一直不再吃干脆面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在小当家都有小龙虾味和火鸡味的了，还挺好吃……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有巧克力味儿的呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再狠辣他也就是个妻管严</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都没人吃过香辣蟹干脆面吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么我看成了香辣干脆面一样的汉子......</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🇯🇵，暴露了</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;知道你没文化</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实你叫吴用看看也不丢面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很扎心了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很贴心了</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正经的老流氓啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后，关于我是谁，双枪会告诉你答案</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这是郭德纲和日本话和韩国话吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得，滚刀肉。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，文言文是压缩包[fn=14]</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;面无表情的李逵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑洞果然够大够青奇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmmm猝不及防</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我他喵</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前送小象来的时候不是说是谁了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会是金少炎吧</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是扛了音响，梁山人都得死这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变身了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅帅帅</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卢俊义</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卢员外马步无双，为啥小强就不让他动手呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;厉天闰不也是马上的战将吗</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里邓元觉说的是盟友而不是好友</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽死的时候正当壮年，卢俊义老了唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽之勇，千古无二。严格来说除了李元霸这种杜撰出来的玩意儿以外，整个历史上百分之八十的武将在楚霸王面前都是三拳两脚的事，还有百分之十五是三招两式就能解决，百分之八是走不出十回合。其余百分之二能撑个二三十回合。能和楚霸王打的有来有回的也就李存孝，但最后也肯定是项羽赢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽这是有必胜的把握啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这几段人物描写描写，突出性格，真好，</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段，嘿！花儿不写个正儿八经的武侠可惜了！不过，花就不是个正儿八经的人……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥身上从来都不缺挂件</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽说自己奈何不了段天狼看来有些不实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥这是一力降十会</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅！两三下分胜负，这才是高手对决！</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当时听书的时候本书里最喜欢的女性角色就是媛媛姐，又美又帅又聪明，太爱了</p>
`;
default:
			return '';
	}
}
        