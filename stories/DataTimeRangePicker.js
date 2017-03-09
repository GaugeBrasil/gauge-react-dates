import React from 'react';
import moment from 'moment';
import { storiesOf } from '@kadira/storybook';

import DateTimeRangePickerWrapper from '../examples/DateTimeRangePickerWrapper';




const TestInput = props => (
  <div style={{ marginTop: 16 }}>
    <input
      {...props}
      type="text"
      style={{
        height: 48,
        width: 284,
        fontSize: 18,
        fontWeight: 200,
        padding: '12px 16px',
      }}
    />
  </div>
);

class TestWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDatePicker: false,
    };
  }

  render() {
    const { showDatePicker } = this.state;
    const display = showDatePicker ? 'block' : 'none';
    return (
      <div>
        <button
          type="button"
          onClick={() => this.setState({ showDatePicker: !showDatePicker })}
        >
          Show me!
        </button>

        <div style={{ display }}>
          <DateTimeRangePickerWrapper />
        </div>
      </div>
    );
  }
}

storiesOf('DateTimeRangePicker (DTRP)', module)
  .addWithInfo('default', () => (
    <DateTimeRangePickerWrapper />
  ))
  .addWithInfo('3 months', () => (
    <DateTimeRangePickerWrapper numberOfMonths={3} />
  ))
  .addWithInfo('hidden with display: none', () => (
    <TestWrapper />
  ))
  .addWithInfo('as part of a form', () => (
    <div>
      <DateTimeRangePickerWrapper />
      <TestInput placeholder="Input 1" />
      <TestInput placeholder="Input 2" />
      <TestInput placeholder="Input 3" />
    </div>
  ))
  .addWithInfo('non-english locale', () => {
    moment.locale('zh-cn');
    return (
      <DateTimeRangePickerWrapper
        showClearDates
        startDatePlaceholderText="入住日期"
        endDatePlaceholderText="退房日期"
        monthFormat="YYYY[年]MMMM"
        phrases={{
          closeDatePicker: '关闭',
          clearDates: '清除日期',
        }}
      />
    );
  });
