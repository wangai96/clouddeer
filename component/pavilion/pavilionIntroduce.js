function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
console.log('城市'+GetQueryString("province"))
console.log('展馆'+GetQueryString("index"))

let txtUrl = "assets/"+GetQueryString("province")+"/"+GetQueryString("index")
$.get(txtUrl+"/summary.txt").then((res)=>{
	console.log(res)
})
