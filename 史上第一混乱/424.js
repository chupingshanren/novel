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
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈 标题上线了</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话太符合邦子的人设了 </p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强的肾体怕是遭不住</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句话……</p>
`;
        case 66:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子能抑郁。。。一个白天被打青了肩膀晚上想吃馄饨的主儿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;产前抑郁好像真的有…吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;车上人可能以为我神经病</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈怎么能叫凤姐，不吉利</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等包子 生了咱 再说</p>
`;
        case 67:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;去找胖子吧，秦国户口，还是咸阳市区的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;包子太可爱了</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦50多才称帝的吧？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妹子不妹子的不重要，主要是想找人说话</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;楼上科普的这些小花应该是不知道的，不过也可以理解为刘邦来现代以后知道的，为了体现大度特地加上的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦那时候也没有“罔替”的说法... 世袭就是世袭，多少代不变的，所以不需要加个“罔替”。
直到刘彻搞出推恩令之后，世袭一代比一代爵位小，为了加恩才加了个补丁，叫“世袭罔替”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那还并什么肩啊。。。儿子跟叔伯老子并肩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要是二十多个并肩王，还有你什么事啊？</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这台词不愧是一起摸爬滚打五六年的狗男女。</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个真的可以有，路上遇到另外的穿越者，就更加混乱了[fn=32][fn=32]</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;板砖是怎么送进去的</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;原来我第一次知道庚新是在小花这里</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;昏天又暗地忍不住的流星烫不伤一颗死心</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梦中的梦中</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快刀斩乱麻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然而这里用的是任贤齐的歌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;厉害了，2012年播出的《隋唐英雄》主题曲中，就有这一句歌词，张卫健唱的真英雄，只改了一个字。</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皇帝和盗版女商人也有真感情，不能歧视他们</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真有感情</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这特么肾都漏了吧。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那还睡不睡了？？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大汉第一起夜家</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦54岁当皇帝，当了8年皇帝62岁才死，所以现在的刘邦其实比在现代那会年轻8岁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=31]小时候起夜，长大了就没事了。上清内炼法，就是好（育才宣传片同款大门牙和大拇指）[fn=35]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;长这么大我好像从没起过夜。。睡得太死了</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;肾虚，有时是在过度劳累之后</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戚夫人很惨的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我怎么有种凤凤和吕后很般配的感觉【错乱】</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来了也会成为第二个戚夫人……</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好的稳婆还是很厉害的。。。当然如果必须剖腹产的肯定是现在好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈又黑轲子</p>
`;
        case 30:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你现在去汉武帝那会，让司马迁给这段加上。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈神他妈猪肉没吃上</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是那也是个大坎啊生个孩子就是过一次鬼门关 孩子还不一定能活下来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;进步的太快了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯，说得有理</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;详情请参考戚夫人，虽然凤凤没她能作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还大战什么啊，凤凤搁这儿无依无靠的，人又大气，是个重事业轻感情的，但人心又比吕后好……收编了吧吕姐，难得有个懂你又暖心的，然后，嘿嘿嘿嘿……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;倒是真有，问题人那倒爷是倒飞船机甲的，土著皇后虽然有个修仙娘家但很明显打不过，关键是那书有男角没男主角</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈这个题材确实有意思</p>
`;
default:
			return '';
	}
}
        