$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在上海长大的70后，从未在马路上见过大型奇蹄目偶蹄目动物，牛马羊猪骡驴骆驼都没，只有公园动物园马戏团才有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瘸腿的🐴来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小时候我大舅就养了一匹马，有事就赶马车出去。我们村有一户也养好几匹。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我小时候经常坐驴拉的排子车。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没见过 路上能见着条驴都属于新鲜事 村里的牛倒是见过 马什么的估计得北方人才见过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我家隔壁就是一家赶马车的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我C，不会有赤兔转世吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;90后表示没见过马拉的菜车，小时候倒是见过驴和骡子拉车卖菜的</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;形容的很到位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蹄子不是脚趾头，是指甲盖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是，就怕它踢我</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自己的肥料催的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好吃不好听</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种菜是特么最贵的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听起来没什么食欲啊[fn=40]</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花的奇妙比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反讽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写比喻，，，，</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌骓预警</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打老远蹲着就过来了</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两千多岁的老马？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这养的真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真形象…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌骓？</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话笑死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这马也是可怜</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听说小时候家里好久没吃肉，后来买块猪肉生的在案板切着呢，抢了一块就跑，追上已经在嘴里了，死活不吐出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈小花这脑洞太离谱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凌晨一点，老婆在旁边睡着，我在旁边憋笑憋的发抖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好好的旧友相聚场景就让你给带跑偏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈这都怎么想出来的词儿啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的比喻总是把他辛辛苦苦造出来的气氛破坏掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甲方乙方里的老板</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重点呐</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神态描写很有画面感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是内蒙人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当时项羽是先把🐴和宝剑送上船的吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个伏笔埋的可以，赞一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灵性！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写得真细致</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感动</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 88:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马也转世了....那啥，克隆人死了入不入轮回？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，猜到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，这永恒的经典镜头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这得是一匹马的使命</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六道轮回，合着人家几辈子投胎都只能当狗当马呀[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起一部电影，一条狗的使命</p>
`;
        case 89:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=4]</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;屡战屡败呢？</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个啧用的很用心，古装剧都是喊驾，其实驾是赶马车才喊的，真正的马师和战士都是这种类似语气助词驾驭马</p>
`;
        case 91:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有钱人院子真大[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应有BGM：“烈火卷雄风～，红云映碧空～莽原好驰骋～烽烟天边涌～骐骥有良种～宝马待英雄～长驱急如电～真看拖死生～”  
可惜颜色不太搭</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金少炎买的那匹马，屡战屡败</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前比武大会不是有人牵了一批马吗？找他们啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2万和2千万的区别，副驾驶上坐着的娘们儿（爷们儿）不一样[fn=4]</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最近我在看马，不求好的，买个十几万的就满足了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小金马不是有个屡战屡败？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两津这货就是赚一亿日元就花一亿买马的主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实一直到一战人们说我都是“马是人类最好朋友”，后来生活中不需要马了才让狗窃取这个称号</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要就是看被谁骑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都得遇见好骑手！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老太太明白人[fn=35]</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在都是指兔为驴了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喜羊羊与灰太狼里面古古怪界大作战里面那个兔子那么大的 就可以骑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是谁，送你来到我身边～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别人拽缰绳你扯耳朵。。。</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正我是被这久别重逢感动哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;风有点大，眼睛里进了砖头🧱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道为啥，人和动物之间的感情总是很容易感动我，而人和人之间却没有那么容易感动我。很奇怪。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;握草，我也泪光闪闪</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也就这年代没微信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;流氓啊流氓</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈[fn=26]</p>
`;
        case 107:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛逼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;局气</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强这么久也没去第二次</p>
`;
        case 108:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这马智商高啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=19]</p>
`;
        case 109:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水了一波大的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重点是这个字南方方言里就是个JB…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佐佐木小次郎是谁？有梗没</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孛儿只斤·爱育黎拔力八达</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿卜杜拉阿拉巴马.赫雷斯.哈姆西克</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;塔吉·马哈·巴达兰达巴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尼古拉斯托夫斯基</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柳生十兵卫三严。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又开始凑字数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都引退多少年了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是你水的理由？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是凑字数不方便</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;慧儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水了一波大的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重点是这个字南方方言里就是个JB…</p>
`;
        case 112:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就凑字数吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小黑玛利亚</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌骓马</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孙膑不是没腿了吗，他咋用马？田忌赛马？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥这是看了马说？</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让和天斗看看，没准是鲁迅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我小时候我爸特喜欢把我扛起来，骑脖梗子。
然后有一次他没注意，过大门的时候没低头，咣唧就给我怼门框上了。记忆犹新啊[fn=61]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我小时候爷爷倒是老把我架脖子上，这样我就不能到处乱跑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没骑过+1，别说爷爷外公。爸爸妈妈也没给过[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，我还真没骑过，就记得小时候我爷爷只带我买羊肉串，，跟他说想吃糖，带我买羊肉串，想买把宝剑，带我买羊肉串，想玩游戏机，带我买羊肉串[fn=53]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发现小花喜欢在最后一句点题和转折和说现实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肯定没人管，小时候都这样。不稀罕</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再拿两液化气瓶，神挡杀神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕布和项羽骑摩托打仗？那画面不敢想象</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;游戏王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎着？单缸机还是双缸机？ADV还是仿赛？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我想起来跑跑卡丁车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，，这不是王者关于骑摩托的皮肤么。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在不是有伪造的搞笑古画么？萧何月下追韩信——俩人都骑着二八圈自行车，关公战秦琼，骑的摩托</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样的话项大个必输，那货可是修摩托的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面参考白色伤疤战团的摩托部队</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三英战吕布摩托版</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑摩托车当然能打仗，可以参考«暴力摩托»</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;漂亮，没毛病</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原作：石森章太郎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;火星鼠骑士……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;住手！这根本不是决斗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那不是阿三么…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再拿两液化气瓶，神挡杀神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕布和项羽骑摩托打仗？那画面不敢想象</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老太太明白人</p>
`;
default:
			return '';
	}
}
        