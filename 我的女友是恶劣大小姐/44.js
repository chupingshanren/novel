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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;俊美的，情话说的好听的东京帅哥啊，我一定要拥有你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;20</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是壁咚神吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还以为是要壁咚神呢，把我激动坏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迟到了吖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迟到了迟到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦豁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第四
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好快
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;4</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第三</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这该死的默契</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;错版了，周六早上前面的是其他地方的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者脸按到键盘上了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不需要就比较通顺</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;下面那段的评论大家千万别点开！</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明明我是第一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉和郭芙有点像。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她一直闹别扭就是不甘心和心里的后悔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有些人，一旦错过就不在🎶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美这是也沦陷了么</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《变身》[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟，什么马？
我没有马
这明明是汗血宝马
放屁，方向盘露出来了，好不好？
这是缰绳[fn=64][fn=64]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;，。，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们要的图[fn=31]
先说好，别打脸……[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上图啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来自DNA的记忆觉醒了，我tm直接禁止变身</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一个想到喜欢本大爷的女主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Henshin</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四舍五入就是双马尾了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;henshin</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈有画面了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;禁止变身！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟，什么马？
我没有马
这明明是汗血宝马
放屁，方向盘露出来了，好不好？
这是缰绳[fn=64][fn=64]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方向盘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《变身》[fn=4]</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明。。。。明明是我先来的Ծ‸Ծ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再也没有什么过往，值得再爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自己错过了无比珍贵都宝物
意识到此处的瞬间，不由自主的潸然泪下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美丽的音乐总能带给人美好
浮云柳絮无根蒂，
天地阔远随飞扬</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;邻座的怪同学</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;剑风传奇也是在少女漫上连载的。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瓶皇：我可是看了两百本少女漫画的男人！然后就被情感电台的各种烂活整麻了</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为什么历史选择崛北真衣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她真的去记下了成员的名字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记得刚出场时作者写的这学妹会给主角带来很多变化，然而到现在快完结了也没见她干啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;介是什么鬼啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;耿鬼dese</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;问一下，这是新角色吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;a, abandon[fn=4]</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;桀桀桀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;耿鬼酱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;pokemon，get！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hiahiahiahiahia⊙▽⊙宝可梦getdaze</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;空气壁咚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？不是在渡边家里扶着墙壁咚了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们竟然还有姿势没解锁[fn=31]</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;此处应有四大才子登场BGM[fn=31]</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不，不要，不要停</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哒咩哟，哒咩~哒咩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所谓宝藏女孩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亚…亚咩爹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;角色扮演</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我把卧室看成了教室。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;紧跟时事，还是我时空出警了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“老师问我为什么高数课笑得这么开心”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻烦说清楚到底是心里还是肾里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;热流</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你～</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么嘛，这不挺可爱的嘛</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神de注视</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小奈子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打开书，马冬梅。
关上书，马什么梅。
打开书，马冬梅。
关上书，马冬什么。
打开书，马冬梅。
关上书，什么冬梅。
打开书，马冬梅。
关上书，马冬梅，马冬梅，马冬梅。记住了
考试，孙红雷。</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小川：看到这张选票了吗？投狗🐶都不投你！
唱票员：一木葵，1票.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长相一般。。这是随渡边么，和渡边一起迫害吹奏部的成员么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;照桥心美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小川：你礼貌吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成小奈子，没救了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长相一般。。这是随渡边么，和渡边一起迫害吹奏部的成员么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个小川好像在前面有出场来着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又开始愉快的迫害了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成小川津.....</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小川：最后一句可以不要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=29][fn=29]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小川：看到这张选票了吗？投狗🐶都不投你！
唱票员：一木葵，1票.</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;woc，他好会啊[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是学姐的称呼！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=47][fn=47][fn=47]不过如此，不过如此！没有不也活着[fn=47][fn=47][fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翻车太快了吧</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;额 全世界的话，不应该只有泥轰有双子吧，起码国内怎么也得来一个，啊成无限斯托拉斯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暮山速速与我击剑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;锐利的剑，锐利的眼。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等一个“渡边彻速速与我击剑”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;触发吧 不可一世！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘶………………你们代入的是女方？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;代入感它又来了！</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;又进步了 之前是91</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有手就行[fn=64][fn=64]</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬真的好会啊！</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;每次呼唤你的名字，就像写在书页后面的 “藤井树”，那是我写给你的最短的“情书”[fn=2]</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;外套细节</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好美不自觉的被东京帅哥吸引</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻,你想进道吗（羞涩）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，发生了什么，巴比伦空中花园啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦！楼？前六楼？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：咦噫矣，故意恶心喔是吧！🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦，彻，我的彻。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46]</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那 张总 是看不见笑容的脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想要抗拒却不自觉沉迷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出道出道</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛打断了施法！世界名画构图失败~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：你们两个，居然不带我玩！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好酸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当面ntr</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差不多得了 😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿大力莫阿大力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：扎不多德勒!
没完没了了是吧！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：为什么我的手中乍现火把？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野: 哼，你们两个[fn=29]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野：🍋🍋🍋🍋🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这。居然不带我。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该我上场了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃醋了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？评论呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野在看戏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46][fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：你们两个，居然不带我玩！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛打断了施法！世界名画构图失败~</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;玉藻好美：渡边君，你看我还有机会么？</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬真的太会玩了，给我也整一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：咔哒（赢了）!</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;或多或少都有，只是有没有表现出来，接受的下限也有区别，也一定程度和自己颜值有关</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;LSP？ 我不老</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁还不是个颜控那？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的好像谁不是LSP似的[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都一样，都一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那好美看我应该也挺顺眼的[fn=4]</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你用手确认过了？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=35]</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成不够色了……</p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哎呦，我一成了家的发现有进步了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太油腻了呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的爱已经油腻到这种程度了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太会了，他太会了。。。可是，为什么鸦桑还是单身呢？</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好美从来不会称呼自己为好美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一般理性而论，以自己的名字自称是缺乏自我意识的体现。不过在ACGN领域，这样显得角色比较幼稚，是一种萌点。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然感觉好美蠢蠢的，有点萌……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一般人都是“吓死我了。”好美这种“吓死好美了。”确实有意思[fn=33]</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可能卖鲍的书看多了，看见成语就想看看评论区</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明明想要发自心底的讨厌你，却隔壁无法逃离</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真姬，幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凑这么近一下子看到，头上会炸出蒸汽，心尖也会猛地一颤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;整个胸一抖[fn=64][fn=64]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛，美姬，麻衣学姐</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快变成柠檬精了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前后两页完全一致</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么要迫害神，请加大力度</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情景再现</p>
`;
        case 159:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;暗示凛妹妹只能做小[fn=62]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：真对不住，我故意的[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这绝对是报复，哈哈，之前清野就是这么对美姬的</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;鸦桑奇妙的比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叔叔我啊，是真的生气了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苍蓝之炎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;龙珠梗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始拱火！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逐渐发光发热，灼伤</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是……不当男朋友，准备当好美老父亲的节奏？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我希望在东京大学也能每天看到你[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会让我失望吧？[fn=64]</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻:真姬幽子，有问题吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死亡提问</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的必杀。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野真姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再也不能说最爱小泉老师了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;固有结界·修罗场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然是凛酱啦！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是一道送命题[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;yyds，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那还用说？必然是扬州炒饭[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的必杀技</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻:真姬幽子，有问题吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死亡提问</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦豁，渡边完了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我最爱我的太太[fn=4]</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;修哇修哇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;博大精深的笑吟吟</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;害怕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不是最喜欢电车了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“叔叔你别拉了 我害怕”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;首尾呼应了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神级打马虎眼选手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你视频想变成炒饭吗，彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚吃完扬州炒饭[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;做的好的是真的贼好吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扬州炒凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真话！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边你酒没醒？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶，23页为什么一下子就没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扬州炒饭区别蛋烧饭的地方就是多加了不少辅料。真是名副其实的花心大萝卜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这群发图片的给我整饿了。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你来早了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么本章说都漂移了[fn=24]乐趣少了三分之一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求生欲极强[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶啊，为什么这么快就看完了，一点也不持久啊，鸦桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;害怕😨——jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙 今天阵亡那么多？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;9条评论瞬间就暴毙八个吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她
在一切之上是她
我的神
一木葵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;害怕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5月底，那还有十章左右，这进度，实在想不通渡边怎么让凛神答应，期待乌鸦神操作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;旺盛的求生欲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;洋装虽然穿在身……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhc</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我最爱我老婆[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈求生欲拉满</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么感觉只有一半</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是扬州炒饭😘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别给我转移话题啊喂</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咦？</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是让上进而不是固步自封</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她成绩差是在神川成绩差，但是全岛是很好。肯定不是和班里的更差的比。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我以前班上有个人就是一出成绩就找平时比自己差的问成绩，后来就成了班上倒数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;目标是神川第一的话，哪怕做不成第一，第三还是有机会的[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前的时候我每次都和比我成绩差的人比成绩的时候，我妈都是这么说我的</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;全国第一的游刃有余</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我的美姬：？？？
我的神：？？？</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说中了，可惜了，如果不是几座大山，完全可以来一波养成系列</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是其他小妹妹都有我这么高的防御力[fn=32]</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：你只要一直注视着我就好了
高情商：不建议你鼓励安慰其他女生[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建议你不要让我心烦
当然 只是建议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕多了姐妹</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;长得还行，差不多追上本书读者了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhhhhhh！凛酱发威要遏制小五的出现了（话说是小六还是小五[fn=60]）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日漫精髓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;严格来说，这是谎言。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好美可是初恋哦[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不能说谎 ，但可以变相夸一下
虽然用词很别扭[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这渣男要是再到处挥洒他那无处安放的魅力，之前没表白也就算了，现在确定关系了那就不能再放纵他了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;禁止亚撒西[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也还过得去？[fn=60]凛神，你说这话，良心不疼吗？[fn=29][fn=44]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhhhhhh！凛酱发威要遏制小五的出现了（话说是小六还是小五[fn=60]）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦卡哇伊果多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;万恶的亚撒西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卡哇伊啊，凛酱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也还过得去Σ(っ °Д °;)っ</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长得还行，差不多追上本书读者了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过得去…Ծ ̮ Ծ</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你是拿鏡子中的你當作基準嗎？</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐撒谎那是张口就来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐好像也不撒谎啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野：所以我就是最美的</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小声bb</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好自恋啊渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然感觉有点可爱是什么鬼</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她。
我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情人眼里出渡边[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑的偏爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的偏爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就宠他吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;配音呢？快拉个人来配音！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你舅宠他爸[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来人，把朕砍了给大家助助兴。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我忍不住吸一口气，努力克制不激动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，在所有一切之上的是她。
我的神，九条真姬。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻：刚才没听清，再来一遍，再来一遍![fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里愣了一会，特别一个字一个字再看了遍，确定是神说的话。而不是渣男说的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟过来死一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也太宠了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来 ，大声点 ，说十遍就好了 ，多了我会骄傲滴[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神：我的回合，直球直球，伤害打满！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沃德天，真的吗？再来一遍！大点声</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟又死了[fn=31]噎死的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈[fn=5][fn=5][fn=5]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情人眼里出渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有人看了这句话没笑的吗？我一看就笑的停不下来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情人眼里出渡边[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;情人眼里出西施[fn=2]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她。
我的神，清野凛。</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈 因为没有夸她而是追究“长的还行吗”</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想到了上一本书里有意思的死后灵魂视角畅想</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是不是暗示神想撸渡边猫了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结合时事，跳楼的话，尸体面部可能会难以辨认哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发生了什</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她不会说谎哎！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：你是我理想中的另一半
高情商：渡边是小说中的男主角[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商：谢邀，世界就不应该有渡边这样的人
高情商：谢谢，渡边就像小说里完美的男主角一样</p>
`;
        case 70:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我初中女班长给我写入团推荐，夸我用了好些神奇的词语，然后她自己笑抽了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的不会说谎哎！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手指还很长[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？怎么肥四？突然这么坦率了？
你不是我认识的某某凛![fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那跟刚才的过得去，算不算撒谎啦？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手大显得xiong小[fn=31]</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我还承受的住!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有时间长，量大[fn=31]</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边号被清野号击沉了[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蛆宝宝们，扭起来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包括我在内哎！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，姨母笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她a上去了！她a上去了！啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我为什么在床上一扭一扭的[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挖藕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神发动了特攻，效果拔群</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么可以这样？我可没办法更加喜欢你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喵喵喵？唯一神突然奔放了起来[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神主动出击，A了上去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的直球</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;A上去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;换我心，为你心，始知相忆深</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边号被清野号击沉了[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蛆宝宝们，扭起来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛不会说谎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Awsl</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;忍住忍住！
嘴角忍不住上扬
忍不住了哈哈哈哈哈哈哈！讨厌～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘴角疯狂上扬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;调情摩多摩多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊，你死开</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;简简单单的想和你结婚，我想世界上再也没有比这更好的情话了
妾拟将身嫁与，一生休。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛神[fn=24][fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;cy</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊！我代表他答应你了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这里笑容凝固在了脸上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直球啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想和你困觉。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;配音组给我上！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好，我就委屈一下自己跟你结婚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请务必尽快结婚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在？摄，拆。懂？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然我是九条党，但是我还是要说：答应她答应她！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我没看错吧？！这是求婚了吧！我要飞了啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拆摄懂？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀疯啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;撅沙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我同意这门亲事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜飞了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了吧！我的胰岛素正在疯狂分泌中</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很好，你票有了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;糖分超标</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;受不了了啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;过！大！年！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她a上去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请你们原地结婚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊我受不了了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝杀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我顶不住了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;答应她！答应她！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我🌿！她a了上去！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么说呢，看到这我挺高兴的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我阿伟今天要在这重复去世[fn=31][fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好的，我愿意![fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请各位读者不要一边带着姨妈笑一边在床上扭的和蛆一样。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……………………嘶嘶嘶嘶！AWSL</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，期待了好久的直球，等了好久的神的主场。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好甜好甜好甜好甜啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神倒了（哭腔）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野: 趁美姬不在，赶紧踩油门 [fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷袭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;芜湖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这谁顶得住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;！！！！！！！冲！！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊  开大了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;落后数个版本的神奋起直追</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的神
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ohhhhhhhh神开大了！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;简简单单的想和你结婚，我想世界上再也没有比这更好的情话了
妾拟将身嫁与，一生休。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快，杀了我助兴！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;换个说法，想和你睡觉？诸君起感觉了没？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蚌埠住了啊[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一般（一只手提裤子一只手抹鼻血）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;gogogo</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她A了上去！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直球攻击</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，太甜了，我死了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神，加油啊，你已经落后美姬两个版本了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好甜好酸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神的进击！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;A上去了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶[fn=4]</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;除了害羞这一解释，这里应该也能理解成渡边还没决定好和哪位结婚所以无法做出回应，只能转移话题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呦，你害羞啦[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完美的渡边也会害羞呢</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻彻底底地活成了彻的形状了呢，神</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她
在所有一切之上是她
我的神
渡边枝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太可爱了[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;与其约会，使其娇羞[fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;约会大作战</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看小说没甜死，看书评差点笑死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛酱好可爱！！！[fn=24][fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟阵亡了！阿伟又阵亡了！[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;山田尙子是神！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;室内鞋是嘛？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神也会害羞啊啊啊啊啊我死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊 下凡的清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;敛尽春山羞不语，算是真正理解这句诗了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她
在所有一切之上是她
我的神
渡边枝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神也有害羞的一天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，我的老婆，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;窝窝窝窝窝哦我哦哦，我可以！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱的神</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;差不多吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和风的一层精致木房，瘦得完全变了个人的绝世美女，正在阳光照的到的走廊露台上，画着油画。

村上悠停下脚步，没去打扰她，在旁边默默等待。

这时间里，他欣赏镰仓宫血一样红的枫叶中，看种田梨纱的背影；看种田梨纱的背影中，欣赏镰仓宫血一样红的枫叶。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;锯齿代表的是手指吧 。这个我熟 ！我也是这么画的！那岂不是我＝渡边彻？ </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手抖？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;烷烃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来个灵魂画手展示展示（doge）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像素级高手？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你需要换个显卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你是伊森？</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;原来我一直再向大师致敬[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这只能说明你们对画画了解不够多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图片评论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;义正辞严呐，义正言辞是错的</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;朵拉与小猫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暗示清野神要当情人？</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九亿美元就是渡边现在所有资产，呼应前面“这一千亿円清野凛想要的话就让她没收了好了”细啊乌鸦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来喽</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;自投自抢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九亿美元 就是一千亿日元啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本GDP喜迎暴涨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;going，going，gone！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻以他爱人清野凛为原型画的《清野神》拍卖价9亿美元！</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;什么平板？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边所有的💰=9亿
渡边9亿拍卖的这副画
画给了神
所以
渡边把所有的💰给了神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，我第一个想法也是，渡边彻所有的钱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大意了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边所有的钱正好9亿美元</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里有点感觉，甜还是媚呢</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣的纪念日不会不写吧？</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;上瘾了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有10天要和你们说再见了</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好吧，我只看过 放学后的优等生[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书很早了，是他早年作品，我记得从这之后他才专职写作，不过一直没有拜读</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于有一本看过的了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放学后还是很不错的，可惜东野的书上下限差距太大了，而且国内无良商家天天把他很多书排在推理小说里搞的对他感觉一般。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高中的时候疯狂迷恋东野圭吾的书，买的加借的看了三十多本[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有走歪是我没想到的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东野的书看过很多很喜欢他的书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;知道了话，倒是把大学生活也写进去啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最喜欢白夜行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高三同桌买了很多他的作品，所以跟着看了不少</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时崎狂三也有本放学后，
确实不错。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;畅销君</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白夜行，恶意，嫌疑人x都蛮好看的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看过，是师生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白夜行yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好吧，我只看过 放学后的优等生[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书看过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书很早了，是他早年作品，我记得从这之后他才专职写作，不过一直没有拜读</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看越多书就会想看更多书，同作者写的，书中提到的，同类型的，也就是白岩松说的“书找书比人找书容易”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传统文学书找不到了可还行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我可以这么推测，乌鸦下一本书可能会写侦探推理类</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的是这样吗？我不信</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;清野神正在享受脑垫波吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要来力!团子凛![fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像这样，我可以[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贴贴！</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这逍遥游在这里..</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上古有大椿者，以八千岁为春，八千岁为秋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楚之南有冥灵者，以五百岁为春，五百岁为秋。</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我给大家写个后续：系统某天刷出不死药然后桃花源计划启动  完
He结局万岁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我去年夏天看到一半的时候就有这个想法，这三个人该怎么接受对方的死亡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像是啊，渡边的身体应该达到了人类极限了，不出意外确实要比普通人寿命长，而且不是还有个什么药嘛，只要没死都能救活，清野凛的身体确实该加强了，这体力弱到以后生孩子都有危险了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典寿命论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我可以忍受痛苦，所以不会走在你们之前</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其他不说，光是这身体机能就绝对不是和普通人类一个层级的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边已经是长生种了？</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;多年之后，美姬花儿即将凋零🥀
她牵着他的手，恋恋不舍：好想找个天使替我来爱你[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;独属于美姬的情话。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个念头可动不得</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;高马尾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高马尾？小鱼儿？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛:有人说谎了，但我不说是谁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然不是芝麻团子凛</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;运动少女～</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？？？不是咸的吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么食人魔😱😱😱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我吃过，是薄荷味哒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看得人忍不住想要尝一口[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你还别说，就是挺香的，还有点甜</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一般</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一般（提裤）</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;。，。，。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，别</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝友，这发型可不姓辫啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王大小姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛变身！
清野幽子！</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好喜欢太太，真想抱抱她女儿[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我超喜欢这个发型的！！</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啊，雪梨！你化成灰我都能认出你[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以柯南里的独角兽才这么有辨识度啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金毛红毛粉毛黑毛蓝毛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊～雪莉， 然后对着圆子来了一枪[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不不不，身材也行。因為動畫裡不太需要兩個一樣身材的，這樣沒有鑑別性，無法吸引不同族群的人。</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;公主切那种齐刘海的锅盖头我一直想象不出华丽的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞧瞧康康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;整齐，飒爽，华丽</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;布加拉提</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太阁五猴子的月代头也不难看感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：麻烦给我头顶中间剃光，两鬓不动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中分锅盖？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姬发式</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;锅盖头-精神小伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是女生的额头用头发挡住？[fn=39]</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;天上掉下个凛妹妹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们在看什么啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;林妹妹还行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前几天才刚看完。乌鸦是不是在暗示一些什么？
女人出轨把自己的丈夫杀了</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;都让你懂完了[fn=31]</p>
`;
default:
			return '';
	}
}
        