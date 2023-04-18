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
<p>&nbsp;&nbsp;&nbsp;&nbsp;你还占便宜了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快了，你结婚就是他孙子了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪有人坐车会吐的。哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你还占着便宜呢[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;项羽:你她妹是在占我便宜吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呸！你也配？！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你便宜占大发了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;占便宜了又</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦都成人干了吧…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;？？？黑寡妇的车还没还呢！</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都快两千了</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也是救你的一课</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;装插销当然还要带锁的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后门是滑动门，插销怎么装？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是真把车门当门了啊</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;建个风力发电站就像发射井了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;后来咱们的民用设施不是就被外国卫星认为是发射井么</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;nb</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也可以举重，基本上垄断大小金牌了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这去工地搬砖起码工资是其他工人几杯好吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是时代的进步</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苦力强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;瞧把人磕碜的，还是可以当运动员拿金牌的嘛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;末法时代</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对一个路人这样自我介绍，厉天闰这辈子可能还叫厉天闰</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妻管严历天润上线</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一段转承启合太帅了</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;生活气息 身临其境</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额，这样好像也是不行的。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一家三口么这不是</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实是聪明孩子！</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;少看了个“你”字，我说怎么怪怪的。。</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给他报名学卡丁车去吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在来看的话还是不要这么做，太危险了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一起死吧</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个孩子110米栏能跑9秒甚至10秒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;咋还反向突破呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这孩子长大后指定有出息</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看起来不大聪明的亚子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉？小花什么时候跑来当老师了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打五折太少了，怎么也要给我打七折？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;上帝给你开了一扇窗，必然会关上一扇门</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三挡速度65……</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;本来都能打准的，跟了师父反倒不行了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你先用意念锁定它，然后出手</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;和小强一样</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;课代表都已经全文默写了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;似曾相识的一句话</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你个金鱼佬[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么这段让我想起了小舞和那个猥琐的不乐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是真金鱼吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也是个伏笔，找老赵要兵那会儿那个宫女……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是萝莉啊</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是什么辈分呀——</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也算塑造人物了，这才是我真正心目中的霸气外露的项羽。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这也算是伏笔，厉害了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意义深远呀</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是……项羽和曹冲都写得好，写活了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;0-0</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=1]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦就不会这么教</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;答应刘邦的关内侯不是反悔了吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就冲这段张数的教育就差不了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;厉害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥</p>
`;
default:
			return '';
	}
}
        