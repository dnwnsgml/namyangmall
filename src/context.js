import React, { createContext, useReducer, useRef, useContext } from "react";

const initItems = [
    {
        id: 1,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아01',
        price: '1000원',
        act: true,
        brand1: false
    },
    {
        id: 2,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아02',
        price: '2000원',
        act: true,
        brand1: false
    },
    {
        id: 3,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아03',
        price: '3000원',
        act: false,
    },
    {
        id: 4,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아04',
        price: '4000원',
        act: false,
    },
    {
        id: 5,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '1000원',
        act: true
    },
    {
        id: 6,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '2000원',
        act: true
    },
    {
        id: 7,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '3000원',
        act: false
    },
    {
        id: 8,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51',
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '4000원',
        act: false
    },

    //분류별 

    {
        id: 9,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/5f232e2c-77f2-439c-94eb-8e497d220000.png?03bba6c',
        title: '55년 모유 연구 노하우',
        name: '임페리얼XO',
        brand1: true,
        act: true
    },
    {
        id: 10,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c',
        title: '분유에 진심을 영양에 과학을',
        name: '아이엠마더',
        brand1: true,
        act: true
    },
    {
        id: 11,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/cff83b65-73f2-4088-a1aa-b3241f930fc7.png?03bba6c',
        title: '365일 자연방목 3%미만 한정생산',
        name: '유기농산양',
        brand1: true,
        act: true
    },
    {
        id: 12,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/8a9fde0e-751a-4c8f-877f-7af1598cd8cb.png?03bba6c',
        title: '아기의 성장 단계별 영양설계',
        name: '아기사랑수',
        brand1: true,
        act: true
    },
    {
        id: 13,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/b5183af1-b762-438b-8ce4-a81b0c5f822b.png?03bba6c',
        title: '민감한 아기를 위한',
        name: '컴포터케어',
        brand1: true,
        act: true
    }, {
        id: 14,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2022/202208/cce13fe0-c516-4644-a914-9a9e230134fc.png?03bba6c',
        title: '한번 더 생각한 우리아이 안심먹거리',
        name: '아이꼬야',
        brand1_1: true,
        act: true
    },
    {
        id: 15,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/cff83b65-73f2-4088-a1aa-b3241f930fc7.png?03bba6c',
        title: '품질검사도 영양성분도 한수위',
        name: '아인슈타인',
        brand1_1: true,
        act: true
    },
    {
        id: 16,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2022/202208/47176eb5-5d5c-4945-b1f0-26eb4fbdd5ad.png?03bba6c',
        title: '엄마의 마음으로 만든 이유식',
        name: '맘스쿠킹',
        brand1_1: true,
        act: true
    },
    {
        id: 17,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/ebadcfc5-97fa-4b27-8455-cc35a76bb2ef.png?03bba6c',
        title: '우리아이 성장의 KEY를 찾다',
        name: '키플러스',
        brand1_1: true,
        act: true
    },

    // 이름별 분류

    {
        id: 18,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2022/202208/51a85abe-d397-4780-8d65-a70a1a3fd664.png?03bba6c',
        title: '자연방목치즈',
        name: '드빈치',
        brand2: true,
        act: true
    },
    {
        id: 19,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2022/202208/27bb7f34-6e88-42de-9222-bc4c2fc5d53d.png?03bba6c',
        title: '지금껏 만날 수 없었던 리얼 라떼, 루카스나인',
        name: '루카스나인',
        brand2_2: true,
        act: true
    },
    {
        id: 20,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2022/202208/4b240753-745a-451d-9b1f-ce23be20d252.png?03bba6c',
        title: '품질고집으로 만든 GT의 프리미엄',
        name: '맛있는우유',
        brand2_2: true,
        act: true
    },
    {
        id: 21,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2022/202208/d24bcef2-2ae9-47d3-8a8e-5f0c3444113c.png?03bba6c',
        title: '맛도 건강도 생각한 프리미엄 두유',
        name: '맛있는두유',
        brand2_2: true,
        act: true
    },
    {
        id: 22,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2022/202208/47176eb5-5d5c-4945-b1f0-26eb4fbdd5ad.png?03bba6c',
        title: '엄마의 마음으로 만든 이유식',
        name: '맘스쿠킹',
        brand2_2: true,
        act: true
    },
    {
        id: 23,
        src: 'https://shoppingcdn.namyangi.com/attach/site/2023/202301/ea1177c6-ed09-407c-b0e5-578db8fcbe43.png?03bba6c',
        title: '자연의 시작',
        name: '불가리스',
        brand2_2: true,
        act: true
    }
]

function itemReducer(state, action) {
    switch (action.type) {

    }
}

const ItemStateContext = createContext();

export function Itemprovider({ children }) {

    const [state, dispatch] = useReducer(itemReducer, initItems);

    return (
        <ItemStateContext.Provider value={state}>
            {children}
        </ItemStateContext.Provider>
    )
}

export function useItemState() {
    const context = useContext(ItemStateContext);
    if (!context) {
        throw new Error('ItemStateContext를 찾을수 없음');
    }
    return context
}


