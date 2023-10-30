import MockAdapter from "axios-mock-adapter";

export const apiMock = (axios,option) => {

    const mock = new MockAdapter(axios, option);

    mock.onPost("/user/api/login").reply(
        function (config) {
            return [
                200, {
                    "refreshToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4NTA4NTY5Njg3IiwiaWF0IjoxNjY5MTQ0NjgwLCJleHAiOjE2NzY5MjA2ODB9.BKY6MkG_Qi9iizDSs3RXPxqVcTvWdxXWT2tGHaM4IrTUyDVJ9EvCT6yDH5aLDO2Jf1na4_Wfn7y6mTN1iZaR-Q",
                    "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4NTA4NTY5Njg3IiwiaWF0IjoxNjY5MTQ0NjgwLCJleHAiOjE2NjkxNDgyODB9.vKFSqG-ziCWjKWU5212mw50Y7kNDVObqDC1b6G6xX-6zSHNN3ERerTfANNvlj_jC107vw07XdETBDx4_Rytsdg"
                }
            ]
    });

    mock.onGet("/user/api/myinfo").reply(
        function (config) {
            return [
                200, {
                    "userId": 35,
                    "mobile": "8508569686",
                    "createDate": 1672345227000,
                    "isActive": "Y",
                    "isOtpVerified": "Y",
                    "isEmailVerified": "N",
                    "isPvVerified": "N",
                    "pvId": "8508569686@pv"
                }
            ]
        }
    );

    mock.onGet("/user/home/api/search").reply(
        (config)=>{
            if (config.params.search){
                return [
                    200,
                    [
                        {
                            "eventModelList": [],
                            "customerEntityList": []
                        }
                    ]
                ];
            };
        }
    );

    mock.onGet("/customer/api/v1/slotBooking/history").reply(()=>{
        return [
            200,
            [
                {
                    "clubBookingStaus": "Y",
                    "amount": 40,
                    "orderNumber": "PV-2022111-37",
                    "paymentMode": "Cash",
                    "orderId": 6,
                    "remark": "slot booking",
                    "userId": 6,
                    "advance": 0,
                    "preOrderId": 37,
                    "balance": 0,
                    "clubSlotId": 23,
                    "id": 6,
                    "customerMobile": "8508569687"
                },
                {
                    "clubBookingStaus": "N",
                    "amount": 40,
                    "orderNumber": "PV-2022111-37",
                    "modifyDate": "2022-11-01 21:35:12.0",
                    "paymentMode": "Card",
                    "orderId": 7,
                    "modifyId": 9,
                    "remark": "slot booking",
                    "userId": 6,
                    "advance": 0,
                    "preOrderId": 37,
                    "balance": 0,
                    "clubSlotId": 23,
                    "id": 7,
                    "customerMobile": "8508569687"
                },
                {
                    "clubBookingStaus": "Y",
                    "amount": 20,
                    "orderNumber": "PV-2022111-38",
                    "paymentMode": "Card",
                    "orderId": 8,
                    "remark": "slot booking",
                    "userId": 6,
                    "advance": 0,
                    "preOrderId": 38,
                    "balance": 0,
                    "clubSlotId": 23,
                    "id": 8,
                    "customerMobile": "8508569687"
                },
                {
                    "clubBookingStaus": "Y",
                    "amount": 100,
                    "orderNumber": "PV-2022111-41",
                    "paymentMode": "Card",
                    "orderId": 9,
                    "remark": "slot booking",
                    "userId": 6,
                    "advance": 0,
                    "preOrderId": 41,
                    "balance": 0,
                    "clubSlotId": 23,
                    "id": 9,
                    "customerMobile": "8508569687"
                },
                {
                    "clubBookingStaus": "N",
                    "amount": 100,
                    "orderNumber": "PV-2022111-42",
                    "modifyDate": "2022-11-01 21:56:28.0",
                    "paymentMode": "Card",
                    "orderId": 10,
                    "modifyId": 9,
                    "remark": "slot booking",
                    "userId": 6,
                    "advance": 0,
                    "preOrderId": 42,
                    "balance": 0,
                    "clubSlotId": 23,
                    "id": 10,
                    "customerMobile": "8508569687"
                },
                {
                    "clubBookingStaus": "Y",
                    "amount": 0,
                    "orderNumber": "PV-20221123-44",
                    "paymentMode": "Card",
                    "orderId": 11,
                    "remark": "slot booking",
                    "userId": 6,
                    "advance": 0,
                    "preOrderId": 44,
                    "balance": 0,
                    "clubSlotId": 23,
                    "id": 11,
                    "customerMobile": "8508569687"
                }
            ]
        ];
    })

    mock.onGet("/club/page/listOfEvents").reply(
        (config)=>{
            return [
                200,
                [
                    {
                        "eventId": 1,
                        "eventEndDate": "2022-03-10",
                        "coordinationEmail": "pvuser@gmail",
                        "regEndDate": "2022-06-10",
                        "genderMate": "male",
                        "numberTicket": 200,
                        "clubId": 23,
                        "eventType": "FootBall",
                        "coordinationNumber": "90919191923",
                        "eventSprotsMode": "FootBall",
                        "selectSports": "FootBall",
                        "eventTitle": "Levins test Event",
                        "price": "20",
                        "eventDescription": "This is just for fun event",
                        "eventStartDate": "2022-03-12",
                        "regStartDate": "2022-06-13",
                        "status": "N"
                    },
                    {
                        "eventId": 2,
                        "eventEndDate": "2022-03-10",
                        "coordinationEmail": "pvuser@gmail",
                        "regEndDate": "2022-06-10",
                        "genderMate": "male",
                        "numberTicket": 200,
                        "clubId": 23,
                        "eventType": "FootBall",
                        "coordinationNumber": "90919191923",
                        "eventSprotsMode": "FootBall",
                        "selectSports": "FootBall",
                        "eventTitle": "Saran test Event",
                        "price": "20",
                        "eventDescription": "This is just for fun event",
                        "eventStartDate": "2022-03-1",
                        "regStartDate": "2022-04-20",
                        "status": "N"
                    },
                    {
                        "eventId": 3,
                        "eventEndDate": "2022-03-10",
                        "coordinationEmail": "pvuser@gmail",
                        "regEndDate": "2022-06-10",
                        "genderMate": "male",
                        "numberTicket": 200,
                        "clubId": 25,
                        "eventType": "FootBall",
                        "coordinationNumber": "90919191923",
                        "eventSprotsMode": "FootBall",
                        "selectSports": "FootBall",
                        "eventTitle": "Saran test Event",
                        "price": "20",
                        "eventDescription": "This is just for fun event",
                        "eventStartDate": "2022-03-1",
                        "regStartDate": "2022-06-1",
                        "status": "N"
                    }
                ]
            ];
        }
    )

    mock.onGet("/user/page/listOfClubs").reply(
        (config) => {
            return [
                200,
                [
                    {
                        "clubId": 23,
                        "firstName": "saran",
                        "lastName": "raj",
                        "email": "saran@test.com",
                        "password": "12345678",
                        "mobile": "808123872837",
                        "customerClubName": "Start Club",
                        "clubContactPerson": "Legend",
                        "clubContactNumnber": "9876876576",
                        "clubAddress": "Chennai",
                        "country": "india",
                        "state": "TamilNadu",
                        "city": "Chennai",
                        "pincode": "983838",
                        "latitude": "17.769407",
                        "longitude": "77.127478",
                        "aboutClub": "this is fun club",
                        "termsCondation": "rule and regulations not for us ",
                        "createDate": 1657021158000,
                        "modifyDate": 1670757877000,
                        "openTime": "04:00",
                        "closeTime": "23:00",
                        "maxUser": null,
                        "isActive": "Y",
                        "isOtpVerified": "Y",
                        "isEmailVerified": "N",
                        "isPvVerified": "Y",
                        "isHolidy": null,
                        "pvId": "9845616887@pv",
                        "clubLogo": null,
                        "clubLogoName": null,
                        "totalDistance": null,
                        "sprotsModelList": null,
                        "amenitieList": null
                    },
                    {
                        "clubId": 27,
                        "firstName": "Daya",
                        "lastName": "P R",
                        "email": null,
                        "password": "pv@12345",
                        "mobile": "9019333090",
                        "customerClubName": null,
                        "clubContactPerson": null,
                        "clubContactNumnber": null,
                        "clubAddress": null,
                        "country": null,
                        "state": null,
                        "city": "Chennai",
                        "pincode": null,
                        "latitude": null,
                        "longitude": null,
                        "aboutClub": null,
                        "termsCondation": null,
                        "createDate": 1650040106000,
                        "modifyDate": null,
                        "openTime": null,
                        "closeTime": null,
                        "maxUser": null,
                        "isActive": "Y",
                        "isOtpVerified": "Y",
                        "isEmailVerified": "N",
                        "isPvVerified": "N",
                        "isHolidy": null,
                        "pvId": "9019333090@pv",
                        "clubLogo": null,
                        "clubLogoName": null,
                        "totalDistance": null,
                        "sprotsModelList": null,
                        "amenitieList": null
                    },
                    {
                        "clubId": 28,
                        "firstName": "Ambi",
                        "lastName": "Yadav",
                        "email": null,
                        "password": "Rockstar",
                        "mobile": "9449733111",
                        "customerClubName": null,
                        "clubContactPerson": null,
                        "clubContactNumnber": null,
                        "clubAddress": null,
                        "country": null,
                        "state": null,
                        "city": null,
                        "pincode": null,
                        "latitude": null,
                        "longitude": null,
                        "aboutClub": null,
                        "termsCondation": null,
                        "createDate": 1650020429000,
                        "modifyDate": null,
                        "openTime": null,
                        "closeTime": null,
                        "maxUser": null,
                        "isActive": "Y",
                        "isOtpVerified": "Y",
                        "isEmailVerified": "N",
                        "isPvVerified": "Y",
                        "isHolidy": null,
                        "pvId": "9449733111@pv",
                        "clubLogo": null,
                        "clubLogoName": null,
                        "totalDistance": null,
                        "sprotsModelList": null,
                        "amenitieList": null
                    },
                    {
                        "clubId": 29,
                        "firstName": "Akash",
                        "lastName": "Gokral",
                        "email": null,
                        "password": "akash123",
                        "mobile": "7028353526",
                        "customerClubName": null,
                        "clubContactPerson": null,
                        "clubContactNumnber": null,
                        "clubAddress": null,
                        "country": null,
                        "state": null,
                        "city": null,
                        "pincode": null,
                        "latitude": null,
                        "longitude": null,
                        "aboutClub": null,
                        "termsCondation": null,
                        "createDate": 1650868627000,
                        "modifyDate": null,
                        "openTime": null,
                        "closeTime": null,
                        "maxUser": null,
                        "isActive": "Y",
                        "isOtpVerified": "Y",
                        "isEmailVerified": "N",
                        "isPvVerified": "Y",
                        "isHolidy": null,
                        "pvId": "7028353526@pv",
                        "clubLogo": null,
                        "clubLogoName": null,
                        "totalDistance": null,
                        "sprotsModelList": null,
                        "amenitieList": null
                    }
                ]
            ];
        }
    )

};