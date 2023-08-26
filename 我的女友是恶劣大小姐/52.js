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
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看见这个章节名，我的内心颤动着，最喜欢的小说还是即将要结束了.难受又欣慰。终点站.我都能想到两个人互怼聊天又忘记时间的感觉。最后我想问一下作者，渡边的清野神已经到账 啥时候到我？?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜要完结了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;午时已到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;仅仅看到题目就浑身一颤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目，要完结了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜要完结了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;woc，翻到这一章的时候刚好手机没电关机了，果然终点站了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看见这个章节名，我的内心颤动着，最喜欢的小说还是即将要结束了.难受又欣慰。终点站.我都能想到两个人互怼聊天又忘记时间的感觉。最后我想问一下作者，渡边的清野神已经到账 啥时候到我？?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了，大的来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来迟了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这题目，好期待，要出招了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;期待进一步，守开云开见月明。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要完结了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冒泡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈的，这个名字吓我一跳，是结局了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们魔鬼吧。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;5</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;3</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1</p>
`;
        case 1:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;黑色的鸡蛋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;h</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;疫情前还去过箱根，不过大涌谷不开 也没吃到温泉蛋</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强风吹拂，推荐！</p>
`;
        case 2:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;在日本，它的人气和瞩目度甚至超过奥运会、世锦赛等国际大赛，与日本职业棒球联赛的总决赛相抗衡，它的“残酷”是出了名的，考验人的身体和精神意志的承受度：在酷寒的天气下在高低差达860米的路段奔跑，上山的区间尤为困难，但最后的数公里的下山区间更是一大问题——一口气给腿部巨大的负荷。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《强风吹拂》这本书讲的就是关于它的故事，很精彩哦！我两天就一口气读完了~

改编的动画也很不错！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;箱根山岳~险天下！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;箱根驿传——</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你喜欢跑步吗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强风吹拂，最后队长的腿折了的那里泪目了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但有强风起，人生不言弃！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强风吹拂！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灰二哥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你喜欢跑步吗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灰二！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《强风吹拂》这本书讲的就是关于它的故事，很精彩哦！我两天就一口气读完了~

改编的动画也很不错！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在日本，它的人气和瞩目度甚至超过奥运会、世锦赛等国际大赛，与日本职业棒球联赛的总决赛相抗衡，它的“残酷”是出了名的，考验人的身体和精神意志的承受度：在酷寒的天气下在高低差达860米的路段奔跑，上山的区间尤为困难，但最后的数公里的下山区间更是一大问题——一口气给腿部巨大的负荷。</p>
`;
        case 3:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;点题了</p>
`;
        case 5:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我还在梦想高二来中国呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是上一章的评论么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？





某人这么没有眼色？
元芳，此事必有蹊跷</p>
`;
        case 134:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;和你聊天就会开心啊，还需要别的理由吗</p>
`;
        case 7:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;自小向往大城市的秋田县女孩儿绫（水川麻美饰），从地方大学毕业后来到东京所经历的二十年人生。她在东京从最底层的工作做起，凭着勤奋、努力以及好运，一步步踏入了光鲜亮丽的时尚行业。她的衣柜里有了越来越多的名牌，搬到了越来越繁华的地段，开始出入更加昂贵的餐厅，甚至连男友也一个接一个地稳步升级</p>
`;
        case -10:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;突然，安静起来了呢，果然大家还是舍不得结局吗。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;奉上人生的第一张月票[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该来个倒计时，最后一张就可以完结撒花了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感谢了个寂寞</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;【】：？</p>
`;
        case 9:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;强风吹拂</p>
`;
        case 137:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我只知道我知道的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不是无所不知，只是刚好知道——羽川翼</p>
`;
        case 11:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;他本</p>
