interface reqBody {
    to: string;
    from: string;
    amount: string;
}

export const fetchData = ({ to, from, amount }: reqBody) => {
    let myheaders = new Headers()
    myheaders.append("apikey", "Kcwk3bk38VZzp17qPREjabPNEL5mY089");

    return fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, {
        method: 'GET',
        redirect: 'follow',
        headers: myheaders
    })
}
