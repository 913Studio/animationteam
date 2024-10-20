document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
        // 這裡可以添加進一步的表單處理邏輯，如AJAX請求
    });
});