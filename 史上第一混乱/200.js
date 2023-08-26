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
<p>&nbsp;&nbsp;&nbsp;&nbsp;支票揉成一团还能用吗Ծ‸Ծ</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是六星杜松了吧</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虎来！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一杯你开胃，两倍你肾不亏</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这酒怎么样？这酒真是美</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;确实是</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话不多说，直接上图</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;英雄本色里的发哥也拿钞票点烟</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以十五万的支票和自己珍稀的眼泪向曾经的兄弟金二做最后的告别。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感动了自己</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让你装x</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;所以说嘛，你以为发哥拿钞票点烟时为啥要戴墨镜，耍酷？其实就是防熏眼睛[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;丽莎酱你烟拿反了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你点你也哭</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是在难过和曾经的兄弟走到这一步吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;点支票该有多么的心痛啊。。</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;酒吧卖的是五星，这都是六星的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;但是意思完全不一样了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我特别喜欢这句</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文章本天成，妙手偶得之</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;佳句，佳句啊！</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你说的那个君子是不是姓岳啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该往后一仰：什么是君子啊</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来前的火车票谁给报了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这很重要啊！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这不是君子 是公公啊😂</p>
`;
        case 29:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 小马哥哭了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;人民币可以按残损剩余兑换。支票好像不行。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑点</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;师师是个好姑娘</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;二胖子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;骑摩托的吕布要出场了[fn=32]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处画重点</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;卢俊义要是出手，很多剧情都没有意义了，所以设计成这样一个吉祥物角色挺好的。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;玉麒麟為何不上場？盧俊義妥妥的水滸武力第一人（不只算一百單八將，算上遼，金，田，王全部人馬），再加上肯定在前五名的林沖，前十名字的董平，不算飛十也有前二十的張清，明顯被低估的扈三娘，還是很有得打</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胜不过</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高情商</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，要面子啊</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;连xxx都xxx 表示出乎意料 意想不到， 比喻某人做出了与平时不同或者不适合自己身份的行为，在本文中的意思为：一介军师文人因为看到武松都激动的做出了武术高手翻窗越室的动作，在此刻表达了对武松兄弟的深厚感情。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴用为啥要跳窗</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈武术协会？管它舞协还是武协，又或音体美协，真正有本事的隐藏高人都不屑于 入协</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎！哎！哎！老邓你厉害啊，连方腊都干打了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那真是方腊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记住这句话，这大哥真是方腊转世</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还真就是方腊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个！真的是方腊！[fn=7]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透叠的不够高啊，








再加一层</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;防剧透





























放剧透</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;方腊出场了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;伏笔</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这人嘴开过光[fn=10]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是一条还没觉醒的好汉！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那真是方腊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎！哎！哎！老邓你厉害啊，连方腊都干打了！</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一巴掌会还回来的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记住这一巴掌</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小邓长本事了，你方哥哥都敢打了</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武松技高一筹啊</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;念祖村的，怎么了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;新书点题了</p>
`;
        case 62:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我叫方镇江</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看了n遍我才反应过来，方腊镇宋江是吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这名儿取得真损啊哈哈哈</p>
`;
default:
			return '';
	}
}
        