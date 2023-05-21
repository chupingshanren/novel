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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留爪[fn=59]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真快啊，这群狗贼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额哎呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;滴 打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;白日衣衫尽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;白日吟喧🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女装就没了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;辛苦了k桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;攒了好几章，舍不得看了靠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？我朋友想看细节</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以这是穿了多久啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;略过了？我猜有5万字的......</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不然俺分分钟抢走！🐶</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;emmm，这好像是个病句</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;大写的“危”</p>
`;
        case 8:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边圣子[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国井：渡边我可以！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国井：兄弟这辈子没怎么求你，就这一次[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是最漂亮的，魅力多少来着，10好像</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个就很好[fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边厕纸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诶，渡边和村上这两个男人我都想要啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;炮勇竟是我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可恶啊，想想渡边可是突破了人类的颜值，这可是后宫四人组占了便宜。可恶，得想办法让渡边女装然后ntr了她们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也想康康</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种女装大佬？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一木狂喜[fn=36]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边雏子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边圣子[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国井：渡边我可以！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能不能把图片发出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女装大佬</p>
`;
        case 136:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;二号炮塔下？</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿走拿走快拿走！</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;背着青蛙的猪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到索尼我才想起来，我去过啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;背我丫[fn=47]</p>
`;
        case 10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哪天传出去就社死了，我很期待那一天，渡边狗贼[fn=32]</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;修手机请务必找我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给我看看！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈冠希直呼内行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前阵子找东西突然在网盘里发现了当年存的柏芝的照片[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高价回收旧手机 免费以旧换新</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说的这个照片，他正经吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不说了，修手机请务必找我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不装了！我就是想看！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;修手机请务必找我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各种就是也有那种咯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我康康（震声）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冠希哥是你吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有没有阿黑颜的[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给我康康！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给我看看！</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;皮卡丘！</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为啥这也能开车。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，所以说 ，小伙子，凤凰的重量只有梧桐知道</p>
`;
        case 145:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这个动作在后面能看到美姬的翘臀……[fn=31]啊~我好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=22][fn=22][fn=22][fn=22]不过如此，没有不也活着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬啊[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还是很在意啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来是吃渡边背过凛的醋了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑着猪的青蛙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九折？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难得见到这样活泼少女姿态的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=22][fn=22][fn=22][fn=22]不过如此，没有不也活着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜呜美姬我的美姬，太可爱了！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个动作在后面能看到美姬的翘臀……[fn=31]啊~我好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬美姬，我的美姬</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没想到外人竟是渡边彻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我凛的戏份，好耶！</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬天下第一！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都没了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太可爱了，好胜的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬也太好强了[fn=33]，绝不输给败犬～</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧，没有回答问题，而是第一时间问渡边彻在不在，神的直球</p>
`;
        case 150:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;别让我想起伤心的往事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我记得是踩啊[fn=31]骑了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过骑肩这场景让人想到上本书的戛然而止....</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;覆盖掉！</p>
`;
        case 151:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不对劲，总之，有什么地方不对劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚看到的兄弟怎么就没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个夹他正经吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两个一楼两个二楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么有两个一楼？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？这种问题谁受得了呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不对劲，总之，有什么地方不对劲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老舒服了😊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚看到的兄弟怎么就没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怀疑你在开车，但我没证据</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;草，最难消受美人恩</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦用了好多「那天」「那一天」遮掩的词，不对劲，不会是有坑吧？(●—●)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也顺便水一下九条美姬的字数吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么随意的吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“也”吗，美姬终究不敌凛啊[fn=19]</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在轻井泽不是骑过一次吗？</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日记格式？我有点期待完结篇了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;衬衫应该是里面吧</p>
`;
        case 29:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怕是记住了那次在清野那渡边别不开眼珠子，我的美姬，你好爱我[fn=21]</p>
`;
        case 157:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;现在：渡边🐴！驾！
