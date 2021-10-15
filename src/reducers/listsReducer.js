const initialState = [
  {
    title: "Last Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "We created a static list and a static card."
      },
      {
        id: 1,
        text: "We used a mix of Material UI, React and styled components."
      }
    ]
  },
  {
    title: "This Episode",
    id: 1,
    cards: [
      {
        id: 0,
        text: "We will create our first Reducer."
      },
      {
        id: 1,
        text: "We will render many cards, using data from the reducer."
      }
    ]
  }  
]

const listsReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default listsReducer;