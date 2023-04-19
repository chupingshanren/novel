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
<p>&nbsp;&nbsp;&nbsp;&nbsp;这一章也太多了点</p>
`;
        case 129:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差点……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;野狗专指刘老六</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虚晃一枪，骗过刘老六</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差点儿第六次</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哼哼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;划重点，此处是野狗！</p>
`;
        case 131:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;欧洲：6</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;.....秦始皇打跑了匈奴去了欧洲，汉武帝打跑了匈奴去了欧洲，曹操打跑了匈奴去了欧洲，花木兰打跑了匈奴去了欧洲。。。。欧洲招谁惹谁了。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;匈牙利……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不管是不是項羽打的，柔然人後來真的去了歐洲</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;作者早就标明了啊兄弟，别tm乱杠</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;柔然和匈奴也不是一回事啊</p>
`;
        case 132:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王昭君那个单于？</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果包子屏保打开，确实更吓人！用柯子的话说：一个小人儿飞过来了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;如果是郝仁的pDA那就自己飞回来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;下次从铠甲上抠几片甲页biu过去就行</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;噗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;就跟一些老人家玩手机，喜欢放些孙子，孙女的照片是吧，大个你够了</p>
`;
        case 134:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;100（一百）实在是太欠了[fn=33]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;印度人？</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;合着十分钟就到了</p>
`;
        case 73:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;泪目了……</p>
`;
        case 11:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你们又开挂啊</p>
`;
        case 76:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;银河系运动会也不知道啥时候开</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;东京奥运会啥前儿开不知道</p>
`;
        case 14:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;天拱星趁机又拱了拱火</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;微操大师</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;给了几点吴用的建议</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴用给了六点建议……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吴用凑热闹专业户嘿</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;秦良玉：“要不看看明末江山谁给撑着？”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;老朱嘴真毒</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你惨了😂😂😂</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;两米的弹簧哈哈哈哈</p>
`;
        case 22:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打的不是颜景生而是育才的电话  不然打回来的时候小强怎么会不知道是谁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我看了九年的书，还有这种细节没挖出来，不够格啊。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜可是Y开头，通讯录贼后面，第一个打给他嘿嘿嘿</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;n刷才发现第一个电话是打给他啊</p>
`;
        case 24:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;史上最忙穿越者</p>
`;
        case 91:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没几个能比你还怂的</p>
`;
        case 97:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;耸肩膀都看得见，这视力超群啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;姚明在摩托车把上委屈的掰手指头。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;调档，憋油门</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;画个圈圈诅咒你</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;兔子</p>
`;
        case 35:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;臭表脸[fn=8]</p>
`;
        case 101:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不过内部比的话，邦子确实比着他老婆还差了一个level</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强这话说的就不对了，要论阴险谁能比过邦子跟他老婆啊……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我歧视我自己</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;喂喂喂凭啥形容词差这么多啊(ಡωಡ)</p>
`;
        case 38:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这是走心了？</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;说不准小强上天后还真搞了个翻天印</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;想起刘老六传奇里的武器了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小强翻天印</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处应有评论</p>
`;
        case 41:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你先比[fn=8]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;虽然没确认，但是二爷也说过眼镜跟周瑜的确像</p>
`;
        case 105:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;唉…真有点不是滋味</p>
`;
        case 45:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;没什么印象，第一个就给人家打？</p>
`;
        case 46:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;平凡而伟大</p>
`;
        case 49:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;颜景生  眼镜生</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也不高啊</p>
`;
        case 113:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;百万军中取上将首级如探囊取物，反掌观纹，这才叫霸气</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这才是能说出“大丈夫生当如是”的西楚霸王</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怪不得死亡人数51，好家伙搁这儿凑整呢</p>
`;
        case 53:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;前面一直在说小心，现在又乱来，说实话后期战争相关的都写的太儿戏了，只能看下段子</p>
`;
        case 117:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那你就是第二位只有一个老婆的皇帝，还是第一个有个很丑的老婆的皇帝</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;差不多 估摸着要当了 是历史上第二位 只有一个老婆的</p>
`;
        case 54:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;结果老大哥的督察队都是第一个上</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一战时的英法联军平均每天枪毙一百以上</p>
`;
        case 121:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;右臂变得更有力量了！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;等着吧 女人生完孩子 男人就会忘特来越胖</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;羽哥那不得是64块腹肌?</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;其实从战斗角度来讲，八块腹肌也比不上膀大腰圆的将军肚</p>
`;
        case 122:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杨过啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;杨过哈哈</p>
`;
        case 124:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;我可以理解为之前的是伏笔吗</p>
`;
        case 125:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诺基亚啊！该有多大力啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这要是用三星……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;移动给你多少广告费？我电信**给双倍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诺基亚。。。。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;神tm霸王别机</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈，霸王别机，果然书评比正文好看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;特么的这也算别了机了😂😂😂😂😂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;手机烂了卡还能用嘛，得回收</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;霸王一怒为“别机”</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三楼睡滴耗哇，钥匙丧星那依后就莫匈奴咧！</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这要是用三星……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要死了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;诺基亚啊！该有多大力啊</p>
`;
default:
			return '';
	}
}
        