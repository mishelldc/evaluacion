let usuarios = [];

function cargarUsuarios() {
    const cuadrosUsuarios = document.querySelector('.list_tareas');
    cuadrosUsuarios.innerHTML = '';

    usuarios.forEach((usuario, index) => {
        const divUsuario = document.createElement('div');
        divUsuario.classList.add('div_tareas');

        const tareasHTML = usuario.tareas.map(tarea => `<div>${tarea}</div>`).join('');

        divUsuario.innerHTML = `
            <div class="imagen-placeholder">
                <img src="https://c0.klipartz.com/pngpicture/507/702/gratis-png-icono-de-perfil-icono-de-usuario-simple.png" alt="">
            </div>
            <div>
                <p class="texto">${usuario.nombre}</p>
                <p class="correo">${usuario.correo}</p>
            </div>
            <div class="numero">${usuario.contador}</div>
            <button class="btn_sig" data-index="${index}">+</button>
            <div class="nuevo">${tareasHTML}</div>
        `;

        cuadrosUsuarios.appendChild(divUsuario);
    });

    const botonesSig = document.querySelectorAll('.btn_sig');
    botonesSig.forEach((boton) => {
        boton.addEventListener('click', abrirCuestionario);
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
            <input type="text" class="entrada-usuario" placeholder="Usuario">
            <input type="text" class="entrada-correo" placeholder="Correo">
        </div>
        <div class="btn_ok">Enviar</div>
    `;

    const btnCerrar = document.querySelector('.btn_cerrar');
    btnCerrar.addEventListener('click', () => {
        ventanaFormulario.classList.remove('activar_b');
    });

    const btnCrear = document.querySelector('.btn_ok');
    btnCrear.addEventListener('click', () => {
        const usuario = document.querySelector('.entrada-usuario').value;
        const correo = document.querySelector('.entrada-correo').value;

        if (usuario && correo) {
            usuarios.push({ nombre: usuario, correo: correo, tareas: [], contador: 0 });
            cargarUsuarios();
            ventanaFormulario.classList.remove('activar_b');
        } else {
            alert('Por favor ingrese sus datos.');
        }
    });
}

function abrirCuestionario(event) {
    const index = event.target.getAttribute('data-index');
    const ventanaFormulario = document.querySelector('.formulario');
    ventanaFormulario.classList.add('activar_b');

    ventanaFormulario.innerHTML = `
        <div class="btn_cerrar">/</div>
        <div class="div_formulario">
            <input type="text" class="entrada-nueva-tarea" placeholder="Nueva Tarea">
        </div>
        <div class="btn_ok">Enviar</div>
    `;

    const btnCerrar = document.querySelector('.btn_cerrar');
    btnCerrar.addEventListener('click', () => {
        ventanaFormulario.classList.remove('activar_b');
    });

    const btnCrear = document.querySelector('.btn_ok');
    btnCrear.addEventListener('click', () => {
        const nuevaTarea = document.querySelector('.entrada-nueva-tarea').value;

        if (nuevaTarea) {
            usuarios[index].tareas.push(nuevaTarea);
            usuarios[index].contador += 1;
            cargarUsuarios();
            ventanaFormulario.classList.remove('activar_b');
        } else {
            alert('Por favor ingrese la nueva tarea.');
        }
    });
}

cargarUsuarios();
cargarBotones();
