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
<p>&nbsp;&nbsp;&nbsp;&nbsp;板砖的传承</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不愧是小强的女人哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;扑面而来的画面感</p>
`;
        case 65:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现代人也不一定真的就了解，美国就出过傻小子相当网红出名然后拍视频测试字典的防弹性能最后把自己打死的事情</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;听说过没见过两万五千里</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻这份无畏确实配得上第一刺客的名头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是啊，不怕，心酸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防








剧






透






防





剧




透




</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下面



有



剧透






防





剧

















透




。




。





。


。

 

。



</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻最后就中枪死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻啊</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你马上就感觉到了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;西式幽默</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可见包子对于大家来说真的非常珍贵</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是让包子知道为了就她，死了谁，这辈子真过不去了</p>
`;
        case 72:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年6月来重刷，发现这两个字竟然是一半繁体字一半英文，这样是不是就不会被和谐掉了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;s  b</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧会长，还是估堆呢？</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这里居然没人……</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;屁。倒斗大哥被带进去了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小时候可喜欢李老师的相声</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这老板也是个黑心老板</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五十万呐五十万，一生一世花不完</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鬼佬爱喝冷的，不爱热的[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噗</p>
`;
        case 83:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;粑粑都挤出来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;专（砖）六</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子入侵是不是来源于这个灵感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强八级</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可苦了警察同志了[fn=51]</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;便宜锁就那样 同事钥匙锁更衣柜 用我钥匙一样对开😅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真实</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肠子笑痛了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;自有国情在此</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈
</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;假三环锁太多了，很容易重复，现在钥匙各种形状</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小时候我家房门钥匙就能开我朋友家的门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喝多了走错门，这不就说进就进去了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郑在日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是巧了吗？强哥不就好这口吗</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真是好店啊(ಡωಡ)hiahiahia</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起疯狂的石头里买绳子那一幕</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我什么也不说了哎</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;国情是这么用的吗…假装震怒…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;黑得漂亮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段是重点，过去没考，今年肯定考</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是我就要[fn=21]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要(๑>؂<๑）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真现代</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都多余拿钥匙</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真夺门而入</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这哥们身体挺好的  没给直接压成泥了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意阿就淫</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;功夫开头的既视感啊！！！！</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘华强萨日朗！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萨日朗！</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这花木兰不比迪斯尼那个好</p>
`;
        case 52:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别再说什么“张冰不符合男人们的yy才会被攻击”的屁话了，张冰对应的的另一半是谁？项羽！项羽的女朋友就这个表现？这叫德不配位，懂？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉 张冰最大的问题就是跟现实中大家的老婆对待丈夫们的男女关系问题太一样了 所以造成大家都不太喜欢。。。哪个男人不幻想一个大度的老婆呢？ 不过咱也就看书幻想下吧。。。[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张冰大节不亏的，只是和羽哥理想型有所差距而已。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我寻思她才是正牌女友，她做的一切都是为了维护自己的地位，有错吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎 啊环还是不错的 除了小心眼</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你伤了人质，就把你做成人彘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道不觉得刘邦一直就是一个很社会很具体的人物形象？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;邦子啊，怎么轮到你就这么丢人。。。</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抢职称这个比喻太好笑了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你最好信</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;五人组也没差两天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，傻轲子啊</p>
`;
        case 56:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个梗这么早就有了吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;续进去</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个人还得是刘邦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话安排给刘邦真是恰到好处。这人物塑造绝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这操作溜溜的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;聪明</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;揍丝揍丝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;9494</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是就是</p>
`;
default:
			return '';
	}
}
        