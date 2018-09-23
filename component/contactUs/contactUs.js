$(document).ready(function () {
    $(".MessegeSubmit>.btn").click(function () {
        $(".wrap .notice").css("visibility", "visible");
        var e = $(".MessegeSubmit>div>input:nth-of-type(1)").val(),
            t = $(".MessegeSubmit>div>input:nth-last-of-type(1)").val(), i = $(".MessegeSubmit>textarea").val();
        $(".wrap .notice .success div p .name").html(e), $(".wrap .notice .success div p .tel").html(t), $(".wrap .notice .success div.text").text(i)
    }), $(".wrap .notice .success .btn_one").click(function () {
        $(".wrap .notice").css("visibility", "hidden")
    }), $(".wrap .notice .success .back").click(function () {
        $(".wrap .notice").css("visibility", "hidden")
    }), $(".wrap .notice .success .btn").click(function () {
        clearContent();
    })
    var clearContent = function () {
        $(".wrap .notice").css("visibility", "hidden");$(".MessegeSubmit>div>input:nth-of-type(1)").val("");$(".MessegeSubmit>div>input:nth-last-of-type(1)").val(""), $(".MessegeSubmit>textarea").val("");
    }
    var get_href = 'http://www.clouddeer-expo.com/api/LINK/GetAdvice'
    var remove_href = 'http://www.clouddeer-expo.com/api/LINK/RemoveAdvice?ID='
    var add_href = 'http://www.clouddeer-expo.com/api/LINK/AddAdvice'
    var update_href = 'http://www.clouddeer-expo.com/api/LINK/UpdateAdvice'


    //变量初始化
    // $scope.PostData = {
    //         "ID": null,
    //         "NAME": '',
    //         "PHONE": '',
    //         "CONTENT": '',
    //         "MEMO": ''
    // };
    // $scope.NeedUpdate =false;
    // $scope.originalInfo ={};
    // $scope.AllAdvice = [];

    //增相关的信息
    // $scope.AddInfo = function(){
    //     $.post(Add, this.PostData).then(function(res) {
    //         if(res == 1) {
    //             alert('新增成功')
    //             $scope.GetAllInfo();
    //         } else {
    //             alert('新增失败');
    //         }
    //     })
    // }

    //删相关的信息
    // $scope.RemoveInfo = function(id){
    //     $.get(remove_href + id).then(function(res) {
    //         if(res == 1) {
    //             alert('删掉啦!');
    //             $scope.GetAllInfo();
    //         } else {
    //             alert('删除失败!');
    //         };
    //     })
    // }

    //更新相关的信息
    // $scope.ChangeInfo = function(val){
    //     this.originalInfo={
    //         "ID":val.ID,
    //         "NAME":val.NAME,
    //         "PHONE":val.PHONE,
    //         "CONTENT":val.CONTENT,
    //         "MEMO":val.MEMO,
    //     };
    //     $scope.NeedUpdate=true;
    // }

    //查相关的信息
    // var GetAllInfo = function () {
    //     $.get(get_href).then(function (res) {
    //         if (res && res != null) {
    //             var baseInfo = JSON.parse(res).Table;
    //             console.log($scope.baseInfo);
    //         } else {
    //             alert('老铁，一条记录都没有你敢信!');
    //         }
    //     })
    // }

    //修改相关的信息
    // $scope.UpdataInfo = function(){
    //     $.post(Update,originalInfo).then(function(res) {
    //         if(res == 1){
    //         alert("修改成功");
    //             $scope.NeedUpdate=false;
    //         _this.GetAll();
    //     }else{
    //         alert("修改失败")
    //     };
    // })
    // }


});