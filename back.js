function contentLoaded(fn) {

    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }

}


contentLoaded(function () {

    // forms
    document.querySelectorAll('form').forEach(form => {

        form.addEventListener('submit', function (e){

            e.preventDefault();

           if (form.querySelector('input[type="checkbox"]')){
               if (!form.querySelector('input[type="checkbox"]').checked){
                   alert('Пожалуйста, примите пользовательское соглашение');
               } else {
                   let formData = new FormData();
                   if (form.querySelector('input[name="name"]')){
                       formData.append('name', form.querySelector('input[name="name"]').value);
                   }
                   if (form.querySelector('input[name="phone"]')){
                       if (form.querySelector('input[name="phone"]').value.indexOf('_') !== -1){
                           alert('Введите пожалуйста правильный телефон.');
                       } else {
                           formData.append('phone', form.querySelector('input[name="phone"]').value);
                           if (form.querySelector('input[name="email"]')){
                               formData.append('email', form.querySelector('input[name="email"]').value);
                           }
                           if (form.querySelector('#tariffName')){
                               formData.append('tariffName', form.querySelector('#tariffName').value);
                           }
                           if (form.querySelector('#ndsValue')){
                               formData.append('ndsValue', form.querySelector('#ndsValue').value);
                           }
                           if (form.querySelector('#gunValue')){
                               formData.append('gunValue', form.querySelector('#gunValue').value);
                           }
                           fetch(form.action, { // файл-обработчик
                               method: 'POST',
                               body: formData
                           }).then(response => {
                               let result = response.text().then((res) => {
                                   console.log(res);
                                  if (res.trim() === '1'){
                                      document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
                                      document.getElementById('thanks').classList.add('active');
                                      form.querySelectorAll('input').forEach(i => i.value = '');
                                  } else {
                                      alert('Произошла ошибка, обновите пожалуйста страницу и попробуйте еще раз');
                                  }
                               });
                           }).catch(error => console.error(error));
                       }
                       formData.append('phone', form.querySelector('input[name="phone"]').value);
                   }
               }
           } else {
               let formData = new FormData();
               if (form.querySelector('input[name="name"]')){
                   formData.append('name', form.querySelector('input[name="name"]').value);
               }
               if (form.querySelector('input[name="phone"]')){
                   if (form.querySelector('input[name="phone"]').value.indexOf('_') !== -1){
                       alert('Введите пожалуйста правильный телефон.');
                   } else {
                       formData.append('phone', form.querySelector('input[name="phone"]').value);
                       if (form.querySelector('input[name="email"]')){
                           formData.append('email', form.querySelector('input[name="email"]').value);
                       }
                       if (form.querySelector('#tariffName')){
                           formData.append('tariffName', form.querySelector('#tariffName').value);
                       }
                       if (form.querySelector('#ndsValue')){
                           formData.append('ndsValue', form.querySelector('#ndsValue').value);
                       }
                       if (form.querySelector('#gunValue')){
                           formData.append('gunValue', form.querySelector('#gunValue').value);
                       }
                       fetch(form.action, { // файл-обработчик
                           method: 'POST',
                           body: formData
                       }).then(response => {
                           let result = response.text().then((res) => {
                               console.log(res);
                               if (res.trim() === '1'){
                                   document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
                                   document.getElementById('thanks').classList.add('active');
                                   form.querySelectorAll('input').forEach(i => i.value = '');
                               } else {
                                   alert('Произошла ошибка, обновите пожалуйста страницу и попробуйте еще раз');
                               }
                           });
                       }).catch(error => console.error(error));
                   }
                   formData.append('phone', form.querySelector('input[name="phone"]').value);
               }
           }

        });

    });

});
