//IIFE = anonimous funtion
(function()
    {
        function start()
        {
            console.log("app started!");

            //use AJAX to read json file

            //step 1: create a new XHR object
            let XHR = new XMLHttpRequest(); //exe html request

            // step 2: create the request
            XHR.open("GET","../data/data.json");

            //step 3: send the request
            XHR.send();

            
            XHR.addEventListener("readystatechange", function(event)
            {
                if(XHR.readyState === "4" && XHR.status == "200")
                {
                    console.log(XHR.responseText);
                }
            })

        }

        window.addEventListener("load", start)
    })();