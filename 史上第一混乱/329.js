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
<p>&nbsp;&nbsp;&nbsp;&nbsp;大王，杀不杀，大王，杀不杀</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变身落水狗</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看得出作者数学不好，高中生都知道设未知数为xyz，这作者就光x来回用</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这家伙笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王贲不是王X吗</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁说没有枪头就捅不死人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那谁谁谁马上就要被抽成鞋拔子脸了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;鞋拔子☜</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;中正兄就是项羽优柔寡断</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，小花没少看英雄</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽，中正兄？</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;日本人皮套是照着熊来演的</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;请叫我hero。</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说你这么客气干嘛，晾他们一会儿把血囊解了先</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;……找点猪血啊不行嘛或者去找胖子抽点死囚的血</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这群大臣还没小强靠谱呢</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大风，大风，大风</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那时候起点穿越文就这套路了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这情节，经久不衰</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;倒着念</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;《英雄》里的桥段</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;蒋校长表示很欣慰阿！</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这可正中小强下怀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让你系安全带你不系，李XX</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是女儿嫁不出去了吧</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变的够快</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;稍微说一下，没有证据证明吕不韦是嬴政的爹，嬴政是足月才生下来的。如果血统成疑，异人也没那么傻让赵姬生下来给自己戴绿帽……</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都是墙头草</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这画面！笑死我了</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;拒捕</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;踏马的 画面感真的好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是馒头上点的两粒枸杞吗？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么馒头，什么小红点？
把话说清楚</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这比喻真贴切</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不怕射到自己人吗……</p>
`;
default:
			return '';
	}
}
        