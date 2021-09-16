$(Document).ready(function(){
    $('.deleteForm').click(function(evt){
        evt.preventDefault();
        var name=$(this).data("name");
        swal({
            title:`คุณต้องการลบข้อมูล ${name} หรือไม่ ?`
        })
    });
});