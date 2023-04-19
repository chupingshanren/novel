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
<p>&nbsp;&nbsp;&nbsp;&nbsp;带诗人</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;逮……逮……逮……逮🦐妇</p>
`;
        case 128:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想啥呢，历天闫是老婆管得严的那个——这是他老婆给他的零花钱，不是工资</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;08年一天8块真就算还行了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我还行，我一天10块</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;物价是涨得真快啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兄弟萌 泪目打在公屏上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 不得了啊，一天八块，一个月240，这笔巨款要是给我，那我从此就步入小康了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不容易啊，都一天8块了</p>
`;
        case 68:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满嘴跑火车</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 5:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;有，之前下跳棋还用来着</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;胖子这没有吗</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在得改电车</p>
`;
        case 138:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;家父张二河</p>
`;
        case 139:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;郭德纲的《我是艺术家》里的梗</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我都记不清了，小花记性真好</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嗯……他为什么喜欢这个？</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;安道全和他多少个姨太的故事来着？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;他敢动梁山上的女病人？</p>
`;
        case 79:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该问：他喜欢粉蒸的还是红烧的？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神他妈做熟了的</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;焚琴那位快来了。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都特么是典故</p>
`;
        case 82:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小象这么说可还行</p>
`;
        case 146:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;[fn=11][fn=11][fn=11]</p>
`;
        case 149:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强嚯嚯一直有一手的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;阿sir，说好的三年，我做了三年又三年，什么时候是个头啊？</p>
`;
        case 89:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;啧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;gay里gay气的</p>
`;
        case 96:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真会说话，以后记得别说了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没几天了。。。。</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对，就字面意思！尿不湿，兜着呢</p>
`;
        case 161:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十步杀一人可不是说着玩的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;按照小强当诗人得先当过流氓的理论来说，李白绝对是天下第一诗人了，都能追着散打大会四强的段景住打了</p>
`;
        case 98:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怎么说呢 这段儿看起来有点不是滋味儿 家里父母跑过来想看看儿子媳妇 结果都不在家 心里肯定比谁都急</p>
`;
        case 162:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈画面感太强</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个黑，一个白</p>
`;
        case 163:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这么说李白的武力值是介于方振江和脱了力的吕布之间了🤔🤔🤔</p>
`;
        case 105:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈看评论涨姿势</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;十几年了 混乱看了上百遍了 今天看书评才看懂哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;英属让你来你也来不了群岛！哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让你来你也来不了群岛</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都10刷了 不看评论还就忽略过去了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈 每次看都有点儿小惊喜</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还真的刷了那么多次还没发现这个谐音</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看了几遍居然都没发展还有这玄机。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让你来你也来不了群岛</p>
`;
        case 43:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可能是朱元璋？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉宋朝赵总嫌疑最大</p>
`;
        case 107:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈，太贫了</p>
`;
        case 172:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;带诗人带诗人</p>
`;
        case 109:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;看，还的萧楚生……[fn=4]</p>
`;
        case 174:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这话说的，难道以前没干实事？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也不一定，那时候文风盛啊，李白名头又大，若是总去某家店喝酒的话，也会带来广告效应，好酒的、附庸风雅的等等……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花这视角真的独特，奉旨乞讨确实听上去很厉害，但酒家得多恨啊，白吃白喝还不能打骂，坑爹啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿！小花这么讨厌诗人肯定是小时候背诵诗词时被罚过留堂的。</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这章太搞笑了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;窝边草吃窝边草吃窝边草吃窝边草吃窝边草吃窝边草吃窝边草吃窝边草吃窝边草吃窝边草吃窝边草吃窝边草吃窝边草吃窝边草吃窝边草吃窝边草吃窝边草吃窝边草吃咳咳</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;曹冲13岁了，萧不该才8斤</p>
`;
        case 112:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“彻底脱离人伦了”[fn=24][fn=24][fn=24]你是想笑死我好继承我的花呗吗</p>
`;
        case 50:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;各论各的，我管你叫哥，你管我叫爹。[fn=4]</p>
`;
        case 51:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张良是管谋划的，会计是萧何</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;26分的梗啊</p>
`;
        case 117:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三姐，好热情[fn=33]</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一屋之大姐的形象跃然纸上。</p>
`;
default:
			return '';
	}
}
        