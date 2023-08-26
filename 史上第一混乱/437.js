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
<p>&nbsp;&nbsp;&nbsp;&nbsp;一语中的，一点毛病都没有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前我没得选 现在 我都知道了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个选择很曹操</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹操优势很大，曹操A了上去，曹操打出了GG</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹操：“飞龙骑脸、你告诉我怎么输！”
曹操打出GG</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里理解为曹冲之后得待在现代。</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹操虽然喜欢曹冲，但是对于他们这种人而言，继承者和王图霸业才是最重要的。只能解释为他知道了天道的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹操不可能因为一个孩子放弃霸业的  主要是忌惮小强的身份   谁敢不听仙人的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赤壁应该也在点子表里吧，万一曹操赢了那不全完犊子了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;為了一個兒子，而且還是日後無法相見，不能即位的兒子，就這麼退兵了，也太看不起老曹了</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了曾志伟版诸葛亮的略懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周瑜的台词</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老不看三国哈哈</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸葛村夫还真演过苏东坡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸葛亮写东西文风正得一匹，真让他来写诗词也是杜甫那种格律诗，这么飘逸的文风他怕是不会写</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那诸葛村夫写策论可以，写诗就比你们家父子差太多了。。。写词也到不了这个水准</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;魏晋南北朝，曹操属于魏，北魏属于南北朝的北</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹魏不是北魏，成汉不是蜀汉，杨吴不是孙吴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你挖自家墙角不手软？</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次出来应该把流星锤带上的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵😒😒😒😒不会说你就表说咧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈气！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这嘴啊，缝上算了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又环顾了一下四周 想找个坑把这个小兔崽子给就地埋了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你咋老秃噜嘴呢</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飞龙骑脸怎么输</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;内涵我曹某，来人呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真，说曹操曹操就到</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夸你最快呗</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算对口，落后了1000年的造船技术……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拆了木材还可以用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不合适吧，海船跟江船能一样吗？</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说曹操儿子曹操儿子就到</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当了爹才能体会这个感受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又哭又笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书不论情节，单看你这比喻就能封神！神特么奇奇怪怪的比喻，感觉不伦不类，偏偏你还真就能感同身受的体会到。总之，牛伯夷～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段看哭我了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小说来源于生活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比喻绝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花哥也是有故事的人呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这比喻😂😂</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喂！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹孟德：我好梦中杀人！
花弟：我好杀猪羊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉唉，啥时候磨都行，可不兴在曹操面前磨刀。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不好！！宁教我负天下人，休叫天下人负我！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花家：危</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小象来找花木兰玩为的就是这一刻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹操在场还敢磨刀，也就是你家有俩元帅一将军你才没事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猪羊要骂人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的家畜(ಡωಡ)</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一手嫁接用得真是妙啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万一花木兰他弟弟就是吕伯奢转世呢？</p>
`;
        case 94:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又想起来秦桧忽悠小强提防孙思欣了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;父爱啊</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不对吧！小象刚到小强哪里还不到10岁，这就过了一年多</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹哥不是小强跟你吹，你要有我这些个世袭罔替的头衔你都得嫌自己生的少</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强说我家真没有皇位要继承，立啥太子啊</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道环夫人和他。。。？！</p>
`;
        case 101:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;华佗没记忆必死 有记忆未必能支撑医疗环境</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;华佗还没去恢复记忆呢，在研究研究都快能治好癌症了</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木力不是木兰他爹吗</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会那就是会，再客气一下就直接别耳朵上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个“不会”真的灵性</p>
`;
        case 103:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是广告词吧……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三国杀的策划是不是也看过呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是金城武[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神周瑜啊😂😂</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话说的，我一个同学，四十多了还待家里。</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦良玉，妇好，吕稚不服</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然不好奇武则天是谁</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜老师</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说媒的当然是座上宾，至于别人就是大大来了那也是个蹭饭的。[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：咱小强当年可是个人物！西楚霸王说起我和他的关系来都得变结巴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;德行</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看到冲儿想到的为啥是令狐冲？！</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;基本都要学一学曹冲称象的</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不大好吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我名字里也带个操字，看到这里出戏了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这…也太客气了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是喊孟哥吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震惊！三国著名人物曹操竟然有龙阳之好！而且还是主动的要被人。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一对好基友</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是名词？还是动词？
</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这叫起来有区别吗？</p>
`;
default:
			return '';
	}
}
        