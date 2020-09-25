$(function() {
    var myWidgetManager = new abp.WidgetManager('#MyDashboardWidgetsArea');
    myWidgetManager.init();

    var myModal = new abp.ModalManager({
        viewUrl: abp.appPath + 'MyModal/MyModal',
        scriptUrl: "/Pages/MyModal/MyModal.js",
        modalClass: "MyModal"
    });

    $("#ShowMyModal").click(function (){
        myModal.open();
    })
})