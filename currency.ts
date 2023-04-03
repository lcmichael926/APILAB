import axios from 'axios';

const exchange = async (base: string,symbol: string) => {
  const url = `https://api.apilayer.com/fixer/latest?base=${base}&symbols=${symbol}`;
  const options = {
    url: url,
    headers: {
      apikey: "qfwDEiu8uyN9DZKvGX8cYU66hMGsqK7I"
    }
  };
  try{
    const { data, status } = await axios.get(url, options);
    console.log(`${status}`);
    return data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      return err.message;
    } else {
      return err;
    }
  }
}


try {
  if (process.argv.length < 4) {
    throw 'missing parameter'
  } else {
    const base = process.argv[2].toUpperCase();
    const symbol = process.argv[3].toUpperCase();
    exchange(base,symbol).then((data)=> {
      console.log(`1 ${base} = ${data.rates.HKD.toFixed(2)} ${symbol}`);
      // console.log(data.rates[`${symbol}`]);
    })
  }
} catch (err: any) {
  console.log(`${err} Usage: currency [toSymbols]`)
}
