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
<p>&nbsp;&nbsp;&nbsp;&nbsp;听君一席话，如同拨云见日，茅塞顿开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嫑（biao）用这个字的话就好了
</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以减半，当时一斤和现在不一样，都别少，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;擂鼓瓮金锤，单个重八百斤。八棱梅花亮银锤，单个三百斤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灵车漂移</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那是之前，现在你就是胖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花又不老实，你明明是个200斤的胖子</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一开始没拿枪 直接用大树</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张清也算用枪的高手？[fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;历史上那些用枪高手，绝大多数都是用的一般的枪，比较细，管用刺和挑
有极少数是用霸王枪的，这玩意是重武器，都是抡起来砸的，力气差点的根本玩不转</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;臭流氓</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郭盛吕方就是两个样子货，喂了也没用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赛仁贵郭胜也是使戟的好手，只不过吕方学的是吕布，郭胜学的是薛仁贵。不过郭胜比吕方强，他儿子和杨家将后代拜把子了，孙子还是守襄阳的一代巨侠，是神雕侠的领路人……</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说这个一年时间</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼不干吗</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那不至于，开学了还是要烧锅炉的。</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感真强</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面超清晰，跟一漫画里的驴一样
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;爸爸的爸爸叫什么…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;经典xo，大眼珠子原来是从这学的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每一次看到这里都乐，哈哈😄！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;传神的描写。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兔子特别通人性哈哈哈哈</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了
</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是你的马</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感谢你来送🐴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的🐴不要了</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感太强了！</p>
`;
        case 88:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个……骑摩托不是一样打吗</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这说得挺内涵的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这车开得……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说得好</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;即使金庸寫的是真，吳三桂也不是只有一個兒子…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就算是鹿鼎记，吴应熊也只是二儿子啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鹿鼎记都来了[fn=17]</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在曹操征徐州时候，和陈宫捅过曹操菊花</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕布这人，与其说他两面三刀不如说他不知所谓，出身和经历都说明他缺乏野心，不知道自己该干嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为刺董失败后吕布追杀过曹操吗[fn=33][fn=33]</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？啥时候说的，我怎么没看到</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;很好，赵白脸成探测器了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这很人尽其用</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手里的苹果十三 苹果拍照没啥子特点 就是真 人长啥样拍下来就啥样 拍的自己都不敢认</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真™生活</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时候三百万基本等同于爸爸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;300万到一亿十二年。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;华为P30了解下</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在小米cc9Pro 1亿像素了😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花写这书时候的手机[fn=33][fn=33]</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是阿拉伯马呗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;贝克汉姆：？
林书豪：？</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实当年看这段的时候我就觉得这马不行，太娇惯了，再好的马当名贵宠物养也得养废了，赛马还行，根本上不了战场，何况是俩盖压自己时代的绝世猛将比拼呢，这么娇惯的马根本扛不住。</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有动画片那味儿了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兔子：？？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兔子实惨哈哈哈哈哈哈哈哈</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;年代感</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我为烟酒所伤，竟如此憔悴！自今日起，戒色！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出息！我当年戒烟的时候平均每天都能戒10好几次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前天看的《黄蜂》最后一集。女护工在女记者烟里打了针毒药，女记者抽死了。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥，我去给他叠个debuff</p>
`;
default:
			return '';
	}
}
        