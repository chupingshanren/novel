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
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得谁来着  穿个裤衩都能给你变出青龙偃月刀来</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嚯，新放出来的</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武松是T恤 王是坦克背心？</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈  笑的肚子疼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;使不好老抽自己脑袋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诛心[fn=4]</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蝙蝠侠还真会这种格斗技</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说束湿成棍是杜撰的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过蝙蝠侠还是很可能掌握了束湿成棍的，比如他胸口的标志可以撕下来，说不定就有这种作用？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不他们真的没有！蝙蝠侠亲口说了他的披风是用来遮屁股的（虽然遮不住哦不对是还可以用于滑翔、用来挡攻击，关键在于披风太大汗不湿），而超人……自己拳头攻击更高，披风大概是用来裹人作为防护的，比如可以把蝙蝠侠从头包到脚……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然这段在这本书里不是非常戳中我笑点，但刚刚依然鼻孔喷水了！
在这里说，就是为了告诉后面的兄弟：喝水的时候不太适合看小花的书！</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戳到我的xp了</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下次一定</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别说梁山的人，我听着都难受。</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看过三渣之后，不认识“托”，只认识“扥”[fn=33]</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊哈哈哈哈~药来喽~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二郎，吃药了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来，大朗，别犹豫了，吃吧[fn=11][fn=11][fn=11]</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;林冲心里啥滋味啊</p>
`;
        case 89:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是这个药是真的，我觉得我们需要把高俅找着[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好喜欢宝金</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈人才</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我 佩 服 我 自 己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;错了，武松是清河县人，在阳谷县成了打虎英雄，本来要回清河县找他哥，结果他哥已经搬到阳谷县了，所以才在阳谷县落户当了都头。</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这感觉要输啊。。</p>
`;
        case 94:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁山这帮人的心态跟之前项羽差不多 先是发现故人大喜 之后发现这人与故人相差太多 难免失望甚至气愤 但他们知道是自己错了 不该用武松的标准衡量方镇江</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一直很爱家人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果不是万恶的旧社会，武松应该是一个英雄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起来刚才他说只要给钱，就算说我是只蝈蝈都行……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武二郎当年也是，为了他哥哥都委屈到什么地步了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不容易啊</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;次奥好帅！！！！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真帅</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呃，那狗是哪个变的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某个电影，导演几个月时间就把狼都训得和狗一样……⁽⁽꜀(:3꜂ ꜆)꜄⁾⁾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古人应该知道狼和狗是一种动物吧，毕竟没有生殖隔离</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建国后不许成精，是狼你也得给我学会摇尾巴。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别这样，古人能发出这样的感慨已经很时髦了，你还指望张顺懂得进化论？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也是会的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;声称狼不能被饲养的狼图腾是一群被饲养的狼拍的😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问题是，狗就是狼变的啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没觉醒啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈士奇：嗷呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某个电影，导演几个月时间就把狼都训得和狗一样……⁽⁽꜀(:3꜂ ꜆)꜄⁾⁾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;电瓶哥你忘了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是可以变二哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呃，那狗是哪个变的</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在直接抖音直播了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;即使是2008年，也可透過ISDN，數據專線等等方式，做視訊連線</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;头头会不会是古爷？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是哇，各种直播造人哇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是现在的直播好哇。</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来小花看的是电视剧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲁智深：？</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杨过比他们往后多了吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈 背台词</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得那就是他们头</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;同样的事情用不同的话说那真是完全两种感觉啊</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊对对对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说是就是，不解释…</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方镇江：1234567</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王寅：导演，你找的什么人啊？连台词都记不了，能找个专业的人来吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方镇江可能是没背词</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然比开出租的还啰嗦，王尚书现在是开大车的[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人物描写想当成功 佩服</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是武松醉打蒋门神的技能吧?</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲：有道理，胖子但凡耳背一点也就提前来你这儿了。</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么说王寅略略弱于武松</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴京暴打李连杰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当面看这段着实眼前一亮</p>
`;
default:
			return '';
	}
}
        