$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 64:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一炷香约30分钟。一盏茶约15分钟。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一股烟味……</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧儿有伴儿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老吴从客观来说真挺惨的，事干的里外不是人，吃力不讨好，还背了骂名</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我特么想知道到底是谁传的说白沙杀精，给白沙都干抽抽了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这烟是假的……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我有点想念这个烟了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不摔留着干嘛？帮你弹琴？三根烟，弹哀乐？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞧瞧，都改精白沙了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能烧完不碎的，还得说白沙</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你能打得过吴三桂？</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怕不是炖了</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你马上就要带着五人组加二去砸李自成的场子去</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这都是我的至爱亲朋啊，得加钱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是人才...</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁山“好汉”都接了，还差一个吴三桂?吴三桂这个人还真不好评价。古代没有现在有比较清晰的民族主义意识，李亨还借突厥（反正是外族人）人来平定安史之乱，李自成毕竟逼死了崇祯皇帝，满清又是打着给崇祯报仇的旗帜。只可惜那个时候的唐朝实力还在，能守住基业。明朝回天无力。谁知道吴三桂当时是真投降还是潜伏以待时机。</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为啥是上面</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。按人设，陈近南是不是得算岛派？会造反的吧。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天诛八尺！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那还能比荆轲秦王，项羽刘邦难管？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;突然发现韦小宝除了老婆多，猥琐样，义气，贫嘴，运气，跟小强一样一样的啊</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把兔子画上去了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想象的出来那画面了[fn=35][fn=35]</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这套官话真溜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平生不识陈近南，便称英雄也枉然[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈近南，又名陈咏华，郑成功的军师…</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花的书，没用的情节很少，不用太过注意，名家的书都是草蛇灰线伏延千里。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵白脸适是个伏笔</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画个王境泽[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个斗画写的……叹为观止</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那我家猫上辈子可能是我孩子，大街上人来人往的就冲出来蹭我的腿……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就听说我们镇上几十年前有家人养了只狗，很温顺，从来不凶人，但是有一天见了一个人，跟着那人回家把他家小孩咬死了，然后狗就不见了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 这也太惨了，动物再轮回也是动物</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前段时间有部电影，一条狗的使命</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王希孟，千里江山图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王孟希</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我大概上辈子也是个屠狗的，这辈子从小就不怕狗，凭他什么不栓绳的藏獒黑背之流在我眼中都是小猫咪一般角色，直到我儿子出生才打破了我的不败金身，路上见了泰迪腊肠都吓得一把把儿子抱在空中才稍解双腿打颤之感。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;段景住:王八蛋才活20年呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;狂犬病是绝症，被野生动物流浪猫狗咬了尽快去打狂犬疫苗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;闻什么，话不要说一半嘛[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;樊哙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;提醒：潜伏期20年不可当真，真被咬了得尽快去医院打针</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老是被狗咬可能是吕洞宾？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;详情请见金少炎带他们去宾馆**那一段</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子：呀，那还真犯过病的</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剑圣[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，赵白脸，盖聂？？？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲都气赵白脸不等他了，你想想历史上荆轲在易水旁等的是谁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;叹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;周仓怎么说？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵白脸没跑了</p>
`;
        case 89:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马屁？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;得，卖不上价钱了。</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神仙都怕</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话我从8年前记到现在</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打外战没赢过，打自己人没输过[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴三桂最后是输在年龄太大</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主角效应，这是硬捧呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神特么满头黑线……</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画个滑稽才是真神作（滑稽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是个好想法💡这样就能分清是笑还是愁了</p>
`;
        case 101:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马放了个屁……😂😂😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这他妈随便拿一副去卖，都能买十几亿吧</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这
底
下
一
大
段
的
小
剧
透
属
实
牛
逼
。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里和后面出现了一个小八哥..小bug</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我前面三刷都没书评，搞得现在四刷五刷了才能来评论一番</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可惜了第一人称，好多人就是这个毒走了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎呀，这书要是放到现在，书评得爆炸</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;六位合作，还两位是小孩的底稿和小强的底字哈哈</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;报纸叠的帽子[fn=10]想起了以前刷大白的工人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜真卿的老祖宗</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不怕又被雅贼偷[fn=33]</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看得我好乱啊</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋徽宗最后也来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;归来还是归去？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了来了，经典场景</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个典故看过。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋徽宗当皇帝不行，搞艺术是一把好手</p>
`;
default:
			return '';
	}
}
        