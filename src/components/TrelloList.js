import { black } from 'material-ui/styles/colors';
// import {boxShadow} from 'jss-plugin-expand';
import React from 'react';
import Card from './TrelloCard';
const TrelloList = ({title, cards}) => {
  
  return (
    <div style={styles.container}>
    <h4 style={styles.title}>{title}</h4>
    {cards.map(card => (< Card message={card.text} id={card.id} style={styles.card} />
    ))}
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
    boxShadow: {
      x: 25,
      y: 25,
      blur: 2,
      spread: 2,
      color: black,
      inset: null // If you want to add inset you need to write "inset: 'inset'"
    }
  },
  '@media (max-width: 330)': {
    container: {
      width: 200
    },
  },

  title: {
    fontFamily: "Roboto"
  },

  card: {
    marginBottom: 8
  }
}

export default TrelloList;