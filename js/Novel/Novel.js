 document.addEventListener("DOMContentLoaded", function(){
            document.querySelectorAll('.folder').forEach(folder => {
                folder.onclick = function() {
                    const targetId = this.getAttribute('data-target');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement.classList.contains('show')) {
                        targetElement.classList.remove('show');
                    } else {
                        targetElement.classList.add('show');
                    }
                };
            });
        });