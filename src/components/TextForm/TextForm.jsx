import React, { useState } from 'react';

const TextForm = ({ mode, showAlertHandler }) => {
  const [text, setText] = useState('Enter your text');

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const upperCaseHandler = () => {
    const newText = text.toUpperCase();
    setText(newText);
    showAlertHandler('Converted to Uppercased!', 'success');
  };

  const lowerCaseHandler = () => {
    const newText = text.toLowerCase();
    setText(newText);
    showAlertHandler('Converted to Lowercased!', 'success');
  };

  const clearTextHandler = () => {
    const newText = '';
    setText(newText);
    showAlertHandler('Text cleared!', 'success');
  };

  const copyTextHandler = () => {
    navigator.clipboard.writeText(text);
    showAlertHandler('Text copied to clipboard!', 'success');
  };

  const extraSpacesHandler = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    showAlertHandler('Extra spaces removed!', 'success');
  };

  return (
    <div
      className="container"
      style={{ color: mode === 'light' ? '#53595d' : 'white' }}
    >
      <div className="mt-3">
        <h2 className="mb-3">
          Try TextUtils - word counter, character counter, reading time counter
        </h2>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={onChangeHandler}
          style={{
            backgroundColor: mode === 'light' ? 'white' : '#073468',
            color: mode === 'light' ? 'black' : 'white',
          }}
        ></textarea>
        <div className="mt-3">
          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={upperCaseHandler}
            disabled={text.length === 0}
          >
            Convert Uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={lowerCaseHandler}
            disabled={text.length === 0}
          >
            Convert Lowercase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={extraSpacesHandler}
            disabled={text.length === 0}
          >
            Remove extra spaces
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={copyTextHandler}
            disabled={text.length === 0}
          >
            Copy Text
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 my-1"
            onClick={clearTextHandler}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
        </div>
      </div>

      <div className="mt-3">
        <h4 style={{ fontWeight: '600' }}>Your text summary</h4>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{' '}
          words and {text.length} characters
        </p>
        <p>
          {0.004 *
            text.split(' ').filter((element) => element.length !== 0)
              .length}{' '}
          minutes read
        </p>
        <h4 style={{ fontWeight: '600' }}>Preview</h4>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </div>
  );
};

export default TextForm;