晚上：九条🐴！驾！驾！驾！</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边穿女士裙子。。太可了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬穿男士衬衫。。太可了</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可爱，感觉活了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好可爱的美姬[fn=21]</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神大人快惩罚他！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=58][fn=58][fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;熟悉的味道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说话含沙射影的东京女人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有深入接触过得关系，不值得我渡边大渣男想念，哇哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还笑呢，就你没深入交流了。
你可长点心吧，我的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：你猜猜我这两天干了啥[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶，惩罚渡边吧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出击</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬：渡边渣男2天没联系凛，但给我发了照片，感觉还不错</p>
`;
        case 166:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这一段话，我怎么觉着我看过呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;橡树？史蒂夫，到你了</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;少一句，一点一点喜欢美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实「那么」不是很通顺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看一张少一张</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬の炫耀</p>
`;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这情话真的可以，文艺平缓又不过度煽情，挺好挺好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仿佛永远分离，
　　却又终身相依。
　　这才是伟大的爱情，
　　坚贞就在这里：
　　爱——
　　不仅爱你伟岸的身躯，
　　也爱你坚持的位置，足下的土地。
                          ————《致橡树》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好喜欢美姬啊~~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第二次见面时的那棵树</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝了 乌鸦 新时代的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仿佛永远分离，
　　却又终身相依。
　　这才是伟大的爱情，
　　坚贞就在这里：
　　爱——
　　不仅爱你伟岸的身躯，
　　也爱你坚持的位置，足下的土地。
                          ————《致橡树》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写的真好，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这情话真的可以，文艺平缓又不过度煽情，挺好挺好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一次性看到这，我的糖分已经溢出了[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甜甜甜
我爱美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者真会啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岁月真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正好减肥，每天不是甜的就是酸的，人间不值得[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有一个心愿，要是结局前，渡边能和她们四个大被同眠就好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;读者现状[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬美姬，我的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巧了，我也喜欢美姬[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这周喝奶茶都不用加糖了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;md，我手中的NaOH酸了，我另一只手的HCl甜了[fn=63][fn=63][fn=63]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日份的糖分超标</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;村上春树式比喻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 种子和树都代指的渡边对美姬的爱意～～
期待后续推倒清野～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野就三四章了</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;请务必将这个任务交给我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肯定有人说，让我来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬姐姐，请务必这样惩罚我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一楼说的对</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请务必将这个任务交给我！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我来！prprprprpr</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是脚🦶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女孩子也是有脚气的，不如让我来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肯定有人说，让我来！</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你酸了</p>
`;
        case 46:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这里其实表现出跟清野分享的意思了，可是神有神的坚持</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刀光剑影，摩多摩多</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;分享+嘲讽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！再狠一点 [fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我愿称之为“双杀”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果不能让对手生气，我的成功将毫无意义</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;假山我能理解，假水是什么鬼，怎么假的?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大概是つきじ治作，午餐15000円，晚餐25000円</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐让我对这个词有了深深的偏见[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有了女婿干儿子，能不精神吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以开军舰那么精神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天天听墙角能不精神振奋吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好很有精神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好，很有精神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;彻，很精神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以后更精神</p>
`;
        case 55:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;软饭硬吃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果渡边不坐这个位置，九条和清野又要笑骂，最后压力还是会到他身上；渡边彻本来就不可一世</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边东向坐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人上人渡边</p>
`;
        case 56:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又？九条家是每代都是单穿女吗？</p>
`;
        case 60:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想到了亮黑和磨砂黑的区别……</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬查罢清野上场</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;对学姐来说只是随大流，渣男说的什么她根本没听到，只是看着渣男而已</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，麻衣学姐知道她们三个都查会觉得她也该查，让渡边慢慢说给她听，毕竟对麻衣学姐来说听渡边说话也是件幸福的事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一起出行就不会查岗啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然而麻衣学姐肯定会问一遍，然后幸福地盯着渡边再问一遍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;婚后男人的痛苦</p>
`;
        case 72:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;土豆不就是洋芋吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬今天吃洋芋（）</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;气抖冷，岩手县人民什么时候才能站起来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我走?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但你可以插入提起话题的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岩手县不配吗？[fn=64]</p>
`;
        case 74:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快到站了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接壁咚啊！不然一点都不刺激！╰（‵□′）╯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他说可以上了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是时候深入交流了∽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可是这样就要完结了哎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;推倒？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;完结才解决，果然R桑才是最后的事件</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;去年买的…表？</p>
`;
        case 83:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条买给他的第一只手表</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;感觉换手表在暗示什么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戴另一只手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;醋醋醋</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;师爷可是装糊涂的高手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界第一打马虎眼高手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;青蛙🐸？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捉虫？带了特产？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乾坤大挪移</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;求生欲十分强烈</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;神之宠溺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只见平原一小土坡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狡猾的小狐狸</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快进到抱对吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回乡下过年那段，小莲要吃柿子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前清野骑渡边身上摘柿子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常拱火</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表快来
</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;请让我狡辩……呸！解释！！</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有一个很经典的游戏...同样引用了这句话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能这就是要拽双马尾的原因吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“暗恋是什么？”
“教室的窗外下着大雨，你没看我，我没看雨。”</p>
`;
        case 106:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这算是双关吗</p>
`;
        case 108:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;彻：你可以是🐷</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;找个喜欢的坑埋了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;选好自己心爱的椅子🐶</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为什么这里都能被删改？</p>
`;
        case 111:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;找个泥头车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死，根本撞不死</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男主卒，本书完，完结撒花🌸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按照渣男的体质，应该能手停</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;红红火火恍恍惚惚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡邊應該死不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边remake去异界当人生赢家吗</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;阿咧咧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊咧咧，啊咧咧，啊咧啊咧咧
老司机带带我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赶圩归来啊咧咧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柯南：感觉有人Q我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;配音呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宇琦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柯南直呼内行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊咧咧，啊咧咧，啊咧啊咧咧
老司机带带我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊咧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柯南：这句我熟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊咧咧～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脑补滚筒洗衣机在小兰面前啊咧咧[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿咧咧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊咧咧咧咧咧咧咧咧咧咧咧咧～</p>
`;
        case 119:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别人避之不及的修罗场，原来对于你来说只是锻炼大脑的场所，佩服佩服！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是渣彻的自我修养吗？好家伙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为了不得老年痴呆，献祭了自己的小弟</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;最“风骚”的乐器</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这就是文笔吗？好强啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时间飞逝这本书也快要完结了 唉</p>
`;
default:
			return '';
	}
}
        