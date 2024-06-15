document.getElementById("btn_date").addEventListener("click", function() {
    document.getElementById("input_date").style.display = "block";
    document.getElementById("btn_date").style.borderColor = "#413B89";
    document.getElementById("btn_all").style.borderColor = "#EBEBEE";
    document.getElementById("body_content").style.display = "none";
});

document.getElementById("btn_all").addEventListener("click", function() {
    document.getElementById("btn_all").style.borderColor = "#413B89";
    document.getElementById("btn_date").style.borderColor = "#EBEBEE";
    document.getElementById("input_date").style.display = "none";
    document.getElementById("body_content").style.display = "block";
});

document.getElementById("view_history").addEventListener("click", function() {
    var fromDate = document.getElementById("from_date").value;
    var toDate = document.getElementById("to_date").value;

    if (fromDate && toDate && toDate >= fromDate) {
        if (toDate < fromDate) {
            document.getElementById("message").textContent = "";
        }
    } else {
        document.getElementById("message").textContent = "Ngày bắt đầu và ngày kết thúc không được để trống";
        setTimeout(function() {
            document.getElementById("message").textContent = "";
        }, 5000);
    }
});

document.getElementById("from_date").addEventListener("change", function() {
    var fromDate = document.getElementById("from_date").value;
    var toDate = document.getElementById("to_date").value;

    if (fromDate && toDate && toDate < fromDate) {
        document.getElementById("to_date").value = fromDate;
    }
});

document.getElementById("to_date").addEventListener("change", function() {
    var fromDate = document.getElementById("from_date").value;
    var toDate = document.getElementById("to_date").value;

    if (fromDate && toDate && toDate < fromDate) {
        document.getElementById("to_date").value = fromDate;
    }
});





