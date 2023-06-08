import React, { createContext, useReducer, useRef, useContext } from "react";

const initItems = [
  {
    id: 1,
    src: " https://shoppingcdn.namyangi.com/attach/item/2022/202203/40ecdf28-85fc-4d3a-b831-6e21bb4aee0c.jpg?03bba6c",
    title: "[냉장]맛있는우유 GT 슈퍼밀크 900mL",
    price: "2980원",
    act: true,
    product: true,
  },
  {
    id: 2,
    src: " https://shoppingcdn.namyangi.com/attach/item/2022/202203/8ab07b7b-97ec-4663-9aa0-b26a0b4171b1.jpg?03bba6c",
    title: "[냉장]맛있는우유 GT 소화잘되는 배안아픈 우유 900mL",
    price: "3250원",
    act: true,
    product: true,
  },
  {
    id: 3,
    src: " https://shoppingcdn.namyangi.com/attach/item/2022/202203/9b0fa8f2-05c0-4f3b-9e9f-7171b27805d2.jpg?03bba6c",
    title: "[냉장]맛있는우유 GT 깔끔한 저지방 2.3L",
    price: "6200원",
    act: true,
    product: true,
  },
  {
    id: 4,
    src: " https://shoppingcdn.namyangi.com/attach/item/2022/202203/470ee65b-4c87-45a3-85dd-9bcee652585a.jpg?03bba6c",
    title: "[냉장]맛있는우유 GT 1.8L",
    price: "5050원",
    act: true,
    product: true,
  },
  {
    id: 5,
    src: "https://shoppingcdn.namyangi.com/attach/item/2022/202212/068ce5d3-a68c-48f0-ad13-e13e616b964d.jpg?03bba6c",
    title: "[냉장]떠먹는 불가리스 딸기 85g*4입",
    price: "3000원",
    act: true,
    product: true,
  },
  {
    id: 6,
    src: " https://shoppingcdn.namyangi.com/attach/item/2022/202212/068ce5d3-a68c-48f0-ad13-e13e616b964d.jpg?03bba6c",
    title: "[냉장]떠먹는 불가리스 복숭아 85g*4입",
    price: "3000원",
    act: true,
    product: true,
  },
  {
    id: 7,
    src: " https://shoppingcdn.namyangi.com/attach/item/2022/202211/847242a9-329b-4b5c-869d-b3a51d294a2f.jpg?03bba6c",
    title: "[냉장]또떠불 눈꽃초코 & 그래놀라 125g",
    price: "1400원",
    act: true,
    product: true,
  },
  {
    id: 8,
    src: "https://shoppingcdn.namyangi.com/attach/item/2022/202211/e9520296-80fd-4e13-96f0-f957df5ee254.jpg?03bba6c",
    title: "[냉장]또떠불 하트초코 125g",
    price: "1400원",
    act: true,
    product: true,
  },

  //분류별

  {
    id: 9,
    src: "https://shoppingcdn.namyangi.com/attach/site/2023/202301/5f232e2c-77f2-439c-94eb-8e497d220000.png?03bba6c",
    title: "55년 모유 연구 노하우",
    name: "임페리얼XO",
    brand1: true,
    act: true,
  },
  {
    id: 10,
    src: "https://shoppingcdn.namyangi.com/attach/site/2023/202301/1da32ee9-1505-4c26-846b-224f6655a35d.png?03bba6c",
    title: "분유에 진심을 영양에 과학을",
    name: "아이엠마더",
    brand1: true,
    act: true,
  },
  {
    id: 11,
    src: "https://shoppingcdn.namyangi.com/attach/site/2023/202301/cff83b65-73f2-4088-a1aa-b3241f930fc7.png?03bba6c",
    title: "365일 자연방목 3%미만 한정생산",
    name: "유기농산양",
    brand1: true,
    act: true,
  },
  {
    id: 12,
    src: "https://shoppingcdn.namyangi.com/attach/site/2023/202301/8a9fde0e-751a-4c8f-877f-7af1598cd8cb.png?03bba6c",
    title: "아기의 성장 단계별 영양설계",
    name: "아기사랑수",
    brand1: true,
    act: true,
  },
  {
    id: 13,
    src: "https://shoppingcdn.namyangi.com/attach/site/2023/202301/b5183af1-b762-438b-8ce4-a81b0c5f822b.png?03bba6c",
    title: "민감한 아기를 위한",
    name: "컴포터케어",
    brand1: true,
    act: true,
  },
  {
    id: 14,
    src: "https://shoppingcdn.namyangi.com/attach/site/2022/202208/cce13fe0-c516-4644-a914-9a9e230134fc.png?03bba6c",
    title: "한번 더 생각한 우리아이 안심먹거리",
    name: "아이꼬야",
    brand1_1: true,
    act: true,
  },
  {
    id: 15,
    src: "https://shoppingcdn.namyangi.com/attach/site/2023/202301/cff83b65-73f2-4088-a1aa-b3241f930fc7.png?03bba6c",
    title: "품질검사도 영양성분도 한수위",
    name: "아인슈타인",
    brand1_1: true,
    act: true,
  },
  {
    id: 16,
    src: "https://shoppingcdn.namyangi.com/attach/site/2022/202208/47176eb5-5d5c-4945-b1f0-26eb4fbdd5ad.png?03bba6c",
    title: "엄마의 마음으로 만든 이유식",
    name: "맘스쿠킹",
    brand1_1: true,
    act: true,
  },
  {
    id: 17,
    src: "https://shoppingcdn.namyangi.com/attach/site/2023/202301/ebadcfc5-97fa-4b27-8455-cc35a76bb2ef.png?03bba6c",
    title: "우리아이 성장의 KEY를 찾다",
    name: "키플러스",
    brand1_1: true,
    act: true,
  },

  // 이름별 분류

  {
    id: 18,
    src: "https://shoppingcdn.namyangi.com/attach/site/2022/202208/51a85abe-d397-4780-8d65-a70a1a3fd664.png?03bba6c",
    title: "자연방목치즈",
    name: "드빈치",
    brand2: true,
    act: true,
  },
  {
    id: 19,
    src: "https://shoppingcdn.namyangi.com/attach/site/2022/202208/27bb7f34-6e88-42de-9222-bc4c2fc5d53d.png?03bba6c",
    title: "지금껏 만날 수 없었던 리얼 라떼, 루카스나인",
    name: "루카스나인",
    brand2_2: true,
    act: true,
  },
  {
    id: 20,
    src: "https://shoppingcdn.namyangi.com/attach/site/2022/202208/4b240753-745a-451d-9b1f-ce23be20d252.png?03bba6c",
    title: "품질고집으로 만든 GT의 프리미엄",
    name: "맛있는우유",
    brand2_2: true,
    act: true,
  },
  {
    id: 21,
    src: "https://shoppingcdn.namyangi.com/attach/site/2022/202208/d24bcef2-2ae9-47d3-8a8e-5f0c3444113c.png?03bba6c",
    title: "맛도 건강도 생각한 프리미엄 두유",
    name: "맛있는두유",
    brand2_2: true,
    act: true,
  },
  {
    id: 22,
    src: "https://shoppingcdn.namyangi.com/attach/site/2022/202208/47176eb5-5d5c-4945-b1f0-26eb4fbdd5ad.png?03bba6c",
    title: "엄마의 마음으로 만든 이유식",
    name: "맘스쿠킹",
    brand2_2: true,
    act: true,
  },
  {
    id: 23,
    src: "https://shoppingcdn.namyangi.com/attach/site/2023/202301/ea1177c6-ed09-407c-b0e5-578db8fcbe43.png?03bba6c",
    title: "자연의시작",
    name: "불가리스",
    brand2_2: true,
    act: true,
  },
  // 기획전
  {
    id: 24,
    src: "https://shoppingcdn.namyangi.com/attach/item/2023/202304/6c205439-e307-4d42-abb8-f099a5617735.png",
    title: "루카스나인 리저브 드립스틱 신제품 출시",
    name: "2023.04.04 ~ 2023.05.31",
    pop: true,
  },
  {
    id: 25,
    src: "https://shoppingcdn.namyangi.com/attach/item/2023/202302/7a666558-7a70-499d-9b5d-403d548aa6c4.png",
    title: "분유에 진심을 영양에 과학을_ 남양 분유 기획전",
    name: "2023.02.07 ~ 2023.06.30",
    pop: true,
  },
  {
    id: 26,
    src: "https://shoppingcdn.namyangi.com/attach/item/2023/202301/f51165d8-6e0e-4463-bdaa-da6fa933a895.png",
    title: "테이크핏 케어, 9가지 필수 아미노산이 모두 함유된 완전 단백질 플랜",
    name: "2023.01.30 ~ 2023.06.30",
    pop: true,
  },
  {
    id: 27,
    src: "https://shoppingcdn.namyangi.com/attach/item/2022/202211/3d8bd170-f24b-42f7-958f-eee11cfe77f1.png",
    title: "우리아이 성장의 KEY를 찾다 키플러스 (성장기어린이/청소년)",
    name: "2022.11.02 ~ 2023.06.30",
    pop: true,
  },
  {
    id: 28,
    src: "https://shoppingcdn.namyangi.com/attach/item/2022/202211/f95274ad-2da6-4172-8f6e-53bbeb1f6e5b.png",
    title: "국내산 천마로 더 진하고 든든한 천마차(단호박/콘플레이크)",
    name: "2022.11.02 ~ 2023.06.30",
    pop: true,
  },
  {
    id: 29,
    src: "https://shoppingcdn.namyangi.com/attach/item/2022/202210/c8853528-4bbf-47c2-85d4-2a0463b31fca.png",
    title: "든든한 하루의 시작 아몬드데이 (오리지널/언스위트)",
    name: "2022.10.06 ~ 2023.06.30",
    pop: true,
  },
  // 진행중인 이벤트
  {
    id: 30,
    src: "https://shoppingcdn.namyangi.com/attach/item/2023/202305/77352f00-bb9b-44ce-af56-efa6f5d9fa7d.png",
    title: "오직 시크릿마켓에서만, 쉿크릿 0원딜!",
    name: "기간 23.05.16 ~ 23.05.19",
    event1: true
  },
  {
    id: 31,
    src: "https://shoppingcdn.namyangi.com/attach/item/2023/202304/c59164d0-98b2-49f4-8b82-d6eb920e4868.png",
    title: "함께하면 대박나는 2023 동행축제",
    name: "기간 23.05.16 ~ 23.05.19",
    event1: true
  },
  {
    id: 32,
    src: "https://shoppingcdn.namyangi.com/attach/item/2023/202304/f249255d-5634-473f-ab68-afe7a7e86de5.jpg",
    title: "남양몰 포토리뷰 베스트 리뷰어 이벤트",
    name: "기간 23.05.16 ~ 23.05.19",
    event1: true
  },
  {
    id: 33,
    src: "https://shoppingcdn.namyangi.com/attach/item/2023/202304/ed5ed4c7-31bf-4367-b797-c71a272dc09e.png",
    title: "남양몰 APP 다운로드 이벤트",
    name: "기간 23.05.16 ~ 23.05.19",
    event1: true
  },
  {
    id: 34,
    src: "https://shoppingcdn.namyangi.com/attach/item/2022/202204/fd7365dc-b5be-45ad-bcb4-e8a5c534ae8c.png",
    title: "초특가의 신세계, 남양몰 시크릿마켓!",
    name: "기간 23.05.16 ~ 23.05.19",
    event1: true
  },
  // 종료된 이벤트
  {
    id: 30,
    src: "https://shoppingcdn.namyangi.com/attach/item/2023/202305/77352f00-bb9b-44ce-af56-efa6f5d9fa7d.png",
    title: "오직 시크릿마켓에서만, 쉿크릿 0원딜!",
    name: "기간 23.05.16 ~ 23.05.19",
    event2: true
  },
  {
    id: 31,
    src: "https://shoppingcdn.namyangi.com/attach/item/2023/202305/77352f00-bb9b-44ce-af56-efa6f5d9fa7d.png",
    title: "오직 시크릿마켓에서만, 쉿크릿 0원딜!",
    name: "기간 23.05.16 ~ 23.05.19",
    event2: true
  },
  {
    id: 32,
    src: "https://shoppingcdn.namyangi.com/attach/item/2023/202305/77352f00-bb9b-44ce-af56-efa6f5d9fa7d.png",
    title: "오직 시크릿마켓에서만, 쉿크릿 0원딜!",
    name: "기간 23.05.16 ~ 23.05.19",
    event2: true
  },
  {
    id: 33,
    src: "https://shoppingcdn.namyangi.com/attach/item/2023/202305/77352f00-bb9b-44ce-af56-efa6f5d9fa7d.png",
    title: "오직 시크릿마켓에서만, 쉿크릿 0원딜!",
    name: "기간 23.05.16 ~ 23.05.19",
    event2: true
  },
  {
    id: 34,
    src: "https://shoppingcdn.namyangi.com/attach/item/2023/202305/77352f00-bb9b-44ce-af56-efa6f5d9fa7d.png",
    title: "오직 시크릿마켓에서만, 쉿크릿 0원딜!",
    name: "기간 23.05.16 ~ 23.05.19",
    event2: true
  },
  // 가정배달 추천제품
  {
    id: 35,
    src: "https://shoppingcdn.namyangi.com/attach/item/2022/202210/09710662-1367-4fdf-b0cc-6f30c6c7f9a6.jpg?03bba6c",
    name: "[가정배달] 아침의 선물 (930ml)",
    price: "1550원",
    deli1: true
  },
  {
    id: 36,
    src: "https://shoppingcdn.namyangi.com/attach/item/2021/202111/66d0430e-5b53-4578-9b85-1f94eeec969b.jpg?03bba6c",
    name: "[가정배달] 아침의 선물 (930ml)",
    price: "3200원",
    deli1: true
  },
  {
    id: 37,
    src: "https://shoppingcdn.namyangi.com/attach/item/2021/202111/f84d85fa-2711-49d0-96b7-c58a4a824fa1.jpg?03bba6c",
    name: "[가정배달] 아침의 선물 슈퍼밀크 (900ml)",
    price: "3600원",
    deli1: true
  },
  {
    id: 38,
    src: "https://shoppingcdn.namyangi.com/attach/item/2019/201908/2c94a5f5-135f-4357-a3b5-999f53be5970.jpg?03bba6c",
    name: "[가정배달] 아침의 선물 고칼슘&글루코사민 (900ml)",
    price: "3600원",
    deli1: true
  },
  {
    id: 39,
    src: "https://shoppingcdn.namyangi.com/attach/item/2020/202004/74b07f79-8da7-422a-be7b-d2559b9d29a0.jpg?03bba6c",
    name: "[가정배달] 하루근력 (900ml)",
    price: "3750원",
    deli1: true
  },
  // 아이를 위한 제품
  {
    id: 40,
    src: "https://shoppingcdn.namyangi.com/attach/item/2019/201908/6b40a997-2daa-43df-802d-524fd0a77b46.jpg?03bba6c",
    name: "[가정배달] 이오 (80ml)",
    price: "550원",
    deli2: true
  },
  {
    id: 41,
    src: "https://shoppingcdn.namyangi.com/attach/item/2020/202002/312b3b02-aaac-48f7-b0f8-63ff9d3540b4.jpg?03bba6c",
    name: "[가정배달] 아침의 선물 아인슈타인 베이비(900ml)",
    price: "3600원",
    deli2: true
  },
  {
    id: 42,
    src: "https://shoppingcdn.namyangi.com/attach/item/2020/202002/6d2173de-954d-4b8b-a62a-db4831e5e772.jpg?03bba6c",
    name: "[가정배달] 아침의 선물 아인슈타인 키즈(900ml)",
    price: "3600원",
    deli2: true
  },
];

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
  );
}

export function useItemState() {
  const context = useContext(ItemStateContext);
  if (!context) {
    throw new Error("ItemStateContext를 찾을수 없음");
  }
  return context;
}
