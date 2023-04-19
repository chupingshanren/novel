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
<p>&nbsp;&nbsp;&nbsp;&nbsp;正常一支军队折损10％~20％就很可能溃散了，士气不高或者被吓到了5％就可能直接废了，大部分战斗伤亡大头都是追击造成的，这里正面打掉一半太假了</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;1比60的战损比，个个都是怪物啊</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;步兵从古至今一直是对付非重骑的骑兵冲锋的主力，不管骑兵怎么列阵，步兵只要军心在，结堂堂正正之阵，骑兵就不可能冲的动</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卤莽还行</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国仇家恨，</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜他一家大小三百余口一刀一个血染衣。这种仇恨鞭尸都不解恨</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伍子胥和楚王的仇不是战场对垒的仇，完全两码事</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就因为伍子胥他爹的一句话，被楚王灭门，伍子胥气的一夜白了头，被追兵一路追杀逃到吴国。两个帮他的人为了他当面自杀，他心里得承受多大的压力，这个恨太大了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伍子胥小心眼？我全家要是没了，我岂止鞭尸阿我让你绝姓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;死了的敌人才是好敌人。</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有田下山啦🐶</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金兀术:以后还是叫我完将军吧，颜将军也行，丢不起那人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金兀术：妈的这人都丢到晋朝去了，看这小子这尿性应该也丢到21世纪了……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金兀术：我不要面子吗！</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花，你知道的太多啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书搁这会儿这里不得评论99+？</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑兵连！冲锋！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑兵连！！！杀！！！</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啥也不是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怎么连孩子都不如</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段写的就不太好，小强自己水平不知道吗？去帮项羽拔什么枪，自取其辱？再说项羽不知道小强水平？拔不动鄙视人家干嘛？作为朋友，还刚救了你和你的兄弟们，就这态度？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别给自己找补了 够丢人了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强这脸皮，我估计项羽拿枪捅不破皮呀哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;臭不要脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么删了这么多评论[fn=11]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这脸可真要不得了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有要脸的嘿！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说明小强连小环都不如[fn=33]</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;tmd张麻子 敢杀我的马！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大风起兮云飞扬
威加海内兮归故乡
安得猛士兮守四方</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;江湖豪情，侠胆柔肠</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好身手：指李师师随便跟宋徽宗护卫学了几手防身术打他刚够</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陈老师</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对，就是那个玄谁[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;灌稀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;惯吸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“冠希！”</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是去幼儿园的车，我要下车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;只习惯带脚蹬的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木兰：小强你骑术怎么样？
小强：嘿，带马镫的骑不惯！
木兰：不带马镫的呢？
小强，嘿，不带马镫的骑不惯！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到了秦朝又得吹有马镫的骑不惯</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;开惯了自动挡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是开车呢吧…[fn=58]</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;马：你了不起，你清高</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;写的真好啊…把项羽万人敌的气势全写出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金雳:这也只能算一个！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可怜的🐴</p>
`;
default:
			return '';
	}
}
        