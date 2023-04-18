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
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后干掉你 替代你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱你就会变成你。。。的形状？</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇帝几百上千个，最吊的就那么几个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不然呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿 不以为 就是么</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦哥句句至理名言。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我说实话你是不是不信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;往事不要再提
人生已多风雨
纵然记忆抹不去……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈我不当大哥好多年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话接得妙</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说实话……从当年第一次看这本书到现在，我就只觉得娶妻当如项孢子……</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凤凤好好</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦是那种只剩一条内裤都给你穿两天，让你感动的有两条内裤送他一条的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强子一个大汉王朝开国并肩王，穿个一万块钱的西服那是受了多大委屈啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人物性格把握准确，所说言语与人物的性格贴切</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一轻拍怕是酒杯都弹了一下。</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄忠生前就是关内侯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赐不过二百万，封不过典属国</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关内侯是侯爵级别最差的那个，也就有侯这个称号。所以被分为第十九级。第二十级就是真正的侯爵级别了，列侯。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下老哥意思是倒数第二的爵位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我没记错的话，关内侯是第二高的爵位，不过反正也没差了</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疑车无据</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按首级算</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后一个叫曹操的为你们当好了最后一任丞相，他死后就完犊子了</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可太时兴了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎，也是时代的眼泪啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再说下去怕是两人都会被自己人打死了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;yooooooooo～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给里给气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;换现在的话说，这太给了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雷还真是十年前的时兴…………</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;何止有份</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按理说这会儿胖子应该已经知道历史了，还能装作不知道，跟刘项毫无芥蒂的相处。毕竟是千古一帝，胸襟气魄极大。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我觉得胖子打从他们初见就看出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥，真不愧是千古一帝，书里不少方面体现出这位大帝的独到之处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;取而代之</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这书里看到赢哥的话，脑子里都是湘玉她爹的声音…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实我觉得胖子打从他们初见就看出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥是真好人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千古第一帝啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;豁舅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按理说这会儿胖子应该已经知道历史了，还能装作不知道，跟刘项毫无芥蒂的相处。毕竟是千古一帝，胸襟气魄极大。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;huo嚯酒，这才是正宗的关中呛[fn=58][fn=58][fn=58]</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强还会抢台词了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名戳笑点</p>
`;
        case 92:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看吧，我就知道。</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑浆子不得打出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑瓜子嗡嗡的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑袋不得飞了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在霸王手下逃得一命，你也算不枉此生了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强，卒。享年二十七岁。全书完。</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我像嫩爹[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太皮了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得，天下被抢的仇也报了。</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;找杜兴啊</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心里默念 关我什么事啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时迁呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杜兴[fn=32]</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是伏笔吗？结婚不会出什么事吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
`;
        case 108:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。怎么就好玩了？啊？
亡命徒啊！！！</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么快？</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们，跟我一起上。口号喊起来：“杀小强，抢包子！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五人组的剧情，太难得了现在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这细节，刻画的太到位了，包子厉害啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈啊哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大爱包子啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心里没点儿*数吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈，</p>
`;
        case 114:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毒奶，奶谁谁死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我信你个鬼。没有这本书。</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那直接给你俩个视力表指着认不更省事儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;润洁……</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花，次饼干～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强吃下那另一半时才会有影响，花荣单吃就和吃普通饼干一样不会有任何反应的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得这里细节处理得不够好，刘老六说了吃了饼干会有一点点影响，而花荣此刻是要去比武的，一点点对于高手来说是致命的</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是想看为什么当时水浒二人没对上的，结果看的全是养由基是谁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小养由基，初看还以为是日本人名。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;养由基，还是真第一次听说</p>
`;
default:
			return '';
	}
}
        