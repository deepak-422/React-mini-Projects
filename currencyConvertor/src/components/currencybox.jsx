
export default function CurrencyBox({variable,amt,opt,setopt,setamt}) {
    const currencies=[
      "usd",
      "eur",
      "inr",
      "gbp",
      "jpy",
      "cad",
      "aud",
      "chf",
      "cny",
      "nzd",
      "sek",
      "krw",
      "sgd",
      "nok",
      "mxn",
      "brl",
      "rub",
      "zar",
      "hkd",
      "try",
      "btc",
      "eth",
      "xau",
      "xag"
    ]
    
    
     function handleinput(event){
        setamt(event.target.value);
     }
     function handleopt(event){
        setopt(event.target.value);
     }
  return (
    <div className="bg-white w-120 h-35 rounded-md text-xl ">
      <div className="flex justify-between text-gray-500">
        <span className="p-4">{variable}</span>
        <span className="p-4">Currency Type</span>
      </div>
      <div className="flex justify-between">
        <span className="p-4"><input type="number" value={amt} onChange={handleinput} /></span>
        <span className="p-4">
             <select value={opt} onChange={handleopt} className="bg-gray-200 w-22 rounded-md p-1" >
                  {
                    currencies.map((value,index)=>{
                        return <option key={index} value={value}>{value}</option>
                    })
                  }
             </select>
        </span>
      </div>
    </div>
  );
  
}
