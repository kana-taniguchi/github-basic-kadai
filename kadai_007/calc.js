//変数numに1以上の整数を代入する
let num = Math.floor(Math.random() * 10)+1;

//変数numの値を出力する（確認用）
console.log(num);

//変数numが3と5の倍数の場合、「3と5の倍数です」という文字列を出力する
if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}

//変数numが3の倍数の場合、「3の倍数です」という文字列を出力する
else if (num % 3 === 0) {
    console.log('3の倍数です');
}

//変数numが5の倍数の場合、「5の倍数です」という文字列を出力する
else if (num % 5 === 0) {
    console.log('5の倍数です');
}

//それ以外の場合は、「変数num」を出力する
else {
    console.log('変数num');
}
