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
<p>&nbsp;&nbsp;&nbsp;&nbsp;乍一看，小李，广花荣</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么没想过给张冰吃药呢？</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弓被做了手脚，打老板啊</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏察哈尔灿 靶上没有箭</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;养由基老是让我想到培养基…</p>
`;
        case 75:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你会后悔的！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;flag已立，真赔50下次你能陪死。哦，对了，还真就差点死了。</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全都射外边了？</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你找一个使暗器的去对付一个用伞的？</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说张清叫mò羽箭还是叫méi羽箭啊？我一开始一直叫mò羽箭，后来仔细想想他是打石子的，远程攻击，像箭一样但没有箭羽....可是méi羽箭不好听</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张清外号不是没羽箭吗？</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不会是女的吧？</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;转生都在这个城市才是槽多无口的地方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈槽点清奇</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俩男人一起看电影不奇怪嘛，我那会最少是三个。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那拧着小学生耳朵在讲题的女人是诸葛亮？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘禅就那么倒霉两辈子都摊上这么个爹？张辽许褚别是穿了俩0和1的篮球服看的泰坦尼克3D吧？</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我就跟你比贱！一阳指+狮吼功：你过来呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强非沈腾演不可</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比贱？让小强上！</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你整个步战，不怕人家整门机炮？</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;用了几个月的老校区？</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是神了，之前段看《蓝色生死恋》，现在他在换台，真是一点都不突兀啊！细节满分</p>
`;
        case 87:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以啊，对面不是说随便你们选什么武器么，我带上一支98K不过份吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;许海峰不服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，也不是不可以</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三观不一样，好朋友也会越走越远。</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多了一世记忆，此人终究非彼人</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;open</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;毕竟魔云金翅不是白叫的，轻功暗器那是相当不错的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧鹏可是能接到庞万春的箭的，只是没想到庞万春会射连珠箭才大意了被射死的</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十几年后，现在射箭馆已经到处都是了</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;替身使者会相互吸引</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;古代的名人都在包头哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你猜六爷谋划多久了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么都往一个地方凑啊。我是苏州宋江啊弟弟们</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;捏裤兜，不是伸进去手捏😂没那么赃</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这药得粘多少细菌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是手汗多的人那就完犊子了</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不，就比贱，和109号代号9527小强比贱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那就跟阮小二比水里憋气</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;射箭这一堆人里最多杨志还是比划两下，其他别想了，不过杨志也最多就是输的好看一点，花荣不在，没人能和庞万春对a的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个主意好👍🏻
旋转跳跃，我闭着眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面太美，我没眼看。跳房子，咋不比跳皮筋而呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在下中国雷网进士愿意挑战小强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跳房子是啥</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说花容在的话还可以比比，但现在……啧啧</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;射击是中国的优势项目，中国在奥运会上的第一枚金牌就是许海峰在射击项目上拿下的。
但是射箭，只能说还有进步空间。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021奥运会15个射击项目，我国在其中的10个射击项目拿了4金牌1银6铜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;韩国很强</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看看，打瞌睡就有人送枕头，这不华荣来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去年法国就有一个植物人被拔管安乐死了，那小表情看得挺揪心，明明不想死却只能眼睁睁看着被拔管</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿嘿</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看标题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;花荣</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉是个伏笔，猜不出来是谁</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=8]</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要干别的，那可是另外的价钱[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是做正当生意的，得加钱</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种公园射箭，套圈的，都是调过的，就是让人射不中</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;箭靶上八成有磁铁</p>
`;
default:
			return '';
	}
}
        