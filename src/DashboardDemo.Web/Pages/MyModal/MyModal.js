$(function () {
    abp.modals.MyModal = function () {
        var initModal = function (publicApi, args) {
            var myWidgetManager = new abp.WidgetManager('modal');
            myWidgetManager.init();
        };

        return {
            initModal: initModal
        };
    };
});