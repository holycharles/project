var time1=new Date().getTime();
var simuTime=[time1,time1+20000,time1+40000,time1+60000,time1+80000,time1+100000,time1+120000,time1+140000,];
console.log(simuTime);
var data={
	"timu":[{
		"timuTitle":['20米','30米','40米','50米','60米'],
		"timuSrc":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/timu_img.png",
		"team1Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team1Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"team2Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team2Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"mingxingWin":"0",
		"correctAnswer":"D",
		"myChoice":"A"
	},
	{
		"timuTitle":['20米','30米','40米','50米','60米'],
		"timuSrc":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/timu_img.png",
		"team1Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team1Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"team2Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team2Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"mingxingWin":"0",
		"correctAnswer":"D",
		"myChoice":"A"
	},
	{
		"timuTitle":['20米','30米','40米','50米','60米'],
		"timuSrc":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/timu_img.png",
		"team1Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team1Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"team2Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team2Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"mingxingWin":"0",
		"correctAnswer":"D",
		"myChoice":"A"
	},
	{
		"timuTitle":['20米','30米','40米','50米','60米'],
		"timuSrc":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/timu_img.png",
		"team1Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team1Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"team2Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team2Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"mingxingWin":"0",
		"correctAnswer":"D",
		"myChoice":"A"
	},
	{
		"timuTitle":['20米','30米','40米','50米','60米'],
		"timuSrc":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/timu_img.png",
		"team1Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team1Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"team2Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team2Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"mingxingWin":"0",
		"correctAnswer":"D",
		"myChoice":"A"
	},
	{
		"timuTitle":['20米','30米','40米','50米','60米'],
		"timuSrc":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/timu_img.png",
		"team1Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team1Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"team2Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team2Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"mingxingWin":"0",
		"correctAnswer":"D",
		"myChoice":"A"
	},
	{
		"timuTitle":['20米','30米','40米','50米','60米'],
		"timuSrc":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/timu_img.png",
		"team1Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team1Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"team2Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team2Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"mingxingWin":"0",
		"correctAnswer":"D",
		"myChoice":"A"
	},
	{
		"timuTitle":['20米','30米','40米','50米','60米'],
		"timuSrc":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/timu_img.png",
		"team1Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team1Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"team2Src1":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team1.jpg",
		"team2Src2":"http://1251097942.cdn.myqcloud.com/1251097942/zuiqiang/team2.jpg",
		"mingxingWin":"0",
		"correctAnswer":"D",
		"myChoice":"A"
	}],
	"myInfo":{
		"correctNum":"7",
		"getPrice":"500"
	},
	"winner":"0",
	"latestTime":"2014/10/21 16:06:00"
};