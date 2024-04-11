// btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const parentList =document.getElementById('text');

addBtn.addEventListener('click', () => {
    //li要素を新しく追加する
    const childList =document.createElement('text');
    childList.textContent = 'ボタンをクリックしました';

    // parentListの最初の子要素を削除する
    parentList.removeChild(parentList.firstChild);

    //li要素を追加する
    parentList.appendChild(childList);

});
