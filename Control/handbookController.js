mainApp.controller('HandbookController', function($scope,$sce,dataService,mainModel) 
    {
        //init
        $scope.currentChapter = 1;
        $scope.currentPage = 0;
        $scope.currentMaxPages = mainModel.getMaxPages();
        $scope.currentPageContent = $sce.trustAsHtml(mainModel.handbookGetHBPage(0));

        $scope.navToPage = function(num)
        {
            if ( num > -1 && num < $scope.currentMaxPages)
            {
                $scope.currentPage = num;
                $scope.currentPageContent = $sce.trustAsHtml(mainModel.handbookGetHBPage(num));
            }   
        }
        // Methods
        
  });