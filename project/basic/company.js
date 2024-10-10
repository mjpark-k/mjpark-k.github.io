const company = [
  {
    name: "ybm",
    actualInvest: 200,
    description:
      "'최고'를 꿈꾸는 YBM은 이에 대응해 사이버 학원등 온라인 영어교육을 확장하고, 어학원을 유아부터 영어를 배우는 평생교육의 장으로, 영재성을 발굴하는 전문화된 교육의 장으로 키워나가고 있습니다. 또한 기술개발을 꾸준히 추진해 새로 시작되는 speaking, writing 테스트 사업을 성공적으로 정착 시켜 나가고 있습니다.",
    revenue: 10,
    employees: 100,
    image: "https://ifh.cc/g/CjSaHG.jpg",
    category: "에듀테크",
  },
  {
    name: "메가스터디",
    actualInvest: 250,
    description:
      "메가스터디교육은 최고를 향해 끊임없이 노력하고, 신뢰와 믿음으로 더불어 일하며, 혁신적 마인드로 변화를 선도하고 있습니다. 앞으로도 더 큰 미래를 향해 끊임없이 도전하겠습니다.",
    revenue: 7,
    employees: 66,
    image: "https://ifh.cc/g/BL60Zg.png",
    category: "에듀테크",
  },
  {
    name: "웅진씽크빅",
    actualInvest: 160,
    description:
      "40년의 교육 노하우를 바탕으로 지속적인 창조와 혁신, 차별화된 콘텐츠를 통해 4차산업혁명시대의 새로운 AI교육기업으로 거듭나고 있습니다.",
    revenue: 8,
    employees: 80,
    image: "https://ifh.cc/g/XxHDGn.png",
    category: "에듀테크",
  },
  {
    name: "야나두",
    actualInvest: 150,
    description:
      "우리는 수강생들을 끊임없이 자극합니다. 장학금으로 지속적인 동기부여를 하고, 1대1 슈퍼케어로 어려워하는 부분을 바로 잡아주고, 10분 강의로 날마다 새로운 호기심을 유발합니다. 그렇게 우리는 수강생들이 결국, 영어 성공이라는 목표를 이루도록 끊임없이 자극합니다.",
    revenue: 3,
    employees: 25,
    image: "https://ifh.cc/g/pXda21.png",
    category: "에듀테크",
  },
  {
    name: "크레버스",
    actualInvest: 270,
    description:
      "크레버스는 21세기가 요청하는 사회·문화적 가치를 발굴하고, 가치를 구현하기 위한 역량들로 융합 인재 양성의 길을 열어갑니다.",
    revenue: 2,
    employees: 15,
    image: "https://ifh.cc/g/pZ7XcA.png",
    category: "에듀테크",
  },
  {
    name: "해커스",
    actualInvest: 310,
    description:
      "해커스교육그룹은 교육 컨텐츠 개발 및 IT 전문분야 교육을 주요 사업으로 영위하고 있습니다. 어학, 공무원, 자격증, 취업, 커뮤니티, 교재 등 다양한 분야로 사업을 확장하고 있으며 올바른 교육의 나눔을 실현하고자 노력합니다.",
    revenue: 10,
    employees: 99,
    image: "https://ifh.cc/g/1SlDC7.png",
    category: "에듀테크",
  },
  {
    name: "GS건설",
    actualInvest: 320,
    description:
      "GS건설은 항상 고객에게 신뢰 받는 기업, 나아가 고객에게 감동을 주는 기업이 되기 위해, 전 임직원이 한마음이 되어 최고의 기술과품질을 바탕으로 고객에게 정성을 다하는 기업이 될 것을 여러분께 약속 드립니다.",
    revenue: 16,
    employees: 103,
    image: "https://ifh.cc/g/xozzqW.png",
    category: "건설업",
  },
  {
    name: "KCC건설",
    actualInvest: 350,
    description:
      "KCC건설은 글로벌 초일류 정밀화학기업의 계열사로, 경영상태와 재무구조의 견실도가 국내 대형 건설업체 중 가장 튼튼한 기업이라고 자부하고 있으며, 앞으로도 변함없이 고객 여러분께 감동을 전하고 사랑받는 기업이 되도록 전 임직원이 최선을 다할 것을 약속드립니다.",
    revenue: 15,
    employees: 55,
    image: "https://ifh.cc/g/Ms1fvN.png",
    category: "건설업",
  },
  {
    name: "삼성SDI",
    actualInvest: 400,
    description:
      "삼성SDI는 친환경 에너지와 첨단 소재를 양대 축으로 전기자동차, ESS(Energy Storage System), Power Tool, IT용 배터리 사업과 반도체, 디스플레이, 배터리용 전자재료 사업을 전개하고 있습니다.",
    revenue: 50,
    employees: 86,
    image: "https://ifh.cc/g/oaDwxq.png",
    category: "제조업",
  },
  {
    name: "KSS해운",
    actualInvest: 220,
    description:
      "회사는 1969년에 설립하여 동북아 지역에서 액화가스 및 액체 석유화학 제품의 해상운송 서비스로 사업을 개시하였습니다. 석유화학제품을 안전하게 운송하는 첨단 기술력, 화주 본위의 운항일정 및 정도 경영을 통해 모든 고객이 만족할 수 있도록 혼신 의 노력을 경주해 왔습니다.",
    revenue: 5,
    employees: 30,
    image: "https://ifh.cc/g/Bmd1fv.png",
    category: "운송업",
  },
  {
    name: "CGV",
    actualInvest: 270,
    description:
      "CGV는 영화 그 이상의 다양한 몰입의 경험을 만드는 'DEEP DIVE SPACE'로 끊임없이 진화하고 있습니다.",
    revenue: 17,
    employees: 30,
    image: "https://ifh.cc/g/B1THvp.png",
    category: "정보통신업",
  },
  {
    name: "NICE",
    actualInvest: 270,
    description:
      "신용평가를 통해 자본시장의 길잡이 역할을 하고, 다양한 데이터를 집중하여 유의미한 데이터 소스를 시장에 제공합니다. 우리가 매일 사용하는 IT기기/스마트폰의 반도체, 자동차의 핵심부품도 NICE의 기술력으로 만들어갑니다.",
    revenue: 4,
    employees: 14,
    image: "https://ifh.cc/g/FlO8FT.png",
    category: "기술서비스",
  },
];

