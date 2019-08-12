;(function($){
//	轮播图
	$(".lunbo").banner({
        items:$(".lunbo").find("img"),   
        left:$(".lunbo").find(".left"),  
        right:$(".lunbo").find(".right"), 
        list:true,
        autoPlay:true,                     
        delayTime:2000,                     
        moveTime:200,                       
        index:0,                            
   })
//登陆注册
	var msg = localStorage.getItem("loginUser");
	if(msg){
	    $(".p1").hide();
	    $(".p2").show();
	    $(".p2").find("span").html(JSON.parse(msg).user);
	    $(".goo").on("click",function(){
	    $(this).attr("href","car.html")
	    })
	}else{
	    $(".p1").show();
	    $(".p2").hide();
	    $(".goo").on("click",function(){
	    	console.log(1)
	    	$(this).attr("href","login.html")
	    })
	}
	$(".p2").find("a").click(function(){
		location.reload()
		$(".p1").show();
		$(".p2").hide();
	    localStorage.removeItem("loginUser");
	    $(".goo").attr("href","login.html")
	})
	
	class List{
		constructor(){
			this.url = "http://localhost/two/project/data/goods.json";
			this.list = document.querySelector("#list");
			this.left = document.getElementById("btnL");
			this.right = document.getElementById("btnR");
			this.page = document.getElementById("page");
			this.index = 0;
			this.num = 5
			this.load()
			this.addEvent()
		}
		addEvent(){
			var that = this
			this.list.addEventListener("click",function(eve){
				var e = eve || window.event
				var target = e.target || e.srcElement
				if(e.target.className == "btn"){
					that.id = e.target.parentNode.parentNode.getAttribute("qwe");
					that.setCookie()
				}
			})
			this.left.onclick = function(){
				that.changeIndex(0)					
			}
			this.right.onclick = function(){
				that.changeIndex(1)
			}
		}
		setCookie(){
//				console.log(this.id)
			// S1.规划数据的格式
            // 同一个商品点击多次
            // {id:this.id,num:4}
            // 不同的商品点击多次
            // 只有一条cookie，保存了所有商品
            // [{id:this.id,num:2},{id:this.id,num:4},....]
            // S2.第一次存和之后存,只有一条cookie
			this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
//				第一次存,对象里放一个对象
			if(this.goods.length == 0){
				this.goods.push({
					id:this.id,
					num:1
				})
			}else{
				// 之后存:新商品和老商品
            	// 先遍历,比较
            	var i = 0;
            	var off = this.goods.some((value,index)=>{
            		i = index;
            		return value.id == this.id
            	})
            	if(off){
            		// 老商品:
                	// 修改对应对象的num属性
            		this.goods[i].num++
            	}else{
//              		新商品,直接push
            		this.goods.push({
						id:this.id,
						num:1
					})
            	}
			}
			setCookie("goods",JSON.stringify(this.goods))
		}
		load(){
			var that = this
			console.log(this.url)
			ajaxGet(this.url,function(res){
				that.res = JSON.parse(res);
//					渲染页面
				that.display()
//					渲染页码
				that.createPage()
			})
		}
		display(){
			var str = "";
			for(var i=this.index*this.num;i<(this.index+1)*this.num;i++){
				if(i<this.res.length){						
					str +=`<li class="box" qwe="${this.res[i].goodid}">
								<img src="${this.res[i].url}" class="img">
								<a href="">${this.res[i].tip}</a>
								<div class="price">
									<p>￥<span>${this.res[i].price}</span></p>
									<u>${this.res[i].del}</u> 
								</div>
								<div class="bb">
									<input type="button" class="btn" value="加入购物车" />
								</div>
							</li>`
				}
			}
			this.list.innerHTML = str
		}
		createPage(){
			this.max = Math.ceil(this.res.length / this.num);
			var str = ""
			for (var i=0;i<this.max;i++) {
				str += `<li>${i+1}</li>`
			}
			this.page.innerHTML = str;
		}
		changeIndex(type){
			if(type==0){
				if(this.index == 0){
					this.index = this.max-1
				}else{
					this.index--
				}
			}else{
				if(this.index == this.max-1){
					this.index = 0
				}else{
					this.index++
				}
			}
//				渲染页面
			this.display()
		}
	}
	new List()	
})(jQuery);
