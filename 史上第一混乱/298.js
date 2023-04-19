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
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众人：还有这种操作？</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话说的就有内涵了，损张冰呢[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给国宝留点笋吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦这老小子可太气人了，小强刘老六这俩绑一块都没有他损</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就要说到逼王蓝染的一句话了：“憧憬，是最遥远的距离”</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;转世的张冰真的是命运从来不由自己做主的可怜人，能有选择放弃的机会都已经能算圆满了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强人念终于消散了</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想得真美。人家对你半点兴趣也无，哪儿来的恨？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艾宝良版的有声，这段那个女声演绎的非常好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这是被打败了才开始清醒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也算古人之风</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？？？我一时间不是很能理解你们纠葛的感情，瘸腿兔子我都觉得比张冰好理解</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？！！！超</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是霸王……啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段真是绝了[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很好很琼瑶</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从小就恢复记忆了 现在都多少年了 一大片人生空白啊</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说什么王权富贵
怕什么戒律清规
只愿天长地久
与我意中人儿紧相随</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜人的痴缠，纵使不是虞姬又如何</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无人的回忆</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不理解，但尊重[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥说来生一定奉还，可没说来生一定娶你，所以他对虞姬的感情始终是坚定不移的，我觉得这才是真男儿真性情，即使他觉得愧疚也不会假装去喜欢一个自己并不喜欢的女人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后嫁的不错，挺开心的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不光认人家当妹子，你媳妇还特么想让她当名义上的兄弟媳妇，实际上给你家大王的重重重孙女拉一个情敌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后认人家当妹妹，呸，渣男[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后就那样还的吗？没劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;flag已立！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挖个坑[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不欠，别扯什么还的了。她喜欢你，你不喜欢她，怎么就愧疚了呢?一个个还一遍，你的转世还够用吗?</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老花迷从不剧透，哈哈，慢慢看就行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;内奸是张冰吧，我到现在还怀疑张冰不是虞姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张冰下药图什么啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还得是邦子，脑子无比清醒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里面还数邦子脑子最清醒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这堆人里边就张冰表现的最有问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虞兮虞兮奈若何</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不明白的是这内奸图什么呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虞姬拐脚了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老花迷从不剧透，哈哈，慢慢看就行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还没看到后面，我怎么也觉着小雨是虞姬呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉虞姬是小雨。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虞姬另有其人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚才那段喊她不是虞姬，当时描写好像是惊惧还是啥的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;内奸是张冰吧，我到现在还怀疑张冰不是虞姬</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节描写的太好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人之将死其言也善</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然感觉蓝药和红药的设定有点接近死亡笔记？不过只有获得能力和失去能力的设定有点类似就是了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们里面有主公，有忠臣，有反贼，自然也有内奸。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冰冰啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透



















。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透[fn=47]



















。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透








































剧透警告！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防






剧






透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神逻辑</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是这么想的，醒来发现全是陌生人第一时间报警</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈一句话毁气氛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是你受到震动的原因，是吧哈？</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不中，我特意买的实体书！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;觉得有些别扭，虽然那些东西是国宝，可是费三口凭什么就觉得它们的去向</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要是费三口真有点想拉黑你了</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;^_^</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竟然还能精准地控制到13岁，这💊还带时间刻度呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太惨了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;空空儿视角就是一觉醒来自己长大了好多年，还变秃了[fn=11]</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面项羽给张顺他们讲虞姬的呼应啊</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这...这不对吧？你们今天是是要陷害我（指逛窑子）？虞大队长，你要陷害我是不是？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽：不对啊，我没逛过窑子</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话看得我鸡皮疙瘩起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问世间，情为何物，直教生死相许。天南地北双飞客，老翅几回寒暑。欢乐趣，离别苦，就中更有痴儿女。君应有语，渺万里层云，千山暮雪，只影向谁去？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忽然巨心疼这个小环姑娘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;么的，跟我猜的一样，不是小妾就是贴身丫鬟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜人啊，可怜人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起见龙卸甲里的洪金宝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，也是个可怜人</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;救救我救救我救救我救救我这段话给我写得鸡皮疙瘩掉一地[fn=16]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没看出哪里懂了，这张冰真是让人无语，还是包子姐好[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你懂个屁，你家大王险些给你害死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不懂他啊。。要是懂了，俩人在一块儿这几个月本来可以很快活的</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前小环问项羽黑虎下落 项羽以为虞姬忘了 其实是小环在那之前就被打发走了 不知道后续</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我超，都疯了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽既然反正还纳了两个妾，也不差小环一个么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张冰对小雨那样，或许是因为她本身就是个小雨吧，对项羽的感情与其说是爱不如说是崇拜……不过她没小雨磊落就是了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面那么多骂小雨的说张冰没问题的人呢？看看真虞姬是怎么做的。时代不一样了当然不能这样，但心胸使然也不会撒谎去故意针对小雨</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;几世痴缠，终不能忘！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果没有“强人念”，张冰不会爱上项羽……唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以天生的有亲近感，只要张冰见到项羽就会倾心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小环就是个普通的为爱痴的女孩，最多有点自私和小家子气，和出身也有关</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也是个可怜人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然恨不起来了</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我真的很讨厌那种为了上学或者别的原因修改自己证件出生日期和有关资料的，从小就不老实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怀疑小雨也是项羽和虞姬的丫鬟或者侍妾，只是心思更纯粹天真一些。所以才有和张冰这辈子的对位、对项羽的心动，和之后见到真虞姬的反应。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕布不是战平项羽吗，为什么说对抗不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老何明确说了推算虞姬没有投胎到现代，那些非说倪思雨是虞姬的呢？</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老子必须明天马上立刻去改户口和名字。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;fine</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不怕，哥们户口本和出生日期不是同一天[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神仙也要去派出所查户籍推算啊[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个解释满分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想起了仝卓，和我来自同一个时间的书友应该知道我说的是什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中国国情!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;⊙ω⊙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老子必须明天马上立刻去改户口和名字。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;╮(￣▽￣)╭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
`;
default:
			return '';
	}
}
        