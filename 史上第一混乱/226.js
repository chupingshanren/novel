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
<p>&nbsp;&nbsp;&nbsp;&nbsp;神特么乔迁之喜</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和天斗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;何天逗？今天逗呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和天斗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是条汉子</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这辈子老婆不打他就不错了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;电瓶还没有还他吧</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你上辈子都给你老婆杀了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可狠多了，08年拿会我上小学初中，吃饭有食堂，每天零花钱还得5块钱10块钱的呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你一个骑电动车的主儿，要个屁的车费啊[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;报应啊，让你打老婆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;wx开视频呢？</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;科长，一万多？考虑到时间是06年，大概一半了。你得抓紧，过了一零年，一万多是刚起步。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上辈子的情这辈子互相还</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;流（shuai）氓（zhen）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是不是对率真有什么误解</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他说的这个一年级是说在一年级的时候，不是指现在读一年级</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抽烟这事到真得管，才一年级就抽烟，这要养成习惯抽到大，身体不废了吗。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年少有为
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面王寅明明说自己孩子都三岁了，这怎么又上小学一年级了，这bug不应该啊</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你倒是抽老師啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一时间想的竟然是打老师。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没个999+我都不信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里怎么能没有评论呢</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个太松一个太紧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中二的年纪啊</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老司机，再破的道车也开得飞起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;活活，邪恶地笑</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他老婆是上辈子杀的一个县令</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该啊，报应啊[fn=33]谁让你上辈子打老婆来着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人物形象跃然纸上</p>
`;
        case 94:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没人吐槽1.5米厚的钢板吗，那就是一块钢啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;友情提示，这个电压等级不是国内常用电压等级。大型企业也用不到这个等级。1万伏就够了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全天候</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;10万伏特，皮卡丘吗哈哈</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太爱这小说了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;论对症下药的急智，我服了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多了将近一倍啊，还不满足？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真多……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽。。。。。。</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“她说下午三点阳光射进教堂的角度
能知道你前世是狼人还是蝙蝠”哈哈，每次看到这耳边总想起威廉古堡的这句歌词 [fn=31]</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说老师不如公务员的，你得分情况，现在一个班主任排队送礼的多少？如果再是重点学校什么的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也就是说，他到现在还是科员啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一般的老师当然不如公务员  但育才可不是一般地方啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师是事业编制，当上领导才是，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问题是育才的老师不是普通老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师收的黑钱多嘻嘻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差远了…普通老师和普通公务员干的活和工资都差远了……小强的学校倒是差不多一样……</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强听了半天，没听明白。索性脚尖一点地面“就这了！挖！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了 这老头子以前干特工吧</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比我聪明多了，我直接辞职换的工作[fn=11]</p>
`;
        case 100:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;午夜不寂寞这个节目是哪个频道的</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。明教育才分教</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方腊可不会丢下自己弟兄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个方腊我真的敬服，这才是那个震惊南方的枭雄</p>
`;
        case 102:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;简单粗暴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完了，还得花钱修好。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸王能举鼎，况区区一 1.5 T 石雕乎？小菜一碟 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这很项羽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宛如三百的飞脚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莽夫……</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实没跑，老何用了隐身术，人就在别墅呢</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老何其实这会儿就用的隐身术在别墅呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来剧透了，这人其实是刘老六的亲哥哥刘大宝，当初和刘老六争天帝之位失败贬做小官，后与王母娘娘相恋被刘老六嫉恨在心，借生死簿一事将其发落凡间，刘大宝怒而反击，方才与小强处处作对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别问了，就是少炎他爷爷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我知道是谁，就是不告诉你们</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也是工具人咯</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈可娇？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沃日，外国那个代言环保罢工的小女孩</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;缘，妙不可言</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花剧情真的一环扣一环，很舒服</p>
`;
default:
			return '';
	}
}
        