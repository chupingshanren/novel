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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;风呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚上好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧拉欧拉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我住在起点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;111</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;欧意哈有，哦多咩</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这种情况，不冲才麻烦，女方会怀疑你对她的感情淡了，或者是单纯的丢面子，反正我家那个是那样的[fn=18]</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个男孩子不想要村姑呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条村姑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸葛村姑[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫，束</p>
`;
        case 131:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;跑→泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听着这声音可以多下两碗饭</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我还以为已经快进到正式表演了呢[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;si ki da，my god'Rin</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野党抽到了美姬卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了卡牌，确实又大又白</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;“早已经爱上了”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲁路修不这样用～也是万人迷，出了妮娜这个女同，其他女生都喜欢鲁路修</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;GEASS零之镇魂曲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲁路修.V.布里塔尼亚邮苦达丝，西卡哇拉伊，西内</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲁路修·布里塔尼亚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;据说出了车夫线的剧场版，还没看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[命令]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;村上悠进入声优事务所，就是靠鲁路修声线的啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵，我喜欢琥珀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;路路修，我的鲁鲁修，你的命好苦啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐔 🦆 死！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸡鸭死～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲁路修不这样用～也是万人迷，出了妮娜这个女同，其他女生都喜欢鲁路修</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戏精上身[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;cc是我老婆！（超大声）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;福山润desu！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梦幻联动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;JOJO立吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我现在命令你爱，上我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲁路修啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瓦达西瓦zero</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“早已经爱上了”</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;至今忘不了，渡边的那句。

姐姐～，抬下腿麻。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐，美姬姐姐(*'▽'*)♪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬姐姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=39][fn=39][fn=39]</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;扎不多得嘞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：差不多得了[fn=39]</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一般一般</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你说四大皆空，却紧闭双眼。要是你睁开眼睛看看我，我不相信你两眼空空，不敢睁眼看我，还说什么四大皆空呢</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我就说吗，这俩才是真爱，渡边？一个意外的替代品</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然帮前夫</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;都不敢正眼看我，还说什么四大皆空</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看的太晚了，不然2楼的回复绝对是我的。[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“你说四大皆空，却紧闭双眼；要是你睁眼看看我，我不信你两眼空空？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起了女儿国国王</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我在大润发杀了十年的鱼，现在我的心已经和我的手一样冰冷，没有任何女人能够感化我。
叮，让我康康，群友发的涩图好涩唉，保存。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经在屠宰场杀了十年的猪，我的心已经和南极一样冷，任何女人都无法感化我了，当然，除了穿黑丝的，吸溜</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;宠夫狂魔[fn=26][fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人间清醒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越是看不清楚，才越是要认真看。
实在不行就多看几次[fn=31]</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;冷知识：坏桃子的核是软的</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这该死的代入感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有代入感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也可以选择把我搂在怀里[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师好涩哦[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少女心小泉青奈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;位什么我和渡边彻差不多帅，就是没有妹纸把我搂在怀里呢[fn=11][fn=11][fn=11][fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，我也想把小泉老师搂在怀里[fn=31]</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;再唔～的一声就更妙了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐～好会[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示到位了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没穿？！！</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;是我想的那个起身吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;理智－1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节无敌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经连书名都看不进去了</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;摇摇头的一定是麻衣学姐吧，标志动作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唯有一木葵抗下了的所有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迫害对象你来🌶️</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;祈秘人</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;右手呢</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;藏修者，秘修者，术修者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;kp（）</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;早年经典图:a:男的叫鹿官，女的叫什么?
b.柔道
ab不说话，深情对视(皆男，图为盗梦空间)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁不想给美姬按摩啊？不会吧不会吧，不会没有人不想吧，那我自己来了，我还想给真姬按摩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;RUSH B</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个“按摩”正经吗[fn=4][fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;揉道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我信你个鬼</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥净爱撒谎[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那咋办嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没办法呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=39]</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻轻轻抚摸外部。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面的楼主一路走好！</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：美姬桑，dai dai dai~si~ki</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为所欲为</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟，看了看商店的春哥，好像也不贵……</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;核废水 好开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老悠悠了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明天的事情就交给明天的自己吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去年的村上悠 今年的渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这和村上悠如出一辙啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喂喂喂，五月份的渡边彻，自己的事情自己解决啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九野彻，清条彻，九清彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去年五月渡边彻的事，和今年九月九条彻的我有什么关系？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去年的渡边彻  今年的九条彻</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Tmd，烦死了，不要采访！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汪苏泷：你直接告诉他得了呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是谁
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁，直说吧，这儿没别人[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接报某人的身份证号吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种能影响国家的大财团后代都不能入镜吧</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;正版受害者QAQ</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;贤者时间是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学会了[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做姐姐了</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;碎鸡蛋液变成一个人……两只老虎爱跳舞～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除了颜色有点出戏之外没啥问题(ಡωಡ)hiahiahia</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸦桑的奇妙比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个比喻还是第一次见…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊，粘稠的感觉，缓慢地变化</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喔哦，记录[fn=53]</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;已经开始了吗？[fn=11]不愧是渡边彻，好快啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有感觉了[fn=8]</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你说的这个正经，它正经吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金瓶梅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《我加载了恋爱游戏》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很正经的书，但也没完全正经——《我加载了恋爱游戏》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我加载了恋爱游戏，真的很正经一本书🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想不出骚话来</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;将就看吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，楼呢？全没了？</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我不是这里的人，也不是别处的。世界只是一片陌生的景物，我的精神在此无依无靠，一切与己无关。——阿尔贝加缪，《局外人》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木:1234，12345，1234</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;热闹是他们的，而我什么都没有
一木:心疼自己是个局外人[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木太尴尬了，只有自己不是后宫团，反而还是情敌（</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;旁边是我喜欢的人，旁边是我喜欢的人喜欢的人，我？我是电灯泡</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还是考试的时候，在全校师生面前当众表白吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是确实有效果，主持排练之类的都是在晚课以后的主楼群或者湖旁边练习的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;社团部室与教学楼连接处，相当于公开处刑一木😁 凛酱迫害狂</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，宁也是浇花壶？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个浇水他正经嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是浇花瓣上呢还是浇花蕊上？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长椅呢？快坐上去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个应该是九条美姬守护花的伏笔？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又get到新的知识点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有洛和霞的感觉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用什么浇？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是吧不是吧，全没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也看大奉打更人？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您也是小王子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人花摇曳在红尘中，女人花随风轻轻摆动，只盼望有一双温柔手，能抚慰我内心的寂寞[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您就是水箭龟？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边，宁也是浇花壶？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么花？什么水？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个浇水他正经嘛</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野的任务罢了</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;温柔的渡边。</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还有鮟鱇鱼，哪怕我会融化也要和你融为一体</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美术部长瑟瑟发抖</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这书怎么这样，尽写些瑟瑟的东西，也不怕带坏小孩子吗，作为一名成年人，我在这里质问作者一句，还能更瑟一点吗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宁已经看完了最喜欢的正经又不完全正经的恋爱小说，至于宁小蝌蚪的去向请自行打开浏览器解决，谢谢配合！

      这里是运营团队中心
               竭诚为宁服务</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条美姬笑起来，拿开渡边彻的手，睡衣也不脱就张开腿，骑在渡边彻身上。“我可怜的雄性君，我现在就吃掉你！”她笑吟吟地说。她一点点将渡边彻吞入柔软的泥沼。扭动腰肢，直线型泻下的长发，不断搔弄着渡边彻的脖子和肩膀。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，这波又是正版受害者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抱歉看不下去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夜打错了，应该用液吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正版受害者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就到此为止吧，咱们明天见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个粘稠的夜晚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;删减了，不过完整版我看完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戒色的第2天！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车速过快乌鸦小心点啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;评论都进加急名单了？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我浏览器动了，我不看了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;氪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;描述的到位，艺术就要这般朦胧的美。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟们，渡边彻都这样了还是处么[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ABB，恶心心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这神还怎么赢？神赢了本书神格就碎了呀[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有预感这章很快要修改（）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得乌鸦少这张图一个万字番外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就看到这里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好怕這章不久就失聯了XD</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一个十连就抽到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建议加大力度[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;kesoga！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我抽到美姬姐姐了！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我缺你这3000字的钱嘛！！！快给我写！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就说嘛，晚上不能看，特别是深夜，看了睡不着。应该白天看，醒神[fn=41][fn=41]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要去群里看番了，就这样，懂得都懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天起点就逛到这里啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;FBI⚠️ Open the door ❗️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这，是粘乎乎，滑溜溜，有味道的一章。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好我刚关的浏览器</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦你发病了啊？不想写想被迫太监了是吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我已经完事了，不用走了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宁已经看完了最喜欢的正经又不完全正经的恋爱小说，至于宁小蝌蚪的去向请自行打开浏览器解决，谢谢配合！

      这里是运营团队中心
               竭诚为宁服务</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得毕业之前就该怀孕了  不然不科学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然发现渡边好像都没做过安全措施啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者菌是去开f4去了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多写点这个，我们读者就爱看这个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书怎么这样，尽写些瑟瑟的东西，也不怕带坏小孩子吗，作为一名成年人，我在这里质问作者一句，还能更瑟一点吗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这……明天不知道要被吞多少楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车车！好快的车车！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;lsp的我一看就懂。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得吧这本书一定会写完就封的吧。[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的浏览器就逛到这里了，起点启动！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;且看且珍惜。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好了，今天的起点就看到这里，uc启动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“今晚我绝对不做”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章应该不会出事吧（大概，可能差不多）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是我每天等更新的理由，来的晚了可能就看不到了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好快的车车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每晚等更的目的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太快了，不管是车速还是看完的速度[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来早的好处</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬天下第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明早晨练就决定跟美姬姐姐一起锻炼[fn=3]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章怕是只能群里见了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好我来的早</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美有姬：来，试试看！</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;机器狗其实很简单啊，买合适的材料，用成品的软件，组装起来一开机，嗖，它就动了。难的是第一个构思这玩意儿并且把它从无到有做出来的那群人，不但要优化结构，还有编写软件，前者有钱的小学生就能做到，后者全世界也没几支团队能完成。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高中生诶，有点过分了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都有比赛吧，有关大学生机械类的比如rm，方程式</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们不知道大疆每年的大赛吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个机器人部有点牛逼啊</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;呆若（一）木鸡[fn=31]</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;ko ko da yo～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;顺序不对！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;あいうえお
かきくけこ
さしすせそ
たちつてと
なにぬねの
はひふへほ
まみむめも
や   ゆ   よ
らりるれろ
わ          を
ん</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;b p m f d t n l g k h j q x...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ko ko da yo～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日语五十音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;a i w e o
ka ki ku ke ko
sa xi si se so
ta qi ci te to
na ni nu ne no
ha hi fu he ho
ma mi mu me mo
ya yu yo
la li lu le lo
wa wo
n</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;a o e i u ü b p m f d t n l g k h j q x zh ch sh r z c s y w [fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五十音在记住第一排啊一呜诶哦，后剩下的顺序按首字母记有个诀窍是“俺开桑塔纳，悍马亚了娃”，也就是每一排第一个音分别是a，ka，sa，ta，na，ha，ma，ya，ra，wa</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;a e i   a o u   a e i u e o a o     a i u e o</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多了第一个e，阿，一，呜，诶，哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;あえいうえお  こかこ</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;优秀生的重要特点，自信。</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这楼全是精神小伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;声音这么小还想抢学姐？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;声音这么小还想睡渡边？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师这点心理素质没有嘛[fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木应该有很丰富的上台表演经验，不应该这么害羞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有精神！
这么小声也想加后宫！[fn=31]</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害一木</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是一木吗，几天不见怎么这么拉了？</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木葵: 嘘 ，我已打入敌方组织 ，正准备偷家 [fn=18]</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有劲！根本听不见！</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边撩妹被动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亚撒西内</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岩手县，县立岩木中学，渡边彻——！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合唱部：？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京府！府立第一中学！天山！星太郎！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木也要沦陷了
最讨厌你了！
明明是个人渣，
明明把我的宝物都夺走了，
明明一直毫不留情的欺负我，
为什么要在这种时候对我这么温柔啊！
渡边君是个大坏蛋！
最讨厌你了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这该死的温柔[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;转职自爆重卡吧</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明杠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疯狂英语？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盲猜玉藻好美！中了踢我一下</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这种事情只要我不尴尬，尴尬的就是别人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后破音了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你隔这……我也不知道该搁这什么</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我来为不通音律的诸位翻译一下，这几个音其实就是




哼哼哼嗯啊啊啊啊啊啊啊啊啊啊啊</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;压迫时刻准备着。</p>
`;
        case 81:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;意思清野是神，一木不是人呗[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6个？三个老师+学姐+凛+美姬+一木+渡边</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有腰子吗？</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;深夜放毒，岂有此理[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🌿！乌鸦你知道现在几点了吗！！！</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;又是深夜放毒！可恶</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;刚吃完热干面胡辣汤的我无所畏惧[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;深夜放毒系列</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不要再说啦！[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？几点了,你干的是人事？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你知道更新时间是凌晨吗！
那个刚好有点饿又还没睡着的时候！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你知道现在几点么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看饿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看饿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶的乌鸦怪兽，挑动我的胃</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;刚剌完耳朵，现在又要吞筷子吗？</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫：符合——附和</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怎么该偷看呢？人家现在是大嫂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;惨｜一木｜惨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;害搁这儿盯着呢？妹妹</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哦吼吼吼吼吼吼吼吼吼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一绿葵你的名字叫卑微！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我吹过你吹过的晚风</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太惨了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;参与感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木，我的一木，你怎么这么卑微啊，我想笑啊！哈哈哈哈哈哈哈哈哈哈[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;cv就用大西或者真妃吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强烈申请一木保护公司！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也太惨了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太惨了太惨了，请加大力度！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好惨一女的！哦，是一木葵啊，那没事了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好惨一木葵[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一绿葵你的名字叫卑微！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我吹过你吹过的晚风</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑微</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被子也可以呀，我觉得不是错字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日迫害已达成</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;端着被子还行，有哪里不对，但是不是完全不对</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;鸡汤来咯，tnnd为什么不喝！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晃子……今天也一副幼稚的样子[fn=24]</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;蜜柑，无论什么都要加上柠檬汁的魔法少女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浇不行，那样太多。应该用淋。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用浇好一点吧</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;痒，好吃。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦依稀，显摆，三三，裹裂哇哦依稀哟
动漫看多了，不知道空耳对不对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个好耶
[fn=1]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑微的一木只能在老师这边找到一点安慰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“pia~”好像踢到了什么，趴下去又什么也没发现。
‘学姐看我了！嘿嘿，小口吃~吃相一定要可爱。’

学姐对一木好感度-1</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;参考玛奇玛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是24h发情的男人[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还用问</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;月光照在她的身上，我竟分不清谁才是真正的绝色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小孩子才做选择，大人可以让美姬用嘴喂羊排</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是美姬啊</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;浓    农</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“得”换成“地”吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫！长>站</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该是“修长圆润”吧？</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说的是亲嘴，渡边是处男啊，你们再想什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：你怎么凭空污人清白？我渡边彻还是处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边不是处吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：你在说什么啊，我还是处男诶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞎说什么大实话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做什么事啊？</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;屡败屡战和屡战屡败的区别</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥，现场教学
你也可以成为撩妹大师[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛🐮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太牛了，太牛了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;论“屡战屡败”和“屡败屡战”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他太会了，我顶不住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我总是学不会，啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我总是学不会</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥，现场教学
你也可以成为撩妹大师[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恐高症犯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽！妙啊！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;屡败屡战和屡战屡败的区别</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻，我的处男</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那种事是什么事？[fn=39][fn=39][fn=39]</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：做了你就是我姐姐！</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;桥：“你清高，你了不起”(ಡωಡ) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典爱国彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桥：！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到半夜蜥蜴因为核废水进化成哥斯拉毁了这座桥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;桥 危！</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;晨练是哪种晨练？[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这，，，美姬大人实在厉害👍</p>
`;
        case 116:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;自律的男人真可怕</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以御茶之水到底是个啥地方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一切根源来自御茶之水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，互相嫌弃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你很勇哦。
来，讲出来。[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那让我来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条彻还敢嫌弃</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;意思是和清野睡觉？</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬的艺伎限定版皮肤[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就先逛到这里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“老爷再这样，我要回去了！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;城里人特别会玩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;酥！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;代官大人抽腰带辣～[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记不清楚伊豆发生了什么事情我补充一下，就是美姬扮成14岁半艺伎穿着和服伺候渡边老爷的那次。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道是传说中的那招！？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那次是个人也忍不了啊😱</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;波德莱尔的吗</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不懂就问，为什么要洗第二次[fn=39][fn=39][fn=39]</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;图来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心中无女人，拔刀自然神
但还有另一说：
怀中抱妹，伤害翻倍
[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你好会说话[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫得感情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有那种世俗的欲望
老衲这就还俗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有那种世俗的欲望.JPG[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人只会影响我翻书的速度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人只会影响我拔刀的速度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心中无女人，拔刀自然神
但还有另一说：
怀中抱妹，伤害翻倍
[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人只会影响我压弯的速度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女人（后面👴🏻忘了）.jpg</p>
`;
default:
			return '';
	}
}
        