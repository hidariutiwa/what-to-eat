const chatTextBox = document.getElementById('chat-textbox');
const chatTable = document.getElementById('chat-table-body');
const sendButton = document.getElementById('send-button');

sendButton.onclick = () => {
    //console.log('onClick');
    const userText = chatTextBox.value;
    if(userText === '') {
        return;
    }
    chatTable.innerHTML += `<tr><td><div class="mycomment"><p>${userText}</p></div></td></tr>`;
    chatTextBox.value = '';

    const resNum = Math.floor(Math.random() * 10);
    console.log(resNum);
    const response = responseMaster[resNum];
    console.log(response);
    chatTable.innerHTML += `<tr><td><div class="balloon6"><div class="faceicon"><img src="./img/chef.png" alt=""></div><div class="says"><p>${response}</p></div></div></td></tr>`;
}

const responseMaster = {
    0: 'やっちゃん',
    1: 'なんかようかい',
    2: '何食べる？',
    3: '何食べたい？',
    4: 'よく考えて',
    5: 'シモン',
    6: '今夜はハンバーグよ',
    7: 'お寿司希望ーー',
    8: '焼肉行こー',
    9: 'タイ料理食べタイ'
}