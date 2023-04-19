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
<p>&nbsp;&nbsp;&nbsp;&nbsp;估计揍白胜有富余</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;稀松了亿点点</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一点？</p>
`;
        case 2:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;法国国旗（</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;散了线哈哈哈哈哈</p>
`;
        case 3:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一个矮子强抢的民女，有什么感情？</p>
`;
        case 37:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2023了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;22年11月26，想当初看的时候还是初一吧，看了这么多年小说，混乱在我这，始终能排前五。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022来了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022n刷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年4月5日，星期二，清明节，农历三月初五，现在是22:13</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022.1.24快过年了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2022-1-12了，从当初的追更，到现在的不知道几刷……</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021.12.27</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021-12-17留念（三刷）</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021-12-13</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;18年还好 再稍微过一点19年20年 那可不是开玩笑的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021年10月27日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021年10月26号 BOSCH 老婆怀孕了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时间都去哪啦~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;时光匆匆流去我只在乎你~</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021.08.20</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021年8月17日 N刷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021.8.2 n刷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021.6.21</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021.6.13</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021-6-8。五刷</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021-05-05</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021-4-8</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021，2，18</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2021－12－24 第不知道第几遍看，疫情还要一年。</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020—11—16</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020－10－6在厕所抽烟</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020.8.30😁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020.8.18</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020-8月14日</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020 7 13</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020-6-28</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020年6月，看来看去还是这本好看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020.05.19，出差徐州</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020.03.17</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2020.01.05没啥看的了，一直在书架，回来温习一下，还是那么好看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2019.11.7</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2019.11.06</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2019.9.21</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2019.9.16</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2019年9月5号了，哎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2019年八月四号</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;9012了都</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;19年了都</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2019前来报到</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来吧，顺便捎我回去看看</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;18年最后一个月了 唉</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哎哟 2018啦</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;来吧来吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;现在都8102年了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2018打卡</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2018.08.05</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2018.07.28</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2018.6.27十刷留名，镇江再往前跑跑去，看看今年世界杯冠军是谁</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;正是2018</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2018共朝陈冠希在这里</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;2018年前来报道，我前世是赵云
</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;今年就2018了啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;明年就2018年了</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;
2018</p>
`;
        case 6:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这花荣一号怎么听都像卖化肥的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;小花也是真流氓</p>
`;
        case 70:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不对吧，我记得后面说他俩换弓使，那么这个车把弓的应该是花1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈，前面的都猜错了</p>
`;
        case 7:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;一丈青，母夜叉，母大虫</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp; 呼延大嫂</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;对比了？</p>
`;
        case 39:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;也是心大。万一有问题，这回不去的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不是只能自己开么</p>
`;
        case 71:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这又不是你的错，要怪你要怪你爸妈怎么没生个双胞胎</p>
`;
        case 8:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;怀疑你开车，但是没证据</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;水泊梁山车神-短小强悍</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;梁山车神</p>
`;
        case 40:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处惯例脱了肛的野狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;此处惯例脱了肛的野狗</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;这段理应该是 脱了僵得野狗</p>
`;
        case 12:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那面破旗挂那么高，是露脸啊还是现眼啊？老卢真特么坏。</p>
`;
        case 13:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那么丑还挂那么高</p>
`;
        case 16:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;三国演义的关二爷还是大话西游里的牛魔王！这个估计大家都知道</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;王英的演员在大话里龙套了一个山贼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;大话西游里的一个山贼，同一个人演的，笑起来超可爱</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;不清楚啊</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;那个山贼</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;应该是同一个人演的吧</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;什么意思</p>
`;
        case 48:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;要不把胖子接来，给这二位长长见识</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;吕方记得水平很一般啊</p>
`;
        case 17:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;同样是方天画戟，方杰一个能给吕方郭盛屎打出来</p>
`;
        case 19:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;然后直接成客户了，不亏啊[fn=33]</p>
`;
        case 84:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;哈哈哈哈哈</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;木秀于林…</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;谁让你要挂最高的</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;关公咆哮[fn=58]</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;你有关二爷的饼干</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;还不是你要他们挂高点！</p>
`;
        case 55:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;张青打不过</p>
`;
        case 57:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;宝金宝银打起来啦～</p>
`;
        case 63:
            return `
            <p></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;是花1</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;都叫你强哥了…肯定是二号啊！你见过谁家排行老九的把排行最小的叫哥哥？</p>
`;
default:
			return '';
	}
}
        