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
<p>&nbsp;&nbsp;&nbsp;&nbsp;沧浪之刀，留痕于此。</p>
`;
        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是速溶好喝</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胃疼不要喝牛奶，多喝热水，真的有用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胃疼的时候千万别跟小强学着喝什么牛奶豆浆什么的，因为主要成分是蛋白质，会加重胃的负担。———于二二年九月留。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喝鲜牛奶会拉肚子，酸奶没事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强👍</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实现实来讲，当兵的身体协调性很好，核心力量强，只要根不是特别高，就算第一次穿，穿上也和平底鞋一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高跟鞋是中世纪西方人不讲卫生，大街上面特别的脏，经常可以看见一些粪便、尿滞，所以贵族们就发明了高跟鞋，来防止这些脏东西将衣服给弄脏。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;科学研究表明，穿高跟鞋的确是有害健康的，代偿性体态变形，粗小腿毁膝盖坑脊柱，足底筋膜炎，拇外翻blabla……
刚上大学时兴奋地买了好几双，还穿着去逛街一天下来腿都要折了。现在？我家里一长排运动鞋，反正工作老稳定了，谁穿这玩意儿啊|･ω･｀)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呀我去，就是这种感觉[fn=12]裹脚似的</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强真是一点亏都不吃，我喜欢</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给阿姨倒一杯卡布奇诺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：我就这个 爱谁谁～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小雨的师父张顺也是这样不拘小节在比赛场馆旁若无人的大呼小叫，难怪能和强子那么铁，都是土匪脾气</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萌萌，站起来…</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;葫芦娃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘老六不打老头了[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有啥六啊
一般不都七八吗
竹林七贤
八大山人
什么的
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桃花谷六仙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乡村爱情故事既视感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放~~明明是七仙女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以六爷会隐身很正常，他们只是葫芦娃变老了，老三老四还会吐水吐火呢！其实何天窦是他们爷爷，当初受了蛇精的蛊惑变节了，真事儿，不信你们就往下看[fn=10]</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然感觉好像宋祖儿</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;养狼计划</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谷爱凌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021年看见这个惊叹小花的确对国家体育很上心啊</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;状元公</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜筋柳骨啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柳公权（778年－865年），字诚悬。京兆华原（今陕西省铜川市耀州区）人。唐朝中期官员、书法家、诗人，兵部尚书柳公绰之弟。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书圣啊</p>
`;
        case 89:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，学校艺术班可以开了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;送子图好像是他的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴道子（约680年—759年），又名道玄，唐代著名画家，画史尊称画圣。汉族，阳翟（今河南禹州）人。约生于公元680年（永隆元年） ，卒于公元758年（乾元元年）前后。少孤贫，年轻时即有画名。曾任兖州瑕丘（今山东滋阳）县尉，不久即辞职。后流落洛阳，从事壁画创作。</p>
`;
        case 91:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赶紧的，笔给他让他来写。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王羲之（303年—361年）[1]，字逸少，琅琊临沂（今山东省临沂市）人。东晋大臣、书法家，丹阳尹王旷的儿子，太尉郗鉴的女婿，有“书圣”之称。</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是已经破了省里的记录了吗？还不够国家队标准？</p>
`;
        case 94:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坐着背手？</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年了，运动有国界了，连猫狗都有国界，哼哼</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阎立本（601年—673年），雍州万年（今陕西省西安市临潼区）人。唐朝时期宰相、画家，隋朝殿内少监阎毗之子。</p>
`;
        case 102:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老头特辑呀</p>
`;
        case 103:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;华佗[1]（约公元145年－公元208年），字元化，一名旉，沛国谯县（今安徽亳州）人，东汉末年著名的医学家。</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么奖励他</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按理说不应该，买房时候你都经历过一次一男二女了。</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;银鳞胸甲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说是胸甲还真没毛病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就看出小花的游戏功底了。勇者系列魔法内衣总比皮衣铁甲什么的防御力高。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我这儿有一件银鳞胸甲你要不要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胸甲还行……</p>
`;
        case 109:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，小强不愧是小强。</p>
`;
        case 113:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;治不了，等死吧，告辞.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;治不了，等死吧，告辞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;治不了，没救了，告辞
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蔡桓公，不是齐桓公呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扁鹊说的对，华佗说的对，告辞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;华佗：哎呦呵，这脑瓜，得开瓢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对不起，没救了，告辞</p>
`;
        case 116:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王羲之的字，一个字就值一箱子人民币吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么说吧，我们高中老师说他有一个央美教授同学教书法的，过年去送礼，一副字统共20个，你猜值多少，一个字一W[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千字千元？你是不是对人家的字有什么误解？一个字都不止千元</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;聚宝盆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这六个不是国宝，是制造国宝的</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她都自爆了，对A有啥机密可言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对a有什么机密的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对a个粑粑，木兰姐是以为小强是女的，所以才问他怎么裹胸裹的比她还平，如果是对a参军还需要裹胸么，天天甲不离身谁能看出来，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有些女生越裹越大，估计得有c</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们不举报你，快招了吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝对不是一对a，最少是b不然不是秘密</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果了12年，应该也不会很大了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱国情操爆棚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪知道的对a</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她都自爆了，对A有啥机密可言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你特么说不说[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对a有什么机密的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贱贱的小样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;机密你妹啊</p>
`;
        case 117:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花也是大神，开宗立派的那种</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是真大神</p>
`;
        case 119:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴道，子王，羲之，三人合作是也</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;月票好说，倒是字画确定不是小花代笔的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这让专家一看，我也卖不出去啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兑现吧</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;香奈儿和后两个放在一块儿咋感觉这么怪呢……</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这三件我只有腰带，从没打过领带，一双运动鞋穿四季，话说回来，男人三件包，好像是 香烟打火机和手表，烟不算，应该是 手表，皮带皮鞋+打火机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时代变了大人 现在主要是看旁边的女人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天真空三点，明天黑白条纹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最能给男人撑腰的是金钱和权利。权钱在钱之钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不穿也行，有这三件儿你也算三点式了[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈笑到头掉！！！</p>
`;
default:
			return '';
	}
}
        