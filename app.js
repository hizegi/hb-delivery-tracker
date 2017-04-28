var myApp = angular.module('deliveryApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);

/* ROUTING CONFIG */
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({ enabled: true }); // tell angular to use push state
    $routeProvider
    .when('/', {
        templateUrl: 'partials/all_orders.html'
    })
    .when('/all', {
        templateUrl: 'partials/all_orders.html'
    })
    .when('/delivered', {
        templateUrl: 'partials/delivered_orders.html'
    })
    .when('/accepted', {
        templateUrl: 'partials/accepted_orders.html'
    })
    .when('/search', {
        templateUrl: 'partials/search_date.html'
    })
    .when('/oops', {
        templateUrl: 'partials/error_page.html'
    })
}]);

/* DELIVERY CONTROLLER */
myApp.controller('deliveryController', ['$routeParams', function($routeParams){
    const main = this;
    //all deliveries
    main.deliveryList = deliveryList;
    main.searchDate = "";
    main.searchMessage = "";
    main.searchByDateResults = [];

    //update delivery status to complete
    main.markAsDelivered = function(d){
      if (d.orderStatus != "Delivered") {
        d.orderStatus = "Delivered";
      }
    }

    //CALENDAR UI CODE FROM ANGULAR UI DOCS
    //http://angular-ui.github.io/bootstrap/versioned-docs/0.12.0/
  main.today = function() {
    console.log("today!");
    main.dt = new Date();
  };

  main.today();

  main.clear = function() {
    main.searchByDateResults = [];
    main.searchMessage = "";
    main.dt = null;
  };

  main.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  main.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  main.toggleMin = function() {
    main.inlineOptions.minDate = main.inlineOptions.minDate ? null : new Date();
    main.dateOptions.minDate = main.inlineOptions.minDate;
  };

  main.toggleMin();

  main.open1 = function() {
    main.popup1.opened = true;
  };

  main.open2 = function() {
    main.popup2.opened = true;
  };

  main.setDate = function(year, month, day) {
    main.dt = new Date(year, month, day);
  };

  main.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  main.format = main.formats[0];
  main.altInputFormats = ['M!/d!/yyyy'];

  main.popup1 = {
    opened: false
  };

  main.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  main.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < main.events.length; i++) {
        var currentDay = new Date(main.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return main.events[i].status;
        }
      }
    }

    return '';
  }

  //search by date parses date back to "YYYY/MM/DD" to match JSON
  main.searchByDate = function(){
    //clear out previous results
    main.searchByDateResults = [];
    main.searchMessage = "";

    let d = new Date(main.dt),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    main.searchDate = [year, month, day].join('-');
    main.checkForMatch(main.searchDate);
  }

  //iterate through all DeliveryList and find matches
  main.checkForMatch = function(date){
    for (var object of deliveryList) {
      if (object.deliveryDate == date){
        console.log("HOLLA")
        main.searchByDateResults.push(object);
      } else {
        main.searchMessage = `${main.searchByDateResults.length} order(s) found.`
      }
    }
  }

  //SOMETHING ISN'T WORKING HERE :(
  // main.checkForEmptyResults = function(){
  //   console.log(main.searchByDateResults)
  //   if (main.searchByDateResults.length = 0) {
  //    return main.searchMessage = `No orders for ${date}.`
  //   } else {
  //    return main.searchMessage = `${main.searchByDateResults.length} orders found.`;
  //  }
  // }


}]); //end of deliveryController



