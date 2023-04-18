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
<p>&nbsp;&nbsp;&nbsp;&nbsp;描写太真实了</p>
`;
        case 1:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说乡农队就知道了，大名谁记得</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说乡农我倒是知道，你说啥大名</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么读者忘了，你就是水</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;害挺体贴</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们才没忘呢</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;抱歉，一点印象都没，你说乡农我就知道了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们没人忘记好吗 切</p>
`;
        case 34:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;镶字用得好，说明给厕所全贴上都不够，只能是每间镶几块[fn=4]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;最后这句有水平</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也有可能真的在卖二踢脚，私下里那种~~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。。。</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记得有种病 轻症时不好处理 要等严重了才能治</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意思是关系网里就没有乡镇公安这一级的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;意思是事太小了不知道找谁吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;牛逼666</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得这里应该是作者把前面写的离职时间给忘了，潜意识里认为刚辞职两三天</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还寻思吵吵起来了呢，我一看，这不就讨论一下么，有啥的。另外我支持七楼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一看就是一群不是厂矿子弟的在这讨论</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;跟一小说里的细枝末节较啥真啊 累不累？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我觉得，就是小花一下子忘了时间而已。。。jojo还满是bug呢，不也好看的很</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;每次看到这段都有点疑惑，这段算是个BUG吧。都辞职一个多月了，上星期进局子原单位的人还能把你保出来？以邓国师以前进局子的频率，机械厂没早辞了他就算够仁义的了，辞职了还管你？这么好的单位哪还有？介绍给我呗！看了十多遍后想到个解释，邓国师人缘太好，保卫科的人愿意帮他。</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈我也是一样，老婆一个单位的，下班直接一块回家</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那没办法…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虐狗是吧</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等你看到你弟弟你就不这么说了</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还没打起来就被英勇的解放军叔叔击毙了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我倒是想啊，关键国家也不让啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;月圆之夜，紫禁之巅，一剑西来，天外飞仙。</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;***退钱！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;到现在中国男足也没啥可聊的…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看到这个词就觉得张小花往肺管子上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;足球666</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以小强朋友多啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;竟然感觉合辙押韵</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强哥常进去坐坐？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;在一二三环的市中心CBD犯事，好像比在城乡结合部的郊区犯事要高大上了几分 </p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;区县局确实是基层，以前很多地方省厅年轻民警下基层都是在县局工作，这几年才要求必须下到派出所的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确定是局长？真不是所长？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;严格来说，公安局长也是基层……吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;基层公安………的领导</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;基层公安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;局长，基层公安</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看来只要是熟人电话找都能放</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;基层公安……</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差点把尿笑出来</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;插眼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;****挺好看的，从零开始看过一半。。。太长了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书荒，刷完临高启明又来刷混乱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了不下二十遍了，当年第一次看这书的时候小花还在吭哧吭哧的码着呢，刚更新到和金1赌马那段儿。这书写的实在经典，是仅有的三五本能让我每年刷一、两遍的神书。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈和拉裤子还有车里有炸弹一个水平</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这句比前面搞笑</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈多损呐</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神tm再回来找你[fn=4]</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;多希望我年轻时看过这本书</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;凑流氓一来来俩</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;臭流氓</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个喊叫拉裤裆里了，一个要自首。绝了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都很没脸没皮</p>
`;
        case 20:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可太喜欢宝金这种性格了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘老六：院里有树，乃“困”，且是槐树，是人是鬼都难以逃脱，果然是局子必备之风水…………</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段也可乐</p>
`;
        case 23:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是和龙洋洋碰上的是一波吧</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把红日武校并过来吧，学生也一块带过来[fn=32][fn=32][fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;233333</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=47]哪都有你</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你瞧瞧现在哪有别的同志？你嫌慢我还嫌慢呢！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么写实的段落竟然没有评论</p>
`;
default:
			return '';
	}
}
        