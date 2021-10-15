import React, {Component} from 'react';
import TrelloList from './TrelloList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {connect} from "react-redux";
class App extends Component {
  render () {
    const THEME = createTheme({
      typography: {
       "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
       "fontSize": 14,
       "fontWeightLight": 300,
       "fontWeightRegular": 400,
       "fontWeightMedium": 500
      }
    });

    const {lists} = this.props;
    return (
      <div className="App">
        <ThemeProvider theme={THEME}>
          <h1>(F)rello</h1>
          <div style={styles.listsContainer}>
          {lists.map(list => (
          <TrelloList key={list.id} title={list.title} cards={list.cards} />
          ))}
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
