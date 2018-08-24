'use strict';
describe("Game", function () {

    describe("Get the board", function () {

        beforeEach(module("myGame"));

        var ResultsController,
            scope;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ResultsController = $controller('GameController', {
                $scope: scope
            });

        }));
        it('should return boarder length', function () {
            expect(scope.board.length).toEqual(3);
        });
    });

    describe("Reset the Game", function () {

        beforeEach(module("myGame"));

        var ResultsController,
            scope;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ResultsController = $controller('GameController', {
                $scope: scope
            });

        }));
        it('should clear the baord', function () {
            var cell = {value:'O'}
            // scope.move(cell);
            // expect(scope.board[0][0].value).toEqual('X');
            // expect(scope.currentPlayer).toEqual('O');

            scope.reset();
            var grid = scope.board;
            expect(grid[0][0].value).toEqual('?');
            expect(grid[0][1].value).toEqual('?');
            expect(grid[0][2].value).toEqual('?');

            expect(grid[1][0].value).toEqual('?');
            expect(grid[1][1].value).toEqual('?');
            expect(grid[1][2].value).toEqual('?');

            expect(grid[2][0].value).toEqual('?');
            expect(grid[2][1].value).toEqual('?');
            expect(grid[2][2].value).toEqual('?');
        });
    });

    describe("Given different types of cells", function () {

        beforeEach(module("myGame"));

        var ResultsController,
            scope;
            var cell1 ={value:'X'};
            var cell2 ={value:'?'};

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ResultsController = $controller('GameController', {
                $scope: scope
            });
        }));

        it('should return true if cell is taken', function () {
            expect(scope.isTaken(cell1)).toEqual(true);
        });
        it('should return false if cell is not taken', function () {
            expect(scope.isTaken(cell2)).toEqual(false);
        });  
    });

    describe("Given a board", function () {

        beforeEach(module("myGame"));

        var ResultsController,
            scope;
            
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ResultsController = $controller('GameController', {
                $scope: scope,
                 
            });
        }));

        it('should return false the board is not full', function () {
            expect(scope.isBoardFull()).toEqual(false);
        });
        it('should return true the board is full', function () {

            var emptyCell = 'X';
            scope.board = [
                [{ value: emptyCell }, { value: emptyCell }, { value: emptyCell }],
                [{ value: emptyCell }, { value: emptyCell }, { value: emptyCell }],
                [{ value: emptyCell }, { value: emptyCell }, { value: emptyCell }]
            ];

            expect(scope.isBoardFull()).toBe(true);
        });
        
        it('should return true if theres a winner in a row', function () {

            scope.board = [
                [{ value: 'X' }, { value: 'X' }, { value: 'X' }],
                [{ value: 'X' }, { value: 'O' }, { value: 'O' }],
                [{ value: 'O' }, { value: 'X' }, { value: 'O' }]
            ];

            expect(scope.checkForEndOfGame()).toBe(true);
            expect(scope.winner).toBe(true);
        });

        it('should return true if theres a winner in a column', function () {

            scope.board = [
                [{ value: 'O' }, { value: 'O' }, { value: 'X' }],
                [{ value: 'O' }, { value: 'X' }, { value: 'X' }],
                [{ value: 'N' }, { value: 'O' }, { value: 'X' }]
            ];

            expect(scope.checkForEndOfGame()).toEqual(true);
            expect(scope.winner).toEqual(true);
        });

        it('should return true if theres a winner in a diagonal match', function () {

            scope.board = [
                [{ value: 'X' }, { value: 'O' }, { value: 'X' }],
                [{ value: 'O' }, { value: 'X' }, { value: 'O' }],
                [{ value: 'P' }, { value: 'O' }, { value: 'X' }]
            ];

            expect(scope.checkForEndOfGame()).toEqual(true);
            expect(scope.winner).toEqual(true);
        });
        
    });

    describe("Given a move", function () {

        beforeEach(module("myGame"));

        var ResultsController,
            scope;
            var cell = {value:'?'};

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ResultsController = $controller('GameController', {
                $scope: scope
            });
        }));

        it('should return the next player', function () {
            scope.move(cell);
            expect(scope.currentPlayer).toEqual('O');
        });
    });

    describe("when its a http request", function () {

        beforeEach(module("myGame"));

        var ResultsController,
            scope;
            var cell = {value:'?'};

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ResultsController = $controller('GameController', {
                $scope: scope
            });
        }));

        it('should fetch a grid from json file', function () {
            scope.move(cell);
            expect(scope.currentPlayer).toEqual('O');
        });
    });

});

