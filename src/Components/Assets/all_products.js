import bars_crew from "./bars_crew.png";
import bars_dak from "./bars_dak.png";
import bars_heaven_black from "./bars_heaven_black.png";
import bars_heaven_chrome from "./bars_heaven_chrome.png";
import frame_biggie_1 from "./frame_biggie_1.png";
import frame_biggie_2 from "./frame_biggie_2.png";
import frame_biggie_3 from "./frame_biggie_3.png";
import frame_biggie_4 from "./frame_biggie_4.png";
import frame_dak_1 from "./frame_dak_1.png";
import frame_dak_2 from "./frame_dak_2.png";
import frame_dak_3 from "./frame_dak_3.png";
import frame_dak_4 from "./frame_dak_4.png";
import frame_dak_5 from "./frame_dak_5.png";
import frame_desert_1 from "./frame_desert_1.png";
import frame_desert_2 from "./frame_desert_2.png";
import frame_desert_3 from "./frame_desert_3.png";
import frame_max_1 from "./frame_max_1.png";
import frame_max_2 from "./frame_max_2.png";
import frame_max_3 from "./frame_max_3.png";
import frame_shorty_1 from "./frame_shorty_1.png";
import frame_shorty_2 from "./frame_shorty_2.png";
import frame_shorty_3 from "./frame_shorty_3.png";
import frame_shorty_4 from "./frame_shorty_4.png";
import seat_cult_vans_1 from "./seat_cult_vans_1.png";
import seat_cult_vans_2 from "./seat_cult_vans_2.png";
import seat_cult_vans_3 from "./seat_cult_vans_2.png";
import seat_cult_vans_4 from "./seat_cult_vans_2.png";
import seat_hemp_1 from "./seat_hemp_1.png";
import seat_vans_snake_1 from "./seat_vans_snake_1.png";
import seat_vans_snake_2 from "./seat_vans_snake_2.png";

let all_product = [
    {
        id: 1,
        name: "bars_crew",
        category: "bars",
        image: "bars_crew.png",
        new_price: 50.0,
        old_price: 55.0,
    },
    {
        id: 2,
        name: "bars_dak",
        category: "bars",
        image: "bars_dak.png",
        new_price: 50.0,
        old_price: 55.0,
    },
    {
        id: 3,
        name: "bars_heaven_black",
        category: "bars",
        image: "bars_heaven_black.png",
        new_price: 50.0,
        old_price: 55.0,
    },
    {
        id: 4,
        name: "bars_heaven_chrome",
        category: "bars",
        image: "bars_heaven_chrome.png",
        new_price: 50.0,
        old_price: 55.0,
    },
    {
        id: 6,
        name: "frame_biggie_1",
        category: "frames",
        image: "frame_biggie_1.png",
        new_price: 60.0,
        old_price: 55.0
    },
    {
        id: 7,
        name: "frame_biggie_2",
        category: "frames",
        image: "frame_biggie_2.png",
        new_price: 65.0,
        old_price: 60.0
    },
    {
        id: 8,
        name: "frame_biggie_3",
        category: "frames",
        image: "frame_biggie_3.png",
        new_price: 70.0,
        old_price: 65.0
    },
    {
        id: 9,
        name: "frame_biggie_4",
        category: "frames",
        image: "frame_biggie_4.png",
        new_price: 75.0,
        old_price: 70.0
    },
    {
        id: 10,
        name: "frame_dak_1",
        category: "frames",
        image: "frame_dak_1.png",
        new_price: 80.0,
        old_price: 75.0
    },
    {
        id: 11,
        name: "frame_dak_2",
        category: "frames",
        image: "frame_dak_2.png",
        new_price: 85.0,
        old_price: 80.0
    },
    {
        id: 12,
        name: "frame_dak_3",
        category: "frames",
        image: "frame_dak_3.png",
        new_price: 90.0,
        old_price: 85.0
    },
    {
        id: 13,
        name: "frame_dak_4",
        category: "frames",
        image: "frame_dak_4.png",
        new_price: 95.0,
        old_price: 90.0
    },
    {
        id: 14,
        name: "frame_dak_5",
        category: "frames",
        image: "frame_dak_5.png",
        new_price: 100.0,
        old_price: 95.0
    },
    {
        id: 15,
        name: "frame_desert_1",
        category: "frames",
        image: "frame_desert_1.png",
        new_price: 105.0,
        old_price: 100.0
    },
    {
        id: 16,
        name: "frame_desert_2",
        category: "frames",
        image: "frame_desert_2.png",
        new_price: 110.0,
        old_price: 105.0
    },
    {
        id: 17,
        name: "frame_desert_3",
        category: "frames",
        image: "frame_desert_3.png",
        new_price: 115.0,
        old_price: 110.0
    },
    {
        id: 18,
        name: "frame_max_1",
        category: "frames",
        image: "frame_max_1.png",
        new_price: 120.0,
        old_price: 115.0
    },
    {
        id: 19,
        name: "frame_max_2",
        category: "frames",
        image: "frame_max_2.png",
        new_price: 125.0,
        old_price: 120.0
    },
    {
        id: 20,
        name: "frame_max_3",
        category: "frames",
        image: "frame_max_3.png",
        new_price: 130.0,
        old_price: 125.0
    },
    {
        id: 21,
        name: "frame_shorty_1",
        category: "frames",
        image: "frame_shorty_1.png",
        new_price: 135.0,
        old_price: 130.0
    },
    {
        id: 22,
        name: "frame_shorty_2",
        category: "frames",
        image: "frame_shorty_2.png",
        new_price: 140.0,
        old_price: 135.0
    },
    {
        id: 23,
        name: "frame_shorty_3",
        category: "frames",
        image: "frame_shorty_3.png",
        new_price: 145.0,
        old_price: 140.0
    },
    {
        id: 24,
        name: "frame_shorty_4",
        category: "frames",
        image: "frame_shorty_4.png",
        new_price: 150.0,
        old_price: 145.0
    },
    {
        id: 25,
        name: "seat_cult_vans_1",
        category: "seats",
        image: "seat_cult_vans_1.png",
        new_price: 155.0,
        old_price: 150.0
    },
    {
        id: 26,
        name: "seat_cult_vans_2",
        category: "seats",
        image: "seat_cult_vans_2.png",
        new_price: 160.0,
        old_price: 155.0
    },
    {
        id: 27,
        name: "seat_cult_vans_3",
        category: "seats",
        image: "seat_cult_vans_3.png",
        new_price: 165.0,
        old_price: 160.0
    },
    {
        id: 28,
        name: "seat_cult_vans_4",
        category: "seats",
        image: "seat_cult_vans_4.png",
        new_price: 170.0,
        old_price: 165.0
    },
    {
        id: 29,
        name: "seat_hemp_1",
        category: "seats",
        image: "seat_hemp_1.png",
        new_price: 175.0,
        old_price: 170.0
    },
    {
        id: 30,
        name: "seat_vans_snake_1",
        category: "seats",
        image: "seat_vans_snake_1.png",
        new_price: 180.0,
        old_price: 175.0
    },

];
