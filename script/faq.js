const headers = document.querySelectorAll('.accordion-header');
const bodies = document.querySelectorAll('.accordion-body');


bodies.forEach(body => {
    body.style.minHeight = '0';
    body.style.maxHeight = '0'; 
});
headers.forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;

       
        headers.forEach(otherHeader => {
            const otherBody = otherHeader.nextElementSibling;
            if (otherBody !== body) {
                otherBody.style.minHeight = '0'; 
                otherBody.style.maxHeight = '0'; 
            }
        });

        
        if (body.style.maxHeight === '0px' || body.style.maxHeight === '') {
            const scrollHeight = body.scrollHeight;
            body.style.minHeight = (10 + scrollHeight) + "px"; 
            body.style.maxHeight = scrollHeight + "px"; 
        } else {
            body.style.minHeight = '0';
            body.style.maxHeight = '0'; 
        }
    });
});




