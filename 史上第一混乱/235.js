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
<p>&nbsp;&nbsp;&nbsp;&nbsp;1.6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1.5</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1.4</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1.3</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1.2</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我大慨看了下，那两章除非重新写，估计传上来难了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太贱了！花钱买的电子书，结果居然能被卖方收回改掉或销毁。只能祝所有收了钱还改文的网站的老板和中高层全都一家老小被车碾死！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了两章，还好我有正版书[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没回来，木兰姐没有排面吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……这跳的太突然了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;mgj，少了三章啊！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无语，老子再给七点充钱不曾傻子了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第三卷 第二章01</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么鬼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面几章写的什么内容？被封了那么多章！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一段章评搬了一部分，因为起点章说有次数限制，而且少了三章，所以可能要搬很久才能全搬上，如果有人愿意帮忙也接着往下续吧。
另外，用回复的方式续章节就是正序了，直接发顺序是反的。我争取每章单独发一个章说，剩下的都用回复</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了盗版也没啥啊，咋就没了
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么情况</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🌶️起点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我章节呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，丢了这么多章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么玩意？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被狗吃了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽？直接跳了好多章？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少了好多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;起点够狠，一次缺三章</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还不等我说话，她就在我胸口重重摸了一把，然后喃喃道，“比我还平，怎么裹的？”
这都要删减吗？我真是服了</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你干嘛～哎呦～～～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确定不是生理学？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哲学♂的气息</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就非常的哲学了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哲学？</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗跖！~~~满脑子秦时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;mmp才发现漏了几段！被广告挡住了！删广告连着那几段一块删了！我都搬到第二章（制服诱惑）才发现！凑合看吧qwq，以后到了广告的地方我手打不复制了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈妈呀累死啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二章 制“伏”诱惑
我见是刘老六，冲他歪了歪脑袋：“坐。”他身后恍惚还站着一人，我问，“刚才谁说话？”
刘老六一闪身，他后边这人便露了出来，一身戎装，顶盔贯甲，腰间悬着三尺长剑，虽然低着头看不见面貌，但能感觉出是一位年轻的将领，他单腿向前迈了一小步，把双手在腹前一合，大概是在跟我打招呼，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第三卷第一章
是的，第二卷开场白也是这样，那时候你们要想从头听是40多万字，现在还想从头听是80万字，我将在书评区发一个投票，想从头听的朋友可以再开一个高v号从头订阅一遍――
上回说到我和项羽千辛万苦得来的诱惑草唤醒了一个千古大盗柳下跖，他哥就是那个一直被人们所称道的坐怀不乱柳下惠，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚从盗版回来</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男女有别，该有的礼仪还是得有的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羞死个人[fn=8]</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么要说“也”？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;L</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十女十痔</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大学那会晚自习走错一次厕所，我是后来知道的，当时是3楼女4楼男厕所这种模式，我不清楚，看到厕所就进去了，灯光昏暗，好像没看到小便池，还路过一个蹲着的，当时没细想，后来想应该是女的，我在她隔壁站着解决完就走了，也不知道她看没看清我，也幸好我穿的红上衣，这事谁都没说过，在这给勾起来了，反正你们也不认识我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑喷了卧槽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想象一下画面</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙！</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲！！！争点气哇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包租婆～～</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有一个选项就是把你弄死，代表人物木婉清</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段骚的爆批，没人吐槽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;更容易被打死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有几百个，但凡有一个病娇一点，你人就没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花写出来的画面感真是一绝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么一个话题，咋就这么多评论？[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就没人想起来，前面安道全说小强跟包子在一起几天就差点肾虚？？这才一个包子就这样了，几百老婆？？小强这是赶着去见刘老六吧？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就没人想起来，前面安道全说小强跟包子在一起几天就差点肾虚？？这才一个包子就这样了，几百老婆？？小强这是赶着去见刘老六吧？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;登徒子会被打死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想多了，那时候敢出门逛大街的女孩儿不是会武功，就是有保镖，小心被打死。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成流水线了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有一个选项就是把你弄死，代表人物木婉清</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呃……中国古代史里严成这样的年代也不多……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段骚的爆批，没人吐槽</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花姐可好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;性格真好</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正是够判了</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗨，老北京花儿木兰嘛这不是</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柔然</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点喜欢上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在这样的人可太多了。</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚上你带她去一次酒店 她不就做一回女人了？毕竟抛去年龄不说她现在还是个女孩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多嘴一句，花木兰是文学形象，历史上没有这么具体的一个人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自古美人如名将，不许世人见白头啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也有史书说皇帝要纳她入后宫，她宁死不从自杀了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小李广花荣跟她什么关系</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好人不长命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷娘闻女来，出郭相扶将，阿姊闻妹来，当户理红妆，小弟闻姊来，磨刀霍霍向猪羊。开我东阁门，坐我西阁床，当窗理云鬓，对镜贴花黄。出门看火伴，火伴皆惊忙，同行十二年，不知木兰是女郎。雄兔脚扑朔，雌兔眼迷离，双兔傍地走，安能辨我是雄雌。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺不是滋味儿的</p>
`;
default:
			return '';
	}
}
        