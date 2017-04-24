// var React = require('react');
// var ImageListEntry = require('./imageListEntry').ImageListEntry;
import React from 'react';
import ImageListEntry from './imageListEntry.js';

var ImageList = function(props) {

 return (<div>
   {/*<table>
     <tr>
       <th> {props.listTitle} </th>
       <th> Views </th>
       </tr>
     
       {props.imageList.map(function(image){
         return (<tr><ImageListEntry image={image} clickHandler={props.clickHandler} /></tr>);
       })}
     
     </table>*/}
     <table class="table-fill">
<thead>
<tr>
<th class="text-left">{props.listTitle}</th>
<th class="text-left">Views</th>
</tr>
</thead>
<tbody class="table-hover">
{props.imageList.map(function(image){
         return (<tr><ImageListEntry image={image} clickHandler={props.clickHandler} /></tr>);
       })}
</tbody>
</table>
 </div>);

};

export default ImageList;