$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神比喻[fn=4]</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天津人?</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;够狠</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太真实了，我小时候就是这样骑马的</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;红配绿赛狗屁[fn=60]</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;第四爱也不错</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个“”的受用得好</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这怎么行，我腊哥还砌墙呢</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邱少云，黄继光，都是英雄啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说从网文开始到现在只有老鹰做到了日更两万＋吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日更两万字，，，偶也想~！[fn=6]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面都是偶像，到更2w这变成偶“想”，知道你想但是你却不行</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你这TMD是金屋藏蛟啊！[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家藏陈阿娇，你藏几百个大汉？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈可娇？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金屋藏汉</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;帅啊</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼神儿已经拉丝了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国庆节</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么快吗！
还有两天就国庆了！！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚好看到这。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明天星期几？
不记得了，不过我记得明天十月一号</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;几笔人物就栩栩如生的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武松写活了</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花儿啊，你啥时候能把强人更完啊？</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;豪爽</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是重点，高考会看到的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想成维纳斯，还得补上一刀才行</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小六子他们呢，比不过你</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后山是禁地</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;精彩，牛啊！</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这26分的怨念啊……[fn=40]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还有一种大佬是写的太快了无聊，上次监考的时候遇到的[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;26分也是实力啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合着数学得那26分还是蒙的，凭实力是0蛋的选手啊！</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;we need a wall——川普</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国家就是看中老校区的这些人，你给隔离了，那国家白花钱了。</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肤浅！不是我抬杠！这是告诉你们不要以貌取人！内在美胜过一切！其实，这是老司机在说：把灯一关都是张曼玉…何况，灯一关是靠摸的…自己体会…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子会以为这个人精神不好——包子道“什么毛病啊这人”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过包子也好，从一开始她不同意，就没有现在的故事，从她同意之前，没有老张的“洗脑”就没有包子的大方，小强的育才，没有......(我又胡思乱想了）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;反正包子这个女主我喜欢，性格好不做作，现在感觉小说里的女主都没脑子，最近也就一个小鱼比较好。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一直很不理解 为什么把女主写那么丑？是何用意？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是包子也会想：他是不是在看我，然后被我吓到了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时候还没有王者荣耀吧[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那包子会怎么想请问，想那厮肯定在打王者荣耀？？？</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈啊啊啊好可爱！磕死我了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑喷</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔，倒数第几章</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今晚入洞房，借个媳妇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是我大天津人吧，哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;段景住的戏份比林冲都多</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不懂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呦，那么巧，花儿也跑龙套来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花算本书衣一大彩蛋了[fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我和我干杯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花是狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花不是狗吗，出bug了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实就是为了水字数</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本书作者第N次出来跑龙套</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太草率了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和大野熊二一个爱好，每部鲁邦三世必定亲自上场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大眼珠子的书也有他的本体跑龙套！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;活捉张小花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花算本书衣一大彩蛋了[fn=33][fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呦，那么巧，花儿也跑龙套来了</p>
`;
default:
			return '';
	}
}
        