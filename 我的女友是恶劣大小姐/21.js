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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早早早
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早安啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早啊  各位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;永无止境的八月(完)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这次长啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀吼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真他么的准时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结撒花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还以为要写满31天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;点进来前还想着章节名会不会突破二十，你就弄了个完😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竟然这么早</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;于是回去闹着要自己男友效仿，最后由于自己太重压断了男友的脖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和团长大人一样
渡边美姬凛都是目中无人的行为艺术之王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦这也太细节了吧？</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以这后边她要怎么破局……直接死局了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的神啊。</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;酸了，一次美容院都没去过比天天去的还好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么纯洁的妹子也只有幻想世界有了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小时候我妈也给我剪头发，一个钢碗扣下来...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲨真姬姐姐就想太多了吧，你看美姬要是真下令冻手，那些手下敢看现任家主一眼吗哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一次美容院都没去过（x）
一个理发师都没鲨过（✓）
（前文美姬说不论男女都不许触碰她，不然就会鲨掉，看来不包括真姬姐姐，之后又多了个渡边）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;劳模（</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我还以为是这样坐着😂</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京人净爱撒谎[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:但我并不会对每一个人都说情话。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;御茶水之后为了攻略美姬，天天对着清野神说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果情话说得好听，也请说给她听[fn=2][fn=2]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我表示赞同</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是的，他太会了</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;也包括两位太太吗？[fn=32]</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我知道为什么我没有女友了，我看不懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边果然是当局者迷啊，美姬看得清清楚楚。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从一个女孩子的想法出发是不希望渡边支持她</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从一个女孩子的角度出发，给自己的爱人多亿点偏爱。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？问:此处的“她”有什么想法</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是的[fn=4]</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没错，是初恋[旺柴]
工具人玉藻好美🤡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美那个不算恋爱，那只不过是一场交易而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻好美出本回忆录吧《那个泥轰最有权势的男人 和我》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恋爱恋爱，双方都动情了才是恋爱，好美就一花钱工具人，总不能你去大宝剑了，然后大宝剑小姐就是你恋爱对象吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常被迫害的好美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错，是初恋[旺柴]
工具人玉藻好美🤡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美:？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美那个不算恋爱，那只不过是一场交易而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她不是你的初恋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是我今天的初恋[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“初恋”</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;果然你也是测谎姬么，速速过来当盖饭</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;全篇人设立起来最鲜明就是九条美姬，所以如果美姬不下线，不工作不睡觉让出时间空间，其他线没有一个能推进的，几乎被压着打。感觉美姬在全书的感觉有点像加藤惠了，怎么都是夺冠玩家，党争其他的加起来才行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也许清野凛是灵魂伴侣，但是美姬才是灵魂主宰者。(这个正宫宣言看的太舒服了)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多少有点怀疑是否把前期剧情忘完了，三人舟行解心结估计也没记住，不然说不出美姬1v3这种话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说白了，现在这个局面下，强硬说不接受后宫，还能不出局被渡边不放手的，才是所有人里最有底气的，有资格要求更多的
不然你换成学姐老师说不接受后宫看看？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所谓的“如果九条不下线，其他人压着打”，无非是持续开始的资本压迫，延续了以威胁杀害男主父母的方式换来的在一起，哪来的现在真正的感情？
无论嘴上怎么安慰九条夺冠，要所有党争加起来才能比，事实是九条自己都清楚她不是渡边最爱的，才允许了情人，三对一打清野
九条真是夺冠玩家压着所有人打，她还用卑微妥协情人？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有遇见美姬这应该是一本单女主文了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬是天！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野无法证明自己比别人更爱渡边，但是渡边最爱清野，清野的爱能比的过美姬或学姐吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后期的美姬我真的很喜欢，甚至要甚于清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬是天!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉渡边对不起清野神，神对渡边一直是偏爱的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也许清野凛是灵魂伴侣，但是美姬才是灵魂主宰者。(这个正宫宣言看的太舒服了)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全篇人设立起来最鲜明就是九条美姬，所以如果美姬不下线，不工作不睡觉让出时间空间，其他线没有一个能推进的，几乎被压着打。感觉美姬在全书的感觉有点像加藤惠了，怎么都是夺冠玩家，党争其他的加起来才行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬天下第一！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;御茶之水，凛党永远的痛（特指我）</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;人妻幼女化[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欺负喜欢的人[fn=4]</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，我没图了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这算什么呀！不过如此嘛！呵！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《清野凛在听歌》</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;野战</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么叫细节</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“穿上外套”
什么叫细节决定成败啊</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呵，谁看见渡边丢了第一次吗?反正我没看见
渡边呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜美姬的初吻不是你，是我清野凛哒。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不是处吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，他不是处吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我，渡边彻，永远的处男！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边处男这不是人尽皆知的事
吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我发现有一辆空气做的车碾过去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又到了讨论第一次的时候了，我投吃鸭子那次一票</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜美姬的初吻不是你，是我清野凛哒。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵，谁看见渡边丢了第一次吗?反正我没看见
渡边呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这到是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管多少次，渡边都是处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那确实</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬美姬我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;懂了懂了，姿势有了~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是一颗平平无奇的树，某个晴天，我正享受着太阳，但一男一女疯狂的朝我浇水，我很想反抗，但我只是一棵树</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不知道为什么，柠檬它围绕着我。jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是超能力者，我能变成蛆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻是个处[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmm</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑成傻子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此，没有不也活着？</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应该有败犬</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;反手开大失败[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实力护夫</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里是不是省略了什么</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;挑拨能力没点满啊</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;精神按摩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也是在跟凛说吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;简介！</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;碓氷峠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;碓氷峠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;碓冰峠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;碓冰峠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;碓氷峠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，还挺出名，一打就出来了:碓冰峠。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是当初武田信玄打上野时候翻的那座山？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;碓duì 氷bīng 最后应该是qiǎ 我百度的 手机没打出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;shi shui shan</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;碓氷峠
对冰卡（qia3）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;碓（dui 四声）冰（bing 一声）峠(qia 三声)大概……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，一个三个字的地名地名，三个字全不认识</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在？怎么读？</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;flag？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只限我和清野和老师和学姐和国井五个人[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“只限对我一个人”
……
“只限对我和清野两个人”
……
“随便你吧”</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我想起的是《七里香》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说起群马那首先想到的当然是藤原豆腐店啦[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二十年前，群马县最快。你就是秋名山车神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说到群马县，我就想到了柯南里的那个警官。</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;男生理发
理发师：剪什么发型
男生：剪短，你看着办
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次剪头发 发现剪下来的头发不多 就感觉亏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男生剪发
女生剪发.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;形而上的剪发</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剪了 但又没完全剪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太:其实头发是我的🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了，女生剪头看不出剪了啥[fn=4]</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这哥们出去玩了20多天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果是一男一女就算青梅竹馬了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你俩不是一个学校的吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这几章看了都快忘记还有小莲了</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;自己的自己女儿</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真姬：馋了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滋润的</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;量大管饱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全靠我的辛勤浇灌[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喷射战士渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《清野凛在听歌》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是我的！众所周知渡边彻是处！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有我的功劳[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又开车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每天滋润[fn=4]</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;强行让我喜欢上了腿啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，你退步了，以前你都直接伸腿的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我直接













开天🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开炮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请务必让我来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？就这？我不酸，我也有老婆，我～不～酸～～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;prpr</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有好好的说再见呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喵帕斯之泪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;......</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界上没有不散的宴席</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来个最帅的光头</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我小时候也这样，分开久了就疏远了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大哥哥</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有一种发型渡边绝对驾驭不住，那就是地中海</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孟奇。。。想要惊神剑的外号结果被称为莽金刚。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老板，来一碗超帅的光头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两边不动，中间推光</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绪方表示很淦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想看月代头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爆炸头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孟奇。。。想要惊神剑的外号结果被称为莽金刚。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一种发型渡边绝对驾驭不住，那就是地中海</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;代入感太强了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是强者的世界吗</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;與僧侶xx的xx之夜，施主請自重。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《太太请自重》</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;赶紧整个母上攻略。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;母上攻略最后主角醒悟那部分真的好看，看了好几遍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;攻略</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是什么？番还是小说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一群lsp 我就是特意来看你们评论的。果然！[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么起点搜不到？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花嫁[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好的，太太</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么你们都看过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提前演练床上对白是吧？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;母上攻略最后主角醒悟那部分真的好看，看了好几遍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘶～母上？是我有问题还是她有问题？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;母上攻略，绝对的经典</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么母上的全部拷走</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到孝心变质</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赶紧整个母上攻略。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;母上GL？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫我父亲大人。[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好的，老婆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好的，太太</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;他太会了 我不会以后说不出话还要回来翻笔记吧 ，噢了不起的渡边彻说过成为了不起的人的第一步是利用好笔记本，神也说过 
嗯，我想是的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都给你高完了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他太会了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书应该叫《情商提高大法》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又学废了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情商情商，都学着点</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小莲真可爱啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲就是喵帕斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佳织下线了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为毛我脑子里有了《秒速五厘米》的镜头感？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……后，xx再也没有……
很熟悉的语句</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是凛和美姬吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也是再说美姬和凛吧，朋友很重要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是说两人是一个小学的吗？在学校里不就见到了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;专一的莲酱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😭😭😭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲就是喵帕斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小莲真可爱啊</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;亲爱的鸦桑，你已经10分没更新了，我画机械制图都不敢这么歇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写的真好，轻井泽篇的感觉很舒服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他们28天，我这20天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每日祈祷:
最特别是她，在所有一切之上是她，我的神，渡边圣子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告，最特别是她，在所有的一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告，最特别的是她，在所有的一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去年的8月28日剧情，这里帮助需要重刷的小伙伴们
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;8月28我的生日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又过了两天，所以鸦桑欠下了我们两章！[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘁，不过尔尔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以为还会有学姐的剧情，没想到就直接回东京了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写得真好啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲爱的鸦桑，你已经10分没更新了，我画机械制图都不敢这么歇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写的真好，轻井泽篇的感觉很舒服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，出去浪了4个星期</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;理发师 陶德</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边头发，危！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，这该死的求生欲[fn=31]</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;K桑[fn=12]我的K桑[fn=12]</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我想起第一次炒土豆丝，土豆是黑的，锅是着的[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次煮饭锅烧起来了，我寻思这我也没加油呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦豁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想起来我第一次做排骨,外面熟了,里面是生的.</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是美姬在憋笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一刀把你命根剪断</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一刀xiang死你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一刀剪了你！[fn=58]</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此（酸）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猛男落泪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过尔尔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬已经是渡边的形状了</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想起呆唯的刘海</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就扯淡了，那我这几年理发是白学了吗</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不伸个舌头舔一下？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呼吸相闻，被美姬的去相亲所包围</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你们的情话说得也太厉害了[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被温柔对待时，偶尔会有这样的，好像被温暖的阳光包围的惬意。感觉被浸泡在松软的云海中，睫毛不自觉地下沉，心间酥麻到忘记呼吸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实就在这样的日常里美姬一点一滴的发生着变化，变得越来越可爱迷人。本来想偷点活赞扬美姬，却发现剪切板里已经一滴都没有了，但无论如何，你都是我心目中本书的第一女主。🤗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段描写跟当时爱衣给村上剪头发的时候一摸一样，只能说dddd</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也感觉这种氛围很舒服，很闲适，感觉时光都变慢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知渡边彻是个软男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看成了被征服的感觉，我是不是完了</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有钱人剪头发不带洗的吗</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;剪完頭髮不用沖洗一下嗎？</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:我细不细？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结合之前，就能知道为什么带外套了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和美姬出门，渡边必带外套，绅士的基本修养了</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里的起风了是宫崎骏同名动画的原著小说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纵使疾风起人生不言弃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个起风了不是高桥优的起风了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;买辣椒也用券属于先上车后补票，先用了人家的曲子，后来没办法了才买的人家版权</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金合欢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金合欢花语：稍纵即逝的快乐。</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哦豁，神专用的背景图给美姬用了，是说神和美姬现在在渡边的心里地位相同吗</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哇哦！</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明知故问</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，某些人后期最爱逼逼的一句话“清野没有成长”“就清野没有为渡边改变”
前面抓不住点，现在终于发现清野不接受后宫总算有屁放了
她凭啥接受后宫呢？她像学姐老师一样知道虽然在一起，但自己不是被爱的？她像九条一样对不起渡边欠渡边了？
一群妖魔鬼怪抓着唯一正常恋爱的，指责人家不接受后宫就是没成长，脑子有泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给你机会你不中用啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条这么做，看似大方，其实也只是小伎俩，没拿出诚意。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给了你机会，可你不中用啊</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这剧情，n多失忆情节里和类似此处的常用，只是具体有哪些作品说不上来，毕竟此类作品看的少还看不全</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年麻衣也是让师傅告白了一个月才……</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;天气卡组</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这的确挺爽的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们上午没有课</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺风和日丽的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天天气不错啊，街上也没什么人，和东京比起来真安静啊</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;反过来更能成立</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人嘛，视觉生物，三观跟着五官跑，不丢人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵，女人，昨晚吃饱了就是硬气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣：勿cue，后面说了我真正喜欢的是灵魂！
青奈：勿cue，我……欸？好像是有这个因素……不过最终是因为亚撒西！</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你是血赚好吧，白捡一个媳妇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;（看在二十万积分的面子上）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你心还是那么不诚吗，渡边你么的心</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;二刷的我回来看新章，美姬简直判若两人，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]真的是变了好多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]真的是变了好多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最开始看杀渡边倒还算能理解，后面闲路人吵闹就要杀那时候给我整难顶了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬现在完全站在渡边的角度替他着想呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十几年前的小说里就说了，
一寸后宫一寸血，半尺白绫半尺心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我开始看的时候气的要死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被杀两次，换个九条家族（千万亿大豪门）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二刷的我回来看新章，美姬简直判若两人，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼里都是他</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;恶心的m</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边抖m属性拉满</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都实话渡边早完蛋了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然是迁就，甚至宠溺，但也是隐瞒，不够坦诚</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;京都篇 鸭川河畔的互动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你确定这不应该是伟大的r桑说话的风格</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这台词怎么一股凛味儿[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个大概是清野if里后续的真实事件</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;（东京湾游到鸭川要经过福岛吗？）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;修学旅行讲的话,记得真清楚</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;鸭川是个内陆湖？不是海？不入海？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一次亲密接触 的味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你可以顺着核废水看看能不能游过去[fn=58]</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;万氚归海</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算东京湾和鸭川不相通又如何？我九条彻也能叫人挖一条运河</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贝加尔湖：我成海了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两个人的互动好甜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无数的世界线平行就是一个圆，只要我每条平行线都去找你，无论你再哪条线，最后我都能找到你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算东京湾和鸭川不相通又如何？我九条彻也能叫人挖一条运河</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;内流河咋办[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万氚归海</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昨天超市里买的牛奶喝起来怎么就这么甜呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界线收束了，这就是可能[fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻了，木了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高情商</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;背逼无奈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段描写跟当时爱衣和村上一起去摘青梅的一摸一样，只能说DDdd</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;首先刀剑神域</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是背反了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;海的味道我知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿的是裙子吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;背逼无奈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一脸懵逼[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段描写跟当时爱衣和村上一起去摘青梅的一摸一样，只能说DDdd</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是接下来该遇到结衣了？[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摘青梅！摘青梅！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摩擦产生电流</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会玩！过段时间我也来一次！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桐人和亚丝娜[fn=4]</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;指亚丝娜</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;完成任务，变成海豚游回去</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;才知道京都和东京不是一个地方的只有我吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，现在年轻人的xp可真奇性（不包括我）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起要村上去京都买小吃的佐仓妈妈</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;汉爵爷眯眼</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此！(´ฅω•ฅ｀)ﾁﾗｯ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;K桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬天下第一，我永远忠诚美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的是又酸又甜，欲罢不能</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一点都不酸,真的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我哇地一声就哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢麻了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此！(´ฅω•ฅ｀)ﾁﾗｯ</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;⏩到神葉</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬😇，我的美姬😇😇😇</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这句话好有感觉啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条和渡边，感觉已经从热恋转入夫妻日常了。就是那种互相依偎，偶尔浪漫，一生一直走的那种感觉。</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我们榆树什么时候才能站起来!，气抖冷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;摘青梅</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你妈也是世界之王(ಡωಡ) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这段我想到的居然是亚丝娜跟桐人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁的马[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抛去那些金钱，地位，身份，她也不过是个恋爱中的少女而已，就是向男朋友撒娇的方式有点受性格影响罢了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了回忆中小时候的九条，那个爱哭的九条</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻是要成为世界之王的男人</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边给白马取名叫世界之王，
真姬也被渡边称为世界之王。
所以渡边骑世界之王=渡边骑真姬？
啊，这波是孝心变质。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孝心变质确认中………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那没事了</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“万一不允许你和她一起嫁给我怎么办”</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，书友真细啊，虽然我也想到了九条家主的责任，但看到还有哥们这么细有点开心，都是认真的看书人啊。不愧是二次元啊，额，能看到这里的都沾点二次元吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强烈的爱欲，占有欲，自杀……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，九条家下任家主的责任已经完全让步给对渡边的爱了[fn=31]</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;少吃点桃吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么细节，我感觉我正在和美姬恋爱</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;"不是唯一，我不要"</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果这是矫情，后宫岂不是正义？后宫若是正义，三观不是塌了，就是歪了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了爱妥协，可以理解，但真就那么高尚？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;矫情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来这句话是拒绝的意思</p>
`;
default:
			return '';
	}
}
        