const newCompany = [
  {
    name: "쿠팡",
    actualInvest: 210,
    description:
      "현재 대한민국을 중심으로 사업을 운영하고 있으며, 대만 등 해외로 사업을 확대하고 있는 중이다. 현재 한국 내 전자상거래 점유율 1위[3] 업체이며, 택배와 OTT, 음식 배달 분야에서 2위 점유율을 기록하고 있다.",
    revenue: 14,
    employees: 140,
    image: "https://ifh.cc/g/Gf5OXR.png",
    category: "전자상거래",
  },
  {
    name: "11번가",
    actualInvest: 220,
    description:
      "11번가는 3대 핵심가치를 모든 의사결정 과정의 근간에 두고, 오늘보다 더 나은 내일의 쇼핑 생활을 만들어 나갑니다.",
    revenue: 12,
    employees: 104,
    image: "https://ifh.cc/g/6cfSJ5.png",
    category: "전자상거래",
  },
  {
    name: "G마켓",
    actualInvest: 170,
    description:
      "신세계그룹 계열사인 지마켓(구.이베이코리아)이 운영하고 있는 국내 최대 오픈마켓 사이트. 옥션과 함께 2020년 기준 거래액 규모 20조원으로, 대한민국 e커머스 시장 점유율 3위를 차지하고 있다.",
    revenue: 9,
    employees: 67,
    image: "https://ifh.cc/g/QYxGt2.png",
    category: "전자상거래",
  },
  {
    name: "GS SHOP",
    actualInvest: 280,
    description:
      "GS리테일의 e커머스, 홈쇼핑 브랜드. CJ오쇼핑과 한국 홈쇼핑 업계를 이끌고 있다.",
    revenue: 20,
    employees: 57,
    image: "https://ifh.cc/g/jXKvwn.png",
    category: "전자상거래",
  },
  {
    name: "CJ온스타일",
    actualInvest: 120,
    description:
      "CJ온스타일은 CJ ENM 커머스부문의 경험과 데이터를 기반으로 고객에게 안목 있는 상품과 브랜드를 최적으로 큐레이팅하는 플랫폼입니다.",
    revenue: 9,
    employees: 56,
    image: "https://ifh.cc/g/1TR63m.png",
    category: "전자상거래",
  },
  {
    name: "알리익스프레스",
    actualInvest: 270,
    description:
      "알리익스프레스는 2010년 4월 알리바바 본사가 있는 항저우에 설립된 중국 최대의 해외판매 전문 글로벌 이커머스 플랫폼이다. 현재 영어·스페인어·한국어 등 18개 언어로 구축돼 전 세계 200여 국가와 지역에서 제품을 판매하고 있다.",
    revenue: 23,
    employees: 47,
    image: "https://ifh.cc/g/CfZl2s.png",
    category: "전자상거래",
  },
  {
    name: "현대HMall",
    actualInvest: 260,
    description:
      "고객을 행복하게 세상을 풍요롭게. 세상의 모든 엣지, Global Shopping Leader 현대홈쇼핑과 함께합니다.",
    revenue: 13,
    employees: 89,
    image: "https://ifh.cc/g/KPljVh.png",
    category: "전자상거래",
  },
  {
    name: "롯데홈쇼핑",
    actualInvest: 290,
    description:
      "롯데 계열 홈쇼핑 회사. 모태는 2001년 개국한 우리홈쇼핑이다. 롯데에서 2007년 인수에 성공해 채널명은 롯데홈쇼핑으로, 법인명은 우리홈쇼핑으로 운영 중이다. 현재 홈쇼핑 순위는 GS, CJ, 현대에 이어 4위다.",
    revenue: 5,
    employees: 69,
    image: "https://ifh.cc/g/rqFVGH.png",
    category: "전자상거래",
  },
  {
    name: "옥션",
    actualInvest: 160,
    description:
      "신세계그룹 계열사인 지마켓에서 운영하는 대한민국 최초의 인터넷 경매 사이트이자 국내 최대 오픈마켓 사이트다.",
    revenue: 9,
    employees: 36,
    image: "https://ifh.cc/g/sRGDTo.png",
    category: "전자상거래",
  },
  {
    name: "SSG.COM",
    actualInvest: 167,
    description:
      "신세계몰, 신세계백화점 온라인몰, 이마트몰, 신세계TV쇼핑, 스타필드, 까사미아, S.I Vilage, 스타벅스, 시코르 등 신세계그룹 산하 법인의 이커머스(온라인 부문)를 담당하는 오픈마켓이다.",
    revenue: 23,
    employees: 45,
    image: "https://ifh.cc/g/A4OHSa.png",
    category: "전자상거래",
  },
  {
    name: "인터파크",
    actualInvest: 178,
    description:
      "투어/티켓 전문 플랫폼으로 (주)야놀자 계열사인 (주)인터파크트리플이 운영합니다.",
    revenue: 27,
    employees: 56,
    image: "https://ifh.cc/g/5NB7Of.png",
    category: "전자상거래",
  },
  {
    name: "코드잇",
    actualInvest: 100,
    description:
      "2017년 설립된 에듀테크(Edu-Tech) 스타트업온라인 프로그래밍 교육 서비스를 제공하고 있다. 프로그래밍 교육에 최적화된 학습 플랫폼과 자체제작 콘텐츠 제공이 특징이다.",
    revenue: 7,
    employees: 26,
    image: "https://ifh.cc/g/xnHz0b.png",
    category: "에듀테크",
  },
  {
    name: "팀스파르타",
    actualInvest: 120,
    description:
      "국내에서 가장 큰 에듀테크 플랫폼 중 하나인 스파르타코딩클럽을 운영하고 계시는 팀스파르타 입니다. 스파르타코딩클럽은 서비스 출시 2년만인 2021년 매출액 100억원을 넘기고, 지난해에는 전년 대비 500% 성장 하는 등 눈부신 성과를 내고 있는 서비스입니다.",
    revenue: 5,
    employees: 22,
    image: "https://ifh.cc/g/Xnn4vO.png",
    category: "에듀테크",
  },
  {
    name: "코드스테이츠",
    actualInvest: 270,
    description:
      "코딩 교육 기관인 부트캠프를 운영하는 코드스테이츠는 김인기 대표가 미국에서 경험한 부트캠프를 모델로 2015년 설립, '선교육 후상환' 방식으로 주목받았다. 수강료를 내지 않고 교육을 먼저 받은 뒤, 취업해 연봉이 일정 수준을 넘어서면 교육비를 상환하는 방식이다.",
    revenue: 4,
    employees: 14,
    image: "https://ifh.cc/g/zKY7Rr.png",
    category: "에듀테크",
  },
  {
    name: "엘리스",
    actualInvest: 100,
    description:
      "성인교육플랫폼대학교육군장병교육코딩교육플랫폼초중등 AI교육디지털새싹캠프.",
    revenue: 14,
    employees: 24,
    image: "https://ifh.cc/g/Fw45yO.png",
    category: "에듀테크",
  },
  {
    name: "삼성물산",
    actualInvest: 270,
    description:
      "삼성물산은 삼성그룹 소속 회사로 대한민국에 본사를 둔, 건설업과 무역업을 주요 사업으로 영위하는 코스피 상장 기업이다.",
    revenue: 45,
    employees: 140,
    image: "https://ifh.cc/g/G3B9O7.png",
    category: "건설업",
  },
  {
    name: "현대건설",
    actualInvest: 170,
    description:
      "현대건설은 1947년 정주영이 설립하였으며 대한민국에 본사를 둔, 현재 현대자동차그룹에 소속된 건설 회사이다. 토목사업, 건축, 주택, 플랜트 등으로 구분되는 사업부문을 영위하며 현대엔지니어링 등 13개의 종속 회사로 구성되어 있다.",
    revenue: 42,
    employees: 130,
    image: "https://ifh.cc/g/99tyRb.png",
    category: "건설업",
  },
  {
    name: "대우건설",
    actualInvest: 180,
    description:
      "대우건설은 1973년 설립되어 대한민국에 본사를 둔, 중흥그룹의 관계사이며 소속된 코스피 상장 건설 회사이다.ㅇ",
    revenue: 67,
    employees: 190,
    image: "https://ifh.cc/g/qpwnSD.png",
    category: "건설업",
  },
  {
    name: "DL이앤씨",
    actualInvest: 270,
    description:
      "DLE&C 주식회사는 대한민국에 본사를 둔, DL그룹 소속 종합건설업체다. 2021년 1월 DL그룹이 지주회사 체제로 전환하면서, 분할 설립됐다.",
    revenue: 15,
    employees: 140,
    image: "https://ifh.cc/g/5Og5yj.png",
    category: "건설업",
  },
  {
    name: "GS건설",
    actualInvest: 160,
    description:
      "GS건설은 1969년에 설립되어 대한민국의 본사를 둔 GS그룹에 소속된 건설 회사이다. 국토교통부의 2021년 토목건축공사업 시공능력평가 결과, 평가액 9조 9,286억 원으로 삼성물산, 현대건설에 이어 3위를 기록했다.",
    revenue: 18,
    employees: 22,
    image: "https://ifh.cc/g/JAOjYq.png",
    category: "건설업",
  },
  {
    name: "포스코이앤씨",
    actualInvest: 300,
    description:
      "포스코그룹의 자회사인 건설사. 등기상 본사는 경상북도 포항시 북구 중흥로 307로 되어 있지만 실제 본사는 인천광역시 연수구 인천타워대로 241 (송도동)에 있다.",
    revenue: 9,
    employees: 28,
    image: "https://ifh.cc/g/ZhBz8J.png",
    category: "건설업",
  },
  {
    name: "롯데건설",
    actualInvest: 100,
    description:
      "롯데건설는 1959년 설립되어 대한민국에 본사를 둔, 롯데그룹에 소속된 건설회사이다. 국토교통부가 발표한 '종합건설사 시공능력평가'에서 시평액 6조 7,850억 원으로, 7위를 기록했다.",
    revenue: 20,
    employees: 50,
    image: "https://ifh.cc/g/xdnyaS.png",
    category: "건설업",
  },
  {
    name: "맥도날드",
    actualInvest: 270,
    description:
      "미국 일리노이주 시카고에서 탄생한 대표적인 다국적 패스트푸드 프랜차이즈. 패스트푸드 햄버거의 대명사 격으로 쓰이며, 코카콜라, iPhone과 함께 미국식 자본주의와 세계화를 상징하는 트레이드마크가 되었다.",
    revenue: 40,
    employees: 140,
    image: "https://ifh.cc/g/yg4FhV.png",
    category: "음식업",
  },
  {
    name: "롯데리아",
    actualInvest: 210,
    description:
      "LOTTERIA는 1972년 9월 도쿄에 첫 번째 레스토랑을 오픈한 동아시아 지역에서 패스트푸드 레스토랑 체인을 운영하는 한국 회사입니다.",
    revenue: 49,
    employees: 142,
    image: "https://ifh.cc/g/5BSARL.png",
    category: "음식업",
  },
  {
    name: "kfc",
    actualInvest: 300,
    description:
      "KFC 또는 켄터키 프라이드 치킨은 미국의 얌! 브랜드의 패스트 푸드의 글로벌 체인점이다. 버거킹, 맥도날드하고 트로이카를 이루며, 아프리카, 북한, 서아시아 일부 국가를 제외한 전 세계 여러 나라에 진출해 있다.",
    revenue: 54,
    employees: 214,
    image: "https://ifh.cc/g/shZ6lt.png",
    category: "음식업",
  },
];

console.log(`개수 = ${newCompany.length}`);
