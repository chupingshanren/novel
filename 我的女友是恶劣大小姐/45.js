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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;黄脸的典韦，白脸的曹操
黑脸的张飞，叫渣渣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来晚了来晚了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黄脸的典韦，白脸的曹操
黑脸的张飞，叫渣渣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;江户的美姬、虾夷的青奈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把北海道改成虾夷吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给麻衣学姐比心啊！[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=7][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;岩手的渡边！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蓝脸的窦尔敦 红脸的关公</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;:-O</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;裂开的渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和中间的盖饭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最早的一次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
`;
        case 128:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;您老怕是没意识到她们的关系</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有点东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好好珍惜，过会可能就没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也喜欢后面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;会玩[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;趴[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还在</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;⊙∀⊙！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好好珍惜，过会可能就没了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开幕雷击</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点东西</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我压在渡边身上[fn=4]</p>
`;
        case 132:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;摄影 lv4</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条趴着、渡边压在身上，这抬手怎么拍的?</p>
`;
        case 133:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我怀疑渡边兑换了摄影技能</p>
`;
        case 6:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;性事之后要注意关怀女方，女性冲顶后最渴望爱的絮语，但男方往往贤者时间特别冷漠，多少亲密关系毁于一旦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样也不一定是后门，这样走前门更有意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才高中啊！[fn=20][fn=20][fn=20]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开快点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚来就要去逛逛，浏览器</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这内容怕是留不到明天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;烤，说，你是不是在我家装了摄像头 ？[fn=29]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天的起点就逛到这里了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我好了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;性事之后要注意关怀女方，女性冲顶后最渴望爱的絮语，但男方往往贤者时间特别冷漠，多少亲密关系毁于一旦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这样也不一定是后门，这样走前门更有意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天我指腚是要走后门了嗷[fn=4]</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在旅馆里，渡边和学姐……</p>
`;
        case 135:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看看这构图，这光影，绝了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画《男朋友摄像头中的漂亮建筑和它前面多余的女人》</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;侧耳倾听</p>
`;
        case 139:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;八幡坂好多电影取景地，一个大斜坡对着大海。</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我操，这原来是个系统文？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你还记得自己有一个系统啊[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这系统甚至不如静流有存在感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等等还有个会更新的商城？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正近二十章都没看见系统俩字</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？系统？？？这书竟然有系统？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统，系统竟然出现了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统是什么东西[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上一次系统出现是在第几章来着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我操，这原来是个系统文？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还不如把系统变为系统姬更有前途</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书有系统？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统：我终于被想起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都忘了有系统了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终于想起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统：不容易啊！我终于上线了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你还记得自己有一个系统啊[fn=31]</p>
`;
        case 13:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;竟然有系统[fn=41]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边不是有四对翅膀吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过如此🍋🍋🍋🍋🍋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我靠，[fn=44]你都插了四对翅膀了，还飞不起来 ？[fn=22]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统是什么，新设定吗[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统姬狂喜:我的回合，抽卡！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想要自由的飞翔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来这本书有系统啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统：用到我了才来找我？渣男！</p>
`;
        case 142:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老师真的太少女了，好爱喔</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真芜湖，起飞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这其实是给美姬和清野的名为渡边彻的系统吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以这系统其实是给美姬的吧[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泰拉瑞亚？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;公主准则？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来神竟是美姬？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要啥来啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总觉得这东西会解锁一些不得了的东西🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个? </p>
`;
        case 16:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不扛米了吗</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边连忙道：“可以可以，太可以了。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呦，麻衣也在呢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给麻衣学姐比心啊！[fn=24]</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;用的好了不是能飞</p>
`;
        case 18:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;非常的淫杏划</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;远离小孩过于真实，家里有个二胎妹妹，手办不放架子上层我都不敢上学。</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;老助攻达人了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虚假的闺蜜：两个都是傲娇，吵架吵个几年，互相争夺同一个男人
真正的闺蜜：无微不至的关心，懂得担当僚机</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;颗颗有泥 谁给你一袋米啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神罗天征，万象天引</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我点了，啥都没有啊[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;点进来根本没有的好吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我点了，怎么没有(# ' n´ )</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差评！看不到更多[fn=47]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日常皮一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;点击查看更多提示         ✘
点击查看更多提示▼      ✔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥我点了没有更多提示啊[fn=47]</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;重力不限？好家伙，小玩具，大杀器</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某一器官？那意思是小渡边变老渡边以后，不能向上飞起来了……</p>
`;
        case 148:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;日常迫害晃子</p>
`;
        case 21:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;别的不说，掀裙子，掀清野神的裙子[fn=58]这不买爆？</p>
`;
        case 22:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;可以倒挂葡萄架了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是可以解锁更多姿……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后你可以给她最爱吃的果冻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷爷奶奶可高兴了，给我爱吃的大嘴巴子</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;她打了一个谜语人[fn=33]</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边已经学会了凛神的读心术了</p>
`;
        case 26:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;给你康康一个大宝贝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当当当当～富婆快乐🏀～(小叮当语气)</p>
`;
        case 154:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;🤦🏻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我快死了</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;魅惑全开！</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;等下，既然人没动，床单虽然重力减轻，但是周边空气也变轻了是不能自然飘起来的，那么，真相只有一个！
渡边在被窝里放了个屁！[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想看看</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;噫~~~为什么一大早给我看这个[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=10][fn=10][fn=10][fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也受不了了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噫！不看，谢谢。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;单身狗的愤怒</p>
`;
        case 162:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看晃子的戏份时我都是代入石原里美演悦子的形象，太像了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嫲纪洗裤袜[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恶心，恶心哪！</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;第一次失重应该很难控制吧，头下脚上也不为过</p>
`;
        case 39:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以是没穿衣服吗。。。</p>
`;
        case 167:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;真好看，还能看多久呢</p>
`;
        case 40:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;当年看大侠风清扬，女主裸身凌波微步诱惑主角，还是挺震撼的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无限立直</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hso</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯？警觉.jpg</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小渡边精神抖擞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剪了就消停了[fn=4]</p>
`;
        case 169:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;又是一个危险章节，看完了早点休息吧各位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷不抢开头，抢不到。爷抢结尾</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;👌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;dd</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她绝无仅有
站在自己坚守的世界里，闪闪发亮
它是特殊的，就像《旧约》里说的，才德的女子很多，唯独你超过一切</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给麻衣学姐比心啊！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别的是她
在一切之上是她
我的神
小泉青奈[fn=64][fn=64][fn=64]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就想问问清野线呢？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看一章少一张</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这，临近大结局清野神反而下线了是什么操作[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是一个危险章节，看完了早点休息吧各位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉短了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！！！根本看不够</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爷不抢开头，抢不到。爷抢结尾</p>
`;
        case 44:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好会哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新地图解锁，可以开车了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玩这么大吗</p>
`;
        case 45:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我懂了，空震是吧？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杰洛特直呼内行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;woc，无重力大概能玩出花啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;woc解锁更多姿势了!</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快  刀  斩  死  结</p>
`;
        case 47:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;经典二人转</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想到成龙演的神话了</p>
`;
        case 49:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;双手是吧，想好往哪掉了不？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿着更有性趣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听你这么说，你很懂哦</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这也太特么易碎了吧[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;易碎品！！！</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;重力球:我裂开了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？这就碎了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;易碎品，轻拿轻放，</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;所以渡边那玩意像针一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么玩意？</p>
`;
        case 64:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我的美姬太可爱了！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实。完全不在意她想要的飞行道具</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前美姬最在意渡边的神秘侧道具，现在更在意渡边这个人</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;才一千，多买一些能搞个浮空岛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我操，重力不限，才1000，这玩意是暗器啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好浪费[fn=49]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个“一次”，很有灵性哟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;愚蠢的乌鸦哟，你说的是使用重力球一次，还是那种一次呢[fn=33]</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;说到她那双脚，实在不由人不爱。她已经有二十多岁了，而那双肥小的脚，还同十
二三岁的小女孩的脚一样。我也曾为她穿过丝袜，所以她那双肥嫩皙白，脚尖很细，后跟很厚的肉脚，时常要作我的幻想的中心。从这一双脚，我能够想出许多离奇的梦境来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;算了去浏览器了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霞之丘诗羽：穿丝袜撩骚？这个我擅长</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！我又好了＾０＾~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今天就看到这里了</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;少来这套考验干部</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一般
就这
不过如此
</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;多来点女武神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《坐地起价》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;臣附议！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么女武神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妙啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好！</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;要穿一起穿，把凛也叫上[fn=4]</p>
`;
        case 80:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈卑微渡边～</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;SSR</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;坂田智代</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新卡？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俺也想看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;樱岛麻衣赛高！</p>
`;
        case 84:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;把粮多收一点</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不过去过一次就真的不想去了[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬满满的独占欲</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;开杠：那这个“我”是谁[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是你的兔女郎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我满奶子也都是你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;男人的嘴，______[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈  正解</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一般我们称呼这种情况叫做，精虫上脑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我满脑子已经是你了
但是众所周知
男人并不用脑子进行思考[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛:懂得都懂</p>
`;
        case 89:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我只是一个路过的卡面来打</p>
`;
        case 92:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;  3度是冷还是热</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本各大城市最高气温排行：
广岛 6000℃
长崎 6000℃
东京 1000℃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京有点热</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有多开</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;二泊三日……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哇，我的日语老师就是函馆的，听说挺漂亮的，想去，但是疫情。。。</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;函馆感觉玩不了三天</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;留给未来！</p>
`;
        case 101:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;紫宫初雪？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;初雪？初血！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鲁初雪[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我敢打赌。如果下雪，青奈绝对得交一血。</p>
`;
        case 102:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这不好？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如图？</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有评论吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;札幌的雪真的很大，11月下雪一直到4月份化雪，中间这几个月基本上鞋是踩不到地面的，都是冰层</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美雪也真白啊。。。当然是很正经</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;食  雪  汉  狂  喜</p>
`;
        case 109:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;因为身前会很累</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;甩起来很疼的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美雪不爱跑步，是有理由的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;动感光波</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跑起来保持不了平衡，容易摔倒</p>
`;
        case 110:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐：没错我是渡边麻衣[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给麻衣学姐比心啊！[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;图来！</p>
`;
        case 112:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;花开啊，几年了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花开伊吕波那种么[fn=33]</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;执子之手，与子偕老</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到斧乃木余接</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边好像也是没表情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;见家长还带着学姐？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给麻衣学姐比心啊！[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没表情不是问题，可以适当把眼睛往上翻一翻[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;脸上没有任何表情</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吃瓜瓜，好凉凉 。。呕</p>
`;
        case 123:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我想到的是赛罗的“想赢我，你还早了两万年”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉在竖中指</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今日辱法(1/1)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“俩！”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;Just 逼，一装就一天一宿……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作为一个男生，剪刀手，手心冲外，放在胸前……是真踏马娘炮啊哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冷知识：这个手势在英国和中指在美国是一个意思（单纯想到，不是说作者不好，求生欲拉满哥哥们）</p>
`;
        case 126:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;确实无法理解</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昨天刚看到女同学这样拍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得了灰指甲，一个传染两！</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;出发，前往埃及</p>
`;
default:
			return '';
	}
}
        