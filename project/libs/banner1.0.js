;(function($){
	"use strict";
	
	// $(".banner1").banner({
    //     items:所有的图片,           //必传
    //     left:左按钮,                //可选
    //     right:右按钮,               //可选
    //     list:是否需要下面那一排小圆点,       //可选，默认有
    //     autoPlay:是否自动播放,              //可选，默认有自动播放
    //     delayTime:自动播放时,每张图片延迟的时间,      //可选，默认2000
    //     moveTime:每一张图片切换的时间,                //可选，默认300
    //     index:默认显示哪一张图                       //可选，默认为0
    // })
    
//  $(".banner1").banner({
//      items:$(".banner1").find("img"),        //必传
//      left:$(".banner1").find("#left"),       //可选
//      right:$(".banner1").find("#right"),     //可选
//      autoPlay:true,                          //可选，默认有自动播放
//      delayTime:5000,                         //可选，默认2000
//      moveTime:10000,                          //可选，默认300
//      index:0,                                //可选，默认0
//  })
	$.fn.banner = function(options){
		var that = this
		var ban = {};
		ban.list = options.list === false ? false : true;
		ban.autoPlay = options.list === false ? false : true;
		ban.delayTime = options.delayTime || 2000;
		ban.moveTime = options.moveTime || 300;
		
		if(options.index>=0&&options.index<=options.items.length-1){
			ban.index = options.index
		}else if(options.index>options.items.length-1){
			ban.index = options.items.length-1
		}else{
			ban.index = 0;
		}
		ban.beforindex = 0;
		
		ban.init = function(){
			if(!ban.list) return;
			this.ul = $("<ul>");
			var str = "";
//			console.log(this.ul)
			for(var i=0;i<options.items.length;i++){
				str += `<li></li>`
			}
			this.ul.html(str);
			that.append(this.ul);
			this.ul.css({
                width:"40%",
//              lineHeight:"30px",
                display:"flex",
                position:"absolute",
//              margin:0 +"auto",
                left:"31%",
                bottom:"30px",
                margin:0,
                padding:0,
                listStyle:"none",
//              textAlign:"center",
           }).children("li").css({
				opacity:".8",
                margin:"0 5px",
                height:"20px",
                width:"20px",
                border:"1px solid #fee2b1",
                backgroundColor:"#b19666",
                borderRadius:"50%",
            }).eq(ban.index).css({
                backgroundColor:"#ff6c49",
                border:"1px solid #000"
            })
			this.listAction()
		}
		
		ban.listAction = function(){
			var that = this
			this.ul.children("li").hover(function(){
//				console.log(that.index)
//				点击的: $(this).index()
//				当前的: that.index
				if($(this).index()>that.index){
//					console.log("左")
					that.move(1,$(this).index())
					
				}
				if($(this).index()<that.index){
//					console.log("右")
					that.move(-1,$(this).index())
					
				}
				
				that.index = $(this).index()
				
				that.ul.children("li").css({
	            	backgroundColor:"",
					color:""
	            }).eq(that.index).css({
	            	backgroundColor:"#f00",
					color:"#fff"
	            })
			})
		}
		ban.move = function(type,iNow){
//			要走的: this.index
//			要进的: iNow

//			if(type == 1){
//				options.items.eq(this.index).css({
//					left:0
//				}).stop().animate({
//					left:-options.items.eq(0).width()
//				})
//				
//				options.items.eq(iNow).css({
//					left:options.items.eq(0).width()
//				}).stop().animate({
//					left:0
//				})
//			}else if(type == -1){
//				options.items.eq(this.index).css({
//					left:0
//				}).stop().animate({
//					left:options.items.eq(0).width()
//				})
//				
//				options.items.eq(iNow).css({
//					left:-options.items.eq(0).width()
//				}).stop().animate({
//					left:0
//				})
//			}
			// 上一步：end()
            // 父级：parent()            
//          ban.btnMove = function(type){
//          // 要走的：this.beforindex
//          // 要进来：this.index
            
            options.items.eq(this.index).css({
				left:0
			}).stop().animate({
				left:-options.items.eq(0).width()*type
			}).end().eq(iNow).css({
				left:options.items.eq(0).width()*type
			}).stop().animate({
				left:0
			})
				
		}
		ban.btn = function(){
//			console.log(options.left)
			if(!(options.left != undefined&&options.left.length>0&&options.right!=undefined&&options.right.length>0)) return
			options.left.on("click",this.leftClick.bind(this))
			
			options.right.on("click",this.rightClick.bind(this))
		}
		ban.leftClick =function(){
			if(this.index == 0){
				this.index = options.items.length-1;
				this.beforindex= 0
			}else{
				this.index--
				this.beforindex = this.index+1
			}
			this.btnMove(-1)
		}
		ban.rightClick = function(){
			if(this.index == options.items.length-1){
				this.index = 0;
				this.beforindex= options.items.length-1
			}else{
				this.index++
				this.beforindex = this.index-1
			}
			this.btnMove(1)
		}
		ban.btnMove = function(type){
			options.items.eq(this.beforindex).css({
                left:0
            }).stop().animate({
                left:-options.items.eq(0).width() * type
            },this.moveTime).end().eq(this.index).css({
                left:options.items.eq(0).width() * type
            }).stop().animate({
                left:0
            },this.moveTime)
            if(!this.list) return;
            this.ul.children("li").css({
            	backgroundColor:"",
				color:""
            }).eq(this.index).css({
            	backgroundColor:"#f00",
				color:"#fff"
            })   
		}
		ban.autoPlay = function(){
			var _this = this
			if(!ban.autoPlay) return
			this.t = setInterval(()=>{
				this.rightClick()
			},this.delayTime)
			
			that.hover(function(){
				clearInterval(_this.t)
			},function(){
				_this.t = setInterval(()=>{
					_this.rightClick()
				},_this.delayTime)
			})
		}
		
		ban.init()
		ban.btn()
		ban.autoPlay()
	}	
})(jQuery);