/* DATA STORE FOR DELIVERIES.JSON */
var deliveryList =
[
    {
      "id": 2,
      "orderStatus": "Accepted",
      "senderId": 4,
      "currentFillerId": 353,
      "specialInstructions": "Ipsum quis sit cillum eiusmod sint. Cupidatat cillum deserunt id et ad occaecat culpa do cupidatat non ut. Enim velit minim adipisicing reprehenderit pariatur mollit nulla non eiusmod ad amet incididunt.",
      "deliveryDate": "2016-12-12",
      "recipient": {
        "id": 2,
        "name": "Hensley Walker",
        "addressLineOne": "Ebony Court",
        "city": "Brecon",
        "state": "OK",
        "zipCode": "19138 ",
        "country": "USA",
        "phone": "(903) 536-2098",
        "companyName": "TO Company"
      },
      "items": [
        {
          "id": 2,
          "orderId": 2,
          "code": "H-105",
          "description": "5x5 clear glass cylinder with aspidistra leaf lining. Grouped arrangement of white roses, white dendrobium orchid and lime green cymbidium. Filled out with green trick dianthus. Total arrangement should measure 9x9\n\n**Please use most appropriate substitutions when needed, always maintaining the overall style and/or color of the arrangement. Subs must be of equal or higher value.",
          "quantity": 1,
          "suggestedPrice": 152.09
        }
      ],
      "totalCost": 124.99,
      "senderOrderId": "555",
      "attachments": [],
      "classifiers": {
        "lob": "CONSUMER",
        "deliveryType": "OTE",
        "opSeg": "Flowers"
      }
    },
    {
      "id": 7,
      "orderStatus": "Accepted",
      "senderId": 4,
      "currentFillerId": 353,
      "specialInstructions": "Excepteur dolore labore excepteur dolor et anim duis. Dolor ad consequat esse ipsum cupidatat. Id ut consequat nostrud veniam dolore voluptate in cupidatat elit enim et magna in.",
      "deliveryDate": "2016-12-23",
      "recipient": {
        "id": 7,
        "name": "Vazquez Henson",
        "addressLineOne": "Fleet Place",
        "city": "Sussex",
        "state": "NC",
        "zipCode": "78217 ",
        "country": "USA",
        "phone": "(910) 485-2533",
        "companyName": "Lorem ipsum"
      },
      "items": [
        {
          "id": 7,
          "orderId": 7,
          "description": "Dolore consequat dolore Lorem in non sint enim.",
          "quantity": 1,
          "suggestedPrice": 186.98
        }
      ],
      "totalCost": 369.07,
      "attachments": [],
      "classifiers": {
        "lob": "CONSUMER",
        "deliveryType": "OTE",
        "opSeg": "Plants"
      }
    },
    {
      "id": 12,
      "orderStatus": "Delivered",
      "senderId": 4,
      "currentFillerId": 469,
      "specialInstructions": "Consequat deserunt ullamco sunt sint in irure amet. Officia culpa veniam fugiat do mollit irure minim. Quis elit enim nulla id non enim et eu aute laboris nisi incididunt.",
      "deliveryDate": "2016-12-20",
      "recipient": {
        "id": 12,
        "name": "Sweet Alexander",
        "addressLineOne": "Kimball Street",
        "city": "Denio",
        "state": "AR",
        "zipCode": "47528 ",
        "country": "USA",
        "phone": "(917) 515-3110",
        "companyName": "adipisicing ad"
      },
      "items": [
        {
          "id": 12,
          "orderId": 12,
          "description": "Consectetur occaecat ea commodo proident commodo exercitation eu reprehenderit fugiat in.",
          "quantity": 2,
          "suggestedPrice": 77.33
        }
      ],
      "totalCost": 173.95,
      "attachments": [],
      "classifiers": {
        "lob": "CONSUMER",
        "deliveryType": "OTE",
        "opSeg": "Flowers"
      }
    },
    {
      "id": 120,
      "orderStatus": "Accepted",
      "senderId": 4,
      "currentFillerId": 353,
      "specialInstructions": "Officia culpa veniam fugiat do mollit irure minim. Quis elit enim nulla id non enim et eu aute laboris nisi incididunt.",
      "deliveryDate": "2016-12-23",
      "recipient": {
        "id": 12,
        "name": "Alex Fancy",
        "addressLineOne": "Oak Street",
        "city": "Denio",
        "state": "AR",
        "zipCode": "47528 ",
        "country": "USA",
        "phone": "(917) 515-3110"
      },
      "items": [
        {
          "id": 13,
          "orderId": 120,
          "description": "Consectetur occaecat ea commodo proident commodo exercitation eu reprehenderit fugiat in.",
          "quantity": 2,
          "suggestedPrice": 195
        }
      ],
      "totalCost": 195.50,
      "attachments": [],
      "classifiers": {
        "lob": "CONSUMER",
        "deliveryType": "OTE",
        "opSeg": "Flowers"
      }
    }
]
