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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都在起点住下了吗这是，这么快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚刚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;举报的人是什么心理？连个名字都被改了，我想重溫一下，结果发现美姬的姓都改了，真的很影响我温故而知新啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐累了弟弟却还很有精神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不怪妹妹不努力，只怪哥哥太调皮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她为什么睡懒觉，您心里不知道吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太：你醒醒，这是奥运……啊不卫国战争。[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不争气的美姬</p>
`;
        case 129:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阿彻，我的阿彻[fn=19]</p>
`;
        case 130:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一口闷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哥哥，你吃了莲酱的冰激凌，你女朋友不会生气吧？你女朋友不会打我吧？好可怕你你朋友！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲酱世界第一懂事[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多好的孩子</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;保养到位</p>
`;
        case 4:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喵帕斯闹钟[fn=31]</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;娘子威武</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连幼女的醋都吃的K桑[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱美姬～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;被抓住了命运的脖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;德国骨科警告</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快进到九条未那</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刀片寄给一楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬以后不会要吃小美姬的醋吧[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小孩子，还是我女儿，这都不行？
不行！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃起醋来连孩子都不放过[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉美姬以后要吃女儿的醋[fn=58]</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;还有一个幽子太太。美姬太难了[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每天醒来第一句，防火防盗防闺蜜，还得防母亲[fn=31]</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;各位，别藏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;离婚冷静期警告⚠️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈美姬反差的可爱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🤣🤳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你们先原地结婚吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有这种好事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我经常一口吃完女友的冰淇淋，现在她都不相信我的一口啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那张图，女的，一口把冰淇淋全吃了的那个，谁发一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神：“还有这种好事？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在就离婚（×）
现在就丧偶（✓）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就一口</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神：让她离，让她离！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了[fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：跟她离！跟她离！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有这种好事！？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：gkd</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我九条家没有离婚，只有丧偶[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼，这九条家不待也罢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬太可爱了[fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛：还有这样的好事？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野：快一口吃掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各位，别藏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野:一口吃掉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;离婚[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;离婚冷静期警告⚠️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:凑活过呗，还能离咋的!</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吃一半 回去以后再离婚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿良良木？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;离一半，剩下的给神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不知道为什么想到了这个，校长对不起</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你一半我一半，你是我的好玩伴</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;做了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么都做了</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;和神</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这段啥是个啥梗来着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边下体一凉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拱火大师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太又有什么坏心眼呢？她只是想跟自己女婿亲近一点而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太满脑子都是涩涩的事[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小树林能有什么剧情呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我香肠一痛。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有一说一，我喜欢逛小树林</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不懂就问，进树林一定是去采蘑菇对吧？[fn=31]</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哼哼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仿佛眼中充满痛苦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;借物喻人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下体莫名一紧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻吉哑巴库奈？</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;幼女之心不在莲，在乎欧尼酱者也[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别真是公主。天皇的女儿。到时候加入修罗场。早熟萝莉。</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;敌进我退，敌退我扰，妙啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬:真是逊啊！我只用休息一白天。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是正宫的从容吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“美姬，你明天一定要起来，和我一起”
“接下来三天我休息”</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;楼下这老老八了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;💩
🍸在下就是写生小能手</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;游击战术yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一天看一本书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，游击战大师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好嘛，搁着跟K桑玩游击战呢？[fn=31]</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以说为什么吃不来咖啡[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;报复，这绝对是报复！还咖啡味！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是这么哄小孩的[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑鄙的东京帅哥！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑鄙的外乡人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑劣的大人！</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想到了才川</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京的小女生果然不是东京帅哥的对手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幼女：不能在帅气的欧尼酱面前丢脸[fn=31]</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;光脚不怕穿鞋的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得想办法制裁这偷腥猫.JPG[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个表情吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《九条在睡觉》如何打破魔咒？</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;卡哇伊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;知道的以为你在吃冰淇淋，不知道的以为你在吃......</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重要的图发三遍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到那个舔柠檬的动态图，谁有吗？</p>
`;
        case 147:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舔</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;昨天晚上吃多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我只吃一口[fn=31]</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;穿透伤害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可是，你为什么要露出这么痛苦的表情啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃橘子的铃音大帝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看到痛苦面具我就想到shox</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男的女的折磨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;痛苦面具</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;实在是太卑鄙了，不愧是你。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑鄙的外乡人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑鄙的偷窥者</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萨斯卡佳织酱~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京帅哥还会抬人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幼女：可恶！但还是卡酷一！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老折磨人了</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前略，我的神，清野幽子！
这孩子带得也太自然了，太太我[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神大人充满了决心[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算是莲儿也不能打扰珍贵的二人世界
</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边の复仇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记仇的渡边[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日の胜利！卑鄙渡边の胜利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边君的复仇[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蜜汁剧情既视感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;带恶人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(*￣3￣)╭♡❀小花花砸你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怼不进[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好涩，是我的问题么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑鄙的东京人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自己装的死也要装下去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边の复仇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卑鄙的大人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记仇的渡边[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，还是个孩子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;痛苦面具</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！我这个老色批刚看完，不该看的东西。污了。</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;喔</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;挂脖子上也太累了，你需要一个小天才电话手表</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只是提前感受养女儿的感觉吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬提前学习如何当一个好妈妈[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想要姐姐的关心，富婆爱我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条已经变成了妹控了，不过主要是因为渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬已经变成温柔的形状惹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这让我不得不怀疑这段会出事 </p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那东西还用工具吗？渡边徒手就能拆了</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我就比较惨了，小时候学自行车都是我爸让我摔，说摔得多了就学会了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到以前看到的一对图片
妈妈教小孩骑车，自己在后面推着
爸爸教小孩骑车，自己骑车让孩子在后面追</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;动画里喵帕斯学自行车拆辅助轮是卖零食的教的，腿膝盖也摔的红肿看上去就很疼的样子，卖零食的给贴上了创口贴；不过在非人的渡边彻的帮助下，小莲可能摔不了了</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你能命令。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以竖中指吗🖕🏻</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我是第一次上直接会了，不过我平衡感一直蛮强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自行车是一项神奇的运动，一个人一旦学会骑自行车，他就再也回不到之前不会时的状态了，并且还会神奇的忘记曾经的感觉，我怀疑那种状态是虚拟世界的开关！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;儿子女儿学骑自行车都用了不到20分钟，跟我当年有的一拼。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小时候去农村的姥姥家玩，被惊呆了:村里的小孩骑着比她还高的横梁二八在坑坑洼洼的土路来回冲刺，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我学自行车的时候第一次上手直接就会了，感觉并不是多么难的问题</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不知忧愁的声音emmmmmmmmmmmmm</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;志伸小姐？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmm  轻井泽、太太，隐约明白了什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太，我爱你，我爱你。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹党聚集！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新的太太已经出现，怎么能够停滞不前[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是一位太太[fn=32]</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，这书里蜻蜓智力可能都不到一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她们的动作不能说一模一样，只能说完全一致</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边偷偷指使的吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等图，有了踢我</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你们在说什么？对内语言？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说到抗衰老，那个“谣言”到底是不是假的啊，我的曹哥曹弟们？[fn=39]</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看成中指</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是渡边用了能力</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一只乌鸦缓缓落上去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;XX才露尖尖角，早有蜻蜓立上头</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;女骑士服？</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在这个小说之前看的昆仑第一圣，看到这里的描写我第一反应是渡边顿悟了😂😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我举报：渡边开挂，有命令buff[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;這小說打破了我看網文的成見：整個章節沒有衝突逆轉，越級打臉，就是單純寫跟美女在美好的地方過著體面的生活，卻一樣好看。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;化身为森林之子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;解锁CG:画中的美少年[fn=31]</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你的目光和你的心在追逐着什么！
最特别是她</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太短了，我喜欢加更！
喜欢加更就像是喜欢春天的熊。
春天的原野里，你一个人正走着，对面走来一只可爱的小熊，浑身的毛活像天鹅绒，眼睛圆鼓鼓的。它这么对你说道：‘你好，小姐，和我一块儿打滚玩好么？’接着，你就和小熊抱在一起，顺着长满三叶草的山坡咕噜咕噜滚下去，整整玩了一天。你说棒不棒？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果这是神，右边那只白猫一定是渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;厉害，读完这句话脑海中的画面顿时就鲜活了起来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是景不是事，而是那时在一起的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有画面感了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;(*/ω＼*)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;解锁cg✔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写的真好呐，还以为要装逼玩律令，渡边果然已经中二毕业了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太短了，👴泡澡去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话也太有感觉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安各位[fn=32][fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也有个朋友…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;解锁CG:遥远的夏日记忆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起来了一句老话：
你是年少的欢喜
喜欢的少年是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果这是神，右边那只白猫一定是渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每天的精神食粮，满足了！在我看的国产轻小说里能排前三，作者要是能是能完美收尾，这小说在我心里就封神了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡了睡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舒服了，睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祈祷:最特别是她 在所有一切之上是她 我的神清野幽子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;索然无味</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小孩子以为握住了蝉，就握住了整个夏天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太短了，我喜欢加更！
喜欢加更就像是喜欢春天的熊。
春天的原野里，你一个人正走着，对面走来一只可爱的小熊，浑身的毛活像天鹅绒，眼睛圆鼓鼓的。它这么对你说道：‘你好，小姐，和我一块儿打滚玩好么？’接着，你就和小熊抱在一起，顺着长满三叶草的山坡咕噜咕噜滚下去，整整玩了一天。你说棒不棒？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就没了？就这就这就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是日常，有些小说的日常就是水B罢了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想不出什么骚话了，各位给我点赞的都是我的再生父亲怎么样？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本期看点：
1.美姬变了
2.干饭
3.冰激凌
4.拍照</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安了各位[fn=45][fn=45]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多么美好的日常啊(*•̀ᴗ•́*)و ̑̑
该发刀子了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完了
睡前祈祷
最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没啦？？？</p>
`;
        case 165:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;来啦来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看这章的时候突然出去书友圈找群号，没想到这章尾就有[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我突然发现这群号和我姐姐QQ号只差了一位数字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一群二群三群都满了呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是几群啊，三群？四群？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会真有人用qq阅读吧</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;A太太你的皮肤真嫩啊，和少女时候差不多。
B太太，我看你才是，你看看你，荣光焕发。
C太太，诶呀，你看看这身段，标致，我就不行了，还要减肥，你保持的可真好。</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;但是有你在的聚会，也总有神的身影</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神爱世人，因为神真的爱世人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有你在，她是你的神，你是她最忠实的信徒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正是因为这样才是神啊！</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我们一般称之为丁达尔效应</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;to heart2，爱佳的妹妹角色歌[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;认识一个很温柔的女孩儿
她的微信名就是Komorebi</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神专属光影</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;cy</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;江流宛转绕芳甸，月照花林皆似霰。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来木漏茶室是这个意思，怪不得我一直觉得这名字怪怪的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;こもれび </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起中岛美嘉的歌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢作者，不然听了这么久我都不知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众人皆浊我独清，众人皆醉我独醒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木漏れ日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木漏れ日
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赛马娘ed（）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丁达尔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马娘ed（）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们一般称之为丁达尔效应</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木漏れ日のエール</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Komorebi</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;出自样板戏《沙家浜.智斗》的经典唱段，是阿庆嫂唱的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除了最后一句改动了，其他都出自沙家浜…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你，祁同伟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好像高中音乐课有这玩意?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想听配音了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;祁同伟最爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得开场应该是“垒起七星灶，招待十六方”，最后一句应该是“有什么周详不周详”。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;垒起七星灶，铜壶煮三江……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人民的名义看完 我就记得这个智斗了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;配音呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处该有配音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;汉奸说阿庆嫂说话周详滴水不漏，阿庆嫂就说了这段。最后一句，有什么周详不周详。周详改成了撒谎。为什么记得这么清楚？小学音乐课本里面有，老师还现场唱给我们听。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能说待亏这是智斗吗，不然我都不知道是什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，阿庆嫂直呼内行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沙家浜啊，原词最后一句是 人一走，茶就凉，什么周详不周详</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弟啊，你神经啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等一个大佬[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;串台了直接，哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在座的不会看到这就打开百度搜，然后就迷路了吧[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出自样板戏《沙家浜.智斗》的经典唱段，是阿庆嫂唱的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唱歌技能还能用来唱戏的嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;智斗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;除了最后一句改动了，其他都出自沙家浜…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有没有大佬知道出处？还是这是原创</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沙家浜</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;已经学了音乐技能了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你不是音痴唱歌不行吗[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个是上辈子学的吗</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谢谢，我得糖尿病了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猿神:妻前撩妹，会玩，我喜欢！</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;绝了，日本财阀大小姐唱革命样板戏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高情商：捉奸现场
低情商：当面调情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈美姬[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是资本家唱的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，这挂开的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到高小琴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关于这年头没点本领都不知道攻略对象说啥这件事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条也没赢啊，只是破译了加密通信而已，关键在于通信的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬太可爱了2333</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刁德一呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝了，日本财阀大小姐唱革命样板戏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沙家浜阿庆嫂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不阴又不阳（X）
阴阳怪气（√）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日的胜负
美姬大胜利！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高情商：捉奸现场
低情商：当面调情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当面调情（×）
当场捉奸（√）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夫妻合唱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:到底是中文太简单了，还是美姬太聪明了，还能不能好好的玩耍了</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;别的地方哪需要上心？
这钵啊，这钵是认真捉奸[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;8点智力的捉奸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不用在这用在哪？捉奸？[fn=58]</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬的演戏天赋真的棒[fn=4]</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老yygq了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指槐骂桑[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我tm笑死[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;絕了嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，有意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;点睛之笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有趣的女人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神了，这一段</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好骂！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的好对哦哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈😄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老yygq了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;指槐骂桑[fn=32]</p>
`;
        case 54:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;R桑！冷静！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜我的美姬真可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬大胜利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日份，R桑大失败</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬 我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，美姬，我的美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛你再不放大我就要叛变了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬 大胜利</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的真姬其实也一样可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬！我的美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这啊，有啥可酸的，嘶溜！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羡慕吗？
我的！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑！冷静！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬是能上大分的人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恭喜中国队，绝杀夺冠了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻了麻了，天天宣示主权。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜我的猿神也可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜我的美姬真可爱</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;猿神:现在是你比较强！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛换装：神之哼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛神[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;r酱倒了（哭腔）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实凛不能说谎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野凛换装：神之哼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猿神:现在是你比较强！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;败犬[fn=12][fn=12][fn=12][fn=12]，我的凛⊙﹏⊙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神之吃瘪[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打起来打起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃醋的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日的胜利---美姬</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;以前觉得吵，但是现在越听越好听……我才三十多啊……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:说出来你可能不信，我懂京剧是应该的，你们岛国和歌听不懂倒是真的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;讲道理，跟穿越关系不大了，现在国内的高中生又有几个人看京剧呢？看过又有几个人能记住呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“渡边威！你还说你不会武功！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻到底是不是穿越过来的啊，忘了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;稳如泰山困觉姬[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;普普通通渡边彻
绝不动心清野凛</p>
`;
        case 62:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;蛤？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;索菲亚挺好听的啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这歌真难听</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;sofia索菲亚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大佬们，什么歌。感谢</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我的太阳👓(ಡωಡ) </p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;内啊不乐斯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是我高中学的第一首意大利歌，我亲爱的。第二首是绿树成荫。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好啊，表忠心啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲爱的，相信我，你若不在，我心憔悴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Caro mio ben </p>
`;
        case 67:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以这首歌既可以是唱给神的，也可以是给美姬的，高！实在是高！都让你高完了，不愧是你渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这求生欲哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亲爱的 你慢慢飞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我滴太阳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊我滴太阳~[fn=31]</p>
`;
        case 71:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我这就去拿(ಡωಡ) </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为文有遮掩的意思，文胸就是遮住胸的，典型用法文过饰非</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;港澳传入大陆，实际不可考据（百度的）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我要黑色蕾丝边的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么不叫武胸呢[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很好奇，为什么文胸要叫文胸？不是胸罩嘛？难道是因为更优雅叫着？还是因为上面有花纹？</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;个人喜欢白色蕾丝[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑色或者紫色很棒！</p>
`;
        case 77:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有个后代也行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就代表九条是最终胜者、因为我叫九条美姬、我会守住九条家的一切、重铸九条荣光我辈义不容辞、只要渡边还爱着我就算成功。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等等，好像之前有写，清野太太让清野神18岁之前改掉无法忍受说谎的习惯，或者让渡边入赘接手清野家也可以，这里美姬想让清野神继承清野家，是不是暗示着什么，好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图呢？失望😔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;重振九条荣光我辈义不容辞。。。。。。。。。。。。。只要还爱着我，就算成功</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进到九条家清野家合并[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边大胜利！</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬终究还是变成了渡边的形状</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就宠他吧[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是正宫的肚量吗？我的美姬。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜腻腻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你舅冲他爸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这，狮子被驯化的跟只小猫一样……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你舅宠着他爸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就宠他吧[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为爱卿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是爱(⑉°з°)-♡，我加了爱[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬终究还是变成了渡边的形状</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为爱情</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;艹，有画面了，酸死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自然而突然，自然而然</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看着这两个人亲密的样子我完全想象不出神和渡边亲密是啥样，除非作者写出来让我康康[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再翻回去看前面的篇章，真是让人唏嘘啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虐夫一时爽，追夫火葬场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;底线被逐步突破</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬 我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说的就是各位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再翻回去看前面的篇章，真是让人唏嘘啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这让我想起了忒修斯之船</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为爱付出之人，自然会收获更多的爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看着这两个人亲密的样子我完全想象不出神和渡边亲密是啥样，除非作者写出来让我康康[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬！</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;【姐姐，今夜我不关心人类，我只想你。】</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31][fn=21][fn=21][fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我永远属于你，但不只属于你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咦惹~</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哦，我的真姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬啊[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！美姬也去找几个情人！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变成渡边的形状了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬永远的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12]我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=53][fn=53][fn=53][fn=53][fn=53][fn=53]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦，我的真姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马吉牙八库乃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给我也整一个！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜爆了！！！</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的美姬[fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好嘞，打断队形</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明明是大家的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也喜欢嗅我女朋友发香[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柠檬大餐了解一下？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昨晚干啥去了，我们都看见了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶✌️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;禁止禁止套娃好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沉迷女色我愿意</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;处男环节，跳过[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？省略是坏文明！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《清野凛在看书》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;r桑专用转场标志</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;处男环节，跳过[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？省略是坏文明！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;沉迷女色我愿意。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧，处男真一般</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这?</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真快啊渡边，小莲穿完衣服就出来了[fn=32]</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边•旅行青蛙•莲</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一家四口[fn=33]</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;银座！妈妈桑！</p>
`;
        case 97:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你完全可以就当她是[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总是想到悠哉日常大王的莲华</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前天是兔子，昨天是小鹿，今天是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师批语：流水账，重写</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦结婚了吗，这么懂小孩</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;邮筒，需要踮起脚尖吗？</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;猛男喷血</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喵～帕斯！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么不是邮筒女士[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一股宫崎骏的既视感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦 交给我了 我一定把它好好保存 直到烂到肚子里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喵帕斯帕斯~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喵帕斯～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好的👌🏻喵帕斯！</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;画面感超强</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;邮筒📮站了起来，用右手敬了个礼“放心交给我吧！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名其妙的喜欢这句话</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一个精神洁癖，只认准灵魂。
一个身体洁癖，不介意在乎的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;碗筷怎么解决</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个细节想起来高手寂寞这本书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里怎么都被干掉了几楼[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬不习惯坐别人坐过的地方，渡边细节好评</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赠人外套，尚有余温[fn=31]</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有人知道凉面吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在吃热干面看[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大晚上的过分了，明天午饭安排一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在想是不是和热干面差不多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我决定明天吃个早餐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前的村子回来啦！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;半夜放毒……对更新时间没有点数吗？</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我在岩井俊二的夏至物语见过这种吃法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;个人喜好？向大厨直呼内行？</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可惜我一吃茄子就过敏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恰面～</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;康娜吃虾.GIF[fn=31]</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;愣字打错了</p>
`;
        case 115:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不得了了！莲酱如此可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻吉哑巴库奈！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想了半天才想起来——“不得了”好像是康娜的口癖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莲华？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不得了了！莲酱如此可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牙白咿嘞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻吉哑巴库奈！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;上次去轻井泽也住的星野，那私汤真的蛮大的</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这句话莫名很萌</p>
`;
default:
			return '';
	}
}
        