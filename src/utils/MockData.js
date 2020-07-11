export const stations = [
  {
    id: 5,
    name: "신당",
    createdAt: "2020-07-12T01:14:11.304"
  },
  {
    id: 6,
    name: "상왕십리",
    createdAt: "2020-07-12T01:14:11.304"
  },
  {
    id: 7,
    name: "왕십리",
    createdAt: "2020-07-12T01:14:11.305"
  },
  {
    id: 8,
    name: "한양대",
    createdAt: "2020-07-12T01:14:11.305"
  },
  {
    id: 9,
    name: "뚝섬",
    createdAt: "2020-07-12T01:14:11.305"
  },
  {
    id: 10,
    name: "충무로",
    createdAt: "2020-07-12T01:14:11.306"
  }
];

export const lines = [
  {
    id: 1,
    name: "1호선",
    startTime: "01:14:11",
    endTime: "01:14:11",
    intervalTime: 8,
    createdAt: "2020-07-12T01:14:11.292",
    updatedAt: "2020-07-12T01:14:11.292"
  },
  {
    id: 2,
    name: "2호선",
    startTime: "01:14:11",
    endTime: "01:14:11",
    intervalTime: 8,
    createdAt: "2020-07-12T01:14:11.302",
    updatedAt: "2020-07-12T01:14:11.302"
  },
  {
    id: 3,
    name: "3호선",
    startTime: "01:14:11",
    endTime: "01:14:11",
    intervalTime: 8,
    createdAt: "2020-07-12T01:14:11.303",
    updatedAt: "2020-07-12T01:14:11.303"
  },
  {
    id: 4,
    name: "4호선",
    startTime: "01:14:11",
    endTime: "01:14:11",
    intervalTime: 18,
    createdAt: "2020-07-12T01:14:11.303",
    updatedAt: "2020-07-12T01:14:11.303"
  }
];

export const lineDetails = {
  lineDetailResponse: [
    {
      id: 1,
      name: "1호선",
      startTime: "01:14:11",
      endTime: "01:14:11",
      intervalTime: 8,
      createdAt: "2020-07-12T01:14:11.292",
      updatedAt: "2020-07-12T01:14:11.292",
      stations: [
        {
          id: 5,
          name: "신당",
          createdAt: "2020-07-12T01:14:11.304"
        },
        {
          id: 6,
          name: "상왕십리",
          createdAt: "2020-07-12T01:14:11.304"
        },
        {
          id: 7,
          name: "왕십리",
          createdAt: "2020-07-12T01:14:11.305"
        },
        {
          id: 8,
          name: "한양대",
          createdAt: "2020-07-12T01:14:11.305"
        }
      ]
    },
    {
      id: 2,
      name: "2호선",
      startTime: "01:14:11",
      endTime: "01:14:11",
      intervalTime: 8,
      createdAt: "2020-07-12T01:14:11.302",
      updatedAt: "2020-07-12T01:14:11.302",
      stations: [
        {
          id: 8,
          name: "한양대",
          createdAt: "2020-07-12T01:14:11.305"
        },
        {
          id: 6,
          name: "상왕십리",
          createdAt: "2020-07-12T01:14:11.304"
        },
        {
          id: 9,
          name: "뚝섬",
          createdAt: "2020-07-12T01:14:11.305"
        }
      ]
    },
    {
      id: 3,
      name: "3호선",
      startTime: "01:14:11",
      endTime: "01:14:11",
      intervalTime: 8,
      createdAt: "2020-07-12T01:14:11.303",
      updatedAt: "2020-07-12T01:14:11.303",
      stations: [
        {
          id: 10,
          name: "충무로",
          createdAt: "2020-07-12T01:14:11.306"
        }
      ]
    },
    {
      id: 4,
      name: "4호선",
      startTime: "01:14:11",
      endTime: "01:14:11",
      intervalTime: 18,
      createdAt: "2020-07-12T01:14:11.303",
      updatedAt: "2020-07-12T01:14:11.303",
      stations: []
    }
  ]
};
