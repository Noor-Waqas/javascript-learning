 // document.getElementById("owl").onclick = function(){
        //     alert("Owl click")
        // }

         // learming this topic 
        // type ,timestamp , defaultPrevented , 
        // target , toElement, scrElement 
        // clientX , clientY , screeenX, screenY
        // altkey , ctrlkey , shiftkey , keyCode 

        // best way
        // document.getElementById("owl").addEventListener("click",function(e){
        //     console.log("clicked On owl");
            
        // } ,false)
        // document.getElementById("images").addEventListener("click",function(e){
        //     console.log("clicked On Images"); // nichy sy oper jata hai bubling khty hai 
        //     e.stopPropagation()
            
        // } ,false)
       

        // document.getElementById("google").addEventListener("click",function(e){
        //     e.preventDefault()
        //     e.stopPropagation()
        //     console.log("google click");
            
        // })


        document.querySelector("#images").addEventListener("click",function(e){
            // console.log(e.target.parentNode);
            if(e.target.tagName === "IMG"){
                console.log(e.target.id);
                let removeIt = e.target.parentNode; // parent remove krna hoo li ka 
                // removeIt.remove()
                // user second method 
                removeIt.parentNode.removeChild(removeIt)// me kha parentNode do phir us ka chlid remove kiya hai 

            }
            
        })
