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
<p>&nbsp;&nbsp;&nbsp;&nbsp;卢姥爷的香备得有点早啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来，给卢姥爷上香</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来，给阿姨倒一杯卡布奇诺</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好兄弟！</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是分叉吗，直接烫好吗？Ծ‸Ծ</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣女大波浪？</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸王抽烟……</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像删了，这理发师是个娘炮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你怎么知道人家白了你的[fn=31]</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实古人认简体字应该挺简单，毕竟简体字本身也不是生造出来的，都是古已有之的异体字或者简化字之类的</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🤕🤕🤕</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要说比裹胸轻松你姐就明白了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问题是南北朝不裹脚……</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;读音同梁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这字我也不认识</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段改了好多，明星甲乙丙丁的事儿整个压缩成了三句话——虽然都知道明星屁股底下全是屎，但是这么欲盖弥彰就太好笑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，现实里咋没有这样的瓜让我恰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贵圈真乱</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东亚人想晒好看确实难</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;烧伤了吧</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就别祸祸转盘街了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段小强吐槽特别有意思hhhh</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老烟鬼了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗑烟灰可还行</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超什么短阿就裙，这个有什么屏蔽的</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;转眼就可以出个末日文</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要取决于你们的老爹有没有一个够大的儿子。</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谷爱凌啊</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中国古代人也是耸肩表示无奈？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很真实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一朋友也是那么说，然后我问了一句，狗好用吗。她想都没想就回了一句，好用。然后我问，比男人还好用？然后她追了我三条街。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪本杂志，借我看下</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双标阿，刚还说不带个人主义的，你既然知道他是霸王你一万对他一万作死？完全没有胜率阿。</p>
`;
        case 88:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑补disco女王张蔷……</p>
`;
        case 89:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就不穿衣服[fn=58]</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的小强，没人搭理</p>
`;
        case 91:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然而试穿时导购都是主动要进来帮穿的，但我不好意思，每次都拒绝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然要进去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能在大商场开店的，怎么的也得有几个模特模型吧，照着比划一下还不简单？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;试穿是都进去帮忙呀，08年也是</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;观棋不语呀小强[fn=4]</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;找李师师啊</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叶问不同意</p>
`;
        case 94:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大饼哥来了昂</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再一次验证了顺序不影响阅读体验。</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想知道作为一个光荣的善使桌腿传统的学校怎么教出你这个用板砖的异端的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有那种可拆卸的桌腿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九十年代初吧，隔壁镇初中发生盗窃。我们中学校长把我们初中坐校女生转到教师楼住，男生到老师堆木柴的地方每人找根顺手的，说晚上有陌生人进学校随便打，打死都不管！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我那会是板凳条</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呦，笑出眼泪了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们这啥学校啊，这桌腿儿不老结实的
|･ω･｀)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就想知道，这学校还有一张完整的、四条腿儿的学习桌吗？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的牛逼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段太搞笑了！</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给阿姨来杯卡布基诺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先有武松发现了三碗不过岗，杜兴酿造 被孙思新取名叫武松杜兴 不，是五星杜松，后有强子的卡奇部落</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥呀</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;警察叔叔来了可能羽哥还能走脱……解放军叔叔的话……羽哥木兰姐～祝好运[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看情况，重要的话就是军队武警全副武装直接投入战斗。。。。两万人。。。。应该能坚持五分钟？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这万人只要不是想造反，还是能顶些用处的，如果是想造反的话，来的就是95式了~~</p>
`;
        case 98:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没有真正混乱吗～</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盘踞一方诸侯2333</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仿佛被绿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她睡了你的女人</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没，好几天没深入交流了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姿势玩的挺花啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看不到的不是躯干上后部就是躯干下后部[fn=58]</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迪士尼真人版本这粉白过头了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我黑皮鱼肉子不服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……你得把那些绞尽脑汁做黑皮的妹子们生生气死</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在又回归做头发了，这个梗过去几年以后除非特地提到，否则很少有人会想到李小璐了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时的做头发还是做头发</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大业胃疼!胃疼啊!</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022.3.22   12:08:56 前来报到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次看还是热牛奶呢……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小弟闻姊来，磨刀霍霍向爹娘。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你有弟弟的，有诗为证：
“爷娘闻女来，出郭相扶将；阿姊闻妹来，当户理红妆；小弟闻姊来，磨刀霍霍向猪羊。”</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木兰出征的时候她弟估计还没菜刀高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木兰是有小弟弟的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唧唧复唧唧，小强把毽踢。不闻毽子声，但闻强叹息。…兵书十二卷，卷卷有姐名。…愿开面包人，从此替姐征。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木兰有弟弟，磨刀霍霍向猪羊的就是弟弟，木兰从军的时候还小的很。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花木兰好像是有弟弟的</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以配图用不见不散里面的葛优那句[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强就一老色批</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我特么。。</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿一身星星的星女郎</p>
`;
default:
			return '';
	}
}
        