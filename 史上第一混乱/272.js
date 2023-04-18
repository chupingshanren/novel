$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前用板，现在用摞</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回复楼下，鲁智深三拳打死的叫做镇关西是个卖肉的。蒋门神是个教人武术起家的黑社会后来占了个酒馆叫快活林，武松给人大公子平事儿把丫干躺了但也一把火把人酒馆烧了把一些个伙计和一个小丫鬟也给杀了，那丫鬟其实不算坏人就骗武松说是他妹妹其实喜欢他，所以滥杀无辜的锅也从这来的</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀秀老实人</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一点也不搭啊[fn=4][fn=4]</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就不能从声音辨别人，佩服佩服</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里全是你家的房子！你算算物业费一年得多少</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也跟着激动起来了</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人见到大房子不兴奋的也少</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕布应该比关羽大吧？何况直到吕布死，关羽都是个小弟，就算吕布年纪小也不可能叫关羽二哥</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二爷还有周仓，吕布可啥都没了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关公月下斩貂蝉，要是按照评书来讲说不定还有仇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是阿尔法那篇课文里的?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;罅隙语文课本学的，初中吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;罅隙的罅（夏），還真沒多少人能念對</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既有油盐酱醋，又有雪月风花。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是我也能买得起房就好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就喜欢小强描述的这些细节和吐槽</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个人名字还是两个人名字？</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5平米</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把小细节记住这点真的很戳人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“反正也不占多少地方”你瞧瞧这话说的，不行了不行了，太炫富了😂😂</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;湿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我特么居然也哭了。</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我哭了我好羡慕包子呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段话是我人生信条来着…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;房子够住就行。真心才难得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;撩的好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种细腻温馨的爱情才舒坦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花每本书里的爱情，我觉得小强和包子的最真实最细节最动人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好～</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;希望我也有这么一天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今年26，说实话都不想找了。但是看到这里，我想如果遇到合适的一定好好待她</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次看的时候是10年，初三；之后反反复复看了十几二十遍，现在工作4年多了。去年有了女朋友，今年打算结婚了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;34了，还单着😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三年啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3年了！有女朋友了么？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有女朋友了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;整两年了，谈了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丫的，看了这几章好想谈恋爱</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;篮球场15×28=420平方米</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧来那会儿我就觉得是写错了。当时还说张顺他们在宿舍，他是第一个入住啥的。我还纳闷老久呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就很羡慕@_@</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈的 家里阳台和篮球场这么大...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;找人大？</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子真的是个好姑娘</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感动中突然又爆了个笑点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书就是成年人的童话吧  没有苦大仇深  也基本没有罪大恶极的反派  从开始到结尾都是那么美好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画重点“我们”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样的老婆，真好</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不装了，我摊牌了</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呸！奸商。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从“我真傻，真的”说起</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凡尔赛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打死打死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥的悍马就这么被遗忘了。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这逼装的，你可能是第一个被读者打死的作家</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来严丝合缝最早的出处在这儿</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苟富贵，毋相忘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱的深沉</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两千多人，喝了五吨，一个人合五斤，应该是算差了。要么就除了酒店还有其他地方办宴席</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平均下来一人五六斤啊</p>
`;
default:
			return '';
	}
}
        