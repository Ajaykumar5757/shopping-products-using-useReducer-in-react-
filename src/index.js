import ReactDOM from 'react-dom';
import React, { useReducer } from 'react';
import './index.css';
import Archery from './images/arrow.jpg';
import Badminton from './images/badminton.jpg';
import Chess from './images/chess.jpg';
import Football from './images/football.jpg';
import TableTennis from './images/table-tennis.jpg';
import Tennis from './images/tennis.jpg';

const initialState = {
  archery: 0,
  badminton: 0,
  chess: 0,
  football: 0,
  tableTennis: 0,
  tennis: 0,
};

function CalculateQuantity(state, action) {
  switch (action.category) {
    case 'increment-archery':
      return { ...state, archery: state.archery + 1 };
    case 'decrement-archery':
      return { ...state, archery: state.archery - 1 };
    case 'increment-badminton':
      return { ...state, badminton: state.badminton + 1 };
    case 'decrement-badminton':
      return { ...state, badminton: state.badminton - 1 };
    case 'increment-chess':
      return { ...state, chess: state.chess + 1 };
    case 'decrement-chess':
      return { ...state, chess: state.chess - 1 };
    case 'increment-football':
      return { ...state, football: state.football + 1 };
    case 'decrement-football':
      return { ...state, football: state.football - 1 };
    case 'increment-tableTennis':
      return { ...state, tableTennis: state.tableTennis + 1 };
    case 'decrement-tableTennis':
      return { ...state, tableTennis: state.tableTennis - 1 };
    case 'increment-tennis':
      return { ...state, tennis: state.tennis + 1 };
    case 'decrement-tennis':
      return { ...state, tennis: state.tennis - 1 };
    default:
      throw new Error('Sorry! something went wrong');
  }
}

function StartCounting() {
  const [state, dispatch] = useReducer(CalculateQuantity, initialState);
  return (
    <div class="main-content">
      <h1 style={{fontSize:"50px"}}>Sports Shop</h1>
      <div class="grid-content">
        <div class="content-one">
          <img src={Archery} alt="Archery" width="450px" height="450px" />
          <h2>Archery Arrow</h2>
          <div class="count-content">
            <button onClick={() => dispatch({ category: 'increment-archery' })}>+</button>
            <span>Count: {state.archery}</span>
            <button onClick={() => dispatch({ category: 'decrement-archery' })}>-</button>
          </div>
        </div>
        <div class="content-one">
          <img src={Badminton} alt="Badminton" width="450px" height="450px" />
          <h2>Badminton Racket</h2>
          <div class="count-content">
            <button onClick={() => dispatch({ category: 'increment-badminton' })}>+</button>
            <span>Count: {state.badminton}</span>
            <button onClick={() => dispatch({ category: 'decrement-badminton' })}>-</button>
          </div>
        </div>
        <div class="content-one">
          <img src={Chess} alt="Chess" width="450px" height="450px" />
          <h2>Chess Board</h2>
          <div class="count-content">
            <button onClick={() => dispatch({ category: 'increment-chess' })}>+</button>
            <span>Count: {state.chess}</span>
            <button onClick={() => dispatch({ category: 'decrement-chess' })}>-</button>
          </div>
        </div>
        <div class="content-one">
          <img src={Football} alt="Football" width="450px" height="450px" />
          <h2>Football</h2>
          <div class="count-content">
            <button onClick={() => dispatch({ category: 'increment-football' })}>+</button>
            <span>Count: {state.football}</span>
            <button onClick={() => dispatch({ category: 'decrement-football' })}>-</button>
          </div>
        </div>
        <div class="content-one">
          <img src={TableTennis} alt="Table Tennis" width="450px" height="450px" />
          <h2>Table Tennis</h2>
          <div class="count-content">
            <button onClick={() => dispatch({ category: 'increment-tableTennis' })}>+</button>
            <span>Count: {state.tableTennis}</span>
            <button onClick={() => dispatch({ category: 'decrement-tableTennis' })}>-</button>
          </div>
        </div>
        <div class="content-one">
          <img src={Tennis} alt="Tennis" width="450px" height="450px" />
          <h2>Tennis Racket</h2>
          <div class="count-content">
            <button onClick={() => dispatch({ category: 'increment-tennis' })}>+</button>
            <span>Count: {state.tennis}</span>
            <button onClick={() => dispatch({ category: 'decrement-tennis' })}>-</button>
          </div>
        </div>
      </div>
      <h1>Total Quantity: {Object.values(state).reduce((sum, count) => sum + count, 0)}</h1>
    </div>
  );
}

ReactDOM.render(<StartCounting />, document.getElementById('root'));
