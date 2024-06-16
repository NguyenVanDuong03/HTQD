document.addEventListener('DOMContentLoaded', function() {
    const selected = document.querySelector('.select-selected');
    const items = document.querySelector('.select-items');
    const options = items.querySelectorAll('.custom-option');

    selected.addEventListener('click', function() {
        items.classList.toggle('select-show');
        selected.classList.toggle('select-arrow-active');
    });

    options.forEach(option => {
        option.addEventListener('click', function() {
            selected.innerHTML = this.innerHTML;
            items.classList.remove('select-show');
        });
    });

    document.addEventListener('click', function(e) {
        if (!selected.contains(e.target)) {
            items.classList.remove('select-show');
            selected.classList.remove('select-arrow-active');
        }
    });
});

function check(id, regex, message = '') {
    if($(id).val().trim() === '') {
        $(id).parent().next('.message').text('Vui lòng nhập đầy đủ thông tin!').show();
        return false;
    }else if(regex !== '0') {
        if(!regex.test($(id).val())) {
            $(id).parent().next('.message').text(message).show();
            return false;
        }
    }
    $(id).parent().next('.message').text('').show();
    return true;
}

function checkDate(id, message = '') {
    const inputDate = new Date($(id).val());
    const currentDate = new Date();

    if($(id).val().trim() === '') {
        $(id).parent().next('.message').text('Vui lòng nhập đầy đủ thông tin!').show();
        return false;
    } else if(inputDate < currentDate) {

        $(id).parent().next('.message').text(message).show();
        return false;
    }
    $(id).parent().next('.message').text('').show();
    return true;
}
    
function reset() {
    $('#soThe').val('');
    $('#soDienThoai').val('');
    $('#ngayHetHan').val('');
}

$(document).ready( () => {
    $('#soThe').on('input', () => {
        check($('#soThe'), /^\d+$/, 'Số thẻ không được để trống và là ký tự số');
    })
    $('#soDienThoai').on('input', () => {
        check($('#soDienThoai'), /^0\d{9}$/, 'Vui lòng nhập đúng thông tin. Ví dụ hợp lệ: 0397099702');
    })
    $('#ngayHetHan').on('input', () => {
        checkDate($('#ngayHetHan'), 'Vui lòng nhập đúng thông tin. Ví dụ hợp lệ: 05/29');
    })


    $('#thanhToan').click( (e) => {
        e.preventDefault();

        const isname = check($('#soThe'), /^\d+$/, 'Họ tên không chứa ký tự số và ký tự đặc biệt. Ví dụ: Lê Văn Quân');
        const isphone = check($('#soDienThoai'), /^0\d{9}$/, 'Số điện thoại không chứa ký tự chữ và ký tự đặc biệt. Ví dụ: 0123456789');
        const isdate = checkDate($('#ngayHetHan'), 'Vui lòng nhập đúng thông tin. Ví dụ hợp lệ: 05/29');

        if(isname && isphone && isdate) {
            reset();
        }
    } )

})