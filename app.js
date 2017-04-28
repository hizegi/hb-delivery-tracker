angular
  .module("deliveryApp", [])
  .controller("deliveryController", deliveryController);

function deliveryController(){
  const main = this;
  main.deliveryList = deliveryList;

}
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
