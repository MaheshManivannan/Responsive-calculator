let output = document.getElementById("output-screen");
        function display(num){
            output.value += num;
        }
        function Calculate(){
            try{
                output.value = eval(output.value);
            }
            catch(err){
                alert("Error");
            }
        }
        function Clear(){
            output.value = "";
        }
        function del(){
            output.value = output.value.slice(0,-1);
        }
