$(document).ready(async function () {
  //connect to metamask wallet
  const web3 = new Web3(
    new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/")
  );

  const ip = new web3.eth.Contract(lp_ABI, lp_contract_address);
  const tokmas = new web3.eth.Contract(tokmas_ABI, tokmas_contract_address);

  const price = await ip.methods.price1CumulativeLast().call();
  const { _reserve0 } = await ip.methods.getReserves().call();
  const totalSupply = await tokmas.methods.totalSupply().call();

  $("#price").html(price);
  $("#lockedPrice").html(_reserve0 / 18);
  $("#totalSupply").html(totalSupply / 6);

  console.log(price, _reserve0, totalSupply);
});
