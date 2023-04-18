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
<p>&nbsp;&nbsp;&nbsp;&nbsp;史上第一混乱的中餐（晚）[fn=17]</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这应该是整本书让我最费脑子的地方了</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真快啊，23年了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;22年了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这三人坐沙发是个问题，羽哥坐中间容易把沙发压塌，坐边上容易压得翘起来，嬴胖子坐另一边勉强保持平衡，……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这几章太精彩了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来，盲拍一个</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正喝水 笑得我把鼻涕喷进了水里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;21年还在看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;巅峰之作</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;08年就看了，明天18年十年了，我看了不下十遍。</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真特么扣题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看完这一段我得吃两猪头补补</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;剧本杀，我演我不是我自己但是在演我自己的我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;害，这乱劲儿呀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是真正的第一混乱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太乱了哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这真的是混乱</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水刑官是吧</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙，这顿忙活[fn=26]</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲是大智若愚，也不是装傻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;轲子其实是假痴不癫装疯卖傻大智若愚给其他人（目标人）造成假象错觉，以便乘其不备痛下杀手，结果习惯成自然不经意间在日常生活中也带着这职业病已臻化境真假莫辨了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻，永远滴神！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲本来就一点都不傻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荆轲本来就一点都不傻</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也觉着荆轲说得那个是最正常的发展</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，我二傻最聪明</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说我们强子变富裕了还不忘初心在抽红云？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11]这演技也太差了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;😂</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杀鸡焉用牛刀，买个酒还要霸王拎？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那么大一瓶酒呢，足足五百克重，你拿的动吗</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈真当评委了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥你个群众演员闭嘴啊[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当皇帝的平常都得绷着，演技都锻炼出来了[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说什么大实话[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴哥还是老戏骨</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻总是语出惊人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻，你也是个鬼！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑喷了</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻啊真傻</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我正在上厕所。然后看到这里……emmmmm……真·笑出屎……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该直接问t恤多少钱……</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是应该抓着领子一把举到天上吗～</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对，人越多越好凑[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;额(ΘˍΘ=)</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事儿，挺好看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没事，我愿意看</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最好就是殺死張冰性格了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;項羽喚起張冰的前世，開啟她的雙重人格模式後，自己過幾個月拍拍PG 就消失了，真挺自私的。</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈，包子真是江湖儿女</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这块真的笑死我了，每次看到都忍不住</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起来小学逃课，刚跑到门口碰到班主任，然后告诉她下午我可能头疼，转过来就跑[fn=26]</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画面感太强了 小花动词用的真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈彼此捅着问太可爱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一群损友出主意泡妞的画面[fn=33]</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二傻猜对咧</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;傻子的智慧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看见小花写到小强家楼下的超市，总是觉得那超市是何安忆他们四个妖怪开的……</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是时间线大概是螺纹的，绕着地府，所有有可能秦汉投胎到现代也可能投胎到唐宋，现代人也可能投胎到明清之类</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书里的设定是这样的，形象的来说，地府在中间，然后时间长河是一个圆绕着地府。
时间上不是从古到今连续的，而是相当于平行的，宋代的人死了可能投胎去秦朝，也可能是到现代</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;强人念还能存留几辈子吗，那这强人念也太强了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那么八大天王怎么恢复了？不是也过了千年？</p>
`;
default:
			return '';
	}
}
        