 
        // Get all the navigation tabs
        const navTabs = document.querySelectorAll('.nav-item');

        // Function to handle tab click
        function handleTabClick(event) {

          
           // Remove the 'active' class from all tabs
          document.querySelectorAll('.nav-link').forEach(tab => tab.classList.remove('active'));

          // Add the 'active' class to the clicked tab
          event.target.classList.add('active');
        
        }

        // Add a click event listener to each navigation tab
        navTabs.forEach(tab => {
          tab.addEventListener('click', handleTabClick);
        });

        //function to call frames to the main body
         document.addEventListener('DOMContentLoaded', function () {

            const iframeLinks = document.querySelectorAll('a[href^="#iframe"]');

            iframeLinks.forEach(function (link) {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    const targetIframeId = this.getAttribute('href').slice(1); // Remove the '#'
                    const allIframes = document.querySelectorAll('iframe');
                    allIframes.forEach(function (iframe) {
                        iframe.style.display = 'none';
                    });
                    const targetIframe = document.getElementById(targetIframeId);
                    if (targetIframe) {
                        targetIframe.style.display = 'block';
                    }
                });
                });
        });

