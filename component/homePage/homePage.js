$(document).ready(function () {
    //置顶先

    $(".swiper-container .GoShowCase").click(function () {
        window.location.href = "http://clouddeer-expo.com/CloudDeer/clouddeer/component/showCase/showCase.html"
    })
    // 百度地图API功能
    var map = new BMap.Map("allmap");    // 创建Map实例
    var point=new BMap.Point(120.7457451011, 31.2708181991);
    map.centerAndZoom(point, 20);  // 初始化地图,设置中心点坐标和地图级别
    
    var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);               // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.setCurrentCity("苏州");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    $('body,html').animate({scrollTop:0},500);
});