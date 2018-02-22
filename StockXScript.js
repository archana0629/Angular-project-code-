angular.module("StockXApp",[])
         .controller("Ctrl",Ctrl);

         function Ctrl(){
             this.showImage=true;
             this.arrayIndex="";
             this.array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
             this.showDiv=function(index){
                this.arrayIndex=index;
                this.showImage=!this.showImage;
             }
         }