$(function() {
	$('.comment-count').on('click', function() {
		var commentId = $(this).data('comment-id');
		var commentText = getCommentText(commentId);
		$('.right').html(commentText);
	});
});

function getCommentText(commentId) {
	switch(commentId) {

        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;林冲的官应该是梁山军官出身里最低的，宣赞的官不小，可以参加高俅的最高军事会议并且会上能发言推荐关胜。再往下应该就是呼延灼，秦明，关胜，董平和张清</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是上梁山招安的那个官</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;穿着小汗衫，手捧茶壶。我第一反应是古爷……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦明吧</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;夫妻俩厚道人，没咋收拾他</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈怼的好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;把这句话还给小强哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王大人敢和小强叫板了哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花这书里前后呼应的把戏玩得真多，可每次都是很好的笑点[fn=5]</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;满江红！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赵佶是赵二那系的吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是真的祖宗……</p>
`;
        case 78:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哟，老江湖啦[fn=26]</p>
`;
        case 15:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要说宋徽宗是死后才有的庙号，不过这里可以当王太尉和好汉们混久了也跟着这么叫</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;“金”融</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杯酒释兵权，文人掌兵权，军队变得越来越软弱，也是宋太祖遗留的病根啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;太原兵不弱吧，4千人挡了金兵西路军半个多月</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老赵觉得后代子孙丢了自己的脸，殊不知追根溯源就是自己的锅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那也是你老赵兵变上位，杯酒释兵权埋下的隐患</p>
`;
        case 21:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;好家伙 合着您一直没摘下来啊哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一根头盔，哈哈哈😄</p>
`;
        case 85:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;育才人才济济，怎么就没有搞政工工作的呢</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宋朝那会都是把陛下叫官家</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颇有小强风骨……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
`;
        case 88:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那不至于，你还是汉朝刘邦的并肩王呢，理论上刘备见了你都还得磕头。</p>
`;
        case 26:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金军铁浮屠就是靠宋朝百年攒下的步人甲武装起来的</p>
`;
        case 27:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强一来一回得一个白天，王尚书几个小时就能回来，金杯踩到300了吧</p>
`;
        case 91:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;俩眼一闭，爱咋咋地[fn=26]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈</p>
`;
        case 93:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柳下挥太骚</p>
`;
        case 32:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看呐，也别西湖边了，直接西湖底雅座一位～</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如今我们都不用卡了。信用卡到期银行给我发个新卡。APP输入一下卡后仨数字就扔抽屉里了。</p>
`;
        case 36:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大唐最后一次转账</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;安西军最后一次转账</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老司机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;全是科技与狠活</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个明星养300万军队，有点讽刺</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;6天一爽</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不行不行，小视频还没删干净呢，怎么说也得回去加工一下再给你</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，以前的屏蔽还有人猜有人解答，这个大家都知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个字，门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;🚪……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;文藝phone</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;照……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;艳……</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强是玩砖的佟媛是劈砖的  难怪小花把这个角色给自己老婆呢</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;法医出身</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;书头的梗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;赢哥拍照技术是厉害</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就是松软的意思</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我们这也这么说</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这方言真亲切</p>
`;
        case 59:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;以前看的时候可完全没想到生产力的问题…看评论涨姿势啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在你买这么多口粮绝对被查水表</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现代是中国历史上生产力鼎盛时期。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是实话，工厂流水线供应一个市尚且绰绰有余，何况才300万大军呢，而且这还不存在长途运输的问题</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现代社会NB</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现代社会真好</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;徽宗是庙号，皇帝还活着时不可能有人知道。</p>
`;
default:
			return '';
	}
}
        