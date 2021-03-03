import logo from './logo.svg';
import './App.css';

const fruit = 'apple';
const isHuman = true;
const isAnimal = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'blueviolet',
          margin: 12
        }}>
          Добавим в разметку объект style
        </p>
        <p style={{
          margin: 12
        }}>
          Выведем значение переменной: {fruit} и число: {10}
        </p>
        <p style={{
          margin: 12
        }}>
          Выведем результат арифметической операции {20 + 3 * 2}
        </p>
        <p style={{
          margin: 12
        }}>
          Выведем результат логической операции: {isHuman && 'Это человек'}
        </p>
        <p style={{
          margin: 12
        }}>
          Используем тернарное условие: {isAnimal ? 'Это животное' : 'Но это же не животное'}
        </p>
        <p style={{
          margin: 12
        }}>
          Пробуем вывести в разметку undefined: {undefined}, null: {null}, false: {false},
          true: {true}, но ничего не получается
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
