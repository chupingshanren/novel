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
<p>&nbsp;&nbsp;&nbsp;&nbsp;竟然全是瞎看的梗🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二号去听经</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;祝大家心明眼亮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奶油面包好好吃啊……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼保健操…</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不吃亏，也姓方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大侄子？那不就是方……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶诶，这是什么梗
</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特么。。。。哈哈</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;招笑……哈哈哈</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘴这个欠[fn=26]</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去？东河区南圪洞99号？</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴用：张良韩信堪为良将，想办法赚上山来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴用战术大师，张良是战略大师，两个人不在一个你别上的。就连你的范增都比吴用强吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴用:这沛公颇有豪杰气度，尤其是一手金花炸的出神入化，不如设下计去，赚上山来。
项羽:军师此言大妙。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对，范增你叫亚父都疑心，说屁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也指不定把张良韩信忽悠来项羽这里了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指不定就忽悠你投降胡亥了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没用，范增都不信谁来都没用</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实在的，我认为三国时期诸葛亮郭嘉都不一定达到楚汉时期谋士的水平，只能说接近。如果再和战国时期那一批比，估计差距恒更大了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;估计脑浆子都会被锤出来吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;估计人家都懒得搭理吴勇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吊起来锤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴用干不过他们吧  </p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马上司机就逮回来了</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节，金老太太说20里内就他们一家</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金宝你完了你给了他一个大比兜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我给了我老大一个嘴巴子，我该怎么办，在线等，挺急的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该还债了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么办，我把老大打了[fn=17]</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人都爱白虎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蚩尤吗～</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后一看，指纹密码锁，时迁也懵了。</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有这么安慰人的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老王：“我他娘才不担心他们！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绺子下山砸窑啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放心吧，我们不是好人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;安慰鬼才方镇江</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放心，他们都是正直的好人……啊，就还是 土匪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事，就绑架而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;安慰？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;火上浇油啊！这段笑喷了！</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;非常明白啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事，别怕</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可算让他给逮住了哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一闷拐打晕了</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咋办，把大哥给揍了，跑不跑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他要是武松，我就是方腊！你特么说啥！卧槽！你真是？！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扇了方腊一巴掌</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉近视的老庞比赛能处处不离心口额头，可能更强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得老庞也会连珠箭啊，所以历史上也是花容厉害吗</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邓元觉和鲁智深还是亲兄弟呢</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去！！十年后这句话被瞎看带火了！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;缘，妙不可言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;缘，喵不可言～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是更早一部港片的台词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁说小花不是穿越过去的我跟谁急[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话以前就挺火</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 哈哈哈哈哈
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;缘，妙不可言啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花是预言家吧。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;缘，妙不可言。奶油面包好好吃啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次来看都有惊喜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去！！十年后这句话被瞎看带火了！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;半藏:这句话十年后会火。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神奇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;缘，妙不可言</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想屁吃[fn=4]</p>
`;
default:
			return '';
	}
}
        