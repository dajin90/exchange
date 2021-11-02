import React, { useEffect, useState } from 'react';
import {
  Select,
  MenuItem,
  Box,
  Container,
  InputLabel,
  Button,
  TextField,
  makeStyles
} from '@material-ui/core';

import Page from 'src/components/Page';
import { useDispatch, useSelector } from 'react-redux';
import { currencyRates } from 'src/actions/currencyActions';
import { CURRENCY_TYPE, INIT_BALANCE } from '../../constants';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    backgroundColor: '#eff2f7',
    display: 'flex',
    height: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 80,
    paddingTop: 80
  },
  currencyContainer: {
    position: 'relative'
  },
  titleText: {
    width: '100%',
    color: '#0000ff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30
  },
  topPanel: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#ffffff',
    padding: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120
  },
  bottomPanel: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#d0d0d0',
    padding: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120
  },
  exchangeNotificationWrapper: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    top: 160,
    width: 150,
    left: 'calc(50% - 70px)',
    border: '1px solid #00ff00',
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    zIndex: 10,
  },
  balanceText: {
    color: '#1e1e1e',
    fontSize: 14,
    marginTop: 15
  },
  exchangeButton: {
    marginTop: 10,
  },
  currencyInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  operaterText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#1e1e1e',
    marginRight: 15
  },
  valueText: {
    width: 100,
  },
  input: {
    textAlign: 'center'
  },
  errorText: {
    color: '#ff0000',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'right'
  }
}));

export const getCurrencyCharater = (type) => {
  if (type === CURRENCY_TYPE[0]) {
    return '€';
  } if (type === CURRENCY_TYPE[1]) {
    return '$';
  }
  return '£';
};

export const fixDecimal = (value) => {
  if (value) {
    if (value.toFixed(4).indexOf('.0000') >= 0) {
      return value.toFixed(0);
    } else {
      return value.toFixed(4);
    }
  }
  return '';
}

function ExchangeView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { rates } = useSelector((state) => state.currency);

  const [fromType, setFromType] = useState(CURRENCY_TYPE[0]);
  const [toType, setToType] = useState(CURRENCY_TYPE[1]);
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [balance, setBalance] = useState(INIT_BALANCE);
  const [fromExceed, setFromExceed] = useState(false);

  const getRates = async (type) => {
    await dispatch(currencyRates(type));
  };

  useEffect(() => {
    getRates(fromType);
  }, []);

  useEffect(() => {
    if (fromValue !== '') {
      setToValue(fixDecimal(rates[toType] * Number(fromValue)));
      if (Number(fromValue) > balance[fromType]) {
        setFromExceed(true);
      } else {
        setFromExceed(false);
      }
    } else {
      setFromExceed(false);
    }
  }, [rates]);

  useEffect(() => {
    if (fromValue !== '') {
      if (Number(fromValue) > balance[fromType]) {
        setFromExceed(true);
      } else {
        setFromExceed(false);
      }
    } else {
      setFromExceed(false);
    }
  }, [fromValue]);

  useEffect(() => {
    if (fromValue !== '') {
      if (Number(fromValue) > balance[fromType]) {
        setFromExceed(true);
      } else {
        setFromExceed(false);
      }
    } else {
      setFromExceed(false);
    }
  }, [toValue]);

  const onChangeFromType = (event) => {
    const type = event.target.value;
    getRates(type);
    setFromType(type);
  };

  const onChangeToType = (event) => {
    const type = event.target.value;
    setToType(type);
    if (rates[type]) {
      const convertedValue = Number(toValue) / rates[type];
      setFromValue(fixDecimal(convertedValue));
    }
  };

  const onChangeFromValue = (event) => {
    const { value } = event.target;
    setFromValue(value);
    setToValue(fixDecimal(rates[toType] * Number(value)));
  };

  const onChangeToValue = (event) => {
    const { value } = event.target;
    setToValue(value);
    if (rates[toType]) {
      const convertedValue = Number(value) / rates[toType];
      setFromValue(fixDecimal(convertedValue));
    }
  };

  const onExchange = () => {
    if (!fromExceed) {
      const _balance = { ...balance };
      _balance[fromType] = Number((_balance[fromType] - Number(fromValue)).toFixed(2));
      _balance[toType] = Number((_balance[toType] + Number(toValue)).toFixed(2));
      setBalance(_balance);
      if (fromValue !== '') {
        if (Number(fromValue) > _balance[fromType]) {
          setFromExceed(true);
        } else {
          setFromExceed(false);
        }
      }
    }
  };

  return (
    <Page
      className={classes.root}
      title="Exchange"
    >
      <Container maxWidth="md">
        <Box mb={8} className={classes.currencyContainer}>
          <div className={classes.titleText}>Currency Exchange</div>
          <div className={classes.topPanel}>
            <div>
              <Select
                id="currency-from"
                value={fromType}
                onChange={onChangeFromType}
              >
                {CURRENCY_TYPE.map((item, index) => (
                  <MenuItem value={item} key={`from_${index.toString()}`}>{item}</MenuItem>
                ))}
              </Select>
              <InputLabel className={classes.balanceText}>
                Balance:
                {' '}
                {getCurrencyCharater(fromType)}
                {balance[fromType]}
              </InputLabel>
            </div>
            <div>
              <div className={classes.currencyInput}>
                <InputLabel className={classes.operaterText}>−</InputLabel>
                <TextField
                  className={classes.valueText}
                  id="from-value"
                  variant="standard"
                  value={fromValue}
                  onChange={onChangeFromValue}
                  inputProps={{ style: { textAlign: 'right', fontSize: 24 } }}
                />
              </div>
              {fromExceed && <InputLabel className={classes.errorText}>Exceeds balance</InputLabel>}
            </div>
          </div>
          <div className={classes.exchangeNotificationWrapper}>
            {getCurrencyCharater(fromType)}1 = {getCurrencyCharater(toType)}{rates[toType]}
          </div>
          <div className={classes.bottomPanel}>
            <div>
              <Select
                id="currency-to"
                value={toType}
                onChange={onChangeToType}
              >
                {CURRENCY_TYPE.map((item, index) => (
                  <MenuItem value={item} key={`to_${index.toString()}`}>{item}</MenuItem>
                ))}
              </Select>
              <InputLabel className={classes.balanceText}>
                Balance:
                {' '}
                {getCurrencyCharater(toType)}
                {balance[toType]}
              </InputLabel>
            </div>
            <div>
              <div className={classes.currencyInput}>
                <InputLabel className={classes.operaterText}>+</InputLabel>
                <TextField
                  className={classes.valueText}
                  id="to-value"
                  variant="standard"
                  value={toValue}
                  onChange={onChangeToValue}
                  inputProps={{ style: { textAlign: 'right', fontSize: 24 } }}
                />
              </div>
            </div>

          </div>
          <Button
            className={classes.exchangeButton}
            color="primary"
            variant="contained"
            size="small"
            onClick={onExchange}
          >
            Exchange
          </Button>
        </Box>
      </Container>
    </Page>
  );
}

export default ExchangeView;
