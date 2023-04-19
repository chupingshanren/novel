$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打上通辽，夺他汗位！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打进罗马，夺他鸟位！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打上东京，夺了鸟位</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋江要说要弄死小强，王矮虎第一个赞成。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;绝对是三姐[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段像小学被老师叫上去回答问题，从过道往台上走一样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这要每人一下，得秃噜皮</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;比喻得太有画面感了</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水浒传，好就好在诏安～投降派的下场</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真的，哪怕从小说来说，招安也是唯一出路！

首先，如果不招安，让方腊造反成功，那人家一个新朝廷能容忍梁山土匪继续割据一方吗？不可能！而且人家挫宋，人家新朝初立，以天下敌一隅，梁山就是被人一鼓荡平的命！

然后是梁山本身的问题，108人排座次，不但没法吸收新血，现有的还不能升迁……除了死还有别的路吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;呵呵</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人家前程本来挺好的被你赚上了山，这会儿了又说再给人谋好前程，糊弄鬼呢。真是又当又立。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卢俊义表示想打人</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;千万别看下面！俩人口吐芬芳！超级破坏心情！
。
。
。
。
。
。
。
。
。
。隔离！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;别往下看评论！有人口吐芬芳，污人眼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是没谁深怪他，而是想深怪他的全都挂在远征路上了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢小花对梁山的描写，总有人说原著怎么怎么样，搞得好像就他自己看过似的，看了网上两篇分析真把自己当大神了，每个人看书肯定有自己的想法，这很正常，但是动不动就来一句没看过原著吧，那还不如直接两开花了呢</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这说的不就是宋大成吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;难道不是很会说相声的那种？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郭德纲？</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁山元老一派，晁盖死了，林冲吴用投靠宋江，公孙胜谁都不帮，阮氏三雄在水军又被宋江的亲信李俊，张顺架空，剩下的几个基本也没话语权了</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴用：因为在一千年以后，世界早已没有我</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实这样表明之后，我作为读者看着也轻松。不是我拉一个踩一个，而是真的有类似小说的作者，非得刻意隐瞒事实，保持所谓神秘感，整些额外剧情，主角配角强行降智，弄幺蛾子，剧情显得生硬，看着着急。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;萧让笑而不语</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你怎么骂人呢？</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是没把小兵儿当人啊。</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;眼一闭一睁 黑板上多了许多咒语符文[fn=60]</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你看这个军师一看就是中暑了，不如把他……</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方腊不是打到杭州就停下来称帝了么，还去过河南呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这时候还是汴京吧？</p>
`;
default:
			return '';
	}
}
        