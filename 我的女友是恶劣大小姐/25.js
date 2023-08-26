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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天好早</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;kkk</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是我不对劲，还是乌鸦有问题？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥可以提供最上等的蛋白质及脱氧核糖[fn=31]（赵忠祥腔）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;简单来说要让母鸡觉得安全，舒适，养狗或者猫也是有帮助的，另外卫生也要注意。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;通通拷走，都不对劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我点进来是想看母鸡是不是真的多吃虫子才能下更多的蛋，结果居然是这，我还是太年轻了呀[fn=48]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水，草地，虫子。是不是还有桃红色的大地和淡淡薄雾。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就知道书友们不会让我失望。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高蛋白的小虫子指外遇？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;母鸡下蛋和光照有关也就是说最好关起来人工控制光照</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥可以提供最上等的蛋白质及脱氧核糖[fn=31]（赵忠祥腔）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬还可以吃高蛋白的小。。[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不得劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是我不对劲，还是乌鸦有问题？</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好久没开系统看刷新的什么道具了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不应该是九条美姬 生日了吗  我记错了 ？</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻❌
渡啦A梦✓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡拉A梦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有什么凉快一点的照片？[fn=9]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻❌
渡啦A梦✓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剃个平头就行了[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用头发缠绕冰棒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盘她</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接发问</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大舌头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡拉A梦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学校没空调？</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;运动[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晴天娃娃</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这本我看过唉！树哥的作品果然不是我能看懂的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胡言乱语的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这台风什么的到月底时候来？[fn=31]</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一帮二傻子跑到网易云去当痴汉了，包括我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天城を越え</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹 是那首昭和病娇曲？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天城太惨了呜呜呜</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不违反，但可以更改。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然还是一代明君</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《规  则》</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;手……手榴弹！！！？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是沙锤嘛
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那叫沙铃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看到应援，我都想起我女儿迷迭香唱歌时我打call的那个视频[fn=33]DNA里面又刻录奇怪的东西</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个是啥啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说暂停时间的东西一直没用到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这真的是什么都告诉美姬了呀</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有种…抬棺的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;魂兮归来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个描述……配上清野冷漠的表情，怎么像是摇铃铛送葬的 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个描述……配上清野冷漠的表情，怎么像是摇铃铛送葬的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神在逗猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;故意把节奏顶在腮帮子上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡哇伊内</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱，想蹂躏[fn=58]</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11][fn=11][fn=11][fn=11][fn=11]</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你身上有她的香水味</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥我会想起红色高跟鞋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑子里直接响起了鸟之诗</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害一木什么的最棒了</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;感动么？
不敢动。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是政宗君的复仇中的那首，水濑祈翻唱那一版</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;愛しい子よ必须有名字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我现在动都不敢动，贼慌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦就是为了这句歌词选的这首歌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;危！</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;放最开始美姬这会一木已经凉了。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不许别人嫌弃渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好惨一木葵[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;护夫宝：九条美姬上线</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么脑子里出现了汤姆猫的既视感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求生欲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这玩意儿主要的用处是打人的时候响</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;即视感很强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：女王大人息怒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无事发生无事发生</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，突然脑补前段时间B站的甩裙视频。。有毒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那这个？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是这样子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样子吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;飞了出去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;屁...屁斜剑法！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是什么画面，想不出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦呼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我戴上眼镜仔细康康[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个动作，需要一点硬件条件才可以，唔，脑补了下，不愧是美姬啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，突然脑补前段时间B站的甩裙视频。。有毒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图呢！？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧！！</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;俩太太跟拱火的学生一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹贼.JPG</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太们拱火不嫌事儿大[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我可太喜欢太太们了[fn=4]</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;提来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问一下哪一章？书太多了都快忘了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然是猫猫啦[fn=17][fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;务必，再来一次[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;史诗级限定皮肤
艺伎·九条美姬
专属卡牌请务必安排上</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;守护世界最好的幼楚
杀陈狗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以宝藏女孩九条美姬，白月光清野凛？！</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;404警告</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日薪208</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先定个小目标，赚个一爽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;工人阶级要反抗资本家！什么？！资本家竟是我老婆？！nmsl</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这首歌词就是美姬的心路</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是喔，说的好有道理[fn=31]</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还是看完了，接着养
一个月后见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不是他们已经板上钉钉，真想来句请你们原地结婚</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;只要来的早，连傻子都能上热评，也就是说，要是来晚了，连傻子都上不了热评了🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姬  你  太  美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野：我听得到，你叫那么大声干什么！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝杀无解</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错 美姬 我的美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;换个角度，就是恐怖片了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点尴尬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最神圣是她，最百变是她，最让人怦然心动的是她，占满我内心脑海还有身体的一切都是她，我的女皇陛下美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！我一口气直接追完了，不得不说，真香</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦！月票！我的月票！空了！真的空了！一滴也没有了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天也想听各位的吟唱～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姬  你  太  美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告，最特别是她，在所有的一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;傻子才上热评</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个时候清野读心会怎么想呢[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我美丽的公主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀穿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑话，来的早傻子都能上热评？那你们看我上了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是它，在一切之上的是它，我的神，渡边渣[fn=59][fn=4][fn=59]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=61]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬 我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬直接被渡边改变了形状</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要来的早，连傻子都能上热评，也就是说，要是来晚了，连傻子都上不了热评了🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬！我的美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬这么软，我怎么给她当狗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬保佑我抽卡顺利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是日常吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛，我的凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，yyds</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吃一次也才一千多啊，不贵嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是九条说的?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看穿谎言→读心术→记忆浏览→上帝视角
清野神的能力越发bug了…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是这样算的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻没有秘密。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛变身东亚醋王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;beta.1《清野什么都知道》
beta.2《只有神知道的世界》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈天网恢恢啊，美姬不管清野管</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是猿人[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天没有人权，明天拥有入权</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫怎么会有人权呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟是渡边猫</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该在东京帅哥的左右脸颊各刻一个字:一个“爱”，一个“奴”</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可以再加你一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们为什么满足不了他</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不礼貌啊。人家的事儿，跟你有啥关系。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我还是不明白，你们为什么就不能管管他？非要让他来祸害别的女孩子？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;接着迫害一木啊</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我就一个女朋友两个情人！不能再聊了！再聊露馅了！暴露出来和老师的刺激感没有了！</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;迫害一木的幕后黑手[fn=31]</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喷喷3上线（</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忆山东兄弟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;shi9月9日是秋收起义的纪念日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;走走走走走啊走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;独在异乡为异客</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九月九是美姬的生日呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个极致之数，九五至尊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九月九日忆山东兄弟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶 美姬生日</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;距离今年结束还有113天，距离神的最后通碟还有113天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毁灭世界倒计时。拿不下渡边就毁灭时间，重启时间线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接把清野给整破防了哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;距离今年结束还有113天，距离神的最后通碟还有113天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毁灭世界倒计时。拿不下渡边就毁灭时间，重启时间线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;八楼说对了，神记得美姬的生日，这里神如果说，九月九怎么了吗，就撒谎了，于是说了一句无意义的真话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿下渡边倒计时113天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能说出这么扯的话说明清野凛明明是知道美姬生日的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来还要等好久才能看到清野神线的高潮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经猜到渡边有上辈记忆 还是个中国人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;11415天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;距离五人真正在一起还有113天？</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;高考恋爱一百天[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为说要今年之内拿下渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马上就有清野凛恋爱决胜百日誓师大会了</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;套路做好笔记</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孩子 一群</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;祖传染色体？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻决定送个孩子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“晚上”就知道了？</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想要个孩子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成了“敲敲自己的尾巴”</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我永远喜欢森蚺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像这样？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一见到短袖子，立刻想到白胳膊，立刻想到全...</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;德克萨斯-意志</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《回到过去变成猫》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条猫？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫娘[fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恋爱游戏：艹猫篇 
堂堂连载！！！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫有倒刺的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有人！可以抵挡渡边猫的魅力！</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为是谎话，所以不敢说出来只能写</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实际根本没想好，用这种方式套话，真有你的，渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神：我被排挤了[fn=20]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神：尽管我听不到，但我还是想说，谎言呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？猫耳朵还是？</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿拉灯神丁</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;破网刷新三次都是网络异常……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我希望你能得到自由[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想起了马云与神灯之间的对话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管是什么，你都得满足我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想看长着两个头的日本偶像</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我尽量满足你的愿望</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可笑的凡人！</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;周星驰哪个电影里面的片段</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;否</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：满足你的愿望</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猫猫乖巧.GIF[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条：就算你是神灯你也要给我扇风[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段好好笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈(⊙ꇴ⊙)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丢人神灯</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬的生活因彻而圆满</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前什么都想要，是想通过多多的占有确定渡边的归属，现在正宫稳坐，自然无欲无求。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢麻了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么叫一夫当关啊?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶


草</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;潜台词：你比什么都重要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬的生活因彻而圆满</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前什么都想要，是想通过多多的占有确定渡边的归属，现在正宫稳坐，自然无欲无求。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：现在的我，有彻就足够了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不 你有欲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边已经是美姬的全世界了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;潜台词真迷人</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我现在就感觉，她们把渡边当成了叮当猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个，不是两个？
两个，不是四个五个七个？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边真的是从来没有掩饰系统的事，就等别人猜出来了[fn=4]</p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你谁啊，不认识，这书有系统吗，不会吧不会吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？？什么东西，串书了？哪来的系统</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书竟然有系统（滑稽）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是今年元旦开始就没有说每个月刷新啥了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九月的物品还没刷吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统：你是我带过的最差的一届</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出现啦，出现啦，，系统君终于出现啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统娘退市了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毫无存在感的系统，实惨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都完全忘记还有系统这玩意儿，太没存在感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都忘了这书还有系统</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？？什么东西，串书了？哪来的系统</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你谁啊，不认识，这书有系统吗，不会吧不会吧</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大丈夫当如是也，彼可取而代之</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是可以用钱换积分吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强取×
强娶√</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的理解是“可以娶凛”[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻可以娶哆啦A凛?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;取×娶√</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;娶？</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;唯一神名场面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有其他人做得到吗？(摊手)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是新世界的神。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错，你就是☀️神阿波罗是吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧码伊娃，新赛开哦卡密大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲁路修</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯一神名场面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;计划通</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有其他人做得到吗？(摊手)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夜神月.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧咧哇卡密萨玛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘘，在心里也小声点，有人会听到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瓦塔瓦就是新世界的卡密！</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学B数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里指代：心理没有B数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱的凝视[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关爱傻子的眼神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然凛会读心</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我看成了中野[fn=36]</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;潜台词：让渡边给你扇风，我一点也不酸，热死你好了！</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这趋势，感觉再也不会有修罗场了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的恩赐</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你把书书给我看，你的女朋友不会揍我吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真话假话神能看出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然当时一眼就看穿了</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;跟测谎也没关系，别说什么清野了解渡边是因为测谎，他们就是纯粹的心灵相通，渡边不说出口清野也知道渡边真正的想法
但换别人即使说出来了，也会以为渡边在开玩笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条居然get不到渡边的话真假
所以九条其实经常听不懂渡边是在开玩笑还是认真的
每次看到这个，我就觉得能用眼神无障碍交流开启队内语音，真是很难得的感情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好可怕你女朋友</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：美姬，我对你说的一切，都是真的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦吼，谁的理解能力有问题？我当时就说美姬估计把渡边的话当渡边随口胡扯了，不相信。</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不想我，只会心疼giegie</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打起来打起来！</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野只有测谎，没有读心，之所以对渡边有看似读心的效果，只是因为他们彼此太了解了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：任凛奸滑似鬼还不是得喝本宫的洗脚水[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;测谎姬也有破绽[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样看来，凛神的读心术，对美姬没效果吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬不亏，神吃了个闷亏[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=38]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，发出了geigeigei的笑声</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;随时可以去东京湾游泳真好</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;做？坐？占？</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明日香，渚薰，绫波丽，碇真嗣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里可以听G弦之歌</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;全力筹建后宫中，你俩有兴趣吗？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总结为一个词：上学：）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有想你[fn=43]</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;坏女人[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？对内频道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夏天送围脖冬天送帽子，学到了学到了，这就去对线去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛能有什么坏心眼呢？
清野凛的坏心眼可多了.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是神吗？爱了爱了[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野好可爱</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没办法 漆黑中的萤火虫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等一个真姬番外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把小泉青奈这位在她眼里只是情人身份并列一起了！真姬暗示了[fn=8][fn=8][fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得群里好像有个真姬和彻的番外←_←</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬：你在不收敛点儿我就要忍不住啦[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：你们都是我的翅膀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是东京帅哥</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;欧比斯拉奇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者真的很喜欢挪威的森林呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了给这书凑月票，跑去全订了另两本书，这边更新喂不饱，然后去看其中一本了，几天后回来，这是什么东西都忘得一干二净了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不懂就问，这是啥[fn=31]</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;又在开对内频道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：你怎么满嘴胡话
彻：就这一次拜托了</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;命运悲剧
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，我一直觉得那些神纯nt
“为了证明你对我的诚心，杀了你儿子”
……
“好，不用杀了，我知道你对我是诚心的了”</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;稣稣呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神不把人的命当命，九条家可以随意杀人，耶稣在十字架上被刺死，渡边两次被杀，耶稣复活，渡边复活，耶稣为世人受难，渡边用自己封印九条</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边表演过复活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神草菅人命——美姬过去动不动就要杀人
耶稣复活——东京帅哥被美姬杀了两次都活了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老实讲我没看懂想表达的意思，麻烦后排解释哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以这些故事暗示了什么……老谜语人了，一会儿再仔细看一遍</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得，应该指的是渡边，有金鸡下蛋的说法，这里应该是指如何让渡边的特异或才能表现得更多，如果想指美姬的话，应该指的是怎么让母鸡下鸡蛋，当然，也有可能只是九条太太对渡边的话题太神圣高远的一种反讽，故意提出一种极为接近地气的话题来与讨论神学想对比，从而表达了对前面的讨论的内容的吐槽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《母鸡的产后护理》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;熟蛋孵鸡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好开，跟了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这团开得好，我闪现跟了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬：我，再生产！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;紧跟时事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让熟鸡蛋孵小鸡?[fn=39]</p>
`;
default:
			return '';
	}
}
        