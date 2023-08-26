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
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，要复兴了</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你丫的现在知道给我留面子了</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拍了一把算是握过了，流氓表达嫌弃的方法好可爱啊</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;尤其是在爱上不该爱的人后</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天才</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一语成谶</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们太较真儿了[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;红葡萄酒一般不会冰镇，冰镇的一般是白葡萄酒和气泡酒。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该放醒酒器里醒好了再上来。当年不知道，没看出小花的错漏。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没有鱼子酱吗[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;描寫生動形象，好文采</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;勃艮第？裂颅警告</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;认了哥就得管事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金少爷真是跟小强学坏了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我真的好萌小强和金少爷⁄(⁄ ⁄ ⁄ω⁄ ⁄ ⁄)⁄</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面说的挺好，后面就闻到味了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚想说小花还有酒感
神特么方便面味儿</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实有！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还想知道**是啥
</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李师师：果然还是应该远离男人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;（｀Δ´）！是牡丹</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;李师师：明明是牡丹！</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强这张嘴太贫了</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金2你回来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欢迎回来！ ✧⁺⸜(●˙▾˙●)⸝⁺✧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金2欢迎回家[fn=12][fn=12][fn=12][fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;回来啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金2怎么回来的呀。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金二！[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;忍不住了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金2终于回来了！[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目泪目[fn=12]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;留个爪</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;又泪目！前面谁说小花感情描写不到位的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金2回来啦！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欢迎金2！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金2回来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欢迎金二归位</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欢迎回来！ ✧⁺⸜(●˙▾˙●)⸝⁺✧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金2你回来啦</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还是喜欢你桀骜不驯的样子</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想哭了…</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;挺喜欢金二的，终于归位了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是把丢失的那颗药给吃了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是不是泪点不同...六刷到这掉泪第六次</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然意料之外情理之中！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那可是50万！一个月的流水呀！</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑飞</p>
`;
        case 95:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;hhhhh</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;浮夸的演技[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020年再次重温  现在的**套路文真的比不了张小花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;异常生物见闻录也收到了影响，五人组模式</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当年的神书  很多大神都是收受了张小花的影响</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是从细节看出来小花写文功底不错。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俩人的演技都太差了</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;幸会幸会</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;气氛突然哲学</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一开始看成文艺复兴了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哲♂学</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自从混过b站，我就再也不能直视文艺，哲学这些词了</p>
`;
        case 101:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;复兴得就是这么自然而然</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;准备，即将开始混乱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我模仿了一下这个感觉，差点没笑死。</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来伏笔在这。</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欲盖弥彰啊，你小子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=58]</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花小处用词真的绝了</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁山那帮人说起来应该算是处于“死”的状态，还没“生”呢，和金二一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为时间轴倒了所以都平行了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这bug，如果说以一次生死为界，那梁山那帮子人从宋朝到现在就转了一次世？</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是啊！我现在想想还替师师生气呢！也太伤人了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是啊，这小子嘴太毒了，说那么多遍</p>
`;
default:
			return '';
	}
}
        