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
<p>&nbsp;&nbsp;&nbsp;&nbsp;阴谋论来讲 郝老板一直栽培小强 整不好这雷老四就是郝老板给小强上位的垫脚石 姓雷的也是膨胀 穷乡僻壤拿出这数还不要欠条 是你能讹得起的？ 要么有所图要么有把握弄回来 他把人当傻子 以为自己行了 也不看看行情 几万块钱有的人往里填命 活该后来被收拾🤔</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为小强第一个客户是荆轲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;26的怨念太深了[fn=4]</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;關二爺武力99，智力也有82</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猪肉✓鸡原来是菜名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;猪肉勾鸡不是内蒙的一道菜么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合着二爷的样子就小强认出来了</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杨子荣献图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搞笑功底深厚啊</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你丫真笋，夺笋啊</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;恭喜你小强，你终于能算对26以下的数了[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥都没这待遇</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;纪实文学?你猜我信不信[fn=15]</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，黑社会不讲无德[fn=33]</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;莱纳，你坐啊！</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武松附体</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强该怎么办呢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;饼干啊</p>
`;
        case 44:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不慌不忙抱头一顿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抱头蹲防</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你的饼呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看电影的感觉 主角脸趴地上 凝视某物 然后爆种</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我第几次看也没猜到是这样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我但凡是第一次看这书   我也猜不到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈看了十几遍，该笑尿还是笑尿。小花拉动了成人纸尿裤产业！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈我在这上课呢哈哈哈哈哈</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉不如哈啤……排面</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来小强之前真不是吹牛</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让你走了么？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强假关威！这句评论我记得n年前写过啊！估计清掉了…</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次遇到这种情节我都会点进来看看有没有“以史论乱”的大学问家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;主要是小花书里按演义写的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;借荆州其实只借了一个南郡，正史上的荆南四郡直接投降刘备了，后面孙权又抢走三个郡，说实话论地盘还真没亏欠，这里主要是为了搞笑，真关羽别说尴尬了没骂江东鼠辈都算他心情好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二爷：你要是想赖账我肯定帮你，这个咱擅长</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘备借荆州，一去不回头</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;借荆州</p>
`;
default:
			return '';
	}
}
        