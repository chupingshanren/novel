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
<p>&nbsp;&nbsp;&nbsp;&nbsp;尼瑪，看大門的真的來了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;果然，再水就没有经验了。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;能不能再水一次呢？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以再水一次。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;签到水经验</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;签到</p>
`;
        case 69:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦桧好日子到头了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈 笑死了</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那槟榔怎么说？</p>
`;
        case 9:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刚吃完饭，看到夹心饼干就饿了</p>
`;
        case 10:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强说:我想拥有你的猥琐。六爷答曰:你丫的不吃饼干也不比我差！</p>
`;
        case 74:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;错了，是得到app里面有</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;金兵刚南下那会儿秦桧还是主战派呢，估计是看到赵家父子的“精彩”表现心死了，国家没希望了，还是顾自己吧。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实秦桧也出使过金，但是后来就变成投降派了。中间发生了什么，谁也不知道。</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈 这个细节</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;树皮、土观音，没想到还有吃毛的</p>
`;
        case 77:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东北叫挫墙子</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏衣式</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;记住这件衣服，以后要考</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就像你的袜子[fn=31]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉，笑着笑着，眼泪就下来了，苏侯爷真的是太不容易了！！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;笑死</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哥哥若有心，就吃了我这半块饼干😘</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你先吃，对方就会拥有你的能力，也就是使得一手好板砖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;可以可以</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;超级学校霸王，就有</p>
`;
        case 80:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈哈哈哈哈哈太好笑了</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强：六爷，我想当十分钟玉皇大帝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;真让老六吃了 小花估计要无敌几分钟</p>
`;
        case 81:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;细节处理的真好。</p>
`;
        case 18:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我猜以后他会自己吃了坑对手</p>
`;
        case 86:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那可不，光使铜钱了[fn=4]</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;為什麼吃反了會有大問題？變身別人後會失去自己本身的能力？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我在想这玩意能传递么。。。
A吃母面，B吃子面，A传给B，如果在没失效的情况下，B再吃个母面，C吃子面，传给C的是原本的B？还是A传给B的？
不管是哪种感觉好像都能整出些骚操作啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对方先吃错的话也是吃的子面，母面还在，所以没用，复制不了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这个转折真好</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嘿嘿，这还可以拿来阴人呀</p>
`;
        case 90:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;妈耶</p>
`;
        case 28:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;武装讨薪孙悟空</p>
`;
        case 31:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大汉旌节啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;苏武啊</p>
`;
        case 33:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不对，如果是欧阳锋，他会口中念叨：我是天下第一。</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这脑回路</p>
`;
        case 99:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;估计也看出来秦桧不是什么好东西了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那也就是你活在现代，日子过得滋润。你要是穿越到古代皇宫，皇帝拉屎让你用手接着你宁死不屈个试试，死都不能死的舒服。能活的舒服你得感谢来之不易的和平</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然我自己也不太爱卫生，但我不会影响到别人，尤其是成家的男人，所以还是坚决不能接受这样的人住我家里。别说他只是个忠臣，就是皇帝，老子也要把他赶出去！因为年轻时有个同学来拉赞助，晚上回不去就睡我家皮沙发上，结果第二天他走了后，那沙发臭的让人恶心，怎么弄都清除不掉那味道，最后只有把沙发仍了，天啊能想想吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们忠臣，哈哈</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;感觉秦桧好久不出现了。是不是饿死了。</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唱青藏高原的李娜唱过，专辑就是苏武牧羊，第六首酒歌.归来，整张专辑都不错，强推</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唱过，不过我记得我改编的:苏武，老头卖豆腐[fn=17]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没唱过……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小学，还真没唱过。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;渴饮血饥吞毡，牧羊北海边，心存汉社稷，髦落犹未还</p>
`;
        case 42:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;匈奴都被打没了，还出使个屁[fn=14]</p>
`;
        case 108:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;为什么不叫《以前我没得选，现在我只想做个好人》。</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;话说，你不是大汉并肩王么，你在如朕亲临。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;让刘邦来。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;因为汉朝一个皇帝好断袖才能摸他命根子吗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;嬴胖子:呢也要</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘邦:那我来摸一摸</p>
`;
        case 47:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;同问，读第几声才能符合小花这么猥琐的念想[fn=43]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哪个“长”？</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;变出个皇帝怎么样</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;flag么？</p>
`;
        case 58:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈太贱了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你忘了 梁山兄弟海南島之旅</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我呸！你也算个神仙</p>
`;
        case 60:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;高手过招</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;刘老六是真的六，从来就不吃亏。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;无话可说，只能666</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;666</p>
`;
        case 61:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还挺麻溜</p>
`;
default:
			return '';
	}
}
        