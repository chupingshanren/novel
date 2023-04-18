$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在店里试好了才买的啊，回来为什么还要试[fn=39]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还有好几个包裹几个月没拆[fn=14][fn=14][fn=14]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也是，快递拿回来了也是往鞋柜上一扔，也不拆封</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我是试穿派的～新衣服新鞋买回来剪标签然后务必穿一穿，照照半身镜全身镜～在搭一搭帽子啊裙子啊，然后洗，洗好晾干挂起来过两天穿出去浪～～</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我也买回来就扔地上…枯了</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种想法确实不对，我也很不认同，不过从小强嘴里说出来，那确实合理。因为小强这种没怎么读过书的小流氓，他的认知就该是这样的，他要是能倡导平权那才是真离谱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女强人风评被害</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小流氓嘛，这么想和这么说都很正常，你说小强不尊重女性之类的也没有，你要求平等看待性别可算了吧，现在都没多少做到的，十年前更算了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没关系，只要能堂堂正正凭本事赚到钱，别人怎么说都无所谓，视为卢瑟败犬的狂吠就好，所以女强人是懒得拳这种话的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘慈欣都被喷辱女  小花怕不是会被砸门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;荣格心理学里的Anima和Animus两个阴阳概念，前者为男性潜意识中的女性人格，后者为女性潜意识中的男性人格。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强这人也算流氓中的君子了（笑）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这种想法确实不对，我也很不认同，不过从小强嘴里说出来，那确实合理。因为小强这种没怎么读过书的小流氓，他的认知就该是这样的，他要是能倡导平权那才是真离谱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搁现在这本书绝对会被锤</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这被拳不是活该吗【滑稽脸</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;搁现在，小花你就等着被女拳吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这就属于刻板偏见了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;女强人风评被害</p>
`;
        case 4:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;参加残奥会吧？</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老郝虽然是个别有居心的混蛋，不过在前期对小强也是有点真心实意的好</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈很合理</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陆羽:wdnmd</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卧槽  笑死我了[fn=1]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当时算字数给稿费，所以……你懂的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=5]这一段以前乐死我了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我家有两棵树，一棵是枣树，另一棵也是枣树</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书不知道等了多少年了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快写戏说千年史吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;出道即巅峰，之后的书都没有这本好看了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈，真特么能白话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张小花，传奇的《史上第一混乱》。其他的没这个好看。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太能扯了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;当初看到弹棉花不知道啥意思，现在看应该是司马懿的电影，“弹棉花咯～”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把琴摔碎了后面应该再续一段啊，俞伯牙抱着琴就上保险公司理赔去了……哦，这是郭德纲那版的|･ω･｀)</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;弹棉花哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戏说不是胡说 （狗头）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等开书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满满的求生欲啊！[fn=58][fn=58][fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;戏说千年史</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;快写戏说千年史吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这书不知道等了多少年了</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ybb</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿姆斯特朗回旋加速喷气式阿姆斯特朗炮！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个丁老头？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秀</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;陆羽来了？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;皮</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;污[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有本事你丫别接北京的电话</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;％</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我喜欢拿啤酒杯倒茶喝，感觉很舒服</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2.5升也太过分了</p>
`;
        case 25:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老郝：哈哈，就等你这么说</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一不留神凑俩字[fn=33]</p>
`;
default:
			return '';
	}
}
        