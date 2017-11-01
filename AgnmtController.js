var myapp=angular.module("MyApp",[]);

myapp.controller("MyCtrl",function($scope)
{
	$scope.x=true;
	$scope.y=true;
	$scope.product=[];
	$scope.xyz=[];
	$scope.selected={
			id:"",
		name:"",
		description:"",
		category:"",
		price:"",
		};
	$scope.obj = 
	
	{
			id:"",
		name:"",
		description:"",
		category:"",
		price:"",
        
		
		
	};
	
	$scope.addrow = function()
	{	
		
		var test=$scope.obj;
		if(test.id && test.name && test.description && test.category && test.price){
			$scope.y=false;
			$scope.product.push($scope.obj);
			
		}
		clearall();
	};
	function clearall(){
		$scope.obj = 
	{
      
		id:"",
		name:"",
		description:"",
		category:"",
		price:""
	};
			
	};
	$scope.removeRow = function(name){				
		var index = -1;		
		var comArr = eval( $scope.product);
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.product.splice( index, 1 );		
	};
	$scope.getTemplate = function (x) {
        if (x.id === $scope.selected.id) return 'edit';
        else return 'display';
    };

    $scope.editContact = function (x) {
					$scope.flag=true;
					angular.copy(x,$scope.selected);
			
    };

    $scope.saveContact = function (selected) {
        console.log("Saving products");
		var index = -1;		
		var comArr = eval( $scope.product);
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].id === selected.id ) {
				index = i;
				break;
			}
		}
		angular.copy($scope.selected,$scope.product[index]);
        $scope.reset();
		$scope.flag=false;


    };

    $scope.reset = function () {
        $scope.selected = {};
	}; 
	$scope.addRecord=function(){
      
	  
        if (typeof(Storage) !== "undefined") {
                       
              
                
                // storing our array as a string
                localStorage.setItem("quentinTarantino", JSON.stringify($scope.product));
                window.alert("Record Added Successfully");
               
               
        
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
	  
	};
	$scope.GetRecord=function(){
		$scope.x=false;
		var retrievedData = localStorage.getItem("quentinTarantino");
		var movies2 = JSON.parse(retrievedData);
		$scope.product=movies2;
		
		


};
	
});
	
