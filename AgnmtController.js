var myapp=angular.module("MyApp",[]);

myapp.controller("MyCtrl",function($scope)
{
	
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
});
	
