import { useEffect, useState } from "react";
import $ from 'jquery';
export default function Deven() {
    const [use, setUse] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
            result.json().then((res) => {
                // console.log(res);
                setUse(res)
            })
        })
    })
    $(document).ready(function(){

        $.get("http://jsonplaceholder.typicode.com/todos/",function(data){
    
    var arr=[data]    ;
        });
        $("ul li ").click(function(event){
        
        var str="<table border=1 id=table1>";
        if(event.currentTarget.id=="li1"){
        
        for(var i=0;i<50;i++){
        str+="<tr><td>"+arr[i].id+"</td><td>"+arr[i].title+"</td><tr>";
        }
        str+="</table>"
        $("#d1").html(str);
        }
        else if(event.currentTarget.id=="li2"){
        for(var i=51;i<100;i++){
        str+="<tr><td>"+arr[i].id+"</td><td>"+arr[i].title+"</td><tr>";
        }
        $("#d1").html(str);
        
        }
        
        })
        })
    // console.log(use) 
return(
    <>
      <ul class="pagination" type="none">
<li class="page-item" id="li1"><a href="#d1">1</a></li>
<li clas="page-item" id="li2"><a href="#d1">2</a></li>
<li clas="page-item" id="li3"><a href="#d1">3</a></li>
</ul>
<div id="d1"></div>
    <table border="2">
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
        </tr>
      
            {use.map((item)=>{
                   return(
                    <>
                    <tr>
                     <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.completed}</td>
                    </tr>
     
                    </>
                   )
                })
            }
       
    </table>
    
    </>
)
   
}