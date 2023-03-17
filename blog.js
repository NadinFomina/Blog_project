let form = document.forms.MyForm;
let element = form.elements.click;
element.addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.body.querySelector('#name');
    if (name.value.length > 6) {
        const user = document.createElement('h2');
        user.textContent = name.value;
        const div = document.body.querySelector('div');
        const section = document.createElement('section');
        const del = document.createElement('img');
        del.src = 'del3.png';
        const like = document.createElement('img');
        like.src = 'like.png';
        const icon = document.createElement('span');
        div.append(section);
        section.append(user);
        icon.append(like);
        icon.append(del);
        icon.className = 'icon';
        const mes = document.createElement('p');
        const chat = document.querySelector('#story');
        const data = document.createElement('span');
        const dataInfo = document.body.querySelector('#date');
        if (dataInfo.value == "") {
            let today = new Date();
            let hour = today.getHours();
            let minute = today.getMinutes();
            let second = today.getSeconds();
            let year = today.getFullYear();
            let month = today.getMonth() + 1;
            let den = today.getDate();
            if (month < 10) {
                month = "0" + month;
            }
            if (den < 10) {
                den = "0" + den;
            }
            if (den == today.getDate() - 1) {
                data.textContent = `вчера  ${year}-${month}-${den}  ${hour}:${minute}:${second}`;
            }
            data.textContent = `сегодня ${year}-${month}-${den}  ${hour}:${minute}:${second}`;
        } else {
            data.textContent = dataInfo.value;
        }
        user.append(data);
        mes.textContent = chat.value;
        section.append(mes);
        section.append(icon);
        del.addEventListener('click', (e) => {
            section.style.display = 'none';
        })
        like.addEventListener('click', (e) => {
            (like.src = 'like.png') ? (like.src ='like_red.png') : (like.src ='like.png');
         
        })

        name.value = '';
        chat.value = '';

    } else {
        alert('Вы ввели неккоретное имя, должно быть больше 5 символов')

    }
})