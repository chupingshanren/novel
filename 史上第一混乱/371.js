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
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕布拿着粘屎拖把打吕布？</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十八条好汉按说除了单雄信……就没几个讲义气的 都不是好东西 尤其是秦琼……一辈子都在对不起单二爷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宇文成都是什么好东西？这里面描写的他倒像个暖大叔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是还有个裴元庆能接你三锤</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其中有个叫吕小军的[fn=33]</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这下真是关公见秦琼了</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关二哥，秦二哥，单二哥，还有李世民李二哥</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李元霸的饭锅，听话</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; …</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强这校长还是称职的，没自己往后面跑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈！大家都退后！</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;密度最大的金属是什么，给做一对锤子。</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嚯，猴子东海寻兵刃啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戏说不是胡说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两开花两开花</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小六：习惯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是印度的樣子？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;椭圆形桶状物到底是个啥样子？</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家那是天生的</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;温度不够，里面会有更多的碳，铝之类的杂质，所以严格意义上不是纯的实心铁坨子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按这描述一米多高半米粗细，实心铁坨子，怎么可能才400多斤，起码一吨左右了</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是说唐版本的那个李元霸干脆就是神魔级别的人物了，陆地行舟，单刷几十万大军。确定他没有一个坐在黄金马桶上的老爹吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实系对超级系，没辙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看明白了，项羽是正史的实力，吕布是演义实力，所以项羽打不过经过艺术夸张的吕布。李元霸这已经不是艺术夸张了，那是吹牛比成真……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拿真实人物去比这不是找不自在嘛……而且吕布，三国那会可真的是全都是人中之龙啊毕竟不行的都特么打死了，人口降的厉害。真要比起来挺难说的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让我想起了（半小时漫画中国史）里调侃的李玄霸：单臂有四象不过之力，啥意思呢，李玄霸一只手能抗住四只大象。后来他跟孙猴子扳手腕，猴子犯嘀咕：这货是人嘛……李玄霸也迷糊：这猴子劲儿真大……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;个人觉得这本书最大的问题就是项羽的实力问题。项羽再怎么说起码也比吕布强，并且应该不比李元霸差多少。这本书太小看楚霸王了。</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不掉头啊</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈卫宫切嗣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太喜欢这个玄奘了hhh</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这玩意你怎么放车里，而且车里还七个人</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颇有点波波星球那味了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前看的漫画 西行记  唐僧很能打</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贫僧三葬，葬天葬地葬苍生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;之前看的一本书就是唐僧成了斗战胜佛的😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;孙悟空：“我永远忘不了那一天，师傅一记大威天龙砸烂五指山，问我是跟他一起上西天，还是他现在送我上西天……”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前些天，b站看到个视频，说悟空其实是玄奘的心猿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以拓展一本西游了</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把雷神之锤给他比较合适</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;bug了，这锤子能装进车里？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;避雷针要装导线接地的吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这玩意是拿钢铁练出来的，怎么可能绝缘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为他把宇文成都打死了，宇文成都是雷神转世，回归神位后报复把他劈死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;emmm……漫画中国史里也分析过，以李玄霸单手十几吨的力抛四百斤的锤子上天，能给扔到对流层，掉下来的加速及各类力，落地威力不比小男孩，胖子差，李玄霸不死才有鬼……当然也很佩服这些理科生的严谨，所以咱小花以26分那啥来编公式计算确实有点难</p>
`;
default:
			return '';
	}
}
        