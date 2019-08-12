;(function($){
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
	
	class Car{
		constructor(){
			this.tbody = document.querySelector("tbody");
			this.url = "http://localhost/two/project/data/goods.json";
			this.index = 0;
			this.num = 10;
//			1.开启ajax
			this.load()
//			2.绑定事件
		   	this.addEvent()
		}
		load(){
			var that = this
			ajaxGet(this.url,function(res){
				that.res = JSON.parse(res)
//				console.log(res)
//				2.读取Cookie数据
				that.getCookie()
			})
		}
		getCookie(){
			this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
//			3.渲染页面
			this.display()
		}
		display(){
			var str = "";
			this.res.forEach((resVal)=>{
				this.goods.forEach((goodVal)=>{
					if(resVal.goodid == goodVal.id){
//						var jiage = (resVal.price)*(goodVal.num)
//						console.log(jiage)
//						var a = jiage
//						console.log(typeof a)
						str += `<tr qwe="${resVal.goodid}">
									<td><img src="${resVal.url}"/></td>
									<td>${resVal.name}</td>
									<td>${resVal.price}</td>
									<td><input type="number" class="num" value="${goodVal.num}" /></td>
									<td class="jiage">${(resVal.price)*(goodVal.num)}</td>
									<td><input type="button" class="btn" value="删除" /></td>
								</tr>`
					}
				})
			})
			this.tbody.innerHTML = str
		}

        addEvent(){
        	var that = this
        	// D2.采用事件委托绑定删除的事件
        	this.tbody.addEventListener("click",function(eve){
				var e = eve || window.event        		
        		var target = e.target || e.srcElement
        		console.log(this.res)
				if(e.target.className == "btn"){
					// D3.获取点击商品的id
					that.id = e.target.parentNode.parentNode.getAttribute("qwe");                   
                    // D4.删除DOM元素
                    e.target.parentNode.parentNode.remove()
                    // D5.删除cookie中的数据
					that.delCookie()
				}
        	})
			// U1.采用事件委托绑定修改数量的事件
			this.tbody.addEventListener("input",function(eve){
				var e = eve || window.event        		
        		var target = e.target || e.srcElement
        		if(e.target.className == "num"){
                    // U2.获取修改数量对应的商品的id
					that.id = e.target.parentNode.parentNode.getAttribute("qwe");
                    // U3.获取修改之后的实时数量
					that.num = e.target.value
                    // U4.修改cookie中的数据
                    that.changeCookie()
//					console.log(that.goods)
					that.display()
                }
			})	
		}
        delCookie(){
    		// 先遍历cookie中读取出来的数据
			var i = 0;
			this.goods.some((val,index)=>{
            	// 拿到与点击相同的数据，结束
				i = index;
				return val.id == this.id;					
			})
			// 根据结束时的索引，删除对应的数据
			this.goods.splice(i,1)
	        // D6.最后要把操作之后的数据，再设置给cookie
			setCookie("goods",JSON.stringify(this.goods))
        }
        changeCookie(){
        	console.log(this.goods)
        	// 先遍历cookie中读取出来的数据
			var i = 0;
//			console.log(this.goods)
			this.goods.some((val,index)=>{
            	// 拿到与点击相同的数据，结束
				i = index;
				return val.id == this.id;					
			})
			// 把修改的数据赋值给Cookie数据
			this.goods[i].num = this.num
	        // D6.最后要把操作之后的数据，再设置给cookie
			setCookie("goods",JSON.stringify(this.goods))
        }
	}
	new Car
})(jQuery);
