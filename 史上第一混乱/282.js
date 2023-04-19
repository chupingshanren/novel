$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太小看现在的吊车了嘛</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第十五章埋的伏笔，第二百五十章才用上，小花在剧情的构思、前后文的呼应和不经意的埋线上真是没谁了。混乱绝对算得上是最优秀的网络写手一辈子才能憋出一本的神书。</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穴。内</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥又不是亲自设计 他顶多是个监工 不会知道具体细节的</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难为赢哥了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子不是还不知道么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的心宽体胖啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超级喜欢这个满口方言的秦胖子</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;盗墓笔记！！！！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一辈一辈的自己流传下来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我翻来覆去思想斗争了一个月，然后做出了一个违背祖宗的决定[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢胖子：歪不可能，参与的人都让饿给洒掉咧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就传了一代……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只祖传的买卖，虽然才一代</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这和打个盗洞有什么区别</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是感谢赢哥  （统一吓） </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感谢您书同文车同轨，感谢您给我们的灵魂注入大一统的执拗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感谢你统一的度量衡！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子笑笑说，么斯么斯。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;该谢，毕竟挖人祖坟，还得让挖自己的坟</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开开玩笑可以，可别真不把专家当专家，你要说这么重要的工程国家派过来的专家是假的你自己都不相信。
你这里看的人家方案可笑无非就是你是上帝视角而已，他要是知道里面的内部结果他自然有别的方案</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过楚霸王挖坟凑军费的事我也不知道从那本书看的，鬼吹灯也吹过卸岭力士就是楚霸王的部队</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;专家嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈 现在[fn=18]</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;定陵啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正常正常，淹死的绝大多数都是会水的。菜鸡自己知道自己菜根本不敢上。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阮家兄弟除外←_←</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;学到了😁</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花和南派三叔？
不好说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花神预言？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西安那里本来就一堆墓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;52分钟前，微博，咸阳机场三期发现各时期古墓葬3500余处，正在发掘[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们受过专业训练</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;早晨出门，围墙写着西安地铁，下午回家，这些中国考古</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西安到处都是墓。。。</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是的话别说一个机场，一个县也给你翻了[fn=33]</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姓赵。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼下的自娱自乐玩得不亦乐乎哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没逼数咧，就冲这个赢字，还不好好保护下来？这可比九代单传珍贵多了</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥万代</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呜呜呜想念赢胖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透












哎呀，又看本章说掉坑里了，烦
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额最细焊的赢哥咧！这就没戏份啦？那有好多章都要摸得意思哩！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段有点催泪</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实强子有钱了 ，当年小霸王也不便宜，psp和我一年的，当初我表哥买psp花了一两千，大表哥买小霸王总共花了五百好像。[fn=11]等我买就是ns了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么没看出伤感来？</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吃不吃的，反正也就一年活头了</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打死你也不能把嬴同志踢出史册</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿越到秦朝给胖子个地球仪，他能把地球打穿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两人分别是千古循环的开启和终结。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要说猛还是教员猛，国之将亡外有强敌环伺内有军阀交击，打出一片天之后对外伐交善谋，对内开蒙启智，不说时代的局限性，光是个人能力嬴政就不如教员</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千古第一，唯一能力压主席一头的伟人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;统一一哈，统一一哈。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿越到秦朝给胖子个地球仪，他能把地球打穿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我一直认为  如果当年亚历山大打到秦朝  那么亚欧大陆将只有一种文字  一种度量 一种文化！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打死你也不能把嬴同志踢出史册</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;心疼我赢胖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈.這句有意思
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
default:
			return '';
	}
}
        