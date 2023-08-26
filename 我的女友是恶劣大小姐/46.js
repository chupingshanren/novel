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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不困了哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个第一夜他正经吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;16</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;函馆是谁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前十？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;onenight in 北京！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来喽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚刚好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晃子酱，呐呐呐呐呐呐呐</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那把什么含在嘴里像话？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师[fn=24]</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那叫渡边，叫爸爸？[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;硬了硬了，拳头硬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边多了一个大自己十岁的好闺女[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孝心变硬</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，，，我不做东京帅哥已经很久了！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是还要加点弹舌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子远可御姐，近可萝莉，贼可爱</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣也想被夸可爱[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;母女？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻爹爹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差点看成土奶了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这玩法新奇</p>
`;
        case -10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，才看到我上镜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说那个没用的，加更呀加更</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣好可爱啊</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好耶 这边后宫和谐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈麻麻！麻衣女儿！美姬姐姐！清野妹妹！大被同眠！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈眼里的麻衣就像是落单的小兽吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐从老师身上感受到许久未曾感到的母爱🐶这就是青奈妈妈的由来🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和谐的后宫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊……这，斗鸡眼？</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;水字数中</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“「五棱郭公园」。”我对明日麻衣重复道。</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一脸嫌弃.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子:小丑竟是我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美雪！我的美雪！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;校医拒绝水字数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子你怎么不配合我</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;汉南洞夫人(ಡωಡ) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实更想看散发无尽光和热的，看看怎么hold住 就是想来很难写</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5亿円·1000亿円·1980円</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然感觉老师三人组好像声优那本的闺蜜三人组啊，这样看来控制自己的魅力的渡边真不算太渣</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在画画》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有一只乌鸦飞过[fn=64][fn=64]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天空是蔚蓝色，窗外有千纸鹤</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;星型要塞，六级堡</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是很符合，但是感觉很好看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就想起前段时间看到过一张图，护城河里全是船，挤满了，谁也动不了那张图。可惜没存</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以说秋季有什么？-_-||</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;星之梦</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=5][fn=5]</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;👫</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你搁这搁这呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皮这一下很开心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卖家哭了😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;💧💧💧💧💧💧💧💧💧💧💧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;冷酸灵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冷掉牙齿？</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;名场景</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起 夕阳染红的街道</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;已经部分是美姬的形状了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今晚的消费由渡边少爷买单</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;确实</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;差点想歪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有女孩跟我说。她们很喜欢泡澡，身体泡进去之后，浮力拖住脂肪，会很大的减轻肩膀的压力。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问声辨图已经是基础技能了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;"重"负</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浮起来了</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;场都包了混不混还不是渡边少爷说了算</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有混浴？[fn=51]岂可修[fn=44] 五星差评！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我渡边说有混浴就是有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经能预感到车要来了，你说对吧？麻衣桑？</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;少了最强战斗力有点没那味</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：不～好不想让哦～想三个人一起泡温泉～</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=24][fn=24][fn=24]</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么都可以不可以不可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是什么不可以的都可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;なにも良いじゃない！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达咩哟，达咩达咩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么都可以不可以不可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙， 你们搁这搁这呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉这边会有人绕口令，先插个眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以不是什么都可以但什么都可以不可以[fn=13]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以但不能完全可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不可以的什么都可以哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是什么不可以的都可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里应该说的是不可以什么都可以吧</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬在和凛贴贴[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老渣男了😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只有和清野凛在一起你才全心全意是吧😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“臭男人终于走了，这三天凛是我的了”.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次都是这样的，和美姬在一起时想清野，和老师在一起又想美姬了，不愧是你啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬姐姐现在抱着我呢[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在我怀里🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬在工作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别问，问就是在在睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男路上谁为峰，一遇渡边便成空。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说明隔壁这两个魅力不大啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老渣男了😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃锅里想碗里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬在和凛贴贴[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点渣啊</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呸吐口痰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天也是最爱美姬的一天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神啊  怎么办啊  马上就不是最爱了</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;靠！你是怎么做到刚说完爱一个人，立刻去想另一个人的[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我靠，对比上句话，你突破了新的渣度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人间之屑啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男，tui</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边渣，去死吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;程晋阳vs渡边彻    
2021两大屑男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这转折真是防不胜防啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;靠！你是怎么做到刚说完爱一个人，立刻去想另一个人的[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太屑了，这个阿彻就是屑啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我靠，对比上句话，你突破了新的渣度</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就是时间管理大师吗，恐怖如斯[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tui</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;he tui渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您可真忙呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;烂人，给我想青奈啊[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草，真渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此子必成大器</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是时间管理大师吗，恐怖如斯[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tui</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边渣的底线就是没有底线！[fn=34][fn=34][fn=34]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是全都要，你不要？我要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tui</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男的自我修养</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣男的自我修养</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tui</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是全都要，你不要？我要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是完结的征兆吗[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边渣的底线就是没有底线！[fn=34][fn=34][fn=34]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;he  tui</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;he,tui</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tui</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能量守恒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老段正淳了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能量守恒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Heitui!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快完结了，看官老爷吐口痰再走</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我也想要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好球！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;路人女主第一季0集，配乐《猪突猛进》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;菜瘾大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猪突猛进</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;色鬼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘶 路人女主？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘶溜～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我实在不知道为啥会有泡完澡打乒乓球的活动，难道不应该先来一盘乒乓球再泡温泉吗？你说对吧？帝国の绝凶虎桑？</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那到底是英超好看还是中超好看？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了不看那两对球，而看着两对球</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;他是很厉害</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里竟然没车？</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好漂亮的乒乓球
呸
好白的乒乓球
呸
好圆的乒乓球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛的真平[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好你没说，好软的乒乓球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是乒乓球？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑最像乒乓球[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边技师手法娴熟，保养的太好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这球又白又大又漂亮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打就算了，我只想看看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好大好白的乒乓球啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们都是那球拍啊，就只会盯着那球。可我不同，我是钢丝球，我渴望一个温暖的的地方[fn=21][fn=21][fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的这么大吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车，好快的车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，这样的乒乓球吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这乒乓球真白！啊不对，这乒乓球真大！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛的真平[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这乒乓球真软</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好漂亮的乒乓球
呸
好白的乒乓球
呸
好圆的乒乓球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恰到好处</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;心有灵犀一点通</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不给清野发嘛→_→</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？（和善的笑容.jpg）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么叫清野妈妈叫太太，叫丈母娘叫真姬[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太们好久没出来了，完结前还想再看看真姬</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吃饱了（嗝儿～）</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我爱美雪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美雪那么大，当然最漂亮啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都很漂亮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;稻森春[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万华镜2.5</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，这个时候的你很卑鄙[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是晃子最漂亮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到一句话  刘琦:还望先生救我</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小泉青奈真的好温柔</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;警惕小泉青奈打妈妈牌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Duel！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永远宠溺彻宝的清奈妈妈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你舅宠他爸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就宠他吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看比赛看比赛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师yyds</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;贴什么纸条啊，画正吧，输的人身上写满正字，嗯，一身正气</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东山大法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坐旁边，脚掌要怎样合在一起啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣学姐，偷跑的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得了灰指甲，一个传染俩。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小心脚气传染[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐从来不废话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Jiojio贴贴[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太大胆了</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为什么不能是鸭子坐呢(</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老中医狂喜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得了灰指甲，一个传染俩[fn=58]</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;车车，好快的彻彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼说的对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上厕所蹲太长时间的美姬出没[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;闺蜜前犯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想起了眺弹阅读系列[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我脚都麻了，还没好吗”</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;校医可能想偏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;校医已经看穿了一切</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;听话，让我康康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就你不懂事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么又黄了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老司姬校医
傻白甜晃子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呦，你脸红了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精神焕发！</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晃子像不像各位，明明单身，这种经验比有对象的青奈还懂[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子很懂嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子你很懂啊！吃一颗药，做好安全措施[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;by💊</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;肯定不是脚底</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一进来看见一楼二楼和一楼二楼的一楼愣了一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么是用中指啊喂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉在开车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉在开车</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后知后觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们俩是顺带的[fn=31]当做看不见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子：也带我玩啊！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们不在就可以了吗[fn=33]</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好啊</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;准备夜袭</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈学姐[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日后再说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;fu目前犯，燃起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做完就回去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？回得去吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好诶</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大麦?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以，但请把老师也带上</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;也不是不可以啦</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：我会带着彻的味道回来的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吓傻了</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;唉 麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前八楼全部阵亡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个探索使用手指吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我说别人回复我的消息咋点不开，原来被删了[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猎人：今天七杀，真不错！</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么？我现在看只是没有前三楼，你怎么说13</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们至今为止仍然不知道前面13个兄弟车速有多快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前3楼呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车轮压到脸上了</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好可怕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鹅鹅鹅鹅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全军覆没。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全没了？</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这无意中发现我阵亡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以防万一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我要s了！
麻衣：s里面~~</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师 : 同学们，现在开始上课: 因胳膊比大腿还粗，所以，胳膊=大腿。[fn=7]</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是一般的休息吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;错亿</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正版受害者</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;亚拉那一卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣:就这，就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶魔的低语。1、进来了吗？2、不来了吗？</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盖楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;测楼！</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手都不闲？
没人评论？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再测！</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一看就联想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种小说不能看正版，老是有删减，还要加群看番外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘶，我在看这本小说之前是打算节制的，很遗憾，作者的车太快了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我从此不敢看观音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面的全没了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一看就硬</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊这  15层楼直接没了</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正版</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有理由怀疑这里缺了点？</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;确定不是叫换知识</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，删节了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不都是拍屁股吗？</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你不来那让我上吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个休息，他正经吗？嗯？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个再次用的好啊</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前十八层呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不要冲这么猛啊？阵亡15层</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你倒是动呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;硬着头坐起身来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是身体某个部位的形容词</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“硬”是坐起身</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“硬”是坐起身</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“硬”是坐起身</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;硬是坐起身</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前面两个老哥瞬间就无了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=21][fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打个🦶先😋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个一楼哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐮🐮💊🎇了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是有骑马的环节吗？怎么没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浴衣的帶子沒有發揮綁著衣服的效果。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷跑？提前骑马了？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇塞。这尺度略大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥两个一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阵亡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拖，就硬拖
李在赣神魔
换姿势刷新buff持续时间是吧[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面两个老哥瞬间就无了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛牛要炸了！</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大型翻车现场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽 起点杀疯了 差点楼都没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;18层下地狱了吗</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻在她后面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼没了吗？</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp; 我真服了，看个小说用了四五包纸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑马呢1，怎么没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古巴比伦空中花园</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;這是四個小時過去了嗎？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快完结了，放飞自我的乌鸦[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有人解释一下吗？没懂，是什么特殊姿势吗？</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;自己房间的门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？好家伙，搁着偷听呢</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;回马枪</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。。你这不得乘个倍数，东京帅哥那是一般人吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十分钟？正常不都得一小时么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就直说了，超过十秒都是病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;速战速决我见过30秒的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喝上十分钟，明日，麻衣就会回来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当渡边永动机遇到麻衣榨汁机，就不能用常理来衡量了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边一次一个小时，前面至少三次了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师低估彻正淳了，以后有的你好受</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边永动机嘴角微微一笑✓</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这，人，人呢，发生了什么事[fn=16]</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师很懂吗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师 ，请报番号 [fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈の脑内小剧场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑内ntr吗，要去争取啊，青奈</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;向各位车神致敬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这波失算了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜了，遇到了渡边永动机。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边不是一般人。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈正解</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“时间长，次数多，量大”</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;人都傻了</p>
`;
        case 175:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你怎麼會有贏得過美姬的想法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有清野呢[fn=31]</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快进到大被</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师这是准备要A上去了吗</p>
`;
        case 178:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“我想的只有手对手，最多是嘴对嘴，根本没有在想衣服的爆裂啊”</p>
`;
        case 181:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;确实，一般来说，长辈更加纵容晚辈，假设都没做过，青奈应该是第一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做什么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmm说实话怕伤你的心[fn=31]</p>
`;
        case 182:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;因为你是大家都喜欢的小泉老师</p>
`;
        case 184:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我可以不让，但你不能不想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉老师纠结死了，是给还是不给呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少女的心总是飘忽不定</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以是我拒绝，但你不能想法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就宠他就宠他吧</p>
`;
        case 186:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一楼失踪人口</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=46][fn=46][fn=46][fn=46][fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我可以不收，但你不能不送[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夜袭！冲鸭！</p>
`;
        case 187:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;人与人的体质不能一概而论.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个点？渡边不说，麻衣学姐不会麻吗？</p>
`;
        case 188:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你很懂嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此时的麻衣学姐：面色潮红，眉眼含春，两腿发软（彻很精神呦）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，早就习以为常了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有任何问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车轱辘压我脸上了</p>
`;
        case 193:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明天，我要见到老师躺在床上不能自理，希望乌鸦不要不识好歹🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;决定了，以后NB了就把这本小说拍成番剧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈最可爱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纳尼！卡在这里！？认真的吗(⊙x⊙;)！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把被子拉到頭上，久了一點才傳出小小聲"去"。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进，给我快进!!!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;期待明天[fn=33][fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明天啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵呵，感觉要快黑化了，求求编辑把作者绑进小黑屋码字吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一库</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一天后见！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明天，我要见到老师躺在床上不能自理，希望乌鸦不要不识好歹🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明天赶紧过去啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;敌羞，吾去脱他衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;
床上偷笑.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么我看到4个一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;口  是心非的青  奈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;口是心非</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=43]不愧是作者，俺喜欢你的文笔。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;团灭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去。。。没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者不应该像现在这样，动不动就断你的章，让你就想对他大喊一声，no，去...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安喽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，原本显示有好几个评论，点开一个都没有了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来明天要第一时间看了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;期待，明天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日，这断更，睡了睡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;期待，明天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;期待，明天</p>
`;
        case 194:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师倒了（悲）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！明天不见不散！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，十几楼都没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，在一切之上的是她，我的天，小泉青奈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲！小泉老师在行动！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上了耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;期待明天那一章[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3…………P</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这楼炸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点心疼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！明天不见不散！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师倒了（悲）</p>
`;
        case 195:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;双人行必有学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=24][fn=24][fn=24][fn=21][fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐，不愧是你！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三人行必有我师
三人行必有我姐
三人行必有我师姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还得是你啊学姐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3 p?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐：助攻的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;〖三人行必有我师〗才对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一齊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边狂喜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看看，我说什么来着。这组难度绝对是最低的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐永远的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者，马上完结了，不得来一手大被同眠？那个大床伏笔赶紧用上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;‘只要是彻我都可以’</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三人行必有我麻衣学姐🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，不愧是学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不答应，让我们这些读者很难办啊[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小泉号 大破</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛啊，11个评论三个一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;双人行必有学姐</p>
`;
        case 196:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;白给没人不科学</p>
`;
        case 198:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这话意思，以后熟悉了两个人也是可以的[fn=26]</p>
`;
        case 199:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐[fn=21][fn=43][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是什么糟糕的台词，为什么我遇不到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣真的太好了，能贪的从来不让，不应该贪的从来不争，乖巧地让人心疼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：等你回来，我再去[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣:要公平</p>
`;
        case 200:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;潜台词：一起……也不是不行……</p>
`;
        case 203:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：你要是不去那我可就。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到明天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐助攻王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青奈好，大破击沉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别跟我多bb ，就问你去不去！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到明天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：你要是不去那我可就。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐永远滴神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不去还是人吗！上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不去我就去了哦😯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？评论呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要是不去我还得和彻讨论种族延续的大事呢.jpg</p>
`;
        case 204:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣疑惑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呦我去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣疑惑：“奇奇怪怪”</p>
`;
default:
			return '';
	}
}
        