angular.module('sportsStore')
	.constant('productListActiveClass', 'btn-primary')
	.constant('productListPageCount', 3)
	.controller('productController', function($scope, $filter, productListActiveClass, productListPageCount, cart){
		var selectedCategory = null;

		$scope.selectedPage = 1;
		$scope.pageSize = productListPageCount;
			
		$scope.selectCategory = function(category){
			selectedCategory = category;
			$scope.selectedPage = 1;
		}

		$scope.selectPage = function(newPage){
			$scope.selectedPage = newPage;
		}

		$scope.categoryFilterFunc = function(product){
			return selectedCategory == null || product.category == selectedCategory;
		}

		$scope.getCategoryClass = function(category){
			return selectedCategory == category ? productListActiveClass : "";
		}

		$scope.getPageClass = function(page){
			return $scope.selectedPage == page ? productListActiveClass : "";
		}

		$scope.addProductCart = function(product){
			cart.addProduct(product.id, product.name, product.price);
		}
	});