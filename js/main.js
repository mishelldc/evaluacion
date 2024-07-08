import { tareas } from './data_todo.js';

function cargarTareas() {
    const cuadrosTareas = document.querySelector('.list_tareas');
    cuadrosTareas.innerHTML = ''; 

    tareas.forEach((cadaTarea) => {
        const divTarea = document.createElement('div');
        divTarea.classList.add('div_tareas');

        divTarea.innerHTML = `
            <div class="imagen-placeholder" >
            <img src="https://c0.klipartz.com/pngpicture/507/702/gratis-png-icono-de-perfil-icono-de-usuario-simple.png" alt="">
            </div>
            <div>
                <p class="texto">${cadaTarea.texto}</p>
                <p class="correo">${cadaTarea.correo}</p>
            </div>
            <div class="numero">3</div>
            <button class="btn_sig">+</button>
        `;

        cuadrosTareas.appendChild(divTarea);
    });
}

function cargarBotones() {
    const cajaBtn = document.querySelector('.botones');
    cajaBtn.innerHTML = '<div class="btn_mas">Agregar Nuevo Usuario</div>';

    const btnFormulario = document.querySelector('.btn_mas');
    btnFormulario.addEventListener('click', cargarFormulario);
}

function cargarFormulario() {
    const ventanaFormulario = document.querySelector('.formulario');
    ventanaFormulario.classList.add('activar_b');

    ventanaFormulario.innerHTML = `
        <div class="btn_cerrar">/</div>
        <div class="div_formulario">
            <input type="text" class="entrada-tarea" placeholder="Usuario">
            <input type="text" class="entrada-categoria" placeholder="Correo">
        </div>
        <div class="btn_ok">Enviar</div>
    `;

    const btnCerrar = document.querySelector('.btn_cerrar');
    btnCerrar.addEventListener('click', () => {
        ventanaFormulario.classList.remove('activar_b');
    });

    const btnCrear = document.querySelector('.btn_ok');
    btnCrear.addEventListener('click', () => {
        const usuario = document.querySelector('.entrada-tarea').value;
        const correo = document.querySelector('.entrada-categoria').value;

        if (usuario && correo) {
            tareas.push({ texto: usuario, correo: correo, estado: false });
            cargarTareas();
            ventanaFormulario.classList.remove('activar_b');
        } else {
            alert('Por favor ingrese sus datos.');
        }
    });

   
}

cargarTareas();
cargarBotones();