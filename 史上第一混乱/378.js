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
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书小强实力的最佳展现。你根本不知道一个流氓半仙到底有多大能量。难怪费三口得防着他</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;估计要来一个五千年阅兵了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个标题应该也是梗吧，高森的召唤千军</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么要带着呢，真不怕出事还是我看漏了什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天作孽犹可活，自作孽，嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你完犊子了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你完了</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你彻底完犊子了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;腻完咧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你惹上了这本书里最不能惹的人，包子人缘多好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说了实话，摊上大事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你完咧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你摊上事了，你摊上大事了</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得罪小强最多板砖开瓢，得罪包子……你完咧。你是选被秦兵射墙上，还是选被楚霸王扔天上？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;信不信秦国大司马灭了你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大实话</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;商量个屁！留小强！敢押包子你大金国都没了</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=49]居然没评论 前面的十多遍白看了</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话相当符合强子这个市井小混混的身份特征和性格特点</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六爷威武</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这几章真的太降智了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一车就算超载拉10个人，嗯 八十年后……</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实李世民主要灭的不是隋，是和他一起灭隋的人……</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看这书的时侯要保持英雄史观，要不就真混乱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打仗的时候宋朝的人死在唐朝，元朝的人死在明朝，天道老哥不会大怒？</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈小花为了写多国联军已经上头了，前面从塞皇帝顶工资就开始铺垫，这会儿为了把最重要的人质送出去已经顾不上合理了，还好本来就是搞笑风。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强行降智最为致命，在别人地盘上这么狂，金兀术脾气差点直接把你俩砍了咋办</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是26分的逻辑啊。。。牛批</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笔力老了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四舍五入，这两个不用打了</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记住这句话好久了…历史总是人尖子推动的</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子，三声了。。哎。。。。。。。</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我但凡是第一次看这书 看到前半段都心情沉重 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满嘴跑火车</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑补陈佩斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很过瘾的手势咋做？</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者忘了包子还怀孕呢？就说是搞笑作品这也太违和了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子快气死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你完咧，你真的完咧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噗，还记着账呢</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还政治避难，赵匡胤能把赵佶的腿打折</p>
`;
        case 94:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在怀疑金兀术是被老六忽悠着扣的包子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到底哪个是私活儿啊……</p>
`;
        case 98:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时候正是越狱最火的时候！！还得去租碟的地方租着看呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈妙啊，我当年看越狱的时候也是废寝忘食的看。一部越狱，一部英雄，美剧启蒙，是真他吗好看，从那时候我才知道电视剧原来可以这么好看。</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;压缩碟，童年回忆呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那包子也得把地图纹在身上之后再进去找师师啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，是个办法！</p>
`;
        case 101:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;整一队特种兵应该把李师师救出来吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是第一次了，之前和刘老六提到的时候就叫过姓完的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完将军第一次出来</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;激动人心的时刻就要到了</p>
`;
        case 103:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有耕坏的田，只有累死的牛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反了吧？[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有想不到的，只有做不到的</p>
`;
        case 105:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我穷，投了一张月票</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;校长有800万兵力……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;北宋那会排名二十开外的国家人口加起来都未必有那么多。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚刚查了一下，目前我国解放军海陆空三军现役总兵力约230万，第二炮兵部队的人数没有对外公布。全国退伍兵约有4200万。
美国138.5万
印度127万
朝鲜117万
俄罗斯113.2万
韩国69.1万
伊朗60.5万人
越南46万
法国44.02万台湾省38万
德国30万日本28.3万英国20.7万</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我八百万勇士</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界上兩百個國家，剛好一半不到八百萬人口
排名101的黎巴嫩，七百七十多萬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏联千万红军，刚解放时八百万解放军</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本投降时，美国在职军人1100万……
主要是现代国家动员能力太恐怖……</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打架这事，找你刘哥啊
干别的不成，打架叫个几十万弟兄还是有的</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是，现在不是不能告知胎儿性别吗？怎么就一口一个的儿子儿子？？？x染色体畸形吗？？？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也知道自己老婆肚子里有孩子啊，还带着她往那里钻</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汉宣帝确实挺牛的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;通辽宇宙的龙场了属于是……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么不能是嬴政？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迪亚波罗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贝恩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘病已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小萝卜头</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天庭直接派出了幺幺九轨道空降师？</p>
`;
default:
			return '';
	}
}
        