//  '.but1' div tag calling button
const buyButtons = document.querySelectorAll('.but1 button');

buyButtons.forEach(function(button) {
    
    // button click reaction
    button.addEventListener('click', function(event) {
        
        // page reload stop
        event.preventDefault();

        // msg box creating
        const alertBox = document.createElement('div');
        alertBox.innerText = "Order Placed Successfully! 🎉";
        
        // msg css
        alertBox.style.backgroundColor = "#f4ecec"; 
        alertBox.style.color = "#031276"; 
        alertBox.style.padding = "16px 24px"; 
        alertBox.style.borderRadius = "8px"; 
        alertBox.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)"; 
        alertBox.style.fontFamily = "Arial, sans-serif"; 
        alertBox.style.fontWeight = "bold"; 
        
        // left side pop msg
        alertBox.style.position = "fixed";
        alertBox.style.top = "20px"; 
        alertBox.style.right = "20px"; 
        alertBox.style.zIndex = "1000"; 
        // slow animation
        alertBox.style.transition = "opacity 0.5s ease-in-out"; 
        // msg box in web
        document.body.appendChild(alertBox);
        // 3 sec after msg close
        setTimeout(function() {
            alertBox.style.opacity = "0"; 
            
            setTimeout(function() {
                alertBox.remove();
            }, 500); 
            
        }, 2000); 
    });
});