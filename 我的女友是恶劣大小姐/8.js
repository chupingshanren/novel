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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好耶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。     </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好准时</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第四</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看成清野女神了[fn=43]</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我不管，麻衣最可爱，麻衣酱万岁。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边活着不是为了麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学姐天下第一[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣才是第一！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坐等图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人活着就是为了樱岛麻衣！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱，想透。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人活着就是为了清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边活着不是为了麻衣学姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不管，麻衣最可爱，麻衣酱万岁。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为美姬没有露出过迷惑的样子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;屑到家了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧[fn=15]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：❓❓❓❓❓❓❓❓❓❓❓❓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有点不开心</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神，自信！不愧是我的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神，自信！不愧是我的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年底還不是就沒機會了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵！败犬的哀嚎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神，永远的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看着年疷就是我的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;111111111</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神职人员：有故事！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嚯。我就欣赏这种自信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛yyds</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神，自信！不愧是我的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神，自信！不愧是我的神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;偷家，可劲偷！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的（骄傲脸）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神的自信</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今晚就是我！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神，偷家的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神，自信的神</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怎么回事，今天渣彻没有上线了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在想起来自己有未婚妻了</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;虽说应该是无意的，不过也算是神职人员的老传统了，上一次是神社的巫女，这一次是教堂的修女[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细思极恐 一楼呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，她们都是我的翅膀，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鄙视¬_¬｀</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;骚还是你骚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这和事实有什么区别？</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谎言，说得好像自己不缠着他一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说什么大实话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骚扰我(的腿)[fn=4]</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我脑血栓，看谁都哆嗦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是我找到最好看的了。</p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神啊！我有罪。
神爱世人，说出你的罪过，神会饶恕你的。
我一直看您的腿。
没救了！等死！告辞！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我忏悔，我不应该只是用看的，应该上手的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开祷开祷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的神，清野凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太甜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以一边舔腿一边忏悔么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我忏悔，我不应该只是用看的，应该上手的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;致我们至高无暇的清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光影之主，影庇众生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神啊！我有罪。
神爱世人，说出你的罪过，神会饶恕你的。
我一直看您的腿。
没救了！等死！告辞！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野母女。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每日祷告：最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在一切之上是她，我的神，清野幽子。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她 在所有一切之上是她 我的神 清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“最特别是她，在所有一切之上是她，我的神，清野凛”</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;记住虽然被删了一个但是还有另外一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是结局吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;节选自《LELife》</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你很懂嘛</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;此乃真话</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;司 是你吗？ 司</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;您说得对[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;LM已经很可爱了，再可爱下去，世界就危险了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑已经很可爱了，再可爱的话，世界就有危险了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我这么可爱真是罪过啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我很可爱，请给我钱！    ×
我很可爱，请跟我结婚！  ✓</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为什么突然转移话题，难道是怕被发现说假话[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是是，你最可爱！[fn=9]</p>
`;
        case 23:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没人觉得这句话很戳吗？还是说渡边攻势太猛这种平A不算啥了？</p>
`;
        case 24:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是鸦神渣过的姘头之一吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么不是乌鸦？[fn=4]</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你平时很清凉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提前行使女友权[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是你平常不清新，是你今天很那个的那种。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天很漂亮，那么说我平时不漂亮咯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你穿这件衣服真好看！
我平时不好看？
你不穿也好看！</p>
`;
        case 28:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;泥舅宠塔吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就宠他吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;酸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，真拿你没办法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我酸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你舅灌着他爸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你就宠他吧   ( •́ὤ•̀)我酸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神宠爱着她的信徒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你舅宠他吧</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是我的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尽力了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑发对A还是太难找了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她，在所有一切之上是她，我的神，清野凛。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来！！！</p>
`;
        case 30:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;年底渡边老师会再次对床上的清野说这句话的！</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怎么说呢，手背后迈开脚步，我最先想到的是圣人惠。</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乱立flag，不继承清野家，去当你模特吗？</p>
`;
        case 33:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里更适合</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑，你已经很可爱了，再可爱下去世界真的要危险了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隐珞珈黯然之梦，藏惊鸿回眸之丘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;痴情咒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的天，R桑怎么怎么会！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最美好的回忆</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是不重要，合拍才是真</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她，在一切之上的是她，我的神，胡桃[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl 你就宠他罢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里我觉得可以配一张新房45度角</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼前的美景，明目张胆的诱惑着你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑，你已经很可爱了，再可爱下去世界真的要危险了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的回眸一笑，只是一瞬间；却留在了我整个青春</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊我死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;微微一笑很倾城</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;收手吧，R桑！外面全是死掉的阿伟！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;awsl</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里更适合</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿伟死了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;震惊渡边一整年</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回眸一笑百媚生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑出强大，益达</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;无法抗拒的美</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条女王快来，你的骑士要被神拐走了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要被吸入惹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;光</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快点，我的美姖，快来捉奸啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来自神的诱惑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是神的圣光！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神打出了暴击</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没蛋蛋！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;give me look look</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我康康（震声）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛姐不要啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我康康！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给我康康！（震声）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听话，让我看看</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;点开之后全是渡边的自拍[fn=7]</p>
`;
        case 41:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这也太自然了吧，什么情侣日常  甜死了</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;检查手机</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;根据后文理解，这里放大看是在挑刺。因为是腿照所以才放大看（因为自己的腿更好看），假如是熊照的话[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃醋了</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;腿没我好看</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，清野太太的泳装照</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼去哪里了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻烦发我一张[fn=4]</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神
看满离</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然平时已经看透但是想深入探索下的清野神(ㅍ_ㅍ)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;被看光了都，心思藏不住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为很在乎很喜欢很爱你才会查你手机。不在乎的人，看的欲望都没有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;更多的了解我xp，然后，来攻略我吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就算死在这，从这里跳下去，我都不会高兴的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错，请敬请享受我的隐私吧[fn=32]</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你的心，脏，有问题[fn=58]</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你渡边君，在门口也不耽误调情。不过，你的心已经跟着清野跑了呀！</p>
`;
        case 58:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;给特别的彻以特别的爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，神也骂骂我吧[fn=12]</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻：我从小到大没见到这么嚣张的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我辟谣一下有关我是抖M的谣言；
         这不是谣言[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你会</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凛：那现在你见到咯[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：我才不是受虐癖，我只是喜欢被你骂。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：不要以为你长得可爱你就可以乱说话。如果不是你长得最可爱，我才不会被你骂还会很开心的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁不是了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是在开玩笑了吗？</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你怎么知道的？[fn=23][fn=23][fn=23]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你……你竟然知道我的秘密</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可可爱爱。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贴贴！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;越   共   探   头.jpg</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;石腩花香？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;迷迭香和百里香</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是栀子花和夏天的味道呀</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今晚上吃谁的公寓群</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;公寓群？后宫群！</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;今天是个上分的好日子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拍照就要学陈冠希啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拍，都可以拍，晚上一个个来[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊渡边哥～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太太，我也可以的！</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有些很坏很坏的人，一些刚死的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;四宫辉夜是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你也想当色影师？你的鸡腿我包了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冠位摄影师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;色影师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;照相还得看陈老师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;非常遗憾，三千子小姐失业了</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我认为凛比美姬更爱男主，凛讨厌说谎的人，是绝对性，但是对爱说谎的男主来说却不讨厌，这是唯一性</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;爱你三千遍！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在正牌女友床上想别的女人也太渣了吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱你三千遍[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以你在美姬的床上想的都是神是吗[fn=22]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是你在美姬床上想清野神的理由吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野神：谎言，我每天晚上都没有听见[fn=47]</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 78:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真姬姐姐永远十八岁。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：您就是少女风本风啊！[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不太妙啊</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你这个技术它正经吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：“皮这一下我很开心。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女王风格不需要技术</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低：是时候表演真正的技术了
高：这不是有手就行？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我加藤X之手岂是浪得虚名[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;低情商🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高情商</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是时候表演真正的技术了</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小伙子，说话要考虑后果哟</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;活好快啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正有大把时光～</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;小夫，我进来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逮虾妇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在可还是白天呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前三楼呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话从美姬嘴里出来就像开车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：当着大家的面，现在就进来，不好吧[fn=43]</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;否</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我可能不太对劲</p>
`;
        case 87:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那好吧</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;应该是“钉死”吧？</p>
`;
        case 90:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个鸟，它正经吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;德鲁伊渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;悬，鸟自己都不能控制，你凭什么控制，让鸟在别人头顶一边飞一边酝酿?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这还真做得到</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有拒接呢，清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真话</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;凡人岂能亵渎神明</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，只要在她面前说了话，她就能知道真假</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你能指挥鸟，但你不能控制它们什么时候拉屎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回顾前文
只要回答了清野的问题
就是渡边在对神说真话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要回答，便是承认</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鳥：什麼都好商量，但排便需要感覺跟正確氣氛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神：此乃谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你能指挥鸟，但你不能控制它们什么时候拉屎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，只要在她面前说了话，她就能知道真假</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
`;
        case 95:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;欺骗神？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明显是知道渡边能做到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;咏春，叶问！</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;又是交手机的时间</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没错 这才是亲生的女朋友会做的事情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别删啊，至少先发给我[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有修复，还有云盘的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事，群里还有[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没用，能复原的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;发给我，让我欣赏欣赏。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;糟糕还有神的泳衣照</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都发在群里里，删除有用吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别删啊，至少先发给我[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一键三连</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸好我有隐藏相册</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉莫名的熟悉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没错 这才是亲生的女朋友会做的事情</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;然而群里面有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：我都没有呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;容嬷嬷来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听说你会唱歌，还会跳舞？</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;无用功。</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;即视感</p>
`;
        case 113:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;诶诶诶！怎么骂人呢</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这是美姬和凛的队内语音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常第n次开启队内语音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小队语音
眼神聊天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是说渡边无聊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此乃谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里是改变的重点吗，是两个人有开始私聊模式了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神终究被渡边改变了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前后行为不一致</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好活，但是有点烂，不过也是挺好的，可惜对我来说比较烂，只是太好了，没体现出烂的感觉，所以相对好来说，有点烂，总体来说还是好，好中不足就是烂了点。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算无聊，也觉得美姬刚才看照片的样子太像自己了，好好笑[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得不是还有鸟拉屎到那个女人身上的情节吗是我记错了？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鸟拉屎也删过分了吧？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好活，但是有点烂，不过也是挺好的，可惜对我来说比较烂，只是太好了，没体现出烂的感觉，所以相对好来说，有点烂，总体来说还是好，好中不足就是烂了点。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺无聊的，就是有点有趣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;注意是单引号，没有说出来，只是眼神脑电波交流，不算说谎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个渡边彻和清野的脑电波交流算说谎吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmmm，我感觉昂，既然美姬做出了改变，那么会不会清野也做出改变了，无意识的那种，就是那种从不会说假话的那种</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算无聊，也觉得美姬刚才看照片的样子太像自己了，好好笑[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是不是说谎了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这算不算撒谎了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的指挥鸟去拉屎了</p>
`;
        case 118:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬的照片应该没删吧 快让我来检验一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还记得新年的时候 渡边还是心惊胆战的生怕被发现</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要听神明的话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼……鬼👻！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小时候玩过，后来不玩了，有点恐怖</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;更恐怖了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小朋友能玩这么久没人闹，真的不容易..</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;治愈系游戏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竹笼子，竹笼子，笼中的鸟儿何时飞。
黎明之前夜最黑。
乌龟摔倒了，白鹤摔倒了。
现在拜拜站在你身后的是——谁？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要代入一些小说里和鬼玩游戏，就有一种惊悚感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉很多童年歌谣，现在想起来都是恐怖故事</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;举个栗子吧😄</p>
`;
        case 138:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神说，要有青苔，到处都要有青苔。</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;鄙人有辛见过几次太阳雨雷阵雨就多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那跟R桑说今天会下雨那不就是？？？</p>
`;
        case 140:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;雨伞带了吗？ 哦，和美姬从来不用啊，那没事了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雨后小故事，美姬姐姐与渡边弟弟[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最是迷人春衫湿[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;衣服湿了不是更好看👀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不弄湿才没什么好看的呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来帮你吹！！！嘶哈～嘶哈～</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;细节</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我以前在北极玩的时候吃过驯鹿肉，虽然刚开始有点抗拒，但其实还挺好吃的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爱🐴人士表示强烈谴责</p>
`;
        case 143:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;你是喜欢晴天还是雨天？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有清野神的每一天，阿萌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晴天雨天，落幕还在上演。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晴天，雨天，都想试一次[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;翅膀我都要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阅读理解：清野 九条 我都要！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野、九条，都想爱一次</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可有可无？不置可否是不是更好</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大家都在脑补</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;让我来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吸溜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都累了吧？该我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呲溜。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么没人来[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面的都闪开，我先来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吸溜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是美姬</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;舔着鞋，叫姐姐?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧内酱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边:还有这等好事，我来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条：姐姐，舔我的鞋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这两个我都可以代劳</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叫阿纳达？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐（舔鞋中…）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也请叫我姐姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我懂了，渡边舔美姬的鞋，叫清野姐姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：姐姐，帮我舔鞋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;闺女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舔着鞋，叫姐姐?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧内酱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐大人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐，姐姐~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我叫可以吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姐姐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是清野神</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可以的，都是语文课代表</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阅读理解：请说出本段环境描写的作用是什么？</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;偏爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我同意，大家看看渡边渣男以前的观点</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;脱光了看吗[fn=39][fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我用手机看[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，美姬你搁这助攻呢，干得漂亮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;躺床上看 </p>
`;
        case 156:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;装糊涂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自带嘲讽啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：得不到的永远在骚动
清野：被偏爱的都有恃无恐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻：我坐着看👀</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，死人是没有知觉的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。。超人类了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里指的是不怕两个大小姐吧[fn=46]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这难道说的不是冷淡到伤人的R桑和热情到危险的K桑吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;炼体期圆满了，再往上就应该炼气了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;初步超凡，大概和内功小成，寒暑不侵差不多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你变强了，也会变秃的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;寒暑不侵，常威，还说你不会武功?！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不怕不代表感受不到啊[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快进入传奇体质了，到时候就可以在岩浆里泡澡了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当温度没有高(低)到可以伤害身体时是不会有痛觉的，这与感觉到温度高低并不冲突</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不然烈日冰饮烤肠不是享受不到乐趣了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不怕是一码事，还有没有感觉呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那人生还真是少了许多体验啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;众所周知，死人是没有知觉的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。。超人类了啊</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;顺风湿鞋？</p>
`;
        case 161:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就像康师傅的方便面一样讨厌——一桶不够吃，两桶吃不完</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦的奇妙比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三刷在这里加个书签吧，等渡边和神表白心意的那天会回来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;公园的石板路，一步娘炮，两步拉胯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;隔壁也有类似的梗，xx爱衣和村上讨论纳豆的时候也是好像
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大学食堂的饭，对我来说，半份不够吃，一份多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我靠，这个好早之前的比喻都能呼应，乌鸦NB，永远是我大哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是逼你买两片装</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;久美子[fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦的奇妙比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就像康师傅的方便面一样讨厌——一桶不够吃，两桶吃不完</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是这个比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦，我的超人</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不如阿梓一根p毛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;觉得留到现在的读者应该精神都很强大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果把“一根头发”换成“剪下来的脚趾甲”，会不会更美味？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是渡边，蛐蛐路人（npc），也敢说神的对过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;才德的女子很多，唯独你超过一切。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他们全都腐朽懦弱，他们加起来也比不上你一个</p>
`;
        case 172:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬这是在打助攻？？</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;的大小</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;感觉像美姬是因为渡边和自己一样也撒谎，但清野却不讨厌渡边委屈说的话</p>
`;
        case 175:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;实际上，我们佩服这种性格，但也会敬而远之啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会啊，我就觉得神真的完全没问题。被折服了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“我爱你的灵魂”，渡边相当于这样说，而且凛也清楚，没有比这更好的了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实，身边如果真有清野神这样的人，其实忍受不了待在她身边，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亏死   全订了  看到这实在看不下去了[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是人性和现实，超凡脱俗注定会被平庸之辈孤立，因为嫉妒和不甘，他们所想的不是如何追赶，而是孤立。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要只看lsp这一个标签，不被讨厌的前提是，又帅，又有才华，顺便还有点钱[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不就是lsp吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也是神喜欢渡边的一个理由吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜，渡边，你好温柔[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会啊，我就觉得神真的完全没问题。被折服了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;实际上，我们佩服这种性格，但也会敬而远之啊</p>
`;
        case 176:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边可能从来没想过这俩人之所以曾经渐行渐远不是因为闹了矛盾，而是底层逻辑不相容</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬是凡间的女皇，清野是天上的神明，神是高高在上的，渡边一直尊敬着神考虑着神的想法，但不把神拉入凡间又怎么能让两人和好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬应该只是想做渡边最爱的人吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段话很有意思，其实是摊牌。</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;他更重要</p>
`;
        case 178:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实就是在说，要么你现在说清野是错的，我们和好，如果你还坚持认为她是对的，我们维持现状</p>
`;
        case 181:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻爱改变了的美姬，也爱没有改变的清野。</p>
`;
        case 184:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这句话会不会是暗示美姬已经开始接受凛了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话没有课代表发言吗？</p>
`;
        case 185:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;双飞</p>
`;
        case 186:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;杯 中出 神的影子？[fn=60]</p>
`;
        case 187:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;成为姐妹！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张爱玲说，通向女人内心最近的是yd</p>
`;
        case 189:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看第三遍了，渡边这时已经想好了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边不说在这里就想好了，估计也有个大概了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二刷，留念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开始布局了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三人钢琴表演如何？
渡边坐中间，九条清野左拥右抱，然后用硬实力和配合取胜。
就是渡边容易被九条打死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下老白学家了，虽然我也是。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三  人  乐  队
白  色  相  簿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三个人组个乐队表演</p>
`;
        case 190:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;错误：不用别那么急→不用那么急
传达清野神的话也能出错，看来乌鸦你是个伪信徒呢（抽刀）</p>
`;
        case 193:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;前文提到倒影是怔怔思考的模样，这里倒影消失，表示想到办法了</p>
`;
        case 194:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;反正里开学还早...但是有他母亲的军训</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艹我今天下午开学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有团长那味儿了[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啊，快活啊。反正有大把时光～[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假期总是过得很快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有种冰菓动画最后一集说春天已经来了的感觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当你怎么想的时候离开学就不远了</p>
`;
        case 195:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实渡边的“两个人和好”和雪菜的“三个人永远在一起”有异曲同工之妙，都是渴望收获两份感情的隐晦表现。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最近的日常针不戳啊针不戳，时间缓缓的流动，少男少女随意的交谈，随意的谈心，不担心未来，为什么？因为时间还长着呢！乌鸦对画面的掌控能力很强，感觉一点也没有无聊。反而感觉描绘的场景一一在眼前浮现，啧，如果能动画化就好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;雪白:我想三人行，明明大家可以一起……
东马：名份你的，其余都是我的，三人行？
主角：我选择死亡！
渡边老贼：别慌，抱紧我，看我接下来的表演。[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，一想到本书的进度条余额不足就好难受，不能出第二季吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名有鲁迅那味</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蓄力期</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就很好奇，虽然《我加》比较小众，开头的确有些瑕疵，但说这是一本神作应该都认可吧，但信徒却始终很少</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还是觉得渡边绝对是那种会自我感动的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1111</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祈祷
最特别是她，在所有一切之上是她，我的神，清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不要停下来啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实渡边的“两个人和好”和雪菜的“三个人永远在一起”有异曲同工之妙，都是渴望收获两份感情的隐晦表现。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;月票奉上，请加更，希望你不要不识好歹，不然我就跪下来求你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要三个人不停下脚步，道路就会不断延伸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就没了？就这就这就这？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡了睡了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最近的日常针不戳啊针不戳，时间缓缓的流动，少男少女随意的交谈，随意的谈心，不担心未来，为什么？因为时间还长着呢！乌鸦对画面的掌控能力很强，感觉一点也没有无聊。反而感觉描绘的场景一一在眼前浮现，啧，如果能动画化就好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;舒服了，睡觉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就这，寂寞啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊不够！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要两个人不停下来，修罗场就会不断延伸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。感觉看的好快</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;暴风雨前的宁静！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;氵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;【那就让订阅更多，假如能让乌鸦加更】
【要是你能为他打赏，那也请你为他打赏吧】
【直到他说：“读者，给全订的，能打赏的读者啊，我必须为你加更”】
——以上改编自《了不起的盖茨比》如有雷同纯属巧合[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;寂寞啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只要两个人不停下来，修罗场就会不断延伸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11]啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;晚安了各位，早点睡吧[fn=45][fn=45][fn=45]</p>
`;
default:
			return '';
	}
}
        