`;
        case 12:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一想到牛奶，仿佛听到了肠鸣…[fn=60]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hso</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来美姬是草莓味的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻含着xx，xx牛奶一股接一股，不间断地从喉咙滑下去</p>
`;
        case 141:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻！你已经没救了，认输吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛比！！！！R桑牛比！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;R桑，唯一的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好羡慕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝世妻管严</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;理不直气也壮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反客为主</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;理直气壮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有些话还是得当面讲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是正经人的渡边</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛比！！！！R桑牛比！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处该有图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻！你已经没救了，认输吧</p>
`;
        case 14:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;法国？难道是政宗君的复仇？</p>
`;
        case 15:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;之前看过一个视频，疫情期间的法国巴黎，墙壁到处都是涂鸦，地上都是垃圾和污水，就是一个大型的垃圾场。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无内鬼，来点乳法笑话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;埃菲尔铁塔那小偷多的吓人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三磁暴步兵我能屠杀巴黎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个说法其实就跟日本躬匠精神一样，同样的说法还有英国人爱在地铁上看书(其实是没有信号)、绅士彬彬有礼；美国自由平等、没有穷人等……都是公知的精神洗脑，当个笑话看看就好[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无内鬼，来点乳法笑话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前看过一个视频，疫情期间的法国巴黎，墙壁到处都是涂鸦，地上都是垃圾和污水，就是一个大型的垃圾场。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浪漫？全是黑绿有什么浪漫的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在去还能赶上快乐黄马甲活动的尾巴？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;法兰西斯坦很浪漫吗？很绿吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小心被人强制掏钱拍照</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hakone～hakone～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老欧洲还是有点问题，治安太差了</p>
`;
        case 144:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很美，像美人，像美国人，想美国人一样会谈判</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;改成“你果然很强”就是二流反派发言，说完话要被主角按着打的那种</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;清野同学，你想的真美[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差点以为将夜的桥段要来了</p>
`;
        case 17:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;桂林山水甲天下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;求生欲极强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和r桑最后的战场[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突发奇想，番外能不能描写去华夏体验文化，去吃美食，去看大熊猫啊</p>
`;
        case 146:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;学姐的话，居然没人！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想的更美</p>
`;
        case 19:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;结成美姬？九条美姬？[fn=39]
</p>
`;
        case 20:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;处女座的沙加</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然我还是最喜欢长发[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦呼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然都是长发及腰，一起嫁可好？</p>
`;
        case 149:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;为什么那么卑微</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好渣哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就离谱🐌</p>
`;
        case 152:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;怂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛可是会读心术啊渡边君</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尽量自然不就是不自然吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个场合明显不合适</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句是谎言，凛知道的</p>
`;
        case 25:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;快进到渡边那个地方。我早就腻了[fn=4]</p>
`;
        case 153:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;谎言</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凛:渡边你这有色心没色胆的笨蛋，你说出口我就答应你了呀[fn=24]</p>
`;
        case 27:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不是姓九条么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西方哪个国家我没去过</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想看去中国玩的番外</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太凡了</p>
`;
        case 155:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;村上:我最大的优点就是诚实[fn=43]</p>
`;
        case 158:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;如针见血</p>
`;
        case 31:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;越是相爱的两人，没渡过那个坎就越笨，当时和凛一起下车去公寓就成了，凛都问了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上不去下不来，卡在这里了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪次电车啊，有没有朋友来给一直养书的科普一下…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲锋的号角</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《清野大小姐想让我告白~~天才们的恋爱头脑战！》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大家觉得谁会先开口表白</p>
`;
        case 32:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一月一</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1960年4月16号下午三点之前，因为你我会记住这一分</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;16号，4月16</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;16号咯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有6天高考了……</p>
`;
        case 160:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;刚撒的谎
</p>
`;
        case 34:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧[fn=58]</p>
`;
        case 35:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;干，我高中的时候老师就是这么点名的！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是有学号是4，顺位第二，喜欢提问的老师都是星期四好人星期二的，然后就天天叫他。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那一个班五十个人，31号之后的岂不是爽歪歪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多么熟悉啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们老师也喜欢这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太草了，像极了我c语言老师上课随意点名。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;套路</p>
`;
        case 163:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;已经委婉的表达：你可以不诚实的向我告白了，我会接受的，哪怕是谎言！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;已经因他而改变了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意思是说即便渡边不诚实清野也喜欢他？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我做人的基本大部分时间都没有了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！直球！</p>
`;
        case 36:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;看来化学老师经常用这方法叫人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和着互相伤害是吧</p>
`;
        case 164:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;那皇军不是白来了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;考研不需要过六级，那我670的分不是白考了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐎的，皇军没来的时候你们就欺负我，皇军来了之后你们还欺负我，那皇军不特么白来了吗！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“那TM太君不是白来了么”</p>
`;
        case 37:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;国井和斋藤掉线多久了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑这么大声 很开心嘛 看来你很喜欢做题啊 你也上来吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;基友好久不见啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国井修也一起上来</p>
`;
        case 38:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我的神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我高中的化学老师也是这样。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是写出下列反应的化学方程式
1.钠在氧气中燃烧
2.钠与氧气在常温下反应
3.钠与水反应
4.氧化钠与水反应
5.过氧化钠与水反应
6.过氧化钠与二氧化碳反应
7.碳酸钠与盐酸反应
9.碳酸氢钠与盐酸反应
10.碳酸氢钠与氢氧化钠反应</p>
`;
        case 166:
            return `
            `;
        case 168:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;必要不充分条件</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诚实很重要，但喜欢不一定要求诚实；
外表很重要，但喜欢不一定只要好看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜狗本狗🐶[fn=4]</p>
`;
        case 42:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：替你做？不太好吧～～😏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太爽了</p>
`;
        case 170:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;论舌战重要性</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狗贼🐶！真的是女友前犯！！</p>
`;
        case 43:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;我妈做菜现状[fn=10]</p>
`;
        case 171:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;稍稍低头才会出现的情况</p>
`;
        case 173:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦一定看了书评吧？一定吧一定吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我想到完成欺骗临时任务的方法了，只需要未来的彻对过去的凛说一句:“我喜欢你。”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人呢
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我咋记得一开始渡边有一个来自系统的任务好像是骗一次清野</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔回收！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如图</p>
`;
        case 174:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;有没有课代表？
我想知道“凛：你那么喜欢我，我也那么喜欢你”在哪一章啊？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你要是不坚持这点，哪有美姬什么事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第一个“不”字要删去吧？</p>
`;
        case 48:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不看了，我浏览器动了[fn=11]</p>
`;
        case 177:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好耶！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在床上扭得跟毛毛虫一样</p>
`;
        case 50:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;按照计算，这抱的是大腿根部和小腹以下的位置吧[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;从后面抱住，全身贴合的感觉特别好。

I'm the king of the world！

抱着你，我就是世界之王！[fn=6][fn=6]</p>
`;
        case 51:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;不得不说，我看成了滚</p>
`;
        case 52:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;就蹭蹭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就亿会儿[fn=31]</p>
`;
        case 180:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;听说来得早能上热评，我试试
吟唱：最特别的是她，在所有一切之上的是她，我的神，清野凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;春林花多媚，春鸟意多哀。春风复多情，吹我罗裳开。——子夜四时歌
这不是春天，但他们的爱情却比春天的美景更美。这不仅仅是旅途终点站，更是他们友情的终点，名为清野凛的特殊少女将在此结束她人生第二段旅途（第一段是童年时代）。爱情开始了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这要是部清野纯爱的这里当结尾多好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;事到如今，只能叫她起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终点亦是起点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用自己和清野演的话剧改变清野，还有这一句经典的到终点站了。作者应该是借鉴了终将成为你的剧情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成败犬了[fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个可以代入终将成为你动漫结局</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要下车了喔[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留个爪，以后书荒时候二刷说不定还能看见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=6]还想要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名的双关，吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想要看if线[fn=12]想要看渡边清野发糖[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊啊啊啊啊 要完本的样子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完后我竟然觉得这章就像碇真嗣在最后几集的列车厢里一样，突然心情就有点郁闷了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后冲刺了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最特别是她
在一切之上是她
我的神
我的夫人
清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，要完结了嘛，希望乌鸦可以多来点if线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还好来的早，不用等截图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;睡前祷告
最特别是她
在所有一切之上是她
我的神
清野凛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦求求了，搞个联动吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;终点站到了，新的旅途才刚刚开始</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难受哇，每天晚上睡觉前的期待[fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果结局无法避免，请务必让它更美一点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊？就这？渡边还没发力呢，清野你就倒了？
未来夜生活堪忧啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老板，多骗点钱啊先</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我果然爱清野爱的要命，清野永远的神！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这本书可以再写下去的，一直写日常我都爱看。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我并不想下车，我狗粮还没吃够吃饱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;列车驶去的方向，是我们永远找不回来的青春</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这本书也到终点了吗，你们的故事还有很多，可我们要下站了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纪念一下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;春林花多媚，春鸟意多哀。春风复多情，吹我罗裳开。——子夜四时歌
这不是春天，但他们的爱情却比春天的美景更美。这不仅仅是旅途终点站，更是他们友情的终点，名为清野凛的特殊少女将在此结束她人生第二段旅途（第一段是童年时代）。爱情开始了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别下车啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们的爱情要到站了，我们读者也要下车了。感谢遇见</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，本书也要到终点站了。但是，我相信乌鸦会在这终点再次飞起、掠过！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请看好吧，我最后的变身</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听说来得早能上热评，我试试
吟唱：最特别的是她，在所有一切之上的是她，我的神，清野凛！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看章名  还以为这一章要说和凛又一次坐地铁  然后抱一起坐到了终点站 猜错了[fn=4][fn=4][fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要表白了，唉，大家准备下车了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再多一站吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;直接叫老婆它不香吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;值得纪念的时刻，多希望这趟列车能开得再久一点。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;nia，清野同学，我好舍不得到终点站呀，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留个念[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一起下车吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不舍啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纪念一下[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12][fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要完本了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=6][fn=6][fn=6]</p>
`;
        case 53:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;这句话的日语，我好像也会说 [fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不…不行，至…至少，别在…这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达咩哟，达咩达咩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千万别高估男性的忍耐度[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达咩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🐮🐮💊🎆了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你越挣扎我越</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达咩达咩达咩哟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看看楼下各位 ，说真的 ，我是真没想到，这年头，懂日语的人有这么多 😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呀买碟～～！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;达咩🙅🏻‍♀️</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;亚麻带，大卖，大卖，亚达幺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哒麦哟哒麦哒麦[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话的日语，我好像也会说 [fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该要没</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留下足迹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;预计此楼应消失一大半</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸君，我兴奋起来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不…不行，至…至少，别在…这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边不可以，你靠的越来越近~~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，行！不，可以！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老师你来还不就想干这个嘛[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;冲冲冲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哒咩(吴京叉手)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧啧啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;至少别在这啊</p>
`;
        case 183:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;赛高！！！！</p>
`;
        case 57:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;叫来一起啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边：岂不更妙</p>
`;
        case 59:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一双笑靥才回面，十万精兵尽倒戈。</p>
`;
        case 61:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;……撑在床沿，姿势正是渡边彻想要的。</p>
`;
        case 63:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;居然都阵亡了，是有什么好东西我错过了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;总感觉都没做措施……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边彻抚摸她白花花的臀部，已经准备就绪。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处一定要去别的地方看看啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前9楼已阵亡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太快了，太快了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里竟然没有评论？</p>
`;
        case 65:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，我还得两个软件倒着看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不差这几千字的钱💰[fn=58][fn=58][fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;分隔符太生硬了，。</p>
`;
        case 66:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;三刷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二刷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;居然没了那么多楼</p>
`;
        case 68:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;防冷涂的蜡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么又黄了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;容光焕发</p>
`;
        case 69:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一木同学为什么哪都有你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逮着一木迫害呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥一直有一木？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国井修大爷都能忘的吗🤺 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁是惠介？我记得还有一个叫什么来着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又是迫害一木葵的一天</p>
`;
        case 73:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一说新干线就想起假面骑士世纪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;you jump,i jump</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我的番外，我的番外 呜呜呜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以渡边穿女装[fn=58]</p>
`;
        case 75:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;吃碗看锅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名想起那张 你来了 我来了 ...那就一起吧的图 .......</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃着碗里的，看着锅里的</p>
`;
        case 76:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;第一眼看到的
……大…（自补）坂…黑鸡……</p>
`;
        case 79:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=12]要结束了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有点小难过，完结，不过故事在这里，完结也可以了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦打算在6月完结[fn=31]</p>
`;
        case 82:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;太假了，爱情有这么伟大？让一个人变化这么大，我不信，除非你送我一个这样的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像极了玄幻小说尾声主角极速升级的样子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我感觉九条和清野凛在一起完全不突兀，好像本来就应该这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二刷我感觉并不突兀啊，美姬已经被改变，老师和学姐的事也解决了，清野从头到尾都在攻略，也是时候收尾了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;九条完全就是作者为了开后宫的工具人嘛。麻衣和小泉从剧情来看注定会和渡边纠缠在一起。假设没有九条，清野可能不会这么大度，毕竟她最讨厌的就是欺骗。最后就算同意都在一起，也是被九条在小船上的极限操作逼到了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花钱看就是为了看评论的骚话[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;算了吧，都快完结了，就算生硬也给画上一个好的句号，不要像声优那本完结了顾虑太多只能画省略号。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;像极了玄幻小说尾声主角极速升级的样子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太假了，爱情有这么伟大？让一个人变化这么大，我不信，除非你送我一个这样的美姬</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬，我的美姬[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬宠渡边都快没边了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和好应该也是实现她们小时候约定的时候了，要嫁给一个人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得妻如此，夫复何求！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬是真的爱渡边啊！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬就这么同意了？虽然很希望这样，但太便宜渡边了吧。不提点要求吗[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你变了狗子</p>
`;
        case 85:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;九条真正认可的只有清野神</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;显而易见的差距，包括实力，背景，甚至剧情量[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她两不算在内</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;她们，呵，不是我的对手！</p>
`;
        case 86:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;麻衣和小泉是颜良文丑
R桑是吕布
k桑是关羽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我不是针对某一个人，我是说在场的各位。。。。</p>
`;
        case 88:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;工具人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看成渡边凛了</p>
`;
        case 91:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;过日子就是得这样啊，轰轰烈烈的是恋情不是婚姻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;与其说是忍让，不如说是相互迁就和磨合</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬已经让步很多了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夫妻之间忍让是很重要的</p>
`;
        case 93:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;其实结合上一章，清野的性格基本是完整地呈现出来了，勇敢（与世界为敌），坚韧（独自以自己的姿态生存至今），倘若没有渡边的话，应该会以“神”的姿态继续，但是“恶魔”渡边将“神”拉回了人间，因此神有了“孤独”以及“渴望”的人性</p>
`;
        case 94:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;明明白白渡边渣</p>
`;
        case 96:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;没有人要求九条美姬是完美的是超越所有人的，只有他们自己这么想，非要在别的戏份里踩别的角色</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那些人完美诠释了什么叫一粉顶十黑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那些人习惯性的为了九条黑别人了，谁戏份多黑谁，前面学姐和青奈都被他们黑过，当狗当习惯了，狗叫声也大</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面那些喊着整本书就清野没有成长，就清野一个人没有为渡边改变不接受其他情人，嘴她自私的，这里不说话了，三观清醒点了么</p>
`;
        case 98:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;系统姬伤心地原地娘化出来找你哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书还有系统呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面那些喊着整本书就清野没有成长，就清野一个人没有为渡边改变不接受其他情人，嘴她自私的，这里不说话了，三观清醒点了么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所有系统文都会这样吗 可怜的工具人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等等，系统姬好像在小泉章里就被攻略了吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;既然系统没用了，不如转让给我？[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统：“终究是错付了........”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果来个强制任务，任务内容，开拓新的后宫，失败惩罚:抹杀。
从全文来看，渡边求生欲是很强的，所以嘛。。。如果不够的话就抹杀自己和当前后宫
这么开展，一定会是个神剧[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统:我dnmd,老子这就没戏份了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统:如果任务后缀换成《抹杀！！！》那将是绝杀，可惜换不得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么任务？哦～原来这还是个系统文</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统姬:终究是……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书还有系统呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这时候系统就需要一个神光棒了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统？什么系统？你还有系统吗？你怎么还记得自己有个系统？[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统姬伤心地原地娘化出来找你哦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能不能写一本看见任务就去做的书[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;系统任务啊，岂可修，这都忘了吗？等我系统娘出来一定大杀四方！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？什么任务？</p>
`;
        case 99:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;一错在没抵挡住麻衣的色诱；二错，或者说失误，小看了任务的鸡贼程度；但本来对老师就很轻浮，也错。对渡边的不满仅此两处</p>
`;
        case 100:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;以前日漫温柔还讲基本法，这十来年就开始离谱。怀疑是故意的来降智受众用的</p>
`;
        case 103:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;渣男的觉悟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哦～冲冲冲！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;先上车在买票，管他呢!爱情就是这么迫不及待</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;互相的爱已经到了可以接受对方一切的地步了，上一章的末尾就能看出，等不及想要拥抱对方，所以凛现在也是这个想法</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渣的明明白白，我喜欢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果断，自私，我喜欢，这TNN的才是真渣男，讨厌日式亚撒西</p>
`;
        case 104:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;而今迈步从头越</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;放飞自我，指渡边和鸦桑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;成为东京帅哥？</p>
`;
        case 105:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;sakura~hia~hia~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我想到生物股长的那首桜🌸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;某辆小田急线曾阻隔了两人在铁道口的回眸</p>
`;
        case 107:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;美姬[fn=24][fn=24][fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是一个占有欲很强的人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渡边说过四人里面他最喜欢凛，但最宠爱的是美姬[fn=24]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啊，这占有欲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莫名爱啊 这种占有欲爱了爱了</p>
`;
        case 114:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;男人[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当然还是恋人啦[fn=31]</p>
`;
        case 117:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;静香真好啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今年的哆啦梦A梦伴我同行2很感人呀，看的我都要泪目了。大赞哆啦[fn=19]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;救救我！拿出什么法宝来帮助我！（大熊音）
Pls:去年剧场版大雄的新恐龙真的很好看！不炒冷饭，求求你们了，看一下吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快把任意门拿出来</p>
`;
        case 120:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;浪漫号？ 是小田急浪漫特快吗</p>
`;
        case 121:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;想到王菲的约定里的那句:仍未忘相约看漫天黄叶远飞</p>
`;
        case 122:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;乌鸦真不是赖床，真的不是，肯定不是，反正不是，一定不是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的是突然想起来的。。。</p>
`;
        case 124:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙我往后看才突然意识到美姬似乎是故意的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;美姬真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诸君。，我又兴奋了，啊…真是美好啊，火车呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;窗户《美姬在睡觉》《清野在看书》《渣男》《路人甲》《路人乙》过道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我猜美姬是装的[fn=26]（肯定是装的）🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;再放送：《美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《美姬在睡觉》</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;世界名画！！！九条美姬在睡觉！</p>
`;
        case 125:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;突然想到这么一句“那是当然了，三个人都能在一起，我也是加把劲骑士”</p>
`;
        case 127:
            return `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;每当看见俳句这个词，我就想到白客他们配音的日和，松尾芭蕉[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;朗诵俳句吧！清野桑！撒由那拉！BOOM!</p>
`;
default:
			return '';
	}
}
        