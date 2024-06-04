import React, {useState, useEffect} from "react";
import "./Cards.css";
import Card from "../Card/Card";
import {UilClipboardAlt,} from "@iconscout/react-unicons";

const Cards = () => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(async () => {
        const getTotalBook = async () => {
            const data = await fetch("http://localhost:8080/api/dashboard/total-book")
            return data.json();
        };

        const getTotalBorrowingBook = async () => {
            const data = await fetch("http://localhost:8080/api/dashboard/total-borrow-book");
            return data.json();
        };

        const getTotalAvailableBook = async () => {
            const data = await fetch("http://localhost:8080/api/dashboard/total-available-book");
            return data.json();
        };

        const getTotalAuthor = async () => {
            const data = await fetch("http://localhost:8080/api/dashboard/total-author");
            return data.json();
        };

        const getTotalUsers = async () => {
            const data = await fetch("http://localhost:8080/api/dashboard/total-user");
            return data.json();
        };

        const totalBooks = await getTotalBook();
        const borrowingBooks = await getTotalBorrowingBook();
        const availableBooks = await getTotalAvailableBook();
        const author = await getTotalAuthor();
        const user = await getTotalUsers();

        const cardsData = [
            {
                title: user.name,
                color: {
                    backGround: "linear-gradient(180deg, #FFD8E6 0%, #FFCCE5 100%)",
                    backGround: "linear-gradient(180deg, #FFD8E6 0%, #FFCCE5 100%)",
                },
                barValue: 70,
                value: user.value,
                png: UilClipboardAlt,
                series: [
                    {
                        name: "Total User",
                        data: [31, 40, 28, 51, 42, 109, 100],
                    },
                ],
            },
            {
                title: author.name,
                color: {
                    backGround: "linear-gradient(180deg, #D2B48C 0%, #CDB791 100%)",
                    backGround: "linear-gradient(180deg, #D2B48C 0%, #CDB791 100%)",
                },
                barValue: 80,
                value: author.value,
                png: UilClipboardAlt,
                series: [
                    {
                        name: "Total Author",
                        data: [10, 100, 50, 70, 80, 30, 40],
                    },
                ],
            },
            {
                title: totalBooks.name,
                color: {
                    backGround: "linear-gradient(180deg, #FFC0CB 0%, #FF69B4 100%)",
                    boxShadow: "0px 10px 20px 0px #FFC0CB",
                },
                barValue: 60,
                value: totalBooks.value,
                png: UilClipboardAlt,
                series: [
                    {
                        name: "Total Books",
                        data: [10, 25, 15, 30, 12, 15, 20],
                    },
                ],
            },
            {
                title: borrowingBooks.name,
                color: {
                    backGround: "linear-gradient(180deg, #F5E1DA 0%, #EEDDD6 100%)",
                    boxShadow: "0px 10px 20px 0px #F5E1DA",
                },
                barValue: 60,
                value: borrowingBooks.value,
                png: UilClipboardAlt,
                series: [
                    {
                        name: "Total Borrow Books",
                        data: [10, 25, 15, 30, 12, 15, 20],
                    },
                ],
            },
            {
                title: availableBooks.name,
                color: {
                    backGround: "linear-gradient(180deg, #FFDAB9 0%, #FFA07A 100%)",
                    boxShadow: "0px 10px 20px 0px #FFDAB9",
                },
                barValue: 60,
                value: availableBooks.value,
                png: UilClipboardAlt,
                series: [
                    {
                        name: "Total Available Books",
                        data: [10, 25, 15, 30, 12, 15, 20],
                    },
                ],
            },
        ];
        setCardsData(cardsData);

    }, []);

    return (
        <div className="Cards">
            {cardsData.map((card, id) => {
                return (
                    <div className="parentContainer" key={id}>
                        <Card
                            title={card.title}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            png={card.png}
                            series={card.series}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;
