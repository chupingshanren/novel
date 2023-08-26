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
<p>&nbsp;&nbsp;&nbsp;&nbsp;二胖啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;豪气冲天的怂</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事，刘备死了找到转世刘备给送过去当刘备。</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实……[fn=14]稍微懂点哲学史的朋友应该知道，彼时我们的诸子经学和魏晋玄学已经不行了，正是陈师傅从西域取回来的西经让佛学在唐朝昌盛，也为之后千年的儒家道学提供了指导，可以说陈师傅留的这个学比很多人想的要NB得多得多得多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，那时候都是到大唐留学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那会大唐比现在的米国还牛X，出国的要么是做生意，要么是做暗桩</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑马是真费劲，要是步战可以找小赵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除了虚构人物李元霸也找不出能和项羽吕布掰腕子的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实除了李元霸，去楚汉把羽哥叫上也行，正好刘邦实力还不强，项羽抽的出来身。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隋唐前三都可以吧？那可是公认的超出人类理解范围的仨。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隋唐那些妖怪基本上都能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李元霸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二胖</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我知道你很急，但是请你先不要着急</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您真是我亲大师。。以我有限的人生阅历看，确实约急越出错</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玄奘这是钓鱼执法呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;身体茁壮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这唐僧有点贫啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书里就没一个靠谱的。</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是搁到现在，这六个豆豆就应该换成三个问号了。</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;事实证明，佛教虽然也有那么多的宗教派别，但是各宗之间的割裂还真没道教那么严重[fn=31]有的道教法脉彼此之间简直互斥为异端。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不想分派别？那你回来后派别更多了，你还自创一派唯识宗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一直认为玄奘法师与其说是高僧，不如说是学者。学霸求知精神发作，自己去了趟发源地了解真意。他创立的唯识宗也是中国佛教流派中最贴近印度佛教原意，哲学和逻辑学思辨味道最浓的。也是近代学者和法师高僧们最喜欢挑战的。。想当年我抽风了去看佛经，净土宗禅宗华严宗都好说。到了唯识宗，字儿我全认得一句看不懂。。。</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你去四海乾坤问一问，我是历代驰名第一僧</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关张联手是和吕布僵持状态，谁也弄不了对方，大耳一上天平就倾斜了，然后吕布就跑路了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实就算按演义，关张应该是平吕布，昭烈帝上了是力压</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;准确的说，应该是关张一个梦压着打，俩一起上被压着打，仨一起上。。。。吕布平手了。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又开始tree new bee了，刘关张仨人一起上他根本打不过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样的吕布有点可爱2333</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;屁，中国不信教的多了，也没见疯狂啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;民智不开的时候宗教有稳定民心的作用，哪怕现代宗教也有寄托心灵之用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飞天意面神教了解下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说到底要不是英美不前赴后继地当搅屎棍，搞乱中东，绿绿还不一定会变成这样极端呢，不就是那些欧美佬馋人家石油么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绿绿咋办</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;功夫熊猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低头看不到小弟弟了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肚子太大了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胸太大了</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邢道荣啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个时候靠谱的只有黄忠，不过不好找啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当我不必分心夺权，专注在武力上时，世上还有人敢夸口...可以打败我?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎牢关时期，黄忠估计五五开，赵云要是长坂坡的神赵云状态，完全可以拿下，关羽要有赤兔才能勉强打平，当然这本书吕布就是三国武力巅峰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵云关羽典韦张飞许褚马超黄忠……这些人谁高谁低还真没个定数，但说到头单挑都不如吕布。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过吕布确实可以称得上是三国第一武将</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;童渊可胜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;左慈呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说句话…我觉得黄忠可以支巴两下子吧(˶‾᷄ ⁻̫ ‾᷅˵)</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和平奖的话不一定。当欧美需要巴以和平的时候，去调解成功，能拿到；当欧美需要巴以冲突的时候，有人去调解了，欧美能给这人编一大堆所谓丑闻出来，搞臭这人。</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝对藏私了，不然就不是开瓢那么简单了。话说，还好义父二字就占了一个父字，不然就成沙琪玛了吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;师父师父，沾个父字嘛，吕布肯定得给他弄死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你他娘的还真是个人才</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这三个字都不能说，真是悲哀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毛  主  席都不能说了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毛******说的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这特么，是刘镇伟还是周星驰，也要被屏蔽[fn=14]</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;况怨无大小，生于所爱；物无美恶，过则为灾。</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强你出去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强是抬杠大赛冠军吧</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还想削世家呢，杨广自己把国家玩坏了甩锅到世家上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实是五姓七望的代理人罢了，当时皇权不嶂，杨二想削世家就被推翻了</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西游记的玄奘从他爸中状元到玄奘西行都发生在同一年，也不知道是写错了还是故意的，但是听说过唐初这些人还是没问题的。隋唐英雄传的玄奘就厉害了，单雄信追杀李世民的时候他就过李世民的命，更认识这帮人了。</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四猛八大锤拉过去呗，关公战不了秦琼，李元霸可以打吕布啊</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有些啥比看到自己看不懂的东西就说别人凑字数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段属于凑字数</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小说里写的是：杨林杀了小琼的生父</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郭德纲说过，这其实都是商量好的</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还以为你要夏乐还你那三毛钱呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你能这么说，就证明其实你不恨他</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玄奘和毛遂没有戏份属实遗憾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不去干传销 真是白瞎了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;推荐百家讲坛钱文忠教授的大唐西域记，讲的不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想听！</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说来你可能不信，老和尚当年确实是偷渡出关的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说明了电视剧版《西 游 记》里唐僧没猴哥几个保护，就算没妖怪都到不了地，到是原著里猴子伤人了一句一个“不管我事”到是灵活了许多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这倒是，一个迂腐的人是不可能行万里路的。</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唐太宗还真这么想过。因为玄奘法师人情通达并且几经万里，对西域情况熟悉的不行。这是多好的外交人才呀。被玄奘法师给拒了。。。老爷子一心一意弘扬佛法，普渡众生，地狱不空，誓不成佛。。佛都不当回事，何况官职</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为太聪明所以大彻大悟了 就好像学医救不了中国人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西游：开局指导孙悟空</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生活，就像一团麻，总有那解不开滴小疙瘩呀！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花描写的玄奘形象合情合理，看了觉得玄奘就应该是这样</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;托妻献子的好交情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嵇康写「与山涛绝交书」只是为了表明立场，他并不讨厌山涛，临死前还把家眷托付给了山涛</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是贩鞋吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;敢不敬二爷？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这城管得是二胖前世才行</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在都是外包售后，有啥不能的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这得看给不给钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方正这牌子好久没听过了</p>
`;
default:
			return '';
	}
}
        