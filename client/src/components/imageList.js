var React = require('react');
var ImageListEntry = require('./imageListEntry').ImageListEntry;

var ImageList = function(props) {

 return (<div>
   <table>
     <tr>
       <th> List </th>
       </tr>
     
       {props.imageList.map(function(image){
         return (<tr><ImageListEntry image={image} clickHandler={props.clickHandler} /></tr>);
       })}
     
     </table>
 </div>);

};

module.exports.ImageList = ImageList;