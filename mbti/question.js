const qnaList = [
  {
    q: "주말 아침, 일어나보니 오늘따라 완전 봄인듯!",
    a: [
      {
        answer: "놓칠 수 없지! 봄을 즐기러 가자", 
        type: ["ESTP", "ESFP", "ENTP", "ENFP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"]},
      {
        answer: "창 밖으로 구경해도 좋을듯~", 
        type: ["ISTP", "ISFP", "INTP", "INFP", "ISFJ", "ISTJ", "INFJ", "INTJ"]}
    ]
  },
  {
    q: "약속이 있는데... 뭐 입지?",
    a: [
      {
        answer: "봄이니까 화사하게 입어볼까?", 
        type: ["ESTP", "ESFP", "ENTP", "ENFP", "ISTP", "ISFP", "INFP", "INTP"]},
      {
        answer: "어제 골라둔 옷을 입는다", 
        type: ["ESTJ", "ESFJ", "ENTJ", "ENFJ", "ISTJ", "ISFJ", "INFJ", "INTJ"]}
    ]
  },
  {
    q: "아직 녹지 않은 눈 사이로 민들레가 보여.",
    a: [
      {
        answer: "저 민들레도 추우려나?", 
        type: ["ESFP", "ENFP", "ESFJ", "ENFJ", "ISFP", "INFP", "ISFJ", "INFJ"]},
      {
        answer: "꽃이 필 때가 되긴 했지", 
        type: ["ESTP", "ENTP", "ESTJ", "ENTJ", "ISTP", "INTP", "ISTJ", "INTJ"]}
    ]
  },

  {
    q: "봄이 왔다고 느끼는 순간은?",
    a: [
      {
        answer: "몽글몽글 설레는 이 기분", 
        type: ["ESFP", "ENFP", "ESFJ", "ENFJ", "ISFP", "INFP", "ISFJ", "INFJ"]},
      {
        answer: "따뜻해진 기온과 황사", 
        type: ["ESTP", "ENTP", "ESTJ", "ENTJ", "ISTP", "INTP", "ISTJ", "INTJ"]}
    ]
  },
  {
    q: "카페를 가기로 한 날인데... 친구가 갑자기 꽃구경을 가자고 한다.",
    a: [
      {
        answer: "꽃구경 좋다! 빨리 보러 가자", 
        type: ["ESTP", "ESFP", "ENTP", "ENFP", "ISTP", "ISFP", "INFP", "INTP"]},
      {
        answer: "어제 얘기하던가... 스팟을 검색해본다.", 
        type: ["ESTJ", "ESFJ", "ENTJ", "ENFJ", "ISTJ", "ISFJ", "INFJ", "INTJ"]}
    ]
  },
  {
    q: "친구가 떨어지는 벚꽃잎을 잡았다.",
    a: [
      {
        answer: "빨리 소원 빌어!", 
        type: ["ENTP", "ENFP", "ENTJ", "ENFJ", "INTP", "INFP", "INTJ", "INFJ"]},
      {
        answer: "오 잘 잡네...", 
        type: ["ESTP", "ESFP", "ESTJ", "ESFJ", "ISTP", "ISFP", "ISTJ", "ISFJ"]}
    ]
  },

  {
    q: "꽃을 보러 온 곳에 사람들이 바글바글하다.",
    a: [
      {
        answer: "역시 잘 찾아왔구만. 핫플인가봐", 
        type: ["ESTP", "ESFP", "ENTP", "ENFP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"]},
      {
        answer: "사람 좀 빠질 때까지 기다릴래...?", 
        type: ["ISTP", "ISFP", "INTP", "INFP", "ISFJ", "ISTJ", "INFJ", "INTJ"]}
    ]
  },
  {
    q: "꽃이랑 사진 찍고 싶을 때 나는?",
    a: [
      {
        answer: "저기요! 사진 좀 찍어주실 수 있나요?", 
        type: ["ESTP", "ESFP", "ENTP", "ENFP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"]},
      {
        answer: "야... 너가 부탁해봐", 
        type: ["ISTP", "ISFP", "INTP", "INFP", "ISFJ", "ISTJ", "INFJ", "INTJ"]}
    ]
  },
  {
    q: "오늘 가려고 한 카페에 도착했는데... 웨이팅이 너무 길다.",
    a: [
      {
        answer: "딴 데 가자~ 예쁜 곳도 많을 것 같은데", 
        type: ["ESTP", "ESFP", "ENTP", "ENFP", "ISTP", "ISFP", "INFP", "INTP"]},
      {
        answer: "아... 이것 때문에 여기 온건데... 기다린다.", 
        type: ["ESTJ", "ESFJ", "ENTJ", "ENFJ", "ISTJ", "ISFJ", "INFJ", "INTJ"]}
    ]
  },
  
  {
    q: "카페에서 친구에게 최근에 본 드라마 이야기를 해줬다.",
    a: [
      {
        answer: `"기분 좋아지는 이야기야" 느낀 점을 중심으로 설명한다.`, 
        type: ["ENTP", "ENFP", "ENTJ", "ENFJ", "INTP", "INFP", "INTJ", "INFJ"]},
      {
        answer: '"주인공이 그러니까..." 줄거리 위주로 설명한다.', 
        type: ["ESTP", "ESFP", "ESTJ", "ESFJ", "ISTP", "ISFP", "ISTJ", "ISFJ"]}
    ]
  },
  {
    q: '"나 요즘 싱숭생숭해..."라는 친구에게',
    a: [
      {
        answer: "왜 무슨 일 때문이야. 말해봐", 
        type: ["ESFP", "ENFP", "ESFJ", "ENFJ", "ISFP", "INFP", "ISFJ", "INFJ"]},
      {
        answer: "봄 타는거 아냐?", 
        type: ["ESTP", "ENTP", "ESTJ", "ENTJ", "ISTP", "INTP", "ISTJ", "INTJ"]}
    ]
  },
  {
    q: "꽃이 지는 걸 보면",
    a: [
      {
        answer: "꽃이 지네.", 
        type: ["ESTP", "ESFP", "ESTJ", "ESFJ", "ISTP", "ISFP", "ISTJ", "ISFJ"]},
      {
        answer: "쓸쓸하네...", 
        type: ["ENTP", "ENFP", "ENTJ", "ENFJ", "INTP", "INFP", "INTJ", "INFJ"]}
    ]
  },
]

const infoList = [
  {
    name: "ESTP",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "ESFP",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "ESTJ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "ESFJ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "ENTP",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "ENFP",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "ENTJ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "ENFJ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "ISTP",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "ISFP",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "INTP",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "INFP",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "ISFJ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "ISTJ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "INFJ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  {
    name: "INTJ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
  },
  
]

export {qnaList, infoList}; 