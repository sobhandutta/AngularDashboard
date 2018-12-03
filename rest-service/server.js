var WebSocketServer = require('../ws-master').Server;
var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer();

app.use(express.static(path.join(__dirname, '/public')));

var wss = new WebSocketServer({server: server});
wss.on('connection', function (ws) {
	var statusses = ['active','busy','slow','down'];
	function getRandomInt(min, max) {
		  min = Math.ceil(min);
		  max = Math.floor(max);
		  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
		}
	function getTimeInt() {
		  return new Date().getTime() / 1000;
		}
		
    var id = setInterval(function () {
		var rn = getRandomInt(1,4);
		var data={
			servers:['sun.nii01.com','sun.nii02.com','sun.nii03.com','sun.nii04.com','sun.nii05.com','sun.nii06.com'],
			server_test:{
				"DCS":{
					  "customers":[
						 {
							"processes":[
							   {
								  "hostname":"nar7-node1.nuance.com",
								  "status":"LEADER",
								  "hourstats":[
									 {
										"logType":"WAS",
										"hourStat":{
										   "18030810":{
											  "logfilesread":"3",
											  "rsyncfailed":"0",
											  "logfilesinput":"3",
											  "logfilescopied":"0",
											  "logfilesprocessed":"3",
											  "logfilespostfailed":"0"
										   }
										}
									 }
								  ]
							   }
							],
							"customer":"acme",
							"application":"residential",
							"channel":"ivr"
						 },
						 {
							"customer":"dell",
							"application":"residential",
							"channel":"ivr"
						 }
					  ],
					  "componentName":"DCS",
					  "lastModifiedTime":1520533486061
				   },
			    "KAFKA":{
				  "brokers":[
					 {
						"host":"nar-kafka.nuance.com",
						"port":9092,
						"props":{
						   "STATUS":"RUNNING",
						   "id":"0"
						}
					 }
				  ],
				  "componentName":"KAFKA",
				  "lastModifiedTime":1520533486222
			   }
			},
			server_status:[
			{process:'dcp', servers: [{server:'sun.nii01.com', 
										scanned:getRandomInt(1,4)*40000, 
										processed: getRandomInt(1,4)*30000, 
										queue:getRandomInt(1,4)*10000, 
										pstatus:statusses[getRandomInt(0,4)],
										role:'master',
										trend: [
											{time:'12 am',scanned: 132, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'1 am',scanned: 112, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'2 am',scanned: 112, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'3 am',scanned: 13, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'4 am',scanned: 182, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'5 am',scanned: 122, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'6 am',scanned: 62, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'7 am',scanned: 122, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'8 am',scanned: 54, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'9 am',scanned: 132, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'10 am',scanned: 112, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'11 am',scanned: 85, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'12 pm',scanned: 132, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'1 pm',scanned: 112, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'2 pm',scanned: 112, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'3 pm',scanned: 13, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'4 pm',scanned: 182, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'5 pm',scanned: 122, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'6 pm',scanned: 62, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'7 pm',scanned: 122, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'8 pm',scanned: 54, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'9 pm',scanned: 132, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'10 pm',scanned: 112, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'11 pm',scanned: getRandomInt(1,4)*85, processed: getRandomInt(1,4)*45, queue: getTimeInt()*45}										
										]
										}, 
									  {server:'sun.nii02.com', 
										scanned:getRandomInt(1,4)*40000, 
										processed: getRandomInt(1,4)*30000, 
										queue:getRandomInt(1,4)*10000, 
										pstatus:statusses[getRandomInt(0,4)],
										role:'slave',
										trend: [
											{time:'12 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'1 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'2 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'3 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'4 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'5 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'6 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'7 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'8 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'9 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'10 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'11 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45}										
										]									  }, 
									  {server:'sun.nii03.com', 
										scanned:getRandomInt(1,4)*40000, 
										processed: getRandomInt(1,4)*30000, 
										queue:getRandomInt(1,4)*10000,  
										pstatus:statusses[getRandomInt(0,4)],
										role:'slave',
										trend: [
											{time:'12 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'1 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'2 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'3 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'4 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'5 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'6 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'7 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'8 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'9 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'10 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'11 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45}										
										] }, 
									  {server:'sun.nii04.com', 
										scanned:getRandomInt(1,4)*40000, 
										processed: getRandomInt(1,4)*30000, 
										queue:getRandomInt(1,4)*10000, 
										pstatus:statusses[getRandomInt(0,4)],
										role:'slave',
										trend: [
											{time:'12 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'1 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'2 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'3 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'4 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'5 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'6 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'7 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'8 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'9 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'10 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'11 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45}										
										] }, 
									  {server:'sun.nii05.com', 
										scanned:getRandomInt(1,4)*40000, 
										processed: getRandomInt(1,4)*30000, 
										queue:getRandomInt(1,4)*10000, 
										pstatus:statusses[getRandomInt(0,4)],
										role:'slave',
										trend: [
											{time:'12 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'1 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'2 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'3 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'4 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'5 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'6 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'7 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'8 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'9 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'10 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'11 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45}										
										] } 
									 ]},
			{process:'zookeeper', servers: [{server:'sun.nii01.com', 
											scanned:getRandomInt(1,4)*40000, 
											processed: getRandomInt(1,4)*30000, 
											queue:getRandomInt(1,4)*10000, 
											pstatus:statusses[getRandomInt(0,4)],
										role:'master',
											trend: [
												{time:'12 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'1 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'2 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'3 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'4 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'5 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'6 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'7 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'8 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'9 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'10 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'11 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45}										
										] }
									]},
			{process:'storm', servers: [{server:'sun.nii01.com', 
											scanned:getRandomInt(1,4)*40000, 
											processed: getRandomInt(1,4)*30000, 
											queue:getRandomInt(1,4)*10000, 
											pstatus:statusses[getRandomInt(0,4)],
										    role:'master',
											trend: [
												{time:'12 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'1 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'2 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'3 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'4 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'5 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'6 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'7 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'8 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'9 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'10 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'11 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'12 pm',scanned: 132, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'1 pm',scanned: 112, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'2 pm',scanned: 112, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'3 pm',scanned: 13, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'4 pm',scanned: 182, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'5 pm',scanned: 122, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'6 pm',scanned: 62, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'7 pm',scanned: 122, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'8 pm',scanned: 54, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'9 pm',scanned: 132, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'10 pm',scanned: 112, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'11 pm',scanned: getRandomInt(1,4)*85, processed: getRandomInt(1,4)*45, queue: getTimeInt()*45}										
										] }, 
									    {server:'sun.nii02.com', 
											scanned:getRandomInt(1,4)*40000, 
										processed: getRandomInt(1,4)*30000, 
										queue:getRandomInt(1,4)*10000,  
											pstatus:statusses[getRandomInt(0,4)],
										role:'slave',
											trend: [
												{time:'12 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'1 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'2 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'3 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'4 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'5 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'6 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'7 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'8 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'9 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'10 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
												{time:'11 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45}										
										] }, 
									    {server:'sun.nii04.com', 
										scanned:getRandomInt(1,4)*40000, 
										processed: getRandomInt(1,4)*30000, 
										queue:getRandomInt(1,4)*10000, 
										pstatus:statusses[getRandomInt(0,4)],
										role:'slave',
										trend: [
											{time:'12 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'1 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'2 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'3 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'4 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'5 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'6 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'7 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'8 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'9 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'10 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'11 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45}										
										] }
									]},
			{process:'kafka', servers: [{server:'sun.nii01.com', 
										scanned:getRandomInt(1,4)*40000, 
										processed: getRandomInt(1,4)*30000, 
										queue:getRandomInt(1,4)*10000, 
										pstatus:statusses[getRandomInt(0,4)],
										role:'slave',
										trend: [
											{time:'12 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'1 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'2 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'3 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'4 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'5 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'6 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'7 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'8 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'9 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'10 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'11 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45}										
										] },
									    {server:'sun.nii05.com', 
										scanned:getRandomInt(1,4)*40000, 
										processed: getRandomInt(1,4)*30000, 
										queue:getRandomInt(1,4)*10000,  
										pstatus:statusses[getRandomInt(0,4)],
										role:'master',
										trend: [
											{time:'12 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'1 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'2 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'3 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'4 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'5 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'6 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'7 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'8 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'9 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'10 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'11 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45}										
										] }
									]},
			{process:'sql', servers: [{server:'sun.nii06.com', 
										scanned:getRandomInt(1,4)*40000, 
										processed: getRandomInt(1,4)*30000, 
										queue:getRandomInt(1,4)*10000, 
										pstatus:statusses[getRandomInt(0,4)],
										role:'slave',
										trend: [
											{time:'12 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'1 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'2 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'3 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'4 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'5 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'6 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'7 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'8 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'9 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'10 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45},
											{time:'11 am',scanned: getRandomInt(1,4)*45, processed: getRandomInt(1,4)*45, queue: getRandomInt(1,4)*45}										
										] }
									]}			
		]};
		
    ws.send( JSON.stringify(data), function () { /* ignore errors */ });
	//ws.send(JSON.stringify(process.memoryUsage()), function () { /* ignore errors */ });
  }, 10000);
  console.log('started client interval');
  ws.on('close', function () {
    console.log('stopping client interval');
    clearInterval(id);
  });
});

server.on('request', app);
server.listen(8080, function () {
  console.log('Listening on http://localhost:8080');
});
